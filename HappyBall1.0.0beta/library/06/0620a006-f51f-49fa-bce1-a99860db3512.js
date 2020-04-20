"use strict";

System.register(["cc", "../Root/GameRoot.ts", "../../config/PathCfg.ts", "../Model/SkinItemData.ts", "../Model/PlayerData.ts", "../Model/TiwnRankListData.ts", "../Model/RelayRankListData.ts", "../Model/MoreGameData.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, loader, GameRoot, PathCfg, SkinItemData, SkinType, PlayerData, TiwnRankListData, RelayRankListData, MoreGameData, _dec, _class, _class2, _temp, ccclass, property, ResSvc;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      loader = _cc.loader;
    }, function (_RootGameRootTs) {
      GameRoot = _RootGameRootTs.GameRoot;
    }, function (_configPathCfgTs) {
      PathCfg = _configPathCfgTs.PathCfg;
    }, function (_ModelSkinItemDataTs) {
      SkinItemData = _ModelSkinItemDataTs.SkinItemData;
      SkinType = _ModelSkinItemDataTs.SkinType;
    }, function (_ModelPlayerDataTs) {
      PlayerData = _ModelPlayerDataTs.PlayerData;
    }, function (_ModelTiwnRankListDataTs) {
      TiwnRankListData = _ModelTiwnRankListDataTs.TiwnRankListData;
    }, function (_ModelRelayRankListDataTs) {
      RelayRankListData = _ModelRelayRankListDataTs.RelayRankListData;
    }, function (_ModelMoreGameDataTs) {
      MoreGameData = _ModelMoreGameDataTs.MoreGameData;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "0620aAG9R9J+rzhqZhg2zUS", "ResSvc"); // begin ResSvc


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ResSvc", ResSvc = (_dec = ccclass("ResSvc"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ResSvc, _Component);

        function ResSvc() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ResSvc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ResSvc)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.moreGameDataLst = [];
          _this.skinDataLst = [];
          _this.tiwnRankDataLst = [];
          _this.relayRankDataLst = [];
          return _this;
        }

        babelHelpers.createClass(ResSvc, [{
          key: "InitSvc",
          //#endregion
          value: function InitSvc() {
            ResSvc.instance = this; //Instance = this;
            //加载资源函数初始化...

            this.InitMoreGameDataCfg(PathCfg.MOREGameCFG_PATH);
            this.InitSkinCfg(PathCfg.SIKNCFG_PATH);
            this.InitPlayerDataCfg(PathCfg.PALAYERDATACFG_PATH); //this.InitTiwnRankDataCfg(PathCfg.TIWNRANKCFG_PATH);
            //this.InitRelayRankDataCfg(PathCfg.RELAYRANKCFG_PATH);

            console.log("Init ResMgr...");
          }
          /**
           *异步加载场景
           */

        }, {
          key: "AsynceLoadScene",
          value: function AsynceLoadScene(sceneName, loaded) {
            //设置LoadPanel的显示
            GameRoot.Instance().loadPanel.SetPanelState();
            loaded(); //设置场景加载进度值

            /* loader.onProgress = function (cp, tt) {
                console.log("cp/tt:" + cp / tt);//能打印出来加载的进度变化
                let val: number = cp / tt;
                GameRoot.Instance().loadPanel.SetProgress(val);
              }.bind(this);
              this.scheduleOnce(function () {
               //director.loadScene("Game", null, null);
            }, 2);
            //director.loadScene("Game", null, null);*/

            cc.log("加载场景中...");
          } //#region  更多游戏数据配置

          /**
           * 更多游戏数据数组
           */

        }, {
          key: "InitMoreGameDataCfg",

          /**
           * 初始化更多游戏数据
           */
          value: function InitMoreGameDataCfg(url) {
            //持有全局变量
            var self = this;
            /*{
                "id": 2,
                "imgIconUrl": "b.spriteFrame",
                "txtDes": "这是第二章图片"
            },*/
            //加载资源

            loader.loadRes(url, function (err, obj) {
              //console.log("延时调用 1");
              if (err) {
                console.log("error while read" + "," + err);
                return;
              } //解析数据


              var allMoreGameData = obj.json;

              for (var i = 0; i < allMoreGameData.length; i++) {
                var currId = allMoreGameData[i].id; //console.log("当前的id:" + currId);

                var currImgIconUrl = allMoreGameData[i].imgIconUrl; //console.log("当前的imgIconUrl:" + currImgIconUrl);

                var currTxtDes = allMoreGameData[i].txtDes; //console.log("当前的txtDes：" + currTxtDes);

                self.moreGameDataLst[i] = new MoreGameData(currId, currImgIconUrl, currTxtDes); //console.log("打印更多游戏数据：" + self.moreGameDataLst[i].id + "  " + self.moreGameDataLst[i].imgIconUrl + "  " + self.moreGameDataLst[i].txtDes);
              }
            });
          } //#endregion
          //#region  皮肤数据配置

          /**
           * 皮肤数据数组
           */

        }, {
          key: "InitSkinCfg",

          /**
           * 解析皮肤数据
           */
          value: function InitSkinCfg(url) {
            var self = this; //加载资源

            loader.loadRes(url, function (err, obj) {
              if (err) {
                console.log("error while read" + "," + err);
                return;
              } //解析数据


              var skinData = obj.json;

              for (var i = 0; i < skinData.length; i++) {
                //当前Id
                var currId = skinData[i].id; //console.log("当前的Id:" + currId);

                var currSkinTypeId = skinData[i].skinType; //console.log("当前皮肤类型Id:" + currSkinTypeId);
                //转换SkinType 

                var currSkinType = void 0; //如果是挑战皮肤

                if (currSkinTypeId == 0) {
                  currSkinType = SkinType.ChallengeSkin;
                } //如果是金币皮肤
                else if (currSkinTypeId == 1) {
                    currSkinType = SkinType.GoldSkin;
                  } //如果是印记-->对应"泥泞图片”
                  else if (currSkinTypeId == 2) {
                      currSkinType = SkinType.StampSkin;
                    } //如果是拖尾-->对应“特效”(ps.特效或许有两个)
                    else {
                        currSkinType = SkinType.TrailingSkin;
                      } //console.log("转换SkinType:" + currSkinType);
                //预制体路径


                var currPrefabUrl = skinData[i].prefabUrl; //console.log("预制体路径：" + currPrefabUrl);
                //图片路径

                var currImgUrl = skinData[i].imgUrl; //console.log("图片路径：" + currImgUrl);
                //构造SkinItemData类数组

                self.skinDataLst[i] = new SkinItemData(currId, currSkinType, currPrefabUrl, currImgUrl); //console.log("构造skinItemData类数组：" + self.skinDataLst[i].id + "  " + self.skinDataLst[i].skinType + "  " + self.skinDataLst[i].prefabUrl + "  " + self.skinDataLst[i].imgUrl + "当前是第{0}个数据：", i + 1);
              }
            });
            console.log("初始化皮肤数据成功...");
          } //#endregion
          //#region  解析PlayerData数据

          /**
           * 当前的玩家数据
           */

        }, {
          key: "InitPlayerDataCfg",

          /**
           * 初始化玩家数据
           */
          value: function InitPlayerDataCfg(url) {
            var self = this; //加载资源

            loader.loadRes(url, function (err, obj) {
              if (err) {
                console.log("error while read" + "," + err);
                return;
              } //解析数据


              var playerData = obj.json; //console.log("当前玩家数据:" + playerData);

              for (var i = 0; i < playerData.length; i++) {
                //玩家姓名
                var currName = playerData[i].name; //console.log("玩家姓名：" + currName);
                //金币数量

                var currCoinVal = playerData[i].CoinVal; //console.log("金币数量：" + currCoinVal);
                //上盘得分

                var currLastScore = playerData[i].lastScore; //console.log("上盘得分：" + currLastScore);
                //这盘得分

                var currScore = playerData[i].currentScore; //console.log("这盘得分：" + currScore);
                //历史最高分

                var currHightestScore = playerData[i].HightestScore; //console.log("历史最高分：" + currHightestScore);
                //钻石数量

                var currDiamondVal = playerData[i].DiamondVal; //console.log("钻石数量：" + currDiamondVal);
                //构造PlayerData类

                self.currPlayerData = new PlayerData(currName, currCoinVal, currLastScore, currScore, currHightestScore, currDiamondVal); //console.log("打印玩家数据：" + self.currPlayerData.name + "  " + self.currPlayerData.lastScore + "  " + self.currPlayerData.currentScore + "  " + self.currPlayerData.HightestScore + "  " + self.currPlayerData.DiamondVal);                
              }
            });
            console.log("初始化玩家数据成功...");
          } //#endregion
          //#region  解析单人排行榜数据

          /**
           * 单人排行榜数据数组
           */

        }, {
          key: "InitTiwnRankDataCfg",

          /**
           * 初始化单人排行榜数据成功
           */
          value: function InitTiwnRankDataCfg(url) {
            var self = this; //加载资源

            loader.loadRes(url, function (err, obj) {
              if (err) {
                console.log("error while read" + "," + err);
                return;
              } //解析数据


              var tiwnRankData = obj.json; //console.log("当前的数据：" + tiwnRankData);

              for (var i = 0; i < tiwnRankData.length; i++) {
                var currId = tiwnRankData[i].id; //console.log("当前的id：" + currId);

                var currImgLogoUrl = tiwnRankData[i].imgLogo; //console.log("当前的imgLogoUrl:" + currImgLogoUrl);

                var currImgIconUrl = tiwnRankData[i].imgIcon; //console.log("当前的imgIconUrl:" + currImgIconUrl);

                var currTxtName = tiwnRankData[i].txtName; //console.log("当前的txtName:" + currTxtName);

                var currTxtScore = tiwnRankData[i].txtScore; //console.log("当前的txtScore：" + currTxtScore);

                self.tiwnRankDataLst[i] = new TiwnRankListData(currId, currImgLogoUrl, currImgIconUrl, currTxtName, currTxtScore);
                console.log("打印单人排行榜：" + self.tiwnRankDataLst[i].id + "  " + self.tiwnRankDataLst[i].imgLogoUrl + "  " + self.tiwnRankDataLst[i].imgIconUrl + "  " + self.tiwnRankDataLst[i].txtName + "  " + self.tiwnRankDataLst[i].txtScore);
              }
            });
            console.log("初始化单人排行榜数据成功...");
          } //#endregion
          //#region  解析接力排行榜数据

          /**
           * 接力排行榜数据数组
           */

        }, {
          key: "InitRelayRankDataCfg",

          /**
           * 初始化接力排行榜数据成功
           */
          value: function InitRelayRankDataCfg(url) {
            var self = this; //加载资源

            loader.loadRes(url, function (err, obj) {
              if (err) {
                console.log("error while read" + "," + err);
                return;
              } //解析数据


              var relayRankData = obj.json; //console.log("当前数据：" + relayRankData);

              for (var i = 0; i < relayRankData.length; i++) {
                var currId = relayRankData[i].id; //console.log("当前的id：" + currId);

                var currImgLogoUrl = relayRankData[i].imgLogo; //console.log("当前的imgLogoUrl:" + currImgLogoUrl);

                var currImgIconUrl = relayRankData[i].imgIcon; //console.log("当前的imgIconUrl:" + currImgIconUrl);

                var currTxtName = relayRankData[i].txtName; //console.log("当前的txtName:" + currTxtName);

                var currTxtScore = relayRankData[i].txtScore; //console.log("当前的txtScore：" + currTxtScore);

                self.relayRankDataLst[i] = new RelayRankListData(currId, currImgLogoUrl, currImgIconUrl, currTxtName, currTxtScore); //console.log("打印接力排行榜：" + self.relayRankDataLst[i].id + "  " + self.relayRankDataLst[i].imgLogoUrl + "  " + self.relayRankDataLst[i].imgIconUrl + "  " + self.relayRankDataLst[i].txtName + "  " + self.relayRankDataLst[i].txtScore);
              }
            });
            console.log("初始化接力排行榜数据成功...");
          } //#endregion

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
          }
        }]);
        return ResSvc;
      }(Component), _class2.instance = null, _temp)) || _class));

      cc._RF.pop(); // end ResSvc

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TZXJ2aWNlL1Jlc1N2Yy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibG9hZGVyIiwiR2FtZVJvb3QiLCJQYXRoQ2ZnIiwiU2tpbkl0ZW1EYXRhIiwiU2tpblR5cGUiLCJQbGF5ZXJEYXRhIiwiVGl3blJhbmtMaXN0RGF0YSIsIlJlbGF5UmFua0xpc3REYXRhIiwiTW9yZUdhbWVEYXRhIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUmVzU3ZjIiwibW9yZUdhbWVEYXRhTHN0Iiwic2tpbkRhdGFMc3QiLCJ0aXduUmFua0RhdGFMc3QiLCJyZWxheVJhbmtEYXRhTHN0IiwiaW5zdGFuY2UiLCJJbml0TW9yZUdhbWVEYXRhQ2ZnIiwiTU9SRUdhbWVDRkdfUEFUSCIsIkluaXRTa2luQ2ZnIiwiU0lLTkNGR19QQVRIIiwiSW5pdFBsYXllckRhdGFDZmciLCJQQUxBWUVSREFUQUNGR19QQVRIIiwiY29uc29sZSIsImxvZyIsInNjZW5lTmFtZSIsImxvYWRlZCIsIkluc3RhbmNlIiwibG9hZFBhbmVsIiwiU2V0UGFuZWxTdGF0ZSIsImNjIiwidXJsIiwic2VsZiIsImxvYWRSZXMiLCJlcnIiLCJvYmoiLCJhbGxNb3JlR2FtZURhdGEiLCJqc29uIiwiaSIsImxlbmd0aCIsImN1cnJJZCIsImlkIiwiY3VyckltZ0ljb25VcmwiLCJpbWdJY29uVXJsIiwiY3VyclR4dERlcyIsInR4dERlcyIsInNraW5EYXRhIiwiY3VyclNraW5UeXBlSWQiLCJza2luVHlwZSIsImN1cnJTa2luVHlwZSIsIkNoYWxsZW5nZVNraW4iLCJHb2xkU2tpbiIsIlN0YW1wU2tpbiIsIlRyYWlsaW5nU2tpbiIsImN1cnJQcmVmYWJVcmwiLCJwcmVmYWJVcmwiLCJjdXJySW1nVXJsIiwiaW1nVXJsIiwicGxheWVyRGF0YSIsImN1cnJOYW1lIiwibmFtZSIsImN1cnJDb2luVmFsIiwiQ29pblZhbCIsImN1cnJMYXN0U2NvcmUiLCJsYXN0U2NvcmUiLCJjdXJyU2NvcmUiLCJjdXJyZW50U2NvcmUiLCJjdXJySGlnaHRlc3RTY29yZSIsIkhpZ2h0ZXN0U2NvcmUiLCJjdXJyRGlhbW9uZFZhbCIsIkRpYW1vbmRWYWwiLCJjdXJyUGxheWVyRGF0YSIsInRpd25SYW5rRGF0YSIsImN1cnJJbWdMb2dvVXJsIiwiaW1nTG9nbyIsImltZ0ljb24iLCJjdXJyVHh0TmFtZSIsInR4dE5hbWUiLCJjdXJyVHh0U2NvcmUiLCJ0eHRTY29yZSIsImltZ0xvZ29VcmwiLCJyZWxheVJhbmtEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBOEJDLE1BQUFBLE0sT0FBQUEsTTs7QUFDMUNDLE1BQUFBLFEsbUJBQUFBLFE7O0FBQ0FDLE1BQUFBLE8sb0JBQUFBLE87O0FBQ0FDLE1BQUFBLFksd0JBQUFBLFk7QUFBY0MsTUFBQUEsUSx3QkFBQUEsUTs7QUFDZEMsTUFBQUEsVSxzQkFBQUEsVTs7QUFDQUMsTUFBQUEsZ0IsNEJBQUFBLGdCOztBQUNBQyxNQUFBQSxpQiw2QkFBQUEsaUI7O0FBQ0FDLE1BQUFBLFksd0JBQUFBLFk7Ozs2RUFMZ0U7OztBQU9qRUMsTUFBQUEsTyxHQUFzQlgsVSxDQUF0QlcsTztBQUFTQyxNQUFBQSxRLEdBQWFaLFUsQ0FBYlksUTs7d0JBR0pDLE0sV0FEWkYsT0FBTyxDQUFDLFFBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcUVHRyxlLEdBQXVDLEU7Z0JBMkN2Q0MsVyxHQUFtQyxFO2dCQXNIbkNDLGUsR0FBMkMsRTtnQkE4QzNDQyxnQixHQUE2QyxFOzs7Ozs7QUE1UHBEO29DQUVpQjtBQUNiSixZQUFBQSxNQUFNLENBQUNLLFFBQVAsR0FBa0IsSUFBbEIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsaUJBQUtDLG1CQUFMLENBQXlCZixPQUFPLENBQUNnQixnQkFBakM7QUFDQSxpQkFBS0MsV0FBTCxDQUFpQmpCLE9BQU8sQ0FB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RCxDQUFiLENBQWlCcUMsT0FBdEMsQ0FMMkMsQ0FNM0M7O0FBQ0Esb0JBQUlDLFdBQVcsR0FBR0ssYUFBYSxDQUFDM0MsQ0FBRCxDQUFiLENBQWlCdUMsT0FBbkMsQ0FQMkMsQ0FRM0M7O0FBQ0Esb0JBQUlDLFlBQVksR0FBR0csYUFBYSxDQUFDM0MsQ0FBRCxDQUFiLENBQWlCeUMsUUFBcEMsQ0FUMkMsQ0FVM0M7O0FBQ0EvQyxnQkFBQUEsSUFBSSxDQUFDakIsZ0JBQUwsQ0FBc0J1QixDQUF0QixJQUEyQixJQUFJL0IsaUJBQUosQ0FBc0JpQyxNQUF0QixFQUE4QmlDLGNBQTlCLEVBQThDL0IsY0FBOUMsRUFBOERrQyxXQUE5RCxFQUEyRUUsWUFBM0UsQ0FBM0IsQ0FYMkMsQ0FhM0M7QUFDSDtBQUNKLGFBekJEO0FBMEJBdkQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxXLENBRUQ7Ozs7QUFqVEE7O0FBQ0E7Ozs7QUFLQTs7O3FDQUdpQztBQUM3QixtQkFBTyxLQUFLUixRQUFaO0FBQ0g7OztRQW5CdUJqQixTLFdBS1RpQixRLEdBQW1CLEk7O29CQWZwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlRnJhbWUsIGxvYWRlciwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgZGlyZWN0b3IsIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50LCBTcHJpdGVDb21wb25lbnQsIEF1ZGlvQ2xpcCwgQXVkaW9Tb3VyY2VDb21wb25lbnQsIEpzb25Bc3NldCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBHYW1lUm9vdCB9IGZyb20gXCIuLi9Sb290L0dhbWVSb290XCI7XHJcbmltcG9ydCB7IFBhdGhDZmcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL1BhdGhDZmdcIjtcclxuaW1wb3J0IHsgU2tpbkl0ZW1EYXRhLCBTa2luVHlwZSB9IGZyb20gXCIuLi9Nb2RlbC9Ta2luSXRlbURhdGFcIjtcclxuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFRpd25SYW5rTGlzdERhdGEgfSBmcm9tIFwiLi4vTW9kZWwvVGl3blJhbmtMaXN0RGF0YVwiO1xyXG5pbXBvcnQgeyBSZWxheVJhbmtMaXN0RGF0YSB9IGZyb20gXCIuLi9Nb2RlbC9SZWxheVJhbmtMaXN0RGF0YVwiO1xyXG5pbXBvcnQgeyBNb3JlR2FtZURhdGEgfSBmcm9tIFwiLi4vTW9kZWwvTW9yZUdhbWVEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJSZXNTdmNcIilcclxuZXhwb3J0IGNsYXNzIFJlc1N2YyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8jcmVnaW9uICDljZXkvotcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBSZXNNZ3IgPSBuZXcgUmVzTWdyKCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUmVzU3ZjID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy/pmZDliLbkuqfnlJ/lpJrkuKrlr7nosaFcclxuICAgIC8qIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgfSovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogUmVzU3ZjIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIHB1YmxpYyBJbml0U3ZjKCkge1xyXG4gICAgICAgIFJlc1N2Yy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgLy9JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgLy/liqDovb3otYTmupDlh73mlbDliJ3lp4vljJYuLi5cclxuICAgICAgICB0aGlzLkluaXRNb3JlR2FtZURhdGFDZmcoUGF0aENmZy5NT1JFR2FtZUNGR19QQVRIKTtcclxuICAgICAgICB0aGlzLkluaXRTa2luQ2ZnKFBhdGhDZmcuU0lLTkNGR19QQVRIKTtcclxuICAgICAgICB0aGlzLkluaXRQbGF5ZXJEYXRhQ2ZnKFBhdGhDZmcuUEFMQVlFUkRBVEFDRkdfUEFUSCk7XHJcbiAgICAgICAgLy90aGlzLkluaXRUaXduUmFua0RhdGFDZmcoUGF0aENmZy5USVdOUkFOS0NGR19QQVRIKTtcclxuICAgICAgICAvL3RoaXMuSW5pdFJlbGF5UmFua0RhdGFDZmcoUGF0aENmZy5SRUxBWVJBTktDRkdfUEFUSCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbml0IFJlc01nci4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAq5byC5q2l5Yqg6L295Zy65pmvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBc3luY2VMb2FkU2NlbmUoc2NlbmVOYW1lOiBzdHJpbmcsbG9hZGVkOkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy/orr7nva5Mb2FkUGFuZWznmoTmmL7npLpcclxuICAgICAgICBHYW1lUm9vdC5JbnN0YW5jZSgpLmxvYWRQYW5lbC5TZXRQYW5lbFN0YXRlKCk7XHJcblxyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIC8v6K6+572u5Zy65pmv5Yqg6L296L+b5bqm5YC8XHJcblxyXG4gICAgICAgIC8qIGxvYWRlci5vblByb2dyZXNzID0gZnVuY3Rpb24gKGNwLCB0dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNwL3R0OlwiICsgY3AgLyB0dCk7Ly/og73miZPljbDlh7rmnaXliqDovb3nmoTov5vluqblj5jljJZcclxuICAgICAgICAgICAgbGV0IHZhbDogbnVtYmVyID0gY3AgLyB0dDtcclxuICAgICAgICAgICAgR2FtZVJvb3QuSW5zdGFuY2UoKS5sb2FkUGFuZWwuU2V0UHJvZ3Jlc3ModmFsKTtcclxuXHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgLy9kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIsIG51bGwsIG51bGwpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgICAgIC8vZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiLCBudWxsLCBudWxsKTsqL1xyXG5cclxuICAgICAgICBjYy5sb2coXCLliqDovb3lnLrmma/kuK0uLi5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg5pu05aSa5ri45oiP5pWw5o2u6YWN572uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TlpJrmuLjmiI/mlbDmja7mlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vcmVHYW1lRGF0YUxzdDogQXJyYXk8TW9yZUdhbWVEYXRhPiA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pu05aSa5ri45oiP5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0TW9yZUdhbWVEYXRhQ2ZnKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy/mjIHmnInlhajlsYDlj5jph49cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLyp7XHJcbiAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgXCJpbWdJY29uVXJsXCI6IFwiYi5zcHJpdGVGcmFtZVwiLFxyXG4gICAgICAgICAgICBcInR4dERlc1wiOiBcIui/meaYr+esrOS6jOeroOWbvueJh1wiXHJcbiAgICAgICAgfSwqL1xyXG4gICAgICAgIC8v5Yqg6L296LWE5rqQXHJcbiAgICAgICAgbG9hZGVyLmxvYWRSZXModXJsLCBmdW5jdGlvbiAoZXJyOiBzdHJpbmcsIG9iajogeyBqc29uOiBhbnk7IH0pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW7tuaXtuiwg+eUqCAxXCIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHJlYWRcIiArIFwiLFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+ino+aekOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgYWxsTW9yZUdhbWVEYXRhID0gb2JqLmpzb247XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1vcmVHYW1lRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJZCA9IGFsbE1vcmVHYW1lRGF0YVtpXS5pZDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmoRpZDpcIiArIGN1cnJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckltZ0ljb25VcmwgPSBhbGxNb3JlR2FtZURhdGFbaV0uaW1nSWNvblVybDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmoRpbWdJY29uVXJsOlwiICsgY3VyckltZ0ljb25VcmwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJUeHREZXMgPSBhbGxNb3JlR2FtZURhdGFbaV0udHh0RGVzO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeeahHR4dERlc++8mlwiICsgY3VyclR4dERlcyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vcmVHYW1lRGF0YUxzdFtpXSA9IG5ldyBNb3JlR2FtZURhdGEoY3VycklkLCBjdXJySW1nSWNvblVybCwgY3VyclR4dERlcyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5omT5Y2w5pu05aSa5ri45oiP5pWw5o2u77yaXCIgKyBzZWxmLm1vcmVHYW1lRGF0YUxzdFtpXS5pZCArIFwiICBcIiArIHNlbGYubW9yZUdhbWVEYXRhTHN0W2ldLmltZ0ljb25VcmwgKyBcIiAgXCIgKyBzZWxmLm1vcmVHYW1lRGF0YUxzdFtpXS50eHREZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLy8jcmVnaW9uICDnmq7ogqTmlbDmja7phY3nva5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOearuiCpOaVsOaNruaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2tpbkRhdGFMc3Q6IEFycmF5PFNraW5JdGVtRGF0YT4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOino+aekOearuiCpOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIEluaXRTa2luQ2ZnKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKHVybCwgZnVuY3Rpb24gKGVycjogc3RyaW5nLCBvYmo6IHsganNvbjogYW55OyB9KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgcmVhZFwiICsgXCIsXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+ino+aekOaVsOaNrlxyXG4gICAgICAgICAgICBsZXQgc2tpbkRhdGEgPSBvYmouanNvbjtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbkRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5b2T5YmNSWRcclxuICAgICAgICAgICAgICAgIGxldCBjdXJySWQgPSBza2luRGF0YVtpXS5pZDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmoRJZDpcIiArIGN1cnJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyclNraW5UeXBlSWQgPSBza2luRGF0YVtpXS5za2luVHlwZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmq7ogqTnsbvlnotJZDpcIiArIGN1cnJTa2luVHlwZUlkKTtcclxuICAgICAgICAgICAgICAgIC8v6L2s5o2iU2tpblR5cGUgXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyclNraW5UeXBlOiBTa2luVHlwZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5oyR5oiY55qu6IKkXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyclNraW5UeXBlSWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJTa2luVHlwZSA9IFNraW5UeXBlLkNoYWxsZW5nZVNraW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOaYr+mHkeW4geearuiCpFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VyclNraW5UeXBlSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJTa2luVHlwZSA9IFNraW5UeXBlLkdvbGRTa2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/ljbDorrAtLT7lr7nlupRcIuazpeaznuWbvueJh+KAnVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VyclNraW5UeXBlSWQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJTa2luVHlwZSA9IFNraW5UeXBlLlN0YW1wU2tpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5piv5ouW5bC+LS0+5a+55bqU4oCc54m55pWI4oCdKHBzLueJueaViOaIluiuuOacieS4pOS4qilcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJTa2luVHlwZSA9IFNraW5UeXBlLlRyYWlsaW5nU2tpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLovazmjaJTa2luVHlwZTpcIiArIGN1cnJTa2luVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAvL+mihOWItuS9k+i3r+W+hFxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJQcmVmYWJVcmwgPSBza2luRGF0YVtpXS5wcmVmYWJVcmw7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi6aKE5Yi25L2T6Lev5b6E77yaXCIgKyBjdXJyUHJlZmFiVXJsKTtcclxuICAgICAgICAgICAgICAgIC8v5Zu+54mH6Lev5b6EXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckltZ1VybCA9IHNraW5EYXRhW2ldLmltZ1VybDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlm77niYfot6/lvoTvvJpcIiArIGN1cnJJbWdVcmwpO1xyXG4gICAgICAgICAgICAgICAgLy/mnoTpgKBTa2luSXRlbURhdGHnsbvmlbDnu4RcclxuICAgICAgICAgICAgICAgIHNlbGYuc2tpbkRhdGFMc3RbaV0gPSBuZXcgU2tpbkl0ZW1EYXRhKGN1cnJJZCwgY3VyclNraW5UeXBlLCBjdXJyUHJlZmFiVXJsLCBjdXJySW1nVXJsKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLmnoTpgKBza2luSXRlbURhdGHnsbvmlbDnu4TvvJpcIiArIHNlbGYuc2tpbkRhdGFMc3RbaV0uaWQgKyBcIiAgXCIgKyBzZWxmLnNraW5EYXRhTHN0W2ldLnNraW5UeXBlICsgXCIgIFwiICsgc2VsZi5za2luRGF0YUxzdFtpXS5wcmVmYWJVcmwgKyBcIiAgXCIgKyBzZWxmLnNraW5EYXRhTHN0W2ldLmltZ1VybCArIFwi5b2T5YmN5piv56ysezB95Liq5pWw5o2u77yaXCIsIGkgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW55qu6IKk5pWw5o2u5oiQ5YqfLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg6Kej5p6QUGxheWVyRGF0YeaVsOaNrlxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN55qE546p5a625pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXJyUGxheWVyRGF0YTogUGxheWVyRGF0YTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlueOqeWutuaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSW5pdFBsYXllckRhdGFDZmcodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8v5Yqg6L296LWE5rqQXHJcbiAgICAgICAgbG9hZGVyLmxvYWRSZXModXJsLCBmdW5jdGlvbiAoZXJyOiBzdHJpbmcsIG9iajogeyBqc29uOiBhbnk7IH0pIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSByZWFkXCIgKyBcIixcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v6Kej5p6Q5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXJEYXRhID0gb2JqLmpzb247XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3njqnlrrbmlbDmja46XCIgKyBwbGF5ZXJEYXRhKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+eOqeWutuWnk+WQjVxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJOYW1lID0gcGxheWVyRGF0YVtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIueOqeWutuWnk+WQje+8mlwiICsgY3Vyck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy/ph5HluIHmlbDph49cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyQ29pblZhbCA9IHBsYXllckRhdGFbaV0uQ29pblZhbDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLph5HluIHmlbDph4/vvJpcIiArIGN1cnJDb2luVmFsKTtcclxuICAgICAgICAgICAgICAgIC8v5LiK55uY5b6X5YiGXHJcbiAgICAgICAgICAgICAgICBsZXQgY3Vyckxhc3RTY29yZSA9IHBsYXllckRhdGFbaV0ubGFzdFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuS4iuebmOW+l+WIhu+8mlwiICsgY3Vyckxhc3RTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAvL+i/meebmOW+l+WIhlxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJTY29yZSA9IHBsYXllckRhdGFbaV0uY3VycmVudFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIui/meebmOW+l+WIhu+8mlwiICsgY3VyclNjb3JlKTtcclxuICAgICAgICAgICAgICAgIC8v5Y6G5Y+y5pyA6auY5YiGXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckhpZ2h0ZXN0U2NvcmUgPSBwbGF5ZXJEYXRhW2ldLkhpZ2h0ZXN0U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5Y6G5Y+y5pyA6auY5YiG77yaXCIgKyBjdXJySGlnaHRlc3RTY29yZSk7XHJcbiAgICAgICAgICAgICAgICAvL+mSu+efs+aVsOmHj1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJEaWFtb25kVmFsID0gcGxheWVyRGF0YVtpXS5EaWFtb25kVmFsO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIumSu+efs+aVsOmHj++8mlwiICsgY3VyckRpYW1vbmRWYWwpO1xyXG4gICAgICAgICAgICAgICAgLy/mnoTpgKBQbGF5ZXJEYXRh57G7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJQbGF5ZXJEYXRhID0gbmV3IFBsYXllckRhdGEoY3Vyck5hbWUsIGN1cnJDb2luVmFsLCBjdXJyTGFzdFNjb3JlLCBjdXJyU2NvcmUsIGN1cnJIaWdodGVzdFNjb3JlLCBjdXJyRGlhbW9uZFZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaJk+WNsOeOqeWutuaVsOaNru+8mlwiICsgc2VsZi5jdXJyUGxheWVyRGF0YS5uYW1lICsgXCIgIFwiICsgc2VsZi5jdXJyUGxheWVyRGF0YS5sYXN0U2NvcmUgKyBcIiAgXCIgKyBzZWxmLmN1cnJQbGF5ZXJEYXRhLmN1cnJlbnRTY29yZSArIFwiICBcIiArIHNlbGYuY3VyclBsYXllckRhdGEuSGlnaHRlc3RTY29yZSArIFwiICBcIiArIHNlbGYuY3VyclBsYXllckRhdGEuRGlhbW9uZFZhbCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW546p5a625pWw5o2u5oiQ5YqfLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg6Kej5p6Q5Y2V5Lq65o6S6KGM5qac5pWw5o2uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkurrmjpLooYzmppzmlbDmja7mlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRpd25SYW5rRGF0YUxzdDogQXJyYXk8VGl3blJhbmtMaXN0RGF0YT4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluWNleS6uuaOkuihjOamnOaVsOaNruaIkOWKn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSW5pdFRpd25SYW5rRGF0YUNmZyh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnI6IHN0cmluZywgb2JqOiB7IGpzb246IGFueTsgfSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHJlYWRcIiArIFwiLFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/op6PmnpDmlbDmja5cclxuICAgICAgICAgICAgbGV0IHRpd25SYW5rRGF0YSA9IG9iai5qc29uO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5b2T5YmN55qE5pWw5o2u77yaXCIgKyB0aXduUmFua0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXduUmFua0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJySWQgPSB0aXduUmFua0RhdGFbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5b2T5YmN55qEaWTvvJpcIiArIGN1cnJJZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckltZ0xvZ29VcmwgPSB0aXduUmFua0RhdGFbaV0uaW1nTG9nbztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmoRpbWdMb2dvVXJsOlwiICsgY3VyckltZ0xvZ29VcmwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJbWdJY29uVXJsID0gdGl3blJhbmtEYXRhW2ldLmltZ0ljb247XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5b2T5YmN55qEaW1nSWNvblVybDpcIiArIGN1cnJJbWdJY29uVXJsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyVHh0TmFtZSA9IHRpd25SYW5rRGF0YVtpXS50eHROYW1lO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeeahHR4dE5hbWU6XCIgKyBjdXJyVHh0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyclR4dFNjb3JlID0gdGl3blJhbmtEYXRhW2ldLnR4dFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeeahHR4dFNjb3Jl77yaXCIgKyBjdXJyVHh0U2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50aXduUmFua0RhdGFMc3RbaV0gPSBuZXcgVGl3blJhbmtMaXN0RGF0YShjdXJySWQsIGN1cnJJbWdMb2dvVXJsLCBjdXJySW1nSWNvblVybCwgY3VyclR4dE5hbWUsIGN1cnJUeHRTY29yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPljbDljZXkurrmjpLooYzmppzvvJpcIiArIHNlbGYudGl3blJhbmtEYXRhTHN0W2ldLmlkICsgXCIgIFwiICsgc2VsZi50aXduUmFua0RhdGFMc3RbaV0uaW1nTG9nb1VybCArIFwiICBcIiArIHNlbGYudGl3blJhbmtEYXRhTHN0W2ldLmltZ0ljb25VcmwgKyBcIiAgXCIgKyBzZWxmLnRpd25SYW5rRGF0YUxzdFtpXS50eHROYW1lICsgXCIgIFwiICsgc2VsZi50aXduUmFua0RhdGFMc3RbaV0udHh0U2NvcmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5Y2V5Lq65o6S6KGM5qac5pWw5o2u5oiQ5YqfLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiAg6Kej5p6Q5o6l5Yqb5o6S6KGM5qac5pWw5o2uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXlipvmjpLooYzmppzmlbDmja7mlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbGF5UmFua0RhdGFMc3Q6IEFycmF5PFJlbGF5UmFua0xpc3REYXRhPiA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5o6l5Yqb5o6S6KGM5qac5pWw5o2u5oiQ5YqfXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0UmVsYXlSYW5rRGF0YUNmZyh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy/liqDovb3otYTmupBcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnI6IHN0cmluZywgb2JqOiB7IGpzb246IGFueTsgfSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHJlYWRcIiArIFwiLFwiICsgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy/op6PmnpDmlbDmja5cclxuICAgICAgICAgICAgbGV0IHJlbGF5UmFua0RhdGEgPSBvYmouanNvbjtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeaVsOaNru+8mlwiICsgcmVsYXlSYW5rRGF0YSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbGF5UmFua0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJySWQgPSByZWxheVJhbmtEYXRhW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeeahGlk77yaXCIgKyBjdXJySWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJJbWdMb2dvVXJsID0gcmVsYXlSYW5rRGF0YVtpXS5pbWdMb2dvO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeeahGltZ0xvZ29Vcmw6XCIgKyBjdXJySW1nTG9nb1VybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyckltZ0ljb25VcmwgPSByZWxheVJhbmtEYXRhW2ldLmltZ0ljb247XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5b2T5YmN55qEaW1nSWNvblVybDpcIiArIGN1cnJJbWdJY29uVXJsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyVHh0TmFtZSA9IHJlbGF5UmFua0RhdGFbaV0udHh0TmFtZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3nmoR0eHROYW1lOlwiICsgY3VyclR4dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJUeHRTY29yZSA9IHJlbGF5UmFua0RhdGFbaV0udHh0U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5b2T5YmN55qEdHh0U2NvcmXvvJpcIiArIGN1cnJUeHRTY29yZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbGF5UmFua0RhdGFMc3RbaV0gPSBuZXcgUmVsYXlSYW5rTGlzdERhdGEoY3VycklkLCBjdXJySW1nTG9nb1VybCwgY3VyckltZ0ljb25VcmwsIGN1cnJUeHROYW1lLCBjdXJyVHh0U2NvcmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLmiZPljbDmjqXlipvmjpLooYzmppzvvJpcIiArIHNlbGYucmVsYXlSYW5rRGF0YUxzdFtpXS5pZCArIFwiICBcIiArIHNlbGYucmVsYXlSYW5rRGF0YUxzdFtpXS5pbWdMb2dvVXJsICsgXCIgIFwiICsgc2VsZi5yZWxheVJhbmtEYXRhTHN0W2ldLmltZ0ljb25VcmwgKyBcIiAgXCIgKyBzZWxmLnJlbGF5UmFua0RhdGFMc3RbaV0udHh0TmFtZSArIFwiICBcIiArIHNlbGYucmVsYXlSYW5rRGF0YUxzdFtpXS50eHRTY29yZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluaOpeWKm+aOkuihjOamnOaVsOaNruaIkOWKny4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxufVxyXG4iXX0=