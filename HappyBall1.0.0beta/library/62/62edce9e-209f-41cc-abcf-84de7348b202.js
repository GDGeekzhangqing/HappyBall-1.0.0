"use strict";

System.register(["cc", "../Service/ResSvc.ts", "../Service/AudioSvc.ts", "../Service/NetSvc.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ResSvc, AudioSvc, NetSvc, _dec, _class, ccclass, property, SystemRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_ServiceResSvcTs) {
      ResSvc = _ServiceResSvcTs.ResSvc;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "62edc6eIJ9BzKvPhN5zSLIC", "SystemRoot"); // begin SystemRoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SystemRoot", SystemRoot = (_dec = ccclass("SystemRoot"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SystemRoot, _Component);

        function SystemRoot() {
          babelHelpers.classCallCheck(this, SystemRoot);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SystemRoot).apply(this, arguments));
        }

        babelHelpers.createClass(SystemRoot, [{
          key: "InitSys",
          //#region  服务持有
          //#endregion

          /**
           * 初始化系统
           */
          value: function InitSys() {
            this.resSvc = ResSvc.Instance();
            this.audioSvc = AudioSvc.Instance();
            this.netSvc = NetSvc.Instance();
          }
        }]);
        return SystemRoot;
      }(Component)) || _class));

      cc._RF.pop(); // end SystemRoot

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Sb290L1N5c3RlbVJvb3QudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlJlc1N2YyIsIkF1ZGlvU3ZjIiwiTmV0U3ZjIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU3lzdGVtUm9vdCIsInJlc1N2YyIsIkluc3RhbmNlIiwiYXVkaW9TdmMiLCJuZXRTdmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7O0FBQ1pDLE1BQUFBLE0sb0JBQUFBLE07O0FBQ0FDLE1BQUFBLFEsc0JBQUFBLFE7O0FBQ0FDLE1BQUFBLE0sb0JBQUFBLE07OztpRkFEZ0U7OztBQUVqRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQzs7Ozs7Ozs7Ozs7O0FBRUw7QUFLQTs7QUFFQTs7O29DQUdpQjtBQUNkLGlCQUFLRyxNQUFMLEdBQWNOLE1BQU0sQ0FBQ08sUUFBUCxFQUFkO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0JQLFFBQVEsQ0FBQ00sUUFBVCxFQUFoQjtBQUNBLGlCQUFLRSxNQUFMLEdBQWNQLE1BQU0sQ0FBQ0ssUUFBUCxFQUFkO0FBQ0Y7OztRQWY0QlIsUzs7b0JBTGQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgUmVzU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvUmVzU3ZjXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgTmV0U3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvTmV0U3ZjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlN5c3RlbVJvb3RcIilcclxuZXhwb3J0IGNsYXNzIFN5c3RlbVJvb3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAvLyNyZWdpb24gIOacjeWKoeaMgeaciVxyXG4gICBwcm90ZWN0ZWQgcmVzU3ZjOiBSZXNTdmM7XHJcbiAgIHByb3RlY3RlZCBhdWRpb1N2YzogQXVkaW9TdmM7XHJcbiAgIHByb3RlY3RlZCBuZXRTdmM6IE5ldFN2YztcclxuXHJcbiAgIC8vI2VuZHJlZ2lvblxyXG4gICBcclxuICAgLyoqXHJcbiAgICAqIOWIneWni+WMluezu+e7n1xyXG4gICAgKi9cclxuICAgcHVibGljIEluaXRTeXMoKSB7XHJcbiAgICAgIHRoaXMucmVzU3ZjID0gUmVzU3ZjLkluc3RhbmNlKCk7XHJcbiAgICAgIHRoaXMuYXVkaW9TdmMgPSBBdWRpb1N2Yy5JbnN0YW5jZSgpO1xyXG4gICAgICB0aGlzLm5ldFN2YyA9IE5ldFN2Yy5JbnN0YW5jZSgpO1xyXG4gICB9XHJcblxyXG5cclxufVxyXG4iXX0=