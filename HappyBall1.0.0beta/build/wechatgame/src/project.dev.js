'use strict';

System.register("project:///assets/scripts/Pool/PrefabPoolUtil.ts", ["cc"], function (_export, _context) {

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

System.register("project:///assets/scripts/helps/Common.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, Common, value; //#region  示例


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

System.register("project:///assets/scripts/helps/GameConfig.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, PhysicsSystem, Vec3, profiler, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, GameConfig;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      profiler = _cc.profiler;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3413687Xi1GM4OYUjckqPZs", "GameConfig"); // begin GameConfig


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameConfig", GameConfig = (_dec = ccclass("GameConfig"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameConfig, _Component);

        function GameConfig() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameConfig);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameConfig)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "gravity_y", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "maxSubStep", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "deltaTime", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "friction", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "restitution", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "showStat", _descriptor6, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameConfig, [{
          key: "onLoad",
          // @property
          // lineheight = 8;
          value: function onLoad() {
            PhysicsSystem.instance.gravity = new Vec3(0, this.gravity_y, 0);
            PhysicsSystem.instance.maxSubStep = this.maxSubStep;
            PhysicsSystem.instance.deltaTime = this.deltaTime;
            PhysicsSystem.instance.defaultMaterial.friction = this.friction;
            PhysicsSystem.instance.defaultMaterial.restitution = this.restitution;
          }
        }, {
          key: "start",
          value: function start() {
            if (!this.showStat && !CC_BUILD) {
              setTimeout(function () {
                profiler.hideStats();
              }, 100);
            }
          }
        }]);
        return GameConfig;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gravity_y", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -20;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "maxSubStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "deltaTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1 / 60;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "friction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "restitution", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "showStat", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameConfig

    }
  };
});

System.register("project:///assets/scripts/helps/IOut.ts", [], function (_export, _context) {

  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "2b02eAXM2BChqIQA89gkxcL", "IOut"); // begin IOut


      cc._RF.pop(); // end IOut

    }
  };
});

System.register("project:///assets/scripts/helps/Queue.ts", [], function (_export, _context) {

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

System.register("project:///assets/scripts/helps/SingletonPattern.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, _class2, _temp, ccclass, property, SingletonPattern;

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
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c3c56FdIGBETrU0872yiMnt", "SingletonPattern"); // begin SingletonPattern


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个是泛型单例模板

      _export("SingletonPattern", SingletonPattern = (_dec = ccclass("SingletonPattern"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SingletonPattern, _Component);

        function SingletonPattern() {
          babelHelpers.classCallCheck(this, SingletonPattern);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SingletonPattern).apply(this, arguments));
        }

        babelHelpers.createClass(SingletonPattern, null, [{
          key: "Instance",
          value: function Instance(type) {
            if (this.instance == null) {
              this.instance = new type();
            }

            return this.instance;
          }
        }]);
        return SingletonPattern;
      }(Component), _class2.instance = null, _temp)) || _class));

      cc._RF.pop(); // end SingletonPattern

    }
  };
});

System.register("project:///assets/scripts/helps/TempConst.ts", ["cc"], function (_export, _context) {

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

System.register("project:///assets/scripts/config/PathCfg.ts", ["cc"], function (_export, _context) {

  var _decorator, _dec, _class, _class2, _temp, ccclass, property, PathCfg;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "33403bEFGNH/JUEX2kF6J8L", "PathCfg"); // begin PathCfg


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责资源路径的配置

      _export("PathCfg", PathCfg = (_dec = ccclass("PathCfg"), _dec(_class = (_temp = _class2 = function PathCfg() {
        babelHelpers.classCallCheck(this, PathCfg);
      }, _class2.GAME_PATH = "assets\resources\scenes\Game", _class2.TIWMRANKLISTITEM_PATH = "prefabs/tiwnRankListItem", _class2.RELAYRANKLISTITEM_PATH = "prefabs/relayRankListItem", _class2.MOREGAMEITEM_PATH = "prefabs/moregameItem", _class2.CS_Path = "", _class2.MOREGAMEICON_PATH = "", _class2.LEVELCFG_PATH = "config/LevelCfg.json", _class2.MOREGameCFG_PATH = "config/MoreGameCfg.json", _class2.PALAYERDATACFG_PATH = "config/PlayerDataCfg.json", _class2.RELAYRANKCFG_PATH = "config/RelayRankCfg.json", _class2.SIKNCFG_PATH = "config/SkinCfg.json", _class2.TIWNRANKCFG_PATH = "config/TwinRankCfg.json", _class2.Alta_01IconBtn_PATH = "image/altas/01IconBtn", _class2.Alta_02TitleBtn_PATH = "image/altas/02TitleBtn", _class2.Alta_03DialogBtn_PATH = "image/altas/03DialogBtn", _class2.Alta_04TxtDes_PATH = "image/altas/04TxtDes", _class2.Alta_05SignBtn_PATH = "image/altas/05SignBtn", _class2.Alta_06OthersBtn_PATH = "image/altas/06OthersBtn", _class2.Alta_07BgBtn_PATH = "image/altas/07BgBtn", _class2.Alta_08Test_PATH = "image/altas/08Test", _temp)) || _class));

      cc._RF.pop(); // end PathCfg

    }
  };
});

System.register("project:///assets/scripts/Main/System/CamerMgr.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, CamerMgr;

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
      cc._RF.push(window.module || {}, "fce1cYZI+JO6Yg8NBayLQGt", "CamerMgr"); // begin CamerMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本用来控制游戏时摄像机

      _export("CamerMgr", CamerMgr = (_dec = ccclass("CamerMgr"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CamerMgr, _Component);

        function CamerMgr() {
          babelHelpers.classCallCheck(this, CamerMgr);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CamerMgr).apply(this, arguments));
        }

        babelHelpers.createClass(CamerMgr, [{
          key: "update",
          value: function update() {//每一时刻都LookAt 小球
          }
        }]);
        return CamerMgr;
      }(Component)) || _class));

      cc._RF.pop(); // end CamerMgr

    }
  };
});

System.register("project:///assets/scripts/Main/System/MainMgr.ts", ["cc", "../View/LoadPanel.ts", "../View/MainPanel.ts", "../View/HappyGuyPanel.ts", "../View/ModelPanel.ts", "../View/SeekHelpPanel.ts", "../View/GiftBagPanel.ts", "../View/RankListPanel.ts", "../View/SkinPanel.ts", "../View/SettleMentPanel.ts", "../View/GameOverPanel.ts", "../View/SignPanel.ts", "../View/PlayPanel.ts", "../Root/SystemRoot.ts", "../View/FreeContinuePanel.ts", "../View/TipsPanel.ts", "../View/MoreGamePanel.ts"], function (_export, _context) {

  var _decorator, LoadPanel, MainPanel, HappyGuyPanel, ModelPanel, SeekHelpPanel, GiftBagPanel, RankListPanel, SkinPanel, SettleMentPanel, GameOverPanel, SignPanel, PlayPanel, SystemRoot, FreeContinuePanel, TipsPanel, MoreGamePanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _temp, ccclass, property, MainMgr;

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
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
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
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_ViewLoadPanelTs) {
      LoadPanel = _ViewLoadPanelTs.LoadPanel;
    }, function (_ViewMainPanelTs) {
      MainPanel = _ViewMainPanelTs.MainPanel;
    }, function (_ViewHappyGuyPanelTs) {
      HappyGuyPanel = _ViewHappyGuyPanelTs.HappyGuyPanel;
    }, function (_ViewModelPanelTs) {
      ModelPanel = _ViewModelPanelTs.ModelPanel;
    }, function (_ViewSeekHelpPanelTs) {
      SeekHelpPanel = _ViewSeekHelpPanelTs.SeekHelpPanel;
    }, function (_ViewGiftBagPanelTs) {
      GiftBagPanel = _ViewGiftBagPanelTs.GiftBagPanel;
    }, function (_ViewRankListPanelTs) {
      RankListPanel = _ViewRankListPanelTs.RankListPanel;
    }, function (_ViewSkinPanelTs) {
      SkinPanel = _ViewSkinPanelTs.SkinPanel;
    }, function (_ViewSettleMentPanelTs) {
      SettleMentPanel = _ViewSettleMentPanelTs.SettleMentPanel;
    }, function (_ViewGameOverPanelTs) {
      GameOverPanel = _ViewGameOverPanelTs.GameOverPanel;
    }, function (_ViewSignPanelTs) {
      SignPanel = _ViewSignPanelTs.SignPanel;
    }, function (_ViewPlayPanelTs) {
      PlayPanel = _ViewPlayPanelTs.PlayPanel;
    }, function (_RootSystemRootTs) {
      SystemRoot = _RootSystemRootTs.SystemRoot;
    }, function (_ViewFreeContinuePanelTs) {
      FreeContinuePanel = _ViewFreeContinuePanelTs.FreeContinuePanel;
    }, function (_ViewTipsPanelTs) {
      TipsPanel = _ViewTipsPanelTs.TipsPanel;
    }, function (_ViewMoreGamePanelTs) {
      MoreGamePanel = _ViewMoreGamePanelTs.MoreGamePanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "86c8cP5HlpGxYLak2ejtIyI", "MainMgr"); // begin MainMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property; //主城业务系统
      //继承SystemRoot

      _export("MainMgr", MainMgr = (_dec = ccclass("MainMgr"), _dec2 = property({
        type: LoadPanel
      }), _dec3 = property({
        type: MainPanel
      }), _dec4 = property({
        type: HappyGuyPanel
      }), _dec5 = property({
        type: ModelPanel
      }), _dec6 = property({
        type: SeekHelpPanel
      }), _dec7 = property({
        type: GiftBagPanel
      }), _dec8 = property({
        type: RankListPanel
      }), _dec9 = property({
        type: SkinPanel
      }), _dec10 = property({
        type: SettleMentPanel
      }), _dec11 = property({
        type: GameOverPanel
      }), _dec12 = property({
        type: SignPanel
      }), _dec13 = property({
        type: PlayPanel
      }), _dec14 = property({
        type: FreeContinuePanel
      }), _dec15 = property({
        type: TipsPanel
      }), _dec16 = property({
        type: MoreGamePanel
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_SystemRoot) {
        babelHelpers.inherits(MainMgr, _SystemRoot);

        function MainMgr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MainMgr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MainMgr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "loadPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mainPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "happyguyPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "modelPanel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "seekHelpPanel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "giftbagPanel", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "rankListPanel", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "skinPanel", _descriptor8, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "settleMentPanel", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameoverPanel", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "signPanel", _descriptor11, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor12, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "freeContinuePanel", _descriptor13, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tipsPanel", _descriptor14, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "moregamePanel", _descriptor15, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MainMgr, [{
          key: "InitMgr",
          value: function InitMgr() {
            MainMgr.instance = this; //Instance = this;
            //加载资源函数初始化...
            //TODO

            console.log("Init MainMgr..."); //this.EnterMainCity();
          }
          /**
           * 进入主城
           */

        }, {
          key: "EnterMainCity",
          value: function EnterMainCity() {
            //设置主城UI的显示以及其它窗体的隐藏
            this.mainPanel.SetPanelState(); //这里要封装成一个方法
            //初始化MainPanel
            //this.mainPanel.InitPanel();

            console.log("进入主城...");
          }
          /**
           * 加载玩家
           */

        }, {
          key: "LoadPlayer",
          value: function LoadPlayer() {} //通过资源服务加载玩家/小球
          //设置玩家的相关属性
          //初始化相机
          //#region   主城控制各个窗体的显示隐藏
          //#region  更多游戏

          /**
           * 打开主界面
           */

        }, {
          key: "OpenMainPanel",
          value: function OpenMainPanel() {
            this.mainPanel.SetPanelState();
          } //#endregion
          //#region  幸运转盘

          /**
           * 打开幸运转盘
           */

        }, {
          key: "OpenHappyGuyPanel",
          value: function OpenHappyGuyPanel() {
            this.happyguyPanel.SetPanelState();
          }
          /**
           * 回应网络数据
           */

        }, {
          key: "RspHappyGuyData",
          value: function RspHappyGuyData(data) {} //传入的数据还没写
          //反序列数据
          //如果数据判断后为可以
          //调用抽奖、转盘相关方法

          /*if(){
            this.GetAward();//这里应该传入奖励物品的数据=》奖品 ID
          }*/
          //#endregion
          //#region  模式选择（普通模式/困难模式） 

          /**
           * 打开模式选择界面
           */

        }, {
          key: "ChooseModelPanel",
          value: function ChooseModelPanel() {
            this.modelPanel.SetPanelState();
          } //#endregion
          //#region 免费求助界面

          /**
           * 打开免费求助界面
           */

        }, {
          key: "OpenSeekHelpPanel",
          value: function OpenSeekHelpPanel() {
            this.seekHelpPanel.SetPanelState();
          }
          /**
           * 回应免费继续的钻石网络数据
           */

        }, {
          key: "RspSeekHelpData",
          value: function RspSeekHelpData() {} //#endregion
          //#region  道具礼包

          /**
           * 打开道具礼包面板
           */

        }, {
          key: "OpenGiftBagPanel",
          value: function OpenGiftBagPanel() {
            this.giftbagPanel.SetPanelState();
          } //#endregion
          //#region 排行榜界面

          /**
           * 打开排行榜界面
           */

        }, {
          key: "OpenRankListPanel",
          value: function OpenRankListPanel() {
            this.rankListPanel.SetPanelState();
          } //#endregion
          //#region 皮肤界面

          /**
           * 打开皮肤界面
           */

        }, {
          key: "OpenSkinPanel",
          value: function OpenSkinPanel() {
            this.skinPanel.SetPanelState();
            console.log("MainMgr 打开皮肤界面...");
          }
          /**
           * 回应皮肤数据
           */

        }, {
          key: "RspSkinData",
          value: function RspSkinData() {} //#endregion
          //#region  结算界面

          /**
           * 打开结算界面
           */

        }, {
          key: "OpenSettleMentPanel",
          value: function OpenSettleMentPanel() {
            this.settleMentPanel.SetPanelState();
          }
          /**
           * 回应结算数据
           */

        }, {
          key: "RspSettleMentData",
          value: function RspSettleMentData() {} //#endregion
          //#region 游戏结束界面

          /**
           * 打开游戏结束界面
           */

        }, {
          key: "OpenGameOverPanel",
          value: function OpenGameOverPanel() {
            this.gameoverPanel.SetPanelState();
          }
          /**
           * 回应游戏结束数据
           */

        }, {
          key: "RspGameOverData",
          value: function RspGameOverData() {} //#endregion
          //#region  签到界面

          /**
           * 打开签到界面
           */

        }, {
          key: "OpenSignPanel",
          value: function OpenSignPanel() {
            this.signPanel.SetPanelState();
          }
          /**
           * 回应签到数据
           */

        }, {
          key: "RspSignData",
          value: function RspSignData() {} //#endregion
          //#region  游戏界面

          /**
           * 打开游戏界面
           */

        }, {
          key: "OpenPlayPanel",
          value: function OpenPlayPanel() {
            this.playPanel.SetPanelState();
          }
          /**
           * Play
           */

        }, {
          key: "RspPlayData",
          value: function RspPlayData() {} //#endregion
          //#region  免费继续界面

          /**
           * 打开免费继续界面
           */

        }, {
          key: "OpenFreeContinuePanel",
          value: function OpenFreeContinuePanel() {
            this.freeContinuePanel.SetPanelState();
          }
          /**
           * 回应免费继续数据
           */

        }, {
          key: "RspFreeContinueData",
          value: function RspFreeContinueData() {} //#endregion
          //#region  更多游戏

          /**
           * 打开更多游戏
           */

        }, {
          key: "OpenMoreGamePanel",
          value: function OpenMoreGamePanel() {
            this.moregamePanel.SetPanelState();
          }
          /**
           * 回应更多游戏数据
           */

        }, {
          key: "RspMoreGameData",
          value: function RspMoreGameData() {} //#endregion
          //#region  设置界面

          /**
           * 打开设置界面
           */

        }, {
          key: "OpenSettingBtn",
          value: function OpenSettingBtn() {} //弃用
          // this.mainPanel.set
          //#endregion  
          //#endregion

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
        return MainMgr;
      }(SystemRoot), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "happyguyPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "modelPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "seekHelpPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "giftbagPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rankListPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settleMentPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameoverPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "signPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "freeContinuePanel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipsPanel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moregamePanel", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end MainMgr

    }
  };
});

System.register("project:///assets/scripts/Main/System/SettingMgr.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, AudioSourceComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, ccclass, property, SettingMgr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "daa92O8szpCb4QBb3b0U1pm", "SettingMgr"); // begin SettingMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责游戏的设置
      //比如游戏难度、游戏的音效、游戏的振动

      _export("SettingMgr", SettingMgr = (_dec = ccclass("SettingMgr"), _dec2 = property({
        type: AudioSourceComponent
      }), _dec3 = property({
        type: AudioSourceComponent
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SettingMgr, _Component);

        function SettingMgr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SettingMgr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SettingMgr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.isVolume = true;
          _this.isImageQuality = true;
          _this.isVibration = true;
          babelHelpers.initializerDefineProperty(_this, "bgAudioNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "uiAudioNode", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SettingMgr, [{
          key: "update",
          value: function update() {
            if (this.isVibration == true) {
              window['wx'].vibrateShort(15);
            }
          }
          /**
           * 设置音响的播放
           */

        }, {
          key: "SetAudioEnable",
          value: function SetAudioEnable() {
            if (this.isVolume == true) {
              //关闭audio组件
              this.bgAudioNode.pause();
              this.uiAudioNode.pause();
              this.isVolume = false;
              console.log("关闭音效...");
            } else {
              //开启audio组件             
              this.bgAudioNode.play();
              this.uiAudioNode.play();
              this.isVolume = true;
              console.log("打开音响...");
            }
          }
          /**
           * 设置遮罩/高清，模糊
           */

        }, {
          key: "SetFuzzyMask",
          value: function SetFuzzyMask() {
            if (this.isImageQuality == true) {
              this.isImageQuality = false;
              console.log("设置流畅...");
            } else {
              this.isImageQuality = true;
              console.log("设置高清...");
            }
          }
          /**
           * 设置振动（0.1秒）
           */

        }, {
          key: "SetVibrate",
          value: function SetVibrate() {
            if (this.isVibration == true) {
              this.isVibration = false;
            } else {
              this.isVibration = true;
            }
          }
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
          } //#endregion

        }]);
        return SettingMgr;
      }(Component), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bgAudioNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "uiAudioNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end SettingMgr

    }
  };
});

