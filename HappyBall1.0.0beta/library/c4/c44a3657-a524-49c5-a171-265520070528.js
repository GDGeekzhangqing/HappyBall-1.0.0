"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../System/MainMgr.ts", "../Service/AudioSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, PanelRoot, ShareSvc, MainMgr, AudioSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, ModelPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c44a3ZXpSRJxaFxJlUgBwUo", "ModelPanel"); // begin ModelPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责游戏难度的调整
      //开启困难模式的条件就是看视频
      //打开这个界面的逻辑在MainMgr.ts里

      _export("ModelPanel", ModelPanel = (_dec = ccclass("ModelPanel"), _dec2 = _decorator.menu("View/ModePanel"), _dec3 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(ModelPanel, _PanelRoot);

        function ModelPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ModelPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ModelPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtDialogDes", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ModelPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(ModelPanel.prototype), "InitPanel", this).call(this);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            //this.audioSvc.PlayUIAudio()
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("ModelPanel 关闭");
          }
          /**
           * 看视频得皮肤
           */

        }, {
          key: "ClickWatchVideoForSkin",
          value: function ClickWatchVideoForSkin() {
            //播放音响
            //this.audioSvc.PlayUIAudio()
            AudioSvc.Instance().PlayUIAudio(); //this.shareSvc.WatchVideoForSkin();

            ShareSvc.Instance().WatchVideoForSkin(); //看完后是否回到主城？

            MainMgr.Instance().OpenMainPanel();
            console.log("看完视频回到主城...");
          }
        }]);
        return ModelPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDialogDes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end ModelPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L01vZGVsUGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkxhYmVsQ29tcG9uZW50IiwiUGFuZWxSb290IiwiU2hhcmVTdmMiLCJNYWluTWdyIiwiQXVkaW9TdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNb2RlbFBhbmVsIiwibWVudSIsInR5cGUiLCJJbnN0YW5jZSIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJXYXRjaFZpZGVvRm9yU2tpbiIsIk9wZW5NYWluUGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxjLE9BQUFBLGM7O0FBQzdCQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxRLHNCQUFBQSxROztBQUNBQyxNQUFBQSxPLG9CQUFBQSxPOztBQUNBQyxNQUFBQSxRLHNCQUFBQSxROzs7aUZBRmdFOzs7QUFHakVDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFEsRUFFakI7QUFDQTtBQUNBOzs0QkFHYUMsVSxXQUZaRixPQUFPLENBQUMsWUFBRCxDLFVBQ1BOLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQixnQkFBaEIsQyxVQUVFRixRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR0c7QUFDVjtBQUVEO0FBRUQ7Ozs7OzswQ0FHdUI7QUFDckI7QUFDQTtBQUNBSSxZQUFBQSxRQUFRLENBQUNNLFFBQVQsR0FBb0JDLFdBQXBCLEdBSHFCLENBS3JCOztBQUNBLGlCQUFLQyxhQUFMLENBQW1CLEtBQW5CO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRDtBQUVEOzs7Ozs7bURBR2dDO0FBQzlCO0FBQ0E7QUFDQVYsWUFBQUEsUUFBUSxDQUFDTSxRQUFULEdBQW9CQyxXQUFwQixHQUg4QixDQUs5Qjs7QUFDQVQsWUFBQUEsUUFBUSxDQUFDUSxRQUFULEdBQW9CSyxpQkFBcEIsR0FOOEIsQ0FPOUI7O0FBQ0FaLFlBQUFBLE9BQU8sQ0FBQ08sUUFBUixHQUFtQk0sYUFBbkI7QUFDQUgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNEOzs7UUFuQzZCYixTOzs7OztpQkFFUSxJOzs7O29CQVp0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmltcG9ydCB7IFNoYXJlU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvU2hhcmVTdmNcIjtcclxuaW1wb3J0IHsgTWFpbk1nciB9IGZyb20gXCIuLi9TeXN0ZW0vTWFpbk1nclwiO1xyXG5pbXBvcnQgeyBBdWRpb1N2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL0F1ZGlvU3ZjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+i/meS4quiEmuacrOi0n+i0o+a4uOaIj+mavuW6pueahOiwg+aVtFxyXG4vL+W8gOWQr+WbsOmavuaooeW8j+eahOadoeS7tuWwseaYr+eci+inhumikVxyXG4vL+aJk+W8gOi/meS4queVjOmdoueahOmAu+i+keWcqE1haW5NZ3IudHPph4xcclxuQGNjY2xhc3MoXCJNb2RlbFBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L01vZGVQYW5lbFwiKVxyXG5leHBvcnQgY2xhc3MgTW9kZWxQYW5lbCBleHRlbmRzIFBhbmVsUm9vdCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICBwdWJsaWMgdHh0RGlhbG9nRGVzOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gIEluaXRQYW5lbCgpIHtcclxuICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWFs+mXreaMiemSrlxyXG4gICAqL1xyXG4gIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgLy/mkq3mlL7pn7Plk41cclxuICAgIC8vdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcblxyXG4gICAgLy9zdXBlci5DbGlja0Nsb3NlQnRuKCk7XHJcbiAgICB0aGlzLlNldFBhbmVsU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXCJNb2RlbFBhbmVsIOWFs+mXrVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOeci+inhumikeW+l+earuiCpFxyXG4gICAqL1xyXG4gIHB1YmxpYyBDbGlja1dhdGNoVmlkZW9Gb3JTa2luKCkge1xyXG4gICAgLy/mkq3mlL7pn7Plk41cclxuICAgIC8vdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcblxyXG4gICAgLy90aGlzLnNoYXJlU3ZjLldhdGNoVmlkZW9Gb3JTa2luKCk7XHJcbiAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLldhdGNoVmlkZW9Gb3JTa2luKCk7XHJcbiAgICAvL+eci+WujOWQjuaYr+WQpuWbnuWIsOS4u+Wfju+8n1xyXG4gICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5NYWluUGFuZWwoKTtcclxuICAgIGNvbnNvbGUubG9nKFwi55yL5a6M6KeG6aKR5Zue5Yiw5Li75Z+OLi4uXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==