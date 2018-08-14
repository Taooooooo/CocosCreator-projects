// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var Base = cc._RendererInSG;

var MaskType = cc.Enum({
    RECT: 0,
    ELLIPSE: 1,
    IRR:2,
    //SP:3
});

var Mask_extend = cc.Class({

    extends: Base,
    editor: {
        requireComponent: cc.PolygonCollider,
    },
    properties: {
    
        _clippingStencil: {
            default: null,
            serializable: false,
        },
        
        _Case:null,

        _type:2,
        _segements: 64,
        _area:{
            default: function () {
                 return [cc.v2(-50, -50), cc.v2(-50, 50), cc.v2(50, 50), cc.v2(50, -50)]; 
            },
            type: [cc.Vec2]
        },
        
        live: {
        default: true,
        tooltip: "是否实时刷新多边形（编辑时开启，运行看需求，主要怕影响性能？）",
        
        },
        
        //rev: {
        //default: false,
        //tooltip: "是否反转",
        
        //},

        type: {
            get: function() {
                return this._type;
            },
            set: function(value) {
                this._type = value;
                this._refreshStencil();
            },
            type: MaskType
        },

        segements: {
            get: function() {
                return this._segements;
            },
            set: function(value) {
                if(value < 3) value = 3;
                this._segements = value;
                this._refreshStencil();
            },
            type: cc.Integer
        },
        
    },

    statics: {
        Type: MaskType,
    },
    
    
    lateUpdate: function () {
        if(this.live){
            this._refreshStencil();
        }

    },

    _createSgNode: function () {
        this._clippingStencil = new cc.DrawNode();
        if (CC_JSB) {
            this._clippingStencil.retain();
        }
        this._Case=new cc.ClippingNode(this._clippingStencil);
        this._Case.setInverted(0);
        this._Case.setAlphaThreshold(1);
        
        //Case.setStencil(this.A)
        //cc.log(Case.getStencil())
        
        return this._Case;
    },

    _initSgNode: function () {},

    _hitTest: function (point) {
        var size = this.node.getContentSize(),
            w = size.width,
            h = size.height,
            trans = this.node.getNodeToWorldTransform();

        if (this._type === MaskType.RECT) {
            var rect = cc.rect(0, 0, w, h);
            cc._rectApplyAffineTransformIn(rect, trans);
            var left = point.x - rect.x,
                right = rect.x + rect.width - point.x,
                bottom = point.y - rect.y,
                top = rect.y + rect.height - point.y;
            if (left >= 0 && right >= 0 && top >= 0 && bottom >= 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            var a = w/2, b = h/2;
            var cx = trans.a * a + trans.c * b + trans.tx;
            var cy = trans.b * a + trans.d * b + trans.ty;
            var px = point.x - cx, py = point.y - cy;
            if (px * px / (a * a) + py * py / (b * b) < 1) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    onEnable: function () {
        this._refreshStencil();
        this._super();
        this.node.on('size-changed', this._refreshStencil, this);
        this.node.on('anchor-changed', this._refreshStencil, this);
        

    },

    onDisable: function () {
        this._super();
        this.node.off('size-changed', this._refreshStencil, this);
        this.node.off('anchor-changed', this._refreshStencil, this);
    },
    
    _calculateCircle: function(center, radius, segements) {
        var polies =[];
        var anglePerStep = Math.PI * 2 / segements;
        for(var step = 0; step < segements; ++ step) {
            polies.push(cc.v2(radius.x * Math.cos(anglePerStep * step) + center.x,
                radius.y * Math.sin(anglePerStep * step) + center.y));
        }

        return polies;
    },

    _refreshStencil: function () {
        
        this._area = this.getComponent(cc.PolygonCollider).points;
        
        var contentSize = this.node.getContentSize();
        var anchorPoint = this.node.getAnchorPoint();
        var width = contentSize.width;
        var height = contentSize.height;
        var x = - width * anchorPoint.x;
        var y = - height * anchorPoint.y;
        var color = cc.color(255, 255, 255, 0);
        this._clippingStencil.clear();
        if(this._type === MaskType.RECT) {
            var rectangle = [ cc.v2(x, y),
                cc.v2(x + width, y),
                cc.v2(x + width, y + height),
                cc.v2(x, y + height) ];
            this._clippingStencil.drawPoly(rectangle, color, 0, color);
        
        } else if(this._type === MaskType.IRR){
            
            this._clippingStencil.drawPoly(this._area, color, 0, color);
            
        } else if(this._type === MaskType.SP){
            
            this._clippingStencil=this.A;
            
        } else {
            var center = cc.v2(x + width /2, y+height/2);
            var radius = {x: width/2, y: height/2};
            var segements = this._segements;
            this._clippingStencil.drawPoly(this._calculateCircle(center, radius, segements), color, 0, color);
        }
    }
});

if (CC_JSB) {
    // override onDestroy
    Mask_extend.prototype.__superOnDestroy = Base.prototype.onDestroy;
    Mask_extend.prototype.onDestroy = function () {
        this.__superOnDestroy();
        this._clippingStencil.release();
        this._clippingStencil = null;
    };
}