System.register("project:///assets/scripts/Main/Controller/BallCtrl.ts", ["cc", "./ColumnCtr.ts", "../../helps/TempConst.ts", "../View/GameOverPanel.ts", "../View/PlayPanel.ts"], function (_export, _context) {

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

System.register("project:///assets/scripts/Main/Controller/ColumnCtr.ts", ["cc", "../../helps/TempConst.ts"], function (_export, _context) {

  var _decorator, Component, systemEvent, SystemEventType, Quat, Vec3, quat_t, v2_t, v3_t, _dec, _class, _class2, _descriptor, _temp, ccclass, property, ColumnCtr;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_helpsTempConstTs) {
      quat_t = _helpsTempConstTs.quat_t;
      v2_t = _helpsTempConstTs.v2_t;
      v3_t = _helpsTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3d47dcYOdBLx4HMuQDoqoiI", "ColumnCtr"); // begin ColumnCtr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ColumnCtr", ColumnCtr = (_dec = ccclass("ColumnCtr"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ColumnCtr, _Component);

        function ColumnCtr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ColumnCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ColumnCtr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "rotFactor", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ColumnCtr, [{
          key: "onEnable",
          value: function onEnable() {
            systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            systemEvent.off(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(touch, event) {
            touch.getDelta(v2_t);

            if (v2_t.x != 0) {
              Quat.fromEuler(quat_t, 0, v2_t.x * this.rotFactor, 0);
              this.node.rotate(quat_t);
              console.log("Touch doing...");
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            var cnode = this.node.children[0];
            cnode.worldPosition = Vec3.ZERO;
            cnode.worldRotation = Quat.IDENTITY;

            for (var i = 1; i < this.node.children.length; i++) {
              var _cnode = this.node.children[i];
              v3_t.set(0, i * -8, 0);
              _cnode.worldPosition = v3_t;
            }
          }
        }]);
        return ColumnCtr;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "rotFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.75;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end ColumnCtr

    }
  };
});

System.register("project:///assets/scripts/Main/Controller/CamerFollow.ts", ["cc", "../../helps/TempConst.ts"], function (_export, _context) {

  var _decorator, Component, Node, lerp, v3_t, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, CameraFollow;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      lerp = _cc.lerp;
    }, function (_helpsTempConstTs) {
      v3_t = _helpsTempConstTs.v3_t;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "4b474jYlc1CkaxKawgwxv3x", "CamerFollow"); // begin CamerFollow


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CameraFollow", CameraFollow = (_dec = ccclass("CameraFollow"), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CameraFollow, _Component);

        function CameraFollow() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CameraFollow);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CameraFollow)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "targetNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tolerance", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "step", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this._offset = 0;
          return _this;
        }

        babelHelpers.createClass(CameraFollow, [{
          key: "start",
          value: function start() {
            this._offset = this.node.worldPosition.y - this.targetNode.worldPosition.y;
          }
        }, {
          key: "lateUpdate",
          value: function lateUpdate() {
            var y = this.node.worldPosition.y;
            var ty = this.targetNode.worldPosition.y + this._offset;
            var delta = y - ty;

            if (delta > this.tolerance) {
              v3_t.set(this.node.worldPosition);
              v3_t.y = lerp(y, ty, this.step);
              this.node.worldPosition = v3_t;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            v3_t.set(this.node.worldPosition);
            v3_t.y = this.targetNode.worldPosition.y + this._offset;
            this.node.worldPosition = v3_t;
          }
        }]);
        return CameraFollow;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tolerance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "step", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CamerFollow

    }
  };
});

System.register("project:///assets/scripts/Main/Controller/Effect.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, Effect;

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
      cc._RF.push(window.module || {}, "8d42bMVKAJCH4BXBJt+ykxQ", "Effect"); // begin Effect


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个用于控制小球的粒子特效

      _export("Effect", Effect = (_dec = ccclass("Effect"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Effect, _Component);

        function Effect() {
          babelHelpers.classCallCheck(this, Effect);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Effect).apply(this, arguments));
        }

        return Effect;
      }(Component)) || _class));

      cc._RF.pop(); // end Effect

    }
  };
});

