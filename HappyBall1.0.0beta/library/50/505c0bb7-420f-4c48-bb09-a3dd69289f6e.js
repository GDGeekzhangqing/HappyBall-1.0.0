"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts", "./PlayPanel.ts"], function (_export, _context) {
  "use strict";

  var _decorator, PanelRoot, AudioSvc, PlayPanel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, RankItemType, RankListPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    RankItemType: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "505c0u3Qg9MSLsJo91pKJ9u", "RankListPanel"); // begin RankListPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (RankItemType) {
        RankItemType[RankItemType["tiwnRankListType"] = 0] = "tiwnRankListType";
        RankItemType[RankItemType["relayRankListType"] = 1] = "relayRankListType";
      })(RankItemType || _export("RankItemType", RankItemType = {}));

      //wx232ea3d2e7178890
      //01e8e69ddfb85507b1822ea45dfdeedc
      _export("RankListPanel", RankListPanel = (_dec = ccclass("RankListPanel"), _dec2 = _decorator.menu("View/RankListPanel"), _dec3 = property({
        type: PlayPanel
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(RankListPanel, _PanelRoot);

        function RankListPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, RankListPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(RankListPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(RankListPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(RankListPanel.prototype), "InitPanel", this).call(this); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 1
              });
              console.log("发消息给子域");
            }

            console.log("RankListPanel init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 7
              });
              console.log("发消息给子域");
            }

            this.SetPanelState(false);
            console.log("RankListPanel 关闭");
          }
          /**
           * 单人排行榜
           */

        }, {
          key: "ClickTiwnRankListBtn",
          value: function ClickTiwnRankListBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 1
              });
              console.log("发消息给子域");
            }

            console.log("请求单人排行榜数据...");
          }
          /**
           * 接力排行榜
           */

        }, {
          key: "ClickRelayRankListBtn",
          value: function ClickRelayRankListBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //请求网络数据
            //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 2
              });
            }

            console.log("请求接力排行榜数据...");
          }
        }]);
        return RankListPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end RankListPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1JhbmtMaXN0UGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlBhbmVsUm9vdCIsIkF1ZGlvU3ZjIiwiUGxheVBhbmVsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUmFua0l0ZW1UeXBlIiwiUmFua0xpc3RQYW5lbCIsIm1lbnUiLCJ0eXBlIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInBvc3RNZXNzYWdlIiwibWVzc2FnZVR5cGUiLCJjb25zb2xlIiwibG9nIiwiSW5zdGFuY2UiLCJQbGF5VUlBdWRpbyIsIlNldFBhbmVsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsUyxvQkFBQUEsUzs7QUFFQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFFQUMsTUFBQUEsUyxnQkFBQUEsUzs7O29GQUhnRTs7O0FBSWpFQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROztpQkFHTEMsWTtBQUFBQSxRQUFBQSxZLENBQUFBLFk7QUFBQUEsUUFBQUEsWSxDQUFBQSxZO1NBQUFBLFksNEJBQUFBLFk7O0FBS1o7QUFDQTsrQkFJYUMsYSxXQUZaSCxPQUFPLENBQUMsZUFBRCxDLFVBQ1BKLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQixvQkFBaEIsQyxVQUdJSCxRQUFRLENBQUM7QUFBRUksUUFBQUEsSUFBSSxFQUFFTjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR0c7QUFDUixpSEFEUSxDQUdSOztBQUNBLGdCQUFJTyxhQUFKLEVBQW1CO0FBQ2ZDLGNBQUFBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsV0FBYixDQUF5QjtBQUNyQkMsZ0JBQUFBLFdBQVcsRUFBRTtBQURRLGVBQXpCO0FBR0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFDREQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDSDtBQUVEOzs7Ozs7MENBR3VCO0FBQ25CO0FBQ0FiLFlBQUFBLFFBQVEsQ0FBQ2MsUUFBVCxHQUFvQkMsV0FBcEIsR0FGbUIsQ0FJbkI7O0FBQ0EsZ0JBQUlQLGFBQUosRUFBbUI7QUFDZkMsY0FBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhQyxXQUFiLENBQXlCO0FBQ3JCQyxnQkFBQUEsV0FBVyxFQUFFO0FBRFEsZUFBekI7QUFHQUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNIOztBQUVELGlCQUFLRyxhQUFMLENBQW1CLEtBQW5CO0FBRUFKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0g7QUFFRDs7Ozs7O2lEQUc4QjtBQUMxQjtBQUNBYixZQUFBQSxRQUFRLENBQUNjLFFBQVQsR0FBb0JDLFdBQXBCLEdBRjBCLENBSTFCOztBQUNBLGdCQUFJUCxhQUFKLEVBQW1CO0FBQ2ZDLGNBQUFBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsV0FBYixDQUF5QjtBQUNyQkMsZ0JBQUFBLFdBQVcsRUFBRTtBQURRLGVBQXpCO0FBR0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFDREQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNIO0FBRUQ7Ozs7OztrREFHK0I7QUFDM0I7QUFDQWIsWUFBQUEsUUFBUSxDQUFDYyxRQUFULEdBQW9CQyxXQUFwQixHQUYyQixDQUkzQjtBQUNBOztBQUNBLGdCQUFJUCxhQUFKLEVBQW1CO0FBQ2ZDLGNBQUFBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsV0FBYixDQUF5QjtBQUNyQkMsZ0JBQUFBLFdBQVcsRUFBRTtBQURRLGVBQXpCO0FBR0g7O0FBQ0RDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDSDs7O1FBdEU4QmQsUzs7Ozs7aUJBR0QsSTs7OztvQkFwQmhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgRW51bSwgaW5zdGFudGlhdGUsIGxvYWRlciwgU3ByaXRlRnJhbWUsIFNwcml0ZUF0bGFzLCBUZXh0dXJlMkQsIFNwcml0ZUNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBQYW5lbFJvb3QgfSBmcm9tIFwiLi4vUm9vdC9QYW5lbFJvb3RcIjtcclxuaW1wb3J0IHsgUmVzU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvUmVzU3ZjXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgR2FtZUN0ciB9IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDdHJcIjtcclxuaW1wb3J0IHsgUGxheVBhbmVsIH0gZnJvbSBcIi4vUGxheVBhbmVsXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gUmFua0l0ZW1UeXBlIHsvL+i/meS4quWlveWDj+ayoeeUqO+8jOWPr+S7peaUvuW8g1xyXG4gICAgdGl3blJhbmtMaXN0VHlwZSxcclxuICAgIHJlbGF5UmFua0xpc3RUeXBlXHJcbn1cclxuXHJcbi8vd3gyMzJlYTNkMmU3MTc4ODkwXHJcbi8vMDFlOGU2OWRkZmI4NTUwN2IxODIyZWE0NWRmZGVlZGNcclxuXHJcbkBjY2NsYXNzKFwiUmFua0xpc3RQYW5lbFwiKVxyXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9SYW5rTGlzdFBhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBSYW5rTGlzdFBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQbGF5UGFuZWwgfSlcclxuICAgIHB1YmxpYyBwbGF5UGFuZWw6IFBsYXlQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG5cclxuICAgICAgICAvL+WPkea2iOaBr+e7meWtkOWfn1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+R5raI5oGv57uZ5a2Q5Z+fXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJhbmtMaXN0UGFuZWwgaW5pdC4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaMiemSrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tDbG9zZUJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuXHJcbiAgICAgICAgLy/lj5Hmtojmga/nu5nlrZDln59cclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10ucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPkea2iOaBr+e7meWtkOWfn1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmFua0xpc3RQYW5lbCDlhbPpl61cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkurrmjpLooYzmppxcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrVGl3blJhbmtMaXN0QnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICAvL+WPkea2iOaBr+e7meWtkOWfn1xyXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+R5raI5oGv57uZ5a2Q5Z+fXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguWNleS6uuaOkuihjOamnOaVsOaNri4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaOpeWKm+aOkuihjOamnFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tSZWxheVJhbmtMaXN0QnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICAvL+ivt+axgue9kee7nOaVsOaNrlxyXG4gICAgICAgIC8v5Y+R5raI5oGv57uZ5a2Q5Z+fXHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguaOpeWKm+aOkuihjOamnOaVsOaNri4uLlwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==