"use strict";

System.register(["cc", "./ColumnCtr.ts", "./FloorFlagCtr.ts", "./CamerFollow.ts", "./BallCtrl.ts", "../System/MainMgr.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, ColumnCtr, FloorFlagCtr, CameraFollow, BallCtr, MainMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, EGameSate, GameCtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0,
    EGameSate: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_ColumnCtrTs) {
      ColumnCtr = _ColumnCtrTs.ColumnCtr;
    }, function (_FloorFlagCtrTs) {
      FloorFlagCtr = _FloorFlagCtrTs.FloorFlagCtr;
    }, function (_CamerFollowTs) {
      CameraFollow = _CamerFollowTs.CameraFollow;
    }, function (_BallCtrlTs) {
      BallCtr = _BallCtrlTs.BallCtr;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "6a5ffXHvlFAlJHXPsLytc//", "GameCtr"); // begin GameCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EGameSate) {
        EGameSate[EGameSate["LOBBY"] = 0] = "LOBBY";
        EGameSate[EGameSate["GAMING"] = 1] = "GAMING";
        EGameSate[EGameSate["GAMEOVER"] = 2] = "GAMEOVER";
      })(EGameSate || (EGameSate = {}));

      _export("GameCtr", GameCtr = (_dec = ccclass("GameCtr"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CameraFollow
      }), _dec4 = property({
        type: ColumnCtr
      }), _dec5 = property({
        type: BallCtr
      }), _dec6 = property({
        type: FloorFlagCtr
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameCtr, _Component);

        function GameCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "gameoverPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cameraCtr", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "columnCtr", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ballCtr", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "floorFlagCtr", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "totalSecond", _descriptor6, babelHelpers.assertThisInitialized(_this));
          _this.tick = 0;
          _this.intervalId = 0;
          _this.state = EGameSate.LOBBY;
          return _this;
        }

        babelHelpers.createClass(GameCtr, [{
          key: "start",
          // timingLb: LabelComponent = null;
          // scoreLb: LabelComponent = null;
          value: function start() {
            this.columnCtr.enabled = false;
            /*const score = localStorage.getItem('score');
            if (score != null) {
                this.scoreLb.string = score;
            }*/
          }
          /**
           * 游戏开始
           */

        }, {
          key: "GameStart",
          value: function GameStart() {
            this.columnCtr.enabled = true; //this.loginPanel.active = false;

            MainMgr.Instance().OpenPlayPanel();
            /*this.tick = 0;
            this.timingLb.string = parseTime2String(this.totalSecond);
            this.scoreLb.string = '0';
            this.intervalId = setInterval(this.GameTick.bind(this), 1000);*/

            this.state = EGameSate.GAMING;
            console.log("游戏开始...");
          }
          /**
           * 游戏重新开始
           */

        }, {
          key: "GameRestart",
          value: function GameRestart() {
            //this.overPanel.active = false;
            MainMgr.Instance().gameoverPanel.ClickClose();
            MainMgr.Instance().OpenPlayPanel();
            this.ballCtr.reset();
            this.columnCtr.reset();
            this.floorFlagCtr.reset();
            this.cameraCtr.reset();
            this.GameStart();
          }
          /**
           * 返回
           */

        }, {
          key: "GameBackToLogin",
          value: function GameBackToLogin() {
            //this.loginPanel.active = true;
            //this.overPanel.active = false;
            this.ballCtr.reset();
            this.columnCtr.reset();
            this.floorFlagCtr.reset();
            this.cameraCtr.reset();
            this.floorFlagCtr.reset();
            /*this.timingLb.string = parseTime2String(this.totalSecond);
            const score = localStorage.getItem('score');
            if (score != null) {
                this.scoreLb.string = score;
            }*/

            console.log("返回");
          }
        }, {
          key: "GameTick",
          value: function GameTick() {
            this.tick++;
            var dt = this.totalSecond - this.tick;

            if (dt < 0 || this.ballCtr.hitRed) {
              this.columnCtr.enabled = false;

              if ((this.ballCtr.isDeadlock || this.ballCtr.hitRed) && this.state != EGameSate.GAMEOVER) {
                /** GAME OVER */
                this.state = EGameSate.GAMEOVER;
                clearInterval(this.intervalId); // this.overPanel.active = true;

                MainMgr.Instance().OpenGameOverPanel();
                this.columnCtr.enabled = false; //保存本地数据

                var score = localStorage.getItem('score');
                /* if (score != null) {
                     let s0 = parseInt(score);
                     let s1 = parseInt(this.scoreLb.string);
                     if (s1 > s0) {
                         localStorage.setItem('score', this.scoreLb.string);
                     }
                 } else {
                     localStorage.setItem('score', this.scoreLb.string);
                 }*/
              }
            } else {//this.timingLb.string = parseTime2String(dt);
              }
          }
        }]);
        return GameCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameoverPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cameraCtr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "columnCtr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ballCtr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "floorFlagCtr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "totalSecond", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 90;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Db250cm9sbGVyL0dhbWVDdHIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJDb2x1bW5DdHIiLCJGbG9vckZsYWdDdHIiLCJDYW1lcmFGb2xsb3ciLCJCYWxsQ3RyIiwiTWFpbk1nciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkVHYW1lU2F0ZSIsIkdhbWVDdHIiLCJ0eXBlIiwidGljayIsImludGVydmFsSWQiLCJzdGF0ZSIsIkxPQkJZIiwiY29sdW1uQ3RyIiwiZW5hYmxlZCIsIkluc3RhbmNlIiwiT3BlblBsYXlQYW5lbCIsIkdBTUlORyIsImNvbnNvbGUiLCJsb2ciLCJnYW1lb3ZlclBhbmVsIiwiQ2xpY2tDbG9zZSIsImJhbGxDdHIiLCJyZXNldCIsImZsb29yRmxhZ0N0ciIsImNhbWVyYUN0ciIsIkdhbWVTdGFydCIsImR0IiwidG90YWxTZWNvbmQiLCJoaXRSZWQiLCJpc0RlYWRsb2NrIiwiR0FNRU9WRVIiLCJjbGVhckludGVydmFsIiwiT3BlbkdhbWVPdmVyUGFuZWwiLCJzY29yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7O0FBQ3ZCQyxNQUFBQSxTLGdCQUFBQSxTOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxZLGtCQUFBQSxZOztBQUNBQyxNQUFBQSxPLGVBQUFBLE87O0FBQ0FDLE1BQUFBLE8sb0JBQUFBLE87Ozs4RUFKZ0U7OztBQU1qRUMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUTs7aUJBRVpDLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO0FBQUFBLFFBQUFBLFMsQ0FB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STs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdJLEk7Ozs7Ozs7aUJBR1gsSTs7Ozs7OztpQkFHVSxJOztrR0FFNUJRLFE7Ozs7O2lCQUNxQixFOzs7O29CQTNDUiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIEV2ZW50SGFuZGxlciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDb2x1bW5DdHIgfSBmcm9tIFwiLi9Db2x1bW5DdHJcIjtcclxuaW1wb3J0IHsgRmxvb3JGbGFnQ3RyIH0gZnJvbSBcIi4vRmxvb3JGbGFnQ3RyXCI7XHJcbmltcG9ydCB7IENhbWVyYUZvbGxvdyB9IGZyb20gXCIuL0NhbWVyRm9sbG93XCI7XHJcbmltcG9ydCB7IEJhbGxDdHIgfSBmcm9tIFwiLi9CYWxsQ3RybFwiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4uL1N5c3RlbS9NYWluTWdyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFR2FtZVNhdGUge1xyXG4gICAgTE9CQlksXHJcbiAgICBHQU1JTkcsXHJcbiAgICBHQU1FT1ZFUlxyXG59XHJcblxyXG5AY2NjbGFzcyhcIkdhbWVDdHJcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDdHIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgZ2FtZVBhbmVsOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBsb2dpblBhbmVsOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBvdmVyUGFuZWw6IE5vZGUgPSBudWxsOyovXHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIGdhbWVvdmVyUGFuZWw6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpDYW1lcmFGb2xsb3d9KVxyXG4gICAgY2FtZXJhQ3RyOiBDYW1lcmFGb2xsb3cgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpDb2x1bW5DdHJ9KVxyXG4gICAgcHVibGljIGNvbHVtbkN0cjogQ29sdW1uQ3RyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6QmFsbEN0cn0pXHJcbiAgICBiYWxsQ3RyOiBCYWxsQ3RyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Rmxvb3JGbGFnQ3RyfSlcclxuICAgIGZsb29yRmxhZ0N0cjogRmxvb3JGbGFnQ3RyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRvdGFsU2Vjb25kOiBudW1iZXIgPSA5MDtcclxuXHJcbiAgICB0aWNrID0gMDtcclxuICAgIGludGVydmFsSWQgPSAwO1xyXG5cclxuICAgIHN0YXRlOiBFR2FtZVNhdGUgPSBFR2FtZVNhdGUuTE9CQlk7XHJcblxyXG4gICAgLy8gdGltaW5nTGI6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIC8vIHNjb3JlTGI6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29sdW1uQ3RyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvKmNvbnN0IHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJyk7XHJcbiAgICAgICAgaWYgKHNjb3JlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUxiLnN0cmluZyA9IHNjb3JlO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHYW1lU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5DdHIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy90aGlzLmxvZ2luUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgTWFpbk1nci5JbnN0YW5jZSgpLk9wZW5QbGF5UGFuZWwoKTtcclxuICAgICAgICAvKnRoaXMudGljayA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1pbmdMYi5zdHJpbmcgPSBwYXJzZVRpbWUyU3RyaW5nKHRoaXMudG90YWxTZWNvbmQpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYi5zdHJpbmcgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5HYW1lVGljay5iaW5kKHRoaXMpLCAxMDAwKTsqL1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBFR2FtZVNhdGUuR0FNSU5HO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ri45oiP5byA5aeLLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6YeN5paw5byA5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHYW1lUmVzdGFydCgpIHtcclxuICAgICAgICAvL3RoaXMub3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5nYW1lb3ZlclBhbmVsLkNsaWNrQ2xvc2UoKTtcclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuT3BlblBsYXlQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuYmFsbEN0ci5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ3RyLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5mbG9vckZsYWdDdHIucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUN0ci5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuR2FtZVN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5ZueXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHYW1lQmFja1RvTG9naW4oKSB7XHJcbiAgICAgICAgLy90aGlzLmxvZ2luUGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMub3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGxDdHIucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmNvbHVtbkN0ci5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuZmxvb3JGbGFnQ3RyLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDdHIucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmZsb29yRmxhZ0N0ci5yZXNldCgpO1xyXG5cclxuICAgICAgICAvKnRoaXMudGltaW5nTGIuc3RyaW5nID0gcGFyc2VUaW1lMlN0cmluZyh0aGlzLnRvdGFsU2Vjb25kKTtcclxuICAgICAgICBjb25zdCBzY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpO1xyXG4gICAgICAgIGlmIChzY29yZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVMYi5zdHJpbmcgPSBzY29yZTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBjb25zb2xlLmxvZyhcIui/lOWbnlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdhbWVUaWNrKCkge1xyXG4gICAgICAgIHRoaXMudGljaysrO1xyXG4gICAgICAgIGNvbnN0IGR0ID0gdGhpcy50b3RhbFNlY29uZCAtIHRoaXMudGljaztcclxuICAgICAgIGlmIChkdCA8IDAgfHwgdGhpcy5iYWxsQ3RyLmhpdFJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkN0ci5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYmFsbEN0ci5pc0RlYWRsb2NrIHx8IHRoaXMuYmFsbEN0ci5oaXRSZWQpICYmIHRoaXMuc3RhdGUgIT0gRUdhbWVTYXRlLkdBTUVPVkVSKSB7XHJcbiAgICAgICAgICAgICAgICAvKiogR0FNRSBPVkVSICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gRUdhbWVTYXRlLkdBTUVPVkVSO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vdmVyUGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS5PcGVuR2FtZU92ZXJQYW5lbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5DdHIuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pys5Zyw5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpO1xyXG4gICAgICAgICAgICAgICAvKiBpZiAoc2NvcmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzMCA9IHBhcnNlSW50KHNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgczEgPSBwYXJzZUludCh0aGlzLnNjb3JlTGIuc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoczEgPiBzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCB0aGlzLnNjb3JlTGIuc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZScsIHRoaXMuc2NvcmVMYi5zdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy90aGlzLnRpbWluZ0xiLnN0cmluZyA9IHBhcnNlVGltZTJTdHJpbmcoZHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19