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

        last1: cc.Node,
        last2: cc.Node,
        last3: cc.Node,
        last4: cc.Node,
        last5: cc.Node,
        last6: cc.Node,
        last7: cc.Node,
        last8: cc.Node,

        out: cc.Node,
        noout: cc.Node,

        rest1num: cc.Label,

        // 以下player2 player3 player4暂时
        player2_point_one: cc.Node,
        player3_point_one: cc.Node,
        player4_point_one: cc.Node,

        setting: {
            default: null,
            type: cc.Prefab
        },
        user: {
            default: null,
            type: cc.Prefab
        },

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

        Poker._last = last;
        Poker._player2 = player2;
        Poker._player3 = player2;
        Poker._player4 = player2;

        // player 手牌排序
        player1.sort(this.sortNumber);
        player2.sort(this.sortNumber);
        player3.sort(this.sortNumber);
        player4.sort(this.sortNumber);
        Poker._last.sort(this.sortNumber);

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

    // 随机地主
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
    },

    callLandlord: function() {
        if (Poker._turn == 1 || Poker._turn == 5) {
            this.point_one.y = -50;
            this.point_two.y = -50;
            this.point_three.y = -50;
        }
        if (Poker._turn == 2) {
            this.player2_point_one.x = -150;
            Poker._turn += 1;
        }
        if (Poker._turn == 3) {
            this.player3_point_one.y = -100;
            Poker._turn += 1;
        }
        if (Poker._turn == 4) {
            this.player4_point_one.x = 150;
            Poker._turn += 1;
        }
    },

    // 出牌轮次
    whoseTurn: function() {
        this.out.x = 1000;
        this.noout.x = 1000;
        // player1 出牌
        if (Poker._turn % 4 == 1 && Poker._turn > 5) {
            this.out.x = 230;
            this.noout.x = -230;
        }
        // 为测试设置的傻子机器人，每次只出最大的一张牌，并且只叫“一分”，player2 player3 player4都要改
        // player2 出牌
        if (Poker._turn % 4 == 2 && Poker._turn > 2) {
            var arr = Poker._player2[Poker._player2.length - 1];
            var y = parseInt(arr/10);
            var x = arr - 10 * y;
            this.setPoker(x, y);
            // 克隆
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            node.scaleX = 0.6;
            node.scaleY = 0.6;
            node.parent = scene;
            node.setPosition(640, 360);
            Poker._turn += 1;
        }
        // player3 出牌
        if (Poker._turn % 4 == 3 && Poker._turn > 3) {
            var arr = Poker._player2[Poker._player2.length - 1];
            var y = parseInt(arr/10);
            var x = arr - 10 * y;
            this.setPoker(x, y);
            // 克隆
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            node.scaleX = 0.6;
            node.scaleY = 0.6;
            node.parent = scene;
            node.setPosition(640, 360);
            Poker._turn += 1;
        }
        // player4 出牌
        if (Poker._turn % 4 == 0 && Poker._turn > 4) {
            var arr = Poker._player2[Poker._player2.length - 1];
            var y = parseInt(arr/10);
            var x = arr - 10 * y;
            this.setPoker(x, y);
            // 克隆
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            node.scaleX = 0.6;
            node.scaleY = 0.6;
            node.parent = scene;
            node.setPosition(640, 360);
            Poker._turn += 1;
        }
    },

    onClickPointOne: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_one.y = -50;
        Poker._turn += 1;
    },
    onClickPointTwo: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        this.t_point_two.y = -50;
        Poker._turn += 1;
    },
    onClickPointThree: function() {
        this.point_one.y = 500;
        this.point_two.y = 500;
        this.point_three.y = 500;
        // this.t_point_three.y = -50;
        this.landlordsign_1.opacity = 255;
        this.showLast();
        this.beLandlord();

        Poker._rest1 = 33;
        this.rest1num.string = Poker._rest1 + '张';

        Poker._turn = 9;

        this.player2_point_one.x = 200;
        this.player3_point_one.y = 500;
        this.player4_point_one.x = -200;

    },

    // 成为地主
    beLandlord: function() {
        for (var i = 0; i < 25; i ++) {
            Poker._pokers[i].y = 2500;
        }
    
        for (var i = 0; i < 8; i ++) {
            Poker._player1.push(Poker._last[i]);
        }
    
        Poker._player1.sort(this.sortNumber);
    
        for (var i = 0; i < 33; i ++) {
            var arr = Poker._player1[i];
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
            this._pokers[i] = node;
            Poker._pokers = this._pokers;
        }
    
        Poker._pokers[0].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[0] += 1;
            var node = Poker._pokers[0];
            if (Poker._condition[0] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[1].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[1] += 1;
            var node = Poker._pokers[1];
            if (Poker._condition[1] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[2].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[2] += 1;
            var node = Poker._pokers[2];
            if (Poker._condition[2] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[3].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[3] += 1;
            var node = Poker._pokers[3];
            if (Poker._condition[3] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[4].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[4] += 1;
            var node = Poker._pokers[4];
            if (Poker._condition[4] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[5].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[5] += 1;
            var node = Poker._pokers[5];
            if (Poker._condition[5] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[6].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[6] += 1;
            var node = Poker._pokers[6];
            if (Poker._condition[6] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[7].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[7] += 1;
            var node = Poker._pokers[7];
            if (Poker._condition[7] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[8].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[8] += 1;
            var node = Poker._pokers[8];
            if (Poker._condition[8] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[9].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[9] += 1;
            var node = Poker._pokers[9];
            if (Poker._condition[9] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[10].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[10] += 1;
            var node = Poker._pokers[10];
            if (Poker._condition[10] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
        
        Poker._pokers[11].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[11] += 1;
            var node = Poker._pokers[11];
            if (Poker._condition[11] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[12].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[12] += 1;
            var node = Poker._pokers[12];
            if (Poker._condition[12] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[13].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[13] += 1;
            var node = Poker._pokers[13];
            if (Poker._condition[13] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[14].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[14] += 1;
            var node = Poker._pokers[14];
            if (Poker._condition[14] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[15].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[15] += 1;
            var node = Poker._pokers[15];
            if (Poker._condition[15] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[16].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[16] += 1;
            var node = Poker._pokers[16];
            if (Poker._condition[16] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[17].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[17] += 1;
            var node = Poker._pokers[17];
            if (Poker._condition[17] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[18].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[18] += 1;
            var node = Poker._pokers[18];
            if (Poker._condition[18] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[19].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[19] += 1;
            var node = Poker._pokers[19];
            if (Poker._condition[19] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[20].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[20] += 1;
            var node = Poker._pokers[20];
            if (Poker._condition[20] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[21].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[21] += 1;
            var node = Poker._pokers[21];
            if (Poker._condition[21] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[22].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[22] += 1;
            var node = Poker._pokers[22];
            if (Poker._condition[22] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[23].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[23] += 1;
            var node = Poker._pokers[23];
            if (Poker._condition[23] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[24].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[24] += 1;
            var node = Poker._pokers[24];
            if (Poker._condition[24] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[25].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[25] += 1;
            var node = Poker._pokers[25];
            if (Poker._condition[25] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[26].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[26] += 1;
            var node = Poker._pokers[26];
            if (Poker._condition[26] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[27].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[27] += 1;
            var node = Poker._pokers[27];
            if (Poker._condition[27] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[28].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[28] += 1;
            var node = Poker._pokers[28];
            if (Poker._condition[28] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[29].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[29] += 1;
            var node = Poker._pokers[29];
            if (Poker._condition[29] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[30].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[30] += 1;
            var node = Poker._pokers[30];
            if (Poker._condition[30] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[31].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[31] += 1;
            var node = Poker._pokers[31];
            if (Poker._condition[31] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    
        Poker._pokers[32].on(cc.Node.EventType.TOUCH_START, function () {
            Poker._condition[32] += 1;
            var node = Poker._pokers[32];
            if (Poker._condition[32] % 2 == 0) {
                node.y += 30;
            }
            else {
                node.y -= 30;
            }
        }, this);
    },

    // 显示底牌
    showLast: function() {
        this.last1.y = 500;
        this.last2.y = 500;
        this.last3.y = 500;
        this.last4.y = 500;
        this.last5.y = 500;
        this.last6.y = 500;
        this.last7.y = 500;
        this.last8.y = 500;

        for (var i = 0; i < 8; i ++) {
            var arr = Poker._last[i];
            var y = parseInt(arr/10);
            var x = arr - 10 * y;
            this.setPoker(x, y);
            // 克隆
            var scene = cc.director.getScene();
            var node = cc.instantiate(this.target);
            var x = 115 + i * 24;
            node.parent = scene;
            node.setPosition(x, 660);
            node.scaleX = 44/142;
            node.scaleY = 57/185;
        }
    },

    onSettingClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.setting);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    onClickReturn: function() {
        cc.director.loadScene("Hall");
    },

    onUserClick:function(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.user);
        node.parent = scene;
        node.setPosition(640, 360);
    },

    update: function(dt) {
        this.whoseTurn();
        this.callLandlord();
    },
});
