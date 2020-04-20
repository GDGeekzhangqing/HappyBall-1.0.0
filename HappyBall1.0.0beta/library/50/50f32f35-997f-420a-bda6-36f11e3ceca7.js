"use strict";

System.register(["cc", "../Service/ShareSvc.ts", "../Service/NetSvc.ts", "../Service/AudioSvc.ts", "../Service/ResSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ShareSvc, NetSvc, AudioSvc, ResSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, ccclass, property, GameRoot;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceResSvcTs) {
      ResSvc = _ServiceResSvcTs.ResSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "50f3281mX9CCr2mNvEePOyn", "GameRoot"); // begin GameRoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameRoot", GameRoot = (_dec = ccclass("GameRoot"), _dec2 = property('LoadPanel'), _dec3 = property('TipsPanel'), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameRoot, _Component);

        function GameRoot() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameRoot);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameRoot)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "loadPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tipPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameRoot, [{
          key: "start",
          value: function start() {
            GameRoot.instance = this;
            console.log("Game Start...");
            this.ClearUIRoot();
            this.Init();
          }
          /**
           * 初始化游戏
           */

        }, {
          key: "Init",
          value: function Init() {
            //服务模块初始化
            var netSvc = this.node.getComponent(NetSvc);
            netSvc.InitSvc();
            var audioSvc = this.node.getComponent(AudioSvc);
            audioSvc.InitSvc();
            var resSvc = this.node.getComponent(ResSvc);
            resSvc.InitSvc();
            var shareSvc = this.node.getComponent(ShareSvc);
            shareSvc.InitMgr(); //业务系统初始化
            //#region 会造成循环引用

            /* let mainMgr: MainMgr = this.node.getComponent(MainMgr);
             mainMgr.InitMgr();
             let shareSvc: ShareSvc = this.node.getComponent(ShareSvc);
             shareSvc.InitMgr();*/
            //#endregion
            //通过字符串而非类本身来获取 MainMgr 组件
            // "MainMgr" 是 类 MainMgr  的 cc 名称，因为有：
            // ```ts
            // @ccclass("MainMgr") export class MainMgr
            // ```

            var mainMgr = this.node.getComponent('MainMgr');
            mainMgr.InitMgr();
            var loadSys = this.node.getComponent('LoadSys');
            loadSys.InitSys(); //进入场景并加载相应UI (Cocos3D不支持多场景同屏，所以要改成常驻节点)
            //但是我们可以加载预制体啊！
            //TODO

            loadSys.EnterLogin();
            console.log("Game Init...");
          }
          /**
           * 清理UIRoot
           */

        }, {
          key: "ClearUIRoot",
          value: function ClearUIRoot() {
            //canvas:Node=

            /*let canvasPos:Node[]=this.node.getChildByName("UIRoot");
            for(let i=0;i<canvasPos.c;i++){
                canvasPos.getChildByUuid(i).active=false;
            }*/
            console.log("隐藏整个节点...");
          }
          /**
           * 添加提示信息
           */

        }, {
          key: "AddTips",
          value: function AddTips(tips) {
            //this.tipPanel.AddTips(tips);
            GameRoot.instance.tipPanel.AddTips(tips);
          } //#region  设置数据

          /**
           * 设置玩家数据
           */

        }, {
          key: "SetPlayerData",
          value: function SetPlayerData(data) {
            //this.playerData=data.playerData;//这个有错。
            console.log("设置玩家数据...");
          }
          /**
           * 设置钻石数据
           */

        }, {
          key: "SetDiamond",
          value: function SetDiamond(data) {
            console.log("设置钻石数据成功...");
          }
          /**
           * 设置单人排行榜数据
           */

        }, {
          key: "SetTiwnRankListData",
          value: function SetTiwnRankListData(data) {
            //这个函数好像不需要
            //this.playerData.tiwnRankItemData = data.tiwnRankItemData;
            console.log("设置单人排行榜数据");
          }
          /**
           * 设置接力排行榜数据
           */

        }, {
          key: "SetRelayRankListData",
          value: function SetRelayRankListData(data) {
            //这个函数好像不需要
            // this.playerData.tiwnRankItemData = data.relayRankItemData;//可能有问题
            console.log("设置接力排行榜数据");
          } //#endregion

        }], [{
          key: "Instance",
          //限制产生多个对象

          /*private constructor() {
              super();
          }*/

          /**
           * 获得实例对象
           */
          value: function Instance() {
            return this.instance;
          } //#endregion
          //#region  会造成循环引用

          /* @property({ type: LoadPanel })
           public loadPanel: LoadPanel = null;*/
          //#endregion
          // 通过字符串而非类本身来标记属性类型为 LoadPanel；"loadPanel" 是 类 LoadPanel  的 cc 名称

        }]);
        return GameRoot;
      }(Component), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameRoot

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Sb290L0dhbWVSb290LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTaGFyZVN2YyIsIk5ldFN2YyIsIkF1ZGlvU3ZjIiwiUmVzU3ZjIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVJvb3QiLCJpbnN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJDbGVhclVJUm9vdCIsIkluaXQiLCJuZXRTdmMiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiSW5pdFN2YyIsImF1ZGlvU3ZjIiwicmVzU3ZjIiwic2hhcmVTdmMiLCJJbml0TWdyIiwibWFpbk1nciIsImxvYWRTeXMiLCJJbml0U3lzIiwiRW50ZXJMb2dpbiIsInRpcHMiLCJ0aXBQYW5lbCIsIkFkZFRpcHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFHWkMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTSxvQkFBQUEsTTs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTSxvQkFBQUEsTTs7OytFQUpnRTs7O0FBUWpFQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBNkJIQyxRQUFRLENBQUMsV0FBRCxDLFVBR1JBLFFBQVEsQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJRDtBQUNKQyxZQUFBQSxRQUFRLENBQUNDLFFBQVQsR0FBb0IsSUFBcEI7QUFFQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLGlCQUFLQyxXQUFMO0FBQ0EsaUJBQUtDLElBQUw7QUFDSDtBQUVEOzs7Ozs7aUNBR2M7QUFDVjtBQUNBLGdCQUFJQyxNQUFjLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCYixNQUF2QixDQUFyQjtBQUNBVyxZQUFBQSxNQUFNLENBQUNHLE9BQVA7QUFDQSxnQkFBSUMsUUFBa0IsR0FBRyxLQUFLSCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJaLFFBQXZCLENBQXpCO0FBQ0FjLFlBQUFBLFFBQVEsQ0FBQ0QsT0FBVDtBQUNBLGdCQUFJRSxNQUFjLEdBQUcsS0FBS0osSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxNQUF2QixDQUFyQjtBQUNBYyxZQUFBQSxNQUFNLENBQUNGLE9BQVA7QUFDQSxnQkFBSUcsUUFBa0IsR0FBRyxLQUFLTCxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLFFBQXZCLENBQXpCO0FBQ0FrQixZQUFBQSxRQUFRLENBQUNDLE9BQVQsR0FUVSxDQVdWO0FBRUE7O0FBQ0E7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQUlDLE9BQWdCLEdBQUcsS0FBS1AsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFNBQXZCLENBQXZCO0FBQ0FNLFlBQUFBLE9BQU8sQ0FBQ0QsT0FBUjtBQUVBLGdCQUFJRSxPQUFlLEdBQUMsS0FBS1IsSUFBTCxDQUFVQyxZQUFWLENBQXVCLFNBQXZCLENBQXBCO0FBQ0FPLFlBQUFBLE9BQU8sQ0FBQ0MsT0FBUixHQTdCVSxDQStCVjtBQUNBO0FBQ0E7O0FBRUFELFlBQUFBLE9BQU8sQ0FBQ0UsVUFBUjtBQUNBZixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7QUFFRDs7Ozs7O3dDQUdzQjtBQUNsQjs7QUFDQTs7OztBQUlBRCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFFRDs7Ozs7O2tDQUdlZSxJLEVBQWM7QUFDekI7QUFDQWxCLFlBQUFBLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQmtCLFFBQWxCLENBQTJCQyxPQUEzQixDQUFtQ0YsSUFBbkM7QUFDSCxXLENBR0Q7O0FBRUE7Ozs7Ozt3Q0FHcUJHLEksRUFBa0I7QUFDbkM7QUFDQW5CLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUVEOzs7Ozs7cUNBR2tCa0IsSSxFQUFrQjtBQUNoQ25CLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDSDtBQUVEOzs7Ozs7OENBRzJCa0IsSSxFQUFrQjtBQUFHO0FBQzVDO0FBQ0FuQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFFRDs7Ozs7OytDQUc0QmtCLEksRUFBa0I7QUFBRztBQUM3QztBQUNBbkIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILFcsQ0FFRDs7OztBQW5JQTs7QUFDQTs7OztBQUlBOzs7cUNBR21DO0FBQy9CLG1CQUFPLEtBQUtGLFFBQVo7QUFDSCxXLENBRUQ7QUFFQTs7QUFDQTs7QUFFQTtBQUVBOzs7O1FBM0IwQlIsUyxXQUtYUSxRLEdBQXFCLEk7Ozs7O2lCQXdCTixJOzs7Ozs7O2lCQUdELEk7Ozs7b0JBM0NmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBmaW5kIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IExvYWRQYW5lbCB9IGZyb20gXCIuLi9WaWV3L0xvYWRQYW5lbFwiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4uL1N5c3RlbS9NYWluTWdyXCI7XHJcbmltcG9ydCB7IFNoYXJlU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvU2hhcmVTdmNcIjtcclxuaW1wb3J0IHsgTmV0U3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvTmV0U3ZjXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgUmVzU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvUmVzU3ZjXCI7XHJcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBUaXBzUGFuZWwgfSBmcm9tIFwiLi4vVmlldy9UaXBzUGFuZWxcIjtcclxuaW1wb3J0IHsgTG9hZFN5cyB9IGZyb20gXCIuLi9TeXN0ZW0vTG9hZFN5c1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJHYW1lUm9vdFwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZVJvb3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8vI3JlZ2lvbiAg5Y2V5L6LXHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogR2FtZVJvb3QgPSBuZXcgR2FtZVJvb3QoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHYW1lUm9vdCA9IG51bGw7XHJcblxyXG5cclxuICAgIC8v6ZmQ5Yi25Lqn55Sf5aSa5Liq5a+56LGhXHJcbiAgICAvKnByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH0qL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogR2FtZVJvb3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg5Lya6YCg5oiQ5b6q546v5byV55SoXHJcbiAgICAvKiBAcHJvcGVydHkoeyB0eXBlOiBMb2FkUGFuZWwgfSlcclxuICAgICBwdWJsaWMgbG9hZFBhbmVsOiBMb2FkUGFuZWwgPSBudWxsOyovXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyDpgJrov4flrZfnrKbkuLLogIzpnZ7nsbvmnKzouqvmnaXmoIforrDlsZ7mgKfnsbvlnovkuLogTG9hZFBhbmVs77ybXCJsb2FkUGFuZWxcIiDmmK8g57G7IExvYWRQYW5lbCAg55qEIGNjIOWQjeensFxyXG4gICAgQHByb3BlcnR5KCdMb2FkUGFuZWwnKVxyXG4gICAgcHVibGljIGxvYWRQYW5lbDogTG9hZFBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoJ1RpcHNQYW5lbCcpXHJcbiAgICBwdWJsaWMgdGlwUGFuZWw6IFRpcHNQYW5lbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHN0YXJ0KCkgeyAgXHJcbiAgICAgICAgR2FtZVJvb3QuaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgU3RhcnQuLi5cIilcclxuICAgICAgICB0aGlzLkNsZWFyVUlSb290KCk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIEluaXQoKSB7XHJcbiAgICAgICAgLy/mnI3liqHmqKHlnZfliJ3lp4vljJZcclxuICAgICAgICBsZXQgbmV0U3ZjOiBOZXRTdmMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE5ldFN2Yyk7XHJcbiAgICAgICAgbmV0U3ZjLkluaXRTdmMoKTtcclxuICAgICAgICBsZXQgYXVkaW9TdmM6IEF1ZGlvU3ZjID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBdWRpb1N2Yyk7XHJcbiAgICAgICAgYXVkaW9TdmMuSW5pdFN2YygpO1xyXG4gICAgICAgIGxldCByZXNTdmM6IFJlc1N2YyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmVzU3ZjKTtcclxuICAgICAgICByZXNTdmMuSW5pdFN2YygpO1xyXG4gICAgICAgIGxldCBzaGFyZVN2YzogU2hhcmVTdmMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNoYXJlU3ZjKTtcclxuICAgICAgICBzaGFyZVN2Yy5Jbml0TWdyKCk7XHJcblxyXG4gICAgICAgIC8v5Lia5Yqh57O757uf5Yid5aeL5YyWXHJcblxyXG4gICAgICAgIC8vI3JlZ2lvbiDkvJrpgKDmiJDlvqrnjq/lvJXnlKhcclxuICAgICAgICAvKiBsZXQgbWFpbk1ncjogTWFpbk1nciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTWFpbk1ncik7XHJcbiAgICAgICAgIG1haW5NZ3IuSW5pdE1ncigpO1xyXG4gICAgICAgICBsZXQgc2hhcmVTdmM6IFNoYXJlU3ZjID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTaGFyZVN2Yyk7XHJcbiAgICAgICAgIHNoYXJlU3ZjLkluaXRNZ3IoKTsqL1xyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICAvL+mAmui/h+Wtl+espuS4suiAjOmdnuexu+acrOi6q+adpeiOt+WPliBNYWluTWdyIOe7hOS7tlxyXG4gICAgICAgIC8vIFwiTWFpbk1nclwiIOaYryDnsbsgTWFpbk1nciAg55qEIGNjIOWQjeensO+8jOWboOS4uuacie+8mlxyXG4gICAgICAgIC8vIGBgYHRzXHJcbiAgICAgICAgLy8gQGNjY2xhc3MoXCJNYWluTWdyXCIpIGV4cG9ydCBjbGFzcyBNYWluTWdyXHJcbiAgICAgICAgLy8gYGBgXHJcbiAgICAgICAgbGV0IG1haW5NZ3I6IE1haW5NZ3IgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdNYWluTWdyJykgYXMgTWFpbk1ncjtcclxuICAgICAgICBtYWluTWdyLkluaXRNZ3IoKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRTeXM6TG9hZFN5cz10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdMb2FkU3lzJykgYXMgTG9hZFN5cztcclxuICAgICAgICBsb2FkU3lzLkluaXRTeXMoKTtcclxuICAgIFxyXG4gICAgICAgIC8v6L+b5YWl5Zy65pmv5bm25Yqg6L2955u45bqUVUkgKENvY29zM0TkuI3mlK/mjIHlpJrlnLrmma/lkIzlsY/vvIzmiYDku6XopoHmlLnmiJDluLjpqbvoioLngrkpXHJcbiAgICAgICAgLy/kvYbmmK/miJHku6zlj6/ku6XliqDovb3pooTliLbkvZPllYrvvIFcclxuICAgICAgICAvL1RPRE9cclxuXHJcbiAgICAgICAgbG9hZFN5cy5FbnRlckxvZ2luKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIEluaXQuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIZVSVJvb3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDbGVhclVJUm9vdCgpIHtcclxuICAgICAgICAvL2NhbnZhczpOb2RlPVxyXG4gICAgICAgIC8qbGV0IGNhbnZhc1BvczpOb2RlW109dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVUlSb290XCIpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y2FudmFzUG9zLmM7aSsrKXtcclxuICAgICAgICAgICAgY2FudmFzUG9zLmdldENoaWxkQnlVdWlkKGkpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgIH0qL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqQ6JeP5pW05Liq6IqC54K5Li4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5o+Q56S65L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZGRUaXBzKHRpcHM6IHN0cmluZykge1xyXG4gICAgICAgIC8vdGhpcy50aXBQYW5lbC5BZGRUaXBzKHRpcHMpO1xyXG4gICAgICAgIEdhbWVSb290Lmluc3RhbmNlLnRpcFBhbmVsLkFkZFRpcHModGlwcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg6K6+572u5pWw5o2uXHJcbiAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7njqnlrrbmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIFNldFBsYXllckRhdGEoZGF0YTogUGxheWVyRGF0YSkge1xyXG4gICAgICAgIC8vdGhpcy5wbGF5ZXJEYXRhPWRhdGEucGxheWVyRGF0YTsvL+i/meS4quaciemUmeOAglxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u546p5a625pWw5o2uLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6ZK755+z5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXREaWFtb25kKGRhdGE6IFBsYXllckRhdGEpIHsgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u6ZK755+z5pWw5o2u5oiQ5YqfLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y2V5Lq65o6S6KGM5qac5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRUaXduUmFua0xpc3REYXRhKGRhdGE6IFBsYXllckRhdGEpIHsgIC8v6L+Z5Liq5Ye95pWw5aW95YOP5LiN6ZyA6KaBXHJcbiAgICAgICAgLy90aGlzLnBsYXllckRhdGEudGl3blJhbmtJdGVtRGF0YSA9IGRhdGEudGl3blJhbmtJdGVtRGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiuvue9ruWNleS6uuaOkuihjOamnOaVsOaNrlwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5o6l5Yqb5o6S6KGM5qac5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTZXRSZWxheVJhbmtMaXN0RGF0YShkYXRhOiBQbGF5ZXJEYXRhKSB7ICAvL+i/meS4quWHveaVsOWlveWDj+S4jemcgOimgVxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyRGF0YS50aXduUmFua0l0ZW1EYXRhID0gZGF0YS5yZWxheVJhbmtJdGVtRGF0YTsvL+WPr+iDveaciemXrumimFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u5o6l5Yqb5o6S6KGM5qac5pWw5o2uXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuXHJcbn1cclxuIl19