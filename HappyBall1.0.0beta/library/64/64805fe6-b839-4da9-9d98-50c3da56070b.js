"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _class, ccclass, property, Common, value;

  //#region  示例
  function set(out) {
    out.value = 1;
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "64805/muDlNqZ2YUMPaVgcL", "Common"); // begin Common


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责共用的方法

      _export("Common", Common = (_dec = ccclass("Common"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Common, _Component);

        function Common() {
          babelHelpers.classCallCheck(this, Common);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Common).apply(this, arguments));
        }

        babelHelpers.createClass(Common, null, [{
          key: "Random",

          /**
             * 产生随机整数，包含下限值，但不包括上限值
             * @param {Number} lower 下限
             * @param {Number} upper 上限
             * @return {Number} 返回在下限到上限之间的一个随机整数
             */
          value: function Random(lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
          }
          /**
           * 产生随机整数，包含下限值，包括上限值
           * @param {Number} lower 下限
           * @param {Number} upper 上限
           * @return {Number} 返回在下限到上限之间的一个随机整数
           */

        }, {
          key: "RandomAll",
          value: function RandomAll(lower, upper) {
            return Math.floor(Math.random() * (upper - lower + 1)) + lower;
          }
        }]);
        return Common;
      }(Component)) || _class));
      /**
       * 返回参数接口
       */


      value = {
        value: 0
      };
      set(value);
      console.log(value.value); //#endregion

      cc._RF.pop(); // end Common

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvaGVscHMvQ29tbW9uLnRzIl0sIm5hbWVzIjpbInNldCIsIm91dCIsInZhbHVlIiwiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNvbW1vbiIsImxvd2VyIiwidXBwZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBd0NBO0FBR0EsV0FBU0EsR0FBVCxDQUFhQyxHQUFiLEVBQStCO0FBQzNCQSxJQUFBQSxHQUFHLENBQUNDLEtBQUosR0FBWSxDQUFaO0FBQ0g7Ozs7Ozs7OztBQTdDUUMsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OzZFQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxRLEVBRWpCOzt3QkFFYUMsTSxXQURaRixPQUFPLENBQUMsUUFBRCxDOzs7Ozs7Ozs7Ozs7O0FBSUo7Ozs7OztpQ0FNcUJHLEssRUFBZUMsSyxFQUF1QjtBQUN2RCxtQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsS0FBSyxHQUFHRCxLQUF6QixDQUFYLElBQThDQSxLQUFyRDtBQUNIO0FBRUQ7Ozs7Ozs7OztvQ0FNd0JBLEssRUFBZUMsSyxFQUF1QjtBQUMxRCxtQkFBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsS0FBSyxHQUFHRCxLQUFSLEdBQWdCLENBQWpDLENBQVgsSUFBa0RBLEtBQXpEO0FBQ0g7OztRQXJCdUJKLFM7QUF5QjVCOzs7OztBQWlCTUYsTUFBQUEsSyxHQUFRO0FBQUVBLFFBQUFBLEtBQUssRUFBRTtBQUFULE87QUFDZEYsTUFBQUEsR0FBRyxDQUFDRSxLQUFELENBQUg7QUFDQVcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQUssQ0FBQ0EsS0FBbEIsRSxDQUdBOztvQkFsRGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+i/meS4quiEmuacrOi0n+i0o+WFseeUqOeahOaWueazlVxyXG5AY2NjbGFzcyhcIkNvbW1vblwiKVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAqIOS6p+eUn+maj+acuuaVtOaVsO+8jOWMheWQq+S4i+mZkOWAvO+8jOS9huS4jeWMheaLrOS4iumZkOWAvFxyXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gbG93ZXIg5LiL6ZmQXHJcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB1cHBlciDkuIrpmZBcclxuICAgICAgICogQHJldHVybiB7TnVtYmVyfSDov5Tlm57lnKjkuIvpmZDliLDkuIrpmZDkuYvpl7TnmoTkuIDkuKrpmo/mnLrmlbTmlbBcclxuICAgICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmRvbShsb3dlcjogbnVtYmVyLCB1cHBlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIpKSArIGxvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lqn55Sf6ZqP5py65pW05pWw77yM5YyF5ZCr5LiL6ZmQ5YC877yM5YyF5ous5LiK6ZmQ5YC8XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbG93ZXIg5LiL6ZmQXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdXBwZXIg5LiK6ZmQXHJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IOi/lOWbnuWcqOS4i+mZkOWIsOS4iumZkOS5i+mXtOeahOS4gOS4qumaj+acuuaVtOaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJhbmRvbUFsbChsb3dlcjogbnVtYmVyLCB1cHBlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSkgKyBsb3dlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDov5Tlm57lj4LmlbDmjqXlj6NcclxuICovXHJcbmludGVyZmFjZSBPdXQ8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlgLxcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IFQ7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAg56S65L6LXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0KG91dDogT3V0PG51bWJlcj4pIHtcclxuICAgIG91dC52YWx1ZSA9IDE7XHJcbn1cclxuXHJcbmNvbnN0IHZhbHVlID0geyB2YWx1ZTogMCB9O1xyXG5zZXQodmFsdWUpO1xyXG5jb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7XHJcblxyXG5cclxuLy8jZW5kcmVnaW9uIl19