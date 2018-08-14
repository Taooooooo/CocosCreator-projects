// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        canvas: cc.Node,
        player: {
            default: null,
            type: cc.Node
        },
        // 重力
        gravity: -2000,
        // 初始速度
        jumpSpeed: 800
    },

    onLoad: function () {
        var self = this;
        self.canvas.on(cc.Node.EventType.TOUCH_START, function () {
            // 设置 isMoving 开关
            self.isMoving = 1;
            // 设置 isJumping 开关
            self.isJumping = 1;
        }, self.node);

        self.canvas.on(cc.Node.EventType.TOUCH_END, function () {
            self.isMoving = 0;
            self.isJumping = 0;
        }, self.node);
    },

    start () {

    },
    
    update: function (dt) {
        if(this.isMoving == 1){
            /*
            // 改成这样就是 flappybird 玩法
            if(this.isJumping == 1){
                this.gravity = -2000;
                this.jumpSpeed = 800;
            }
            else if(this.isJumping == 2){
                this.isJumping = 0;
            } 
            */
           if(this.isJumping == 1 && this.player.x > -89){
               this.isJumping = 2;
           }
            this.gravity = -2000;
            this.jumpSpeed += this.gravity * dt;
            this.player.y += this.jumpSpeed * dt;
            if(this.player.y < -89){
                this.player.y = -89;
                this.jumpSpeed = 800;
            }
        }

        if(this.isMoving == 0){
            if(this.jumpSpeed > 0){
                this.gravity = -2000;
                this.jumpSpeed = 0;
            }
            if(this.player.y < -89){
                this.player.y = -89;
                this.gravity = 0;
                this.jumpSpeed = 0;
            }

            this.jumpSpeed += this.gravity * dt;
            this.player.y += this.jumpSpeed * dt;
        }

        if(this.isJumping == 2){
            this.gravity = -2000;
            this.jumpSpeed = 800 + this.gravity * dt;
            this.player.y += this.jumpSpeed * dt;
            if(this.jumpSpeed <= 0){
                this.isMoving = 0;
            }
        }
    },
});
