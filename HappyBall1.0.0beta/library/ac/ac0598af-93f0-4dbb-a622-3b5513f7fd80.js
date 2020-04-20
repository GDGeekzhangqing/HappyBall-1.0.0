"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../Service/AudioSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, PanelRoot, ShareSvc, ShareLinkType, AudioSvc, _dec, _dec2, _class, ccclass, property, GiftBagPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "ac059ivk/BNu6YiO1UT9/2A", "GiftBagPanel"); // begin GiftBagPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GiftBagPanel", GiftBagPanel = (_dec = ccclass("GiftBagPanel"), _dec2 = _decorator.menu("View/GiftBagPanel"), _dec(_class = _dec2(_class =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(GiftBagPanel, _PanelRoot);

        function GiftBagPanel() {
          babelHelpers.classCallCheck(this, GiftBagPanel);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GiftBagPanel).apply(this, arguments));
        }

        babelHelpers.createClass(GiftBagPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.set(babelHelpers.getPrototypeOf(GiftBagPanel.prototype), "enabled", false, this, true);
          }
          /**
           * 更新UI
           */

        }, {
          key: "UpdataUI",
          value: function UpdataUI() {
            //图片/参照图是给死的
            //这个方法不知道要不要写
            this.SetUI(1);
          }
          /**
           * 设置UI
           */

        }, {
          key: "SetUI",
          value: function SetUI(data) {}
          /**
           * 点击关闭
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
            console.log("关闭了GiftBagPanel...");
          }
          /**
           *点击发送
           */

        }, {
          key: "ClickSendBtn",
          value: function ClickSendBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发送分享链接
            //打开分享渠道

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("点击发送...");
          }
        }]);
        return GiftBagPanel;
      }(PanelRoot)) || _class) || _class));

      cc._RF.pop(); // end GiftBagPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L0dpZnRCYWdQYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiUGFuZWxSb290IiwiU2hhcmVTdmMiLCJTaGFyZUxpbmtUeXBlIiwiQXVkaW9TdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHaWZ0QmFnUGFuZWwiLCJtZW51IiwiU2V0VUkiLCJkYXRhIiwiSW5zdGFuY2UiLCJQbGF5VUlBdWRpbyIsIlNldFBhbmVsU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiU2hhcmVMaW5rIiwiQm90aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTtBQUFVQyxNQUFBQSxhLHNCQUFBQSxhOztBQUNWQyxNQUFBQSxRLHNCQUFBQSxROzs7bUZBRGdFOzs7QUFFakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzhCQUlKQyxZLFdBRlpGLE9BQU8sQ0FBQyxjQUFELEMsVUFDUEwsVUFBVSxDQUFDUSxJQUFYLENBQWdCLG1CQUFoQixDOzs7Ozs7Ozs7Ozs7c0NBSWU7QUFDUiw2RkFBZ0IsS0FBaEI7QUFDSDtBQUVEOzs7Ozs7cUNBR2tCO0FBQ2Q7QUFDQTtBQUNBLGlCQUFLQyxLQUFMLENBQVcsQ0FBWDtBQUNIO0FBRUQ7Ozs7OztnQ0FHYUMsSSxFQUFNLENBRWxCO0FBRUQ7Ozs7OzswQ0FHdUI7QUFDbkI7QUFDQU4sWUFBQUEsUUFBUSxDQUFDTyxRQUFULEdBQW9CQyxXQUFwQjtBQUVBLGlCQUFLQyxhQUFMLENBQW1CLEtBQW5CO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0g7QUFFRDs7Ozs7O3lDQUdzQjtBQUVsQjtBQUNBWCxZQUFBQSxRQUFRLENBQUNPLFFBQVQsR0FBb0JDLFdBQXBCLEdBSGtCLENBSWxCO0FBQ0E7O0FBQ0FWLFlBQUFBLFFBQVEsQ0FBQ1MsUUFBVCxHQUFvQkssU0FBcEIsQ0FBOEJiLGFBQWEsQ0FBQ2MsSUFBNUM7QUFDQUgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIOzs7UUE3QzZCZCxTOztvQkFOaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmltcG9ydCB7IFNoYXJlU3ZjLCBTaGFyZUxpbmtUeXBlIH0gZnJvbSBcIi4uL1NlcnZpY2UvU2hhcmVTdmNcIjtcclxuaW1wb3J0IHsgQXVkaW9TdmMgfSBmcm9tIFwiLi4vU2VydmljZS9BdWRpb1N2Y1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHaWZ0QmFnUGFuZWxcIilcclxuQF9kZWNvcmF0b3IubWVudShcIlZpZXcvR2lmdEJhZ1BhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBHaWZ0QmFnUGFuZWwgZXh0ZW5kcyBQYW5lbFJvb3Qge1xyXG5cclxuXHJcbiAgICBJbml0UGFuZWwoKSB7XHJcbiAgICAgICAgc3VwZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawVUlcclxuICAgICAqL1xyXG4gICAgcHVibGljIFVwZGF0YVVJKCkge1xyXG4gICAgICAgIC8v5Zu+54mHL+WPgueFp+WbvuaYr+e7meatu+eahFxyXG4gICAgICAgIC8v6L+Z5Liq5pa55rOV5LiN55+l6YGT6KaB5LiN6KaB5YaZXHJcbiAgICAgICAgdGhpcy5TZXRVSSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rlVJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRVSShkYXRhKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54K55Ye75YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLlNldFBhbmVsU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5YWz6Zet5LqGR2lmdEJhZ1BhbmVsLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrngrnlh7vlj5HpgIFcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU2VuZEJ0bigpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+WPkemAgeWIhuS6q+mTvuaOpVxyXG4gICAgICAgIC8v5omT5byA5YiG5Lqr5rig6YGTXHJcbiAgICAgICAgU2hhcmVTdmMuSW5zdGFuY2UoKS5TaGFyZUxpbmsoU2hhcmVMaW5rVHlwZS5Cb3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WPkemAgS4uLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==