cc.Class({
    extends: cc.Component,

    properties: {
        wordNode: cc.Node,
    },

    onLoad: function () {
        // test
        var date = new Date();
        var s = "广告招商中~咨询请添加官方唯一微信公众号XXXXXXX";
        this.showString(s);
        
        
        var deltaX = -772;
        var moveBy = cc.moveBy(10, cc.p(deltaX, 0));
        var callFunc = cc.callFunc(()=>{
            this.wordNode.setPosition(cc.p(0, 0));
        })
        this.wordNode.runAction(cc.repeatForever(cc.sequence(moveBy, callFunc)));
    },

    showString: function (s) {
        this.wordNode.getComponent(cc.Label).string = s;
    },
});
