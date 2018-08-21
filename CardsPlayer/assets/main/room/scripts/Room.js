

cc.Class({
    extends: cc.Component,

    properties: {
        setting: {
            default: null,
            type: cc.Prefab
        },
        user: {
            default: null,
            type: cc.Prefab
        },
    },

    onLoad: function() {

    },
    
    start: function () {

    },

    onSettingClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.setting);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onUserClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.user);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    // 点击准备按钮
    onClickReady: function() {
        cc.director.loadScene("Game");
    },

    onClickReturn: function() {
        cc.director.loadScene("Hall");
    },

    // update (dt) {},
});
