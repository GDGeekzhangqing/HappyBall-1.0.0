"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "./SkinItemData.ts"], function (_export, _context) {
  "use strict";

  var _decorator, SpriteComponent, PanelRoot, SkinType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, SkinItem;

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
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_SkinItemDataTs) {
      SkinType = _SkinItemDataTs.SkinType;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "62e10IvYz9FdbWyEOUUnfuc", "SkinItem"); // begin SkinItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkinItem", SkinItem = (_dec = ccclass("SkinItem"), _dec2 = property({
        type: SkinType
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SkinItem, _PanelRoot);

        function SkinItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SkinItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SkinItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.id = 1;
          babelHelpers.initializerDefineProperty(_this, "skinType", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgSkin", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgBg", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        return SkinItem;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgSkin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end SkinItem

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Nb2RlbC9Ta2luSXRlbS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlQ29tcG9uZW50IiwiUGFuZWxSb290IiwiU2tpblR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTa2luSXRlbSIsInR5cGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLGUsT0FBQUEsZTs7QUFDN0JDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFEsbUJBQUFBLFE7OzsrRUFBZ0U7OztBQUNqRUMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQVFIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDSjtBQUFOLE9BQUQsQyxVQUdSRSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTjtBQUFSLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUkZPLEUsR0FBYSxDOzs7Ozs7OztRQUxNTixTOzs7Ozs7Ozs7O2lCQVdRLEk7Ozs7Ozs7aUJBR0YsSTs7OztvQkFsQmxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVDb21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUGFuZWxSb290IH0gZnJvbSBcIi4uL1Jvb3QvUGFuZWxSb290XCI7XHJcbmltcG9ydCB7IFNraW5UeXBlIH0gZnJvbSBcIi4vU2tpbkl0ZW1EYXRhXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlNraW5JdGVtXCIpXHJcbmV4cG9ydCBjbGFzcyBTa2luSXRlbSBleHRlbmRzIFBhbmVsUm9vdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7moIfor4ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpTa2luVHlwZX0pXHJcbiAgICBwdWJsaWMgc2tpblR5cGU6U2tpblR5cGU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU3ByaXRlQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgaW1nU2tpbjogU3ByaXRlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTcHJpdGVDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBpbWdCZzogU3ByaXRlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgIFxyXG5cclxuICAgXHJcbn1cclxuIl19