System.register("project:///assets/scripts/Main/Controller/GameCtr.ts", ["cc", "./ColumnCtr.ts", "./FloorFlagCtr.ts", "./CamerFollow.ts", "./BallCtrl.ts", "../System/MainMgr.ts"], function (_export, _context) {

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

System.register("project:///assets/scripts/Main/Controller/FloorFlagCtr.ts", ["cc", "../../helps/TempConst.ts", "../../Pool/PrefabPoolUtil.ts", "../View/PlayPanel.ts", "../System/LoadSys.ts", "../View/GameOverPanel.ts"], function (_export, _context) {

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

System.register("project:///assets/scripts/Main/View/FreeContinuePanel.ts", ["cc", "../Root/PanelRoot.ts", "../Controller/GameCtr.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts", "./PlayPanel.ts", "../Model/PlayerData.ts"], function (_export, _context) {

  var _decorator, LabelComponent, PanelRoot, GameCtr, AudioSvc, ShareSvc, ShareLinkType, PlayPanel, PlayerData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, FreeContinuePanel;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_ModelPlayerDataTs) {
      PlayerData = _ModelPlayerDataTs.PlayerData;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9a2c3mBMsFOS5vddmmqkYaD", "FreeContinuePanel"); // begin FreeContinuePanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * 免费继续界面
       */

      _export("FreeContinuePanel", FreeContinuePanel = (_dec = ccclass("FreeContinuePanel"), _dec2 = _decorator.menu("View/FreeContinuePanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: GameCtr
      }), _dec5 = property({
        type: PlayPanel
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(FreeContinuePanel, _PanelRoot);

        function FreeContinuePanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, FreeContinuePanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(FreeContinuePanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtVal", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(FreeContinuePanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(FreeContinuePanel.prototype), "InitPanel", this).call(this);
            this.SetUI(3);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //super.ClickCloseBtn();
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
            console.log("FreeContinuePanel 关闭");
          }
          /**
           * 点击免费求助
           */

        }, {
          key: "ClickSeekHelpBtn",
          value: function ClickSeekHelpBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //点击之后调用分享接口

            ShareSvc.Instance().ShareLink(ShareLinkType.Both); //完成之后
            //继续游戏

            this.gameCtrl.GameRestart(); //设置上盘的得分为这盘的得分
            //并且钻石数量增加
            //TODO

            console.log("点击免费求助...");
          }
          /**
           * 点击继续
           */

        }, {
          key: "ClickContinueBtn",
          value: function ClickContinueBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //消耗钻石数量（这个写活，要么配置json，要么请求网络数据）
            //请求网络数据
            //判断钻石数量是否满足消耗条件后

            if (PlayerData.Instance().DiamondVal >= 3) {
              //扣除钻石
              PlayerData.Instance().DiamondVal -= 1; //更新到数据库
              //LoadSys.Instance().ServerSave();
              //重新游戏

              this.gameCtrl.GameRestart();
              console.log("判断钻石数目...");
            } //重新游戏


            this.gameCtrl.GameRestart();
            console.log("点击继续...");
          }
          /**
           * 设置消耗的钻石UI
           */

        }, {
          key: "SetUI",
          value: function SetUI(val) {
            this.txtVal.string = val.toString();
          }
        }]);
        return FreeContinuePanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtVal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end FreeContinuePanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/GameOverPanel.ts", ["cc", "../Root/PanelRoot.ts", "./MainPanel.ts", "../System/MainMgr.ts", "../Controller/GameCtr.ts", "./PlayPanel.ts", "./SettleMentPanel.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts", "../System/LoadSys.ts"], function (_export, _context) {

  var _decorator, LabelComponent, SpriteComponent, PanelRoot, MainPanel, MainMgr, GameCtr, PlayPanel, SettleMentPanel, AudioSvc, ShareSvc, LoadSys, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, ccclass, property, GameOverPanel;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_MainPanelTs) {
      MainPanel = _MainPanelTs.MainPanel;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_SettleMentPanelTs) {
      SettleMentPanel = _SettleMentPanelTs.SettleMentPanel;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_SystemLoadSysTs) {
      LoadSys = _SystemLoadSysTs.LoadSys;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "dcb66EL5ctBIKmWUU2gtUfQ", "GameOverPanel"); // begin GameOverPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameOverPanel", GameOverPanel = (_dec = ccclass("GameOverPanel"), _dec2 = _decorator.menu("View/GameOverPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec6 = property({
        type: MainPanel
      }), _dec7 = property({
        type: PlayPanel
      }), _dec8 = property({
        type: GameCtr
      }), _dec9 = property({
        type: SettleMentPanel
      }), _dec10 = property({
        type: LoadSys
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(GameOverPanel, _PanelRoot);

        function GameOverPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameOverPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameOverPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtSurpassVal", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.oldScoreVal = 0;
          babelHelpers.initializerDefineProperty(_this, "mainPanel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor6, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "settleMentPanel", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "loadSys", _descriptor8, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameOverPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(GameOverPanel.prototype), "InitPanel", this).call(this); //设置上盘得分

            console.log("GameOverPanel Init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickClose",
          value: function ClickClose() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
          }
          /**
           * 看视频翻倍
           */

        }, {
          key: "ClickWatchVideoBtn",
          value: function ClickWatchVideoBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //看完视频

            ShareSvc.Instance().WatchVideoForAward(); //关闭该界面

            this.SetPanelState(false); //打开结算界面

            MainMgr.Instance().OpenSettleMentPanel(); //奖励翻倍

            this.settleMentPanel.txtGoldVal.string = (this.oldScoreVal * 2 * 2).toString(); //更新数据库
            //LoadSys.Instance().ServerSave();

            console.log("看视频翻倍...");
          }
          /**
           * 免费继续
           */

        }, {
          key: "ClickFreePlayBtn",
          value: function ClickFreePlayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //打开免费求助面板，消耗免费继续资源
            //TODO

            MainMgr.Instance().OpenFreeContinuePanel(); //关闭该界面

            this.SetPanelState();
            console.log("免费继续...");
          }
          /**
           * 点击跳过
           */

        }, {
          key: "ClickSkipBtn",
          value: function ClickSkipBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //保存数据到服务端
            //LoadSys.Instance().ServerSave();
            //关闭当前界面

            this.SetPanelState(false); //重置游戏状态
            //this.gameCtrl.GameBackToLogin();
            //结算界面

            this.settleMentPanel.SetPanelState(); //设置金币

            this.settleMentPanel.SetGoldValUI(this.playPanel.lastScore); //上传数据
            //发送数据给子域

            var data = new Array();
            data.push({
              key: "lastscore",
              value: this.playPanel.lastScore.toString()
            });
            window['wx'].setUserCloudStorage({
              KVDataList: data,
              success: function success(res) {
                console.log("上传数据成功:" + res.toString());
                console.log('res', res);
              },
              fail: function fail(res) {
                console.log("上传数据失败：" + res);
              }
            });
            console.log("loadSys有吗？：" + this.loadSys.hello);
            this.loadSys.ServerSave();
            console.log("结算界面！！！");
          }
          /**
           * 设置得分UI
           */

        }, {
          key: "SetScoreUIInfo",
          value: function SetScoreUIInfo(val) {
            this.txtScore.string = val.toString();
            this.oldScoreVal = val;
          }
          /**
           * 设置超过的好友
           * @param val 
           */

        }, {
          key: "SetSurpassUIInfo",
          value: function SetSurpassUIInfo(val) {
            //this.txtSurpassVal.string = val.toString();
            if (CC_WECHATGAME) {
              //发送消息给子域
              window['wx'].postMessage({
                messageType: 3,
                score: val
              });
            }

            console.log("设置超过的好友");
          }
        }]);
        return GameOverPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtSurpassVal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settleMentPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadSys", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end GameOverPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/GiftBagPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../Service/AudioSvc.ts"], function (_export, _context) {

  var _decorator, PanelRoot, ShareSvc, ShareLinkType, AudioSvc, _dec, _dec2, _class, ccclass, property, GiftBagPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "ac059ivk/BNu6YiO1UT9/2A", "GiftBagPanel"); // begin GiftBagPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GiftBagPanel", GiftBagPanel = (_dec = ccclass("GiftBagPanel"), _dec2 = _decorator.menu("View/GiftBagPanel"), _dec(_class = _dec2(_class =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(GiftBagPanel, _PanelRoot);

        function GiftBagPanel() {
          babelHelpers.classCallCheck(this, GiftBagPanel);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GiftBagPanel).apply(this, arguments));
        }

        babelHelpers.createClass(GiftBagPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.set(babelHelpers.getPrototypeOf(GiftBagPanel.prototype), "enabled", false, this, true);
          }
          /**
           * 更新UI
           */

        }, {
          key: "UpdataUI",
          value: function UpdataUI() {
            //图片/参照图是给死的
            //这个方法不知道要不要写
            this.SetUI(1);
          }
          /**
           * 设置UI
           */

        }, {
          key: "SetUI",
          value: function SetUI(data) {}
          /**
           * 点击关闭
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio();
            this.SetPanelState(false);
            console.log("关闭了GiftBagPanel...");
          }
          /**
           *点击发送
           */

        }, {
          key: "ClickSendBtn",
          value: function ClickSendBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发送分享链接
            //打开分享渠道

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("点击发送...");
          }
        }]);
        return GiftBagPanel;
      }(PanelRoot)) || _class) || _class));

      cc._RF.pop(); // end GiftBagPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/HappyGuyPanel.ts", ["cc", "../../helps/Common.ts", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../System/MainMgr.ts", "../Service/AudioSvc.ts"], function (_export, _context) {

  var _decorator, Vec3, tweenUtil, UITransformComponent, Quat, Common, PanelRoot, ShareSvc, MainMgr, AudioSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, HappyGuyPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      tweenUtil = _cc.tweenUtil;
      UITransformComponent = _cc.UITransformComponent;
      Quat = _cc.Quat;
    }, function (_helpsCommonTs) {
      Common = _helpsCommonTs.Common;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "32c9amRcSRJ3IPfZhnUvpVa", "HappyGuyPanel"); // begin HappyGuyPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HappyGuyPanel", HappyGuyPanel = (_dec = ccclass("HappyGuyPanel"), _dec2 = _decorator.menu("View/HappyGuyPanel"), _dec3 = property({
        type: UITransformComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(HappyGuyPanel, _PanelRoot);

        function HappyGuyPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, HappyGuyPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(HappyGuyPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.targetId = 0;
          babelHelpers.initializerDefineProperty(_this, "imgRoatObj", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this.eul = new Vec3(0, 0, 0);
          _this.qua = new Quat();
          _this.isCanLottery = true;
          return _this;
        }

        babelHelpers.createClass(HappyGuyPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            //其实UI金币的数据不能是图片作死的，应该是通过网络数据进行改变的
            //所以，在每次打开窗体时都应该请求一次网络数据，然后刷新UI
            //至于是指令同步是还是事件同步
            //看策划
            //So 需要个UpdateUI()，这个方法，因为目前的各个面板也不是都要请求数据，所以应该声明为抽象方法，但是好像抽象方法必须是抽象类；
            babelHelpers.get(babelHelpers.getPrototypeOf(HappyGuyPanel.prototype), "InitPanel", this).call(this);
            console.log("HappyGuyPanel init...");
          }
        }, {
          key: "update",
          value: function update() {
            this.imgRoatObj.node.eulerAngles = this.eul; //  console.log("我一直在被调用...？？？");
          }
          /**
           * 获得奖励（其实我们应该把预先随机好的奖励物品ID放在服务端进行计算）
           */

        }, {
          key: "GetAward",
          value: function GetAward() {
            //初始化图片的欧拉角
            this.imgRoatObj.node.eulerAngles = new Vec3(0, 0, 30); //随机一个ID，每个ID对应一个角度，也对应一个产品
            //eg：1->60° 2->120° 

            var id = Common.RandomAll(1, 6);
            console.log("旋转的ID是多少：" + id); //获得要旋转的角度

            var euler = -(id * 60) + 30; //#region  方法一：欧拉角
            //let rota: Vec3 = new Vec3(0, 0, euler);
            //旋转固定的角度
            //tweenUtil(this.imgRoatPos.node.rotation.getEulerAngles).to(300, rota);

            Vec3.copy(this.eul, this.node.eulerAngles);
            tweenUtil(this.eul).to(6, new Vec3(0, 0, euler + 60)).to(6, new Vec3(0, 0, euler)).union().repeat(1).start(); //#endregion 
            //#region  方法二  四元数
            // Quat.copy(this.qua, this.node.rotation);
            // const quat1 = new Quat();
            // Quat.fromEuler(quat1, 90, 90, 90);
            // const quat2 = new Quat();
            //  Quat.fromEuler(quat2, 0, 0, 0);
            // tweenUtil(this.qua)
            //     .to(6, quat1, { easing: 'Bounce-InOut' })
            //     .to(6, quat2, { easing: 'Elastic-Out' })
            //     .union()
            //     .repeat(Infinity)
            //     .start();
            //#endregion
            //更新数据到数据库
            //TODO

            console.log("更新抽奖数据到数据库...");
            console.log("抽奖中....");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false); //this.node.active=false;

            console.log("HappyGuyPanel 关闭");
          }
          /**
           * 看视频抽奖
           */

        }, {
          key: "ClickWatchVideoLotteryBtn",
          value: function ClickWatchVideoLotteryBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //打开看视频渠道(这个方法经常用，应该封装在ShareSvc.ts中)
            // this.shareSvc.WatchVideoForAward();  //这个为什么不能这样调用？？？

            ShareSvc.Instance().WatchVideoForAward(); //看完开始抽奖

            this.GetAward(); //这个应该监听子域发消息
          }
          /**
           * 免费抽一次（每天有n（n>0,n属于N）次）
           */

        }, {
          key: "ClickFreeLotteyBtn",
          value: function ClickFreeLotteyBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //请求网络数据，判断能否进行免费抽奖

            this.RspHappyGuyData();
            console.log("请看视频抽奖!");
          }
          /**
           * 请求网络数据
           */

        }, {
          key: "ReqHappyGuyData",
          value: function ReqHappyGuyData() {
            console.log("请求抽奖网络数据..");
          }
          /**
           * 回应网络数据
           */

        }, {
          key: "RspHappyGuyData",
          value: function RspHappyGuyData() {
            //需传入数据参数 TODO
            //如果不能，Tips一个消息：请看视频抽奖
            if (this.isCanLottery == false) {
              MainMgr.Instance().tipsPanel.AddTips("当天免费次数已经用完,请看视频抽奖！");
            } //如果可以，就抽奖


            if (this.isCanLottery == true) {
              this.GetAward();
            }
          }
        }]);
        return HappyGuyPanel;
      }(PanelRoot), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgRoatObj", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cc._RF.pop(); // end HappyGuyPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/LoadPanel.ts", ["cc", "../Root/PanelRoot.ts"], function (_export, _context) {

  var _decorator, ProgressBarComponent, director, loader, PanelRoot, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, LoadPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      ProgressBarComponent = _cc.ProgressBarComponent;
      director = _cc.director;
      loader = _cc.loader;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3f794MzOZdBr4AhP2YY8CW9", "LoadPanel"); // begin LoadPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadPanel", LoadPanel = (_dec = ccclass("LoadPanel"), _dec2 = _decorator.menu("View/LoadPanel"), _dec3 = property({
        type: ProgressBarComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(LoadPanel, _PanelRoot);

        function LoadPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LoadPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LoadPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "barProgress", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this.isCompProgress = false;
          return _this;
        }

        babelHelpers.createClass(LoadPanel, [{
          key: "InitPanel",
          //初始化
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(LoadPanel.prototype), "InitPanel", this).call(this);
            console.log("初始化loadpanel...");
          }
        }, {
          key: "update",
          value: function update() {
            if (this.isCompProgress == true) return;

            for (var i = 0; i < 1000; i++) {
              this.SetProgress(i / 1000);
              this.isCompProgress = true;
            }
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //这个脚本不需要这个函数
            //播放音响
            this.audioSvc.PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("LoadPanel 关闭");
          }
          /**
           * 设置加载进度值
           */

        }, {
          key: "SetProgress",
          value: function SetProgress(val) {
            //设置bar
            this.barProgress.progress = val; //console.log("设置场景加载进度成功...");
          }
          /**
           * 加载场景
           */

        }, {
          key: "LoadScence",
          value: function LoadScence() {
            var _this2 = this; //弃用
            //获取Game场景的UUID


            var target = director._getSceneUuid("Game");

            loader.load({
              uuid: target.uuid,
              type: 'uuid'
            }, function (completedCount, totalCount, item) {
              cc.log("已完成Items:" + completedCount);
              cc.log("全部Items:" + totalCount);
              cc.log("当前Item:" + item.url);
              var val = completedCount / totalCount;
              cc.log("加载进度:" + val);
              _this2.barProgress.progress = val;
            }, function (error) {
              if (error) {
                cc.errorID(1210, "Game", error.message);
              } else {
                cc.log("加载完成");
              }
            });
          }
        }, {
          key: "loadSS",
          value: function loadSS() {
            //要改，改为加载预制体资源，或者不加载。好吧不加载。
            var bar = this.barProgress;

            loader.onProgress = function (cp, tt) {
              console.log("cp/tt:" + cp / tt); //能打印出来加载的进度变化

              bar.progress = cp / tt;
            }.bind(this);

            this.scheduleOnce(function () {
              director.loadScene("Game", null, null);
            }, 2); //director.loadScene("Game", null, null);.

            cc.log("加载中...");
          }
        }]);
        return LoadPanel;
      }(PanelRoot), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "barProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cc._RF.pop(); // end LoadPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/MainPanel.ts", ["cc", "../Root/PanelRoot.ts", "../System/MainMgr.ts", "../System/SettingMgr.ts", "../Service/ShareSvc.ts", "../Controller/GameCtr.ts"], function (_export, _context) {

  var _decorator, UITransformComponent, LabelComponent, SpriteComponent, Vec3, SpriteFrame, PanelRoot, MainMgr, SettingMgr, ShareSvc, ShareLinkType, GameCtr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _temp, ccclass, property, MainPanel;

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
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _dec14: void 0,
    _dec15: void 0,
    _dec16: void 0,
    _dec17: void 0,
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
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _descriptor13: void 0,
    _descriptor14: void 0,
    _descriptor15: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      UITransformComponent = _cc.UITransformComponent;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
      Vec3 = _cc.Vec3;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_SystemSettingMgrTs) {
      SettingMgr = _SystemSettingMgrTs.SettingMgr;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3068chNXwRGUKvHIuoqxAWz", "MainPanel"); // begin MainPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainPanel", MainPanel = (_dec = ccclass("MainPanel"), _dec2 = _decorator.menu("View/MainPanel"), _dec3 = property({
        type: UITransformComponent
      }), _dec4 = property({
        type: UITransformComponent
      }), _dec5 = property({
        type: UITransformComponent
      }), _dec6 = property({
        type: LabelComponent
      }), _dec7 = property({
        type: SpriteComponent
      }), _dec8 = property({
        type: LabelComponent
      }), _dec9 = property({
        type: GameCtr
      }), _dec10 = property({
        type: UITransformComponent
      }), _dec11 = property({
        type: SettingMgr
      }), _dec12 = property([SpriteFrame]), _dec13 = property([SpriteFrame]), _dec14 = property([SpriteFrame]), _dec15 = property({
        type: SpriteComponent
      }), _dec16 = property({
        type: SpriteComponent
      }), _dec17 = property({
        type: SpriteComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(MainPanel, _PanelRoot);

        function MainPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MainPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MainPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "settingPos", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "fristPos", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "laterPos", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtWillGetVal", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgWillGetSkin", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtCurrentScore", _descriptor6, babelHelpers.assertThisInitialized(_this));
          _this.isSettingActive = false;
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor7, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgLight", _descriptor8, babelHelpers.assertThisInitialized(_this));
          _this.rotaVal = 0;
          babelHelpers.initializerDefineProperty(_this, "settingMgr", _descriptor9, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spVolume", _descriptor10, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spImageQuality", _descriptor11, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "spVibration", _descriptor12, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgVolume", _descriptor13, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgImageQuality", _descriptor14, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgVibration", _descriptor15, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MainPanel, [{
          key: "InitPanel",
          //#endregion
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(MainPanel.prototype), "InitPanel", this).call(this);
            console.log(" Main Panel init...");
          }
        }, {
          key: "update",
          value: function update() {
            this.rotaVal += 1;
            this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);
          } //#region  公共按钮函数

          /**
           * 更多游戏
           */

        }, {
          key: "ClickMoreGameBtn",
          value: function ClickMoreGameBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //加载网络数据

            MainMgr.Instance().OpenMoreGamePanel();
          }
          /**
           * 将要获得
           */

        }, {
          key: "ClickWillGetBtn",
          value: function ClickWillGetBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开皮肤面板

            MainMgr.Instance().OpenSkinPanel();
          }
          /**
           * 签到
           */

        }, {
          key: "ClickSignBtn",
          value: function ClickSignBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开签到面板

            MainMgr.Instance().OpenSignPanel();
          }
          /**
           * 设置
           */

        }, {
          key: "ClickSettingBtn",
          value: function ClickSettingBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开设置面板

            if (this.isSettingActive == false) {
              this.settingPos.node.active = true;
              this.isSettingActive = true;
            } else {
              this.settingPos.node.active = false;
              this.isSettingActive = false;
            }
          }
          /**
           * 皮肤
           */

        }, {
          key: "ClickSkinBtn",
          value: function ClickSkinBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开皮肤面板

            MainMgr.Instance().OpenSkinPanel();
            console.log("MainPanel ClickSkinBtn...");
          }
          /**
           * 分享
           */

        }, {
          key: "ClickShareBtn",
          value: function ClickShareBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开分享渠道
            //TODO
            //this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickShareBtn...");
          }
          /**
           * 模式
           */

        }, {
          key: "ClickModelBtn",
          value: function ClickModelBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //选择难度
            //如果不满足条件，则打开面板

            MainMgr.Instance().ChooseModelPanel();
            console.log("MainPanel ClickModelBtn...");
          }
          /**
           * 继续
           */

        }, {
          key: "ClickContinueBtn",
          value: function ClickContinueBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开寻求帮助面板

            MainMgr.Instance().OpenFreeContinuePanel();
            console.log("MainPanel ClickContinueBtn...");
          }
          /**
           * 幸运转盘
           */

        }, {
          key: "ClickHappyGuyBtn",
          value: function ClickHappyGuyBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开幸运转盘面板

            MainMgr.Instance().OpenHappyGuyPanel();
            console.log("MainPanel ClickHappyGuyBtn...");
          }
          /**
           * 道具礼包
           */

        }, {
          key: "ClickGiftBagBtn",
          value: function ClickGiftBagBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开道具礼包面板

            MainMgr.Instance().OpenGiftBagPanel();
            console.log("MainPanel ClickGiftBagBtn...");
          }
          /**
           * 音量开关
           */

        }, {
          key: "ClickVolumeBtn",
          value: function ClickVolumeBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //SettingMgr.Instance().SetAudioEnable();

            this.settingMgr.SetAudioEnable(); //更换图片

            if (this.settingMgr.isVolume == false) {
              this.imgVolume.spriteFrame = this.spVolume[0];
            } else {
              this.imgVolume.spriteFrame = this.spVolume[1];
            }

            console.log("点击 音量开关...");
          }
          /**
           *画质选择
           */

        }, {
          key: "ClickImageQualityBtn",
          value: function ClickImageQualityBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //怎么做？
            //设置相机分辨率
            //SettingMgr.Instance().SetFuzzyMask();

            this.settingMgr.SetFuzzyMask(); //更换图片

            if (this.settingMgr.isImageQuality == false) {
              this.imgImageQuality.spriteFrame = this.spImageQuality[0];
            } else {
              this.imgImageQuality.spriteFrame = this.spImageQuality[1];
            }

            console.log("MainPanel ClickImageQualityBtn...");
          }
          /**
           * 振动开关
           */

        }, {
          key: "ClickVibrtionBtn",
          value: function ClickVibrtionBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //设置振动
            //SettingMgr.Instance().SetVibrate();

            this.settingMgr.SetVibrate(); //更换图片

            if (this.settingMgr.isVibration == false) {
              this.imgVibration.spriteFrame = this.spVibration[0];
            } else {
              this.imgVibration.spriteFrame = this.spVibration[1];
            }

            console.log("MainPanel ClickVibrtionBtn...");
          } //#endregion
          //#region  未玩时函数

          /**
           * 开始游戏
           */

        }, {
          key: "ClickStartPlayBtn",
          value: function ClickStartPlayBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //开始游戏
            //GameSys.Instance().InitSys();

            this.gameCtrl.GameStart(); //隐藏主UI

            this.node.active = false; //显示游戏时的UI

            MainMgr.Instance().OpenPlayPanel();
            console.log("MainPanel ClickStartPlayBtn...");
          }
          /**
           * 排行榜
           */

        }, {
          key: "ClickRankListBtn",
          value: function ClickRankListBtn() {
            //这个逻辑要补，打开对应的排行榜
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开排行榜

            MainMgr.Instance().OpenRankListPanel(); //调用对应的函数

            console.log("MainPanel ClickIRankListBtn...");
          }
          /**
           * 查看群排行
           */

        }, {
          key: "ClickCrowdRankListBtn",
          value: function ClickCrowdRankListBtn() {
            //这个逻辑要补，打开对应的排行榜
            //播放音响
            this.audioSvc.PlayUIAudio(); //打开排行榜

            MainMgr.Instance().OpenRankListPanel(); //调用对应的函数

            console.log("MainPanel ClickImageQualityBtn...");
          } //#endregion
          //#region  玩过后的函数

          /**
           * 显示本次得分
           */

        }, {
          key: "ShowScore",
          value: function ShowScore(val) {
            //拿到本次得分，赋值给UI
            this.txtCurrentScore.string = val.toString();
          }
          /**
           * 发起挑战
           */

        }, {
          key: "ClickChallengeBtn",
          value: function ClickChallengeBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //调用分享吗，或许有点不一样，不只只是分享

            this.shareSvc.ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickChanllengeBtn...");
          }
          /**
           * 发起接力
           */

        }, {
          key: "ClickRelayBtn",
          value: function ClickRelayBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //发起接力
            // this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
            console.log("MainPanel ClickRelayBtn...");
          }
          /**
           * 再玩一局
           */

        }, {
          key: "ClickPlayAgainBtn",
          value: function ClickPlayAgainBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //开始游戏
            //GameSys.Instance().InitSys();

            this.gameCtrl.GameRestart(); //隐藏主UI

            this.node.active = false; //显示游戏时的UI

            MainMgr.Instance().OpenPlayPanel();
            console.log("MainPanel ClickRelayAgainBtn...");
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
        return MainPanel;
      }(PanelRoot), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settingPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "fristPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "laterPos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtWillGetVal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgWillGetSkin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtCurrentScore", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "settingMgr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spVolume", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spImageQuality", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spVibration", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgVolume", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgImageQuality", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgVibration", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end MainPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/MoreGamePanel.ts", ["cc", "../Root/PanelRoot.ts", "../../config/PathCfg.ts", "../Model/MoreGameItem.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts"], function (_export, _context) {

  var _decorator, Node, loader, instantiate, SpriteAtlas, PanelRoot, PathCfg, MoreGameItem, AudioSvc, ShareSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, MoreGamePanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Node = _cc.Node;
      loader = _cc.loader;
      instantiate = _cc.instantiate;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_configPathCfgTs) {
      PathCfg = _configPathCfgTs.PathCfg;
    }, function (_ModelMoreGameItemTs) {
      MoreGameItem = _ModelMoreGameItemTs.MoreGameItem;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "24e87og/FVNb5nPZVWPvB6T", "MoreGamePanel"); // begin MoreGamePanel


      ccclass = _decorator.ccclass;
      property = _decorator.property; //更多游戏

      _export("MoreGamePanel", MoreGamePanel = (_dec = ccclass("MoreGamePanel"), _dec2 = _decorator.menu("View/MoreGamePanel"), _dec3 = property({
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(MoreGamePanel, _PanelRoot);

        function MoreGamePanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MoreGamePanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MoreGamePanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "spawnPos", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(MoreGamePanel, [{
          key: "InitPanel",

          /**
           * 当前的实例化的预制体数组，用于关闭窗体后销毁
           */
          // private curDestoryMoreGameItem: Node[] = [];
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(MoreGamePanel.prototype), "InitPanel", this).call(this);
            this.SpawnMoreGameItem(this.resSvc.moreGameDataLst);
            console.log("MoreGamePanel  init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false); //清理数据

            this.CleanAllMoreGameItem();
            console.log("MoreGamePanel 关闭");
          }
          /**
           * 实例化MoreGameItem
           */

        }, {
          key: "SpawnMoreGameItem",
          value: function SpawnMoreGameItem(data) {
            var _this2 = this;

            data.forEach(function (element) {
              //那个布局组件要研究一下
              //加载预制体
              // this.resSvc.LoadPrefabs(PathCfg.MOREGAMEITEM_PATH,this.spawnPos,makeObj);
              loader.loadRes(PathCfg.MOREGAMEITEM_PATH, function (err, prefab) {
                if (err) {
                  console.log("error while read" + "," + err);
                  return;
                }

                var curNode = instantiate(prefab); //设置父对象

                _this2.spawnPos.addChild(curNode); //添加进预制体集合
                //self.curDestoryMoreGameItem.push(curNode);
                //设置它的名字
                //curNode.name = "moreItem:" + element.id;
                //console.log("curNode.name:"+curNode.name);
                //获得组件

                /**
                 * MoreGameItem组件
                 */


                var moreGameComp = curNode.getComponent(MoreGameItem);
                console.log("获得组件：" + moreGameComp); //设置Id

                moreGameComp.Id = element.id;
                console.log("设置id：" + moreGameComp.Id); //加载图片并设置
                //this.resSvc.LoadImage(element.imgIconUrl, moreGameComp.imgIcon);

                /*loader.loadRes(element.imgIconUrl, (err: any, sp: SpriteFrame) => {
                    if (err) {
                        console.log("error while downing" + "," + err);
                        return;
                    }
                    moreGameComp.imgIcon.spriteFrame = sp;
                });*/
                //加载图集并设置

                loader.loadRes(PathCfg.Alta_08Test_PATH, SpriteAtlas, function (err, altas) {
                  if (err) {
                    console.log("error while downing" + "," + err);
                    return;
                  }

                  var sp = altas.getSpriteFrame(element.imgIconUrl);
                  moreGameComp.imgIcon.spriteFrame = sp;
                  console.log("1111");
                }); //设置Des

                moreGameComp.txtDes.string = element.txtDes; //获取当前的Button组件
                //let buttonComp: ButtonComponent = curNode.getComponent(ButtonComponent);
                //动态添加监听
                //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem, curNode,curNode);
                //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem(curNode), this);

                curNode.on(Node.EventType.MOUSE_DOWN, _this2.ClickMoreGameItem, curNode); //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem, this);

                /*curNode.on(Node.EventType.MOUSE_DOWN, function (err, curNode) {
                    //请求网络数据      
                    //this.ReqMoreGameItem();
                    console.log("点击了更多游戏：" + curNode.name);
                })*/
                //buttonComp.clickEvents();
              });
              console.log("实例化更多游戏预制体" + element.id);
            });
            console.log("实例化更多游戏预制体...");
          }
          /**
           * 清理加载的Item
           */

        }, {
          key: "CleanAllMoreGameItem",
          value: function CleanAllMoreGameItem() {
            //拿到当前的实例化的
            this.spawnPos.removeAllChildren();
            console.log("销毁所有子节点");
          }
          /**
           * 请求更多游戏网络数据
           */

        }, {
          key: "ReqMoreGameItem",
          value: function ReqMoreGameItem() {
            //向服务器发送请求
            //DODO
            console.log("请求更多游戏的网络数据");
          }
          /**
           * 点击MoreGameItem
           */

        }, {
          key: "ClickMoreGameItem",
          value: function ClickMoreGameItem(event) {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //请求网络数据      
            //MainMgr.Instance().moregamePanel.ReqMoreGameItem();//这样写才能访问到
            //打开第三方链接

            ShareSvc.Instance().ToOtherMiniGame(event);
            console.log("点击了更多游戏：" + event.target.name);
          }
        }]);
        return MoreGamePanel;
      }(PanelRoot), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spawnPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cc._RF.pop(); // end MoreGamePanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/PlayPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts", "../System/LoadSys.ts"], function (_export, _context) {

  var _decorator, LabelComponent, SpriteComponent, PanelRoot, AudioSvc, LoadSys, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, PlayPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_SystemLoadSysTs) {
      LoadSys = _SystemLoadSysTs.LoadSys;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "1ac2dMAEwhP6Jqx+oIqNLeO", "PlayPanel"); // begin PlayPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayPanel", PlayPanel = (_dec = ccclass("PlayPanel"), _dec2 = _decorator.menu("View/PlayPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(PlayPanel, _PanelRoot);

        function PlayPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, PlayPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(PlayPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgTips", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.lastScore = 0;
          return _this;
        }

        babelHelpers.createClass(PlayPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(PlayPanel.prototype), "InitPanel", this).call(this); //一开始就展示Tips

            this.imgTips.enabled = true;
            console.log("PlayPanel Init..."); //隔一段时间隐藏Tips

            this.HideTips();
          }
        }, {
          key: "update",
          value: function update() {
            //如果超过历史最高分
            if (this.lastScore > LoadSys.Instance().hightScoreVal) {
              this.Surpass();
            }
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("PlayPanel 关闭");
          }
          /**
           * 即将超过
           */

        }, {
          key: "Surpass",
          value: function Surpass() {
            //发消息给子域
            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 3
              }); //console.log("发消息给子域");
            }

            this.scheduleOnce(function () {
              //发消息给子域
              if (CC_WECHATGAME) {
                window['wx'].postMessage({
                  messageType: 5
                }); //console.log("发消息给子域");
              }
            });
          }
          /**
           * 设置分数
           */

        }, {
          key: "SetScoreUI",
          value: function SetScoreUI(val) {
            this.txtScore.string = val.toString(); //更新上盘成绩

            this.lastScore = val; //更新数据到数据库

            console.log("更新上盘的成绩：" + val);
          }
          /**
           * 隐藏游戏操作说明
           */

        }, {
          key: "HideTips",
          value: function HideTips() {
            var _this2 = this;

            this.scheduleOnce(function () {
              _this2.imgTips.node.active = false;
              console.log("隐藏游戏操作提示...");
            }, 1);
          }
        }]);
        return PlayPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end PlayPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/RankListPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts", "./PlayPanel.ts"], function (_export, _context) {

  var _decorator, PanelRoot, AudioSvc, PlayPanel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, RankItemType, RankListPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    RankItemType: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "505c0u3Qg9MSLsJo91pKJ9u", "RankListPanel"); // begin RankListPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (RankItemType) {
        RankItemType[RankItemType["tiwnRankListType"] = 0] = "tiwnRankListType";
        RankItemType[RankItemType["relayRankListType"] = 1] = "relayRankListType";
      })(RankItemType || _export("RankItemType", RankItemType = {})); //wx232ea3d2e7178890
      //01e8e69ddfb85507b1822ea45dfdeedc


      _export("RankListPanel", RankListPanel = (_dec = ccclass("RankListPanel"), _dec2 = _decorator.menu("View/RankListPanel"), _dec3 = property({
        type: PlayPanel
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(RankListPanel, _PanelRoot);

        function RankListPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, RankListPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(RankListPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(RankListPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(RankListPanel.prototype), "InitPanel", this).call(this); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 1
              });
              console.log("发消息给子域");
            }

            console.log("RankListPanel init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 7
              });
              console.log("发消息给子域");
            }

            this.SetPanelState(false);
            console.log("RankListPanel 关闭");
          }
          /**
           * 单人排行榜
           */

        }, {
          key: "ClickTiwnRankListBtn",
          value: function ClickTiwnRankListBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 1
              });
              console.log("发消息给子域");
            }

            console.log("请求单人排行榜数据...");
          }
          /**
           * 接力排行榜
           */

        }, {
          key: "ClickRelayRankListBtn",
          value: function ClickRelayRankListBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //请求网络数据
            //发消息给子域

            if (CC_WECHATGAME) {
              window['wx'].postMessage({
                messageType: 2
              });
            }

            console.log("请求接力排行榜数据...");
          }
        }]);
        return RankListPanel;
      }(PanelRoot), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cc._RF.pop(); // end RankListPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/SeekHelpPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../Service/AudioSvc.ts"], function (_export, _context) {

  var _decorator, SpriteComponent, LabelComponent, PanelRoot, ShareSvc, ShareLinkType, AudioSvc, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, SeekHelpPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
      ShareLinkType = _ServiceShareSvcTs.ShareLinkType;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "dd37dytKoNN4oy72BMqBkGu", "SeekHelpPanel"); // begin SeekHelpPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SeekHelpPanel", SeekHelpPanel = (_dec = ccclass("SeekHelpPanel"), _dec2 = _decorator.menu("View/SeekHelpPanel"), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SeekHelpPanel, _PanelRoot);

        function SeekHelpPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SeekHelpPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SeekHelpPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtVal", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SeekHelpPanel, [{
          key: "ClickCloseBtn",

          /**
           * 关闭按钮
           */
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("SeekHelpPanel 关闭");
          }
          /**
           * 免费求助
           */

        }, {
          key: "ClickSeekHelp",
          value: function ClickSeekHelp() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //调用分享链接函数
            //this.shareSvc.ShareLink();

            ShareSvc.Instance().ShareLink(ShareLinkType.Both);
          }
        }]);
        return SeekHelpPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtVal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end SeekHelpPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/ModelPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../System/MainMgr.ts", "../Service/AudioSvc.ts"], function (_export, _context) {

  var _decorator, LabelComponent, PanelRoot, ShareSvc, MainMgr, AudioSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp, ccclass, property, ModelPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c44a3ZXpSRJxaFxJlUgBwUo", "ModelPanel"); // begin ModelPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本负责游戏难度的调整
      //开启困难模式的条件就是看视频
      //打开这个界面的逻辑在MainMgr.ts里

      _export("ModelPanel", ModelPanel = (_dec = ccclass("ModelPanel"), _dec2 = _decorator.menu("View/ModePanel"), _dec3 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(ModelPanel, _PanelRoot);

        function ModelPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ModelPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ModelPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtDialogDes", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ModelPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(ModelPanel.prototype), "InitPanel", this).call(this);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            //this.audioSvc.PlayUIAudio()
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("ModelPanel 关闭");
          }
          /**
           * 看视频得皮肤
           */

        }, {
          key: "ClickWatchVideoForSkin",
          value: function ClickWatchVideoForSkin() {
            //播放音响
            //this.audioSvc.PlayUIAudio()
            AudioSvc.Instance().PlayUIAudio(); //this.shareSvc.WatchVideoForSkin();

            ShareSvc.Instance().WatchVideoForSkin(); //看完后是否回到主城？

            MainMgr.Instance().OpenMainPanel();
            console.log("看完视频回到主城...");
          }
        }]);
        return ModelPanel;
      }(PanelRoot), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDialogDes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));

      cc._RF.pop(); // end ModelPanel

    }
  };
});

