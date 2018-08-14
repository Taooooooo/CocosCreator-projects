var Poker = require("Poker");

cc.Class({
    extends: cc.Component,

    /****************
    判断牌组的类型：
    -1: 不符合逻辑的牌
    1: 单牌 ------------------------------------------------------------------------------1
    2: 2张相同数字的牌（对子）---------------------------------------------------------------2
    3: 3张相同数字的牌 ---------------------------------------------------------------------3
    4: 4张相同数字的牌（炸弹）---------------------------------------------------------------4
    5: 5张相同数字的牌（炸弹）---------------------------------------------------------------5
    6: 6张相同数字的牌（炸弹）---------------------------------------------------------------6
    7: 7张相同数字的牌（炸弹）---------------------------------------------------------------7
    8: 8张相同数字的牌（炸弹）---------------------------------------------------------------8
    9: 2张大王带2张小王（王炸）--------------------------------------------------------------4
    10: 5张或5张以上数字连续的牌（顺子）-------------------------------------------------------5～13
    11: 3张相同数字的牌带一对（三带二）--------------------------------------------------------5
    12: 3个或3个以上连续的对子（姐妹对）-------------------------------------------------------6，8，10，……，26
    13: 2个或2个以上连续的3张相同数字的牌（飞机）-----------------------------------------------6，9，12，……，30
    14: 2个或2个以上连续的3张相同数字的牌带同样数量的连续的对子（飞机带翅膀）------------------------10，15，20，25，30
    ****************/
    cardText: function() {
        var choose = [];
        var c_condition = [];
        var c_player = [];
        for (var i = 0; i < Poker._pokers.length; i ++) {
            if (Poker._condition[i] % 2 == 0) {
                choose.push(i);
                c_condition.push(i);
                c_player.push(i);
            }
        }
        choose.sort(this.sortNumber);
        Poker._choose = choose;
        Poker.c_condition = c_condition;
        Poker.c_player = c_player;
        // 判断单张
        if (choose.length == 1){
            return 1;
        }
        // 判断对子
        if (choose.length == 2){
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[0]]/10) < 14) {
                return 2;
            }
        }
        // 判断三张相同的牌
        if (choose.length == 3){
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[0]]/10) < 14) {
                return 3;
            }
        }
        // 判断四张炸弹
        if (choose.length == 4) {
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[0]]/10) < 14) {
                return 4;
            }
            // 判断王炸
            if (Math.floor(Poker._player1[c_player[0]]/10) == 14 && Math.floor(Poker._player1[c_player[1]]/10) == 14 && Math.floor(Poker._player1[c_player[2]]/10) == 14 && Math.floor(Poker._player1[c_player[3]]/10) == 14) {
                return 9;
            }
        }
        // 判断五张炸弹or三带二
        if (choose.length == 5) {
            // 判断五张炸弹
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10)) {
                return 5;
            }
            // 判断三带二（对子不能是大小怪）
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10) && Math.floor(Poker._player1[c_player[3]]/10) != 14) {
                return 11;
            }
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10) && Math.floor(Poker._player1[c_player[0]]/10) != 14) {
                return 11;
            }
        }
        // 判断六张炸弹
        if (choose.length == 6) {
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10) && Math.floor(Poker._player1[c_player[4]]/10) == Math.floor(Poker._player1[c_player[5]]/10)) {
                return 6;
            }
        }
        // 判断七张炸弹
        if (choose.length == 7) {
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10) && Math.floor(Poker._player1[c_player[4]]/10) == Math.floor(Poker._player1[c_player[5]]/10) && Math.floor(Poker._player1[c_player[5]]/10) == Math.floor(Poker._player1[c_player[6]]/10)) {
                return 7;
            }
        }
        // 判断八张炸弹
        if (choose.length == 8) {
            if (Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[2]]/10) == Math.floor(Poker._player1[c_player[3]]/10) && Math.floor(Poker._player1[c_player[3]]/10) == Math.floor(Poker._player1[c_player[4]]/10) && Math.floor(Poker._player1[c_player[4]]/10) == Math.floor(Poker._player1[c_player[5]]/10) && Math.floor(Poker._player1[c_player[5]]/10) == Math.floor(Poker._player1[c_player[6]]/10) && Math.floor(Poker._player1[c_player[6]]/10) == Math.floor(Poker._player1[c_player[7]]/10)) {
                return 8;
            }
        }
        // 判断顺子
        if(choose.length > 4) {
            this.result = [];
            this.answer = [];
            for (var i = 0; i < choose.length - 1; i ++) {
                if (Math.floor(Poker._player1[c_player[i]]/10) == Math.floor(Poker._player1[c_player[i + 1]]/10) - 1 && Math.floor(Poker._player1[c_player[i + 1]]/10) < 14) {
                    this.result[i] = 1;
                }
                else {
                    this.result[i] = -1;
                }
            }
            // 生成标准答案参照数组
            for (var i = 0; i < choose.length - 1; i ++) {
                this.answer[i] = 1;
            }
            // 比较两数组是否相等
            if (this.result.toString() == this.answer.toString()) {
                return 10;
            }
        }
        // 判断姐妹对（对子不能有大小怪）
        if (choose.length % 2 == 0 && choose.length > 4) {
            this.result = [];
            this.answer = [];
            for (var i = 0; i < choose.length - 2; i ++) {
                if (Math.floor(Poker._player1[c_player[i]]/10) == Math.floor(Poker._player1[c_player[i + 2]]/10) - 1 && Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[i + 2]]/10) < 14) {
                    this.result[i] = 1;
                }
                else {
                    this.result[i] = -1;
                }
            }
            // 生成标准答案参照数组
            for (var i = 0; i < choose.length - 2; i ++) {
                this.answer[i] = 1;
            }
            // 比较两数组是否相等
            if (this.result.toString() == this.answer.toString()) {
                return 12;
            }
        }
        // 判断飞机
        if (choose.length % 3 == 0 && choose.length > 3) {
            this.result = [];
            this.answer = [];
            for (var i = 0; i < choose.length - 3; i ++) {
                if (Math.floor(Poker._player1[c_player[i]]/10) == Math.floor(Poker._player1[c_player[i + 3]]/10) - 1 && Math.floor(Poker._player1[c_player[0]]/10) == Math.floor(Poker._player1[c_player[1]]/10) && Math.floor(Poker._player1[c_player[1]]/10) == Math.floor(Poker._player1[c_player[2]]/10) && Math.floor(Poker._player1[c_player[i + 3]]/10) < 14) {
                    this.result[i] = 1;
                }
                else {
                    this.result[i] = -1;
                }
            }
            // 生成标准答案参照数组
            for (var i = 0; i < choose.length - 3; i ++) {
                this.answer[i] = 1;
            }
            // 比较两数组是否相等
            if (this.result.toString() == this.answer.toString()) {
                return 13;
            }
        }
        // 判断飞机带翅膀（翅膀不能有大小怪）
        if (choose.length % 5 == 0 && choose.length > 5) {
            this.double = [];
            this.treble = [];
            // 判断重复元素
            for (var i = 0; i < choose.length; i ++) {
                var count = 0;
                for (var j = i; j < choose.length; j ++) {
                    if (Math.floor(Poker._player1[c_player[i]]/10) == Math.floor(Poker._player1[c_player[j]]/10)) {
                        count += 1;
                    }
                }
                // 重复3次的元素
                if (count == 3) {
                    this.treble.push(Math.floor(Poker._player1[c_player[i]]/10));
                }
                // 重复2次的元素
                if (count == 2) {
                    this.double.push(Math.floor(Poker._player1[c_player[i]]/10));
                }
            }
            this.result1 = [];
            this.result2 = [];
            this.answer1 = [];
            this.answer2 = [];
            for (var i = 0; i < this.treble.length - 1; i ++) {
                if (this.treble[i] == this.treble[i + 1] - 1) {
                    this.result1[i] = 1;
                }
                else {
                    this.result1[i] = -1;
                }
            }
            for (var i = 0; i < this.double.length; i ++) {
                if (this.double[i] < 14) {
                    this.result2[i] = 1;
                }
                else {
                    this.result2[i] = -1;
                }
            }
            // 生成标准答案参照数组
            for (var i = 0; i < this.treble.length - 1; i ++) {
                this.answer1[i] = 1;
            }
            for (var i = 0; i < this.double.lengt; i ++) {
                this.answer2[i] = 1;
            }
            // 比较两数组是否相等
            if (this.result1.toString() == this.answer1.toString() && this.result2.toString() == this.answer2.toString() && this.double.length == this.treble.length * 2) {
                return 14;
            }
        }
    },

    // 覆盖出牌区
    cover: function() {
        if (Poker._output.length > 0) {
            for (var i = 0; i < Poker._output.length; i ++) {
                Poker._output[i].opacity = 0;
            }
        }
        this._output = [];
        Poker._output = this._output;
    },

    // 出牌
    onClickOut: function() {
        var out = this.cardText();
        Poker._out = out;
        this.cover();
        for (var i = 0; i < Poker._choose.length; i ++) {
            if (out > 0) {
                Poker._condition[Poker.c_condition[i]] = 1;
                // 拿走已经打出的牌
                Poker._pokers[Poker._choose[i]].y -= 500;
                // 把打出的牌克隆到出牌区
                var scene = cc.director.getScene();
                var node = cc.instantiate(Poker._pokers[Poker._choose[i]]);
                node.scaleX = 0.6;
                node.scaleY = 0.6;
                var x = 475 + i * 32 * node.scaleX;
                node.parent = scene;
                node.setPosition(x, 360);
                // 添加到数组
                Poker._output.push(node);
                // 把后面的牌往向前移
                for (var j = Poker._choose[i]; j < Poker._pokers.length - 1; j ++) {
                    Poker._pokers[j + 1].x -= 32;
                }
            }
            else {
                Poker._pokers[Poker._choose[i]].y -= 30;
                Poker._condition[Poker.c_condition[i]] = 1;
            }
        }
        Poker._choose = [];
        Poker.c_condition = [];
        Poker.c_player = [];
    },

    // 不出
    onClickNoOut: function() {
        this.cardText();
        for (var i = 0; i < Poker._choose.length; i ++) {
            Poker._pokers[Poker._choose[i]].y -= 30;
            Poker._condition[Poker.c_condition[i]] = 1;
        }
    },

});
