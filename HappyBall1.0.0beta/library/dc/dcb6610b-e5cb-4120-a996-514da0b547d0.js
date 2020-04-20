"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "./MainPanel.ts", "../System/MainMgr.ts", "../Controller/GameCtr.ts", "./PlayPanel.ts", "./SettleMentPanel.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts", "../System/LoadSys.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, SpriteComponent, PanelRoot, MainPanel, MainMgr, GameCtr, PlayPanel, SettleMentPanel, AudioSvc, ShareSvc, LoadSys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, ccclass, property, GameOverPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_MainPanelTs) {
      MainPanel = _MainPanelTs.MainPanel;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_SettleMentPanelTs) {
      SettleMentPanel = _SettleMentPanelTs.SettleMentPanel;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_SystemLoadSysTs) {
      LoadSys = _SystemLoadSysTs.LoadSys;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "dcb66EL5ctBIKmWUU2gtUfQ", "GameOverPanel"); // begin GameOverPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameOverPanel", GameOverPanel = (_dec = ccclass("GameOverPanel"), _dec2 = _decorator.menu("View/GameOverPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec6 = property({
        type: MainPanel
      }), _dec7 = property({
        type: PlayPanel
      }), _dec8 = property({
        type: GameCtr
      }), _dec9 = property({
        type: SettleMentPanel
      }), _dec10 = property({
        type: LoadSys
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(GameOverPanel, _PanelRoot);

        function GameOverPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameOverPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameOverPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtSurpassVal", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.oldScoreVal = 0;
          babelHelpers.initializerDefineProperty(_this, "mainPanel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "settleMentPanel", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "loadSys", _descriptor8, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameOverPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(GameOverPanel.prototype), "InitPanel", this).call(this); //设置上盘得分

            console.log("GameOverPanel Init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickClose",
          value: function ClickClose() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
          }
          /**
           * 看视频翻倍
           */

        }, {
          key: "ClickWatchVideoBtn",
          value: function ClickWatchVideoBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //看完视频

            ShareSvc.Instance().WatchVideoForAward(); //关闭该界面

            this.SetPanelState(false); //打开结算界面

            MainMgr.Instance().OpenSettleMentPanel(); //奖励翻倍

            this.settleMentPanel.txtGoldVal.string = (this.oldScoreVal * 2 * 2).toString(); //更新数据库
            //LoadSys.Instance().ServerSave();

            console.log("看视频翻倍...");
          }
          /**
           * 免费继续
           */

        }, {
          key: "ClickFreePlayBtn",
          value: function ClickFreePlayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //打开免费求助面板，消耗免费继续资源
            //TODO

            MainMgr.Instance().OpenFreeContinuePanel(); //关闭该界面

            this.SetPanelState();
            console.log("免费继续...");
          }
          /**
           * 点击跳过
           */

        }, {
          key: "ClickSkipBtn",
          value: function ClickSkipBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //保存数据到服务端
            //LoadSys.Instance().ServerSave();
            //关闭当前界面

            this.SetPanelState(false); //重置游戏状态
            //this.gameCtrl.GameBackToLogin();
            //结算界面

            this.settleMentPanel.SetPanelState(); //设置金币

            this.settleMentPanel.SetGoldValUI(this.playPanel.lastScore); //上传数据
            //发送数据给子域

            var data = new Array();
            data.push({
              key: "lastscore",
              value: this.playPanel.lastScore.toString()
            });
            window['wx'].setUserCloudStorage({
              KVDataList: data,
              success: function success(res) {
                console.log("上传数据成功:" + res.toString());
                console.log('res', res);
              },
              fail: function fail(res) {
                console.log("上传数据失败：" + res);
              }
            });
            console.log("loadSys有吗？：" + this.loadSys.hello);
            this.loadSys.ServerSave();
            console.log("结算界面！！！");
          }
          /**
           * 设置得分UI
           */

        }, {
          key: "SetScoreUIInfo",
          value: function SetScoreUIInfo(val) {
            this.txtScore.string = val.toString();
            this.oldScoreVal = val;
          }
          /**
           * 设置超过的好友
           * @param val 
           */

        }, {
          key: "SetSurpassUIInfo",
          value: function SetSurpassUIInfo(val) {
            //this.txtSurpassVal.string = val.toString();
            if (CC_WECHATGAME) {
              //发送消息给子域
              window['wx'].postMessage({
                messageType: 3,
                score: val
              });
            }

            console.log("设置超过的好友");
          }
        }]);
        return GameOverPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtSurpassVal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settleMentPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadSys", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end GameOverPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L0dhbWVPdmVyUGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkxhYmVsQ29tcG9uZW50IiwiU3ByaXRlQ29tcG9uZW50IiwiUGFuZWxSb290IiwiTWFpblBhbmVsIiwiTWFpbk1nciIsIkdhbWVDdHIiLCJQbGF5UGFuZWwiLCJTZXR0bGVNZW50UGFuZWwiLCJBdWRpb1N2YyIsIlNoYXJlU3ZjIiwiTG9hZFN5cyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVPdmVyUGFuZWwiLCJtZW51IiwidHlwZSIsIm9sZFNjb3JlVmFsIiwiY29uc29sZSIsImxvZyIsIkluc3RhbmNlIiwiUGxheVVJQXVkaW8iLCJTZXRQYW5lbFN0YXRlIiwiV2F0Y2hWaWRlb0ZvckF3YXJkIiwiT3BlblNldHRsZU1lbnRQYW5lbCIsInNldHRsZU1lbnRQYW5lbCIsInR4dEdvbGRWYWwiLCJzdHJpbmciLCJ0b1N0cmluZyIsIk9wZW5GcmVlQ29udGludWVQYW5lbCIsIlNldEdvbGRWYWxVSSIsInBsYXlQYW5lbCIsImxhc3RTY29yZSIsImRhdGEiLCJBcnJheSIsInB1c2giLCJrZXkiLCJ2YWx1ZSIsIndpbmRvdyIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJsb2FkU3lzIiwiaGVsbG8iLCJTZXJ2ZXJTYXZlIiwidmFsIiwidHh0U2NvcmUiLCJDQ19XRUNIQVRHQU1FIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsInNjb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLGUsT0FBQUEsZTs7QUFDN0NDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7O0FBQ0FDLE1BQUFB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QUFBQSxLQUFLLEVBQUVMO0FBRmMsZUFBekI7QUFJSDs7QUFFRDdCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSDs7O1FBbEo4QmhCLFM7Ozs7O2lCQUdHLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHSyxJOzs7Ozs7O2lCQUtULEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQUdlLEk7Ozs7Ozs7aUJBR2hCLEk7Ozs7b0JBdkNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbENvbXBvbmVudCwgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFBhbmVsUm9vdCB9IGZyb20gXCIuLi9Sb290L1BhbmVsUm9vdFwiO1xyXG5pbXBvcnQgeyBNYWluUGFuZWwgfSBmcm9tIFwiLi9NYWluUGFuZWxcIjtcclxuaW1wb3J0IHsgTWFpbk1nciB9IGZyb20gXCIuLi9TeXN0ZW0vTWFpbk1nclwiO1xyXG5pbXBvcnQgeyBHYW1lQ3RyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUN0clwiO1xyXG5pbXBvcnQgeyBQbGF5UGFuZWwgfSBmcm9tIFwiLi9QbGF5UGFuZWxcIjtcclxuaW1wb3J0IHsgU2V0dGxlTWVudFBhbmVsIH0gZnJvbSBcIi4vU2V0dGxlTWVudFBhbmVsXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgU2hhcmVTdmMgfSBmcm9tIFwiLi4vU2VydmljZS9TaGFyZVN2Y1wiO1xyXG5pbXBvcnQgeyBMb2FkU3lzIH0gZnJvbSBcIi4uL1N5c3RlbS9Mb2FkU3lzXCI7XHJcbmltcG9ydCB7IE5ldFN2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL05ldFN2Y1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lT3ZlclBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L0dhbWVPdmVyUGFuZWxcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVPdmVyUGFuZWwgZXh0ZW5kcyBQYW5lbFJvb3Qge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgdHh0U2NvcmU6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBpbWdJY29uOiBTcHJpdGVDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgdHh0U3VycGFzc1ZhbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NvcmVWYWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTWFpblBhbmVsIH0pXHJcbiAgICBwdWJsaWMgbWFpblBhbmVsOiBNYWluUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFBsYXlQYW5lbCB9KVxyXG4gICAgcHVibGljIHBsYXlQYW5lbDogUGxheVBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBHYW1lQ3RyIH0pXHJcbiAgICBwdWJsaWMgZ2FtZUN0cmw6IEdhbWVDdHIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNldHRsZU1lbnRQYW5lbCB9KVxyXG4gICAgcHVibGljIHNldHRsZU1lbnRQYW5lbDogU2V0dGxlTWVudFBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMb2FkU3lzIH0pXHJcbiAgICBwdWJsaWMgbG9hZFN5czogTG9hZFN5cyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIEluaXRQYW5lbCgpIHtcclxuICAgICAgICBzdXBlci5Jbml0UGFuZWwoKTtcclxuXHJcblxyXG4gICAgICAgIC8v6K6+572u5LiK55uY5b6X5YiGXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZU92ZXJQYW5lbCBJbml0Li4uXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63mjInpkq5cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnnIvop4bpopHnv7vlgI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrV2F0Y2hWaWRlb0J0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+eci+WujOinhumikVxyXG4gICAgICAgIFNoYXJlU3ZjLkluc3RhbmNlKCkuV2F0Y2hWaWRlb0ZvckF3YXJkKCk7XHJcblxyXG4gICAgICAgIC8v5YWz6Zet6K+l55WM6Z2iXHJcbiAgICAgICAgdGhpcy5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAvL+aJk+W8gOe7k+eul+eVjOmdolxyXG4gICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5PcGVuU2V0dGxlTWVudFBhbmVsKCk7XHJcbiAgICAgICAgLy/lpZblirHnv7vlgI1cclxuICAgICAgICB0aGlzLnNldHRsZU1lbnRQYW5lbC50eHRHb2xkVmFsLnN0cmluZyA9ICh0aGlzLm9sZFNjb3JlVmFsICogMiAqIDIpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy/mm7TmlrDmlbDmja7lupNcclxuICAgICAgICAvL0xvYWRTeXMuSW5zdGFuY2UoKS5TZXJ2ZXJTYXZlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnnIvop4bpopHnv7vlgI0uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3otLnnu6fnu61cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrRnJlZVBsYXlCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgICAgLy/miZPlvIDlhY3otLnmsYLliqnpnaLmnb/vvIzmtojogJflhY3otLnnu6fnu63otYTmupBcclxuICAgICAgICAvL1RPRE9cclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlbkZyZWVDb250aW51ZVBhbmVsKCk7XHJcbiAgICAgICAgLy/lhbPpl63or6XnlYzpnaJcclxuICAgICAgICB0aGlzLlNldFBhbmVsU3RhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWFjei0uee7p+e7rS4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeCueWHu+i3s+i/h1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tTa2lwQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8v5L+d5a2Y5pWw5o2u5Yiw5pyN5Yqh56uvXHJcbiAgICAgICAgLy9Mb2FkU3lzLkluc3RhbmNlKCkuU2VydmVyU2F2ZSgpO1xyXG5cclxuICAgICAgICAvL+WFs+mXreW9k+WJjeeVjOmdolxyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgLy/ph43nva7muLjmiI/nirbmgIFcclxuICAgICAgICAvL3RoaXMuZ2FtZUN0cmwuR2FtZUJhY2tUb0xvZ2luKCk7XHJcbiAgICAgICAgLy/nu5PnrpfnlYzpnaJcclxuICAgICAgICB0aGlzLnNldHRsZU1lbnRQYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICAgICAgLy/orr7nva7ph5HluIFcclxuICAgICAgICB0aGlzLnNldHRsZU1lbnRQYW5lbC5TZXRHb2xkVmFsVUkodGhpcy5wbGF5UGFuZWwubGFzdFNjb3JlKTtcclxuICAgICAgICAvL+S4iuS8oOaVsOaNrlxyXG4gICAgICAgIC8v5Y+R6YCB5pWw5o2u57uZ5a2Q5Z+fXHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgICBrZXk6IFwibGFzdHNjb3JlXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnBsYXlQYW5lbC5sYXN0U2NvcmUudG9TdHJpbmcoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3dbJ3d4J10uc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgICAgIEtWRGF0YUxpc3Q6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4iuS8oOaVsOaNruaIkOWKnzpcIiArIHJlcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4iuS8oOaVsOaNruWksei0pe+8mlwiICsgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFN5c+acieWQl++8n++8mlwiICsgdGhpcy5sb2FkU3lzLmhlbGxvKTtcclxuICAgICAgICB0aGlzLmxvYWRTeXMuU2VydmVyU2F2ZSgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIue7k+eul+eVjOmdou+8ge+8ge+8gVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lvpfliIZVSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2V0U2NvcmVVSUluZm8odmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnR4dFNjb3JlLnN0cmluZyA9IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMub2xkU2NvcmVWYWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7otoXov4fnmoTlpb3lj4tcclxuICAgICAqIEBwYXJhbSB2YWwgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRTdXJwYXNzVUlJbmZvKHZhbCkge1xyXG4gICAgICAgIC8vdGhpcy50eHRTdXJwYXNzVmFsLnN0cmluZyA9IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIC8v5Y+R6YCB5raI5oGv57uZ5a2Q5Z+fXHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogMyxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiB2YWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u6LaF6L+H55qE5aW95Y+LXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=