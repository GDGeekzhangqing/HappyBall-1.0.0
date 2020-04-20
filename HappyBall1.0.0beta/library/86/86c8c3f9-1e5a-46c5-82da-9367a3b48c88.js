"use strict";

System.register(["cc", "../View/LoadPanel.ts", "../View/MainPanel.ts", "../View/HappyGuyPanel.ts", "../View/ModelPanel.ts", "../View/SeekHelpPanel.ts", "../View/GiftBagPanel.ts", "../View/RankListPanel.ts", "../View/SkinPanel.ts", "../View/SettleMentPanel.ts", "../View/GameOverPanel.ts", "../View/SignPanel.ts", "../View/PlayPanel.ts", "../Root/SystemRoot.ts", "../View/FreeContinuePanel.ts", "../View/TipsPanel.ts", "../View/MoreGamePanel.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LoadPanel, MainPanel, HappyGuyPanel, ModelPanel, SeekHelpPanel, GiftBagPanel, RankListPanel, SkinPanel, SettleMentPanel, GameOverPanel, SignPanel, PlayPanel, SystemRoot, FreeContinuePanel, TipsPanel, MoreGamePanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _temp, ccclass, property, MainMgr;

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
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
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
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_ViewLoadPanelTs) {
      LoadPanel = _ViewLoadPanelTs.LoadPanel;
    }, function (_ViewMainPanelTs) {
      MainPanel = _ViewMainPanelTs.MainPanel;
    }, function (_ViewHappyGuyPanelTs) {
      HappyGuyPanel = _ViewHappyGuyPanelTs.HappyGuyPanel;
    }, function (_ViewModelPanelTs) {
      ModelPanel = _ViewModelPanelTs.ModelPanel;
    }, function (_ViewSeekHelpPanelTs) {
      SeekHelpPanel = _ViewSeekHelpPanelTs.SeekHelpPanel;
    }, function (_ViewGiftBagPanelTs) {
      GiftBagPanel = _ViewGiftBagPanelTs.GiftBagPanel;
    }, function (_ViewRankListPanelTs) {
      RankListPanel = _ViewRankListPanelTs.RankListPanel;
    }, function (_ViewSkinPanelTs) {
      SkinPanel = _ViewSkinPanelTs.SkinPanel;
    }, function (_ViewSettleMentPanelTs) {
      SettleMentPanel = _ViewSettleMentPanelTs.SettleMentPanel;
    }, function (_ViewGameOverPanelTs) {
      GameOverPanel = _ViewGameOverPanelTs.GameOverPanel;
    }, function (_ViewSignPanelTs) {
      SignPanel = _ViewSignPanelTs.SignPanel;
    }, function (_ViewPlayPanelTs) {
      PlayPanel = _ViewPlayPanelTs.PlayPanel;
    }, function (_RootSystemRootTs) {
      SystemRoot = _RootSystemRootTs.SystemRoot;
    }, function (_ViewFreeContinuePanelTs) {
      FreeContinuePanel = _ViewFreeContinuePanelTs.FreeContinuePanel;
    }, function (_ViewTipsPanelTs) {
      TipsPanel = _ViewTipsPanelTs.TipsPanel;
    }, function (_ViewMoreGamePanelTs) {
      MoreGamePanel = _ViewMoreGamePanelTs.MoreGamePanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "86c8cP5HlpGxYLak2ejtIyI", "MainMgr"); // begin MainMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property; //主城业务系统
      //继承SystemRoot

      _export("MainMgr", MainMgr = (_dec = ccclass("MainMgr"), _dec2 = property({
        type: LoadPanel
      }), _dec3 = property({
        type: MainPanel
      }), _dec4 = property({
        type: HappyGuyPanel
      }), _dec5 = property({
        type: ModelPanel
      }), _dec6 = property({
        type: SeekHelpPanel
      }), _dec7 = property({
        type: GiftBagPanel
      }), _dec8 = property({
        type: RankListPanel
      }), _dec9 = property({
        type: SkinPanel
      }), _dec10 = property({
        type: SettleMentPanel
      }), _dec11 = property({
        type: GameOverPanel
      }), _dec12 = property({
        type: SignPanel
      }), _dec13 = property({
        type: PlayPanel
      }), _dec14 = property({
        type: FreeContinuePanel
      }), _dec15 = property({
        type: TipsPanel
      }), _dec16 = property({
        type: MoreGamePanel
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_SystemRoot) {
        babelHelpers.inherits(MainMgr, _SystemRoot);

        function MainMgr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MainMgr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MainMgr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "loadPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mainPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "happyguyPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "modelPanel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "seekHelpPanel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "giftbagPanel", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankListPanel", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "skinPanel", _descriptor8, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "settleMentPanel", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameoverPanel", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "signPanel", _descriptor11, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor12, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "freeContinuePanel", _descriptor13, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tipsPanel", _descriptor14, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "moregamePanel", _descriptor15, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MainMgr, [{
          key: "InitMgr",
          value: function InitMgr() {
            MainMgr.instance = this; //Instance = this;
            //加载资源函数初始化...
            //TODO

            console.log("Init MainMgr..."); //this.EnterMainCity();
          }
          /**
           * 进入主城
           */

        }, {
          key: "EnterMainCity",
          value: function EnterMainCity() {
            //设置主城UI的显示以及其它窗体的隐藏
            this.mainPanel.SetPanelState(); //这里要封装成一个方法
            //初始化MainPanel
            //this.mainPanel.InitPanel();

            console.log("进入主城...");
          }
          /**
           * 加载玩家
           */

        }, {
          key: "LoadPlayer",
          value: function LoadPlayer() {} //通过资源服务加载玩家/小球
          //设置玩家的相关属性
          //初始化相机
          //#region   主城控制各个窗体的显示隐藏
          //#region  更多游戏

          /**
           * 打开主界面
           */

        }, {
          key: "OpenMainPanel",
          value: function OpenMainPanel() {
            this.mainPanel.SetPanelState();
          } //#endregion
          //#region  幸运转盘

          /**
           * 打开幸运转盘
           */

        }, {
          key: "OpenHappyGuyPanel",
          value: function OpenHappyGuyPanel() {
            this.happyguyPanel.SetPanelState();
          }
          /**
           * 回应网络数据
           */

        }, {
          key: "RspHappyGuyData",
          value: function RspHappyGuyData(data) {} //传入的数据还没写
          //反序列数据
          //如果数据判断后为可以
          //调用抽奖、转盘相关方法

          /*if(){
            this.GetAward();//这里应该传入奖励物品的数据=》奖品 ID
          }*/
          //#endregion
          //#region  模式选择（普通模式/困难模式） 

          /**
           * 打开模式选择界面
           */

        }, {
          key: "ChooseModelPanel",
          value: function ChooseModelPanel() {
            this.modelPanel.SetPanelState();
          } //#endregion
          //#region 免费求助界面

          /**
           * 打开免费求助界面
           */

        }, {
          key: "OpenSeekHelpPanel",
          value: function OpenSeekHelpPanel() {
            this.seekHelpPanel.SetPanelState();
          }
          /**
           * 回应免费继续的钻石网络数据
           */

        }, {
          key: "RspSeekHelpData",
          value: function RspSeekHelpData() {} //#endregion
          //#region  道具礼包

          /**
           * 打开道具礼包面板
           */

        }, {
          key: "OpenGiftBagPanel",
          value: function OpenGiftBagPanel() {
            this.giftbagPanel.SetPanelState();
          } //#endregion
          //#region 排行榜界面

          /**
           * 打开排行榜界面
           */

        }, {
          key: "OpenRankListPanel",
          value: function OpenRankListPanel() {
            this.rankListPanel.SetPanelState();
          } //#endregion
          //#region 皮肤界面

          /**
           * 打开皮肤界面
           */

        }, {
          key: "OpenSkinPanel",
          value: function OpenSkinPanel() {
            this.skinPanel.SetPanelState();
            console.log("MainMgr 打开皮肤界面...");
          }
          /**
           * 回应皮肤数据
           */

        }, {
          key: "RspSkinData",
          value: function RspSkinData() {} //#endregion
          //#region  结算界面

          /**
           * 打开结算界面
           */

        }, {
          key: "OpenSettleMentPanel",
          value: function OpenSettleMentPanel() {
            this.settleMentPanel.SetPanelState();
          }
          /**
           * 回应结算数据
           */

        }, {
          key: "RspSettleMentData",
          value: function RspSettleMentData() {} //#endregion
          //#region 游戏结束界面

          /**
           * 打开游戏结束界面
           */

        }, {
          key: "OpenGameOverPanel",
          value: function OpenGameOverPanel() {
            this.gameoverPanel.SetPanelState();
          }
          /**
           * 回应游戏结束数据
           */

        }, {
          key: "RspGameOverData",
          value: function RspGameOverData() {} //#endregion
          //#region  签到界面

          /**
           * 打开签到界面
           */

        }, {
          key: "OpenSignPanel",
          value: function OpenSignPanel() {
            this.signPanel.SetPanelState();
          }
          /**
           * 回应签到数据
           */

        }, {
          key: "RspSignData",
          value: function RspSignData() {} //#endregion
          //#region  游戏界面

          /**
           * 打开游戏界面
           */

        }, {
          key: "OpenPlayPanel",
          value: function OpenPlayPanel() {
            this.playPanel.SetPanelState();
          }
          /**
           * Play
           */

        }, {
          key: "RspPlayData",
          value: function RspPlayData() {} //#endregion
          //#region  免费继续界面

          /**
           * 打开免费继续界面
           */

        }, {
          key: "OpenFreeContinuePanel",
          value: function OpenFreeContinuePanel() {
            this.freeContinuePanel.SetPanelState();
          }
          /**
           * 回应免费继续数据
           */

        }, {
          key: "RspFreeContinueData",
          value: function RspFreeContinueData() {} //#endregion
          //#region  更多游戏

          /**
           * 打开更多游戏
           */

        }, {
          key: "OpenMoreGamePanel",
          value: function OpenMoreGamePanel() {
            this.moregamePanel.SetPanelState();
          }
          /**
           * 回应更多游戏数据
           */

        }, {
          key: "RspMoreGameData",
          value: function RspMoreGameData() {} //#endregion
          //#region  设置界面

          /**
           * 打开设置界面
           */

        }, {
          key: "OpenSettingBtn",
          value: function OpenSettingBtn() {} //弃用
          // this.mainPanel.set
          //#endregion  
          //#endregion

        }], [{
          key: "Instance",
          //限制产生多个对象

          /* private constructor() {
               super();
           }*/

          /**
           * 获得实例对象
           */
          value: function Instance() {
            return this.instance;
          }
        }]);
        return MainMgr;
      }(SystemRoot), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "happyguyPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "modelPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "seekHelpPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "giftbagPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankListPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settleMentPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameoverPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "signPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "freeContinuePanel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipsPanel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moregamePanel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end MainMgr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TeXN0ZW0vTWFpbk1nci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTG9hZFBhbmVsIiwiTWFpblBhbmVsIiwiSGFwcHlHdXlQYW5lbCIsIk1vZGVsUGFuZWwiLCJTZWVrSGVscFBhbmVsIiwiR2lmdEJhZ1BhbmVsIiwiUmFua0xpc3RQYW5lbCIsIlNraW5QYW5lbCIsIlNldHRsZU1lbnRQYW5lbCIsIkdhbWVPdmVyUGFuZWwiLCJTaWduUGFuZWwiLCJQbGF5UGFuZWwiLCJTeXN0ZW1Sb290IiwiRnJlZUNvbnRpbnVlUGFuZWwiLCJUaXBzUGFuZWwiLCJNb3JlR2FtZVBhbmVsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpbk1nciIsInR5cGUiLCJpbnN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluUGFuZWwiLCJTZXRQYW5lbFN0YXRlIiwiaGFwcHlndXlQYW5lbCIsImRhdGEiLCJtb2RlbFBhbmVsIiwic2Vla0hlbHBQYW5lbCIsImdpZnRiYWdQYW5lbCIsInJhbmtMaXN0UGFuZWwiLCJza2luUGFuZWwiLCJzZXR0bGVNZW50UGFuZWwiLCJnYW1lb3ZlclBhbmVsIiwic2lnblBhbmVsIiwicGxheVBhbmVsIiwiZnJlZUNvbnRpbnVlUGFuZWwiLCJtb3JlZ2FtZVBhbmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7O0FBQ0FDLE1BQUFBLFUscUJBQUFBLFU7O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7O0FBQ0FDLE1BQUFBLFksdUJBQUFBLFk7O0FBQ0FDLE1BQUFBLGEsd0JBQUFBLGE7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLGUs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Ozs7O2lCQUdRLEk7Ozs7Ozs7aUJBR04sSTs7Ozs7OztpQkFHTSxJOzs7Ozs7O2lCQUdGLEk7Ozs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFHUixJOzs7Ozs7O2lCQUdZLEk7Ozs7Ozs7aUJBR0osSTs7Ozs7OztpQkFHUixJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR2dCLEk7Ozs7Ozs7aUJBR2hCLEk7Ozs7Ozs7aUJBR1EsSTs7OztvQkFyRXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgTG9hZFBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvTG9hZFBhbmVsXCI7XHJcbmltcG9ydCB7IE1haW5QYW5lbCB9IGZyb20gXCIuLi9WaWV3L01haW5QYW5lbFwiO1xyXG5pbXBvcnQgeyBIYXBweUd1eVBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvSGFwcHlHdXlQYW5lbFwiO1xyXG5pbXBvcnQgeyBNb2RlbFBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvTW9kZWxQYW5lbFwiO1xyXG5pbXBvcnQgeyBTZWVrSGVscFBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvU2Vla0hlbHBQYW5lbFwiO1xyXG5pbXBvcnQgeyBHaWZ0QmFnUGFuZWwgfSBmcm9tIFwiLi4vVmlldy9HaWZ0QmFnUGFuZWxcIjtcclxuaW1wb3J0IHsgUmFua0xpc3RQYW5lbCB9IGZyb20gXCIuLi9WaWV3L1JhbmtMaXN0UGFuZWxcIjtcclxuaW1wb3J0IHsgU2tpblBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvU2tpblBhbmVsXCI7XHJcbmltcG9ydCB7IFNldHRsZU1lbnRQYW5lbCB9IGZyb20gXCIuLi9WaWV3L1NldHRsZU1lbnRQYW5lbFwiO1xyXG5pbXBvcnQgeyBHYW1lT3ZlclBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvR2FtZU92ZXJQYW5lbFwiO1xyXG5pbXBvcnQgeyBTaWduUGFuZWwgfSBmcm9tIFwiLi4vVmlldy9TaWduUGFuZWxcIjtcclxuaW1wb3J0IHsgUGxheVBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvUGxheVBhbmVsXCI7XHJcbmltcG9ydCB7IFN5c3RlbVJvb3QgfSBmcm9tIFwiLi4vUm9vdC9TeXN0ZW1Sb290XCI7XHJcbmltcG9ydCB7IEdhbWVSb290IH0gZnJvbSBcIi4uL1Jvb3QvR2FtZVJvb3RcIjtcclxuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IEZyZWVDb250aW51ZVBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvRnJlZUNvbnRpbnVlUGFuZWxcIjtcclxuaW1wb3J0IHsgVGlwc1BhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvVGlwc1BhbmVsXCI7XHJcbmltcG9ydCB7IE1vcmVHYW1lUGFuZWwgfSBmcm9tIFwiLi4vVmlldy9Nb3JlR2FtZVBhbmVsXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5cclxuLy/kuLvln47kuJrliqHns7vnu59cclxuLy/nu6fmib9TeXN0ZW1Sb290XHJcbkBjY2NsYXNzKFwiTWFpbk1nclwiKVxyXG5leHBvcnQgY2xhc3MgTWFpbk1nciBleHRlbmRzIFN5c3RlbVJvb3Qge1xyXG5cclxuICAgIC8vI3JlZ2lvbiAg56qX5L2T5byV55So5oyB5pyJXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMb2FkUGFuZWwgfSlcclxuICAgIHB1YmxpYyBsb2FkUGFuZWw6IExvYWRQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTWFpblBhbmVsIH0pXHJcbiAgICBwdWJsaWMgbWFpblBhbmVsOiBNYWluUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEhhcHB5R3V5UGFuZWwgfSlcclxuICAgIHB1YmxpYyBoYXBweWd1eVBhbmVsOiBIYXBweUd1eVBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBNb2RlbFBhbmVsIH0pXHJcbiAgICBwdWJsaWMgbW9kZWxQYW5lbDogTW9kZWxQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU2Vla0hlbHBQYW5lbCB9KVxyXG4gICAgcHVibGljIHNlZWtIZWxwUGFuZWw6IFNlZWtIZWxwUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdpZnRCYWdQYW5lbCB9KVxyXG4gICAgcHVibGljIGdpZnRiYWdQYW5lbDogR2lmdEJhZ1BhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBSYW5rTGlzdFBhbmVsIH0pXHJcbiAgICBwdWJsaWMgcmFua0xpc3RQYW5lbDogUmFua0xpc3RQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU2tpblBhbmVsIH0pXHJcbiAgICBwdWJsaWMgc2tpblBhbmVsOiBTa2luUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNldHRsZU1lbnRQYW5lbCB9KVxyXG4gICAgcHVibGljIHNldHRsZU1lbnRQYW5lbDogU2V0dGxlTWVudFBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBHYW1lT3ZlclBhbmVsIH0pXHJcbiAgICBwdWJsaWMgZ2FtZW92ZXJQYW5lbDogR2FtZU92ZXJQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU2lnblBhbmVsIH0pXHJcbiAgICBwdWJsaWMgc2lnblBhbmVsOiBTaWduUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFBsYXlQYW5lbCB9KVxyXG4gICAgcHVibGljIHBsYXlQYW5lbDogUGxheVBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBGcmVlQ29udGludWVQYW5lbCB9KVxyXG4gICAgcHVibGljIGZyZWVDb250aW51ZVBhbmVsOiBGcmVlQ29udGludWVQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogVGlwc1BhbmVsIH0pXHJcbiAgICBwdWJsaWMgdGlwc1BhbmVsOiBUaXBzUGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE1vcmVHYW1lUGFuZWwgfSlcclxuICAgIHB1YmxpYyBtb3JlZ2FtZVBhbmVsOiBNb3JlR2FtZVBhbmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuICAgIFxyXG4gICAgLy8jcmVnaW9uICDljZXkvotcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWFpbk1nciA9IG51bGw7XHJcblxyXG4gICAgLy/pmZDliLbkuqfnlJ/lpJrkuKrlr7nosaFcclxuICAgIC8qIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgfSovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpflrp7kvovlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBNYWluTWdyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSW5pdE1ncigpIHtcclxuICAgICAgICBNYWluTWdyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvL0luc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvL+WKoOi9vei1hOa6kOWHveaVsOWIneWni+WMli4uLlxyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdCBNYWluTWdyLi4uXCIpO1xyXG4gICAgICAgIC8vdGhpcy5FbnRlck1haW5DaXR5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5YWl5Li75Z+OXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBFbnRlck1haW5DaXR5KCkge1xyXG5cclxuICAgICAgICAvL+iuvue9ruS4u+WfjlVJ55qE5pi+56S65Lul5Y+K5YW25a6D56qX5L2T55qE6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tYWluUGFuZWwuU2V0UGFuZWxTdGF0ZSgpOy8v6L+Z6YeM6KaB5bCB6KOF5oiQ5LiA5Liq5pa55rOVXHJcbiAgICAgICAgIC8v5Yid5aeL5YyWTWFpblBhbmVsXHJcbiAgICAgICAgIC8vdGhpcy5tYWluUGFuZWwuSW5pdFBhbmVsKCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl5Li75Z+OLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L29546p5a62XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBMb2FkUGxheWVyKCkge1xyXG4gICAgICAgIC8v6YCa6L+H6LWE5rqQ5pyN5Yqh5Yqg6L29546p5a62L+Wwj+eQg1xyXG5cclxuICAgICAgICAvL+iuvue9rueOqeWutueahOebuOWFs+WxnuaAp1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluebuOaculxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8jcmVnaW9uICAg5Li75Z+O5o6n5Yi25ZCE5Liq56qX5L2T55qE5pi+56S66ZqQ6JePXHJcblxyXG4gICAgLy8jcmVnaW9uICDmm7TlpJrmuLjmiI9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOS4u+eVjOmdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3Blbk1haW5QYW5lbCgpIHtcclxuICAgICAgICB0aGlzLm1haW5QYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uICDlubjov5Dovaznm5hcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOW5uOi/kOi9rOebmFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlbkhhcHB5R3V5UGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5oYXBweWd1eVBhbmVsLlNldFBhbmVsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuW6lOe9kee7nOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUnNwSGFwcHlHdXlEYXRhKGRhdGEpIHsgIC8v5Lyg5YWl55qE5pWw5o2u6L+Y5rKh5YaZXHJcbiAgICAgICAgLy/lj43luo/liJfmlbDmja5cclxuXHJcbiAgICAgICAgLy/lpoLmnpzmlbDmja7liKTmlq3lkI7kuLrlj6/ku6VcclxuICAgICAgICAvL+iwg+eUqOaKveWlluOAgei9rOebmOebuOWFs+aWueazlVxyXG4gICAgICAgIC8qaWYoKXtcclxuICAgICAgICAgIHRoaXMuR2V0QXdhcmQoKTsvL+i/memHjOW6lOivpeS8oOWFpeWlluWKseeJqeWTgeeahOaVsOaNrj3jgIvlpZblk4EgSURcclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOaooeW8j+mAieaLqe+8iOaZrumAmuaooeW8jy/lm7Dpmr7mqKHlvI/vvIkgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDmqKHlvI/pgInmi6nnlYzpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIENob29zZU1vZGVsUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbFBhbmVsLlNldFBhbmVsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiDlhY3otLnmsYLliqnnlYzpnaJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOWFjei0ueaxguWKqeeVjOmdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlblNlZWtIZWxwUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZWVrSGVscFBhbmVsLlNldFBhbmVsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuW6lOWFjei0uee7p+e7reeahOmSu+efs+e9kee7nOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUnNwU2Vla0hlbHBEYXRhKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOmBk+WFt+ekvOWMhVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA6YGT5YW356S85YyF6Z2i5p2/XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBPcGVuR2lmdEJhZ1BhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuZ2lmdGJhZ1BhbmVsLlNldFBhbmVsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24g5o6S6KGM5qac55WM6Z2iXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDmjpLooYzmppznlYzpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIE9wZW5SYW5rTGlzdFBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMucmFua0xpc3RQYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiDnmq7ogqTnlYzpnaJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOearuiCpOeVjOmdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlblNraW5QYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnNraW5QYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluTWdyIOaJk+W8gOearuiCpOeVjOmdoi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuW6lOearuiCpOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUnNwU2tpbkRhdGEoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg57uT566X55WM6Z2iXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDnu5PnrpfnlYzpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIE9wZW5TZXR0bGVNZW50UGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0bGVNZW50UGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU57uT566X5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BTZXR0bGVNZW50RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uIOa4uOaIj+e7k+adn+eVjOmdolxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5ri45oiP57uT5p2f55WM6Z2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBPcGVuR2FtZU92ZXJQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU5ri45oiP57uT5p2f5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BHYW1lT3ZlckRhdGEoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg562+5Yiw55WM6Z2iXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDnrb7liLDnlYzpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIE9wZW5TaWduUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zaWduUGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU562+5Yiw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BTaWduRGF0YSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uICDmuLjmiI/nlYzpnaJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOa4uOaIj+eVjOmdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlblBsYXlQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlQYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BQbGF5RGF0YSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uICDlhY3otLnnu6fnu63nlYzpnaJcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOWFjei0uee7p+e7reeVjOmdolxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgT3BlbkZyZWVDb250aW51ZVBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuZnJlZUNvbnRpbnVlUGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU5YWN6LS557un57ut5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BGcmVlQ29udGludWVEYXRhKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOabtOWkmua4uOaIj1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5pu05aSa5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBPcGVuTW9yZUdhbWVQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLm1vcmVnYW1lUGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU5pu05aSa5ri45oiP5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BNb3JlR2FtZURhdGEoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg6K6+572u55WM6Z2iXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDorr7nva7nlYzpnaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIE9wZW5TZXR0aW5nQnRuKCkgeyAvL+W8g+eUqFxyXG4gICAgICAgIC8vIHRoaXMubWFpblBhbmVsLnNldFxyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvbiAgXHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG59XHJcbiJdfQ==