// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    setJumpAction: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(0.3, cc.p(0, 50)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(0.3, cc.p(0, -50)).easing(cc.easeCubicActionIn());
        // 
        var slip = cc.moveBy(1, cc.p(-100, -100*Math.tan(10 * (2*Math.PI/360)))).easing(cc.easeCubicActionIn());
        // 不断重复
        return cc.repeatForever(cc.sequence(cc.repeat(cc.sequence(jumpUp, jumpDown),2),slip));
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },

    start () {

    },

    update: function(dt) {
        if(this.node.x <= 135){
            this.node.x += 1;
            this.node.y += 1 * Math.tan(10 * (2*Math.PI/360));
        }
    },
});
