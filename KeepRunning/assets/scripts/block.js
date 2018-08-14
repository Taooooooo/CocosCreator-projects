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
        // 暂存 Game 对象的引用
        game: {
            default: null,
            serializable: false
        }
    },

    setDropAction: function () {
        // 下落
        return cc.moveBy(0.7, 0, -415).easing(cc.easeCubicActionOut());
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 初始化下落动作
        this.dropAction = this.setDropAction();
        this.node.runAction(this.dropAction);
    },

    getPlayerDistance: function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    start () {

    },

    update:function (dt) {
        this.node.x -= 3;
        // 超出屏幕自动销毁
        if(this.node.x < -(cc.winSize.width/2 + 25)) {
            this.node.destroy();
        }
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getPlayerDistance() < 37) {
            this.game.gameOver();
            return;
        }
    },
});
