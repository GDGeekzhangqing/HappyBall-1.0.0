"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "./PlayPanel.ts", "../System/MainMgr.ts", "../Controller/GameCtr.ts", "../Service/AudioSvc.ts", "./SkinPanel.ts", "../Service/NetSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, UITransformComponent, Vec3, PanelRoot, ShareSvc, PlayPanel, MainMgr, GameCtr, AudioSvc, SkinPanel, NetSvc, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, SettleMentPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      UITransformComponent = _cc.UITransformComponent;
      Vec3 = _cc.Vec3;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_SkinPanelTs) {
      SkinPanel = _SkinPanelTs.SkinPanel;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "17364zWwwVGm4YVBx0Jbpfz", "SettleMentPanel"); // begin SettleMentPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SettleMentPanel", SettleMentPanel = (_dec = ccclass("SettleMentPanel"), _dec2 = _decorator.menu("View/SettleMentPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: PlayPanel
      }), _dec5 = property({
        type: SkinPanel
      }), _dec6 = property({
        type: UITransformComponent
      }), _dec7 = property({
        type: GameCtr
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SettleMentPanel, _PanelRoot);

        function SettleMentPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SettleMentPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SettleMentPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtGoldVal", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "skinPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgLight", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this.eul = new Vec3(0, 0, 0);
          _this.rotaVal = 0;
          return _this;
        }

        babelHelpers.createClass(SettleMentPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(SettleMentPanel.prototype), "InitPanel", this).call(this); //拿到云端用户数据赋值给金币txt

            var pd = NetSvc.Instance().GetUserGameMsg();
            this.goldVal = pd.coinVal;
            console.log("是否拿到本地存储的金币数据：" + pd.coinVal);
            console.log(" SettleMentPanel init...");
          }
        }, {
          key: "update",
          value: function update() {
            this.rotaVal += 1; //旋转imgLight

            this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("SettleMentPanel 关闭");
          }
          /**
           * 看视频翻一倍
           */

        }, {
          key: "ClickWatchVideoBtn",
          value: function ClickWatchVideoBtn() {
            //看完视频后
            ShareSvc.Instance().WatchVideoForAward(); //回到当前界面
            //奖励翻倍

            this.goldVal = this.goldVal * 2; //更新UI
            //更新数据库
            //清空本次奖励数据

            this.goldVal = 0;
            console.log("看视频翻一倍");
          }
          /**
           * 点击跳过
           */

        }, {
          key: "ClickSkipBtn",
          value: function ClickSkipBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //更新云端数据

            NetSvc.Instance().UpdataInCreaseWechatCloudData(this.goldVal, 0, 0, 0, null, null);
            console.log("更新云数据在结算界面..."); //关闭这个界面

            this.SetPanelState(false); //重置游戏状态

            this.gameCtrl.GameBackToLogin(); //设置皮肤界面的UI

            this.skinPanel.SetSkinGoldVal(this.goldVal, 7); //先传个7，7可能代表连续签到7天
            //打开主界面

            MainMgr.Instance().OpenMainPanel(); //清空本次奖励数据

            this.goldVal = 0;
            console.log("点击跳过");
          }
          /**
           * 设置金币数目
           */

        }, {
          key: "SetGoldValUI",
          value: function SetGoldValUI(val) {
            //设置本次金币数据
            this.goldVal = val * 2;
            console.log("传进来的金币数目是：" + this.goldVal);
            this.txtGoldVal.string = this.goldVal.toString();
          }
        }]);
        return SettleMentPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtGoldVal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end SettleMentPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1NldHRsZU1lbnRQYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTGFiZWxDb21wb25lbnQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIlZlYzMiLCJQYW5lbFJvb3QiLCJTaGFyZVN2YyIsIlBsYXlQYW5lbCIsIk1haW5NZ3IiLCJHYW1lQ3RyIiwiQXVkaW9TdmMiLCJTa2luUGFuZWwiLCJOZXRTdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZXR0bGVNZW50UGFuZWwiLCJtZW51IiwidHlwZSIsImV1bCIsInJvdGFWYWwiLCJwZCIsIkluc3RhbmNlIiwiR2V0VXNlckdhbWVNc2ciLCJnb2xkVmFsIiwiY29pblZhbCIsImNvbnNvbGUiLCJsb2ciLCJpbWdMaWdodCIsIm5vZGUiLCJldWxlckFuZ2xlcyIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsIldhdGNoVmlkZW9Gb3JBd2FyZCIsImF1ZGlvU3ZjIiwiVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEiLCJnYW1lQ3RybCIsIkdhbWVCYWNrVG9Mb2dpbiIsInNraW5QYW5lbCIsIlNldFNraW5Hb2xkVmFsIiwiT3Blbk1haW5QYW5lbCIsInZhbCIsInR4dEdvbGRWYWwiLCJzdHJpbmciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxvQixPQUFBQSxvQjtBQUF1Q0MsTUFBQUEsSSxPQUFBQSxJOztBQUNwRkMsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsUyxnQkFBQUEsUzs7QUFDQUMsTUFBQUEsTyxvQkFBQUEsTzs7QUFDQUMsTUFBQUEsTyx3QkFBQUEsTzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMs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LE1BQVo7QUFDSDtBQUVEOzs7Ozs7dUNBR29CYyxHLEVBQWE7QUFDN0I7QUFDQSxpQkFBS2pCLE9BQUwsR0FBZWlCLEdBQUcsR0FBRyxDQUFyQjtBQUNBZixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlLEtBQUtILE9BQWhDO0FBQ0EsaUJBQUtrQixVQUFMLENBQWdCQyxNQUFoQixHQUF5QixLQUFLbkIsT0FBTCxDQUFhb0IsUUFBYixFQUF6QjtBQUVIOzs7UUEzR2dDdEMsUzs7Ozs7aUJBR0csSTs7Ozs7OztpQkFHTixJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHYixJOzs7O29CQTFCYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBTcHJpdGVDb21wb25lbnQsIFZlYzMsIHR3ZWVuVXRpbCwgUXVhdCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBQYW5lbFJvb3QgfSBmcm9tIFwiLi4vUm9vdC9QYW5lbFJvb3RcIjtcclxuaW1wb3J0IHsgU2hhcmVTdmMgfSBmcm9tIFwiLi4vU2VydmljZS9TaGFyZVN2Y1wiO1xyXG5pbXBvcnQgeyBQbGF5UGFuZWwgfSBmcm9tIFwiLi9QbGF5UGFuZWxcIjtcclxuaW1wb3J0IHsgTWFpbk1nciB9IGZyb20gXCIuLi9TeXN0ZW0vTWFpbk1nclwiO1xyXG5pbXBvcnQgeyBHYW1lQ3RyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvR2FtZUN0clwiO1xyXG5pbXBvcnQgeyBBdWRpb1N2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL0F1ZGlvU3ZjXCI7XHJcbmltcG9ydCB7IFNraW5QYW5lbCB9IGZyb20gXCIuL1NraW5QYW5lbFwiO1xyXG5pbXBvcnQgeyBOZXRTdmMsIFVzZXJHYW1lTXNnIH0gZnJvbSBcIi4uL1NlcnZpY2UvTmV0U3ZjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlNldHRsZU1lbnRQYW5lbFwiKVxyXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9TZXR0bGVNZW50UGFuZWxcIilcclxuZXhwb3J0IGNsYXNzIFNldHRsZU1lbnRQYW5lbCBleHRlbmRzIFBhbmVsUm9vdCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB0eHRHb2xkVmFsOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGxheVBhbmVsIH0pXHJcbiAgICBwdWJsaWMgcGxheVBhbmVsOiBQbGF5UGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNraW5QYW5lbCB9KVxyXG4gICAgcHVibGljIHNraW5QYW5lbDogU2tpblBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGltZ0xpZ2h0OiBVSVRyYW5zZm9ybUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUN0ciB9KVxyXG4gICAgcHVibGljIGdhbWVDdHJsOiBHYW1lQ3RyID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICog6YeR5biB5pWw6YePXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb2xkVmFsOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGV1bDogVmVjMyA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG5cclxuICAgIHByaXZhdGUgcm90YVZhbCA9IDA7XHJcblxyXG4gICAgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG4gICAgICAgIC8v5ou/5Yiw5LqR56uv55So5oi35pWw5o2u6LWL5YC857uZ6YeR5biBdHh0XHJcbiAgICAgICAgbGV0IHBkOiBVc2VyR2FtZU1zZyA9IE5ldFN2Yy5JbnN0YW5jZSgpLkdldFVzZXJHYW1lTXNnKCk7XHJcbiAgICAgICAgdGhpcy5nb2xkVmFsID0gcGQuY29pblZhbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuaLv+WIsOacrOWcsOWtmOWCqOeahOmHkeW4geaVsOaNru+8mlwiK3BkLmNvaW5WYWwpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIiBTZXR0bGVNZW50UGFuZWwgaW5pdC4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhVmFsICs9IDE7XHJcbiAgICAgICAgLy/ml4vovaxpbWdMaWdodFxyXG4gICAgICAgIHRoaXMuaW1nTGlnaHQubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDAsIHRoaXMucm90YVZhbCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8vc3VwZXIuQ2xpY2tDbG9zZUJ0bigpO1xyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXR0bGVNZW50UGFuZWwg5YWz6ZetXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55yL6KeG6aKR57+75LiA5YCNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja1dhdGNoVmlkZW9CdG4oKSB7XHJcbiAgICAgICAgLy/nnIvlrozop4bpopHlkI5cclxuICAgICAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLldhdGNoVmlkZW9Gb3JBd2FyZCgpO1xyXG4gICAgICAgIC8v5Zue5Yiw5b2T5YmN55WM6Z2iXHJcblxyXG4gICAgICAgIC8v5aWW5Yqx57+75YCNXHJcbiAgICAgICAgdGhpcy5nb2xkVmFsID0gdGhpcy5nb2xkVmFsICogMjtcclxuICAgICAgICAvL+abtOaWsFVJXHJcblxyXG4gICAgICAgIC8v5pu05paw5pWw5o2u5bqTXHJcblxyXG4gICAgICAgIC8v5riF56m65pys5qyh5aWW5Yqx5pWw5o2uXHJcbiAgICAgICAgdGhpcy5nb2xkVmFsID0gMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnnIvop4bpopHnv7vkuIDlgI1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDngrnlh7vot7Pov4dcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU2tpcEJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIHRoaXMuYXVkaW9TdmMuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+abtOaWsOS6keerr+aVsOaNrlxyXG4gICAgICAgIE5ldFN2Yy5JbnN0YW5jZSgpLlVwZGF0YUluQ3JlYXNlV2VjaGF0Q2xvdWREYXRhKHRoaXMuZ29sZFZhbCwgMCwgMCwgMCxudWxsLG51bGwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5LqR5pWw5o2u5Zyo57uT566X55WM6Z2iLi4uXCIpXHJcblxyXG4gICAgICAgIC8v5YWz6Zet6L+Z5Liq55WM6Z2iXHJcbiAgICAgICAgdGhpcy5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAvL+mHjee9rua4uOaIj+eKtuaAgVxyXG4gICAgICAgIHRoaXMuZ2FtZUN0cmwuR2FtZUJhY2tUb0xvZ2luKCk7XHJcbiAgICAgICAgLy/orr7nva7nmq7ogqTnlYzpnaLnmoRVSVxyXG4gICAgICAgIHRoaXMuc2tpblBhbmVsLlNldFNraW5Hb2xkVmFsKHRoaXMuZ29sZFZhbCwgNyk7Ly/lhYjkvKDkuKo377yMN+WPr+iDveS7o+ihqOi/nue7reetvuWIsDflpKlcclxuICAgICAgICAvL+aJk+W8gOS4u+eVjOmdolxyXG4gICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5PcGVuTWFpblBhbmVsKCk7XHJcbiAgICAgICAgLy/muIXnqbrmnKzmrKHlpZblirHmlbDmja5cclxuICAgICAgICB0aGlzLmdvbGRWYWwgPSAwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+i3s+i/h1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rumHkeW4geaVsOebrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2V0R29sZFZhbFVJKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/orr7nva7mnKzmrKHph5HluIHmlbDmja5cclxuICAgICAgICB0aGlzLmdvbGRWYWwgPSB2YWwgKiAyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Lyg6L+b5p2l55qE6YeR5biB5pWw55uu5piv77yaXCIgKyB0aGlzLmdvbGRWYWwpO1xyXG4gICAgICAgIHRoaXMudHh0R29sZFZhbC5zdHJpbmcgPSB0aGlzLmdvbGRWYWwudG9TdHJpbmcoKTtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==