"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Queue;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "2b36a1mkxRH24QqP25y5loh", "Queue"); // begin Queue


      /**
       * 队列
       */
      _export("Queue", Queue =
      /*#__PURE__*/
      function () {
        function Queue() {
          babelHelpers.classCallCheck(this, Queue);
          this.items = [];
        }

        babelHelpers.createClass(Queue, [{
          key: "Enqueue",

          /**
           * 为队列尾部添加一个数据
           */
          value: function Enqueue(element) {
            this.items.push(element);
          }
          /**
           * 移除队列中第一个入队的数据
           */

        }, {
          key: "DeQueue",
          value: function DeQueue() {
            return this.items.shift();
          }
          /**
           * 是否为空
           */

        }, {
          key: "IsEmpty",
          value: function IsEmpty() {
            return this.items.length === 0;
          }
        }]);
        return Queue;
      }());

      cc._RF.pop(); // end Queue

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvaGVscHMvUXVldWUudHMiXSwibmFtZXMiOlsiUXVldWUiLCJpdGVtcyIsImVsZW1lbnQiLCJwdXNoIiwic2hpZnQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs0RUFFeUU7OztBQUR6RTs7O3VCQUdhQSxLOzs7OztlQUlKQyxLLEdBQU0sRTs7Ozs7O0FBRVo7OztrQ0FHZUMsTyxFQUFTO0FBQ3BCLGlCQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELE9BQWhCO0FBQ0g7QUFFRDs7Ozs7O29DQUdpQjtBQUNiLG1CQUFPLEtBQUtELEtBQUwsQ0FBV0csS0FBWCxFQUFQO0FBQ0g7QUFFRDs7Ozs7O29DQUdpQjtBQUNiLG1CQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxLQUFvQixDQUEzQjtBQUNIOzs7OztvQkEzQmMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIOmYn+WIl1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFF1ZXVlIHtcclxuICAvKipcclxuICAgKiDpmJ/liJfkuK3nmoTlr7nosaFcclxuICAgKi9cclxuICBwdWJsaWMgaXRlbXM9W107XHJcblxyXG4gICAvKipcclxuICAgICog5Li66Zif5YiX5bC+6YOo5re75Yqg5LiA5Liq5pWw5o2uXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgRW5xdWV1ZShlbGVtZW50KSB7XHJcbiAgICAgICB0aGlzLml0ZW1zLnB1c2goZWxlbWVudCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qKlxyXG4gICAgKiDnp7vpmaTpmJ/liJfkuK3nrKzkuIDkuKrlhaXpmJ/nmoTmlbDmja5cclxuICAgICovXHJcbiAgIHB1YmxpYyBEZVF1ZXVlKCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKTtcclxuICAgfVxyXG4gXHJcbiAgIC8qKlxyXG4gICAgKiDmmK/lkKbkuLrnqbpcclxuICAgICovXHJcbiAgIHB1YmxpYyBJc0VtcHR5KCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoPT09MDtcclxuICAgfVxyXG59XHJcbiJdfQ==