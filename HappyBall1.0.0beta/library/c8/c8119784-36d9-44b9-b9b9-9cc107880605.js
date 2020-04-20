"use strict";

System.register(["cc", "./ColumnCtr.ts", "../../helps/TempConst.ts", "../View/GameOverPanel.ts", "../View/PlayPanel.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ColliderComponent, RigidBodyComponent, ColumnCtr, v3_t, GameOverPanel, PlayPanel, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, requireComponent, BallCtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ColliderComponent = _cc.ColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }, function (_ColumnCtrTs) {
      ColumnCtr = _ColumnCtrTs.ColumnCtr;
    }, function (_helpsTempConstTs) {
      v3_t = _helpsTempConstTs.v3_t;
    }, function (_ViewGameOverPanelTs) {
      GameOverPanel = _ViewGameOverPanelTs.GameOverPanel;
    }, function (_ViewPlayPanelTs) {
      PlayPanel = _ViewPlayPanelTs.PlayPanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c8119eENtlEubm5nMEHiAYF", "BallCtrl"); // begin BallCtrl


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("BallCtr", BallCtr = (_dec = ccclass("BallCtr"), _dec2 = requireComponent(RigidBodyComponent), _dec3 = property({
        type: GameOverPanel
      }), _dec4 = property({
        type: PlayPanel
      }), _dec5 = property({
        type: ColumnCtr
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(BallCtr, _Component);

        function BallCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, BallCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(BallCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.rigidBody = null;
          babelHelpers.initializerDefineProperty(_this, "gameoverPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "velocity_y", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "columnCtr", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this._deadlockCount = 0;
          _this._tempUuid = '';
          _this._hitRedFlag = 0;
          return _this;
        }

        babelHelpers.createClass(BallCtr, [{
          key: "onLoad",
          value: function onLoad() {
            this.rigidBody = this.getComponent(RigidBodyComponent);
            this.rigidBody.allowSleep = false;
          }
        }, {
          key: "start",
          value: function start() {
            var collider = this.getComponent(ColliderComponent);
            collider.on('onCollisionEnter', this.onCollisionEnter, this);
          }
        }, {
          key: "onCollisionEnter",
          value: function onCollisionEnter(event) {
            v3_t.set(this.node.worldPosition);
            v3_t.y = event.otherCollider.node.worldPosition.y + 1; // 1 = radius + halfY

            this.node.worldPosition = v3_t;

            if (event.otherCollider.node.name == "CubeRed") {
              this._hitRedFlag = 1;
              this.rigidBody.enabled = false;
              this.columnCtr.enabled = false;
              console.log("死亡逻辑..."); //打开GameOverPanel

              this.gameoverPanel.SetPanelState(); //设置分数

              this.gameoverPanel.SetScoreUIInfo(this.playPanel.lastScore);
            } else if (event.otherCollider.node.name == "Cube") {
              v3_t.set(0, this.velocity_y, 0);
              this.rigidBody.setLinearVelocity(v3_t);

              if (this._tempUuid == event.otherCollider.node.uuid) {
                this._deadlockCount++;
              } else {
                this._tempUuid = event.otherCollider.node.uuid;
                this._deadlockCount = 0;
              }
            }
          }
        }, {
          key: "update",
          value: function update() {
            this.rigidBody.getLinearVelocity(v3_t);

            if (v3_t.y > this.velocity_y) {
              v3_t.set(0, this.velocity_y, 0);
              this.rigidBody.setLinearVelocity(v3_t);
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.rigidBody.enabled = true;
            this._hitRedFlag = 0;
            v3_t.set(0, 6, 4.5);
            this.node.worldPosition = v3_t;
          }
        }, {
          key: "hitRed",
          get: function get() {
            return this._hitRedFlag == 1;
          }
        }, {
          key: "isDeadlock",
          get: function get() {
            return this._deadlockCount >= 2;
          }
        }]);
        return BallCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameoverPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "velocity_y", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "columnCtr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end BallCtrl

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Db250cm9sbGVyL0JhbGxDdHJsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJDb2xsaWRlckNvbXBvbmVudCIsIlJpZ2lkQm9keUNvbXBvbmVudCIsIkNvbHVtbkN0ciIsInYzX3QiLCJHYW1lT3ZlclBhbmVsIiwiUGxheVBhbmVsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwicmVxdWlyZUNvbXBvbmVudCIsIkJhbGxDdHIiLCJ0eXBlIiwicmlnaWRCb2R5IiwiX2RlYWRsb2NrQ291bnQiLCJfdGVtcFV1aWQiLCJfaGl0UmVkRmxhZyIsImdldENvbXBvbmVudCIsImFsbG93U2xlZXAiLCJjb2xsaWRlciIsIm9uIiwib25Db2xsaXNpb25FbnRlciIsImV2ZW50Iiwic2V0Iiwibm9kZSIsIndvcmxkUG9zaXRpb24iLCJ5Iiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJlbmFibGVkIiwiY29sdW1uQ3RyIiwiY29uc29sZSIsImxvZyIsImdhbWVvdmVyUGFuZWwiLCJTZXRQYW5lbFN0YXRlIiwiU2V0U2NvcmVVSUluZm8iLCJwbGF5UGFuZWwiLCJsYXN0U2NvcmUiLCJ2ZWxvY2l0eV95Iiwic2V0TGluZWFyVmVsb2NpdHkiLCJ1dWlkIiwiZ2V0TGluZWFyVmVsb2NpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWtDQyxNQUFBQSxpQixPQUFBQSxpQjtBQUFtQkMsTUFBQUEsa0IsT0FBQUEsa0I7O0FBRWpFQyxNQUFBQSxTLGdCQUFBQSxTOztBQUNBQyxNQUFBQSxJLHFCQUFBQSxJOztBQUNBQyxNQUFBQSxhLHdCQUFBQSxhOztBQUNBQyxNQUFBQSxTLG9CQUFBQSxTOzs7K0VBSmdFOzs7QUFNakVDLE1BQUFBLE8sR0FBd0NSLFUsQ0FBeENRLE87QUFBU0MsTUFBQUEsUSxH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Q0FBaUNsQyxJQUFqQztBQUNIO0FBQ0o7OztrQ0FFTztBQUNKLGlCQUFLUSxTQUFMLENBQWVnQixPQUFmLEdBQXlCLElBQXpCO0FBQ0EsaUJBQUtiLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQVgsWUFBQUEsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsR0FBZjtBQUNBLGlCQUFLQyxJQUFMLENBQVVDLGFBQVYsR0FBMEJwQixJQUExQjtBQUNIOzs7OEJBOURZO0FBQ1QsbUJBQU8sS0FBS1csV0FBTCxJQUFvQixDQUEzQjtBQUNIOzs7OEJBRWdCO0FBQ2IsbUJBQU8sS0FBS0YsY0FBTCxJQUF1QixDQUE5QjtBQUNIOzs7UUExQndCYixTOzs7OztpQkFLYSxJOzs7Ozs7O2lCQUdSLEk7O2lHQUU3QlEsUTs7Ozs7aUJBQ29CLEU7Ozs7Ozs7aUJBR0UsSTs7OztvQkF4QlQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBJQ29sbGlzaW9uRXZlbnQsIENvbGxpZGVyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFZlYzMgfSBmcm9tIFwiY2NcIjtcclxuXHJcbmltcG9ydCB7IENvbHVtbkN0ciB9IGZyb20gXCIuL0NvbHVtbkN0clwiO1xyXG5pbXBvcnQgeyB2M190IH0gZnJvbSBcIi4uLy4uL2hlbHBzL1RlbXBDb25zdFwiO1xyXG5pbXBvcnQgeyBHYW1lT3ZlclBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvR2FtZU92ZXJQYW5lbFwiO1xyXG5pbXBvcnQgeyBQbGF5UGFuZWwgfSBmcm9tIFwiLi4vVmlldy9QbGF5UGFuZWxcIjtcclxuaW1wb3J0IHsgTG9hZFN5cyB9IGZyb20gXCIuLi9TeXN0ZW0vTG9hZFN5c1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJCYWxsQ3RyXCIpXHJcbkByZXF1aXJlQ29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudClcclxuZXhwb3J0IGNsYXNzIEJhbGxDdHIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBSaWdpZEJvZHlDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVPdmVyUGFuZWwgfSlcclxuICAgIHB1YmxpYyBnYW1lb3ZlclBhbmVsOiBHYW1lT3ZlclBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQbGF5UGFuZWwgfSlcclxuICAgIHB1YmxpYyBwbGF5UGFuZWw6IFBsYXlQYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB2ZWxvY2l0eV95OiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDb2x1bW5DdHIgfSlcclxuICAgIGNvbHVtbkN0cjogQ29sdW1uQ3RyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9kZWFkbG9ja0NvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX3RlbXBVdWlkID0gJyc7XHJcblxyXG4gICAgcHJpdmF0ZSBfaGl0UmVkRmxhZyA9IDA7XHJcbiAgICBnZXQgaGl0UmVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaXRSZWRGbGFnID09IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRGVhZGxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlYWRsb2NrQ291bnQgPj0gMjtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChSaWdpZEJvZHlDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmFsbG93U2xlZXAgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICBjb2xsaWRlci5vbignb25Db2xsaXNpb25FbnRlcicsIHRoaXMub25Db2xsaXNpb25FbnRlciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihldmVudDogSUNvbGxpc2lvbkV2ZW50KSB7XHJcbiAgICAgICAgdjNfdC5zZXQodGhpcy5ub2RlLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHYzX3QueSA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS53b3JsZFBvc2l0aW9uLnkgKyAxOyAvLyAxID0gcmFkaXVzICsgaGFsZllcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiA9IHYzX3Q7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5vdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcIkN1YmVSZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9oaXRSZWRGbGFnID0gMTtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkN0ci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5q275Lqh6YC76L6RLi4uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy/miZPlvIBHYW1lT3ZlclBhbmVsXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcbiAgICAgICAgICAgIC8v6K6+572u5YiG5pWwXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5TZXRTY29yZVVJSW5mbyh0aGlzLnBsYXlQYW5lbC5sYXN0U2NvcmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwiQ3ViZVwiKSB7XHJcbiAgICAgICAgICAgIHYzX3Quc2V0KDAsIHRoaXMudmVsb2NpdHlfeSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LnNldExpbmVhclZlbG9jaXR5KHYzX3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RlbXBVdWlkID09IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWFkbG9ja0NvdW50Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZW1wVXVpZCA9IGV2ZW50Lm90aGVyQ29sbGlkZXIubm9kZS51dWlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVhZGxvY2tDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuZ2V0TGluZWFyVmVsb2NpdHkodjNfdCk7XHJcbiAgICAgICAgaWYgKHYzX3QueSA+IHRoaXMudmVsb2NpdHlfeSkge1xyXG4gICAgICAgICAgICB2M190LnNldCgwLCB0aGlzLnZlbG9jaXR5X3ksIDApO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5zZXRMaW5lYXJWZWxvY2l0eSh2M190KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5faGl0UmVkRmxhZyA9IDA7XHJcbiAgICAgICAgdjNfdC5zZXQoMCwgNiwgNC41KTtcclxuICAgICAgICB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==