System.register("project:///assets/scripts/Main/View/TipsPanel.ts", ["cc", "../Root/PanelRoot.ts"], function (_export, _context) {

  var _decorator, LabelComponent, AnimationComponent, SpriteComponent, PanelRoot, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, TipsPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      AnimationComponent = _cc.AnimationComponent;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "59881PxIAxHzbVxb+HV+359", "TipsPanel"); // begin TipsPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property; //这个脚本用来控制活动提示信息界面

      _export("TipsPanel", TipsPanel = (_dec = ccclass("TipsPanel"), _dec2 = _decorator.menu("View/TipsPanel"), _dec3 = property({
        type: AnimationComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec6 = property({
        type: SpriteComponent
      }), _dec7 = property({
        type: LabelComponent
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(TipsPanel, _PanelRoot);

        function TipsPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, TipsPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(TipsPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "tipsAni", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtTips", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtAddScore", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIconTips", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtDes", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this.isTipsShow = false;
          _this.tipsQue = new Array();
          return _this;
        }

        babelHelpers.createClass(TipsPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(TipsPanel.prototype), "InitPanel", this).call(this); //延时隐藏tips

            this.SetActive(this.txtTips, false);
          }
        }, {
          key: "update",
          value: function update() {}
          /* if (this.tipsQue.length > 0 && this.isTipsShow == false) {
               let tips: string = this.tipsQue[this.tipsQue.length - 1];
               this.tipsQue.splice(this.tipsQue.length - 1);//移除
               this.SetTips(tips);
           }*/
          //这个脚本不需要写关闭按钮
          //它会自己经过一段时间就关闭

          /**
           * 增加Tips
           */

        }, {
          key: "AddTips",
          value: function AddTips(tips) {
            this.tipsQue.unshift(tips);
            console.log("添加tips...");
          }
          /**
           * 设置Tips
           * @param tips 值
           */

        }, {
          key: "SetTips",
          value: function SetTips(tips) {
            var _this2 = this;

            this.SetActive(this.txtTips);
            this.SetText(this.txtTips, tips);
            this.tipsAni.play(); //延时关闭激活状态

            this.scheduleOnce(function () {
              _this2.SetActive(_this2.txtTips, false);

              _this2.isTipsShow = false;
            }, this.tipsAni.clips.length);
          }
          /**
           * 设置好友图片
           */

        }, {
          key: "SetIcon",
          value: function SetIcon(sp) {
            //怎么从网络上拿到好友的头像
            this.imgIconTips.spriteFrame = sp;
          }
          /**
           *设置描述
           */

        }, {
          key: "SetDes",
          value: function SetDes(tips) {
            this.txtDes.string = tips;
          }
        }]);
        return TipsPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipsAni", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtAddScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIconTips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end TipsPanel

    }
  };
});

