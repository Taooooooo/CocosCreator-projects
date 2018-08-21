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
        setting: {
            default: null,
            type: cc.Prefab
        },
        playway: {
            default: null,
            type: cc.Prefab
        },
        message: {
            default: null,
            type: cc.Prefab
        },
        share: {
            default: null,
            type: cc.Prefab
        },
        feedback: {
            default: null,
            type: cc.Prefab
        },
        user: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onSettingClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.setting);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onPlaywayClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.playway);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onMessageClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.message);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onShareClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.share);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onFeedbackClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.feedback);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onUserClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.user);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    start () {

    },

    onCilckLandlord: function() {
        cc.director.loadScene("Room");
    },

    // update (dt) {},
});
