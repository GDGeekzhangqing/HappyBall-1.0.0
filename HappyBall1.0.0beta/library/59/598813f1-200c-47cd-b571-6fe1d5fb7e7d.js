"use strict";

System.register(["cc", "../Root/PanelRoot.ts"], function (_export, _context) {
  "use strict";

  var _decorator, LabelComponent, AnimationComponent, SpriteComponent, PanelRoot, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, TipsPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      AnimationComponent = _cc.AnimationComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "59881PxIAxHzbVxb+HV+359", "TipsPanel"); // begin TipsPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本用来控制活动提示信息界面

      _export("TipsPanel", TipsPanel = (_dec = ccclass("TipsPanel"), _dec2 = _decorator.menu("View/TipsPanel"), _dec3 = property({
        type: AnimationComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec6 = property({
        type: SpriteComponent
      }), _dec7 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(TipsPanel, _PanelRoot);

        function TipsPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, TipsPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(TipsPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "tipsAni", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtTips", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtAddScore", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIconTips", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtDes", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this.isTipsShow = false;
          _this.tipsQue = new Array();
          return _this;
        }

        babelHelpers.createClass(TipsPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(TipsPanel.prototype), "InitPanel", this).call(this); //延时隐藏tips

            this.SetActive(this.txtTips, false);
          }
        }, {
          key: "update",
          value: function update() {}
          /* if (this.tipsQue.length > 0 && this.isTipsShow == false) {
               let tips: string = this.tipsQue[this.tipsQue.length - 1];
               this.tipsQue.splice(this.tipsQue.length - 1);//移除
               this.SetTips(tips);
           }*/
          //这个脚本不需要写关闭按钮
          //它会自己经过一段时间就关闭

          /**
           * 增加Tips
           */

        }, {
          key: "AddTips",
          value: function AddTips(tips) {
            this.tipsQue.unshift(tips);
            console.log("添加tips...");
          }
          /**
           * 设置Tips
           * @param tips 值
           */

        }, {
          key: "SetTips",
          value: function SetTips(tips) {
            var _this2 = this;

            this.SetActive(this.txtTips);
            this.SetText(this.txtTips, tips);
            this.tipsAni.play(); //延时关闭激活状态

            this.scheduleOnce(function () {
              _this2.SetActive(_this2.txtTips, false);

              _this2.isTipsShow = false;
            }, this.tipsAni.clips.length);
          }
          /**
           * 设置好友图片
           */

        }, {
          key: "SetIcon",
          value: function SetIcon(sp) {
            //怎么从网络上拿到好友的头像
            this.imgIconTips.spriteFrame = sp;
          }
          /**
           *设置描述
           */

        }, {
          key: "SetDes",
          value: function SetDes(tips) {
            this.txtDes.string = tips;
          }
        }]);
        return TipsPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipsAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtAddScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIconTips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end TipsPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1RpcHNQYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTGFiZWxDb21wb25lbnQiLCJBbmltYXRpb25Db21wb25lbnQiLCJTcHJpdGVDb21wb25lbnQiLCJQYW5lbFJvb3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUaXBzUGFuZWwiLCJtZW51IiwidHlwZSIsImlzVGlwc1Nob3ciLCJ0aXBzUXVlIiwiQXJyYXkiLCJTZXRBY3RpdmUiLCJ0eHRUaXBzIiwidGlwcyIsInVuc2hpZnQiLCJjb25zb2xlIiwibG9nIiwiU2V0VGV4dCIsInRpcHNBbmkiLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwiY2xpcHMiLCJsZW5ndGgiLCJzcCIsImltZ0ljb25UaXBzIiwic3ByaXRlRnJhbWUiLCJ0eHREZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsa0IsT0FBQUEsa0I7QUFBb0JDLE1BQUFBLGUsT0FBQUEsZTs7QUFDakVDLE1BQUFBLFMsb0JBQUFBLFM7OztnRkFDZ0U7OztBQUFqRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUSxFQUVqQjs7MkJBR2FDLFMsV0FGWkYsT0FBTyxDQUFDLFdBQUQsQyxVQUNQTCxVQUFVLENBQUNRLElBQVgsQ0FBZ0IsZ0JBQWhCLEMsVUFHSUYsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVA7QUFBUixPQUFELEMsVUFHUkksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEMsVUFHUkssUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRU47QUFBUixPQUFELEMsVUFHUkcsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVI7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0RTLFUsR0FBc0IsSztnQkFFdEJDLE8sR0FBeUIsSUFBSUMsS0FBSixFOzs7Ozs7c0NBR1g7QUFDbEIsNkdBRGtCLENBR2xCOztBQUdBLGlCQUFLQyxTQUFMLENBQWUsS0FBS0MsT0FBcEIsRUFBNkIsS0FBN0I7QUFDSDs7O21DQUVRLENBTVI7QUFMRTs7Ozs7QUFPSDtBQUNBOztBQUVBOzs7Ozs7a0NBR2VDLEksRUFBYztBQUN6QixpQkFBS0osT0FBTCxDQUFhSyxPQUFiLENBQXFCRCxJQUFyQjtBQUNBRSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFFRDs7Ozs7OztrQ0FJZ0JILEksRUFBYztBQUFBOztBQUMxQixpQkFBS0YsU0FBTCxDQUFlLEtBQUtDLE9BQXBCO0FBQ0EsaUJBQUtLLE9BQUwsQ0FBYSxLQUFLTCxPQUFsQixFQUEyQkMsSUFBM0I7QUFFQSxpQkFBS0ssT0FBTCxDQUFhQyxJQUFiLEdBSjBCLENBTTFCOztBQUNBLGlCQUFLQyxZQUFMLENBQWtCLFlBQU07QUFDcEIsY0FBQSxNQUFJLENBQUNULFNBQUwsQ0FBZSxNQUFJLENBQUNDLE9BQXBCLEVBQTZCLEtBQTdCOztBQUNBLGNBQUEsTUFBSSxDQUFDSixVQUFMLEdBQWtCLEtBQWxCO0FBQ0gsYUFIRCxFQUdHLEtBQUtVLE9BQUwsQ0FBYUcsS0FBYixDQUFtQkMsTUFIdEI7QUFJSDtBQUVEOzs7Ozs7a0NBR2VDLEUsRUFBaUI7QUFDNUI7QUFDQSxpQkFBS0MsV0FBTCxDQUFpQkMsV0FBakIsR0FBK0JGLEVBQS9CO0FBQ0g7QUFFRDs7Ozs7O2lDQUdjVixJLEVBQWM7QUFDeEIsaUJBQUthLE1BQUwsQ0FBWUMsTUFBWixHQUFxQmQsSUFBckI7QUFDSDs7O1FBaEYwQlgsUzs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHSixJOzs7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHTixJOzs7O29CQXBCbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBBbmltYXRpb25Db21wb25lbnQsIFNwcml0ZUNvbXBvbmVudCwgU3ByaXRlRnJhbWUgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+i/meS4quiEmuacrOeUqOadpeaOp+WItua0u+WKqOaPkOekuuS/oeaBr+eVjOmdolxyXG5AY2NjbGFzcyhcIlRpcHNQYW5lbFwiKVxyXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9UaXBzUGFuZWxcIilcclxuZXhwb3J0IGNsYXNzIFRpcHNQYW5lbCBleHRlbmRzIFBhbmVsUm9vdCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQW5pbWF0aW9uQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgdGlwc0FuaTogQW5pbWF0aW9uQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMYWJlbENvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIHR4dFRpcHM6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMYWJlbENvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIHR4dEFkZFNjb3JlOiBMYWJlbENvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgaW1nSWNvblRpcHM6IFNwcml0ZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB0eHREZXM6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzVGlwc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHRpcHNRdWU6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG5cclxuICAgICAgICAvL+W7tuaXtumakOiXj3RpcHNcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5TZXRBY3RpdmUodGhpcy50eHRUaXBzLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgLyogaWYgKHRoaXMudGlwc1F1ZS5sZW5ndGggPiAwICYmIHRoaXMuaXNUaXBzU2hvdyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgdGlwczogc3RyaW5nID0gdGhpcy50aXBzUXVlW3RoaXMudGlwc1F1ZS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdGhpcy50aXBzUXVlLnNwbGljZSh0aGlzLnRpcHNRdWUubGVuZ3RoIC0gMSk7Ly/np7vpmaRcclxuICAgICAgICAgICAgdGhpcy5TZXRUaXBzKHRpcHMpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+Z5Liq6ISa5pys5LiN6ZyA6KaB5YaZ5YWz6Zet5oyJ6ZKuXHJcbiAgICAvL+Wug+S8muiHquW3see7j+i/h+S4gOauteaXtumXtOWwseWFs+mXrVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aKe5YqgVGlwc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQWRkVGlwcyh0aXBzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpcHNRdWUudW5zaGlmdCh0aXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIua3u+WKoHRpcHMuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva5UaXBzXHJcbiAgICAgKiBAcGFyYW0gdGlwcyDlgLxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBTZXRUaXBzKHRpcHM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuU2V0QWN0aXZlKHRoaXMudHh0VGlwcyk7XHJcbiAgICAgICAgdGhpcy5TZXRUZXh0KHRoaXMudHh0VGlwcywgdGlwcyk7XHJcblxyXG4gICAgICAgIHRoaXMudGlwc0FuaS5wbGF5KCk7XHJcblxyXG4gICAgICAgIC8v5bu25pe25YWz6Zet5r+A5rS754q25oCBXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlNldEFjdGl2ZSh0aGlzLnR4dFRpcHMsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pc1RpcHNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcy50aXBzQW5pLmNsaXBzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lpb3lj4vlm77niYdcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNldEljb24oc3A6IFNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgLy/mgI7kuYjku47nvZHnu5zkuIrmi7/liLDlpb3lj4vnmoTlpLTlg49cclxuICAgICAgICB0aGlzLmltZ0ljb25UaXBzLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuiuvue9ruaPj+i/sFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2V0RGVzKHRpcHM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudHh0RGVzLnN0cmluZyA9IHRpcHM7XHJcbiAgICB9XHJcbn1cclxuIl19