cc.Class({
    extends: cc.Component,

    properties: {
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },

    onLoad () {
    },

    start () {
        var Cache = require("Cache");
        var score =  Cache.score;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + score;
    },

    onClick(){
        cc.director.loadScene("game");
    },

});