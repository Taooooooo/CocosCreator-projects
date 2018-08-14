var Poker = require("Poker");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        this.choosePoker();
    },

    start () {

    },

    // 点击（触摸）选牌
    choosePoker: function() {
        // 使用 condition 状态判断是否选中
        var condition = [];
        for (var i = 0; i < 33; i ++) {
            condition.push(-1);
        }

        Poker._pokers[0].on(cc.Node.EventType.TOUCH_START, function () {
            condition[0] += 1;
            var node = Poker._pokers[0];
            if (condition[0] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[1].on(cc.Node.EventType.TOUCH_START, function () {
            condition[1] += 1;
            var node = Poker._pokers[1];
            if (condition[1] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[2].on(cc.Node.EventType.TOUCH_START, function () {
            condition[2] += 1;
            var node = Poker._pokers[2];
            if (condition[2] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[3].on(cc.Node.EventType.TOUCH_START, function () {
            condition[3] += 1;
            var node = Poker._pokers[3];
            if (condition[3] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[4].on(cc.Node.EventType.TOUCH_START, function () {
            condition[4] += 1;
            var node = Poker._pokers[4];
            if (condition[4] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[5].on(cc.Node.EventType.TOUCH_START, function () {
            condition[5] += 1;
            var node = Poker._pokers[5];
            if (condition[5] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[6].on(cc.Node.EventType.TOUCH_START, function () {
            condition[6] += 1;
            var node = Poker._pokers[6];
            if (condition[6] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[7].on(cc.Node.EventType.TOUCH_START, function () {
            condition[7] += 1;
            var node = Poker._pokers[7];
            if (condition[7] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[8].on(cc.Node.EventType.TOUCH_START, function () {
            condition[8] += 1;
            var node = Poker._pokers[8];
            if (condition[8] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[9].on(cc.Node.EventType.TOUCH_START, function () {
            condition[9] += 1;
            var node = Poker._pokers[9];
            if (condition[9] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[10].on(cc.Node.EventType.TOUCH_START, function () {
            condition[10] += 1;
            var node = Poker._pokers[10];
            if (condition[10] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
        
        Poker._pokers[11].on(cc.Node.EventType.TOUCH_START, function () {
            condition[11] += 1;
            var node = Poker._pokers[11];
            if (condition[11] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[12].on(cc.Node.EventType.TOUCH_START, function () {
            condition[12] += 1;
            var node = Poker._pokers[12];
            if (condition[12] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[13].on(cc.Node.EventType.TOUCH_START, function () {
            condition[13] += 1;
            var node = Poker._pokers[13];
            if (condition[13] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[14].on(cc.Node.EventType.TOUCH_START, function () {
            condition[14] += 1;
            var node = Poker._pokers[14];
            if (condition[14] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[15].on(cc.Node.EventType.TOUCH_START, function () {
            condition[15] += 1;
            var node = Poker._pokers[15];
            if (condition[15] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[16].on(cc.Node.EventType.TOUCH_START, function () {
            condition[16] += 1;
            var node = Poker._pokers[16];
            if (condition[16] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[17].on(cc.Node.EventType.TOUCH_START, function () {
            condition[17] += 1;
            var node = Poker._pokers[17];
            if (condition[17] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[18].on(cc.Node.EventType.TOUCH_START, function () {
            condition[18] += 1;
            var node = Poker._pokers[18];
            if (condition[18] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[19].on(cc.Node.EventType.TOUCH_START, function () {
            condition[19] += 1;
            var node = Poker._pokers[19];
            if (condition[19] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[20].on(cc.Node.EventType.TOUCH_START, function () {
            condition[20] += 1;
            var node = Poker._pokers[20];
            if (condition[20] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[21].on(cc.Node.EventType.TOUCH_START, function () {
            condition[21] += 1;
            var node = Poker._pokers[21];
            if (condition[21] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[22].on(cc.Node.EventType.TOUCH_START, function () {
            condition[22] += 1;
            var node = Poker._pokers[22];
            if (condition[22] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[23].on(cc.Node.EventType.TOUCH_START, function () {
            condition[23] += 1;
            var node = Poker._pokers[23];
            if (condition[23] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);

        Poker._pokers[24].on(cc.Node.EventType.TOUCH_START, function () {
            condition[24] += 1;
            var node = Poker._pokers[24];
            if (condition[24] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);


        Poker._condition = condition;
    },

    // update (dt) {},
});
