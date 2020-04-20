"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, PanelRoot, AudioSvc, _dec, _dec2, _class, _temp, ccclass, property, SignPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9179fgVOtVGf6H31Ze+k2OW", "SignPanel"); // begin SignPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SignPanel", SignPanel = (_dec = ccclass("SignPanel"), _dec2 = _decorator.menu("View/SignPanel"), _dec(_class = _dec2(_class = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SignPanel, _PanelRoot);

        function SignPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SignPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SignPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.signAwardCfg = null;
          return _this;
        }

        babelHelpers.createClass(SignPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(SignPanel.prototype), "InitPanel", this).call(this); //拿到签到奖励数据

            this.signAwardCfg = this.netSvc.GetSignAwardCfg();
            console.log("SignPanel Init...");
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
            console.log("SignPanel 关闭");
          } //#region  重复的按钮函数，后面重构

          /**
           * 签到星期一
           */

        }, {
          key: "ClickMondaySignBtn",
          value: function ClickMondaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.mondayCfg, 0, 0, 0, null, null);
            console.log("签到星期一");
          }
          /**
           * 签到星期二
           */

        }, {
          key: "ClickTuesdaySignBtn",
          value: function ClickTuesdaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是400金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.tuesdayCfg, 0, 0, 0, null, null);
            console.log("签到星期二");
          }
          /**
           * 签到星期三
           */

        }, {
          key: "ClickWednessdaySignBtn",
          value: function ClickWednessdaySignBtn() {
            //播放音响
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是500金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.wednessdayCfg, 0, 0, 0, null, null);
            console.log("签到星期三");
          }
          /**
           * 签到星期四
           */

        }, {
          key: "ClickThursdayBtn",
          value: function ClickThursdayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是600金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.thursdayCfg, 0, 0, 0, null, null);
            console.log("签到星期四");
          }
          /**S
           * 签到星期五
           */

        }, {
          key: "ClickFridaySignBtn",
          value: function ClickFridaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是800金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.fridayCfg, 0, 0, 0, null, null);
            console.log("签到星期五");
          }
          /**
           * 签到星期六
           */

        }, {
          key: "ClickSaturdayBtn",
          value: function ClickSaturdayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是1000金币
            //更新数据库 

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.saturdayCfg, 0, 0, 0, null, null);
            console.log("签到星期六");
          }
          /**
           * 签到星期天
           */

        }, {
          key: "ClickSundayBtn",
          value: function ClickSundayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是1500金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.sundayCfg, 0, 0, 0, null, null);
            console.log("签到星期天");
          } //#endregion

          /**
           * 直接签到
           */

        }, {
          key: "ClickJustSignBtn",
          value: function ClickJustSignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //直接签到，不看视频广告
            //发送数据到数据库，更新数据

            console.log("直接签到...");
          }
          /**
           * 双倍签到
           */

        }, {
          key: "ClickDoubleSignBtn",
          value: function ClickDoubleSignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //看完视频广告，更新双倍数据 
            //发送数据到数据库，更新数据

            console.log("双倍签到...");
          }
        }]);
        return SignPanel;
      }(PanelRoot), _temp)) || _class) || _class));

      cc._RF.pop(); // end SignPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1NpZ25QYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiUGFuZWxSb290IiwiQXVkaW9TdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTaWduUGFuZWwiLCJtZW51Iiwic2lnbkF3YXJkQ2ZnIiwibmV0U3ZjIiwiR2V0U2lnbkF3YXJkQ2ZnIiwiY29uc29sZSIsImxvZyIsIkluc3RhbmNlIiwiUGxheVVJQXVkaW8iLCJTZXRQYW5lbFN0YXRlIiwiVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEiLCJtb25kYXlDZmciLCJ0dWVzZGF5Q2ZnIiwid2VkbmVzc2RheUNmZyIsInRodXJzZGF5Q2ZnIiwiZnJpZGF5Q2ZnIiwic2F0dXJkYXlDZmciLCJzdW5kYXlDZmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxRLHNCQUFBQSxROzs7Z0ZBQWdFOzs7QUFFakVDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzJCQUlKQyxTLFdBRlpGLE9BQU8sQ0FBQyxXQUFELEMsVUFDUEgsVUFBVSxDQUFDTSxJQUFYLENBQWdCLGdCQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFHVUMsWSxHQUFnQyxJOzs7Ozs7c0NBRTVCO0FBQ1QsNkdBRFMsQ0FHVDs7QUFDQSxpQkFBS0EsWUFBTCxHQUFvQixLQUFLQyxNQUFMLENBQVlDLGVBQVosRUFBcEI7QUFFQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDRjtBQUVEOzs7Ozs7MENBR3VCO0FBQ3BCO0FBQ0FULFlBQUFBLFFBQVEsQ0FBQ1UsUUFBVCxHQUFvQkMsV0FBcEIsR0FGb0IsQ0FHcEI7O0FBQ0EsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBbkI7QUFDQUosWUFB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QUNVLFFBQVQsR0FBb0JDLFdBQXBCLEdBRnVCLENBR3ZCO0FBQ0E7O0FBQ0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRjtBQUVEOzs7Ozs7K0NBRzRCO0FBQ3pCO0FBQ0FULFlBQUFBLFFBQVEsQ0FBQ1UsUUFBVCxHQUFvQkMsV0FBcEIsR0FGeUIsQ0FHekI7QUFFQTs7QUFDQUgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNGOzs7UUFoSjJCVixTOztvQkFOYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBQYW5lbFJvb3QgfSBmcm9tIFwiLi4vUm9vdC9QYW5lbFJvb3RcIjtcclxuaW1wb3J0IHsgQXVkaW9TdmMgfSBmcm9tIFwiLi4vU2VydmljZS9BdWRpb1N2Y1wiO1xyXG5pbXBvcnQgeyBTaWduQXdhcmRDb25maWcgfSBmcm9tIFwiLi4vU2VydmljZS9OZXRTdmNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiU2lnblBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L1NpZ25QYW5lbFwiKVxyXG5leHBvcnQgY2xhc3MgU2lnblBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuXHJcbiAgIHByaXZhdGUgc2lnbkF3YXJkQ2ZnOiBTaWduQXdhcmRDb25maWcgPSBudWxsO1xyXG5cclxuICAgSW5pdFBhbmVsKCkge1xyXG4gICAgICBzdXBlci5Jbml0UGFuZWwoKTtcclxuXHJcbiAgICAgIC8v5ou/5Yiw562+5Yiw5aWW5Yqx5pWw5o2uXHJcbiAgICAgIHRoaXMuc2lnbkF3YXJkQ2ZnID0gdGhpcy5uZXRTdmMuR2V0U2lnbkF3YXJkQ2ZnKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlNpZ25QYW5lbCBJbml0Li4uXCIpO1xyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgQ2xpY2tDbG9zZUJ0bigpIHtcclxuICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAvL3N1cGVyLkNsaWNrQ2xvc2VCdG4oKTtcclxuICAgICAgdGhpcy5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTaWduUGFuZWwg5YWz6ZetXCIpO1xyXG4gICB9XHJcblxyXG4gICAvLyNyZWdpb24gIOmHjeWkjeeahOaMiemSruWHveaVsO+8jOWQjumdoumHjeaehFxyXG5cclxuICAgLyoqXHJcbiAgICAqIOetvuWIsOaYn+acn+S4gFxyXG4gICAgKi9cclxuICAgcHVibGljIENsaWNrTW9uZGF5U2lnbkJ0bigpIHtcclxuICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAvL+abtOaWsOaVsOaNruW6k1xyXG4gICAgICB0aGlzLm5ldFN2Yy5VcGRhdGFJbkNyZWFzZVdlY2hhdENsb3VkRGF0YSh0aGlzLnNpZ25Bd2FyZENmZy5tb25kYXlDZmcsIDAsIDAsIDAsIG51bGwsIG51bGwpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCLnrb7liLDmmJ/mnJ/kuIBcIik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiDnrb7liLDmmJ/mnJ/kuoxcclxuICAgICovXHJcbiAgIHB1YmxpYyBDbGlja1R1ZXNkYXlTaWduQnRuKCkge1xyXG4gICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgIC8v5ou/5Yiw5aWW5Yqx5pWw5o2u77yM6L+Z6YeM5pivNDAw6YeR5biBXHJcblxyXG4gICAgICAvL+abtOaWsOaVsOaNruW6k1xyXG4gICAgICB0aGlzLm5ldFN2Yy5VcGRhdGFJbkNyZWFzZVdlY2hhdENsb3VkRGF0YSh0aGlzLnNpZ25Bd2FyZENmZy50dWVzZGF5Q2ZnLCAwLCAwLCAwLCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwi562+5Yiw5pif5pyf5LqMXCIpO1xyXG5cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIOetvuWIsOaYn+acn+S4iVxyXG4gICAgKi9cclxuICAgcHVibGljIENsaWNrV2VkbmVzc2RheVNpZ25CdG4oKSB7IC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgLy/mi7/liLDlpZblirHmlbDmja7vvIzov5nph4zmmK81MDDph5HluIFcclxuXHJcbiAgICAgIC8v5pu05paw5pWw5o2u5bqTXHJcbiAgICAgIHRoaXMubmV0U3ZjLlVwZGF0YUluQ3JlYXNlV2VjaGF0Q2xvdWREYXRhKHRoaXMuc2lnbkF3YXJkQ2ZnLndlZG5lc3NkYXlDZmcsIDAsIDAsIDAsIG51bGwsIG51bGwpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCLnrb7liLDmmJ/mnJ/kuIlcIik7XHJcbiAgIH1cclxuXHJcblxyXG4gICAvKipcclxuICAgICog562+5Yiw5pif5pyf5ZubXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgQ2xpY2tUaHVyc2RheUJ0bigpIHtcclxuICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAvL+aLv+WIsOWlluWKseaVsOaNru+8jOi/memHjOaYrzYwMOmHkeW4gVxyXG5cclxuICAgICAgLy/mm7TmlrDmlbDmja7lupNcclxuICAgICAgdGhpcy5uZXRTdmMuVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEodGhpcy5zaWduQXdhcmRDZmcudGh1cnNkYXlDZmcsIDAsIDAsIDAsIG51bGwsIG51bGwpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCLnrb7liLDmmJ/mnJ/lm5tcIik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlNcclxuICAgICog562+5Yiw5pif5pyf5LqUXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgQ2xpY2tGcmlkYXlTaWduQnRuKCkge1xyXG4gICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgIC8v5ou/5Yiw5aWW5Yqx5pWw5o2u77yM6L+Z6YeM5pivODAw6YeR5biBXHJcblxyXG4gICAgICAvL+abtOaWsOaVsOaNruW6k1xyXG4gICAgICB0aGlzLm5ldFN2Yy5VcGRhdGFJbkNyZWFzZVdlY2hhdENsb3VkRGF0YSh0aGlzLnNpZ25Bd2FyZENmZy5mcmlkYXlDZmcsIDAsIDAsIDAsIG51bGwsIG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuetvuWIsOaYn+acn+S6lFwiKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIOetvuWIsOaYn+acn+WFrVxyXG4gICAgKi9cclxuICAgcHVibGljIENsaWNrU2F0dXJkYXlCdG4oKSB7XHJcbiAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgLy/mi7/liLDlpZblirHmlbDmja7vvIzov5nph4zmmK8xMDAw6YeR5biBXHJcblxyXG4gICAgICAvL+abtOaWsOaVsOaNruW6kyBcclxuICAgICAgdGhpcy5uZXRTdmMuVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEodGhpcy5zaWduQXdhcmRDZmcuc2F0dXJkYXlDZmcsIDAsIDAsIDAsIG51bGwsIG51bGwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIuetvuWIsOaYn+acn+WFrVwiKTtcclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIOetvuWIsOaYn+acn+WkqVxyXG4gICAgKi9cclxuICAgcHVibGljIENsaWNrU3VuZGF5QnRuKCkge1xyXG4gICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgIC8v5ou/5Yiw5aWW5Yqx5pWw5o2u77yM6L+Z6YeM5pivMTUwMOmHkeW4gVxyXG5cclxuICAgICAgLy/mm7TmlrDmlbDmja7lupNcclxuICAgICAgdGhpcy5uZXRTdmMuVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEodGhpcy5zaWduQXdhcmRDZmcuc3VuZGF5Q2ZnLCAwLCAwLCAwLCBudWxsLCBudWxsKTtcclxuICAgICAgY29uc29sZS5sb2coXCLnrb7liLDmmJ/mnJ/lpKlcIik7XHJcbiAgIH1cclxuXHJcbiAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgLyoqXHJcbiAgICAqIOebtOaOpeetvuWIsFxyXG4gICAgKi9cclxuICAgcHVibGljIENsaWNrSnVzdFNpZ25CdG4oKSB7XHJcbiAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgLy/nm7TmjqXnrb7liLDvvIzkuI3nnIvop4bpopHlub/lkYpcclxuICAgICAgLy/lj5HpgIHmlbDmja7liLDmlbDmja7lupPvvIzmm7TmlrDmlbDmja5cclxuICAgICAgY29uc29sZS5sb2coXCLnm7TmjqXnrb7liLAuLi5cIik7XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiDlj4zlgI3nrb7liLBcclxuICAgICovXHJcbiAgIHB1YmxpYyBDbGlja0RvdWJsZVNpZ25CdG4oKSB7XHJcbiAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgLy/nnIvlrozop4bpopHlub/lkYrvvIzmm7TmlrDlj4zlgI3mlbDmja4gXHJcblxyXG4gICAgICAvL+WPkemAgeaVsOaNruWIsOaVsOaNruW6k++8jOabtOaWsOaVsOaNrlxyXG4gICAgICBjb25zb2xlLmxvZyhcIuWPjOWAjeetvuWIsC4uLlwiKTtcclxuICAgfVxyXG5cclxufVxyXG4iXX0=