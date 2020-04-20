"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Controller/GameCtr.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts", "./PlayPanel.ts", "../Model/PlayerData.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, PanelRoot, GameCtr, AudioSvc, ShareSvc, ShareLinkType, PlayPanel, PlayerData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, FreeContinuePanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_ModelPlayerDataTs) {
      PlayerData = _ModelPlayerDataTs.PlayerData;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9a2c3mBMsFOS5vddmmqkYaD", "FreeContinuePanel"); // begin FreeContinuePanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * 免费继续界面
       */

      _export("FreeContinuePanel", FreeContinuePanel = (_dec = ccclass("FreeContinuePanel"), _dec2 = _decorator.menu("View/FreeContinuePanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: GameCtr
      }), _dec5 = property({
        type: PlayPanel
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(FreeContinuePanel, _PanelRoot);

        function FreeContinuePanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, FreeContinuePanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(FreeContinuePanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtVal", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(FreeContinuePanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(FreeContinuePanel.prototype), "InitPanel", this).call(this);
            this.SetUI(3);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //super.ClickCloseBtn();
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
            console.log("FreeContinuePanel 关闭");
          }
          /**
           * 点击免费求助
           */

        }, {
          key: "ClickSeekHelpBtn",
          value: function ClickSeekHelpBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //点击之后调用分享接口

            ShareSvc.Instance().ShareLink(ShareLinkType.Both); //完成之后
            //继续游戏

            this.gameCtrl.GameRestart(); //设置上盘的得分为这盘的得分
            //并且钻石数量增加
            //TODO

            console.log("点击免费求助...");
          }
          /**
           * 点击继续
           */

        }, {
          key: "ClickContinueBtn",
          value: function ClickContinueBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //消耗钻石数量（这个写活，要么配置json，要么请求网络数据）
            //请求网络数据
            //判断钻石数量是否满足消耗条件后

            if (PlayerData.Instance().DiamondVal >= 3) {
              //扣除钻石
              PlayerData.Instance().DiamondVal -= 1; //更新到数据库
              //LoadSys.Instance().ServerSave();
              //重新游戏

              this.gameCtrl.GameRestart();
              console.log("判断钻石数目...");
            } //重新游戏


            this.gameCtrl.GameRestart();
            console.log("点击继续...");
          }
          /**
           * 设置消耗的钻石UI
           */

        }, {
          key: "SetUI",
          value: function SetUI(val) {
            this.txtVal.string = val.toString();
          }
        }]);
        return FreeContinuePanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtVal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end FreeContinuePanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L0ZyZWVDb250aW51ZVBhbmVsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJMYWJlbENvbXBvbmVudCIsIlBhbmVsUm9vdCIsIkdhbWVDdHIiLCJBdWRpb1N2YyIsIlNoYXJlU3ZjIiwiU2hhcmVMaW5rVHlwZSIsIlBsYXlQYW5lbCIsIlBsYXllckRhdGEiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJGcmVlQ29udGludWVQYW5lbCIsIm1lbnUiLCJ0eXBlIiwiU2V0VUkiLCJJbnN0YW5jZSIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJTaGFyZUxpbmsiLCJCb3RoIiwiZ2FtZUN0cmwiLCJHYW1lUmVzdGFydCIsIkRpYW1vbmRWYWwiLCJ2YWwiLCJ0eHRWYWwiLCJzdHJpbmciLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXlDQyxNQUFBQSxjLE9BQUFBLGM7O0FBQ3pDQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxPLHdCQUFBQSxPOztBQUNBQyxNQUFBQSxRLHNCQUFBQSxROztBQUNBQyxNQUFBQSxRLHNCQUFBQSxRO0FBQVVDLE1BQUFBLGEsc0JBQUFBLGE7O0FBQ1ZDLE1BQUFBLFMsZ0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFUsc0JBQUFBLFU7Ozt3RkFKZ0U7OztBQU1qRUMsTUFBQUEsTyxHQUFzQlQsVSxDQUF0QlMsTztBQUFTQyxNQUFBQSxRLEdBQWFWLFUsQ0FBYlUsUTtBQUVqQjs7OzttQ0FLYUMsaUIsV0FGWkYsT0FBTyxDQUFDLG1CQUFELEMsVUFDUFQsVUFBVSxDQUFDWSxJQUFYLENBQWdCLHdCQUFoQixDLFVBR0lGLFFBQVEsQ0FBQztBQUFFRyxRQUFBQSxJQUFJLEVBQUVaO0FBQVIsT0FBRCxDLFVBR1JTLFFBQVEsQ0FBQztBQUFFRyxRQUFBQSxJQUFJLEVBQUVWO0FBQVIsT0FBRCxDLFVBR1JPLFFBQVEsQ0FBQztBQUFFRyxRQUFBQSxJQUFJLEVBQUVOO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlhO0FBQ2xCO0FBRUEsaUJBQUtPLEtBQUwsQ0FBVyxDQUFYO0FBQ0g7QUFFRDs7Ozs7OzBDQUd1QjtBQUNuQjtBQUNBVixZQUFBQSxRQUFRLENBQUNXLFFBQVQsR0FBb0JDLFdBQXBCO0FBRUEsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBbkI7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDSDtBQUVEOzs7Ozs7NkNBRzBCO0FBQ3RCO0FBQ0FmLFlBQUFBLFFBQVEsQ0FBQ1csUUFBVCxHQUFvQkMsV0FBcEIsR0FGc0IsQ0FJdEI7O0FBQ0FYLFlBQUFBLFFBQVEsQ0FBQ1UsUUFBVCxHQUFvQkssU0FBcEIsQ0FBOEJkLGFBQWEsQ0FBQ2UsSUFBNUMsRUFMc0IsQ0FNdEI7QUFFQTs7QUFDQSxpQkFBS0MsUUFBTCxDQUFjQyxXQUFkLEdBVHNCLENBVXRCO0FBRUE7QUFDQTs7QUFFQUwsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNIO0FBRUQ7Ozs7Ozs2Q0FHMEI7QUFDdEI7QUFDQWYsWUFBQUEsUUFBUSxDQUFDVyxRQUFULEdBQW9CQyxXQUFwQixHQUZzQixDQUd0QjtBQUVBO0FBRUE7O0FBQ0EsZ0JBQUlSLFVBQVUsQ0FBQ08sUUFBWCxHQUFzQlMsVUFBdEIsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDdkM7QUFDQWhCLGNBQUFBLFVBQVUsQ0FBQ08sUUFBWCxHQUFzQlMsVUFBdEIsSUFBb0MsQ0FBcEMsQ0FGdUMsQ0FHdkM7QUFDQTtBQUNBOztBQUNBLG1CQUFLRixRQUFMLENBQWNDLFdBQWQ7QUFDQUwsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGFBaEJxQixDQWlCdEI7OztBQUNBLGlCQUFLRyxRQUFMLENBQWNDLFdBQWQ7QUFFQUwsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIO0FBR0Q7Ozs7OztnQ0FHYU0sRyxFQUFhO0FBRXRCLGlCQUFLQyxNQUFMLENBQVlDLE1BQVosR0FBcUJGLEdBQUcsQ0FBQ0csUUFBSixFQUFyQjtBQUNIOzs7UUFuRmtDMUIsUzs7Ozs7aUJBR0gsSTs7Ozs7OztpQkFHTCxJOzs7Ozs7O2lCQUdHLEk7Ozs7b0JBdEJoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWxBdGxhcywgTGFiZWxDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IFBhbmVsUm9vdCB9IGZyb20gXCIuLi9Sb290L1BhbmVsUm9vdFwiO1xuaW1wb3J0IHsgR2FtZUN0ciB9IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVDdHJcIjtcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcbmltcG9ydCB7IFNoYXJlU3ZjLCBTaGFyZUxpbmtUeXBlIH0gZnJvbSBcIi4uL1NlcnZpY2UvU2hhcmVTdmNcIjtcbmltcG9ydCB7IFBsYXlQYW5lbCB9IGZyb20gXCIuL1BsYXlQYW5lbFwiO1xuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJEYXRhXCI7XG5pbXBvcnQgeyBMb2FkU3lzIH0gZnJvbSBcIi4uL1N5c3RlbS9Mb2FkU3lzXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG4vKipcbiAqIOWFjei0uee7p+e7reeVjOmdolxuICovXG5AY2NjbGFzcyhcIkZyZWVDb250aW51ZVBhbmVsXCIpXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9GcmVlQ29udGludWVQYW5lbFwiKVxuZXhwb3J0IGNsYXNzIEZyZWVDb250aW51ZVBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXG4gICAgcHVibGljIHR4dFZhbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogR2FtZUN0ciB9KVxuICAgIHB1YmxpYyBnYW1lQ3RybDogR2FtZUN0ciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQbGF5UGFuZWwgfSlcbiAgICBwdWJsaWMgcGxheVBhbmVsOiBQbGF5UGFuZWwgPSBudWxsO1xuXG5cbiAgICBwcm90ZWN0ZWQgSW5pdFBhbmVsKCkge1xuICAgICAgICBzdXBlci5Jbml0UGFuZWwoKTtcblxuICAgICAgICB0aGlzLlNldFVJKDMpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiDlhbPpl63mjInpkq5cbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xpY2tDbG9zZUJ0bigpIHtcbiAgICAgICAgLy9zdXBlci5DbGlja0Nsb3NlQnRuKCk7XG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcblxuICAgICAgICB0aGlzLlNldFBhbmVsU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZyZWVDb250aW51ZVBhbmVsIOWFs+mXrVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDngrnlh7vlhY3otLnmsYLliqlcbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xpY2tTZWVrSGVscEJ0bigpIHtcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xuXG4gICAgICAgIC8v54K55Ye75LmL5ZCO6LCD55So5YiG5Lqr5o6l5Y+jXG4gICAgICAgIFNoYXJlU3ZjLkluc3RhbmNlKCkuU2hhcmVMaW5rKFNoYXJlTGlua1R5cGUuQm90aCk7XG4gICAgICAgIC8v5a6M5oiQ5LmL5ZCOXG5cbiAgICAgICAgLy/nu6fnu63muLjmiI9cbiAgICAgICAgdGhpcy5nYW1lQ3RybC5HYW1lUmVzdGFydCgpO1xuICAgICAgICAvL+iuvue9ruS4iuebmOeahOW+l+WIhuS4uui/meebmOeahOW+l+WIhlxuXG4gICAgICAgIC8v5bm25LiU6ZK755+z5pWw6YeP5aKe5YqgXG4gICAgICAgIC8vVE9ET1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75YWN6LS55rGC5YqpLi4uXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeCueWHu+e7p+e7rVxuICAgICAqL1xuICAgIHB1YmxpYyBDbGlja0NvbnRpbnVlQnRuKCkge1xuICAgICAgICAvL+aSreaUvumfs+WTjVxuICAgICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XG4gICAgICAgIC8v5raI6ICX6ZK755+z5pWw6YeP77yI6L+Z5Liq5YaZ5rS777yM6KaB5LmI6YWN572uanNvbu+8jOimgeS5iOivt+axgue9kee7nOaVsOaNru+8iVxuXG4gICAgICAgIC8v6K+35rGC572R57uc5pWw5o2uXG5cbiAgICAgICAgLy/liKTmlq3pkrvnn7PmlbDph4/mmK/lkKbmu6HotrPmtojogJfmnaHku7blkI5cbiAgICAgICAgaWYgKFBsYXllckRhdGEuSW5zdGFuY2UoKS5EaWFtb25kVmFsID49IDMpIHtcbiAgICAgICAgICAgIC8v5omj6Zmk6ZK755+zXG4gICAgICAgICAgICBQbGF5ZXJEYXRhLkluc3RhbmNlKCkuRGlhbW9uZFZhbCAtPSAxO1xuICAgICAgICAgICAgLy/mm7TmlrDliLDmlbDmja7lupNcbiAgICAgICAgICAgIC8vTG9hZFN5cy5JbnN0YW5jZSgpLlNlcnZlclNhdmUoKTtcbiAgICAgICAgICAgIC8v6YeN5paw5ri45oiPXG4gICAgICAgICAgICB0aGlzLmdhbWVDdHJsLkdhbWVSZXN0YXJ0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIpOaWremSu+efs+aVsOebri4uLlwiKVxuICAgICAgICB9XG4gICAgICAgIC8v6YeN5paw5ri45oiPXG4gICAgICAgIHRoaXMuZ2FtZUN0cmwuR2FtZVJlc3RhcnQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+e7p+e7rS4uLlwiKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOiuvue9rua2iOiAl+eahOmSu+efs1VJXG4gICAgICovXG4gICAgcHVibGljIFNldFVJKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnR4dFZhbC5zdHJpbmcgPSB2YWwudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuXG5cbn1cbiJdfQ==