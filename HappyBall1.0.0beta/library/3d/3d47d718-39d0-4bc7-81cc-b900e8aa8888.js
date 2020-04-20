"use strict";

System.register(["cc", "../../helps/TempConst.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, systemEvent, SystemEventType, Quat, Vec3, quat_t, v2_t, v3_t, _dec, _class, _class2, _descriptor, _temp, ccclass, property, ColumnCtr;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_helpsTempConstTs) {
      quat_t = _helpsTempConstTs.quat_t;
      v2_t = _helpsTempConstTs.v2_t;
      v3_t = _helpsTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3d47dcYOdBLx4HMuQDoqoiI", "ColumnCtr"); // begin ColumnCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ColumnCtr", ColumnCtr = (_dec = ccclass("ColumnCtr"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ColumnCtr, _Component);

        function ColumnCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ColumnCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ColumnCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "rotFactor", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ColumnCtr, [{
          key: "onEnable",
          value: function onEnable() {
            systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            systemEvent.off(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(touch, event) {
            touch.getDelta(v2_t);

            if (v2_t.x != 0) {
              Quat.fromEuler(quat_t, 0, v2_t.x * this.rotFactor, 0);
              this.node.rotate(quat_t);
              console.log("Touch doing...");
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            var cnode = this.node.children[0];
            cnode.worldPosition = Vec3.ZERO;
            cnode.worldRotation = Quat.IDENTITY;

            for (var i = 1; i < this.node.children.length; i++) {
              var _cnode = this.node.children[i];
              v3_t.set(0, i * -8, 0);
              _cnode.worldPosition = v3_t;
            }
          }
        }]);
        return ColumnCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rotFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.75;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ColumnCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Db250cm9sbGVyL0NvbHVtbkN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudFR5cGUiLCJRdWF0IiwiVmVjMyIsInF1YXRfdCIsInYyX3QiLCJ2M190IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ29sdW1uQ3RyIiwib24iLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJvZmYiLCJ0b3VjaCIsImV2ZW50IiwiZ2V0RGVsdGEiLCJ4IiwiZnJvbUV1bGVyIiwicm90RmFjdG9yIiwibm9kZSIsInJvdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjbm9kZSIsImNoaWxkcmVuIiwid29ybGRQb3NpdGlvbiIsIlpFUk8iLCJ3b3JsZFJvdGF0aW9uIiwiSURFTlRJVFkiLCJpIiwibGVuZ3RoIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlO0FBQXVDQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLEksT0FBQUEsSTs7QUFDMUdDLE1BQUFBLE0scUJBQUFBLE07QUFBUUMsTUFBQUEsSSxxQkFBQUEsSTtBQUFNQyxNQUFBQSxJLHFCQUFBQSxJOzs7Z0ZBQ2tEOzs7QUFDakVDLE1BQUFBLE8sR0FBc0JULFUsQ0FBdEJTLE87QUFBU0MsTUFBQUEsUSxHQUFhVixVLENBQWJVLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQU1RO0FBQ1JQLFlBQUFBLFdBQVcsQ0FBQ1UsRUFBWixDQUFlVCxlQUFlLENBQUNVLFVBQS9CLEVBQTJDLEtBQUtDLFdBQWhELEVBQTZELElBQTdEO0FBQ0g7OztzQ0FFWTtBQUNUWixZQUFBQSxXQUFXLENBQUNhLEdBQVosQ0FBZ0JaLGVBQWUsQ0FBQ1UsVUFBaEMsRUFBNEMsS0FBS0MsV0FBakQsRUFBOEQsSUFBOUQ7QUFDSDs7O3NDQUVZRSxLLEVBQWNDLEssRUFBbUI7QUFDMUNELFlBQUFBLEtBQUssQ0FBQ0UsUUFBTixDQUFlWCxJQUFmOztBQUNBLGdCQUFJQSxJQUFJLENBQUNZLENBQUwsSUFBVSxDQUFkLEVBQWlCO0FBQ2JmLGNBQUFBLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZWQsTUFBZixFQUF1QixDQUF2QixFQUEwQkMsSUFBSSxDQUFDWSxDQUFMLEdBQVMsS0FBS0UsU0FBeEMsRUFBbUQsQ0FBbkQ7QUFDQSxtQkFBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCakIsTUFBakI7QUFFQWtCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0g7QUFDSjs7O2tDQUVRO0FBQ0wsZ0JBQU1DLEtBQUssR0FBRyxLQUFLSixJQUFMLENBQVVLLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBZDtBQUNBRCxZQUFBQSxLQUFLLENBQUNFLGFBQU4sR0FBc0J2QixJQUFJLENBQUN3QixJQUEzQjtBQUNBSCxZQUFBQSxLQUFLLENBQUNJLGFBQU4sR0FBc0IxQixJQUFJLENBQUMyQixRQUEzQjs7QUFFQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtWLElBQUwsQ0FBVUssUUFBVixDQUFtQk0sTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsa0JBQU1OLE1BQUssR0FBRyxLQUFLSixJQUFMLENBQVVLLFFBQVYsQ0FBbUJLLENBQW5CLENBQWQ7QUFDQXhCLGNBQUFBLElBQUksQ0FBQzBCLEdBQUwsQ0FBUyxDQUFULEVBQVlGLENBQUMsR0FBRyxDQUFDLENBQWpCLEVBQW9CLENBQXBCO0FBQ0FOLGNBQUFBLE1BQUssQ0FBQ0UsYUFBTixHQUFzQnBCLElBQXRCO0FBQ0g7QUFDSjs7O1FBakMwQlAsUyxpR0FFMUJTLFE7Ozs7O2lCQUNXLEk7Ozs7b0JBUEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudFR5cGUsIEV2ZW50S2V5Ym9hcmQsIG1hY3JvLCBRdWF0LCBFdmVudFRvdWNoLCBUb3VjaCwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBxdWF0X3QsIHYyX3QsIHYzX3QgfSBmcm9tIFwiLi4vLi4vaGVscHMvVGVtcENvbnN0XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJDb2x1bW5DdHJcIilcclxuZXhwb3J0IGNsYXNzIENvbHVtbkN0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByb3RGYWN0b3IgPSAwLjc1O1xyXG5cclxuICAgIG9uRW5hYmxlICgpIHsgICBcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlICgpIHsgICBcclxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgb25Ub3VjaE1vdmUgKHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0b3VjaC5nZXREZWx0YSh2Ml90KTtcclxuICAgICAgICBpZiAodjJfdC54ICE9IDApIHtcclxuICAgICAgICAgICAgUXVhdC5mcm9tRXVsZXIocXVhdF90LCAwLCB2Ml90LnggKiB0aGlzLnJvdEZhY3RvciwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yb3RhdGUocXVhdF90KTsgXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRvdWNoIGRvaW5nLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCAoKSB7XHJcbiAgICAgICAgY29uc3QgY25vZGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgY25vZGUud29ybGRQb3NpdGlvbiA9IFZlYzMuWkVSTztcclxuICAgICAgICBjbm9kZS53b3JsZFJvdGF0aW9uID0gUXVhdC5JREVOVElUWTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY25vZGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIHYzX3Quc2V0KDAsIGkgKiAtOCwgMCk7XHJcbiAgICAgICAgICAgIGNub2RlLndvcmxkUG9zaXRpb24gPSB2M190O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=