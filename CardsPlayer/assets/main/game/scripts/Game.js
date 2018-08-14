var Poker = require("Poker");


cc.Class({
    extends: cc.Component,

    properties: {
        target: {
          default: null,
          type: cc.Node,
        },
        givepokers: {
            default: null,
            type: cc.Node,
        },
        number_1: cc.Node,
        number_2: cc.Node,
        number_3: cc.Node,
        number_4: cc.Node,
        number_5: cc.Node,
        number_6: cc.Node,
        number_7: cc.Node,
        number_8: cc.Node,
        number_9: cc.Node,
        number_10: cc.Node,
        number_11: cc.Node,
        number_12: cc.Node,
        number_13: cc.Node,

        number_r1: cc.Node,
        number_r2: cc.Node,
        number_r3: cc.Node,
        number_r4: cc.Node,
        number_r5: cc.Node,
        number_r6: cc.Node,
        number_r7: cc.Node,
        number_r8: cc.Node,
        number_r9: cc.Node,
        number_r10: cc.Node,
        number_r11: cc.Node,
        number_r12: cc.Node,
        number_r13: cc.Node,

        flower_1: cc.Node,
        flower_2: cc.Node,
        flower_3: cc.Node,
        flower_4: cc.Node,

        clown_small: cc.Node,
        clown_big: cc.Node,

        point_one: cc.Node,
        point_two: cc.Node,
        point_three: cc.Node,
        t_point_one: cc.Node,
        t_point_two: cc.Node,
        t_point_three: cc.Node,
        landlordsign_1: cc.Node,
        landlordsign_2: cc.Node,
        landlordsign_3: cc.Node,
        landlordsign_4: cc.Node,
    },

    onLoad: function() {
        this.setGivePokersAction();
        this.givePokers();
        this.timer = 0;
        this.rushLandlord();
    },
    
    start: function () {
        // 使用计时器，延迟显示手牌
        this.schedule(function() {
            this.show();
        }, 0.1, 24, 0.3);// 间隔0.1s，重复24次，延迟0.3s开始
    },

    // sort 排序方法
    sortNumber: function(a, b) {
        return a - b;// 从小到大
    },

    // 发牌
    givePokers: function() {
        // 10 * y + x
        var poker = [
            11,12,13,14,
            21,22,23,24,
            31,32,33,34,
            41,42,43,44,
            51,52,53,54,
            61,62,63,64,
            71,72,73,74,
            81,82,83,84,
            91,92,93,94,
            101,102,103,104,
            111,112,113,114,
            121,122,123,124,
            131,132,133,134,
            141,142,

            11,12,13,14,
            21,22,23,24,
            31,32,33,34,
            41,42,43,44,
            51,52,53,54,
            61,62,63,64,
            71,72,73,74,
            81,82,83,84,
            91,92,93,94,
            101,102,103,104,
            111,112,113,114,
            121,122,123,124,
            131,132,133,134,
            141,142
        ];
        poker.sort(this.sortNumber);
        // 玩家手牌
        var player1 = [];
        var player2 = [];
        var player3 = [];
        var player4 = [];
        // 底牌8张
        var last = [];
        // 生成底牌
        for (var i = 0; i <= 7; i ++) {
            var j = 108 - i;
            var num = Math.floor(Math.random() * j);
            last.push(poker[num]);
            poker.splice(num, 1);
            poker.sort(this.sortNumber);
        }
        // 生成 player1 手牌
        for (var i = 0; i <= 24; i ++) {
            var j = 100 - i;
            var num = Math.floor(Math.random() * j);
            player1.push(poker[num]);
            poker.splice(num, 1);
            poker.sort(this.sortNumber);
        }
        // 生成 player2 手牌
        for (var i = 0; i <= 24; i ++) {
            var j = 75 - i;
            var num = Math.floor(Math.random() * j);
            player2.push(poker[num]);
            poker.splice(num, 1);
            poker.sort(this.sortNumber);
        }
        // 生成 player3 手牌
        for (var i = 0; i <= 24; i ++) {
            var j = 50 - i;
            var num = Math.floor(Math.random() * j);
            player3.push(poker[num]);
            poker.splice(num, 1);
            poker.sort(this.sortNumber);
        }
        // 生成 player4 手牌
        for (var i = 0; i <= 24; i ++) {
            var j = 25 - i;
            var num = Math.floor(Math.random() * j);
            player4.push(poker[num]);
            poker.splice(num, 1);
            poker.sort(this.sortNumber);
        }

        /*
        for (var i = 0; i < 100; i ++) {
            if (i % 4 == 0) player1.push(poker[i]);
            if (i % 4 == 1) player2.push(poker[i]);
            if (i % 4 == 2) player3.push(poker[i]);
            if (i % 4 == 3) player4.push(poker[i]);
        }
        */

        // player 手牌排序
        player1.sort(this.sortNumber);
        player2.sort(this.sortNumber);
        player3.sort(this.sortNumber);
        player4.sort(this.sortNumber);

        this._pokers = [];
        for (var i = 0; i <= 24; i ++) {
            var arr = player1[i];
            Poker._player1 = player1;
            var y = parseInt(arr/10);
            var x = arr - 10 * y;
            this.setPoker(x, y);
            // 克隆
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            var x = 175 + i * 32;
            node.parent = scene;
            node.setPosition(x, 160);
            // 添加到数组
            this._pokers.push(node);
            Poker._pokers = this._pokers;
            // 通过调节透明度延迟显示
            var len = this._pokers.length;
            this._pokers[len - 1].opacity = 0;
        }
    },

    // 逐张显示手牌
    show: function() {
        this._pokers[this.timer].opacity = 255;
        this.timer += 1;
    },


    // 发牌动作
    setGivePokersAction: function() {
        var toPlayer01 = cc.moveTo(0.01, 0, -200);
        var toPlayer02 = cc.moveTo(0.01, 530, 120);
        var toPlayer03 = cc.moveTo(0.01, -590, 120);
        var toPlayer04 = cc.moveTo(0.01, -120, 300);
        var back = cc.moveTo(0.01, 0, 0);
        var disapear = cc.moveTo(0.01, 0, 500);
        var giveAction = cc.repeat(cc.sequence(toPlayer01, back, toPlayer02, back, toPlayer03, back, toPlayer04, back, disapear),25);
        this.givepokers.runAction(giveAction);
    },

    /**************
    
    通过调节透明度，根据[x,y]显示花色
    红心：x = 1，
    方片：x = 2，
    黑桃：x = 3，
    梅花：x = 4，
    A ～ K：y = 1 ～ 13，
    小怪：y = 14，x = 1，
    大怪：y = 14，x = 2

    **************/
    setPoker: function(x, y) {
        // 红心
        if (x == 1) {
            this.flower_1.opacity = 255;
            this.flower_2.opacity = 0;
            this.flower_3.opacity = 0;
            this.flower_4.opacity = 0;
            this.clown_small.opacity = 0;
            this.clown_big.opacity = 0;

            this.number_1.opacity = 0;
            this.number_2.opacity = 0;
            this.number_3.opacity = 0;
            this.number_4.opacity = 0;
            this.number_5.opacity = 0;
            this.number_6.opacity = 0;
            this.number_7.opacity = 0;
            this.number_8.opacity = 0;
            this.number_9.opacity = 0;
            this.number_10.opacity = 0;
            this.number_11.opacity = 0;
            this.number_12.opacity = 0;
            this.number_13.opacity = 0;
            if (y == 1) {
                this.number_r1.opacity = 255;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 2) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 255;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 3) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 255;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 4) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 255;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 5) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 255;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 6) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 255;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 7) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 255;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 8) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 255;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 9) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 255;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 10) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 255;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 11) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 255;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 12) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 255;
                this.number_r13.opacity = 0;
            }
            if (y == 13) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 255;
            }
        }
        // 方片
        if (x == 2) {
            this.flower_1.opacity = 0;
            this.flower_2.opacity = 255;
            this.flower_3.opacity = 0;
            this.flower_4.opacity = 0;
            this.clown_small.opacity = 0;
            this.clown_big.opacity = 0;

            this.number_1.opacity = 0;
            this.number_2.opacity = 0;
            this.number_3.opacity = 0;
            this.number_4.opacity = 0;
            this.number_5.opacity = 0;
            this.number_6.opacity = 0;
            this.number_7.opacity = 0;
            this.number_8.opacity = 0;
            this.number_9.opacity = 0;
            this.number_10.opacity = 0;
            this.number_11.opacity = 0;
            this.number_12.opacity = 0;
            this.number_13.opacity = 0;
            if (y == 1) {
                this.number_r1.opacity = 255;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 2) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 255;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 3) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 255;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 4) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 255;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 5) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 255;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 6) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 255;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 7) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 255;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 8) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 255;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 9) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 255;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 10) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 255;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 11) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 255;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 0;
            }
            if (y == 12) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 255;
                this.number_r13.opacity = 0;
            }
            if (y == 13) {
                this.number_r1.opacity = 0;
                this.number_r2.opacity = 0;
                this.number_r3.opacity = 0;
                this.number_r4.opacity = 0;
                this.number_r5.opacity = 0;
                this.number_r6.opacity = 0;
                this.number_r7.opacity = 0;
                this.number_r8.opacity = 0;
                this.number_r9.opacity = 0;
                this.number_r10.opacity = 0;
                this.number_r11.opacity = 0;
                this.number_r12.opacity = 0;
                this.number_r13.opacity = 255;
            }
        }
        // 黑桃
        if (x == 3) {
            this.flower_1.opacity = 0;
            this.flower_2.opacity = 0;
            this.flower_3.opacity = 255;
            this.flower_4.opacity = 0;
            this.clown_small.opacity = 0;
            this.clown_big.opacity = 0;

            this.number_r1.opacity = 0;
            this.number_r2.opacity = 0;
            this.number_r3.opacity = 0;
            this.number_r4.opacity = 0;
            this.number_r5.opacity = 0;
            this.number_r6.opacity = 0;
            this.number_r7.opacity = 0;
            this.number_r8.opacity = 0;
            this.number_r9.opacity = 0;
            this.number_r10.opacity = 0;
            this.number_r11.opacity = 0;
            this.number_r12.opacity = 0;
            this.number_r13.opacity = 0;
            if (y == 1) {
                this.number_1.opacity = 255;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 2) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 255;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 3) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 255;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 4) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 255;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 5) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 255;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 6) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 255;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 7) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 255;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 8) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 255;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 9) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 255;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 10) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 255;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 11) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 255;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 12) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 255;
                this.number_13.opacity = 0;
            }
            if (y == 13) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 255;
            }
        }
        // 梅花
        if (x == 4) {
            this.flower_1.opacity = 0;
            this.flower_2.opacity = 0;
            this.flower_3.opacity = 0;
            this.flower_4.opacity = 255;
            this.clown_small.opacity = 0;
            this.clown_big.opacity = 0;

            this.number_r1.opacity = 0;
            this.number_r2.opacity = 0;
            this.number_r3.opacity = 0;
            this.number_r4.opacity = 0;
            this.number_r5.opacity = 0;
            this.number_r6.opacity = 0;
            this.number_r7.opacity = 0;
            this.number_r8.opacity = 0;
            this.number_r9.opacity = 0;
            this.number_r10.opacity = 0;
            this.number_r11.opacity = 0;
            this.number_r12.opacity = 0;
            this.number_r13.opacity = 0;
            if (y == 1) {
                this.number_1.opacity = 255;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 2) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 255;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 3) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 255;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 4) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 255;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 5) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 255;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 6) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 255;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 7) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 255;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 8) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 255;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 9) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 255;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 10) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 255;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 11) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 255;
                this.number_12.opacity = 0;
                this.number_13.opacity = 0;
            }
            if (y == 12) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 255;
                this.number_13.opacity = 0;
            }
            if (y == 13) {
                this.number_1.opacity = 0;
                this.number_2.opacity = 0;
                this.number_3.opacity = 0;
                this.number_4.opacity = 0;
                this.number_5.opacity = 0;
                this.number_6.opacity = 0;
                this.number_7.opacity = 0;
                this.number_8.opacity = 0;
                this.number_9.opacity = 0;
                this.number_10.opacity = 0;
                this.number_11.opacity = 0;
                this.number_12.opacity = 0;
                this.number_13.opacity = 255;
            }
        }
        // 大小王
        if (y == 14) {
            this.flower_1.opacity = 0;
            this.flower_2.opacity = 0;
            this.flower_3.opacity = 0;
            this.flower_4.opacity = 0;

            this.number_1.opacity = 0;
            this.number_2.opacity = 0;
            this.number_3.opacity = 0;
            this.number_4.opacity = 0;
            this.number_5.opacity = 0;
            this.number_6.opacity = 0;
            this.number_7.opacity = 0;
            this.number_8.opacity = 0;
            this.number_9.opacity = 0;
            this.number_10.opacity = 0;
            this.number_11.opacity = 0;
            this.number_12.opacity = 0;
            this.number_13.opacity = 0;

            this.number_r1.opacity = 0;
            this.number_r2.opacity = 0;
            this.number_r3.opacity = 0;
            this.number_r4.opacity = 0;
            this.number_r5.opacity = 0;
            this.number_r6.opacity = 0;
            this.number_r7.opacity = 0;
            this.number_r8.opacity = 0;
            this.number_r9.opacity = 0;
            this.number_r10.opacity = 0;
            this.number_r11.opacity = 0;
            this.number_r12.opacity = 0;
            this.number_r13.opacity = 0;

            // 小王
            if (x == 1) {
                this.clown_big.opacity = 0;
                this.clown_small.opacity = 255;
            }
            // 大王
            if (x == 2) {
                this.clown_small.opacity = 0;
                this.clown_big.opacity = 255;
            }
        }
    },

    // 抢地主
    rushLandlord: function() {
        this.landlordsign_1.opacity = 0;
        this.landlordsign_2.opacity = 0;
        this.landlordsign_3.opacity = 0;
        this.landlordsign_4.opacity = 0;
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_one.y = 500;
        this.t_point_two.y = 500;
        this.t_point_three.y = 500;
        // 随机抢地主机会
        var turn = Math.floor(Math.random() * 3 + 1);
        Poker._turn = turn;
        if (turn == 1){
            this.point_one.y = -50;
            this.point_two.y = -50;
            this.point_three.y = -50;
        }
    },

    onClickPointOne: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_one.y = -50;
    },
    onClickPointTwo: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_two.y = -50;
    },
    onClickPointThree: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_three.y = -50;
        this.landlordsign_1.opacity = 255;
    },

    update: function(dt) {

    },
});