System.register("project:///assets/scripts/Main/Model/DefalutMatData.ts", [], function (_export, _context) {

  var DefalutMatData;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "dddafAzae1LQ5xwB9EB8cqM", "DefalutMatData"); // begin DefalutMatData


      _export("DefalutMatData", DefalutMatData = function DefalutMatData() {
        babelHelpers.classCallCheck(this, DefalutMatData);
      });

      cc._RF.pop(); // end DefalutMatData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/MoreGameItem.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, SpriteComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, MoreGameItem;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "7ad14QYFLBCn4w6oKoZjPqM", "MoreGameItem"); // begin MoreGameItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MoreGameItem", MoreGameItem = (_dec = ccclass("MoreGameItem"), _dec2 = property({
        type: String
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(MoreGameItem, _Component);

        function MoreGameItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MoreGameItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MoreGameItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "Id", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtDes", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        } //监听函数不在这里添加
        //在实例化的时候添加
        //写在MoreGamePanel.ts中
        //TODO


        return MoreGameItem;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Id", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end MoreGameItem

    }
  };
});

System.register("project:///assets/scripts/Main/System/LoadSys.ts", ["cc", "../Root/SystemRoot.ts", "../View/LoadPanel.ts", "../View/MainPanel.ts", "./MainMgr.ts", "../View/PlayPanel.ts"], function (_export, _context) {

  var _decorator, SystemRoot, LoadPanel, MainPanel, MainMgr, PlayPanel, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, ccclass, property, LoadSys;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootSystemRootTs) {
      SystemRoot = _RootSystemRootTs.SystemRoot;
    }, function (_ViewLoadPanelTs) {
      LoadPanel = _ViewLoadPanelTs.LoadPanel;
    }, function (_ViewMainPanelTs) {
      MainPanel = _ViewMainPanelTs.MainPanel;
    }, function (_MainMgrTs) {
      MainMgr = _MainMgrTs.MainMgr;
    }, function (_ViewPlayPanelTs) {
      PlayPanel = _ViewPlayPanelTs.PlayPanel;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "beb92Fhc3dH9pdT/Eqb0zDs", "LoadSys"); // begin LoadSys


      ccclass = _decorator.ccclass;
      property = _decorator.property; //登录系统

      _export("LoadSys", LoadSys = (_dec = ccclass("LoadSys"), _dec2 = property({
        type: LoadPanel
      }), _dec3 = property({
        type: MainPanel
      }), _dec4 = property({
        type: PlayPanel
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_SystemRoot) {
        babelHelpers.inherits(LoadSys, _SystemRoot);

        function LoadSys() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LoadSys);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LoadSys)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.appID = "wx232ea3d2e7178890";
          _this.progarmId = "f705ccfcab834e0a962bf43da332166d";
          _this.userId = null;
          _this.token = null;
          _this.code = null;
          _this.key = null;
          _this.phone = null;
          _this.phoneWid = null;
          _this.phoneHig = null;
          _this.HOST = "https://game.beetry.com/wx-game";
          _this.txtName = "";
          _this.avatarUrl = "";
          _this.gender = "";
          _this.invitionCode = "";
          _this.hightScoreVal = 0;
          _this.diamondVal = 0;
          _this.coinVal = 0;
          babelHelpers.initializerDefineProperty(_this, "loadPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "mainPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.hello = "hello!";
          return _this;
        }

        babelHelpers.createClass(LoadSys, [{
          key: "InitSys",
          value: function InitSys() {
            LoadSys.instance = this;
            window.InterstitialAd = window['wx'].createInterstitialAd({
              adUnitId: "" //广告单元ID

            });
            console.log("Init LoginSys...");
          }
          /**
           * 进入登录场景
           */

        }, {
          key: "EnterLogin",
          value: function EnterLogin() {
            //异步加载Game场景
            //并显示加载进度
            //this.resSvc.AsynceLoadScene(PathCfg.GAMEPATH,);//TODO
            var self = this;
            this.loadPanel.SetPanelState();
            /*this.resSvc.AsynceLoadScene("", function () {
                console.log("调用加载回调");
                //播放背景音效
                // SettingMgr.Instance().SetAudioEnable();
                //询问是否微信登录
                self.AskWechatLogin();
            })*/

            self.AskWechatLogin();
            console.log("进入登录场景");
          }
          /**
           * 询问是否微信登录
           */

        }, {
          key: "AskWechatLogin",
          value: function AskWechatLogin() {
            var self = this;
            console.log("询问是否微信登录");
            var phone = window['wx'].getSystemInfoSync();
            self.loginBtn = window['wx'].createUserInfoButton({
              type: 'text',
              text: '',
              style: {
                left: phone.screenWidth * 0.25,
                top: phone.screenHeight * 0.61,
                width: phone.screenWidth * 0.51,
                height: phone.screenHeight * 0.1,
                lineHeight: 40,
                backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
              }
            });
            self.WechatLogin();
            this.loginBtn.onTap(function (res) {
              console.log("点击啊");
              self.WechatLogin();
            });
          }
          /**
           * 回应登录
           */

        }, {
          key: "RspLogin",
          value: function RspLogin() {
            //关闭LoadPanel界面
            this.loadPanel.SetPanelState(false);
            MainMgr.Instance().EnterMainCity();
            console.log("回应登录");
          }
          /**
           * 微信登录
           */

        }, {
          key: "WechatLogin",
          value: function WechatLogin() {
            var self = this;

            if (self.code == null) {
              window['wx'].login({
                success: function success(res) {
                  if (res.code) {
                    self.code = res.code;
                  } else {
                    console.log('登录失败！' + res.errMsg);
                  }
                }
              });
            }

            self.loginBtn.hide();
            window['wx'].getSetting({
              success: function success(res) {
                console.log("1223");

                if (!res.authSetting['scope.userInfo']) {
                  window['wx'].authorize({
                    success: function success() {
                      self.loginBtn.hide();
                      console.log("隐藏...");
                      self.GameLogin();
                      self.RspLogin();
                    },
                    fail: function fail() {
                      self.loginBtn.show();
                      console.log("展示...");
                    }
                  });
                } else {
                  self.loginBtn.hide();
                  console.log("隐藏最后...++" + self.node.name);
                  self.GameLogin();
                  self.RspLogin();
                }
              }
            });
          }
          /**
           * 游戏登录
           */

        }, {
          key: "GameLogin",
          value: function GameLogin() {
            var xhr = new XMLHttpRequest();
            xhr.setRequestHeader("Content-Type", "application/json");
            var url = this.HOST + "/user/user_logins";
            var self = this;
            window['wx'].getUserInfo({
              success: function success(res) {
                self.txtName = res.userInfo.nickName;
                self.avatarUrl = res.userInfo.avatarUrl;
                self.gender = res.userInfo.gender;
                var postData = {
                  "code": self.code,
                  "programId": self.progarmId,
                  "nickName": self.txtName,
                  "gender": self.gender,
                  "avatarUrl": self.avatarUrl || "http://www.sucaijishi.com/uploadfile/2016/0203/20160203022631226.jpg",
                  "invitionCode": self.invitionCode
                };
                var data = JSON.stringify(postData);

                xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    self.ReceiveResponseToken(response);
                  } else if (xhr.readyState == 12) {
                    console.log(xhr.readyState, "186");
                    self.GameLogin();
                  }
                };

                xhr.open("POST", url, true);
                xhr.send(data);
                console.log("数据：" + data);
                console.log("子域登录成功后的最高分数据：" + self.hightScoreVal);
                console.log("登录成功！！！");
              }
            });
          }
          /**
           * 从服务器收到的信息
           * @param rsp 
           */

        }, {
          key: "ReceiveResponseToken",
          value: function ReceiveResponseToken(rsp) {
            var data = JSON.parse(rsp);

            if (this.key == null) {
              this.key = data.result.key;
            }

            if (this.token == null) {
              this.token = data.result.token;
            }

            this.GetWeChatUserInfo();
            console.log("从服务器收到的信息");
          }
          /**
           * 接受服务端数据
           * @param rsp 
           */

        }, {
          key: "ReceiveResponseUser",
          value: function ReceiveResponseUser(rsp) {
            var data = JSON.parse(rsp);

            if (this.userId == null) {
              this.userId = data.result.userInfo.id;
            }

            this.ServerLoad(data.result);
            console.log("接受服务端数据");
          }
          /**
           * 加载服务器的数据
           * @param data 
           */

        }, {
          key: "ServerLoad",
          value: function ServerLoad(data) {
            if (data.score != null && data.score != undefined) {
              console.log("我们后台有最高分的数据吗？：" + data.score);
              this.hightScoreVal = parseInt(data.score);
            }

            if (data.diamondVas != undefined && data.diamondVas != null) {
              this.diamondVal = parseInt(data.diamondVas); // this.diamondVal = 910;

              console.log("我上传了钻石数据了吗？");
            }

            if (data.coin != undefined && data.coin != null) {
              this.coinVal = 888;
              console.log("金币数据有更新吗？");
            } else {
              console.log("未超过...");
            } //开启转发按钮


            window['wx'].showShareMenu({
              withShareTicket: true
            });
            console.log("加载服务器的数据");
          }
          /**
           * 获取微信用户的信息,保存到变量中并发送给服务器
           */

        }, {
          key: "GetWeChatUserInfo",
          value: function GetWeChatUserInfo() {
            var xhr = new XMLHttpRequest();
            xhr.setRequestHeader("Content-Type", "application/json");
            var url = this.HOST + "/user/query_game_data";
            var self = this;
            window['wx'].getUserInfo({
              success: function success(res) {
                var postData = {
                  "token": self.token,
                  "key": self.key
                };
                var data = JSON.stringify(postData);

                xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    self.ReceiveResponseUser(response);
                  } else if (xhr.readyState == 12) {
                    self.GetWeChatUserInfo();
                  }
                };

                xhr.open("POST", url, true);
                xhr.send(data);
                console.log("获取微信用户的信息，保存到变量中并发送给服务器 1");
              }
            });
            console.log("获取微信用户的信息，保存到变量中并发送给服务器 2");
          }
          /**
           * 广告列表接口
           */

        }, {
          key: "AdvertisingList",
          value: function AdvertisingList() {
            var url = this.HOST + "/jowim/advertising/select_advertising_wechat";
            var postData = null;
            var data = null;
            postData = {
              "token": this.token,
              "programId": this.progarmId
            };
            data = JSON.stringify(postData);
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.open("POST", url, true);
            xhr.send(data);

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                var responseText = JSON.parse(xhr.responseText); // console.log(responseText,"2038");

                if (responseText.status == 0) {
                  self.advertisLength = responseText.result.length; //广告数量

                  self.advertisResult = responseText.result; //本游戏广告

                  console.log(self.advertisLength, '广告数量'); // self.transpondShare();  //右上角转发分享
                }
              }
            };
          }
          /**
           * 插屏广告
           */

        }, {
          key: "BannerAd",
          value: function BannerAd(phone) {
            var width = phone.windowWidth - 300;
            var height = phone.windowHeight;
            var bannerAd = window['wx'].createBannerAd()({
              adUnitId: '',
              style: {
                left: width / 2,
                top: 0,
                width: 300
              }
            });
            bannerAd.onResize(function (res) {
              bannerAd.style.top = height - bannerAd.style.realHeight;
            });
            bannerAd.onError(function (errCode) {
              console.log(errCode, "bbbbbbbb");
            });
            bannerAd.onLoad(function () {
              console.log('banner 广告加载成功');
            }); // 在适合的场景显示 Banner 广告

            bannerAd.show().then(function () {
              return console.log('banner 广告显示');
            })["catch"](function (err) {
              return console.log(err);
            });
            window.BannerAd = bannerAd;
          }
          /**
           * 保存到服务器
           */

        }, {
          key: "ServerSave",
          value: function ServerSave() {
            console.log("超过的分数有吗？：" + this.playPanel.lastScore);
            console.log("最高分有更新吗？：" + this.hightScoreVal);

            if (this.playPanel.lastScore > this.hightScoreVal) {
              console.log("主域lastScore：" + this.playPanel.lastScore); // this.main.scorenum = this.main.scorenum

              this.hightScoreVal = this.playPanel.lastScore;
              console.log(this.hightScoreVal, "主域最高分");
            } else {
              //this.main.scorenum = this.main.highscorenum
              console.log("未超过");
            }

            console.log("这里有被执行吗？");
            var xhr = new XMLHttpRequest();
            xhr.setRequestHeader("Content-Type", "application/json");
            var url = this.HOST + "/jowim/gameData/update_gamedata_game";
            var postData = null;
            var data = null;
            console.log("最高分数据是不是没有改变：" + this.hightScoreVal);
            postData = {
              "token": this.token,
              "programId": this.progarmId,
              "dataSet": [{
                "dataValue": this.hightScoreVal,
                "fieldDataKey": "score" //分数

              }, {
                "dataValue": this.diamondVal,
                "fieldDataKey": "diamondVas" //钻石

              }, {
                "dataValue": this.coinVal,
                "fieldDataKey": "coin" //金币

              }]
            };
            console.log("现在的最高分有被改变吗？" + this.hightScoreVal);
            xhr = new XMLHttpRequest();
            xhr.setRequestHeader("Content-Type", "application/json");
            data = JSON.stringify(postData);
            xhr.open("POST", url, true);
            xhr.send(data);

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) ;
            };
          }
          /**
           * 商品列表接口
           */

        }, {
          key: "productList",
          value: function productList() {}
        }], [{
          key: "Instance",
          //限制产生多个对象

          /*private constructor() {
              super();
          }*/

          /**
           * 获得实例对象
           */
          value: function Instance() {
            return this.instance;
          } //#endregion

        }]);
        return LoadSys;
      }(SystemRoot), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end LoadSys

    }
  };
});

