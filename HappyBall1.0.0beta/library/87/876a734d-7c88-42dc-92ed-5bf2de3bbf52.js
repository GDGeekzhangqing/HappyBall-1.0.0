"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var Vec3, Quat, Vec2, v2_t, v3_t, quat_t;

  function parseTime2String(seconds) {
    var s = seconds % 60;
    var m = Math.floor(seconds / 60);
    var ss = s > 9 ? s.toString() : '0' + s;
    var ms = m > 9 ? m.toString() : '0' + m;
    return ms + ':' + ss;
  }

  _export("parseTime2String", parseTime2String);

  return {
    setters: [function (_cc) {
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "876a7NNfIhC3JLtW/LeO79S", "TempConst"); // begin TempConst


      _export("v2_t", v2_t = new Vec2());

      _export("v3_t", v3_t = new Vec3());

      _export("quat_t", quat_t = new Quat());

      cc._RF.pop(); // end TempConst

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvaGVscHMvVGVtcENvbnN0LnRzIl0sIm5hbWVzIjpbInBhcnNlVGltZTJTdHJpbmciLCJzZWNvbmRzIiwicyIsIm0iLCJNYXRoIiwiZmxvb3IiLCJzcyIsInRvU3RyaW5nIiwibXMiLCJWZWMzIiwiUXVhdCIsIlZlYzIiLCJ2Ml90IiwidjNfdCIsInF1YXRfdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFPLFdBQVNBLGdCQUFULENBQTJCQyxPQUEzQixFQUFvRDtBQUN2RCxRQUFNQyxDQUFDLEdBQUdELE9BQU8sR0FBRyxFQUFwQjtBQUNBLFFBQU1FLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQU8sR0FBRyxFQUFyQixDQUFWO0FBQ0EsUUFBTUssRUFBRSxHQUFHSixDQUFDLEdBQUcsQ0FBSixHQUFRQSxDQUFDLENBQUNLLFFBQUYsRUFBUixHQUF1QixNQUFNTCxDQUF4QztBQUNBLFFBQU1NLEVBQUUsR0FBR0wsQ0FBQyxHQUFHLENBQUosR0FBUUEsQ0FBQyxDQUFDSSxRQUFGLEVBQVIsR0FBdUIsTUFBTUosQ0FBeEM7QUFDQSxXQUFPSyxFQUFFLEdBQUcsR0FBTCxHQUFXRixFQUFsQjtBQUNIOzs4QkFOZU4sZ0I7Ozs7QUFSUFMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7OztnRkFFb0Q7OztzQkFBNURDLEksR0FBTyxJQUFJRCxJQUFKLEU7O3NCQUVQRSxJLEdBQU8sSUFBSUosSUFBSixFOzt3QkFFUEssTSxHQUFTLElBQUlKLElBQUosRTs7b0JBSkoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWMzLCBRdWF0LCBWZWMyIH0gZnJvbSBcImNjXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdjJfdCA9IG5ldyBWZWMyKCk7XHJcblxyXG5leHBvcnQgY29uc3QgdjNfdCA9IG5ldyBWZWMzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgcXVhdF90ID0gbmV3IFF1YXQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWUyU3RyaW5nIChzZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcclxuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgICBjb25zdCBzcyA9IHMgPiA5ID8gcy50b1N0cmluZygpIDogJzAnICsgcztcclxuICAgIGNvbnN0IG1zID0gbSA+IDkgPyBtLnRvU3RyaW5nKCkgOiAnMCcgKyBtO1xyXG4gICAgcmV0dXJuIG1zICsgJzonICsgc3M7XHJcbn0iXX0=