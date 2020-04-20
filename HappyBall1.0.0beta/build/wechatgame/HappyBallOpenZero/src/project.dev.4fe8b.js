window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  RankPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fcf3PJ+sNKb6BeEk4JfHrR", "RankPanel");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SurpassTips_1 = require("./SurpassTips");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RankPanel = function(_super) {
      __extends(RankPanel, _super);
      function RankPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tiwnRankPrefab = null;
        _this.relayRankPrefab = null;
        _this.defaultIcon = null;
        _this.tiwnRankPos = null;
        _this.relayRankPos = null;
        _this.tiwnRankSpawnPos = null;
        _this.relayRankSpawnPos = null;
        _this.logoPos = null;
        _this.surpassPos = null;
        _this.relayLogo = null;
        _this.uiAudio = null;
        _this.isPlayUIAudio = true;
        _this.isVibration = true;
        _this.friends = [];
        _this.group = [];
        _this.surpassData = [];
        _this.logoArr = [];
        return _this;
      }
      RankPanel.prototype.onLoad = function() {};
      RankPanel.prototype.start = function() {
        var _this = this;
        cc.sys.WECHAT_GAME && window["wx"].onMessage(function(data) {
          1 == data.messageType ? _this.OpenTiwnRank() : 2 == data.messageType ? _this.OpenRelayRank() : 3 == data.messageType ? _this.OpenSurpassRank(data.score) : 4 == data.messageType ? _this.CloseAllRank() : 5 == data.messageType ? _this.CloseSurpassTIps() : 6 == data.messageType && _this.SetIsPlayUIAudio();
        });
      };
      RankPanel.prototype.SetVibrate = function() {
        true == this.isVibration ? "vibrate" in window.navigator ? console.log("\u8bbe\u7f6e\u632f\u52a8\uff080.1\u79d2\uff09") : console.log("\u5f53\u524d\u5e73\u53f0\u4e0d\u652f\u6301\u632f\u52a8...") : this.isVibration = true;
        console.log("\u8bbe\u7f6e\u5fae\u4fe1\u632f\u52a8...");
      };
      RankPanel.prototype.SetIsPlayUIAudio = function() {
        true == this.isPlayUIAudio ? this.isPlayUIAudio = false : this.isPlayUIAudio = true;
      };
      RankPanel.prototype.PlayUIAudio = function() {
        if (false == this.isPlayUIAudio) return;
        this.uiAudio.play();
      };
      RankPanel.prototype.UpdateAllRank = function() {
        console.log("\u66f4\u65b0");
        this.tiwnRankSpawnPos.removeAllChildren();
        this.relayRankSpawnPos.removeAllChildren();
        this.friends = [];
        this.LoadAllRankData();
      };
      RankPanel.prototype.UpdateWorldRank = function() {};
      RankPanel.prototype.UpdateGroupRank = function() {
        this.group = [];
        this.LoadGroupRankData();
      };
      RankPanel.prototype.LoadAllRankData = function() {
        console.log("\u52a0\u8f7d\u6240\u6709\u6570\u636e");
        var self = this;
        window["wx"].getFriendCloudStorage({
          keyList: [ "lastscore" ],
          success: function(res) {
            var data = res.data;
            console.log("\u6570\u636e\uff1a" + data[0].toString());
            for (var i = 0; i < res.data.length; i++) {
              var tiwnRankInfo = res.data[i];
              if (!tiwnRankInfo) continue;
              self.SpawnRank(tiwnRankInfo, self.tiwnRankPrefab, i);
            }
            self.tiwnRankSpawnPos.height = 120 * self.friends.length;
            self.Sorts(self.friends);
          },
          fail: function(res) {
            console.log("\u52a0\u8f7d\u597d\u53cb\u5931\u8d25");
          }
        });
      };
      RankPanel.prototype.LoadGroupRankData = function() {
        var _this = this;
        var self = this;
        void 0 != this.tickets && null != this.tickets && window["wx"].getGroupCloudStorage({
          shareTicket: this.tickets,
          keyList: [ "money" ],
          success: function(res) {
            for (var i = 0; i < res.data.length; i++) {
              var groupInfo = res.data[i];
              if (!groupInfo) continue;
              self.SpawnRank(groupInfo, _this.tiwnRankPrefab, i);
            }
            self.tiwnRankSpawnPos.height = 20 + 60 * self.group.length;
            console.log("\u5f53\u524d\u5bb9\u5668\u7684\u9ad8\u5ea6\uff1a" + self.tiwnRankSpawnPos.height.toString());
            self.Sorts(self.group);
          },
          fail: function(res) {
            console.log("\u52a0\u8f7d\u7fa4\u6392\u884c\u6570\u636e\u5931\u8d25\uff1a" + res);
          }
        });
      };
      RankPanel.prototype.SpawnRank = function(userInfo, curPrefab, index, type) {
        console.log("\u521b\u5efa\u6392\u884c\u699c");
        var rankItem = cc.instantiate(curPrefab);
        rankItem.parent = this.tiwnRankSpawnPos;
        0 != index && (rankItem.position.y -= 89 * index);
        this.friends.push(rankItem);
        var name = userInfo.nickname;
        console.log("\u7528\u6237\u6570\u636e\u662f\uff1a" + userInfo);
        console.log("\u6635\u79f0\uff1a" + userInfo.nickname);
        console.log("\u7528\u6237\u6570\u636e\u662f\uff1a" + userInfo.toString());
        var avatarUrl = userInfo.avatarUrl;
        var maxNum = 0;
        if (0 != userInfo.KVDataList) if (null != userInfo.KVDataList[0].value && void 0 != userInfo.KVDataList[0].value) {
          maxNum = userInfo.KVDataList[0].value;
          console.log("\u5b50\u57df ++\u5f53\u524d\u5206\u6570\uff1a" + maxNum);
        } else rankItem.active = false; else maxNum = 0;
        rankItem.getChildByName("txtName").getComponent(cc.Label).string = name;
        rankItem.getChildByName("txtScore").getComponent(cc.Label).string = maxNum.toString();
        "" != avatarUrl ? cc.loader.load({
          url: avatarUrl,
          type: "png"
        }, function(err, imgicon) {
          rankItem.getChildByName("imgIcon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(imgicon);
        }) : rankItem.getChildByName("imgIcon").getComponent(cc.Sprite).spriteFrame = this.defaultIcon;
      };
      RankPanel.prototype.Sorts = function(data) {
        var tempArr = [];
        for (var i = 0; i < data.length; i++) data[i].active && tempArr.push(data[i].getChildByName("txtScore").getComponent(cc.Label).string);
        function SortNum(a, b) {
          return a - b;
        }
        var sorted = tempArr.sort(SortNum);
        sorted.reverse();
        for (var i = 0; i < sorted.length; i++) if (i >= 0 && sorted[i] != sorted[i - 1]) for (var j = 0; j < data.length; j++) if (data[j].getChildByName("txtScore").getComponent(cc.Label).string == sorted[i] && data[j].active) {
          if (1 == i) {
            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[0];
            data[j].getChildByName("txtRank").active = false;
          } else if (2 == i) {
            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[1];
            data[j].getChildByName("txtRank").active = false;
          } else if (3 == i) {
            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[2];
            data[j].getChildByName("txtRank").active = false;
          } else {
            data[j].getChildByName("txtRank").getComponent(cc.Label).string = (i + 1).toString();
            data[j].getChildByName("imgLogo").active = false;
          }
          data[j].zIndex = i + 1;
          console.log("\u5bf9\u6392\u884c\u8fdb\u884c\u6392\u5e8f...");
        }
      };
      RankPanel.prototype.OpenTiwnRank = function() {
        this.PlayUIAudio();
        this.UpdateAllRank();
        this.tiwnRankPos.active = true;
        this.logoPos.active = false;
        this.relayRankPos.active = false;
        console.log("\u6253\u5f00\u5355\u4eba\u6392\u884c\u699c");
      };
      RankPanel.prototype.OpenRelayRank = function() {
        this.PlayUIAudio();
        this.tiwnRankPos.active = false;
        this.logoPos.active = true;
        this.relayRankPos.active = true;
        console.log("\u6253\u5f00\u63a5\u529b\u6392\u884c\u699c");
      };
      RankPanel.prototype.CloseAllRank = function() {
        this.PlayUIAudio();
        this.tiwnRankPos.active = false;
        this.relayRankPos.active = false;
        console.log("\u5173\u95ed\u5168\u90e8\u6392\u884c\u699c");
      };
      RankPanel.prototype.CloseSurpassTIps = function() {
        this.PlayUIAudio();
        this.surpassPos.active = false;
      };
      RankPanel.prototype.OpenSurpassRank = function(score) {
        var _this = this;
        this.surpassPos.active = true;
        function SortNum(a, b) {
          return a.KVDataList[0].value - b.KVDataList[0].value;
        }
        if (cc.sys.WECHAT_GAME) 0 == score && window["wx"].getFriendCloudStorage({
          keyList: [ "hightscorenum" ],
          success: function(res) {
            console.log("\u6210\u529f\u53d6\u51fa\u6240\u6709\u597d\u53cb\u6570\u636e");
            var data = res.data;
            var num = data.sort(SortNum);
            num.reverse();
            _this.surpassData = num;
            for (var i = num.length; i >= 0; i--) if (i > 0) {
              if (0 != num[i - 1].KVDataList.length && score < num[i - 1].KVDataList[0].value) {
                _this.surpassPos.getComponent(SurpassTips_1.default).Init(num[i - 1]);
                break;
              }
            } else _this.surpassPos.getComponent(SurpassTips_1.default).First(num[0]);
          },
          fail: function(res) {
            console.log("\u52a0\u8f7d\u597d\u53cb\u6570\u636e\u5931\u8d25");
          }
        }); else if (void 0 != this.surpassPos) {
          var data = this.surpassData;
          var num = data.sort(SortNum);
          num.reverse();
          for (var i = num.length; i >= 0; i--) {
            if (!(i > 0)) {
              this.surpassPos.getComponent(SurpassTips_1.default).First(num[0]);
              break;
            }
            if (0 != num[i - 1].KVDataList.length && score < num[i - 1].KVDataList[0].value) {
              this.surpassPos.getComponent(SurpassTips_1.default).Init(num[i - 1]);
              break;
            }
          }
        } else window["wx"].getFriendCloudStorage({
          keyList: [ "highscorenum" ],
          success: function(res) {
            var data = res.data;
            var num = data.sort(SortNum);
            _this.surpassData = num;
            for (var i = num.length; i >= 0; i--) {
              if (!(i > 0)) {
                _this.surpassPos.getComponent(SurpassTips_1.default).First(num[0]);
                break;
              }
              if (0 != num[i - 1].KVDataList.length && score < num[i - 1].KVDataList[0].value) {
                _this.surpassPos.getComponent(SurpassTips_1.default).Init(num[i - 1]);
                break;
              }
            }
          },
          fail: function(res) {
            console.log("\u52a0\u8f7d\u6392\u884c\u6570\u636e\u5931\u8d25:" + res);
          }
        });
      };
      __decorate([ property(cc.Prefab) ], RankPanel.prototype, "tiwnRankPrefab", void 0);
      __decorate([ property(cc.Prefab) ], RankPanel.prototype, "relayRankPrefab", void 0);
      __decorate([ property(cc.SpriteFrame) ], RankPanel.prototype, "defaultIcon", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "tiwnRankPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "relayRankPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "tiwnRankSpawnPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "relayRankSpawnPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "logoPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "surpassPos", void 0);
      __decorate([ property(cc.Node) ], RankPanel.prototype, "relayLogo", void 0);
      __decorate([ property(cc.AudioSource) ], RankPanel.prototype, "uiAudio", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], RankPanel.prototype, "logoArr", void 0);
      RankPanel = __decorate([ ccclass ], RankPanel);
      return RankPanel;
    }(cc.Component);
    exports.default = RankPanel;
    cc._RF.pop();
  }, {
    "./SurpassTips": "SurpassTips"
  } ],
  SurpassTips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cbfdyxEBBEg5UYcQ/d3u+r", "SurpassTips");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SurpassTips = function(_super) {
      __extends(SurpassTips, _super);
      function SurpassTips() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.imgAvatar = null;
        _this.txtTopScore = null;
        _this.tipsAin = null;
        return _this;
      }
      SurpassTips.prototype.First = function(data) {
        var avtarUrl = data.avtarUrl;
        this.CreateImgIcon(avtarUrl);
        this.txtTopScore.string = "\u5df2\u7ecf\u662f\u597d\u53cb\u4e2d\u6700\u9ad8\u4e86";
      };
      SurpassTips.prototype.Init = function(data) {
        var avtarUrl = data.avtarUrl;
        var grade = 0 != data.KVDataList.length ? data.KVDataList[0].Value : 0;
        this.CreateImgIcon(avtarUrl);
        this.txtTopScore.string = grade.toString();
      };
      SurpassTips.prototype.CreateImgIcon = function(avtarUrl) {
        var _this = this;
        cc.loader.load({
          url: avtarUrl,
          type: "png"
        }, function(err, texture) {
          err && console.log("\u521b\u5efa \u8d85\u8fc7Icon\u5931\u8d25...");
          _this.imgAvatar.spriteFrame = new cc.SpriteFrame(texture);
          console.log("\u521b\u5efa\u8d85\u8fc7Icon");
        });
      };
      __decorate([ property(cc.Sprite) ], SurpassTips.prototype, "imgAvatar", void 0);
      __decorate([ property(cc.Label) ], SurpassTips.prototype, "txtTopScore", void 0);
      __decorate([ property(cc.Animation) ], SurpassTips.prototype, "tipsAin", void 0);
      SurpassTips = __decorate([ ccclass ], SurpassTips);
      return SurpassTips;
    }(cc.Component);
    exports.default = SurpassTips;
    cc._RF.pop();
  }, {} ]
}, {}, [ "RankPanel", "SurpassTips" ]);