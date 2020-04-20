"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../Model/SkinItemData.ts", "../Model/SkinItem.ts", "../Service/AudioSvc.ts", "../../config/PathCfg.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Node, LabelComponent, ProgressBarComponent, loader, instantiate, SpriteAtlas, PanelRoot, SkinType, SkinItem, AudioSvc, PathCfg, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, ccclass, property, SkinPanel;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      ProgressBarComponent = _cc.ProgressBarComponent;
      loader = _cc.loader;
      instantiate = _cc.instantiate;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ModelSkinItemDataTs) {
      SkinType = _ModelSkinItemDataTs.SkinType;
    }, function (_ModelSkinItemTs) {
      SkinItem = _ModelSkinItemTs.SkinItem;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_configPathCfgTs) {
      PathCfg = _configPathCfgTs.PathCfg;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "f056cbMMwxDpZndKLQZ7+Rm", "SkinPanel"); // begin SkinPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkinPanel", SkinPanel = (_dec = ccclass("SkinPanel"), _dec2 = _decorator.menu("View/SkinPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: ProgressBarComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SkinPanel, _PanelRoot);

        function SkinPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SkinPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SkinPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtGoldVal", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "barProgress", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtBarVal", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "challengeSkinspawnPos", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "goldSkinspawnPos", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "stampSkinspawnPos", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "TrallingSkinspawnPos", _descriptor7, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SkinPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(SkinPanel.prototype), "InitPanel", this).call(this); //请求网络数据

            this.ReqSkinProgressData();
            this.SpawnAllSkinItem(this.resSvc.skinDataLst);
            console.log("SkinPanel Init...");
          }
        }, {
          key: "start",
          value: function start() {}
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("skinPanel 关闭");
          }
          /**
           *请求网络数据（在面板启用时调用）
           */

        }, {
          key: "ReqSkinProgressData",
          value: function ReqSkinProgressData() {
            //发送对应的事件码
            //TODO
            console.log("请求网络数据");
          }
          /**
           * 收到网络数据（这个函数或许不会放在这个，将会放在MainMgr.ts中）
           * 会有类型参数
           */

        }, {
          key: "RspGoldData",
          value: function RspGoldData() {} //MianMgr.ts将会有解析这个数据包代码
          //TODO
          //然后它会调用这个脚本中的SetSkinProgressVal函数
          //并传入对应的值
          // this.SetProgressVal();

          /**
           * 设置金币数目
           */

        }, {
          key: "SetSkinGoldVal",
          value: function SetSkinGoldVal(goldVal, progressVal) {
            //请求网络数据(这个方法不在这里写)
            //设置金币的值
            this.txtGoldVal.string = goldVal.toString(); //设置进度值

            this.SetProgressVal(progressVal);
          }
          /**
           * 设置进度
           */

        }, {
          key: "SetProgressVal",
          value: function SetProgressVal(val) {
            //转化数据
            var targetVal = val / 10; //给进度条赋值

            this.barProgress.progress = targetVal; //给文字赋值

            this.txtBarVal.string = val.toString() + "/8";
          } //#region   分页按钮函数（这些都是重复的函数，后面要重构）

          /**
           * 从一开始生成所有的SkinItem
           * 数据应该是从网络获取，而非本地配置？
           */

        }, {
          key: "SpawnAllSkinItem",
          value: function SpawnAllSkinItem(data) {
            var _this2 = this;

            //如果是挑战，则生成在挑战容器中；如果是金币，则生成在金币容器中；如果是印记，则生成在对应的容器中；如果是拖尾，则生成在拖尾容器中
            //同时绑定对应事件。
            data.forEach(function (element) {
              //获取实例化出来的对象的组件
              var skinItemNode; //实例化，设置父节点
              // this.resSvc.LoadPrefabs(element.prefabUrl,this.spawnPos,skinItemComp);

              loader.loadRes(element.prefabUrl, function (err, prefab) {
                if (err) {
                  console.log("error: while read" + "," + err);
                  return;
                }

                var curNode = instantiate(prefab); //设置父对象

                if (element.skinType == SkinType.ChallengeSkin) {
                  _this2.challengeSkinspawnPos.addChild(curNode);
                } else if (element.skinType == SkinType.GoldSkin) {
                  _this2.goldSkinspawnPos.addChild(curNode);
                } else if (element.skinType == SkinType.StampSkin) {
                  _this2.stampSkinspawnPos.addChild(curNode);
                } else {
                  _this2.TrallingSkinspawnPos.addChild(curNode);
                } //拿到对应的组件


                var curComp = curNode.getComponent(SkinItem); //设置Id

                curComp.id = element.id; //加载图集并设置

                loader.loadRes(PathCfg.Alta_08Test_PATH, SpriteAtlas, function (err, altas) {
                  if (err) {
                    console.log("error while downing" + "," + err);
                    return;
                  }

                  var sp = altas.getSpriteFrame(element.imgUrl);
                  curComp.imgSkin.spriteFrame = sp;
                  console.log("1111");
                }); //绑定监听事件

                curNode.on(Node.EventType.MOUSE_DOWN, _this2.ClickSkinItem, curNode);
                console.log("加载皮肤预制体：" + element.id);
              });
            });
          } //#region  监听事件

          /**
           * 点击SkinItem
           */

        }, {
          key: "ClickSkinItem",
          value: function ClickSkinItem(event) {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到当前点击的物体

            var targetComp = event.target; //获取对应的SkinItem.ts

            var comp = targetComp.getComponent(SkinItem); //判断SkinType,按照类型来处理对应的事件

            if (comp.skinType == SkinType.ChallengeSkin) {
              //如果是挑战皮肤，则装备它？？？
              //替换挑战皮肤？？？
              //这个管理GameSys-->Ball
              //TODO
              console.log("当前点击的类型：挑战；当前的ID： " + comp.id);
            } else if (comp.skinType == SkinType.GoldSkin) {
              //如果是金币皮肤，则装备它？？？
              //替换金币皮肤？？？
              //这个管理GameSys-->Ball
              //TODO
              console.log("当前点击的类型：金币；当前的ID： " + comp.id);
            } else if (comp.skinType == SkinType.StampSkin) {
              //如果是印记，则替换Ball.ts印记.所以这个json文件少了印记预制体的路径
              //把印记预制体路径传递给GameSys.ts
              //在那把预制体给Ball.ts印记
              //TODO
              console.log("当前点击的类型：印记；当前的ID： " + comp.id);
            } else {
              //如果是拖尾，则替换Ball.ts拖尾特效。拖尾特效可能有两个，所以缺少拖尾特效预制体的路径
              //把特效预制体路径传递给GameSys.ts
              //在那把预制体给Ball.ts印记
              //TODO
              console.log("当前点击的类型：拖尾；当前的ID： " + comp.id);
            }
          } //#endregion
          //#region  按钮点击事件

          /**
           * 显示挑战皮肤
           */

        }, {
          key: "ClickChallengeSkinBtn",
          value: function ClickChallengeSkinBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.challengeSkinspawnPos.active = true;
            this.goldSkinspawnPos.active = false;
            this.stampSkinspawnPos.active = false;
            this.TrallingSkinspawnPos.active = false;
            console.log("点击挑战按钮...");
          }
          /**
           * 显示金币皮肤
           */

        }, {
          key: "ClcikGoldSkinBtn",
          value: function ClcikGoldSkinBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.challengeSkinspawnPos.active = false;
            this.goldSkinspawnPos.active = true;
            this.stampSkinspawnPos.active = false;
            this.TrallingSkinspawnPos.active = false;
            console.log("点击金币按钮...");
          }
          /**
           * 显示印记
           */

        }, {
          key: "ClickStampSkinBtn",
          value: function ClickStampSkinBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.challengeSkinspawnPos.active = false;
            this.goldSkinspawnPos.active = false;
            this.stampSkinspawnPos.active = true;
            this.TrallingSkinspawnPos.active = false;
            console.log("点击印记按钮...");
          }
          /**
           * 显示拖尾
           */

        }, {
          key: "ClickTrailingSkinBtn",
          value: function ClickTrailingSkinBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.challengeSkinspawnPos.active = false;
            this.goldSkinspawnPos.active = false;
            this.stampSkinspawnPos.active = false;
            this.TrallingSkinspawnPos.active = true;
            console.log("点击拖尾按钮...");
          } //#endregion

        }]);
        return SkinPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtGoldVal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "barProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtBarVal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "challengeSkinspawnPos", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "goldSkinspawnPos", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "stampSkinspawnPos", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "TrallingSkinspawnPos", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end SkinPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L1NraW5QYW5lbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIkxhYmVsQ29tcG9uZW50IiwiUHJvZ3Jlc3NCYXJDb21wb25lbnQiLCJsb2FkZXIiLCJpbnN0YW50aWF0ZSIsIlNwcml0ZUF0bGFzIiwiUGFuZWxSb290IiwiU2tpblR5cGUiLCJTa2luSXRlbSIsIkF1ZGlvU3ZjIiwiUGF0aENmZyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNraW5QYW5lbCIsIm1lbnUiLCJ0eXBlIiwiUmVxU2tpblByb2dyZXNzRGF0YSIsIlNwYXduQWxsU2tpbkl0ZW0iLCJyZXNTdmMiLCJza2luRGF0YUxzdCIsImNvbnNvbGUiLCJsb2ciLCJJbnN0YW5jZSIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsImdvbGRWYWwiLCJwcm9ncmVzc1ZhbCIsInR4dEdvbGRWYWwiLCJzdHJpbmciLCJ0b1N0cmluZyIsIlNldFByb2dyZXNzVmFsIiwidmFsIiwidGFyZ2V0VmFsIiwiYmFyUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInR4dEJhclZhbCIsImRhdGEiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNraW5JdGVtTm9kZSIsImxvYWRSZXMiLCJwcmVmYWJVcmwiLCJlcnIiLCJwcmVmYWIiLCJjdXJOb2RlIiwic2tpblR5cGUiLCJDaGFsbGVuZ2VTa2luIiwiY2hhbGxlbmdlU2tpbnNwYXduUG9zIiwiYWRkQ2hpbGQiLCJHb2xkU2tpbiIsImdvbGRTa2luc3Bhd25Qb3MiLCJTdGFtcFNraW4iLCJzdGFtcFNraW5zcGF3blBvcyIsIlRyYWxsaW5nU2tpbnNwYXduUG9zIiwiY3VyQ29tcCIsImdldENvbXBvbmVudCIsImlkIiwiQWx0YV8wOFRlc3RfUEFUSCIsImFsdGFzIiwic3AiLCJnZXRTcHJpdGVGcmFtZSIsImltZ1VybCIsImltZ1NraW4iLCJzcHJpdGVGcmFtZSIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsIkNsaWNrU2tpbkl0ZW0iLCJldmVudCIsInRhcmdldENvbXAiLCJ0YXJnZXQiLCJjb21wIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBNENDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBNENDLE1BQUFBLFcsT0FBQUEsVzs7QUFDN0lDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ2NDLE1BQUFBLFEsd0JBQUFBLFE7O0FBQ2RDLE1BQUFBLFEsb0JBQUFBLFE7O0FBQ0FDLE1BQUFBLFEsc0JBQUFBLFE7O0FBQ0FDLE1BQUFBLE8sb0JBQUFBLE87OztnRkFIZ0U7OztBQUlqRUMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUTs7MkJBS0pDLFMsV0FGWkYsT0FBTyxDQUFDLFdBQUQsQyxVQUNQWixVQUFVLENBQUNlLElBQVgsQ0FBZ0IsZ0JBQWhCLEMsVUFHSUYsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFHUlcsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWI7QUFBUixPQUFELEMsVUFHUlUsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWQ7QUFBUixPQUFELEMsVUFHUlcsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEMsVUFHUlksUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRWY7QUFBUixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdHO0FBQ1IsNkdBRFEsQ0FFUjs7QUFDQSxpQkFBS2dCLG1CQUFMO0FBQ0EsaUJBQUtDLGdCQUFMLENBQXNCLEtBQUtDLE1BQUwsQ0FBWUMsV0FBbEM7QUFFQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDSDs7O2tDQUVPLENBRVA7QUFFRDs7Ozs7OzBDQUd1QjtBQUNuQjtBQUNBWixZQUFBQSxRQUFRLENBQUNhLFFBQVQsR0FBb0JDLFdBQXBCLEdBRm1CLENBR25COztBQUNBLGlCQUFLQyxhQUFMLENBQW1CLEtBQW5CO0FBQ0FKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDSDtBQUVEOzs7Ozs7Z0RBRzZCO0FBQ3pCO0FBQ0E7QUFFQUQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNIO0FBRUQ7Ozs7Ozs7d0NBSXFCLENBT3BCLEMsQ0FORztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdKOzs7Ozs7eUNBR3NCSSxPLEVBQWlCQyxXLEVBQXFCO0FBQ3hEO0FBRUE7QUFDQSxpQkFBS0MsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJILE9BQU8sQ0FBQ0ksUUFBUixFQUF6QixDQUp3RCxDQUt4RDs7QUFDQSxpQkFBS0MsY0FBTCxDQUFvQkosV0FBcEI7QUFDSDtBQUVEOzs7Ozs7eUNBR3NCSyxHLEVBQWE7QUFDL0I7QUFDQSxnQkFBSUMsU0FBaUIsR0FBR0QsR0FBRyxHQUFHLEVBQTlCLENBRitCLENBRy9COztBQUNBLGlCQUFLRSxXQUFMLENBQWlCQyxRQUFqQixHQUE0QkYsU0FBNUIsQ0FKK0IsQ0FLL0I7O0FBQ0EsaUJBQUtHLFNBQUwsQ0FBZVAsTUFBZixHQUF3QkcsR0FBRyxDQUFDRixRQUFKLEtBQWlCLElBQXpDO0FBQ0gsVyxDQUVEOztBQUVBOzs7Ozs7OzJDQUl3Qk8sSSxFQUFzQjtBQUFBOztBQUMxQztBQUNBO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLFVBQUFDLE9BQU8sRUFBSTtBQUNwQjtBQUNBLGtCQUFJQyxZQUFKLENBRm9CLENBR3BCO0FBQ0E7O0FBQ0FwQyxjQUFBQSxNQUFNLENBQUNxQyxPQUFQLENBQWVGLE9BQU8sQ0FBQ0csU0FBdkIsRUFBa0MsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQy9DLG9CQUFJRCxHQUFKLEVBQVM7QUFDTHRCLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0IsR0FBdEIsR0FBNEJxQixHQUF4QztBQUNBO0FBQ0g7O0FBRUQsb0JBQUlFLE9BQU8sR0FBR3hDLFdBQVcsQ0FBQ3VDLE1BQUQsQ0FBekIsQ0FOK0MsQ0FPL0M7O0FBQ0Esb0JBQUlMLE9BQU8sQ0FBQ08sUUFBUixJQUFvQnRDLFFBQVEsQ0FBQ3VDLGFBQWpDLEVBQWdEO0FBQzVDLGtCQUFBLE1BQUksQ0FBQ0MscUJBQUwsQ0FBMkJDLFFBQTNCLENBQW9DSixPQUFwQztBQUNILGlCQUZELE1BR0ssSUFBSU4sT0FBTyxDQUFDTyxRQUFSLElBQW9CdEMsUUFBUSxDQUFDMEMsUUFBakMsRUFBMkM7QUFDNUMsa0JBQUEsTUFBSSxDQUFDQyxnQkFBTCxDQUFzQkYsUUFBdEIsQ0FBK0JKLE9BQS9CO0FBQ0gsaUJBRkksTUFHQSxJQUFJTixPQUFPLENBQUNPLFFBQVIsSUFBb0J0QyxRQUFRLENBQUM0QyxTQUFqQyxFQUE0QztBQUM3QyxrQkFBQSxNQUFJLENBQUNDLGlCQUFMLENBQXVCSixRQUF2QixDQUFnQ0osT0FBaEM7QUFDSCxpQkFGSSxNQUdBO0FBQ0Qsa0JBQUEsTUFBSSxDQUFDUyxvQkFBTCxDQUEwQkwsUUFBMUIsQ0FBbUNKLE9BQW5DO0FBQ0gsaUJBbkI4QyxDQXFCL0M7OztBQUNBLG9CQUFJVSxPQUFpQixHQUFHVixPQUFPLENBQUNXLFlBQVIsQ0FBcUIvQyxRQUFyQixDQUF4QixDQXRCK0MsQ0F1Qi9DOztBQUNBOEMsZ0JBQUFBLE9BQU8sQ0FBQ0UsRUFBUixHQUFhbEIsT0FBTyxDQUFDa0IsRUFBckIsQ0F4QitDLENBMEIvQzs7QUFDQXJELGdCQUFBQSxNQUFNLENBQUNxQyxPQUFQLENBQWU5QixPQUFPLENBQUMrQyxnQkFBdkIsRUFBeUNwRCxXQUF6QyxFQUFzRCxVQUFDcUMsR0FBRCxFQUFXZ0IsS0FBWCxFQUFxQjtBQUN2RSxzQkFBSWhCLEdBQUosRUFBUztBQUNMdEIsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUF3QixHQUF4QixHQUE4QnFCLEdBQTFDO0FBQ0E7QUFDSDs7QUFDRCxzQkFBSWlCLEVBQWUsR0FBR0QsS0FBSyxDQUFDRSxjQUFOLENBQXFCdEIsT0FBTyxDQUFDdUIsTUFBN0IsQ0FBdEI7QUFDQVAsa0JBQUFBLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQkMsV0FBaEIsR0FBOEJKLEVBQTlCO0FBQ0F2QyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILGlCQVJELEVBM0IrQyxDQXFDL0M7O0FBQ0F1QixnQkFBQUEsT0FBTyxDQUFDb0IsRUFBUixDQUFXaEUsSUFBSSxDQUFDaUUsU0FBTCxDQUFlQyxVQUExQixFQUFzQyxNQUFJLENBQUNDLGFBQTNDLEVBQTBEdkIsT0FBMUQ7QUFDQXhCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhaUIsT0FBTyxDQUFDa0IsRUFBakM7QUFDSCxlQXhDRDtBQXlDSCxhQTlDRDtBQStDSCxXLENBRUQ7O0FBRUE7Ozs7Ozt3Q0FHcUJZLEssRUFBbUI7QUFDcEM7QUFDQTNELFlBQUFBLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQkMsV0FBcEIsR0FGb0MsQ0FJcEM7O0FBQ0EsZ0JBQUk4QyxVQUFnQixHQUFHRCxLQUFLLENBQUNFLE1BQTdCLENBTG9DLENBTXBDOztBQUNBLGdCQUFJQyxJQUFjLEdBQUdGLFVBQVUsQ0FBQ2QsWUFBWCxDQUF3Qi9DLFFBQXhCLENBQXJCLENBUG9DLENBUXBDOztBQUNBLGdCQUFJK0QsSUFBSSxDQUFDMUIsUUFBTCxJQUFpQnRDLFFBQVEsQ0FBQ3VDLGFBQTlCLEVBQTZDO0FBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0ExQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBdUJrRCxJQUFJLENBQUNmLEVBQXhDO0FBQ0gsYUFMRCxNQU1LLElBQUllLElBQUksQ0FBQzFCLFFBQUwsSUFBaUJ0QyxRQUFRLENBQUMwQyxRQUE5QixFQUF3QztBQUFDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBN0IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXVCa0QsSUFBSSxDQUFDZixFQUF4QztBQUNILGFBTEksTUFNQSxJQUFJZSxJQUFJLENBQUMxQixRQUFMLElBQWlCdEMsUUFBUSxDQUFDNEMsU0FBOUIsRUFBeUM7QUFBQztBQUMzQztBQUNBO0FBQ0E7QUFDQS9CLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUF1QmtELElBQUksQ0FBQ2YsRUFBeEM7QUFDSCxhQUxJLE1BTUE7QUFBQztBQUNGO0FBQ0E7QUFDQTtBQUVBcEMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXVCa0QsSUFBSSxDQUFDZixFQUF4QztBQUNIO0FBQ0osVyxDQUVEO0FBRUE7O0FBRUE7Ozs7OztrREFHK0I7QUFDM0I7QUFDQS9DLFlBQUFBLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQkMsV0FBcEI7QUFFQSxpQkFBS3dCLHFCQUFMLENBQTJCeUIsTUFBM0IsR0FBb0MsSUFBcEM7QUFDQSxpQkFBS3RCLGdCQUFMLENBQXNCc0IsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxpQkFBS3BCLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0MsS0FBaEM7QUFDQSxpQkFBS25CLG9CQUFMLENBQTBCbUIsTUFBMUIsR0FBbUMsS0FBbkM7QUFDQXBELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUVEOzs7Ozs7NkNBRzBCO0FBQ3RCO0FBQ0FaLFlBQUFBLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQkMsV0FBcEI7QUFFQSxpQkFBS3dCLHFCQUFMLENBQTJCeUIsTUFBM0IsR0FBb0MsS0FBcEM7QUFDQSxpQkFBS3RCLGdCQUFMLENBQXNCc0IsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQSxpQkFBS3BCLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0MsS0FBaEM7QUFDQSxpQkFBS25CLG9CQUFMLENBQTBCbUIsTUFBMUIsR0FBbUMsS0FBbkM7QUFDQXBELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUVEOzs7Ozs7OENBRzJCO0FBQ3ZCO0FBQ0FaLFlBQUFBLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQkMsV0FBcEI7QUFFQSxpQkFBS3dCLHFCQUFMLENBQTJCeUIsTUFBM0IsR0FBb0MsS0FBcEM7QUFDQSxpQkFBS3RCLGdCQUFMLENBQXNCc0IsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxpQkFBS3BCLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0MsSUFBaEM7QUFDQSxpQkFBS25CLG9CQUFMLENBQTBCbUIsTUFBMUIsR0FBbUMsS0FBbkM7QUFFQXBELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUVEOzs7Ozs7aURBRzhCO0FBQzFCO0FBQ0FaLFlBQUFBLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQkMsV0FBcEI7QUFFQSxpQkFBS3dCLHFCQUFMLENBQTJCeUIsTUFBM0IsR0FBb0MsS0FBcEM7QUFDQSxpQkFBS3RCLGdCQUFMLENBQXNCc0IsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxpQkFBS3BCLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0MsS0FBaEM7QUFDQSxpQkFBS25CLG9CQUFMLENBQTBCbUIsTUFBMUIsR0FBbUMsSUFBbkM7QUFFQXBELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSCxXLENBRUQ7Ozs7UUEvUDJCZixTOzs7OztpQkFHUyxJOzs7Ozs7O2lCQUdPLEk7Ozs7Ozs7aUJBR1IsSTs7Ozs7OztpQkFHRSxJOzs7Ozs7O2lCQUdMLEk7Ozs7Ozs7aUJBR0MsSTs7Ozs7OztpQkFHRyxJOzs7O29CQTlCdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBQcm9ncmVzc0JhckNvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIGxvYWRlciwgaW5zdGFudGlhdGUsIFNwcml0ZUZyYW1lLCBFdmVudE1vdXNlLCBFbnVtLCBTcHJpdGVBdGxhcyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBQYW5lbFJvb3QgfSBmcm9tIFwiLi4vUm9vdC9QYW5lbFJvb3RcIjtcclxuaW1wb3J0IHsgU2tpbkl0ZW1EYXRhLCBTa2luVHlwZSB9IGZyb20gXCIuLi9Nb2RlbC9Ta2luSXRlbURhdGFcIjtcclxuaW1wb3J0IHsgU2tpbkl0ZW0gfSBmcm9tIFwiLi4vTW9kZWwvU2tpbkl0ZW1cIjtcclxuaW1wb3J0IHsgQXVkaW9TdmMgfSBmcm9tIFwiLi4vU2VydmljZS9BdWRpb1N2Y1wiO1xyXG5pbXBvcnQgeyBQYXRoQ2ZnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9QYXRoQ2ZnXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5cclxuQGNjY2xhc3MoXCJTa2luUGFuZWxcIilcclxuQF9kZWNvcmF0b3IubWVudShcIlZpZXcvU2tpblBhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBTa2luUGFuZWwgZXh0ZW5kcyBQYW5lbFJvb3Qge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExhYmVsQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgdHh0R29sZFZhbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByb2dyZXNzQmFyQ29tcG9uZW50IH0pXHJcbiAgICBwdWJsaWMgYmFyUHJvZ3Jlc3M6IFByb2dyZXNzQmFyQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBMYWJlbENvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIHR4dEJhclZhbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBjaGFsbGVuZ2VTa2luc3Bhd25Qb3M6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBnb2xkU2tpbnNwYXduUG9zOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBOb2RlIH0pXHJcbiAgICBwdWJsaWMgc3RhbXBTa2luc3Bhd25Qb3M6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBUcmFsbGluZ1NraW5zcGF3blBvczogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN1cGVyLkluaXRQYW5lbCgpO1xyXG4gICAgICAgIC8v6K+35rGC572R57uc5pWw5o2uXHJcbiAgICAgICAgdGhpcy5SZXFTa2luUHJvZ3Jlc3NEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5TcGF3bkFsbFNraW5JdGVtKHRoaXMucmVzU3ZjLnNraW5EYXRhTHN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTa2luUGFuZWwgSW5pdC4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63mjInpkq5cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrQ2xvc2VCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgICAgLy9zdXBlci5DbGlja0Nsb3NlQnRuKCk7XHJcbiAgICAgICAgdGhpcy5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNraW5QYW5lbCDlhbPpl61cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuivt+axgue9kee7nOaVsOaNru+8iOWcqOmdouadv+WQr+eUqOaXtuiwg+eUqO+8iVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVxU2tpblByb2dyZXNzRGF0YSgpIHtcclxuICAgICAgICAvL+WPkemAgeWvueW6lOeahOS6i+S7tueggVxyXG4gICAgICAgIC8vVE9ET1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axgue9kee7nOaVsOaNrlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaUtuWIsOe9kee7nOaVsOaNru+8iOi/meS4quWHveaVsOaIluiuuOS4jeS8muaUvuWcqOi/meS4qu+8jOWwhuS8muaUvuWcqE1haW5NZ3IudHPkuK3vvIlcclxuICAgICAqIOS8muacieexu+Wei+WPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUnNwR29sZERhdGEoKSB7XHJcbiAgICAgICAgLy9NaWFuTWdyLnRz5bCG5Lya5pyJ6Kej5p6Q6L+Z5Liq5pWw5o2u5YyF5Luj56CBXHJcbiAgICAgICAgLy9UT0RPXHJcblxyXG4gICAgICAgIC8v54S25ZCO5a6D5Lya6LCD55So6L+Z5Liq6ISa5pys5Lit55qEU2V0U2tpblByb2dyZXNzVmFs5Ye95pWwXHJcbiAgICAgICAgLy/lubbkvKDlhaXlr7nlupTnmoTlgLxcclxuICAgICAgICAvLyB0aGlzLlNldFByb2dyZXNzVmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ph5HluIHmlbDnm65cclxuICAgICAqL1xyXG4gICAgcHVibGljIFNldFNraW5Hb2xkVmFsKGdvbGRWYWw6IG51bWJlciwgcHJvZ3Jlc3NWYWw6IG51bWJlcikge1xyXG4gICAgICAgIC8v6K+35rGC572R57uc5pWw5o2uKOi/meS4quaWueazleS4jeWcqOi/memHjOWGmSlcclxuXHJcbiAgICAgICAgLy/orr7nva7ph5HluIHnmoTlgLxcclxuICAgICAgICB0aGlzLnR4dEdvbGRWYWwuc3RyaW5nID0gZ29sZFZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIC8v6K6+572u6L+b5bqm5YC8XHJcbiAgICAgICAgdGhpcy5TZXRQcm9ncmVzc1ZhbChwcm9ncmVzc1ZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7ov5vluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNldFByb2dyZXNzVmFsKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy/ovazljJbmlbDmja5cclxuICAgICAgICBsZXQgdGFyZ2V0VmFsOiBudW1iZXIgPSB2YWwgLyAxMDtcclxuICAgICAgICAvL+e7mei/m+W6puadoei1i+WAvFxyXG4gICAgICAgIHRoaXMuYmFyUHJvZ3Jlc3MucHJvZ3Jlc3MgPSB0YXJnZXRWYWw7XHJcbiAgICAgICAgLy/nu5nmloflrZfotYvlgLxcclxuICAgICAgICB0aGlzLnR4dEJhclZhbC5zdHJpbmcgPSB2YWwudG9TdHJpbmcoKSArIFwiLzhcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24gICDliIbpobXmjInpkq7lh73mlbDvvIjov5nkupvpg73mmK/ph43lpI3nmoTlh73mlbDvvIzlkI7pnaLopoHph43mnoTvvIlcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7juS4gOW8gOWni+eUn+aIkOaJgOacieeahFNraW5JdGVtXHJcbiAgICAgKiDmlbDmja7lupTor6XmmK/ku47nvZHnu5zojrflj5bvvIzogIzpnZ7mnKzlnLDphY3nva7vvJ9cclxuICAgICAqL1xyXG4gICAgcHVibGljIFNwYXduQWxsU2tpbkl0ZW0oZGF0YTogU2tpbkl0ZW1EYXRhW10pIHtcclxuICAgICAgICAvL+WmguaenOaYr+aMkeaImO+8jOWImeeUn+aIkOWcqOaMkeaImOWuueWZqOS4re+8m+WmguaenOaYr+mHkeW4ge+8jOWImeeUn+aIkOWcqOmHkeW4geWuueWZqOS4re+8m+WmguaenOaYr+WNsOiusO+8jOWImeeUn+aIkOWcqOWvueW6lOeahOWuueWZqOS4re+8m+WmguaenOaYr+aLluWwvu+8jOWImeeUn+aIkOWcqOaLluWwvuWuueWZqOS4rVxyXG4gICAgICAgIC8v5ZCM5pe257uR5a6a5a+55bqU5LqL5Lu244CCXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvL+iOt+WPluWunuS+i+WMluWHuuadpeeahOWvueixoeeahOe7hOS7tlxyXG4gICAgICAgICAgICBsZXQgc2tpbkl0ZW1Ob2RlOiBOb2RlO1xyXG4gICAgICAgICAgICAvL+WunuS+i+WMlu+8jOiuvue9rueItuiKgueCuVxyXG4gICAgICAgICAgICAvLyB0aGlzLnJlc1N2Yy5Mb2FkUHJlZmFicyhlbGVtZW50LnByZWZhYlVybCx0aGlzLnNwYXduUG9zLHNraW5JdGVtQ29tcCk7XHJcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKGVsZW1lbnQucHJlZmFiVXJsLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiB3aGlsZSByZWFkXCIgKyBcIixcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJOb2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIC8v6K6+572u54i25a+56LGhXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5za2luVHlwZSA9PSBTa2luVHlwZS5DaGFsbGVuZ2VTa2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFsbGVuZ2VTa2luc3Bhd25Qb3MuYWRkQ2hpbGQoY3VyTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LnNraW5UeXBlID09IFNraW5UeXBlLkdvbGRTa2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb2xkU2tpbnNwYXduUG9zLmFkZENoaWxkKGN1ck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5za2luVHlwZSA9PSBTa2luVHlwZS5TdGFtcFNraW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YW1wU2tpbnNwYXduUG9zLmFkZENoaWxkKGN1ck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UcmFsbGluZ1NraW5zcGF3blBvcy5hZGRDaGlsZChjdXJOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+aLv+WIsOWvueW6lOeahOe7hOS7tlxyXG4gICAgICAgICAgICAgICAgbGV0IGN1ckNvbXA6IFNraW5JdGVtID0gY3VyTm9kZS5nZXRDb21wb25lbnQoU2tpbkl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy/orr7nva5JZFxyXG4gICAgICAgICAgICAgICAgY3VyQ29tcC5pZCA9IGVsZW1lbnQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lm77pm4blubborr7nva5cclxuICAgICAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKFBhdGhDZmcuQWx0YV8wOFRlc3RfUEFUSCwgU3ByaXRlQXRsYXMsIChlcnI6IGFueSwgYWx0YXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgZG93bmluZ1wiICsgXCIsXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcDogU3ByaXRlRnJhbWUgPSBhbHRhcy5nZXRTcHJpdGVGcmFtZShlbGVtZW50LmltZ1VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyQ29tcC5pbWdTa2luLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMTExXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+e7keWumuebkeWQrOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgY3VyTm9kZS5vbihOb2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLkNsaWNrU2tpbkl0ZW0sIGN1ck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3nmq7ogqTpooTliLbkvZPvvJpcIiArIGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI3JlZ2lvbiAg55uR5ZCs5LqL5Lu2XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog54K55Ye7U2tpbkl0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU2tpbkl0ZW0oZXZlbnQ6IEV2ZW50TW91c2UpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuXHJcbiAgICAgICAgLy/mi7/liLDlvZPliY3ngrnlh7vnmoTniankvZNcclxuICAgICAgICBsZXQgdGFyZ2V0Q29tcDogTm9kZSA9IGV2ZW50LnRhcmdldCBhcyBOb2RlO1xyXG4gICAgICAgIC8v6I635Y+W5a+55bqU55qEU2tpbkl0ZW0udHNcclxuICAgICAgICBsZXQgY29tcDogU2tpbkl0ZW0gPSB0YXJnZXRDb21wLmdldENvbXBvbmVudChTa2luSXRlbSk7XHJcbiAgICAgICAgLy/liKTmlq1Ta2luVHlwZSzmjInnhafnsbvlnovmnaXlpITnkIblr7nlupTnmoTkuovku7ZcclxuICAgICAgICBpZiAoY29tcC5za2luVHlwZSA9PSBTa2luVHlwZS5DaGFsbGVuZ2VTa2luKSB7Ly/lpoLmnpzmmK/mjJHmiJjnmq7ogqTvvIzliJnoo4XlpIflroPvvJ/vvJ/vvJ9cclxuICAgICAgICAgICAgLy/mm7/mjaLmjJHmiJjnmq7ogqTvvJ/vvJ/vvJ9cclxuICAgICAgICAgICAgLy/ov5nkuKrnrqHnkIZHYW1lU3lzLS0+QmFsbFxyXG4gICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3ngrnlh7vnmoTnsbvlnovvvJrmjJHmiJjvvJvlvZPliY3nmoRJRO+8miBcIiArIGNvbXAuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wLnNraW5UeXBlID09IFNraW5UeXBlLkdvbGRTa2luKSB7Ly/lpoLmnpzmmK/ph5HluIHnmq7ogqTvvIzliJnoo4XlpIflroPvvJ/vvJ/vvJ9cclxuICAgICAgICAgICAgLy/mm7/mjaLph5HluIHnmq7ogqTvvJ/vvJ/vvJ9cclxuICAgICAgICAgICAgLy/ov5nkuKrnrqHnkIZHYW1lU3lzLS0+QmFsbFxyXG4gICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3ngrnlh7vnmoTnsbvlnovvvJrph5HluIHvvJvlvZPliY3nmoRJRO+8miBcIiArIGNvbXAuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb21wLnNraW5UeXBlID09IFNraW5UeXBlLlN0YW1wU2tpbikgey8v5aaC5p6c5piv5Y2w6K6w77yM5YiZ5pu/5o2iQmFsbC50c+WNsOiusC7miYDku6Xov5nkuKpqc29u5paH5Lu25bCR5LqG5Y2w6K6w6aKE5Yi25L2T55qE6Lev5b6EXHJcbiAgICAgICAgICAgIC8v5oqK5Y2w6K6w6aKE5Yi25L2T6Lev5b6E5Lyg6YCS57uZR2FtZVN5cy50c1xyXG4gICAgICAgICAgICAvL+WcqOmCo+aKiumihOWItuS9k+e7mUJhbGwudHPljbDorrBcclxuICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN54K55Ye755qE57G75Z6L77ya5Y2w6K6w77yb5b2T5YmN55qESUTvvJogXCIgKyBjb21wLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7Ly/lpoLmnpzmmK/mi5blsL7vvIzliJnmm7/mjaJCYWxsLnRz5ouW5bC+54m55pWI44CC5ouW5bC+54m55pWI5Y+v6IO95pyJ5Lik5Liq77yM5omA5Lul57y65bCR5ouW5bC+54m55pWI6aKE5Yi25L2T55qE6Lev5b6EXHJcbiAgICAgICAgICAgIC8v5oqK54m55pWI6aKE5Yi25L2T6Lev5b6E5Lyg6YCS57uZR2FtZVN5cy50c1xyXG4gICAgICAgICAgICAvL+WcqOmCo+aKiumihOWItuS9k+e7mUJhbGwudHPljbDorrBcclxuICAgICAgICAgICAgLy9UT0RPXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeCueWHu+eahOexu+Wei++8muaLluWwvu+8m+W9k+WJjeeahElE77yaIFwiICsgY29tcC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg5oyJ6ZKu54K55Ye75LqL5Lu2XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmjJHmiJjnmq7ogqRcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrQ2hhbGxlbmdlU2tpbkJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFsbGVuZ2VTa2luc3Bhd25Qb3MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdvbGRTa2luc3Bhd25Qb3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFtcFNraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRyYWxsaW5nU2tpbnNwYXduUG9zLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75oyR5oiY5oyJ6ZKuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S66YeR5biB55qu6IKkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGNpa0dvbGRTa2luQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYWxsZW5nZVNraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvbGRTa2luc3Bhd25Qb3MuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YW1wU2tpbnNwYXduUG9zLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuVHJhbGxpbmdTa2luc3Bhd25Qb3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vph5HluIHmjInpkq4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrljbDorrBcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrU3RhbXBTa2luQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYWxsZW5nZVNraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvbGRTa2luc3Bhd25Qb3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFtcFNraW5zcGF3blBvcy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5UcmFsbGluZ1NraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vljbDorrDmjInpkq4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmi5blsL5cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrVHJhaWxpbmdTa2luQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYWxsZW5nZVNraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvbGRTa2luc3Bhd25Qb3MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFtcFNraW5zcGF3blBvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRyYWxsaW5nU2tpbnNwYXduUG9zLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75ouW5bC+5oyJ6ZKuLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxufVxyXG4iXX0=