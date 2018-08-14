(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Start.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0cfa2oZskBAf4UfIVfBv/Ss', 'Start', __filename);
// scripts/Start.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    start: function start() {},
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
        //# sourceMappingURL=Start.js.map
        