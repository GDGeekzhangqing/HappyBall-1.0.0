"use strict";

System.register(["cc", "../Service/ShareSvc.ts", "../Service/ResSvc.ts", "../Service/AudioSvc.ts", "../Service/NetSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, UITransformComponent, ShareSvc, ResSvc, AudioSvc, NetSvc, _dec, _class, ccclass, property, PanelRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransformComponent = _cc.UITransformComponent;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_ServiceResSvcTs) {
      ResSvc = _ServiceResSvcTs.ResSvc;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "df90aYBxZ1K6at3xvqr1MVD", "PanelRoot"); // begin PanelRoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PanelRoot", PanelRoot = (_dec = ccclass("PanelRoot"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(PanelRoot, _Component);

        function PanelRoot() {
          babelHelpers.classCallCheck(this, PanelRoot);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PanelRoot).apply(this, arguments));
        }

        babelHelpers.createClass(PanelRoot, [{
          key: "SetPanelState",
          //#region  服务持有
          //#endregion

          /**
           * 设置窗体的显示隐藏状态
           */
          value: function SetPanelState() {
            var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (this.node.active != isActive) {
              this.SetActive(this.node.getComponent(UITransformComponent), isActive);
            }

            if (isActive) {
              this.InitPanel();
            } else {
              this.ClearPanel();
            }
          }
          /**
           * 初始化窗体
           */

        }, {
          key: "InitPanel",
          value: function InitPanel() {
            this.resSvc = ResSvc.Instance();
            this.audioSvc = AudioSvc.Instance();
            this.netSvc = NetSvc.Instance();
            this.shareSvc = ShareSvc.Instance();
            console.log("初始化窗体服务...");
          }
          /**
           * 清理窗体
           */

        }, {
          key: "ClearPanel",
          value: function ClearPanel() {
            this.resSvc = null;
            this.audioSvc = null;
            this.netSvc = null;
            this.shareSvc = null;
            console.log("清理窗体服务...");
          }
          /**
           * 获取窗体状态
           */

        }, {
          key: "GetPanelState",
          value: function GetPanelState() {
            return this.node.active;
          }
          /**
           * 点击关闭
           */

          /*public ClickCloseBtn() {  //出现问题
            
              //this.node.active = false;
                console.log("继承窗体关闭....");
          }*/
          //#region   显示隐藏函数重载

          /*protected SetActive(go:UITransformComponent,isActive:boolean);
          protected SetActive(go: LabelComponent, isActive: boolean ) ;*/
          //protected SetActive(go: any, isActive: any) {}

        }, {
          key: "SetActive",
          value: function SetActive(go) {
            var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            go.node.active = isActive;
          }
          /* protected SetActive(go: LabelComponent, isActive: boolean = true) {
               go.enabled=isActive;
          }*/
          //#endregion
          //#region 设置文本函数的重载

        }, {
          key: "SetText",
          value: function SetText(txt) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            txt.string = context;
          } //#endregion

        }]);
        return PanelRoot;
      }(Component)) || _class));

      cc._RF.pop(); // end PanelRoot

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Sb290L1BhbmVsUm9vdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJTaGFyZVN2YyIsIlJlc1N2YyIsIkF1ZGlvU3ZjIiwiTmV0U3ZjIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUGFuZWxSb290IiwiaXNBY3RpdmUiLCJub2RlIiwiYWN0aXZlIiwiU2V0QWN0aXZlIiwiZ2V0Q29tcG9uZW50IiwiSW5pdFBhbmVsIiwiQ2xlYXJQYW5lbCIsInJlc1N2YyIsIkluc3RhbmNlIiwiYXVkaW9TdmMiLCJuZXRTdmMiLCJzaGFyZVN2YyIsImNvbnNvbGUiLCJsb2ciLCJnbyIsInR4dCIsImNvbnRleHQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLG9CLE9BQUFBLG9COztBQUM3QkMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTSxvQkFBQUEsTTs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTSxvQkFBQUEsTTs7O2dGQUZnRTs7O0FBR2pFQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozs7QUFHSjtBQU1BOztBQUdBOzs7MENBRytDO0FBQUEsZ0JBQTFCRyxRQUEwQix1RUFBTixJQUFNOztBQUMzQyxnQkFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JGLFFBQXhCLEVBQWtDO0FBQzlCLG1CQUFLRyxTQUFMLENBQWUsS0FBS0YsSUFBTCxDQUFVRyxZQUFWLENBQXVCWixvQkFBdkIsQ0FBZixFQUE2RFEsUUFBN0Q7QUFDSDs7QUFDRCxnQkFBSUEsUUFBSixFQUFjO0FBQ1YsbUJBQUtLLFNBQUw7QUFDSCxhQUZELE1BR0s7QUFDRCxtQkFBS0MsVUFBTDtBQUNIO0FBQ0o7QUFFRDs7Ozs7O3NDQUdzQjtBQUNsQixpQkFBS0MsTUFBTCxHQUFjYixNQUFNLENBQUNjLFFBQVAsRUFBZDtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCZCxRQUFRLENBQUNhLFFBQVQsRUFBaEI7QUFDQSxpQkFBS0UsTUFBTCxHQUFjZCxNQUFNLENBQUNZLFFBQVAsRUFBZDtBQUNBLGlCQUFLRyxRQUFMLEdBQWdCbEIsUUFBUSxDQUFDZSxRQUFULEVBQWhCO0FBQ0FJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSDtBQUVEOzs7Ozs7dUNBR29CO0FBQ2hCLGlCQUFLTixNQUFMLEdBQWMsSUFBZDtBQUNBLGlCQUFLRSxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUtDLFFBQUwsR0FBYyxJQUFkO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUVEOzs7Ozs7MENBR3VCO0FBQ25CLG1CQUFPLEtBQUtaLElBQUwsQ0FBVUMsTUFBakI7QUFDSDtBQUdEOzs7O0FBR0E7Ozs7O0FBUUE7O0FBRUE7O0FBR0E7Ozs7b0NBQ29CWSxFLEVBQXlDO0FBQUEsZ0JBQTFCZCxRQUEwQix1RUFBTixJQUFNO0FBQ3pEYyxZQUFBQSxFQUFFLENBQUNiLElBQUgsQ0FBUUMsTUFBUixHQUFpQkYsUUFBakI7QUFDSDtBQUVEOzs7QUFHQTtBQUVBOzs7O2tDQUVrQmUsRyxFQUEyQztBQUFBLGdCQUF0QkMsT0FBc0IsdUVBQUosRUFBSTtBQUN6REQsWUFBQUEsR0FBRyxDQUFDRSxNQUFKLEdBQWFELE9BQWI7QUFDSCxXLENBRUQ7Ozs7UUF4RjJCekIsUzs7b0JBTmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBTaGFyZVN2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL1NoYXJlU3ZjXCI7XHJcbmltcG9ydCB7IFJlc1N2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL1Jlc1N2Y1wiO1xyXG5pbXBvcnQgeyBBdWRpb1N2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL0F1ZGlvU3ZjXCI7XHJcbmltcG9ydCB7IE5ldFN2YyB9IGZyb20gXCIuLi9TZXJ2aWNlL05ldFN2Y1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQYW5lbFJvb3RcIilcclxuZXhwb3J0IGNsYXNzIFBhbmVsUm9vdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8jcmVnaW9uICDmnI3liqHmjIHmnIlcclxuICAgIHByb3RlY3RlZCByZXNTdmM6IFJlc1N2YztcclxuICAgIHByb3RlY3RlZCBhdWRpb1N2YzogQXVkaW9TdmM7XHJcbiAgICBwcm90ZWN0ZWQgbmV0U3ZjOiBOZXRTdmM7XHJcbiAgICBwcm90ZWN0ZWQgc2hhcmVTdmM6IFNoYXJlU3ZjO1xyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueql+S9k+eahOaYvuekuumakOiXj+eKtuaAgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2V0UGFuZWxTdGF0ZShpc0FjdGl2ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSAhPSBpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLlNldEFjdGl2ZSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KSwgaXNBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0UGFuZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2xlYXJQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlueql+S9k1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMucmVzU3ZjID0gUmVzU3ZjLkluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1N2YyA9IEF1ZGlvU3ZjLkluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXRTdmMgPSBOZXRTdmMuSW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLnNoYXJlU3ZjID0gU2hhcmVTdmMuSW5zdGFuY2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMlueql+S9k+acjeWKoS4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhueql+S9k1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xlYXJQYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnJlc1N2YyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdWRpb1N2YyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXRTdmMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hhcmVTdmM9bnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua4heeQhueql+S9k+acjeWKoS4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueql+S9k+eKtuaAgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0UGFuZWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmFjdGl2ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDngrnlh7vlhbPpl61cclxuICAgICAqL1xyXG4gICAgLypwdWJsaWMgQ2xpY2tDbG9zZUJ0bigpIHsgIC8v5Ye6546w6Zeu6aKYXHJcbiAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIue7p+aJv+eql+S9k+WFs+mXrS4uLi5cIik7XHJcbiAgICB9Ki9cclxuXHJcblxyXG4gICAgLy8jcmVnaW9uICAg5pi+56S66ZqQ6JeP5Ye95pWw6YeN6L29XHJcblxyXG4gICAgLypwcm90ZWN0ZWQgU2V0QWN0aXZlKGdvOlVJVHJhbnNmb3JtQ29tcG9uZW50LGlzQWN0aXZlOmJvb2xlYW4pO1xyXG4gICAgcHJvdGVjdGVkIFNldEFjdGl2ZShnbzogTGFiZWxDb21wb25lbnQsIGlzQWN0aXZlOiBib29sZWFuICkgOyovXHJcblxyXG4gICAgLy9wcm90ZWN0ZWQgU2V0QWN0aXZlKGdvOiBhbnksIGlzQWN0aXZlOiBhbnkpIHt9XHJcbiAgICBwcm90ZWN0ZWQgU2V0QWN0aXZlKGdvOiBDb21wb25lbnQsIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGdvLm5vZGUuYWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogcHJvdGVjdGVkIFNldEFjdGl2ZShnbzogTGFiZWxDb21wb25lbnQsIGlzQWN0aXZlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgICBnby5lbmFibGVkPWlzQWN0aXZlO1xyXG4gICAgfSovXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24g6K6+572u5paH5pys5Ye95pWw55qE6YeN6L29XHJcblxyXG4gICAgcHJvdGVjdGVkIFNldFRleHQodHh0OiBMYWJlbENvbXBvbmVudCwgY29udGV4dDogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIHR4dC5zdHJpbmcgPSBjb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==