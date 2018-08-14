"use strict";
cc._RF.push(module, 'd628fbBHu9Gep+VJGa9ok06', 'End');
// scripts/End.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {},
    start: function start() {
        var Cache = require("Cache");
        var score = Cache.score;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + score;
    },
    onClick: function onClick() {
        cc.director.loadScene("game");
    }
});

cc._RF.pop();