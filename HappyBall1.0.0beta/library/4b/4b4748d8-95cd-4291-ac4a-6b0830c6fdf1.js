"use strict";

System.register(["cc", "../../helps/TempConst.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, lerp, v3_t, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, CameraFollow;

  _export({
    _dec: void 0,
    _dec2: void 0,
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
      Node = _cc.Node;
      lerp = _cc.lerp;
    }, function (_helpsTempConstTs) {
      v3_t = _helpsTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "4b474jYlc1CkaxKawgwxv3x", "CamerFollow"); // begin CamerFollow


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CameraFollow", CameraFollow = (_dec = ccclass("CameraFollow"), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CameraFollow, _Component);

        function CameraFollow() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CameraFollow);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CameraFollow)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "targetNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tolerance", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "step", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this._offset = 0;
          return _this;
        }

        babelHelpers.createClass(CameraFollow, [{
          key: "start",
          value: function start() {
            this._offset = this.node.worldPosition.y - this.targetNode.worldPosition.y;
          }
        }, {
          key: "lateUpdate",
          value: function lateUpdate() {
            var y = this.node.worldPosition.y;
            var ty = this.targetNode.worldPosition.y + this._offset;
            var delta = y - ty;

            if (delta > this.tolerance) {
              v3_t.set(this.node.worldPosition);
              v3_t.y = lerp(y, ty, this.step);
              this.node.worldPosition = v3_t;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            v3_t.set(this.node.worldPosition);
            v3_t.y = this.targetNode.worldPosition.y + this._offset;
            this.node.worldPosition = v3_t;
          }
        }]);
        return CameraFollow;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tolerance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "step", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CamerFollow

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Db250cm9sbGVyL0NhbWVyRm9sbG93LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwibGVycCIsInYzX3QiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDYW1lcmFGb2xsb3ciLCJ0eXBlIiwiX29mZnNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwieSIsInRhcmdldE5vZGUiLCJ0eSIsImRlbHRhIiwidG9sZXJhbmNlIiwic2V0Iiwic3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDVUEsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBMEJDLE1BQUFBLEksT0FBQUEsSTs7QUFDbERDLE1BQUFBLEkscUJBQUFBLEk7OztrRkFBZ0U7OztBQUVqRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBU0RPLE8sR0FBVSxDOzs7Ozs7a0NBRVQ7QUFDTCxpQkFBS0EsT0FBTCxHQUFlLEtBQUtDLElBQUwsQ0FBVUMsYUFBVixDQUF3QkMsQ0FBeEIsR0FBNEIsS0FBS0MsVUFBTCxDQUFnQkYsYUFBaEIsQ0FBOEJDLENBQXpFO0FBQ0g7Ozt1Q0FFYTtBQUNWLGdCQUFNQSxDQUFDLEdBQUcsS0FBS0YsSUFBTCxDQUFVQyxhQUFWLENBQXdCQyxDQUFsQztBQUNBLGdCQUFNRSxFQUFFLEdBQUcsS0FBS0QsVUFBTCxDQUFnQkYsYUFBaEIsQ0FBOEJDLENBQTlCLEdBQWtDLEtBQUtILE9BQWxEO0FBQ0EsZ0JBQU1NLEtBQUssR0FBR0gsQ0FBQyxHQUFHRSxFQUFsQjs7QUFDQSxnQkFBSUMsS0FBSyxHQUFHLEtBQUtDLFNBQWpCLEVBQTRCO0FBQ3hCWixjQUFBQSxJQUFJLENBQUNhLEdBQUwsQ0FBUyxLQUFLUCxJQUFMLENBQVVDLGFBQW5CO0FBQ0FQLGNBQUFBLElBQUksQ0FBQ1EsQ0FBTCxHQUFTVCxJQUFJLENBQUNTLENBQUQsRUFBSUUsRUFBSixFQUFRLEtBQUtJLElBQWIsQ0FBYjtBQUNBLG1CQUFLUixJQUFMLENBQVVDLGFBQVYsR0FBMEJQLElBQTFCO0FBQ0g7QUFDSjs7O2tDQUVRO0FBQ0xBLFlBQUFBLElBQUksQ0FBQ2EsR0FBTCxDQUFTLEtBQUtQLElBQUwsQ0FBVUMsYUFBbkI7QUFDQVAsWUFBQUEsSUFBSSxDQUFDUSxDQUFMLEdBQVMsS0FBS0MsVUFBTCxDQUFnQkYsYUFBaEIsQ0FBOEJDLENBQTlCLEdBQWtDLEtBQUtILE9BQWhEO0FBQ0EsaUJBQUtDLElBQUwsQ0FBVUMsYUFBVixHQUEwQlAsSUFBMUI7QUFDSDs7O1FBaEM2QkgsUzs7Ozs7aUJBR1gsSTs7Z0dBRWxCSyxROzs7OztpQkFDVyxJOzsyRkFFWEEsUTs7Ozs7aUJBQ00sRzs7OztvQkFkTyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgRGlyZWN0b3IsIGxlcnAgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgdjNfdCB9IGZyb20gXCIuLi8uLi9oZWxwcy9UZW1wQ29uc3RcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkNhbWVyYUZvbGxvd1wiKVxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhRm9sbG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvbGVyYW5jZSA9IDAuMDE7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzdGVwID0gMC4xO1xyXG5cclxuICAgIHByaXZhdGUgX29mZnNldCA9IDA7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuX29mZnNldCA9IHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLnkgLSB0aGlzLnRhcmdldE5vZGUud29ybGRQb3NpdGlvbi55O1xyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUgKCkge1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLm5vZGUud29ybGRQb3NpdGlvbi55O1xyXG4gICAgICAgIGNvbnN0IHR5ID0gdGhpcy50YXJnZXROb2RlLndvcmxkUG9zaXRpb24ueSArIHRoaXMuX29mZnNldDtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IHkgLSB0eTtcclxuICAgICAgICBpZiAoZGVsdGEgPiB0aGlzLnRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICB2M190LnNldCh0aGlzLm5vZGUud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHYzX3QueSA9IGxlcnAoeSwgdHksIHRoaXMuc3RlcCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uID0gdjNfdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQgKCkge1xyXG4gICAgICAgIHYzX3Quc2V0KHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICB2M190LnkgPSB0aGlzLnRhcmdldE5vZGUud29ybGRQb3NpdGlvbi55ICsgdGhpcy5fb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uID0gdjNfdDtcclxuICAgIH1cclxufVxyXG5cclxuIl19