System.register("project:///assets/scripts/Main/Model/MoreGameData.ts", ["cc"], function (_export, _context) {

  var _decorator, _dec, _class, ccclass, property, MoreGameData;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9f933USaHVA0IzvROvHFfKk", "MoreGameData"); // begin MoreGameData


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MoreGameData", MoreGameData = (_dec = ccclass("MoreGameData"), _dec(_class = function MoreGameData(id, imgIconUrl, txtDes) {
        babelHelpers.classCallCheck(this, MoreGameData);
        this.id = id;
        this.imgIconUrl = imgIconUrl;
        this.txtDes = txtDes;
      }) || _class));

      cc._RF.pop(); // end MoreGameData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/RelayRankListData.ts", ["cc"], function (_export, _context) {

  var _decorator, _dec, _class, ccclass, property, RelayRankListData;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "5c77aDwfKZCy5Cw8+aBQIkS", "RelayRankListData"); // begin RelayRankListData


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RelayRankListData", RelayRankListData = (_dec = ccclass("RelayRankListData"), _dec(_class = function RelayRankListData(id, imgLogoUrl, imgIconUrl, txtName, txtScore) {
        babelHelpers.classCallCheck(this, RelayRankListData);
        this.id = id;
        this.imgLogoUrl = imgLogoUrl;
        this.imgIconUrl = imgIconUrl;
        this.txtName = txtName;
        this.txtScore = txtScore;
      }) || _class));

      cc._RF.pop(); // end RelayRankListData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/RelayRankListItem.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, SpriteComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, RelayRankListItem;

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
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "f8ac7LPOfpIz4tkbprZVP0Y", "RelayRankListItem"); // begin RelayRankListItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RelayRankListItem", RelayRankListItem = (_dec = ccclass("RelayRankListItem"), _dec2 = property({
        type: SpriteComponent
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(RelayRankListItem, _Component);

        function RelayRankListItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, RelayRankListItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(RelayRankListItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "imgLogo", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtName", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor4, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        return RelayRankListItem;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLogo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end RelayRankListItem

    }
  };
});

System.register("project:///assets/scripts/Main/Model/SkinItemData.ts", ["cc"], function (_export, _context) {

  var _decorator, Enum, _dec, _class, ccclass, property, SkinType, SkinItemData;

  _export({
    _dec: void 0,
    _class: void 0,
    SkinType: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "28f66RhRiBKvoJNnicP7Bkz", "SkinItemData"); // begin SkinItemData


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (SkinType) {
        SkinType[SkinType["ChallengeSkin"] = 0] = "ChallengeSkin";
        SkinType[SkinType["GoldSkin"] = 1] = "GoldSkin";
        SkinType[SkinType["StampSkin"] = 2] = "StampSkin";
        SkinType[SkinType["TrailingSkin"] = 3] = "TrailingSkin";
      })(SkinType || _export("SkinType", SkinType = {}));

      Enum(SkinType);

      _export("SkinItemData", SkinItemData = (_dec = ccclass("SkinItemData"), _dec(_class =
      /*#__PURE__*/
      function () {
        babelHelpers.createClass(SkinItemData, [{
          key: "imgIconUrl",
          value: function imgIconUrl(_imgIconUrl) {
            throw new Error("Method not implemented.");
          }
        }]);

        function SkinItemData(id, skinType, prefabUrl, imgUrl) {
          babelHelpers.classCallCheck(this, SkinItemData);
          this.id = id;
          this.skinType = skinType;
          this.prefabUrl = prefabUrl;
          this.imgUrl = imgUrl;
        }

        return SkinItemData;
      }()) || _class));

      cc._RF.pop(); // end SkinItemData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/TipsData.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, TipsData;

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
      cc._RF.push(window.module || {}, "572b5Hlz2RBjLt3P2yRF042", "TipsData"); // begin TipsData


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TipsData", TipsData = (_dec = ccclass("TipsData"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(TipsData, _Component);

        function TipsData() {
          babelHelpers.classCallCheck(this, TipsData);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TipsData).apply(this, arguments));
        }

        return TipsData;
      }(Component)) || _class));

      cc._RF.pop(); // end TipsData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/TiwnRankListData.ts", [], function (_export, _context) {

  var TiwnRankListData;
  return {
    setters: [],
    execute: function () {
      cc._RF.push(window.module || {}, "20f64sB9LZEuryp8aSFrXTg", "TiwnRankListData"); // begin TiwnRankListData


      _export("TiwnRankListData", TiwnRankListData = function TiwnRankListData(id, imgLogoUrl, imgIconUrl, txtName, txtScore) {
        babelHelpers.classCallCheck(this, TiwnRankListData);
        this.id = id;
        this.imgLogoUrl = imgLogoUrl;
        this.imgIconUrl = imgIconUrl;
        this.txtName = txtName;
        this.txtScore = txtScore;
      });

      cc._RF.pop(); // end TiwnRankListData

    }
  };
});

System.register("project:///assets/scripts/Main/Model/SkinItem.ts", ["cc", "../Root/PanelRoot.ts", "./SkinItemData.ts"], function (_export, _context) {

  var _decorator, SpriteComponent, PanelRoot, SkinType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, SkinItem;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_SkinItemDataTs) {
      SkinType = _SkinItemDataTs.SkinType;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "62e10IvYz9FdbWyEOUUnfuc", "SkinItem"); // begin SkinItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SkinItem", SkinItem = (_dec = ccclass("SkinItem"), _dec2 = property({
        type: SkinType
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: SpriteComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SkinItem, _PanelRoot);

        function SkinItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SkinItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SkinItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.id = 1;
          babelHelpers.initializerDefineProperty(_this, "skinType", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgSkin", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgBg", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        return SkinItem;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgSkin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end SkinItem

    }
  };
});

System.register("project:///assets/scripts/Main/Model/TiwnRankListItem.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, SpriteComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, TiwnRankListItem;

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
      SpriteComponent = _cc.SpriteComponent;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "87248o78WRPpbl/AJCqZBSs", "TiwnRankListItem"); // begin TiwnRankListItem


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TiwnRankListItem", TiwnRankListItem = (_dec = ccclass("TiwnRankListItem"), _dec2 = property({
        type: SpriteComponent
      }), _dec3 = property({
        type: SpriteComponent
      }), _dec4 = property({
        type: LabelComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(TiwnRankListItem, _Component);

        function TiwnRankListItem() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, TiwnRankListItem);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(TiwnRankListItem)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "imgLogo", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgIcon", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtName", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "txtScore", _descriptor4, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        return TiwnRankListItem;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLogo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end TiwnRankListItem

    }
  };
});

System.register("project:///assets/scripts/Main/View/SignPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/AudioSvc.ts"], function (_export, _context) {

  var _decorator, PanelRoot, AudioSvc, _dec, _dec2, _class, _temp, ccclass, property, SignPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9179fgVOtVGf6H31Ze+k2OW", "SignPanel"); // begin SignPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SignPanel", SignPanel = (_dec = ccclass("SignPanel"), _dec2 = _decorator.menu("View/SignPanel"), _dec(_class = _dec2(_class = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SignPanel, _PanelRoot);

        function SignPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SignPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SignPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.signAwardCfg = null;
          return _this;
        }

        babelHelpers.createClass(SignPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(SignPanel.prototype), "InitPanel", this).call(this); //拿到签到奖励数据

            this.signAwardCfg = this.netSvc.GetSignAwardCfg();
            console.log("SignPanel Init...");
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("SignPanel 关闭");
          } //#region  重复的按钮函数，后面重构

          /**
           * 签到星期一
           */

        }, {
          key: "ClickMondaySignBtn",
          value: function ClickMondaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.mondayCfg, 0, 0, 0, null, null);
            console.log("签到星期一");
          }
          /**
           * 签到星期二
           */

        }, {
          key: "ClickTuesdaySignBtn",
          value: function ClickTuesdaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是400金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.tuesdayCfg, 0, 0, 0, null, null);
            console.log("签到星期二");
          }
          /**
           * 签到星期三
           */

        }, {
          key: "ClickWednessdaySignBtn",
          value: function ClickWednessdaySignBtn() {
            //播放音响
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是500金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.wednessdayCfg, 0, 0, 0, null, null);
            console.log("签到星期三");
          }
          /**
           * 签到星期四
           */

        }, {
          key: "ClickThursdayBtn",
          value: function ClickThursdayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是600金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.thursdayCfg, 0, 0, 0, null, null);
            console.log("签到星期四");
          }
          /**S
           * 签到星期五
           */

        }, {
          key: "ClickFridaySignBtn",
          value: function ClickFridaySignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是800金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.fridayCfg, 0, 0, 0, null, null);
            console.log("签到星期五");
          }
          /**
           * 签到星期六
           */

        }, {
          key: "ClickSaturdayBtn",
          value: function ClickSaturdayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是1000金币
            //更新数据库 

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.saturdayCfg, 0, 0, 0, null, null);
            console.log("签到星期六");
          }
          /**
           * 签到星期天
           */

        }, {
          key: "ClickSundayBtn",
          value: function ClickSundayBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //拿到奖励数据，这里是1500金币
            //更新数据库

            this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.sundayCfg, 0, 0, 0, null, null);
            console.log("签到星期天");
          } //#endregion

          /**
           * 直接签到
           */

        }, {
          key: "ClickJustSignBtn",
          value: function ClickJustSignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //直接签到，不看视频广告
            //发送数据到数据库，更新数据

            console.log("直接签到...");
          }
          /**
           * 双倍签到
           */

        }, {
          key: "ClickDoubleSignBtn",
          value: function ClickDoubleSignBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //看完视频广告，更新双倍数据 
            //发送数据到数据库，更新数据

            console.log("双倍签到...");
          }
        }]);
        return SignPanel;
      }(PanelRoot), _temp)) || _class) || _class));

      cc._RF.pop(); // end SignPanel

    }
  };
});

System.register("project:///assets/scripts/Main/Service/AudioSvc.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, AudioSourceComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, ccclass, property, AudioSvc;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "258e65vkk1DE4jpB6zDhlTv", "AudioSvc"); // begin AudioSvc


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioSvc", AudioSvc = (_dec = ccclass("AudioSvc"), _dec2 = property({
        type: AudioSourceComponent
      }), _dec3 = property({
        type: AudioSourceComponent
      }), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(AudioSvc, _Component);

        function AudioSvc() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, AudioSvc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(AudioSvc)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "bgAudio", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "uiAudio", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(AudioSvc, [{
          key: "InitSvc",
          //#endregion

          /**
           * 初始化管理
           */
          value: function InitSvc() {
            AudioSvc.instance = this; //Instance = this;

            this.uiAudio = this.node.getChildByName("uiAudio").getComponent(AudioSourceComponent);
            this.bgAudio = this.node.getChildByName("bgAudio").getComponent(AudioSourceComponent);
            console.log("Init AudioSvc...");
          }
          /**
           *背景音效
           */

        }, {
          key: "PlayBgMusic",
          value: function PlayBgMusic(url) {
            //需要改

            /* let clip:AudioClip=ResSvc.Instance().LoadAudio(url,this.bgAudio);
             if(this.bgAudio.clip==null||this.bgAudio.clip.string!=clip.name){
                 this.bgAudio.clip=clip;
                 this.bgAudio.loop=isLoop;
                  //播放
                 this.bgAudio.play();
             }*/

            console.log("PlayBgMusic...");
          }
          /**
           * 按钮音效
           */

        }, {
          key: "PlayUIAudio",
          value: function PlayUIAudio(url) {
            try {
              //拿到音效片段

              /*loader.loadRes(url, (err, clip) => {
                   if(err){
                       console.log("load in PlayUIAudio:"+err);
                       return;
                   }
                   this.bgAudio.clip=clip;
              })*/
              //播放
              this.uiAudio.play();
              console.log("PlayUIAudio...");
            } catch (error) {
              console.log("当前音响组件被禁用:" + error);
            }
          }
          /**
           * 小球音效
           */

        }, {
          key: "PlayCharAudio",
          value: function PlayCharAudio(url) {
            try {
              //拿到音效片段

              /* loader.loadRes(url, (err, clip) => {
                   if(err){
                       console.log("load in PlayUIAudio:"+err);
                       return;
                   }
                   this.bgAudio.clip=clip;
              })*/
              //播放
              this.bgAudio.play();
              console.log("PlayCharAudio...");
            } catch (error) {
              console.log("当前音响组件被禁用:" + error);
            }
          }
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
        return AudioSvc;
      }(Component), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bgAudio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "uiAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end AudioSvc

    }
  };
});

