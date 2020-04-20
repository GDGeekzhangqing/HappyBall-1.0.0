"use strict";

System.register(["cc", "../../helps/TempConst.ts", "../../Pool/PrefabPoolUtil.ts", "../View/PlayPanel.ts", "../System/LoadSys.ts", "../View/GameOverPanel.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Quat, randomRange, ColliderComponent, Prefab, RigidBodyComponent, Vec3, v3_t, quat_t, PrefabPoolUtil, PlayPanel, LoadSys, GameOverPanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, ccclass, property, FloorFlagCtr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Quat = _cc.Quat;
      randomRange = _cc.randomRange;
      ColliderComponent = _cc.ColliderComponent;
      Prefab = _cc.Prefab;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
    }, function (_helpsTempConstTs) {
      v3_t = _helpsTempConstTs.v3_t;
      quat_t = _helpsTempConstTs.quat_t;
    }, function (_PoolPrefabPoolUtilTs) {
      PrefabPoolUtil = _PoolPrefabPoolUtilTs.PrefabPoolUtil;
    }, function (_ViewPlayPanelTs) {
      PlayPanel = _ViewPlayPanelTs.PlayPanel;
    }, function (_SystemLoadSysTs) {
      LoadSys = _SystemLoadSysTs.LoadSys;
    }, function (_ViewGameOverPanelTs) {
      GameOverPanel = _ViewGameOverPanelTs.GameOverPanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "5c983yamiVDGLvsAGJqzsfl", "FloorFlagCtr"); // begin FloorFlagCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FloorFlagCtr", FloorFlagCtr = (_dec = ccclass("FloorFlagCtr"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: PlayPanel
      }), _dec7 = property({
        type: GameOverPanel
      }), _dec8 = property({
        type: Prefab
      }), _dec9 = property({
        type: Prefab
      }), _dec10 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(FloorFlagCtr, _Component);

        function FloorFlagCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, FloorFlagCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(FloorFlagCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "targetNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "floorRoot", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "floorFlag0", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "floorFlag1", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameOverPanel", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cubePrefab", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cubeRedPrefab", _descriptor8, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "cubeRoot", _descriptor9, babelHelpers.assertThisInitialized(_this));
          _this._flag = 0;
          return _this;
        }

        babelHelpers.createClass(FloorFlagCtr, [{
          key: "update",
          value: function update() {
            if (this.floorFlag0.worldPosition.y > this.targetNode.worldPosition.y) {
              v3_t.set(this.floorFlag0.worldPosition);
              v3_t.y -= 8;
              this.floorFlag0.worldPosition = v3_t;
              var len = this.floorRoot.children.length;
              console.log("len is :" + len);
              var floorNode = this.floorRoot.children[this._flag % len];
              console.log("floorNode is:" + floorNode);
              var colliders = floorNode.getComponentsInChildren(ColliderComponent);

              for (var i = 0; i < colliders.length; i++) {
                //生成掉落预制体，也生成四散而去的预制体
                var clone = void 0;

                if (colliders[i].node.name == "Cube") {
                  clone = PrefabPoolUtil.getItemByPoolName(colliders[i].node.name, this.cubePrefab, 5);
                } else {
                  clone = PrefabPoolUtil.getItemByPoolName(colliders[i].node.name, this.cubeRedPrefab, 5);
                }

                this.cubeRoot.addChild(clone);
                clone.worldPosition = colliders[i].node.worldPosition;
                clone.worldRotation = colliders[i].node.worldRotation; //获得刚体

                var cBody = clone.getComponent(RigidBodyComponent);
                cBody.sleep();
                cBody.wakeUp();
                v3_t.set(0, 0, 10000);
                Vec3.transformQuat(v3_t, v3_t, clone.worldRotation);
                cBody.applyForce(v3_t);
              } //生成下一个平台


              v3_t.set(0, -(this._flag + len) * 8, 0);
              floorNode.worldPosition = v3_t; //设置随机旋转

              Quat.fromEuler(quat_t, 0, randomRange(-180, 180), 0);
              floorNode.worldRotation = quat_t; //计算得分

              this._flag++; //this.scoreLabel.string = this._flag.toString();

              this.playPanel.SetScoreUI(this._flag);
              console.log("超过.....111"); //设置超过的人

              if (this._flag > LoadSys.Instance().hightScoreVal) {
                this.gameOverPanel.SetSurpassUIInfo(this._flag);
                console.log("超越...222");
              }
            } //移动柱子


            if (this.floorFlag1.worldPosition.y > this.targetNode.worldPosition.y) {
              v3_t.set(this.floorFlag1.worldPosition);
              v3_t.y -= 8;
              this.floorFlag1.worldPosition = v3_t;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this._flag = 0;
            v3_t.set(0, -1, 0);
            this.floorFlag0.worldPosition = v3_t;
            v3_t.set(0, -3, 0);
            this.floorFlag1.worldPosition = v3_t;
          }
        }]);
        return FloorFlagCtr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "floorRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "floorFlag0", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "floorFlag1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameOverPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubePrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeRedPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeRoot", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end FloorFlagCtr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Db250cm9sbGVyL0Zsb29yRmxhZ0N0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlF1YXQiLCJyYW5kb21SYW5nZSIsIkNvbGxpZGVyQ29tcG9uZW50IiwiUHJlZmFiIiwiUmlnaWRCb2R5Q29tcG9uZW50IiwiVmVjMyIsInYzX3QiLCJxdWF0X3QiLCJQcmVmYWJQb29sVXRpbCIsIlBsYXlQYW5lbCIsIkxvYWRTeXMiLCJHYW1lT3ZlclBhbmVsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRmxvb3JGbGFnQ3RyIiwidHlwZSIsIl9mbGFnIiwiZmxvb3JGbGFnMCIsIndvcmxkUG9zaXRpb24iLCJ5IiwidGFyZ2V0Tm9kZSIsInNldCIsImxlbiIsImZsb29yUm9vdCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZsb29yTm9kZSIsImNvbGxpZGVycyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiaSIsImNsb25lIiwibm9kZSIsIm5hbWUiLCJnZXRJdGVtQnlQb29sTmFtZSIsImN1YmVQcmVmYWIiLCJjdWJlUmVkUHJlZmFiIiwiY3ViZVJvb3QiLCJhZGRDaGlsZCIsIndvcmxkUm90YXRpb24iLCJjQm9keSIsImdldENvbXBvbmVudCIsInNsZWVwIiwid2FrZVVwIiwidHJhbnNmb3JtUXVhdCIsImFwcGx5Rm9yY2UiLCJmcm9tRXVsZXIiLCJwbGF5UGFuZWwiLCJTZXRTY29yZVVJIiwiSW5zdGFuY2UiLCJoaWdodFNjb3JlVmFsIiwiZ2FtZU92ZXJQYW5lbCIsIlNldFN1cnBhc3NVSUluZm8iLCJmbG9vckZsYWcxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQXNCQyxNQUFB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QkFHWCxJOzs7Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQU1XLEk7Ozs7Ozs7aUJBR08sSTs7Ozs7OztpQkFHaEIsSTs7Ozs7OztpQkFHRyxJOzs7Ozs7O2lCQUdQLEk7Ozs7b0JBdENIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbENvbXBvbmVudCwgUXVhdCwgcmFuZG9tUmFuZ2UsIENvbGxpZGVyQ29tcG9uZW50LCBkaXJlY3RvciwgRGlyZWN0b3IsIFByZWZhYiwgaW5zdGFudGlhdGUsIFJpZ2lkQm9keUNvbXBvbmVudCwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyB2M190LCBxdWF0X3QgfSBmcm9tIFwiLi4vLi4vaGVscHMvVGVtcENvbnN0XCI7XHJcbmltcG9ydCB7IFByZWZhYlBvb2xVdGlsIH0gZnJvbSBcIi4uLy4uL1Bvb2wvUHJlZmFiUG9vbFV0aWxcIjtcclxuaW1wb3J0IHsgUGxheVBhbmVsIH0gZnJvbSBcIi4uL1ZpZXcvUGxheVBhbmVsXCI7XHJcbmltcG9ydCB7IExvYWRTeXMgfSBmcm9tIFwiLi4vU3lzdGVtL0xvYWRTeXNcIjtcclxuaW1wb3J0IHsgR2FtZU92ZXJQYW5lbCB9IGZyb20gXCIuLi9WaWV3L0dhbWVPdmVyUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkZsb29yRmxhZ0N0clwiKVxyXG5leHBvcnQgY2xhc3MgRmxvb3JGbGFnQ3RyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICB0YXJnZXROb2RlOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBmbG9vclJvb3Q6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIGZsb29yRmxhZzA6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIGZsb29yRmxhZzE6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXHJcbiAgICAgc2NvcmVMYWJlbDogTGFiZWxDb21wb25lbnQgPSBudWxsOyovXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGxheVBhbmVsIH0pXHJcbiAgICBwdWJsaWMgcGxheVBhbmVsOiBQbGF5UGFuZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IEdhbWVPdmVyUGFuZWwgfSlcclxuICAgIHB1YmxpYyBnYW1lT3ZlclBhbmVsOiBHYW1lT3ZlclBhbmVsPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxyXG4gICAgY3ViZVByZWZhYjogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBQcmVmYWIgfSlcclxuICAgIGN1YmVSZWRQcmVmYWI6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxyXG4gICAgY3ViZVJvb3Q6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2ZsYWcgPSAwO1xyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmxvb3JGbGFnMC53b3JsZFBvc2l0aW9uLnkgPiB0aGlzLnRhcmdldE5vZGUud29ybGRQb3NpdGlvbi55KSB7XHJcbiAgICAgICAgICAgIHYzX3Quc2V0KHRoaXMuZmxvb3JGbGFnMC53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdjNfdC55IC09IDg7XHJcbiAgICAgICAgICAgIHRoaXMuZmxvb3JGbGFnMC53b3JsZFBvc2l0aW9uID0gdjNfdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZmxvb3JSb290LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZW4gaXMgOlwiICsgbGVuKTtcclxuICAgICAgICAgICAgY29uc3QgZmxvb3JOb2RlID0gdGhpcy5mbG9vclJvb3QuY2hpbGRyZW5bdGhpcy5fZmxhZyAlIGxlbl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmxvb3JOb2RlIGlzOlwiICsgZmxvb3JOb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGlkZXJzID0gZmxvb3JOb2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlcnMubGVuZ3RoOyBpKyspIHsvL+eUn+aIkOaOieiQvemihOWItuS9k++8jOS5n+eUn+aIkOWbm+aVo+iAjOWOu+eahOmihOWItuS9k1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsb25lOiBOb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVyc1tpXS5ub2RlLm5hbWUgPT0gXCJDdWJlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZSA9IFByZWZhYlBvb2xVdGlsLmdldEl0ZW1CeVBvb2xOYW1lKGNvbGxpZGVyc1tpXS5ub2RlLm5hbWUsIHRoaXMuY3ViZVByZWZhYiwgNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lID0gUHJlZmFiUG9vbFV0aWwuZ2V0SXRlbUJ5UG9vbE5hbWUoY29sbGlkZXJzW2ldLm5vZGUubmFtZSwgdGhpcy5jdWJlUmVkUHJlZmFiLCA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3ViZVJvb3QuYWRkQ2hpbGQoY2xvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsb25lLndvcmxkUG9zaXRpb24gPSBjb2xsaWRlcnNbaV0ubm9kZS53b3JsZFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgY2xvbmUud29ybGRSb3RhdGlvbiA9IGNvbGxpZGVyc1tpXS5ub2RlLndvcmxkUm90YXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgLy/ojrflvpfliJrkvZNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNCb2R5ID0gY2xvbmUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBjQm9keS5zbGVlcCgpO1xyXG4gICAgICAgICAgICAgICAgY0JvZHkud2FrZVVwKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdjNfdC5zZXQoMCwgMCwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgVmVjMy50cmFuc2Zvcm1RdWF0KHYzX3QsIHYzX3QsIGNsb25lLndvcmxkUm90YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY0JvZHkuYXBwbHlGb3JjZSh2M190KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/nlJ/miJDkuIvkuIDkuKrlubPlj7BcclxuICAgICAgICAgICAgdjNfdC5zZXQoMCwgLSh0aGlzLl9mbGFnICsgbGVuKSAqIDgsIDApO1xyXG4gICAgICAgICAgICBmbG9vck5vZGUud29ybGRQb3NpdGlvbiA9IHYzX3Q7XHJcblxyXG4gICAgICAgICAgICAvL+iuvue9rumaj+acuuaXi+i9rFxyXG4gICAgICAgICAgICBRdWF0LmZyb21FdWxlcihxdWF0X3QsIDAsIHJhbmRvbVJhbmdlKC0xODAsIDE4MCksIDApO1xyXG4gICAgICAgICAgICBmbG9vck5vZGUud29ybGRSb3RhdGlvbiA9IHF1YXRfdDtcclxuXHJcbiAgICAgICAgICAgIC8v6K6h566X5b6X5YiGXHJcbiAgICAgICAgICAgIHRoaXMuX2ZsYWcrKztcclxuICAgICAgICAgICAgLy90aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gdGhpcy5fZmxhZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlQYW5lbC5TZXRTY29yZVVJKHRoaXMuX2ZsYWcpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLotoXov4cuLi4uLjExMVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8v6K6+572u6LaF6L+H55qE5Lq6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mbGFnID4gTG9hZFN5cy5JbnN0YW5jZSgpLmhpZ2h0U2NvcmVWYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJQYW5lbC5TZXRTdXJwYXNzVUlJbmZvKHRoaXMuX2ZsYWcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLotoXotoouLi4yMjJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/np7vliqjmn7HlrZBcclxuICAgICAgICBpZiAodGhpcy5mbG9vckZsYWcxLndvcmxkUG9zaXRpb24ueSA+IHRoaXMudGFyZ2V0Tm9kZS53b3JsZFBvc2l0aW9uLnkpIHtcclxuICAgICAgICAgICAgdjNfdC5zZXQodGhpcy5mbG9vckZsYWcxLndvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB2M190LnkgLT0gODtcclxuICAgICAgICAgICAgdGhpcy5mbG9vckZsYWcxLndvcmxkUG9zaXRpb24gPSB2M190O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9mbGFnID0gMDtcclxuICAgICAgICB2M190LnNldCgwLCAtMSwgMCk7XHJcbiAgICAgICAgdGhpcy5mbG9vckZsYWcwLndvcmxkUG9zaXRpb24gPSB2M190O1xyXG4gICAgICAgIHYzX3Quc2V0KDAsIC0zLCAwKTtcclxuICAgICAgICB0aGlzLmZsb29yRmxhZzEud29ybGRQb3NpdGlvbiA9IHYzX3Q7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==