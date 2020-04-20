"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts", "../System/LoadSys.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, SpriteComponent, PanelRoot, AudioSvc, LoadSys, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, PlayPanel;

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
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_SystemLoadSysTs) {
      LoadSys = _SystemLoadSysTs.LoadSys;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "1ac2dMAEwhP6Jqx+oIqNLeO", "PlayPanel"); // begin PlayPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayPanel", PlayPanel = (_dec = ccclass("PlayPanel"), _dec2 = _decorator.menu("View/PlayPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(PlayPanel, _PanelRoot);

        function PlayPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, PlayPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(PlayPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgTips", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.lastScore = 0;
          return _this;
        }

        babelHelpers.createClass(PlayPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(PlayPanel.prototype), "InitPanel", this).call(this); //一开始就展示Tips

            this.imgTips.enabled = true;
            console.log("PlayPanel Init..."); //隔一段时间隐藏Tips

            this.HideTips();
          }
        }, {
          key: "update",
          value: function update() {
            //如果超过历史最高分
            if (this.lastScore > LoadSys.Instance().hightScoreVal) {
              this.Surpass();
            }
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
            console.log("PlayPanel 关闭");
          }
          /**
           * 即将超过
           */

        }, {
          key: "Surpass",
          value: function Surpass() {
            //发消息给子域
            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 3
              }); //console.log("发消息给子域");
            }

            this.scheduleOnce(function () {
              //发消息给子域
              if (CC_WECHATGAME) {
                window['wx'].postMessage({
                  messageType: 5
                }); //console.log("发消息给子域");
              }
            });
          }
          /**
           * 设置分数
           */

        }, {
          key: "SetScoreUI",
          value: function SetScoreUI(val) {
            this.txtScore.string = val.toString(); //更新上盘成绩

            this.lastScore = val; //更新数据到数据库

            console.log("更新上盘的成绩：" + val);
          }
          /**
           * 隐藏游戏操作说明
           */

        }, {
          key: "HideTips",
          value: function HideTips() {
            var _this2 = this;

            this.scheduleOnce(function () {
              _this2.imgTips.node.active = false;
              console.log("隐藏游戏操作提示...");
            }, 1);
          }
        }]);
        return PlayPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end PlayPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1BsYXlQYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTGFiZWxDb21wb25lbnQiLCJTcHJpdGVDb21wb25lbnQiLCJQYW5lbFJvb3QiLCJBdWRpb1N2YyIsIkxvYWRTeXMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5UGFuZWwiLCJtZW51IiwidHlwZSIsImxhc3RTY29yZSIsImltZ1RpcHMiLCJlbmFibGVkIiwiY29uc29sZSIsImxvZyIsIkhpZGVUaXBzIiwiSW5zdGFuY2UiLCJoaWdodFNjb3JlVmFsIiwiU3VycGFzcyIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwic2NoZWR1bGVPbmNlIiwidmFsIiwidHh0U2NvcmUiLCJzdHJpbmciLCJ0b1N0cmluZyIsIm5vZGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsZSxPQUFBQSxlOztBQUM3Q0MsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTyxvQkFBQUEsTzs7O2dGQURnRTs7O0FBR2pFQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzsyQkFJSkMsUyxXQUZaRixPQUFPLENBQUMsV0FBRCxDLFVBQ1BOLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQixnQkFBaEIsQyxVQUdJRixRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFVDtBQUFSLE9BQUQsQyxVQUdSTSxRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFUjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNRlMsUyxHQUFvQixDOzs7Ozs7c0NBRWY7QUFDUiw2R0FEUSxDQUdSOztBQUNBLGlCQUFLQyxPQUFMLENBQWFDLE9BQWIsR0FBdUIsSUFBdkI7QUFFQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFOUSxDQVFSOztBQUNBLGlCQUFLQyxRQUFMO0FBQ0g7OzttQ0FFUTtBQUNMO0FBQ0EsZ0JBQUksS0FBS0wsU0FBTCxHQUFpQk4sT0FBTyxDQUFDWSxRQUFSLEdBQW1CQyxhQUF4QyxFQUF1RDtBQUNuRCxtQkFBS0MsT0FBTDtBQUNIO0FBQ0o7QUFHRDs7Ozs7OzBDQUd1QjtBQUNuQjtBQUNBZixZQUFBQSxRQUFRLENBQUNhLFFBQVQsR0FBb0JHLFdBQXBCLEdBRm1CLENBR25COztBQUNBLGlCQUFLQyxhQUFMLENBQW1CLEtBQW5CO0FBQ0FQLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDSDtBQUdEOzs7Ozs7b0NBR2lCO0FBRWI7QUFDQSxnQkFBSU8sYUFBSixFQUFtQjtBQUNmQyxjQUFBQSxNQUFNLENBQUMsSUFBRCxDQUFOLENBQWFDLFdBQWIsQ0FBeUI7QUFDckJDLGdCQUFBQSxXQUFXLEVBQUU7QUFEUSxlQUF6QixFQURlLENBSWY7QUFDSDs7QUFDRCxpQkFBS0MsWUFBTCxDQUFrQixZQUFZO0FBQzFCO0FBQ0Esa0JBQUlKLGFBQUosRUFBbUI7QUFDZkMsZ0JBQUFBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsV0FBYixDQUF5QjtBQUNyQkMsa0JBQUFBLFdBQVcsRUFBRTtBQURRLGlCQUF6QixFQURlLENBSWY7QUFDSDtBQUNKLGFBUkQ7QUFVSDtBQUVEOzs7Ozs7cUNBR2tCRSxHLEVBQWE7QUFDM0IsaUJBQUtDLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QkYsR0FBRyxDQUFDRyxRQUFKLEVBQXZCLENBRDJCLENBRTNCOztBQUNBLGlCQUFLbkIsU0FBTCxHQUFpQmdCLEdBQWpCLENBSDJCLENBSTNCOztBQUVBYixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhWSxHQUF6QjtBQUNIO0FBRUQ7Ozs7OztxQ0FHa0I7QUFBQTs7QUFDZCxpQkFBS0QsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLGNBQUEsTUFBSSxDQUFDZCxPQUFMLENBQWFtQixJQUFiLENBQWtCQyxNQUFsQixHQUEyQixLQUEzQjtBQUNBbEIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNILGFBSEQsRUFHRyxDQUhIO0FBSUg7OztRQXpGMEJaLFM7Ozs7O2lCQUdPLEk7Ozs7Ozs7aUJBR0EsSTs7OztvQkFicEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBTcHJpdGVDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgTG9hZFN5cyB9IGZyb20gXCIuLi9TeXN0ZW0vTG9hZFN5c1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllckRhdGFcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUGxheVBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L1BsYXlQYW5lbFwiKVxyXG5leHBvcnQgY2xhc3MgUGxheVBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMYWJlbENvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIHR4dFNjb3JlOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgaW1nVGlwczogU3ByaXRlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuebmOaIkOe7qVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGFzdFNjb3JlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEluaXRQYW5lbCgpIHtcclxuICAgICAgICBzdXBlci5Jbml0UGFuZWwoKTtcclxuXHJcbiAgICAgICAgLy/kuIDlvIDlp4vlsLHlsZXnpLpUaXBzXHJcbiAgICAgICAgdGhpcy5pbWdUaXBzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlQYW5lbCBJbml0Li4uXCIpO1xyXG5cclxuICAgICAgICAvL+malOS4gOauteaXtumXtOmakOiXj1RpcHNcclxuICAgICAgICB0aGlzLkhpZGVUaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8v5aaC5p6c6LaF6L+H5Y6G5Y+y5pyA6auY5YiGXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFNjb3JlID4gTG9hZFN5cy5JbnN0YW5jZSgpLmhpZ2h0U2NvcmVWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5TdXJwYXNzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreaMiemSrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tDbG9zZUJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL3N1cGVyLkNsaWNrQ2xvc2VCdG4oKTtcclxuICAgICAgICB0aGlzLlNldFBhbmVsU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheVBhbmVsIOWFs+mXrVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljbPlsIbotoXov4dcclxuICAgICAqL1xyXG4gICAgcHVibGljIFN1cnBhc3MoKSB7XHJcblxyXG4gICAgICAgIC8v5Y+R5raI5oGv57uZ5a2Q5Z+fXHJcbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWPkea2iOaBr+e7meWtkOWfn1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+WPkea2iOaBr+e7meWtkOWfn1xyXG4gICAgICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Wyd3eCddLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogNSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWPkea2iOaBr+e7meWtkOWfn1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5YiG5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRTY29yZVVJKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50eHRTY29yZS5zdHJpbmcgPSB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICAvL+abtOaWsOS4iuebmOaIkOe7qVxyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlID0gdmFsO1xyXG4gICAgICAgIC8v5pu05paw5pWw5o2u5Yiw5pWw5o2u5bqTXHJcbiAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuabtOaWsOS4iuebmOeahOaIkOe7qe+8mlwiICsgdmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmakOiXj+a4uOaIj+aTjeS9nOivtOaYjlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSGlkZVRpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltZ1RpcHMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLpmpDol4/muLjmiI/mk43kvZzmj5DnpLouLi5cIik7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19