System.register("project:///assets/scripts/Main/View/SettleMentPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "./PlayPanel.ts", "../System/MainMgr.ts", "../Controller/GameCtr.ts", "../Service/AudioSvc.ts", "./SkinPanel.ts", "../Service/NetSvc.ts"], function (_export, _context) {

  var _decorator, LabelComponent, UITransformComponent, Vec3, PanelRoot, ShareSvc, PlayPanel, MainMgr, GameCtr, AudioSvc, SkinPanel, NetSvc, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, SettleMentPanel;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      LabelComponent = _cc.LabelComponent;
      UITransformComponent = _cc.UITransformComponent;
      Vec3 = _cc.Vec3;
    }, function (_RootPanelRootTs) {
      PanelRoot = _RootPanelRootTs.PanelRoot;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_PlayPanelTs) {
      PlayPanel = _PlayPanelTs.PlayPanel;
    }, function (_SystemMainMgrTs) {
      MainMgr = _SystemMainMgrTs.MainMgr;
    }, function (_ControllerGameCtrTs) {
      GameCtr = _ControllerGameCtrTs.GameCtr;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_SkinPanelTs) {
      SkinPanel = _SkinPanelTs.SkinPanel;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "17364zWwwVGm4YVBx0Jbpfz", "SettleMentPanel"); // begin SettleMentPanel


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SettleMentPanel", SettleMentPanel = (_dec = ccclass("SettleMentPanel"), _dec2 = _decorator.menu("View/SettleMentPanel"), _dec3 = property({
        type: LabelComponent
      }), _dec4 = property({
        type: PlayPanel
      }), _dec5 = property({
        type: SkinPanel
      }), _dec6 = property({
        type: UITransformComponent
      }), _dec7 = property({
        type: GameCtr
      }), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_PanelRoot) {
        babelHelpers.inherits(SettleMentPanel, _PanelRoot);

        function SettleMentPanel() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SettleMentPanel);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SettleMentPanel)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "txtGoldVal", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "skinPanel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "imgLight", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "gameCtrl", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this.eul = new Vec3(0, 0, 0);
          _this.rotaVal = 0;
          return _this;
        }

        babelHelpers.createClass(SettleMentPanel, [{
          key: "InitPanel",
          value: function InitPanel() {
            babelHelpers.get(babelHelpers.getPrototypeOf(SettleMentPanel.prototype), "InitPanel", this).call(this); //拿到云端用户数据赋值给金币txt

            var pd = NetSvc.Instance().GetUserGameMsg();
            this.goldVal = pd.coinVal;
            console.log("是否拿到本地存储的金币数据：" + pd.coinVal);
            console.log(" SettleMentPanel init...");
          }
        }, {
          key: "update",
          value: function update() {
            this.rotaVal += 1; //旋转imgLight

            this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);
          }
          /**
           * 关闭按钮
           */

        }, {
          key: "ClickCloseBtn",
          value: function ClickCloseBtn() {
            //播放音响
            AudioSvc.Instance().PlayUIAudio(); //super.ClickCloseBtn();

            this.SetPanelState(false);
            console.log("SettleMentPanel 关闭");
          }
          /**
           * 看视频翻一倍
           */

        }, {
          key: "ClickWatchVideoBtn",
          value: function ClickWatchVideoBtn() {
            //看完视频后
            ShareSvc.Instance().WatchVideoForAward(); //回到当前界面
            //奖励翻倍

            this.goldVal = this.goldVal * 2; //更新UI
            //更新数据库
            //清空本次奖励数据

            this.goldVal = 0;
            console.log("看视频翻一倍");
          }
          /**
           * 点击跳过
           */

        }, {
          key: "ClickSkipBtn",
          value: function ClickSkipBtn() {
            //播放音响
            this.audioSvc.PlayUIAudio(); //更新云端数据

            NetSvc.Instance().UpdataInCreaseWechatCloudData(this.goldVal, 0, 0, 0, null, null);
            console.log("更新云数据在结算界面..."); //关闭这个界面

            this.SetPanelState(false); //重置游戏状态

            this.gameCtrl.GameBackToLogin(); //设置皮肤界面的UI

            this.skinPanel.SetSkinGoldVal(this.goldVal, 7); //先传个7，7可能代表连续签到7天
            //打开主界面

            MainMgr.Instance().OpenMainPanel(); //清空本次奖励数据

            this.goldVal = 0;
            console.log("点击跳过");
          }
          /**
           * 设置金币数目
           */

        }, {
          key: "SetGoldValUI",
          value: function SetGoldValUI(val) {
            //设置本次金币数据
            this.goldVal = val * 2;
            console.log("传进来的金币数目是：" + this.goldVal);
            this.txtGoldVal.string = this.goldVal.toString();
          }
        }]);
        return SettleMentPanel;
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "txtGoldVal", [_dec3], {
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
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "skinPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgLight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end SettleMentPanel

    }
  };
});

System.register("project:///assets/scripts/Main/Service/ShareSvc.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, LabelComponent, Enum, _dec, _class, _class2, _temp, ccclass, property, ShareLinkType, ShareSvc;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    ShareLinkType: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
      Enum = _cc.Enum;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "68ed8epxD1I16LD33EBWXWX", "ShareSvc"); // begin ShareSvc


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (ShareLinkType) {
        ShareLinkType[ShareLinkType["None"] = 0] = "None";
        ShareLinkType[ShareLinkType["ShareFriend"] = 1] = "ShareFriend";
        ShareLinkType[ShareLinkType["ShareFlock"] = 2] = "ShareFlock";
        ShareLinkType[ShareLinkType["Both"] = 3] = "Both";
      })(ShareLinkType || _export("ShareLinkType", ShareLinkType = {}));

      Enum(ShareLinkType);

      _export("ShareSvc", ShareSvc = (_dec = ccclass("ShareSvc"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ShareSvc, _Component);

        function ShareSvc() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ShareSvc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ShareSvc)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.isShared = false;
          _this.shareLinkType = ShareLinkType.None;
          _this.isRecycleFinish = false;
          return _this;
        }

        babelHelpers.createClass(ShareSvc, [{
          key: "InitMgr",
          value: function InitMgr() {
            ShareSvc.instance = this; //Instance = this;

            console.log("Init ShareSvc...");
          } //#region  即将超越

          /**
           * 即将超越
           */

        }, {
          key: "SurpassTips",
          value: function SurpassTips(score, messageType) {
            if (CC_WECHATGAME) {
              //发消息给子域
              window['wx'].postMessage({
                messageType: messageType,
                score: score
              });
            }
          } //#endregion
          //#region  跳转小游戏

          /**
           * 跳转小游戏
           */

        }, {
          key: "ToOtherMiniGame",
          value: function ToOtherMiniGame(event) {
            var curNode = event.target; //获取要跳转的游戏的id

            var curId = this.node.getChildByName("id").getComponent(LabelComponent).string;
            window['wx'].navigateToMiniProgram({
              appId: curId,
              success: function success(res) {
                //打开成功
                console.log("跳转小游戏成功");
              },
              fail: function fail(res) {
                console.log("跳转小游戏失败");
              }
            });
          } //#endregion
          //#region  看视频相关

          /**
           * 看视频
           */

        }, {
          key: "WatchVideoMethod",
          value: function WatchVideoMethod() {
            var videoAd = window['wx'].createRewardedVideoAd({
              adUnitId: 'adunit-4f783310ef0d7883'
            });
            videoAd.load().then(function () {
              return videoAd.show();
            })["catch"](function (err) {
              return console.log(err.errMsg);
            });
            videoAd.onError(function (err) {
              console.log(err);
            }); //关闭视频的回调函数

            videoAd.onClose(function (res) {
              if (!videoAd) return;
              videoAd.offClose(); //this.main.seepop.active = false

              if (res && res.isEnded || res === undefined) {
                console.log("双倍奖励");
              } else {
                window['wx'].showToast({
                  title: '您的视频还没看完',
                  icon: 'none',
                  duration: 2000
                }); // 播放中途退出，不下发游戏奖励
                // 您的视频还没看完，无法获得奖励
              }
            });
          }
          /**
           * 看视频换奖励
           */

        }, {
          key: "WatchVideoForAward",
          value: function WatchVideoForAward() {
            this.WatchVideoMethod();
            console.log("看视频抽奖成功...");
          }
          /**
           * 看视频抽皮肤
           */

        }, {
          key: "WatchVideoForSkin",
          value: function WatchVideoForSkin() {
            this.WatchVideoMethod();
            console.log("看视频抽皮肤成功...");
          } //#endregion
          //#region  分享链接相关

          /**
           * 是否分享成功
           */

        }, {
          key: "IsShareOK",
          value: function IsShareOK() {
            var self = this;

            if (babelHelpers["typeof"](window['wx'] != "underfined")) {
              window['wx'].onShow(function (res) {
                if (self.isShared && self.shareLinkType == ShareLinkType.ShareFriend || self.isShared && self.shareLinkType == ShareLinkType.Both) {
                  //分享后返回
                  var curTime = new Date().getTime();

                  if (curTime - self.closeTime >= 3000) {
                    //微信把分享成功的回调关闭了吗？
                    //分享成功
                    console.log("分享成功");
                    self.isShared = false;
                    self.shareLinkType = ShareLinkType.None;
                    self.closeTime = curTime; //业务逻辑
                    //TODO
                  } else {
                    window['wx'].showToast({
                      title: "请分享给不同的好友",
                      icon: 'none'
                    });
                  }
                }

                if (self.isShared && self.shareLinkType == ShareLinkType.ShareFlock || self.isShared && self.shareLinkType == ShareLinkType.Both) {
                  //分享后返回
                  var _curTime = new Date().getTime();

                  if (_curTime - self.closeTime >= 3000) {
                    //微信把分享成功的回调关闭了吗？
                    //分享成功
                    console.log("分享成功");
                    self.isShared = false;
                    self.shareLinkType = ShareLinkType.ShareFlock;
                    self.closeTime = _curTime; //业务逻辑
                    //TODO
                  } else {
                    window['wx'].showToast({
                      title: "请分享给不同的群",
                      icon: 'none'
                    });
                  }
                }
              });
            }
          }
          /**
           *分享链接
           */

        }, {
          key: "ShareLink",
          value: function ShareLink(shareType) {
            window['wx'].showToast({
              title: "分享链接啊",
              icon: "none"
            });
            this.isShared = true;
            this.shareLinkType = shareType;
            this.closeTime = new Date().getTime();

            if (CC_WECHATGAME) {
              window['wx'].shareAppMessage({
                title: "分享微信链接",
                imageUrl: ""
              });
            }

            console.log("分享链接成功...");
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
          } //#endregion

        }]);
        return ShareSvc;
      }(Component), _class2.instance = null, _temp)) || _class));

      cc._RF.pop(); // end ShareSvc

    }
  };
});

System.register("project:///assets/scripts/Main/Root/PanelRoot.ts", ["cc", "../Service/ShareSvc.ts", "../Service/ResSvc.ts", "../Service/AudioSvc.ts", "../Service/NetSvc.ts"], function (_export, _context) {

  var _decorator, Component, UITransformComponent, ShareSvc, ResSvc, AudioSvc, NetSvc, _dec, _class, ccclass, property, PanelRoot;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransformComponent = _cc.UITransformComponent;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_ServiceResSvcTs) {
      ResSvc = _ServiceResSvcTs.ResSvc;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "df90aYBxZ1K6at3xvqr1MVD", "PanelRoot"); // begin PanelRoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PanelRoot", PanelRoot = (_dec = ccclass("PanelRoot"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(PanelRoot, _Component);

        function PanelRoot() {
          babelHelpers.classCallCheck(this, PanelRoot);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PanelRoot).apply(this, arguments));
        }

        babelHelpers.createClass(PanelRoot, [{
          key: "SetPanelState",
          //#region  服务持有
          //#endregion

          /**
           * 设置窗体的显示隐藏状态
           */
          value: function SetPanelState() {
            var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (this.node.active != isActive) {
              this.SetActive(this.node.getComponent(UITransformComponent), isActive);
            }

            if (isActive) {
              this.InitPanel();
            } else {
              this.ClearPanel();
            }
          }
          /**
           * 初始化窗体
           */

        }, {
          key: "InitPanel",
          value: function InitPanel() {
            this.resSvc = ResSvc.Instance();
            this.audioSvc = AudioSvc.Instance();
            this.netSvc = NetSvc.Instance();
            this.shareSvc = ShareSvc.Instance();
            console.log("初始化窗体服务...");
          }
          /**
           * 清理窗体
           */

        }, {
          key: "ClearPanel",
          value: function ClearPanel() {
            this.resSvc = null;
            this.audioSvc = null;
            this.netSvc = null;
            this.shareSvc = null;
            console.log("清理窗体服务...");
          }
          /**
           * 获取窗体状态
           */

        }, {
          key: "GetPanelState",
          value: function GetPanelState() {
            return this.node.active;
          }
          /**
           * 点击关闭
           */

          /*public ClickCloseBtn() {  //出现问题
            
              //this.node.active = false;
                console.log("继承窗体关闭....");
          }*/
          //#region   显示隐藏函数重载

          /*protected SetActive(go:UITransformComponent,isActive:boolean);
          protected SetActive(go: LabelComponent, isActive: boolean ) ;*/
          //protected SetActive(go: any, isActive: any) {}

        }, {
          key: "SetActive",
          value: function SetActive(go) {
            var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            go.node.active = isActive;
          }
          /* protected SetActive(go: LabelComponent, isActive: boolean = true) {
               go.enabled=isActive;
          }*/
          //#endregion
          //#region 设置文本函数的重载

        }, {
          key: "SetText",
          value: function SetText(txt) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            txt.string = context;
          } //#endregion

        }]);
        return PanelRoot;
      }(Component)) || _class));

      cc._RF.pop(); // end PanelRoot

    }
  };
});

