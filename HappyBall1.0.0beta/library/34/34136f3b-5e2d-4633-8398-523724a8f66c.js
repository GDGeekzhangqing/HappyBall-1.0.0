"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, PhysicsSystem, Vec3, profiler, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, GameConfig;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      profiler = _cc.profiler;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3413687Xi1GM4OYUjckqPZs", "GameConfig"); // begin GameConfig


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameConfig", GameConfig = (_dec = ccclass("GameConfig"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameConfig, _Component);

        function GameConfig() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameConfig);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameConfig)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "gravity_y", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "maxSubStep", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "deltaTime", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "friction", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "restitution", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "showStat", _descriptor6, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameConfig, [{
          key: "onLoad",
          // @property
          // lineheight = 8;
          value: function onLoad() {
            PhysicsSystem.instance.gravity = new Vec3(0, this.gravity_y, 0);
            PhysicsSystem.instance.maxSubStep = this.maxSubStep;
            PhysicsSystem.instance.deltaTime = this.deltaTime;
            PhysicsSystem.instance.defaultMaterial.friction = this.friction;
            PhysicsSystem.instance.defaultMaterial.restitution = this.restitution;
          }
        }, {
          key: "start",
          value: function start() {
            if (!this.showStat && !CC_BUILD) {
              setTimeout(function () {
                profiler.hideStats();
              }, 100);
            }
          }
        }]);
        return GameConfig;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gravity_y", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -20;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "maxSubStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "deltaTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1 / 60;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "friction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "restitution", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "showStat", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameConfig

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvaGVscHMvR2FtZUNvbmZpZy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUGh5c2ljc1N5c3RlbSIsIlZlYzMiLCJwcm9maWxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVDb25maWciLCJpbnN0YW5jZSIsImdyYXZpdHkiLCJncmF2aXR5X3kiLCJtYXhTdWJTdGVwIiwiZGVsdGFUaW1lIiwiZGVmYXVsdE1hdGVyaWFsIiwiZnJpY3Rpb24iLCJyZXN0aXR1dGlvbiIsInNob3dTdGF0IiwiQ0NfQlVJTEQiLCJzZXRUaW1lb3V0IiwiaGlkZVN0YXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGEsT0FBQUEsYTtBQUFlQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxROzs7aUZBRWM7OztBQURqRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCSjtBQUNBO21DQUVVO0FBQ05ILFlBQUFBLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QkMsT0FBdkIsR0FBaUMsSUFBSU4sSUFBSixDQUFTLENBQVQsRUFBWSxLQUFLTyxTQUFqQixFQUE0QixDQUE1QixDQUFqQztBQUNBUixZQUFBQSxhQUFhLENBQUNNLFFBQWQsQ0FBdUJHLFVBQXZCLEdBQW9DLEtBQUtBLFVBQXpDO0FBQ0FULFlBQUFBLGFBQWEsQ0FBQ00sUUFBZCxDQUF1QkksU0FBdkIsR0FBbUMsS0FBS0EsU0FBeEM7QUFDQVYsWUFBQUEsYUFBYSxDQUFDTSxRQUFkLENBQXVCSyxlQUF2QixDQUF1Q0MsUUFBdkMsR0FBa0QsS0FBS0EsUUFBdkQ7QUFDQVosWUFBQUEsYUFBYSxDQUFDTSxRQUFkLENBQXVCSyxlQUF2QixDQUF1Q0UsV0FBdkMsR0FBcUQsS0FBS0EsV0FBMUQ7QUFDSDs7O2tDQUVRO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLQyxRQUFOLElBQWtCLENBQUNDLFFBQXZCLEVBQWlDO0FBQzdCQyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiZCxnQkFBQUEsUUFBUSxDQUFDZSxTQUFUO0FBQ0gsZUFGUyxFQUVQLEdBRk8sQ0FBVjtBQUdIO0FBQ0o7OztRQXJDMkJsQixTLGlHQUUzQkssUTs7Ozs7aUJBQ1csQ0FBQyxFOztpR0FFWkEsUTs7Ozs7aUJBQ1ksQzs7Z0dBRVpBLFE7Ozs7O2lCQUNXLElBQUksRTs7K0ZBRWZBLFE7Ozs7O2lCQUNVLEM7O2tHQUVWQSxROzs7OztpQkFDYSxDOzsrRkFFYkEsUTs7Ozs7aUJBQ1UsSzs7OztvQkFwQkciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFBoeXNpY3NTeXN0ZW0sIFZlYzMsIHByb2ZpbGVyIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkdhbWVDb25maWdcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDb25maWcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZ3Jhdml0eV95ID0gLTIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4U3ViU3RlcCA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBkZWx0YVRpbWUgPSAxIC8gNjA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBmcmljdGlvbiA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZXN0aXR1dGlvbiA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzaG93U3RhdCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gbGluZWhlaWdodCA9IDg7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmdyYXZpdHkgPSBuZXcgVmVjMygwLCB0aGlzLmdyYXZpdHlfeSwgMCk7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5tYXhTdWJTdGVwID0gdGhpcy5tYXhTdWJTdGVwO1xyXG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UuZGVsdGFUaW1lID0gdGhpcy5kZWx0YVRpbWU7XHJcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5kZWZhdWx0TWF0ZXJpYWwuZnJpY3Rpb24gPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UuZGVmYXVsdE1hdGVyaWFsLnJlc3RpdHV0aW9uID0gdGhpcy5yZXN0aXR1dGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dTdGF0ICYmICFDQ19CVUlMRCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVyLmhpZGVTdGF0cygpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=