"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, _class2, _temp, ccclass, property, SingletonPattern;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c3c56FdIGBETrU0872yiMnt", "SingletonPattern"); // begin SingletonPattern


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个是泛型单例模板

      _export("SingletonPattern", SingletonPattern = (_dec = ccclass("SingletonPattern"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SingletonPattern, _Component);

        function SingletonPattern() {
          babelHelpers.classCallCheck(this, SingletonPattern);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SingletonPattern).apply(this, arguments));
        }

        babelHelpers.createClass(SingletonPattern, null, [{
          key: "Instance",
          value: function Instance(type) {
            if (this.instance == null) {
              this.instance = new type();
            }

            return this.instance;
          }
        }]);
        return SingletonPattern;
      }(Component), _class2.instance = null, _temp)) || _class));

      cc._RF.pop(); // end SingletonPattern

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvaGVscHMvU2luZ2xldG9uUGF0dGVybi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2luZ2xldG9uUGF0dGVybiIsInR5cGUiLCJpbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7dUZBRW9EOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFEsRUFFakI7O2tDQUVhQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7Ozs7O21DQUdzQkcsSSxFQUFrQjtBQUN4QyxnQkFBRyxLQUFLQyxRQUFMLElBQWUsSUFBbEIsRUFBdUI7QUFDbkIsbUJBQUtBLFFBQUwsR0FBYyxJQUFJRCxJQUFKLEVBQWQ7QUFDSDs7QUFDRCxtQkFBTyxLQUFLQyxRQUFaO0FBQ0g7OztRQVBvQ0wsUyxXQUN0QkssUSxHQUFhLEk7O29CQUpkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+i/meS4quaYr+azm+Wei+WNleS+i+aooeadv1xyXG5AY2NjbGFzcyhcIlNpbmdsZXRvblBhdHRlcm5cIilcclxuZXhwb3J0IGNsYXNzIFNpbmdsZXRvblBhdHRlcm48VD4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6YW55PW51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlPFQ+KHR5cGU6e25ldyAoKTpUfSk6VHtcclxuICAgICAgICBpZih0aGlzLmluc3RhbmNlPT1udWxsKXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZT1uZXcgdHlwZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG4iXX0=