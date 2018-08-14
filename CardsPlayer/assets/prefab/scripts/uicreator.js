var ui = new Object();

ui.createScreenMsg = function (msg) {
    cc.loader.loadRes("prefab/ScreenMessage", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
            node.getComponent("ScreenMessage").showMessage(msg);
        }
    });
};

ui.createInviteCodePanel = function () {
    cc.loader.loadRes("prefab/InviteCodePanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createEnterRoomPanel = function () {
    cc.loader.loadRes("prefab/EnterRoomPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createUserInfoPanel = function (userInfo) {
    cc.loader.loadRes("prefab/UserInfoPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
            node.getComponent("UserInfoPanel").updateInfo(userInfo);
        }
    });
};

ui.createBroadcastPanel = function (data) {
    cc.loader.loadRes("prefab/BroadcastPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
            node.getComponent("BroadcastPanel").init(data);
        }
    });
};

ui.createHowToPlayPanel = function () {
    cc.loader.loadRes("prefab/HowToPlayPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createSettingPanel = function () {
    cc.loader.loadRes("prefab/SettingPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createSharePanel = function () {
    cc.loader.loadRes("prefab/SharePanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createShopPanel = function () {
    cc.loader.loadRes("prefab/ShopPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createCreateRoomPanel = function () {
    cc.loader.loadRes("prefab/CreateRoomPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createRecordMainPanel = function () {
    cc.loader.loadRes("prefab/RecordMainPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createRecordDetailPanel = function (data) {
    cc.loader.loadRes("prefab/RecordDetailPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.getComponent('RecordDetailPanel').initPanel(data);
            node.setPosition(cc.p(0, 0));
        }
    });
};

ui.createResultPanel = function (data) {
    cc.loader.loadRes("prefab/ResultPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.getComponent('ResultPanel').initPanel(data);
        }
    });
};

ui.createFinalResultPanel = function (data, callback) {
    cc.loader.loadRes("prefab/FinalResultPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            node.getComponent('FinalResultPanel').initPanel(data);
        }
    });
};

ui.createChatPanel = function (callback) {
    cc.loader.loadRes("prefab/ChatPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
            if (callback) {
                callback(node);
            }
        }
    });
};

ui.createAgentPanel = function () {
    cc.loader.loadRes("prefab/AgentPanel", (err, prefab)=>{
        if (!err) {
            var node = cc.instantiate(prefab);
            cc.director.getScene().getChildByName('Canvas').addChild(node);
        }
    });
};

module.exports = ui;