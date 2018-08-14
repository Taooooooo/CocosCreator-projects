

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function() {

    },
    
    start: function () {

    },
    // 点击准备按钮
    onClickReady: function() {
        cc.director.loadScene("Game");
    },

    // update (dt) {},
});
