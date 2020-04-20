"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../System/MainMgr.ts", "../System/SettingMgr.ts", "../Service/ShareSvc.ts", "../Controller/GameCtr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, UITransformComponent, LabelComponent, SpriteComponent, Vec3, SpriteFrame, PanelRoot, MainMgr, SettingMgr, ShareSvc, ShareLinkType, GameCtr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _temp, ccclass, property, MainPanel;

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
    _dec17: void 0,
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
      UITransformComponent = _cc.UITransformComponent;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
      Vec3 = _cc.Vec3;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_SystemSettingMgrTs) {
      SettingMgr = _SystemSettingMgrTs.SettingMgr;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3068chNXwRGUKvHIuoqxAWz", "MainPanel"); // begin MainPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainPanel", MainPanel = (_dec = ccclass("MainPanel"), _dec2 = _decorator.menu("View/MainPanel"), _dec3 = property({
        type: UITransformComponent
      }), _dec4 = property({
        type: UITransformComponent
      }), _dec5 = property({
        type: UITransformComponent
      }), _dec6 = property({
        type: LabelComponent
      }), _dec7 = property({
        type: SpriteComponent
      }), _dec8 = property({
        type: LabelComponent
      }), _dec9 = property({
        type: GameCtr
      }), _dec10 = property({
        type: UITransformComponent
      }), _dec11 = property({
        type: SettingMgr
      }), _dec12 = property([SpriteFrame]), _dec13 = property([SpriteFrame]), _dec14 = property([SpriteFrame]), _dec15 = property({
        type: SpriteComponent
      }), _dec16 = property({
        type: SpriteComponent
      }), _dec17 = property({
        type: SpriteComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(MainPanel, _PanelRoot);

        function MainPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MainPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MainPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "settingPos", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "fristPos", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "laterPos", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtWillGetVal", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgWillGetSkin", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtCurrentScore", _descriptor6, babelHelpers.assertThisInitialized(_this));
          _this.isSettingActive = false;
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgLight", _descriptor8, babelHelpers.assertThisInitialized(_this));
          _this.rotaVal = 0;
          babelHelpers.initializerDefineProperty(_this, "settingMgr", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spVolume", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spImageQuality", _descriptor11, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spVibration", _descriptor12, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgVolume", _descriptor13, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgImageQuality", _descriptor14, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgVibration", _descriptor15, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MainPanel, [{
          key: "InitPanel",
          //#endregion
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(MainPanel.prototype), "InitPanel", this).call(this);
            console.log(" Main Panel init...");
          }
        }, {
          key: "update",
          value: function update() {
            this.rotaVal += 1;
            this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);
          } //#region  公共按钮函数

          /**
           * 更多游戏
           */

        }, {
          key: "ClickMoreGameBtn",
          value: function ClickMoreGameBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //加载网络数据

            MainMgr.Instance().OpenMoreGamePanel();
          }
          /**
           * 将要获得
           */

        }, {
          key: "ClickWillGetBtn",
          value: function ClickWillGetBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开皮肤面板

            MainMgr.Instance().OpenSkinPanel();
          }
          /**
           * 签到
           */

        }, {
          key: "ClickSignBtn",
          value: function ClickSignBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开签到面板

            MainMgr.Instance().OpenSignPanel();
          }
          /**
           * 设置
           */

        }, {
          key: "ClickSettingBtn",
          value: function ClickSettingBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开设置面板

            if (this.isSettingActive == false) {
              this.settingPos.node.active = true;
              this.isSettingActive = true;
            } else {
              this.settingPos.node.active = false;
              this.isSettingActive = false;
            }
          }
          /**
           * 皮肤
           */

        }, {
          key: "ClickSkinBtn",
          value: function ClickSkinBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开皮肤面板

            MainMgr.Instance().OpenSkinPanel();
            console.log("MainPanel ClickSkinBtn...");
          }
          /**
           * 分享
           */

        }, {
          key: "ClickShareBtn",
          value: function ClickShareBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开分享渠道
            //TODO
            //this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickShareBtn...");
          }
          /**
           * 模式
           */

        }, {
          key: "ClickModelBtn",
          value: function ClickModelBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //选择难度
            //如果不满足条件，则打开面板

            MainMgr.Instance().ChooseModelPanel();
            console.log("MainPanel ClickModelBtn...");
          }
          /**
           * 继续
           */

        }, {
          key: "ClickContinueBtn",
          value: function ClickContinueBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开寻求帮助面板

            MainMgr.Instance().OpenFreeContinuePanel();
            console.log("MainPanel ClickContinueBtn...");
          }
          /**
           * 幸运转盘
           */

        }, {
          key: "ClickHappyGuyBtn",
          value: function ClickHappyGuyBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开幸运转盘面板

            MainMgr.Instance().OpenHappyGuyPanel();
            console.log("MainPanel ClickHappyGuyBtn...");
          }
          /**
           * 道具礼包
           */

        }, {
          key: "ClickGiftBagBtn",
          value: function ClickGiftBagBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开道具礼包面板

            MainMgr.Instance().OpenGiftBagPanel();
            console.log("MainPanel ClickGiftBagBtn...");
          }
          /**
           * 音量开关
           */

        }, {
          key: "ClickVolumeBtn",
          value: function ClickVolumeBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //SettingMgr.Instance().SetAudioEnable();

            this.settingMgr.SetAudioEnable(); //更换图片

            if (this.settingMgr.isVolume == false) {
              this.imgVolume.spriteFrame = this.spVolume[0];
            } else {
              this.imgVolume.spriteFrame = this.spVolume[1];
            }

            console.log("点击 音量开关...");
          }
          /**
           *画质选择
           */

        }, {
          key: "ClickImageQualityBtn",
          value: function ClickImageQualityBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //怎么做？
            //设置相机分辨率
            //SettingMgr.Instance().SetFuzzyMask();

            this.settingMgr.SetFuzzyMask(); //更换图片

            if (this.settingMgr.isImageQuality == false) {
              this.imgImageQuality.spriteFrame = this.spImageQuality[0];
            } else {
              this.imgImageQuality.spriteFrame = this.spImageQuality[1];
            }

            console.log("MainPanel ClickImageQualityBtn...");
          }
          /**
           * 振动开关
           */

        }, {
          key: "ClickVibrtionBtn",
          value: function ClickVibrtionBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //设置振动
            //SettingMgr.Instance().SetVibrate();

            this.settingMgr.SetVibrate(); //更换图片

            if (this.settingMgr.isVibration == false) {
              this.imgVibration.spriteFrame = this.spVibration[0];
            } else {
              this.imgVibration.spriteFrame = this.spVibration[1];
            }

            console.log("MainPanel ClickVibrtionBtn...");
          } //#endregion
          //#region  未玩时函数

          /**
           * 开始游戏
           */

        }, {
          key: "ClickStartPlayBtn",
          value: function ClickStartPlayBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //开始游戏
            //GameSys.Instance().InitSys();

            this.gameCtrl.GameStart(); //隐藏主UI

            this.node.active = false; //显示游戏时的UI

            MainMgr.Instance().OpenPlayPanel();
            console.log("MainPanel ClickStartPlayBtn...");
          }
          /**
           * 排行榜
           */

        }, {
          key: "ClickRankListBtn",
          value: function ClickRankListBtn() {
            //这个逻辑要补，打开对应的排行榜
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开排行榜

            MainMgr.Instance().OpenRankListPanel(); //调用对应的函数

            console.log("MainPanel ClickIRankListBtn...");
          }
          /**
           * 查看群排行
           */

        }, {
          key: "ClickCrowdRankListBtn",
          value: function ClickCrowdRankListBtn() {
            //这个逻辑要补，打开对应的排行榜
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开排行榜

            MainMgr.Instance().OpenRankListPanel(); //调用对应的函数

            console.log("MainPanel ClickImageQualityBtn...");
          } //#endregion
          //#region  玩过后的函数

          /**
           * 显示本次得分
           */

        }, {
          key: "ShowScore",
          value: function ShowScore(val) {
            //拿到本次得分，赋值给UI
            this.txtCurrentScore.string = val.toString();
          }
          /**
           * 发起挑战
           */

        }, {
          key: "ClickChallengeBtn",
          value: function ClickChallengeBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //调用分享吗，或许有点不一样，不只只是分享

            this.shareSvc.ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickChanllengeBtn...");
          }
          /**
           * 发起接力
           */

        }, {
          key: "ClickRelayBtn",
          value: function ClickRelayBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //发起接力
            // this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickRelayBtn...");
          }
          /**
           * 再玩一局
           */

        }, {
          key: "ClickPlayAgainBtn",
          value: function ClickPlayAgainBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //开始游戏
            //GameSys.Instance().InitSys();

            this.gameCtrl.GameRestart(); //隐藏主UI

            this.node.active = false; //显示游戏时的UI

            MainMgr.Instance().OpenPlayPanel();
            console.log("MainPanel ClickRelayAgainBtn...");
          } //#endregion

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
        return MainPanel;
      }(PanelRoot), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settingPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "fristPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "laterPos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtWillGetVal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgWillGetSkin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtCurrentScore", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settingMgr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spVolume", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spImageQuality", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spVibration", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgVolume", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgImageQuality", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgVibration", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end MainPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L01haW5QYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIlNwcml0ZUNvbXBvbmVudCIsIlZlYzMiLCJTcHJpdGVGcmFtZSIsIlBhbmVsUm9vdCIsIk1haW5NZ3IiLCJTZXR0aW5nTWdyIiwiU2hhcmVTdmMiLCJTaGFyZUxpbmtUeXBlIiwiR2FtZUN0ciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5QYW5lbCIsIm1lbnUiLCJ0eXBlIiwiaXNTZXR0aW5nQWN0aXZlIiwicm90YVZhbCIsImNvbnNvbGUiLCJsb2ciLCJpbWdMaWdodCIsIm5vZGUiLCJldWxlckFuZ2xlcyIsImF1ZGlvU3ZjIiwiUGxheVVJQXVkaW8iLCJJbnN0YW5jZSIsIk9wZW5Nb3JlR2FtZVBhbmVsIiwiT3BlblNraW5QYW5lbCIsIk9wZW5TaWduUGFuZWwiLCJzZXR0aW5nUG9zIiwiYWN0aXZlIiwiU2hhcmVMaW5rIiwiQm90aCIsIkNob29zZU1vZGVsUGFuZWwiLCJPcGVuRnJlZUNvbnRpbnVlUGFuZWwiLCJPcGVuSGFwcHlHdXlQYW5lbCIsIk9wZW5HaWZ0QmFnUGFuZWwiLCJzZXR0aW5nTWdyIiwiU2V0QXVkaW9FbmFibGUiLCJpc1ZvbHVtZSIsImltZ1ZvbHVtZSIsInNwcml0ZUZyYW1lIiwic3BWb2x1bWUiLCJTZXRGdXp6eU1hc2siLCJpc0ltYWdlUXVhbGl0eSIsImltZ0ltYWdlUXVhbGl0eSIsInNwSW1hZ2VRdWFsaXR5IiwiU2V0VmlicmF0ZSIsImlzVmlicmF0aW9uIiwiaW1nVmlicmF0aW9uIiwic3BWaWJyYXRpb24iLCJnYW1lQ3RybCIsIkdhbWVTdGFydCIsIk9wZW5QbGF5UGFuZWwiLCJPcGVuUmFua0xpc3RQYW5lbCIsInZhbCIsInR4dEN1cnJlbnRTY29yZSIsInN0cmluZyIsInRvU3RyaW5nIiwic2hhcmVTdmMiLCJHYW1lUmVzdGFydCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxvQixPQUFBQSxvQjtBQUFzQkMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxXLE9BQUFBLFc7O0FBQzFGQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxPLG9CQUFBQSxPOztBQUNBQyxNQUFBQSxVLHVCQUFBQSxVOztBQUNBQyxNQUFBQSxRLHNCQUFBQSxRO0FBQVVDLE1BQUFBLGEsc0JBQUFBLGE7O0FBQ1ZDLE1BQUFBLE8sd0JBQUFBLE87OztnRkFIZ0U7OztBQUtqRUMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUTs7MkJBSUpDLFMsV0FGWkYsT0FBTyxDQUFDLFdBQUQsQyxVQUNQWixVQUFVLENBQUNlLElBQVgsQ0FBZ0IsZ0JBQWhCLEMsVUFLSUYsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFHUlcsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFLUlcsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRUw7QUFBUixPQUFELEMsV0FHUkUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsV0FLUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsV0FHUkssUUFBUSxDQUFDLENBQUNSLFdBQUQsQ0FBRCxDLFdBR1JRLFFBQVEsQ0FBQyxDQUFDUixXQUFELENBQUQsQyxXQUdSUSxRQUFRLENBQUMsQ0FBQ1IsV0FBRCxDQUFELEMsV0FHUlEsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsV0FHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsV0FHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQTVCRGMsZSxHQUEyQixLOzs7Z0JBUTVCQyxPLEdBQVUsQzs7Ozs7Ozs7Ozs7OztBQThDakI7c0NBRW1CO0FBQ2Y7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDSDs7O21DQUVRO0FBQ0wsaUJBQUtGLE9BQUwsSUFBZ0IsQ0FBaEI7QUFDQSxpQkFBS0csUUFBTCxDQUFjQyxJQUFkLENBQW1CQyxXQUFuQixHQUFpQyxJQUFJbkIsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsS0FBS2MsT0FBcEIsQ0FBakM7QUFDSCxXLENBRUQ7O0FBRUE7Ozs7Ozs2Q0FHMEI7QUFDdEI7QUFDQSxpQkFBS00sUUFBTCxDQUFjQyxXQUFkLEdBRnNCLENBR3RCOztBQUNBbEIsWUFBQUEsT0FBTyxDQUFDbUIsUUFBUixHQUFtQkMsaUJBQW5CO0FBQ0g7QUFHRDs7Ozs7OzRDQUd5QjtBQUNyQjtBQUNBLGlCQUFLSCxRQUFMLENBQWNDLFdBQWQsR0FGcUIsQ0FHckI7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CRSxhQUFuQjtBQUNIO0FBRUQ7Ozs7Ozt5Q0FHc0I7QUFDbEI7QUFDQSxpQkFBS0osUUFBTCxDQUFjQyxXQUFkLEdBRmtCLENBR2xCOztBQUNBbEIsWUFBQUEsT0FBTyxDQUFDbUIsUUFBUixHQUFtQkcsYUFBbkI7QUFDSDtBQUVEOzs7Ozs7NENBR3lCO0FBQ3JCO0FBQ0EsaUJBQUtMLFFBQUwsQ0FBY0MsV0FBZCxHQUZxQixDQUdyQjs7QUFDQSxnQkFBSSxLQUFLUixlQUFMLElBQXdCLEtBQTVCLEVBQW1DO0FBQy9CLG1CQUFLYSxVQUFMLENBQWdCUixJQUFoQixDQUFxQlMsTUFBckIsR0FBOEIsSUFBOUI7QUFDQSxtQkFBS2QsZUFBTCxHQUF1QixJQUF2QjtBQUNILGFBSEQsTUFJSztBQUNELG1CQUFLYSxVQUFMLENBQWdCUixJQUFoQixDQUFxQlMsTUFBckIsR0FBOEIsS0FBOUI7QUFDQSxtQkFBS2QsZUFBTCxHQUF1QixLQUF2QjtBQUNIO0FBQ0o7QUFFRDs7Ozs7O3lDQUdzQjtBQUNsQjtBQUNBLGlCQUFLTyxRQUFMLENBQWNDLFdBQWQsR0FGa0IsQ0FHbEI7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CRSxhQUFuQjtBQUNBVCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNIO0FBRUQ7Ozs7OzswQ0FHdUI7QUFDbkI7QUFDQSxpQkFBS0ksUUFBTCxDQUFjQyxXQUFkLEdBRm1CLENBR25CO0FBQ0E7QUFDQTs7QUFDQWhCLFlBQUFBLFFBQVEsQ0FBQ2lCLFFBQVQsR0FBb0JNLFNBQXBCLENBQThCdEIsYUFBYSxDQUFDdUIsSUFBNUM7QUFDQWQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDSDtBQUVEOzs7Ozs7MENBR3VCO0FBQ25CO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBY0MsV0FBZCxHQUZtQixDQUduQjtBQUNBOztBQUNBbEIsWUFBQUEsT0FBTyxDQUFDbUIsUUFBUixHQUFtQlEsZ0JBQW5CO0FBQ0FmLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0g7QUFFRDs7Ozs7OzZDQUcwQjtBQUN0QjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGc0IsQ0FHdEI7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CUyxxQkFBbkI7QUFDQWhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0g7QUFFRDs7Ozs7OzZDQUcwQjtBQUN0QjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGc0IsQ0FHdEI7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CVSxpQkFBbkI7QUFDQWpCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0g7QUFFRDs7Ozs7OzRDQUd5QjtBQUNyQjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGcUIsQ0FHckI7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CVyxnQkFBbkI7QUFDQWxCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0g7QUFFRDs7Ozs7OzJDQUd3QjtBQUNwQjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGb0IsQ0FJcEI7O0FBQ0EsaUJBQUthLFVBQUwsQ0FBZ0JDLGNBQWhCLEdBTG9CLENBTXBCOztBQUNBLGdCQUFJLEtBQUtELFVBQUwsQ0FBZ0JFLFFBQWhCLElBQTRCLEtBQWhDLEVBQXVDO0FBQ25DLG1CQUFLQyxTQUFMLENBQWVDLFdBQWYsR0FBNkIsS0FBS0MsUUFBTCxDQUFjLENBQWQsQ0FBN0I7QUFDSCxhQUZELE1BR0s7QUFDRCxtQkFBS0YsU0FBTCxDQUFlQyxXQUFmLEdBQTZCLEtBQUtDLFFBQUwsQ0FBYyxDQUFkLENBQTdCO0FBQ0g7O0FBQ0R4QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7QUFFRDs7Ozs7O2lEQUc4QjtBQUMxQjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGMEIsQ0FHMUI7QUFDQTtBQUNBOztBQUNBLGlCQUFLYSxVQUFMLENBQWdCTSxZQUFoQixHQU4wQixDQU8xQjs7QUFDQSxnQkFBSSxLQUFLTixVQUFMLENBQWdCTyxjQUFoQixJQUFrQyxLQUF0QyxFQUE2QztBQUN6QyxtQkFBS0MsZUFBTCxDQUFxQkosV0FBckIsR0FBbUMsS0FBS0ssY0FBTCxDQUFvQixDQUFwQixDQUFuQztBQUNILGFBRkQsTUFHSztBQUNELG1CQUFLRCxlQUFMLENBQXFCSixXQUFyQixHQUFtQyxLQUFLSyxjQUFMLENBQW9CLENBQXBCLENBQW5DO0FBQ0g7O0FBQ0Q1QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNIO0FBRUQ7Ozs7Ozs2Q0FHMEI7QUFDdEI7QUFDQSxpQkFBS0ksUUFBTCxDQUFjQyxXQUFkLEdBRnNCLENBSXRCO0FBQ0E7O0FBQ0EsaUJBQUthLFVBQUwsQ0FBZ0JVLFVBQWhCLEdBTnNCLENBT3RCOztBQUNBLGdCQUFJLEtBQUtWLFVBQUwsQ0FBZ0JXLFdBQWhCLElBQStCLEtBQW5DLEVBQTBDO0FBQ3RDLG1CQUFLQyxZQUFMLENBQWtCUixXQUFsQixHQUFnQyxLQUFLUyxXQUFMLENBQWlCLENBQWpCLENBQWhDO0FBQ0gsYUFGRCxNQUdLO0FBQ0QsbUJBQUtELFlBQUwsQ0FBa0JSLFdBQWxCLEdBQWdDLEtBQUtTLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBaEM7QUFDSDs7QUFDRGhDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0gsVyxDQUVEO0FBRUE7O0FBRUE7Ozs7Ozs4Q0FHMkI7QUFFdkI7QUFDQSxpQkFBS0ksUUFBTCxDQUFjQyxXQUFkLEdBSHVCLENBSXZCO0FBQ0E7O0FBQ0EsaUJBQUsyQixRQUFMLENBQWNDLFNBQWQsR0FOdUIsQ0FPdkI7O0FBQ0EsaUJBQUsvQixJQUFMLENBQVVTLE1BQVYsR0FBbUIsS0FBbkIsQ0FSdUIsQ0FTdkI7O0FBQ0F4QixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CNEIsYUFBbkI7QUFDQW5DLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaO0FBQ0g7QUFFRDs7Ozs7OzZDQUcwQjtBQUFDO0FBQ3ZCO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBY0MsV0FBZCxHQUZzQixDQUd0Qjs7QUFDQWxCLFlBQUFBLE9BQU8sQ0FBQ21CLFFBQVIsR0FBbUI2QixpQkFBbkIsR0FKc0IsQ0FNdEI7O0FBQ0FwQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNIO0FBRUQ7Ozs7OztrREFHK0I7QUFBQztBQUM1QjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGMkIsQ0FHM0I7O0FBQ0FsQixZQUFBQSxPQUFPLENBQUNtQixRQUFSLEdBQW1CNkIsaUJBQW5CLEdBSjJCLENBSzNCOztBQUNBcEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDSCxXLENBRUQ7QUFFQTs7QUFFQTs7Ozs7O29DQUdpQm9DLEcsRUFBYTtBQUMxQjtBQUNBLGlCQUFLQyxlQUFMLENBQXFCQyxNQUFyQixHQUE4QkYsR0FBRyxDQUFDRyxRQUFKLEVBQTlCO0FBQ0g7QUFFRDs7Ozs7OzhDQUcyQjtBQUN2QjtBQUNBLGlCQUFLbkMsUUFBTCxDQUFjQyxXQUFkLEdBRnVCLENBR3ZCOztBQUNBLGlCQUFLbUMsUUFBTCxDQUFjNUIsU0FBZCxDQUF3QnRCLGFBQWEsQ0FBQ3VCLElBQXRDO0FBQ0FkLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0g7QUFFRDs7Ozs7OzBDQUd1QjtBQUNuQjtBQUNBLGlCQUFLSSxRQUFMLENBQWNDLFdBQWQsR0FGbUIsQ0FHbkI7QUFDQTs7QUFDQWhCLFlBQUFBLFFBQVEsQ0FBQ2lCLFFBQVQsR0FBb0JNLFNBQXBCLENBQThCdEIsYUFBYSxDQUFDdUIsSUFBNUM7QUFDQWQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDSDtBQUVEOzs7Ozs7OENBRzJCO0FBQ3ZCO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBY0MsV0FBZCxHQUZ1QixDQUd2QjtBQUNBOztBQUNBLGlCQUFLMkIsUUFBTCxDQUFjUyxXQUFkLEdBTHVCLENBTXZCOztBQUNBLGlCQUFLdkMsSUFBTCxDQUFVUyxNQUFWLEdBQW1CLEtBQW5CLENBUHVCLENBUXZCOztBQUNBeEIsWUFBQUEsT0FBTyxDQUFDbUIsUUFBUixHQUFtQjRCLGFBQW5CO0FBQ0FuQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNILFcsQ0FFRDs7OztBQTNTQTs7QUFDQTs7OztBQUtBOzs7cUNBR29DO0FBQ2hDLG1CQUFPLEtBQUswQyxRQUFaO0FBQ0g7OztRQTNFMEJ4RCxTLFdBNkRad0QsUSxHQUFzQixJOzs7OztpQkF4REssSTs7Ozs7OztpQkFHRixJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0QsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBS2QsSTs7Ozs7OztpQkFHYSxJOzs7Ozs7O2lCQUtSLEk7Ozs7Ozs7aUJBR0MsRTs7Ozs7OztpQkFHTSxFOzs7Ozs7O2lCQUdILEU7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHTSxJOzs7Ozs7O2lCQUdILEk7Ozs7b0JBNUR6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBTcHJpdGVDb21wb25lbnQsIFZlYzMsIFNwcml0ZUZyYW1lIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFBhbmVsUm9vdCB9IGZyb20gXCIuLi9Sb290L1BhbmVsUm9vdFwiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4uL1N5c3RlbS9NYWluTWdyXCI7XHJcbmltcG9ydCB7IFNldHRpbmdNZ3IgfSBmcm9tIFwiLi4vU3lzdGVtL1NldHRpbmdNZ3JcIjtcclxuaW1wb3J0IHsgU2hhcmVTdmMsIFNoYXJlTGlua1R5cGUgfSBmcm9tIFwiLi4vU2VydmljZS9TaGFyZVN2Y1wiO1xyXG5pbXBvcnQgeyBHYW1lQ3RyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUN0clwiO1xyXG5pbXBvcnQgeyBOZXRTdmMgfSBmcm9tIFwiLi4vU2VydmljZS9OZXRTdmNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiTWFpblBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L01haW5QYW5lbFwiKVxyXG5leHBvcnQgY2xhc3MgTWFpblBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuXHJcbiAgICAvLyNyZWdpb24gIFVJIOW8leeUqFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFVJVHJhbnNmb3JtQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgc2V0dGluZ1BvczogVUlUcmFuc2Zvcm1Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFVJVHJhbnNmb3JtQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgZnJpc3RQb3M6IFVJVHJhbnNmb3JtQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGxhdGVyUG9zOiBVSVRyYW5zZm9ybUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB0eHRXaWxsR2V0VmFsOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgaW1nV2lsbEdldFNraW46IFNwcml0ZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB0eHRDdXJyZW50U2NvcmU6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzU2V0dGluZ0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVDdHIgfSlcclxuICAgIHB1YmxpYyBnYW1lQ3RybDogR2FtZUN0ciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogVUlUcmFuc2Zvcm1Db21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBpbWdMaWdodDogVUlUcmFuc2Zvcm1Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyByb3RhVmFsID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTZXR0aW5nTWdyIH0pXHJcbiAgICBwdWJsaWMgc2V0dGluZ01ncjogU2V0dGluZ01nciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtTcHJpdGVGcmFtZV0pXHJcbiAgICBwdWJsaWMgc3BWb2x1bWU6IFNwcml0ZUZyYW1lW10gPSBbXTsvLzAg5YWzIDEg5byAXHJcblxyXG4gICAgQHByb3BlcnR5KFtTcHJpdGVGcmFtZV0pXHJcbiAgICBwdWJsaWMgc3BJbWFnZVF1YWxpdHk6IFNwcml0ZUZyYW1lW10gPSBbXTsgLy8wIOa1geeVhSAgMSDpq5jmuIVcclxuXHJcbiAgICBAcHJvcGVydHkoW1Nwcml0ZUZyYW1lXSlcclxuICAgIHB1YmxpYyBzcFZpYnJhdGlvbjogU3ByaXRlRnJhbWVbXSA9IFtdOy8vMCDmjK/liqggIDEg5LiN5oyv5YqoXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgaW1nVm9sdW1lOiBTcHJpdGVDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGltZ0ltYWdlUXVhbGl0eTogU3ByaXRlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBpbWdWaWJyYXRpb246IFNwcml0ZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgbG9naW5CdG47XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uICDljZXkvotcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOZXRNZ3IgPSBuZXcgTmV0TWdyKCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWFpblBhbmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy/pmZDliLbkuqfnlJ/lpJrkuKrlr7nosaFcclxuICAgIC8qIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgfSovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IE1haW5QYW5lbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBwdWJsaWMgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIE1haW4gUGFuZWwgaW5pdC4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhVmFsICs9IDE7XHJcbiAgICAgICAgdGhpcy5pbWdMaWdodC5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMCwgdGhpcy5yb3RhVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24gIOWFrOWFseaMiemSruWHveaVsFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05aSa5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja01vcmVHYW1lQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/liqDovb3nvZHnu5zmlbDmja5cclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3Blbk1vcmVHYW1lUGFuZWwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIbopoHojrflvpdcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrV2lsbEdldEJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKVxyXG4gICAgICAgIC8v5omT5byA55qu6IKk6Z2i5p2/XHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5Ta2luUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOetvuWIsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tTaWduQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/miZPlvIDnrb7liLDpnaLmnb9cclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlblNpZ25QYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja1NldHRpbmdCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKClcclxuICAgICAgICAvL+aJk+W8gOiuvue9rumdouadv1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2V0dGluZ0FjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdQb3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2V0dGluZ0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdQb3Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1NldHRpbmdBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmq7ogqRcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU2tpbkJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKVxyXG4gICAgICAgIC8v5omT5byA55qu6IKk6Z2i5p2/XHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5Ta2luUGFuZWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1haW5QYW5lbCBDbGlja1NraW5CdG4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbkuqtcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU2hhcmVCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKClcclxuICAgICAgICAvL+aJk+W8gOWIhuS6q+a4oOmBk1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICAgIC8vdGhpcy5zaGFyZVN2Yy5TaGFyZUxpbmsoKTtcclxuICAgICAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLlNoYXJlTGluayhTaGFyZUxpbmtUeXBlLkJvdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrU2hhcmVCdG4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmqKHlvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrTW9kZWxCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKClcclxuICAgICAgICAvL+mAieaLqemavuW6plxyXG4gICAgICAgIC8v5aaC5p6c5LiN5ruh6Laz5p2h5Lu277yM5YiZ5omT5byA6Z2i5p2/XHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLkNob29zZU1vZGVsUGFuZWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1haW5QYW5lbCBDbGlja01vZGVsQnRuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57un57utXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0NvbnRpbnVlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/miZPlvIDlr7vmsYLluK7liqnpnaLmnb9cclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlbkZyZWVDb250aW51ZVBhbmVsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluUGFuZWwgQ2xpY2tDb250aW51ZUJ0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW5uOi/kOi9rOebmFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tIYXBweUd1eUJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKVxyXG4gICAgICAgIC8v5omT5byA5bm46L+Q6L2s55uY6Z2i5p2/XHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5IYXBweUd1eVBhbmVsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluUGFuZWwgQ2xpY2tIYXBweUd1eUJ0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBk+WFt+ekvOWMhVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tHaWZ0QmFnQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/miZPlvIDpgZPlhbfnpLzljIXpnaLmnb9cclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlbkdpZnRCYWdQYW5lbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrR2lmdEJhZ0J0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+mHj+W8gOWFs1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tWb2x1bWVCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKCk7XHJcblxyXG4gICAgICAgIC8vU2V0dGluZ01nci5JbnN0YW5jZSgpLlNldEF1ZGlvRW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nTWdyLlNldEF1ZGlvRW5hYmxlKCk7XHJcbiAgICAgICAgLy/mm7TmjaLlm77niYdcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nTWdyLmlzVm9sdW1lID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nVm9sdW1lLnNwcml0ZUZyYW1lID0gdGhpcy5zcFZvbHVtZVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nVm9sdW1lLnNwcml0ZUZyYW1lID0gdGhpcy5zcFZvbHVtZVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7sg6Z+z6YeP5byA5YWzLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrnlLvotKjpgInmi6lcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrSW1hZ2VRdWFsaXR5QnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8v5oCO5LmI5YGa77yfXHJcbiAgICAgICAgLy/orr7nva7nm7jmnLrliIbovqjnjodcclxuICAgICAgICAvL1NldHRpbmdNZ3IuSW5zdGFuY2UoKS5TZXRGdXp6eU1hc2soKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdNZ3IuU2V0RnV6enlNYXNrKCk7XHJcbiAgICAgICAgLy/mm7TmjaLlm77niYdcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nTWdyLmlzSW1hZ2VRdWFsaXR5ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nSW1hZ2VRdWFsaXR5LnNwcml0ZUZyYW1lID0gdGhpcy5zcEltYWdlUXVhbGl0eVswXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbWdJbWFnZVF1YWxpdHkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwSW1hZ2VRdWFsaXR5WzFdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrSW1hZ2VRdWFsaXR5QnRuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oyv5Yqo5byA5YWzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja1ZpYnJ0aW9uQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcblxyXG4gICAgICAgIC8v6K6+572u5oyv5YqoXHJcbiAgICAgICAgLy9TZXR0aW5nTWdyLkluc3RhbmNlKCkuU2V0VmlicmF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ01nci5TZXRWaWJyYXRlKCk7XHJcbiAgICAgICAgLy/mm7TmjaLlm77niYdcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5nTWdyLmlzVmlicmF0aW9uID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nVmlicmF0aW9uLnNwcml0ZUZyYW1lID0gdGhpcy5zcFZpYnJhdGlvblswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nVmlicmF0aW9uLnNwcml0ZUZyYW1lID0gdGhpcy5zcFZpYnJhdGlvblsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluUGFuZWwgQ2xpY2tWaWJydGlvbkJ0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOacqueOqeaXtuWHveaVsFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja1N0YXJ0UGxheUJ0bigpIHtcclxuXHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI9cclxuICAgICAgICAvL0dhbWVTeXMuSW5zdGFuY2UoKS5Jbml0U3lzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RybC5HYW1lU3RhcnQoKTtcclxuICAgICAgICAvL+makOiXj+S4u1VJXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8v5pi+56S65ri45oiP5pe255qEVUlcclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlblBsYXlQYW5lbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrU3RhcnRQbGF5QnRuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o6S6KGM5qacXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja1JhbmtMaXN0QnRuKCkgey8v6L+Z5Liq6YC76L6R6KaB6KGl77yM5omT5byA5a+55bqU55qE5o6S6KGM5qacXHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICB0aGlzLmF1ZGlvU3ZjLlBsYXlVSUF1ZGlvKClcclxuICAgICAgICAvL+aJk+W8gOaOkuihjOamnFxyXG4gICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5PcGVuUmFua0xpc3RQYW5lbCgpO1xyXG5cclxuICAgICAgICAvL+iwg+eUqOWvueW6lOeahOWHveaVsFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrSVJhbmtMaXN0QnRuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l55yL576k5o6S6KGMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nyb3dkUmFua0xpc3RCdG4oKSB7Ly/ov5nkuKrpgLvovpHopoHooaXvvIzmiZPlvIDlr7nlupTnmoTmjpLooYzmppxcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKVxyXG4gICAgICAgIC8v5omT5byA5o6S6KGM5qacXHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5SYW5rTGlzdFBhbmVsKCk7XHJcbiAgICAgICAgLy/osIPnlKjlr7nlupTnmoTlh73mlbBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1haW5QYW5lbCBDbGlja0ltYWdlUXVhbGl0eUJ0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOeOqei/h+WQjueahOWHveaVsFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65pys5qyh5b6X5YiGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTaG93U2NvcmUodmFsOiBudW1iZXIpIHtcclxuICAgICAgICAvL+aLv+WIsOacrOasoeW+l+WIhu+8jOi1i+WAvOe7mVVJXHJcbiAgICAgICAgdGhpcy50eHRDdXJyZW50U2NvcmUuc3RyaW5nID0gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HotbfmjJHmiJhcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrQ2hhbGxlbmdlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/osIPnlKjliIbkuqvlkJfvvIzmiJborrjmnInngrnkuI3kuIDmoLfvvIzkuI3lj6rlj6rmmK/liIbkuqtcclxuICAgICAgICB0aGlzLnNoYXJlU3ZjLlNoYXJlTGluayhTaGFyZUxpbmtUeXBlLkJvdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrQ2hhbmxsZW5nZUJ0bi4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkei1t+aOpeWKm1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tSZWxheUJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKVxyXG4gICAgICAgIC8v5Y+R6LW35o6l5YqbXHJcbiAgICAgICAgLy8gdGhpcy5zaGFyZVN2Yy5TaGFyZUxpbmsoKTtcclxuICAgICAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLlNoYXJlTGluayhTaGFyZUxpbmtUeXBlLkJvdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpblBhbmVsIENsaWNrUmVsYXlCdG4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3njqnkuIDlsYBcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrUGxheUFnYWluQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI9cclxuICAgICAgICAvL0dhbWVTeXMuSW5zdGFuY2UoKS5Jbml0U3lzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RybC5HYW1lUmVzdGFydCgpO1xyXG4gICAgICAgIC8v6ZqQ6JeP5Li7VUlcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy/mmL7npLrmuLjmiI/ml7bnmoRVSVxyXG4gICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5PcGVuUGxheVBhbmVsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNYWluUGFuZWwgQ2xpY2tSZWxheUFnYWluQnRuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuXHJcbn1cclxuIl19