cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 初始化速度
        this.xSpeed = 1000 * Math.random() - 500;
        this.ySpeed = 1000 * Math.random() - 500;
        this.changeSpeed();
    },

    start () {

    },

    changeSpeed:function() {
        this.schedule(function() {
            // 随机改变速度
            this.xSpeed += 200 * Math.random() - 100;
            this.ySpeed += 200 * Math.random() - 100;
        }, 2);
    },

    update:function(dt) {
        // 根据当前速度更新位置
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
        // 限制星星不能跑出场景
        if(this.node.x < -cc.winSize.width/2){
            this.xSpeed = -this.xSpeed;
        }
        else if(this.node.x > cc.winSize.width/2){
            this.xSpeed = -this.xSpeed;
        }
        if(this.node.y < -120){
            this.ySpeed = -this.ySpeed;
        }
        else if(this.node.y > cc.winSize.height/2){
            this.ySpeed = -this.ySpeed;
        }
    },
});