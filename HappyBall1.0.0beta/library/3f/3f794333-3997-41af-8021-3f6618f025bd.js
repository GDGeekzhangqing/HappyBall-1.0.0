"use strict";

System.register(["cc", "../Root/PanelRoot.ts"], function (_export, _context) {
  "use strict";

  var _decorator, ProgressBarComponent, director, loader, PanelRoot, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, LoadPanel;

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
      ProgressBarComponent = _cc.ProgressBarComponent;
      director = _cc.director;
      loader = _cc.loader;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3f794MzOZdBr4AhP2YY8CW9", "LoadPanel"); // begin LoadPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadPanel", LoadPanel = (_dec = ccclass("LoadPanel"), _dec2 = _decorator.menu("View/LoadPanel"), _dec3 = property({
        type: ProgressBarComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(LoadPanel, _PanelRoot);

        function LoadPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LoadPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LoadPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "barProgress", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this.isCompProgress = false;
          return _this;
        }

        babelHelpers.createClass(LoadPanel, [{
          key: "InitPanel",
          //初始化
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(LoadPanel.prototype), "InitPanel", this).call(this);
            console.log("初始化loadpanel...");
          }
        }, {
          key: "update",
          value: function update() {
            if (this.isCompProgress == true) return;

            for (var i = 0; i < 1000; i++) {
              this.SetProgress(i / 1000);
              this.isCompProgress = true;
            }
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //这个脚本不需要这个函数
            //播放音响
            this.audioSvc.PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("LoadPanel 关闭");
          }
          /**
           * 设置加载进度值
           */

        }, {
          key: "SetProgress",
          value: function SetProgress(val) {
            //设置bar
            this.barProgress.progress = val; //console.log("设置场景加载进度成功...");
          }
          /**
           * 加载场景
           */

        }, {
          key: "LoadScence",
          value: function LoadScence() {
            var _this2 = this;

            //弃用
            //获取Game场景的UUID
            var target = director._getSceneUuid("Game");

            loader.load({
              uuid: target.uuid,
              type: 'uuid'
            }, function (completedCount, totalCount, item) {
              cc.log("已完成Items:" + completedCount);
              cc.log("全部Items:" + totalCount);
              cc.log("当前Item:" + item.url);
              var val = completedCount / totalCount;
              cc.log("加载进度:" + val);
              _this2.barProgress.progress = val;
            }, function (error) {
              if (error) {
                cc.errorID(1210, "Game", error.message);
              } else {
                cc.log("加载完成");
              }
            });
          }
        }, {
          key: "loadSS",
          value: function loadSS() {
            //要改，改为加载预制体资源，或者不加载。好吧不加载。
            var bar = this.barProgress;

            loader.onProgress = function (cp, tt) {
              console.log("cp/tt:" + cp / tt); //能打印出来加载的进度变化

              bar.progress = cp / tt;
            }.bind(this);

            this.scheduleOnce(function () {
              director.loadScene("Game", null, null);
            }, 2); //director.loadScene("Game", null, null);.

            cc.log("加载中...");
          }
        }]);
        return LoadPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "barProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end LoadPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L0xvYWRQYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJkaXJlY3RvciIsImxvYWRlciIsIlBhbmVsUm9vdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRQYW5lbCIsIm1lbnUiLCJ0eXBlIiwiaXNDb21wUHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwiaSIsIlNldFByb2dyZXNzIiwiYXVkaW9TdmMiLCJQbGF5VUlBdWRpbyIsIlNldFBhbmVsU3RhdGUiLCJ2YWwiLCJiYXJQcm9ncmVzcyIsInByb2dyZXNzIiwidGFyZ2V0IiwiX2dldFNjZW5lVXVpZCIsImxvYWQiLCJ1dWlkIiwiY29tcGxldGVkQ291bnQiLCJ0b3RhbENvdW50IiwiaXRlbSIsImNjIiwidXJsIiwiZXJyb3IiLCJlcnJvcklEIiwibWVzc2FnZSIsImJhciIsIm9uUHJvZ3Jlc3MiLCJjcCIsInR0IiwiYmluZCIsInNjaGVkdWxlT25jZSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQXNCQyxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsTSxPQUFBQSxNOztBQUM3REMsTUFBQUEsUyxvQkFBQUEsUzs7O2dGQUNnRTs7O0FBQ2pFQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzsyQkFJSkMsUyxXQUZaRixPQUFPLENBQUMsV0FBRCxDLFVBQ1BMLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQixnQkFBaEIsQyxVQUtJRixRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFUjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdEUyxjLEdBQTBCLEs7Ozs7OztBQUVsQztzQ0FDWTtBQUNSO0FBRUFDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0g7OzttQ0FFUTtBQUNMLGdCQUFJLEtBQUtGLGNBQUwsSUFBdUIsSUFBM0IsRUFDSTs7QUFDSixpQkFBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLElBQXBCLEVBQTBCQSxDQUFDLEVBQTNCLEVBQStCO0FBQzNCLG1CQUFLQyxXQUFMLENBQWlCRCxDQUFDLEdBQUcsSUFBckI7QUFDQSxtQkFBS0gsY0FBTCxHQUFzQixJQUF0QjtBQUNIO0FBQ0o7QUFFRDs7Ozs7OzBDQUd1QjtBQUFFO0FBQ3JCO0FBQ0EsaUJBQUtLLFFBQUwsQ0FBY0MsV0FBZCxHQUZtQixDQUduQjs7QUFDQSxpQkFBS0MsYUFBTCxDQUFtQixLQUFuQjtBQUNBTixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7QUFFRDs7Ozs7O3NDQUdtQk0sRyxFQUFhO0FBQzVCO0FBQ0EsaUJBQUtDLFdBQUwsQ0FBaUJDLFFBQWpCLEdBQTRCRixHQUE1QixDQUY0QixDQUc1QjtBQUNIO0FBRUQ7Ozs7Ozt1Q0FHb0I7QUFBQTs7QUFBQztBQUNqQjtBQUNBLGdCQUFJRyxNQUFNLEdBQUduQixRQUFRLENBQUNvQixhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUFuQixZQUFBQSxNQUFNLENBQUNvQixJQUFQLENBQVk7QUFBRUMsY0FBQUEsSUFBSSxFQUFFSCxNQUFNLENBQUNHLElBQWY7QUFBcUJmLGNBQUFBLElBQUksRUFBRTtBQUEzQixhQUFaLEVBQWlELFVBQUNnQixjQUFELEVBQWlCQyxVQUFqQixFQUE2QkMsSUFBN0IsRUFBc0M7QUFDbkZDLGNBQUFBLEVBQUUsQ0FBQ2hCLEdBQUgsQ0FBTyxjQUFjYSxjQUFyQjtBQUNBRyxjQUFBQSxFQUFFLENBQUNoQixHQUFILENBQU8sYUFBYWMsVUFBcEI7QUFDQUUsY0FBQUEsRUFBRSxDQUFDaEIsR0FBSCxDQUFPLFlBQVllLElBQUksQ0FBQ0UsR0FBeEI7QUFFQSxrQkFBSVgsR0FBRyxHQUFHTyxjQUFjLEdBQUdDLFVBQTNCO0FBQ0FFLGNBQUFBLEVBQUUsQ0FBQ2hCLEdBQUgsQ0FBTyxVQUFVTSxHQUFqQjtBQUNBLGNBQUEsTUFBSSxDQUFDQyxXQUFMLENBQWlCQyxRQUFqQixHQUE0QkYsR0FBNUI7QUFFSCxhQVRELEVBU0csVUFBQ1ksS0FBRCxFQUFXO0FBQ1Ysa0JBQUlBLEtBQUosRUFBVztBQUNQRixnQkFBQUEsRUFBRSxDQUFDRyxPQUFILENBQVcsSUFBWCxFQUFpQixNQUFqQixFQUF5QkQsS0FBSyxDQUFDRSxPQUEvQjtBQUNILGVBRkQsTUFHSztBQUNESixnQkFBQUEsRUFBRSxDQUFDaEIsR0FBSCxDQUFPLE1BQVA7QUFDSDtBQUNKLGFBaEJEO0FBa0JIOzs7bUNBR2U7QUFBQztBQUNiLGdCQUFJcUIsR0FBRyxHQUFHLEtBQUtkLFdBQWY7O0FBQ0FoQixZQUFBQSxNQUFNLENBQUMrQixVQUFQLEdBQW9CLFVBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUNsQ3pCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVd1QixFQUFFLEdBQUdDLEVBQTVCLEVBRGtDLENBQ0Y7O0FBQ2hDSCxjQUFBQSxHQUFHLENBQUNiLFFBQUosR0FBZWUsRUFBRSxHQUFHQyxFQUFwQjtBQUVILGFBSm1CLENBSWxCQyxJQUprQixDQUliLElBSmEsQ0FBcEI7O0FBTUEsaUJBQUtDLFlBQUwsQ0FBa0IsWUFBWTtBQUMxQnBDLGNBQUFBLFFBQVEsQ0FBQ3FDLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsSUFBakM7QUFDSCxhQUZELEVBRUcsQ0FGSCxFQVJZLENBV1o7O0FBRUFYLFlBQUFBLEVBQUUsQ0FBQ2hCLEdBQUgsQ0FBTyxRQUFQO0FBQ0g7OztRQXZGMEJSLFM7Ozs7O2lCQUt1QixJOzs7O29CQVZwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJvZ3Jlc3NCYXJDb21wb25lbnQsIGRpcmVjdG9yLCBsb2FkZXIgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmltcG9ydCB7IE5ldFN2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL05ldFN2Y1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJMb2FkUGFuZWxcIilcclxuQF9kZWNvcmF0b3IubWVudShcIlZpZXcvTG9hZFBhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBMb2FkUGFuZWwgZXh0ZW5kcyBQYW5lbFJvb3Qge1xyXG4gICAgLy/ov5nkuKrohJrmnKzotJ/otKPliqDovb3lnLrmma9cclxuICAgIC8vbG9hZGluZ+eVjOmdolxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByb2dyZXNzQmFyQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgYmFyUHJvZ3Jlc3M6IFByb2dyZXNzQmFyQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0NvbXBQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5Yid5aeL5YyWXHJcbiAgICBJbml0UGFuZWwoKSB7XHJcbiAgICAgICAgc3VwZXIuSW5pdFBhbmVsKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyWbG9hZHBhbmVsLi4uXCIpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcFByb2dyZXNzID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzKGkgLyAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbXBQcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkgeyAvL+i/meS4quiEmuacrOS4jemcgOimgei/meS4quWHveaVsFxyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgdGhpcy5hdWRpb1N2Yy5QbGF5VUlBdWRpbygpXHJcbiAgICAgICAgLy9zdXBlci5DbGlja0Nsb3NlQnRuKCk7XHJcbiAgICAgICAgdGhpcy5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRQYW5lbCDlhbPpl61cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7liqDovb3ov5vluqblgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNldFByb2dyZXNzKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/orr7nva5iYXJcclxuICAgICAgICB0aGlzLmJhclByb2dyZXNzLnByb2dyZXNzID0gdmFsO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCLorr7nva7lnLrmma/liqDovb3ov5vluqbmiJDlip8uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lnLrmma9cclxuICAgICAqL1xyXG4gICAgcHVibGljIExvYWRTY2VuY2UoKSB7Ly/lvIPnlKhcclxuICAgICAgICAvL+iOt+WPlkdhbWXlnLrmma/nmoRVVUlEXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGRpcmVjdG9yLl9nZXRTY2VuZVV1aWQoXCJHYW1lXCIpO1xyXG5cclxuICAgICAgICBsb2FkZXIubG9hZCh7IHV1aWQ6IHRhcmdldC51dWlkLCB0eXBlOiAndXVpZCcgfSwgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuW3suWujOaIkEl0ZW1zOlwiICsgY29tcGxldGVkQ291bnQpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLlhajpg6hJdGVtczpcIiArIHRvdGFsQ291bnQpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLlvZPliY1JdGVtOlwiICsgaXRlbS51cmwpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbCA9IGNvbXBsZXRlZENvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICAgICAgY2MubG9nKFwi5Yqg6L296L+b5bqmOlwiICsgdmFsKTtcclxuICAgICAgICAgICAgdGhpcy5iYXJQcm9ncmVzcy5wcm9ncmVzcyA9IHZhbDtcclxuXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3JJRCgxMjEwLCBcIkdhbWVcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliqDovb3lrozmiJBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxvYWRTUygpIHsvL+imgeaUue+8jOaUueS4uuWKoOi9vemihOWItuS9k+i1hOa6kO+8jOaIluiAheS4jeWKoOi9veOAguWlveWQp+S4jeWKoOi9veOAglxyXG4gICAgICAgIGxldCBiYXIgPSB0aGlzLmJhclByb2dyZXNzO1xyXG4gICAgICAgIGxvYWRlci5vblByb2dyZXNzID0gZnVuY3Rpb24gKGNwLCB0dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNwL3R0OlwiICsgY3AgLyB0dCk7Ly/og73miZPljbDlh7rmnaXliqDovb3nmoTov5vluqblj5jljJZcclxuICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gY3AgLyB0dDtcclxuXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIiwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICAgICAgLy9kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIsIG51bGwsIG51bGwpOy5cclxuXHJcbiAgICAgICAgY2MubG9nKFwi5Yqg6L295LitLi4uXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==