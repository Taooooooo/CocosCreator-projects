module.exports = {

    _pokers: [],// player1 的扑克牌的 node 信息
    _condition: [],// 选中状态
    _choose: [],// 选中的牌的位置，如：Poker._pokers[Poker._choose[i]]
    c_condition: [],// 选中的牌的状态在 _condition 的位置，如：Poker._condition[Poker.c_condition[i]]
    _player1: [],// player1 的扑克牌的 数组 信息
    c_player: [],// 选中的牌在 _player1 的位置，如：Poker._player1[c_player[i]]
    _output: [],// 出牌区的牌
    _out: 0,// 打出的牌型
    _turn: 0,// 谁的回合
    _last: [],// 8张底牌
    _rest1: 0,// player1的剩余手牌数
    _player2: [],// player2 的扑克牌的 数组 信息
    _player3: [],// player3 的扑克牌的 数组 信息
    _player4: [],// player4 的扑克牌的 数组 信息

};