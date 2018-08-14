(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/End.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd628fbBHu9Gep+VJGa9ok06', 'End', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=End.js.map
        