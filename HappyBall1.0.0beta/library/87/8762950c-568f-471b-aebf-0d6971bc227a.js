"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, instantiate, _dec, _class, _class2, _temp, ccclass, PrefabPoolUtil;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "87629UMVo9HG66/DWlxvCJ6", "PrefabPoolUtil"); // begin PrefabPoolUtil


      ccclass = _decorator.ccclass;

      _export("PrefabPoolUtil", PrefabPoolUtil = (_dec = ccclass("PrefabPoolUtil"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function PrefabPoolUtil() {
          babelHelpers.classCallCheck(this, PrefabPoolUtil);
        }

        babelHelpers.createClass(PrefabPoolUtil, null, [{
          key: "getItemByPoolName",

          /**
           * get a entity with pool name
           * @param poolName the pool name
           * @param time  optional, the time when recover, in seconds
           */
          value: function getItemByPoolName(poolName, prefab, time) {
            var _this = this;

            if (this._pool[poolName] == null) {
              this._pool[poolName] = [];
            }

            var pool = this._pool[poolName];
            var node = null;

            if (pool.length > 0) {
              node = pool.pop();
            } else {
              node = instantiate(prefab);
            }

            if (time != null) {
              // delay recover node with pool name
              setTimeout(function () {
                node.removeFromParent();

                _this.recoverItemByPoolName(poolName, node);
              }, time * 1000);
            }

            return node;
          }
          /**
           * recover a entity with pool name
           * @param poolName the pool name
           * @param entity  the node need to recover
           */

        }, {
          key: "recoverItemByPoolName",
          value: function recoverItemByPoolName(poolName, entity) {
            if (this._pool == null) return;
            var pool = this._pool[poolName];
            var index = pool.indexOf(entity);

            if (index == -1) {
              "";
              pool.push(entity);
            }
          }
        }]);
        return PrefabPoolUtil;
      }(), _class2._pool = {}, _temp)) || _class));

      cc._RF.pop(); // end PrefabPoolUtil

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvUG9vbC9QcmVmYWJQb29sVXRpbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiaW5zdGFudGlhdGUiLCJjY2NsYXNzIiwiUHJlZmFiUG9vbFV0aWwiLCJwb29sTmFtZSIsInByZWZhYiIsInRpbWUiLCJfcG9vbCIsInBvb2wiLCJub2RlIiwibGVuZ3RoIiwicG9wIiwic2V0VGltZW91dCIsInJlbW92ZUZyb21QYXJlbnQiLCJyZWNvdmVySXRlbUJ5UG9vbE5hbWUiLCJlbnRpdHkiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUEwQkMsTUFBQUEsVyxPQUFBQSxXOzs7cUZBRXNDOzs7QUFEakVDLE1BQUFBLE8sR0FBWUYsVSxDQUFaRSxPOztnQ0FHS0MsYyxXQURaRCxPQUFPLENBQUMsZ0JBQUQsQzs7Ozs7Ozs7OztBQUtKOzs7Ozs0Q0FLaUNFLFEsRUFBa0JDLE0sRUFBZ0JDLEksRUFBcUI7QUFBQTs7QUFFcEYsZ0JBQUksS0FBS0MsS0FBTCxDQUFXSCxRQUFYLEtBQXdCLElBQTVCLEVBQWtDO0FBQzlCLG1CQUFLRyxLQUFMLENBQVdILFFBQVgsSUFBdUIsRUFBdkI7QUFDSDs7QUFFRCxnQkFBTUksSUFBSSxHQUFHLEtBQUtELEtBQUwsQ0FBV0gsUUFBWCxDQUFiO0FBRUEsZ0JBQUlLLElBQVUsR0FBRyxJQUFqQjs7QUFDQSxnQkFBSUQsSUFBSSxDQUFDRSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDakJELGNBQUFBLElBQUksR0FBR0QsSUFBSSxDQUFDRyxHQUFMLEVBQVA7QUFDSCxhQUZELE1BRU87QUFDSEYsY0FBQUEsSUFBSSxHQUFHUixXQUFXLENBQUNJLE1BQUQsQ0FBbEI7QUFDSDs7QUFFRCxnQkFBSUMsSUFBSSxJQUFJLElBQVosRUFBa0I7QUFDZDtBQUNBTSxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiSCxnQkFBQUEsSUFBSSxDQUFDSSxnQkFBTDs7QUFDQSxnQkFBQSxLQUFJLENBQUNDLHFCQUFMLENBQTJCVixRQUEzQixFQUFxQ0ssSUFBckM7QUFDSCxlQUhTLEVBR1BILElBQUksR0FBRyxJQUhBLENBQVY7QUFJSDs7QUFFRCxtQkFBT0csSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7O2dEQUtxQ0wsUSxFQUFrQlcsTSxFQUFjO0FBRWpFLGdCQUFJLEtBQUtSLEtBQUwsSUFBYyxJQUFsQixFQUNJO0FBRUosZ0JBQU1DLElBQUksR0FBRyxLQUFLRCxLQUFMLENBQVdILFFBQVgsQ0FBYjtBQUNBLGdCQUFJWSxLQUFLLEdBQUdSLElBQUksQ0FBQ1MsT0FBTCxDQUFhRixNQUFiLENBQVo7O0FBQ0EsZ0JBQUlDLEtBQUssSUFBSSxDQUFDLENBQWQsRUFBaUI7QUFBQztBQUNkUixjQUFBQSxJQUFJLENBQUNVLElBQUwsQ0FBVUgsTUFBVjtBQUNIO0FBQ0o7OzttQkFoRGNSLEssR0FBUSxFOztvQkFKVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIFByZWZhYiwgTm9kZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzIH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQcmVmYWJQb29sVXRpbFwiKVxyXG5leHBvcnQgY2xhc3MgUHJlZmFiUG9vbFV0aWwge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wb29sID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYSBlbnRpdHkgd2l0aCBwb29sIG5hbWVcclxuICAgICAqIEBwYXJhbSBwb29sTmFtZSB0aGUgcG9vbCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdGltZSAgb3B0aW9uYWwsIHRoZSB0aW1lIHdoZW4gcmVjb3ZlciwgaW4gc2Vjb25kc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEl0ZW1CeVBvb2xOYW1lIChwb29sTmFtZTogc3RyaW5nLCBwcmVmYWI6IFByZWZhYiwgdGltZT86IG51bWJlcik6IE5vZGUge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9vbFtwb29sTmFtZV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb29sW3Bvb2xOYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcG9vbCA9IHRoaXMuX3Bvb2xbcG9vbE5hbWVdO1xyXG5cclxuICAgICAgICBsZXQgbm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBvb2wubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBub2RlID0gcG9vbC5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gZGVsYXkgcmVjb3ZlciBub2RlIHdpdGggcG9vbCBuYW1lXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY292ZXJJdGVtQnlQb29sTmFtZShwb29sTmFtZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIH0sIHRpbWUgKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVjb3ZlciBhIGVudGl0eSB3aXRoIHBvb2wgbmFtZVxyXG4gICAgICogQHBhcmFtIHBvb2xOYW1lIHRoZSBwb29sIG5hbWVcclxuICAgICAqIEBwYXJhbSBlbnRpdHkgIHRoZSBub2RlIG5lZWQgdG8gcmVjb3ZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY292ZXJJdGVtQnlQb29sTmFtZSAocG9vbE5hbWU6IHN0cmluZywgZW50aXR5OiBOb2RlKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wb29sID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9vbCA9IHRoaXMuX3Bvb2xbcG9vbE5hbWVdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHBvb2wuaW5kZXhPZihlbnRpdHkpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1wiXCJcclxuICAgICAgICAgICAgcG9vbC5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==