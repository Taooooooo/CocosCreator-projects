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
        // distance label 的引用
        distanceDisplay: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var cache = require("cache");
        var distance =  cache.distance;
        // 更新 diatanceDisplay Label 的文字
        this.distanceDisplay.string = 'Distance: ' + distance;
    },

    clickToBack(){
        cc.director.loadScene("start");
    },

    clickToGame(){
        cc.director.loadScene("game");
    },

    // update (dt) {},
});
