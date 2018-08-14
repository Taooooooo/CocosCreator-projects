"use strict";
cc._RF.push(module, '0cfa2oZskBAf4UfIVfBv/Ss', 'Start');
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