System.register("project:///assets/scripts/Main/Root/SystemRoot.ts", ["cc", "../Service/ResSvc.ts", "../Service/AudioSvc.ts", "../Service/NetSvc.ts"], function (_export, _context) {

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

System.register("project:///assets/scripts/Main/Root/GameRoot.ts", ["cc", "../Service/ShareSvc.ts", "../Service/NetSvc.ts", "../Service/AudioSvc.ts", "../Service/ResSvc.ts"], function (_export, _context) {

  var _decorator, Component, ShareSvc, NetSvc, AudioSvc, ResSvc, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, ccclass, property, GameRoot;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_ServiceShareSvcTs) {
      ShareSvc = _ServiceShareSvcTs.ShareSvc;
    }, function (_ServiceNetSvcTs) {
      NetSvc = _ServiceNetSvcTs.NetSvc;
    }, function (_ServiceAudioSvcTs) {
      AudioSvc = _ServiceAudioSvcTs.AudioSvc;
    }, function (_ServiceResSvcTs) {
      ResSvc = _ServiceResSvcTs.ResSvc;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "50f3281mX9CCr2mNvEePOyn", "GameRoot"); // begin GameRoot


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameRoot", GameRoot = (_dec = ccclass("GameRoot"), _dec2 = property('LoadPanel'), _dec3 = property('TipsPanel'), _dec(_class = (_class2 = (_temp = _class3 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameRoot, _Component);

        function GameRoot() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameRoot);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameRoot)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "loadPanel", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tipPanel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameRoot, [{
          key: "start",
          value: function start() {
            GameRoot.instance = this;
            console.log("Game Start...");
            this.ClearUIRoot();
            this.Init();
          }
          /**
           * 初始化游戏
           */

        }, {
          key: "Init",
          value: function Init() {
            //服务模块初始化
            var netSvc = this.node.getComponent(NetSvc);
            netSvc.InitSvc();
            var audioSvc = this.node.getComponent(AudioSvc);
            audioSvc.InitSvc();
            var resSvc = this.node.getComponent(ResSvc);
            resSvc.InitSvc();
            var shareSvc = this.node.getComponent(ShareSvc);
            shareSvc.InitMgr(); //业务系统初始化
            //#region 会造成循环引用

            /* let mainMgr: MainMgr = this.node.getComponent(MainMgr);
             mainMgr.InitMgr();
             let shareSvc: ShareSvc = this.node.getComponent(ShareSvc);
             shareSvc.InitMgr();*/
            //#endregion
            //通过字符串而非类本身来获取 MainMgr 组件
            // "MainMgr" 是 类 MainMgr  的 cc 名称，因为有：
            // ```ts
            // @ccclass("MainMgr") export class MainMgr
            // ```

            var mainMgr = this.node.getComponent('MainMgr');
            mainMgr.InitMgr();
            var loadSys = this.node.getComponent('LoadSys');
            loadSys.InitSys(); //进入场景并加载相应UI (Cocos3D不支持多场景同屏，所以要改成常驻节点)
            //但是我们可以加载预制体啊！
            //TODO

            loadSys.EnterLogin();
            console.log("Game Init...");
          }
          /**
           * 清理UIRoot
           */

        }, {
          key: "ClearUIRoot",
          value: function ClearUIRoot() {
            //canvas:Node=

            /*let canvasPos:Node[]=this.node.getChildByName("UIRoot");
            for(let i=0;i<canvasPos.c;i++){
                canvasPos.getChildByUuid(i).active=false;
            }*/
            console.log("隐藏整个节点...");
          }
          /**
           * 添加提示信息
           */

        }, {
          key: "AddTips",
          value: function AddTips(tips) {
            //this.tipPanel.AddTips(tips);
            GameRoot.instance.tipPanel.AddTips(tips);
          } //#region  设置数据

          /**
           * 设置玩家数据
           */

        }, {
          key: "SetPlayerData",
          value: function SetPlayerData(data) {
            //this.playerData=data.playerData;//这个有错。
            console.log("设置玩家数据...");
          }
          /**
           * 设置钻石数据
           */

        }, {
          key: "SetDiamond",
          value: function SetDiamond(data) {
            console.log("设置钻石数据成功...");
          }
          /**
           * 设置单人排行榜数据
           */

        }, {
          key: "SetTiwnRankListData",
          value: function SetTiwnRankListData(data) {
            //这个函数好像不需要
            //this.playerData.tiwnRankItemData = data.tiwnRankItemData;
            console.log("设置单人排行榜数据");
          }
          /**
           * 设置接力排行榜数据
           */

        }, {
          key: "SetRelayRankListData",
          value: function SetRelayRankListData(data) {
            //这个函数好像不需要
            // this.playerData.tiwnRankItemData = data.relayRankItemData;//可能有问题
            console.log("设置接力排行榜数据");
          } //#endregion

        }], [{
          key: "Instance",
          //限制产生多个对象

          /*private constructor() {
              super();
          }*/

          /**
           * 获得实例对象
           */
          value: function Instance() {
            return this.instance;
          } //#endregion
          //#region  会造成循环引用

          /* @property({ type: LoadPanel })
           public loadPanel: LoadPanel = null;*/
          //#endregion
          // 通过字符串而非类本身来标记属性类型为 LoadPanel；"loadPanel" 是 类 LoadPanel  的 cc 名称

        }]);
        return GameRoot;
      }(Component), _class3.instance = null, _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "loadPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameRoot

    }
  };
});

System.register("project:///assets/scripts/Main/View/SkinPanel.ts", ["cc", "../Root/PanelRoot.ts", "../Model/SkinItemData.ts", "../Model/SkinItem.ts", "../Service/AudioSvc.ts", "../../config/PathCfg.ts"], function (_export, _context) {

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
            var _this2 = this; //如果是挑战，则生成在挑战容器中；如果是金币，则生成在金币容器中；如果是印记，则生成在对应的容器中；如果是拖尾，则生成在拖尾容器中
            //同时绑定对应事件。


            data.forEach(function (element) {
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

System.register("project:///assets/scripts/Main/Model/PlayerData.ts", ["cc"], function (_export, _context) {

  var _decorator, _dec, _class, _class2, _temp, ccclass, property, PlayerData;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "1da36NEZ8RDCKEVPoXvDHyf", "PlayerData"); // begin PlayerData


      ccclass = _decorator.ccclass;
      property = _decorator.property; //网络玩家数据协议

      _export("PlayerData", PlayerData = (_dec = ccclass("PlayerData"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        babelHelpers.createClass(PlayerData, null, [{
          key: "Instance",
          //#region  单例
          //private static instance: NetMgr = new NetMgr();
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
        }]); //public tiwnRankItemData:TiwnRankListItem;  //暂时不用
        //public relayRankItemData:RelayRankListItem[];

        function PlayerData(name, coinVal, lastScore, currentScore, hightestScore, diamondVal) {
          babelHelpers.classCallCheck(this, PlayerData);
          this.name = null;
          this.CoinVal = null;
          this.lastScore = null;
          this.currentScore = null;
          this.HightestScore = null;
          this.DiamondVal = null;
          this.name = name;
          this.CoinVal = coinVal;
          this.lastScore = lastScore;
          this.currentScore = currentScore;
          this.HightestScore = hightestScore;
          this.DiamondVal = diamondVal;
        }

        return PlayerData;
      }(), _class2.instance = null, _temp)) || _class));

      cc._RF.pop(); // end PlayerData

    }
  };
});

System.register("project:///assets/scripts/Main/Service/ResSvc.ts", ["cc", "../Root/GameRoot.ts", "../../config/PathCfg.ts", "../Model/SkinItemData.ts", "../Model/PlayerData.ts", "../Model/TiwnRankListData.ts", "../Model/RelayRankListData.ts", "../Model/MoreGameData.ts"], function (_export, _context) {

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

System.register("project:///assets/scripts/Main/Service/NetSvc.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, _class2, _temp, ccclass, property, UserGameMsg, SignAwardConfig, NetSvc;

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
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "e8297gUgq9Lf56Qjonv8Kj/", "NetSvc"); // begin NetSvc


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UserGameMsg", UserGameMsg = function UserGameMsg(coin, diamond, hightscore, canMode, progress, canSign) {
        babelHelpers.classCallCheck(this, UserGameMsg);
        this.coinVal = 0;
        this.diamondVal = 0;
        this.hightscoreVal = 0;
        this.isCanMode = false;
        this.progressVal = 0;
        this.isCanSign = true;
        this.coinVal = coin;
        this.diamondVal = diamond;
        this.hightscoreVal = hightscore;
        this.isCanMode = canMode;
        this.progressVal = progress;
        this.isCanSign = canSign;
      });

      _export("SignAwardConfig", SignAwardConfig = function SignAwardConfig(monday, tuesday, wednessday, thursday, friday, saturday, sunday) {
        babelHelpers.classCallCheck(this, SignAwardConfig);
        this.mondayCfg = 0;
        this.tuesdayCfg = 0;
        this.wednessdayCfg = 0;
        this.thursdayCfg = 0;
        this.fridayCfg = 0;
        this.saturdayCfg = 0;
        this.sundayCfg = 0;
        this.mondayCfg = monday;
        this.tuesdayCfg = tuesday;
        this.wednessdayCfg = wednessday;
        this.thursdayCfg = thursday;
        this.fridayCfg = friday;
        this.saturdayCfg = saturday;
        this.sundayCfg = sunday;
      });

      _export("NetSvc", NetSvc = (_dec = ccclass("NetSvc"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(NetSvc, _Component);

        function NetSvc() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, NetSvc);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(NetSvc)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this.targetDataBaseUrl = 'HappyBallData';
          _this.targetSignAwardUrl = 'SignAwardConfig';
          _this.userOpenID = '';
          _this.userDataID = '';
          _this.userGameMsg = null;
          _this.signAwardCfg = null;
          return _this;
        }

        babelHelpers.createClass(NetSvc, [{
          key: "GetUserGameMsg",

          /**
           * 外部访问UserGameMsg
           */
          value: function GetUserGameMsg() {
            return this.userGameMsg;
          }
          /**
           *外部返回signAwardCfg
           */

        }, {
          key: "GetSignAwardCfg",
          value: function GetSignAwardCfg() {
            return this.signAwardCfg;
          }
        }, {
          key: "InitSvc",
          value: function InitSvc() {
            NetSvc.instance = this; //初始化云服务

            window['wx'].cloud.init(); //获取数据库引用

            this.db = window['wx'].cloud.database(); //初始化CMD云端指令

            this.cmd = this.db.command; //拿到用户的openId

            this.GetWechatOpenId(); //初始化广告列表接口
            //this.AdvertisingList();
            //this.BannerAd(phone);

            console.log("Init NetMgr...");
          }
          /**
           * 获取当前用户的OpenId
           */

        }, {
          key: "GetWechatOpenId",
          value: function GetWechatOpenId() {
            var _this2 = this;

            var self = this;
            window['wx'].cloud.callFunction({
              name: 'GetWechatOpenId',
              complete: function complete(res) {
                console.log('云函数获取到的openid：' + res.result._openid);
                var openid = res.result.openid;
                self.userOpenID = openid;
                console.log("赋值给了userOpenID：" + self.userOpenID); //查询签到配置数据

                _this2.QuerySignAwardConfigData(); //如果userOpenID赋值成功


                if (self.userOpenID != "") {
                  //查询/获取微信云服务数据库数据
                  _this2.QueryWechatCloudData();
                } //如果没有，则反复查询
                else {
                    self.GetWechatOpenId();
                  }
              }
            });
          }
          /**
           * 查询/获取微信云服务数据库数据
           */

        }, {
          key: "QueryWechatCloudData",
          value: function QueryWechatCloudData() {
            var self = this;
            self.db.collection(self.targetDataBaseUrl).where({
              _openid: "'" + self.userOpenID + "'"
            }).get({
              complete: function complete(res) {
                //如果存在当前用户
                if (res.data.length > 0) {
                  console.log("查询到当前用户：" + res.data); //赋值UserDataId
                  //持有云端数据

                  self.userGameMsg = new UserGameMsg(res.data[0].CoinVal, res.data[0].DiamondVal, res.data[0].HightscoreVal, res.data[0].isCanMode, res.data[0].progressVal, res.data[0].isCanSign);
                  console.log("持有云端用户数据：" + self.userGameMsg);
                } //如果不存在当前用户
                else {
                    console.log("当前用户数据为空：" + res.data);
                    self.InsertWechatCloudData();
                  }

                console.log("查询云端用户数据完成...");
              }
            });
            console.log("查询云端用户数据...");
          }
          /**
           * 插入微信云服务数据库数据
           */

        }, {
          key: "InsertWechatCloudData",
          value: function InsertWechatCloudData() {
            var self = this; //获取当前时间

            var data = new Date();
            var sign1 = "-";
            var sign2 = ":";
            var curYear = data.getFullYear().toString();
            var curMonth = data.getMinutes().toString();
            var curDay = data.getDay().toString();
            var curHour = data.getHours().toString();
            var curMinutes = data.getMinutes().toString();
            var curSeonds = data.getSeconds().toString();
            var curTime = curYear + sign1 + curMonth + sign1 + curDay + " " + curHour + sign2 + curMinutes + sign2 + curSeonds;
            self.db.collection(self.targetDataBaseUrl).add({
              // data 字段表示需新增的 JSON 数据
              data: {
                //_id: self.userOpenID, // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                Description: "欢乐球球数据库数据",
                LastUpdateTime: new Date(curTime),
                CoinVal: 199,
                DiamondVal: 188,
                HightscoreVal: 0,
                Progress: 0,
                // 为待办事项添加一个地理位置（113°E，23°N）
                location: new self.db.Geo.Point(113, 23),
                isCanMode: false,
                isCanSign: true
              },
              complete: function complete(res) {
                console.log("插入微信云数据完成：" + res.data); //再次查询

                self.QueryWechatCloudData();
                console.log("再次查询当前用户数据是否存在...");
              }
            });
          }
          /**
           * 更新微信云服务数据库数据(减少)
           */

        }, {
          key: "UpdataDecreaseWechatCloudData",
          value: function UpdataDecreaseWechatCloudData(coinVal, diamondVal, hightscoreVal, progress, isCanMode, isCanSign) {
            console.log("开始更新该用户微信云数据....");
            var self = this;
            self.db.collection(self.targetDataBaseUrl).doc(self.userDataID).update({
              // data 传入需要局部更新的数据
              data: {
                // 表示将将CoinVal数据更新
                CoinVal: self.cmd.inc(-coinVal),
                DiamondVal: self.cmd.inc(-diamondVal),
                HightscoreVal: self.cmd.inc(-hightscoreVal),
                isCanMode: self.cmd.inc(-isCanMode),
                progressVal: self.cmd.inc(-progress),
                isCanSign: isCanSign
              },
              success: console.log("更新成功"),
              complete: function complete(res) {
                console.log("更新微信云服务数据库数据完成：" + res);
              }
            });
          }
          /**
           * 更新微信云服务数据库数据(增加)
           */

        }, {
          key: "UpdataInCreaseWechatCloudData",
          value: function UpdataInCreaseWechatCloudData(coinVal, diamondVal, hightscoreVal, progress, isCanMode, isCanSign) {
            console.log("开始更新该用户微信云数据:" + coinVal);
            var self = this;
            self.db.collection(self.targetDataBaseUrl).doc(self.userDataID).update({
              // data 传入需要局部更新的数据
              data: {
                // 表示将将CoinVal数据更新
                CoinVal: self.cmd.inc(coinVal),
                DiamondVal: self.cmd.inc(diamondVal),
                HightscoreVal: self.cmd.inc(hightscoreVal),
                isCanMode: isCanSign,
                ProgressVal: self.cmd.inc(progress),
                isCanSign: isCanSign
              },
              success: console.log("更新成功"),
              complete: function complete(res) {
                console.log("更新微信云服务数据库数据完成：" + res);
              }
            });
          }
          /**
           * 查询签到奖励数据配置
           */

        }, {
          key: "QuerySignAwardConfigData",
          value: function QuerySignAwardConfigData() {
            console.log("查询签到配置...");
            var self = this;
            self.db.collection('signcfg').get({
              complete: function complete(res) {
                //如果存在当前用户
                // if (res.data.length > 0) {
                console.log("查询到当前配置：" + res.data); // }     

                console.log("查询配置完成...");
              }
            });
            console.log("查询签到配置结束");
          } //self.signAwardCfg = new SignAwardConfig(res.data[0].Monday, res.data[0].Tuesday, res.data[0].Wednessday, res.data[0].Thursday, res.data[0].Friday, res.data[0].Saturday, res.data[0].Sunday)

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
          } //#endregion

        }]);
        return NetSvc;
      }(Component), _class2.instance = null, _class2.obj = "lock", _temp)) || _class));

      cc._RF.pop(); // end NetSvc

    }
  };
});
