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
        // 这个属性引用了方块预制资源
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        // 生成一个新的方块
        this.spawnNewBlock();
        // 每 second 秒生成一个方块
        this.second = 0.3;
        this.dropNewBlock();
    },

    dropNewBlock: function() {
        this.schedule(function() {
            // 生成一个新的方块
            this.spawnNewBlock();
        }, this.second);
    },

    spawnNewBlock: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newBlock = cc.instantiate(this.blockPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newBlock);
        // 为方块设置一个随机位置
        newBlock.setPosition(this.getNewBlockPosition());
        newBlock.getComponent('block').game = this;
    },

    getNewBlockPosition: function () {
        var randX = 0;
        // var randY = -89;
        var randY = 326;
        // 根据屏幕宽度，随机得到一个方块 x 坐标
        var maxX = this.node.width/2;
        randX = cc.randomMinus1To1() * maxX;
        // 限制方块的生成范围
        if(randX < this.player.x + 100 && randX > this.player.x - 100) {
            randX -= this.node.width;
        }
        // 返回方块坐标
        return cc.p(randX, randY);
    },

    start () {

    },
    onClick(){
        cc.director.loadScene("game");
    },

    // update (dt) {},
});
