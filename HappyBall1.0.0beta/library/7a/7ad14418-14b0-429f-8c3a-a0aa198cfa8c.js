"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, SpriteComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, MoreGameItem;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
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
      Component = _cc.Component;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "7ad14QYFLBCn4w6oKoZjPqM", "MoreGameItem"); // begin MoreGameItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MoreGameItem", MoreGameItem = (_dec = ccclass("MoreGameItem"), _dec2 = property({
        type: String
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(MoreGameItem, _Component);

        function MoreGameItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MoreGameItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MoreGameItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "Id", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtDes", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        } //监听函数不在这里添加
        //在实例化的时候添加
        //写在MoreGamePanel.ts中
        //TODO


        return MoreGameItem;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end MoreGameItem

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Nb2RlbC9Nb3JlR2FtZUl0ZW0udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNwcml0ZUNvbXBvbmVudCIsIkxhYmVsQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTW9yZUdhbWVJdGVtIiwidHlwZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYzs7O21GQUVrQjs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBTUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVDO0FBQVIsT0FBRCxDLFVBR1JILFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVIsT0FBRCxDLFVBR1JHLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVKO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFJVDtBQUNBO0FBQ0E7QUFDQTs7OztRQWxCOEJGLFM7Ozs7Ozs7Ozs7aUJBU0ksSTs7Ozs7OztpQkFHRixJOzs7O29CQWRsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJNb3JlR2FtZUl0ZW1cIilcclxuZXhwb3J0IGNsYXNzIE1vcmVHYW1lSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5nkuKrnlKjmnaXmoIfor4blsI/muLjmiI/nmoRJRFxyXG4gICAgICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmd9KVxyXG4gICAgcHVibGljIElkOiBzdHJpbmcgO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNwcml0ZUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGltZ0ljb246IFNwcml0ZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTGFiZWxDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB0eHREZXM6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy/nm5HlkKzlh73mlbDkuI3lnKjov5nph4zmt7vliqBcclxuICAgIC8v5Zyo5a6e5L6L5YyW55qE5pe25YCZ5re75YqgXHJcbiAgICAvL+WGmeWcqE1vcmVHYW1lUGFuZWwudHPkuK1cclxuICAgIC8vVE9ET1xyXG59XHJcbiJdfQ==