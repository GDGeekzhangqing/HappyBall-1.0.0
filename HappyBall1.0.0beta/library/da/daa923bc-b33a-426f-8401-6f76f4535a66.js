"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, AudioSourceComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, ccclass, property, SettingMgr;

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
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "daa92O8szpCb4QBb3b0U1pm", "SettingMgr"); // begin SettingMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责游戏的设置
      //比如游戏难度、游戏的音效、游戏的振动

      _export("SettingMgr", SettingMgr = (_dec = ccclass("SettingMgr"), _dec2 = property({
        type: AudioSourceComponent
      }), _dec3 = property({
        type: AudioSourceComponent
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SettingMgr, _Component);

        function SettingMgr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SettingMgr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SettingMgr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.isVolume = true;
          _this.isImageQuality = true;
          _this.isVibration = true;
          babelHelpers.initializerDefineProperty(_this, "bgAudioNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "uiAudioNode", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SettingMgr, [{
          key: "update",
          value: function update() {
            if (this.isVibration == true) {
              window['wx'].vibrateShort(15);
            }
          }
          /**
           * 设置音响的播放
           */

        }, {
          key: "SetAudioEnable",
          value: function SetAudioEnable() {
            if (this.isVolume == true) {
              //关闭audio组件
              this.bgAudioNode.pause();
              this.uiAudioNode.pause();
              this.isVolume = false;
              console.log("关闭音效...");
            } else {
              //开启audio组件             
              this.bgAudioNode.play();
              this.uiAudioNode.play();
              this.isVolume = true;
              console.log("打开音响...");
            }
          }
          /**
           * 设置遮罩/高清，模糊
           */

        }, {
          key: "SetFuzzyMask",
          value: function SetFuzzyMask() {
            if (this.isImageQuality == true) {
              this.isImageQuality = false;
              console.log("设置流畅...");
            } else {
              this.isImageQuality = true;
              console.log("设置高清...");
            }
          }
          /**
           * 设置振动（0.1秒）
           */

        }, {
          key: "SetVibrate",
          value: function SetVibrate() {
            if (this.isVibration == true) {
              this.isVibration = false;
            } else {
              this.isVibration = true;
            }
          }
        }], [{
          key: "Instance",
          //限制产生多个对象

          /* private constructor() {
               super();
           }*/

          /**
           * 获得实例对象
           */
          value: function Instance() {
            return this.instance;
          } //#endregion

        }]);
        return SettingMgr;
      }(Component), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bgAudioNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "uiAudioNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end SettingMgr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TeXN0ZW0vU2V0dGluZ01nci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQXVkaW9Tb3VyY2VDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTZXR0aW5nTWdyIiwidHlwZSIsImlzVm9sdW1lIiwiaXNJbWFnZVF1YWxpdHkiLCJpc1ZpYnJhdGlvbiIsIndpbmRvdyIsInZpYnJhdGVTaG9ydCIsImJnQXVkaW9Ob2RlIiwicGF1c2UiLCJ1aUF1ZGlvTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxvQixPQUFBQSxvQjs7O2lGQUVtQzs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxRLEVBRWpCO0FBQ0E7OzRCQUVhQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMsVUE2QkZDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVKO0FBQVIsT0FBRCxDLFVBR1JFLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJQUFJLEVBQUVKO0FBQVIsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFYRkssUSxHQUFvQixJO2dCQUNwQkMsYyxHQUEwQixJO2dCQUMxQkMsVyxHQUF1QixJOzs7Ozs7OzttQ0FhdEI7QUFDSCxnQkFBRyxLQUFLQSxXQUFMLElBQWtCLElBQXJCLEVBQTBCO0FBQ3JCQyxjQUFBQSxNQUFNLENBQUMsSUFBRCxDQUFOLENBQWFDLFlBQWIsQ0FBMEIsRUFBMUI7QUFDSjtBQUNMO0FBR0Q7Ozs7OzsyQ0FHd0I7QUFDbkIsZ0JBQUksS0FBS0osUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUN0QjtBQUNBLG1CQUFLSyxXQUFMLENBQWlCQyxLQUFqQjtBQUNBLG1CQUFLQyxXQUFMLENBQWlCRCxLQUFqQjtBQUNBLG1CQUFLTixRQUFMLEdBQWdCLEtBQWhCO0FBQ0FRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSixhQU5ELE1BT0s7QUFDQTtBQUNBLG1CQUFLSixXQUFMLENBQWlCSyxJQUFqQjtBQUNBLG1CQUFLSCxXQUFMLENBQWlCRyxJQUFqQjtBQUNBLG1CQUFLVixRQUFMLEdBQWdCLElBQWhCO0FBQ0FRLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSjtBQUNMO0FBRUQ7Ozs7Ozt5Q0FHc0I7QUFFakIsZ0JBQUksS0FBS1IsY0FBTCxJQUF1QixJQUEzQixFQUFpQztBQUM1QixtQkFBS0EsY0FBTCxHQUFzQixLQUF0QjtBQUNBTyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0osYUFIRCxNQUlLO0FBQ0EsbUJBQUtSLGNBQUwsR0FBc0IsSUFBdEI7QUFDQU8sY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNKO0FBRUw7QUFFRDs7Ozs7O3VDQUdvQjtBQUNmLGdCQUFJLEtBQUtQLFdBQUwsSUFBb0IsSUFBeEIsRUFBOEI7QUFFekIsbUJBQUtBLFdBQUwsR0FBbUIsS0FBbkI7QUFDSixhQUhELE1BSUs7QUFDQSxtQkFBS0EsV0FBTCxHQUFtQixJQUFuQjtBQUNKO0FBRUw7OztBQXBGRDs7QUFDQTs7OztBQUlBOzs7cUNBR3FDO0FBQ2hDLG1CQUFPLEtBQUtTLFFBQVo7QUFDSixXLENBRUQ7Ozs7UUFsQjJCakIsUyxXQUlaaUIsUSxHQUF1QixJOzs7OztpQkF5QkssSTs7Ozs7OztpQkFHQSxJOzs7O29CQXBDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+i/meS4quiEmuacrOi0n+i0o+a4uOaIj+eahOiuvue9rlxyXG4vL+avlOWmgua4uOaIj+mavuW6puOAgea4uOaIj+eahOmfs+aViOOAgea4uOaIj+eahOaMr+WKqFxyXG5AY2NjbGFzcyhcIlNldHRpbmdNZ3JcIilcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNZ3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAvLyNyZWdpb24gIOWNleS+i1xyXG4gICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWdyID0gbmV3IEF1ZGlvTWdyKCk7XHJcbiAgICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNldHRpbmdNZ3IgPSBudWxsO1xyXG5cclxuICAgICAvL+mZkOWItuS6p+eUn+WkmuS4quWvueixoVxyXG4gICAgIC8qIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICog6I635b6X5a6e5L6L5a+56LGhXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBTZXR0aW5nTWdyIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgIHB1YmxpYyBpc1ZvbHVtZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgcHVibGljIGlzSW1hZ2VRdWFsaXR5OiBib29sZWFuID0gdHJ1ZTtcclxuICAgICBwdWJsaWMgaXNWaWJyYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgLypAcHJvcGVydHkoeyB0eXBlOiBBdWRpb1N2YyB9KVxyXG4gICAgIHB1YmxpYyBhdWRpb1N2YzogQXVkaW9TdmMgPSBudWxsOyovXHJcblxyXG4gICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEF1ZGlvU291cmNlQ29tcG9uZW50IH0pXHJcbiAgICAgcHVibGljIGJnQXVkaW9Ob2RlOiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEF1ZGlvU291cmNlQ29tcG9uZW50IH0pXHJcbiAgICAgcHVibGljIHVpQXVkaW9Ob2RlOiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cclxuICAgICB1cGRhdGUoKXtcclxuICAgICAgICAgIGlmKHRoaXMuaXNWaWJyYXRpb249PXRydWUpe1xyXG4gICAgICAgICAgICAgICB3aW5kb3dbJ3d4J10udmlicmF0ZVNob3J0KDE1KTtcclxuICAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG5cclxuICAgICAvKipcclxuICAgICAgKiDorr7nva7pn7Plk43nmoTmkq3mlL5cclxuICAgICAgKi9cclxuICAgICBwdWJsaWMgU2V0QXVkaW9FbmFibGUoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1ZvbHVtZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgIC8v5YWz6ZetYXVkaW/nu4Tku7ZcclxuICAgICAgICAgICAgICAgdGhpcy5iZ0F1ZGlvTm9kZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICB0aGlzLnVpQXVkaW9Ob2RlLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaXNWb2x1bWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhbPpl63pn7PmlYguLi5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy/lvIDlkK9hdWRpb+e7hOS7tiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdGhpcy5iZ0F1ZGlvTm9kZS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMudWlBdWRpb05vZGUucGxheSgpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmlzVm9sdW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDpn7Plk40uLi5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAgKiDorr7nva7pga7nvakv6auY5riF77yM5qih57OKXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIFNldEZ1enp5TWFzaygpIHtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5pc0ltYWdlUXVhbGl0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaXNJbWFnZVF1YWxpdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7nva7mtYHnlYUuLi5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5pc0ltYWdlUXVhbGl0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u6auY5riFLi4uXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICB9XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICAqIOiuvue9ruaMr+WKqO+8iDAuMeenku+8iVxyXG4gICAgICAqL1xyXG4gICAgIHB1YmxpYyBTZXRWaWJyYXRlKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNWaWJyYXRpb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB0aGlzLmlzVmlicmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5pc1ZpYnJhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgIH1cclxuXHJcbn1cclxuIl19