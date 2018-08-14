// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var cache = require("cache");
cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了方块预制资源
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 地面节点，用于确定方块生成的高度
        ground: {
            default: null,
            type: cc.Node
        },
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player: {
            default: null,
            type: cc.Node
        },
        // distance label 的引用
        distanceDisplay: {
            default: null,
            type: cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 获取地平面的 y 轴坐标
        this.groundY = this.ground.y + this.ground.height/2;
        // 生成一个新的方块
        this.spawnNewBlock();
        // 初始距离
        this.distance = 0;
        // 初始化计时器
        this.timer = 0;
        // 每 second 秒生成一个方块
        this.second = 1;
        this.dropNewBlock();
        // 计数，每秒 timer + 1
        this.counter();
    },

    dropNewBlock: function() {
        this.schedule(function() {
            // 生成一个新的方块
            this.spawnNewBlock();
        }, this.second);
    },

    counter: function() {
        this.schedule(function() {
            this.timer += 1;
        }, 1);
    },

    changeSecond: function () {
        switch(this.timer/30) {
            case 0:
                this.second = 1;
                break;
            case 1:
                this.second = 0.9;
                break;
            case 2:
                this.second = 0.8;
                break;
            case 3:
                this.second = 0.7;
                break;
            case 4:
                this.second = 0.6;
                break;
            case 5:
                this.second = 0.5;
                break;
        }
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
        if(randX < -250 && randX > -350) {
            randX -= this.node.width;
        }
        // 返回方块坐标
        return cc.p(randX, randY);
    },

    gainDistance: function () {
        this.distance += (this.timer + 1) * 1;
        // 更新 distanceDisplay Label 的文字
        this.distanceDisplay.string = 'Distance: ' + this.distance.toString();
    },

    start () {

    },

    update: function (dt) {
        // 累加距离
        this.gainDistance();
    },

    gameOver: function () {
        cache.distance = this.distance;
        this.player.stopAllActions(); //停止 player 节点的动作
        cc.director.loadScene('end');
        
    },
});
