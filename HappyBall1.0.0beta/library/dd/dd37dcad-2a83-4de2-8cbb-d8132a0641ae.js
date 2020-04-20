"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../Service/AudioSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, SpriteComponent, LabelComponent, PanelRoot, ShareSvc, ShareLinkType, AudioSvc, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, SeekHelpPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "dd37dytKoNN4oy72BMqBkGu", "SeekHelpPanel"); // begin SeekHelpPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SeekHelpPanel", SeekHelpPanel = (_dec = ccclass("SeekHelpPanel"), _dec2 = _decorator.menu("View/SeekHelpPanel"), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SeekHelpPanel, _PanelRoot);

        function SeekHelpPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SeekHelpPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SeekHelpPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtVal", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SeekHelpPanel, [{
          key: "ClickCloseBtn",

          /**
           * 关闭按钮
           */
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("SeekHelpPanel 关闭");
          }
          /**
           * 免费求助
           */

        }, {
          key: "ClickSeekHelp",
          value: function ClickSeekHelp() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //调用分享链接函数
            //this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
          }
        }]);
        return SeekHelpPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtVal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end SeekHelpPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1NlZWtIZWxwUGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNwcml0ZUNvbXBvbmVudCIsIkxhYmVsQ29tcG9uZW50IiwiUGFuZWxSb290IiwiU2hhcmVTdmMiLCJTaGFyZUxpbmtUeXBlIiwiQXVkaW9TdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZWVrSGVscFBhbmVsIiwibWVudSIsInR5cGUiLCJJbnN0YW5jZSIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJTaGFyZUxpbmsiLCJCb3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYzs7QUFDOUNDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFEsc0JBQUFBLFE7QUFBVUMsTUFBQUEsYSxzQkFBQUEsYTs7QUFDVkMsTUFBQUEsUSxzQkFBQUEsUTs7O29GQURnRTs7O0FBRWpFQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzsrQkFJSkMsYSxXQUZaRixPQUFPLENBQUMsZUFBRCxDLFVBQ1BQLFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQixvQkFBaEIsQyxVQUdJRixRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFVjtBQUFSLE9BQUQsQyxVQUdSTyxRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlUOzs7MENBR3VCO0FBQ25CO0FBQ0FJLFlBQUFBLFFBQVEsQ0FBQ00sUUFBVCxHQUFvQkMsV0FBcEIsR0FGbUIsQ0FHbkI7O0FBQ0EsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBbkI7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSDtBQUVEOzs7Ozs7MENBR3VCO0FBQ25CO0FBQ0FWLFlBQUFBLFFBQVEsQ0FBQ00sUUFBVCxHQUFvQkMsV0FBcEIsR0FGbUIsQ0FHbkI7QUFDQTs7QUFDQVQsWUFBQUEsUUFBUSxDQUFDUSxRQUFULEdBQW9CSyxTQUFwQixDQUE4QlosYUFBYSxDQUFDYSxJQUE1QztBQUNIOzs7UUE3QjhCZixTOzs7OztpQkFHRyxJOzs7Ozs7O2lCQUdGLEk7Ozs7b0JBWmxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVDb21wb25lbnQsIExhYmVsQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFBhbmVsUm9vdCB9IGZyb20gXCIuLi9Sb290L1BhbmVsUm9vdFwiO1xyXG5pbXBvcnQgeyBTaGFyZVN2YywgU2hhcmVMaW5rVHlwZSB9IGZyb20gXCIuLi9TZXJ2aWNlL1NoYXJlU3ZjXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiU2Vla0hlbHBQYW5lbFwiKVxyXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9TZWVrSGVscFBhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBTZWVrSGVscFBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBpbWdJY29uOiBTcHJpdGVDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgdHh0VmFsOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8vc3VwZXIuQ2xpY2tDbG9zZUJ0bigpO1xyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWVrSGVscFBhbmVsIOWFs+mXrVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFjei0ueaxguWKqVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tTZWVrSGVscCgpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+iwg+eUqOWIhuS6q+mTvuaOpeWHveaVsFxyXG4gICAgICAgIC8vdGhpcy5zaGFyZVN2Yy5TaGFyZUxpbmsoKTtcclxuICAgICAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLlNoYXJlTGluayhTaGFyZUxpbmtUeXBlLkJvdGgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==