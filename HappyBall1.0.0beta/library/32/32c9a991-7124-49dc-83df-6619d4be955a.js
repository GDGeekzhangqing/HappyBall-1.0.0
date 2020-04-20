"use strict";

System.register(["cc", "../../helps/Common.ts", "../Root/PanelRoot.ts", "../Service/ShareSvc.ts", "../System/MainMgr.ts", "../Service/AudioSvc.ts"], function (_export, _context) {
  "use strict";

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
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imgRoatObj", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end HappyGuyPanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L0hhcHB5R3V5UGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlZlYzMiLCJ0d2VlblV0aWwiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIlF1YXQiLCJDb21tb24iLCJQYW5lbFJvb3QiLCJTaGFyZVN2YyIsIk1haW5NZ3IiLCJBdWRpb1N2YyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkhhcHB5R3V5UGFuZWwiLCJtZW51IiwidHlwZSIsInRhcmdldElkIiwiZXVsIiwicXVhIiwiaXNDYW5Mb3R0ZXJ5IiwiY29uc29sZSIsImxvZyIsImltZ1JvYXRPYmoiLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJpZCIsIlJhbmRvbUFsbCIsImV1bGVyIiwiY29weSIsInRvIiwidW5pb24iLCJyZXBlYXQiLCJzdGFydCIsIkluc3RhbmNlIiwiUGxheVVJQXVkaW8iLCJTZXRQYW5lbFN0YXRlIiwiV2F0Y2hWaWRlb0ZvckF3YXJkIiwiR2V0QXdhcmQiLCJSc3BIYXBweUd1eURhdGEiLCJ0aXBzUGFuZWwiLCJBZGRUaXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxvQixPQUFBQSxvQjtBQUFzQkMsTUFBQUEsSSxPQUFBQSxJOztBQUNwRUMsTUFBQUEsTSxrQkFBQUEsTTs7QUFDQUMsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7QUFDQUMsTUFBQUEsTyxvQkFBQUEsTzs7QUFDQUMsTUFBQUEsUSxzQkFBQUEsUTs7O29GQUhnRTs7O0FBSWpFQyxNQUFBQSxPLEdBQXNCVixVLENBQXRCVSxPO0FBQVNDLE1BQUFBLFEsR0FBYVgsVSxDQUFiVyxROzsrQkFJSkMsYSxXQUZaRixPQUFPLENBQUMsZUFBRCxDLFVBQ1BWLFVB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WUFBTCxJQUFxQixLQUF6QixFQUFnQztBQUM1QlYsY0FBQUEsT0FBTyxDQUFDd0IsUUFBUixHQUFtQk0sU0FBbkIsQ0FBNkJDLE9BQTdCLENBQXFDLG9CQUFyQztBQUNILGFBSm9CLENBS3JCOzs7QUFDQSxnQkFBSSxLQUFLckIsWUFBTCxJQUFxQixJQUF6QixFQUErQjtBQUMzQixtQkFBS2tCLFFBQUw7QUFDSDtBQUNKOzs7UUE1SThCOUIsUzs7Ozs7aUJBSVcsSTs7OztvQkFaNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHR3ZWVuVXRpbCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIFF1YXQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4uLy4uL2hlbHBzL0NvbW1vblwiO1xyXG5pbXBvcnQgeyBQYW5lbFJvb3QgfSBmcm9tIFwiLi4vUm9vdC9QYW5lbFJvb3RcIjtcclxuaW1wb3J0IHsgU2hhcmVTdmMgfSBmcm9tIFwiLi4vU2VydmljZS9TaGFyZVN2Y1wiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4uL1N5c3RlbS9NYWluTWdyXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiSGFwcHlHdXlQYW5lbFwiKVxyXG5AX2RlY29yYXRvci5tZW51KFwiVmlldy9IYXBweUd1eVBhbmVsXCIpXHJcbmV4cG9ydCBjbGFzcyBIYXBweUd1eVBhbmVsIGV4dGVuZHMgUGFuZWxSb290IHtcclxuICAgIHB1YmxpYyB0YXJnZXRJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB9KVxyXG4gICAgcHVibGljIGltZ1JvYXRPYmo6IFVJVHJhbnNmb3JtQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgZXVsOiBWZWMzID0gbmV3IFZlYzMoMCwgMCwgMCk7XHJcbiAgICBwdWJsaWMgcXVhOiBRdWF0ID0gbmV3IFF1YXQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuiDveaKveWlllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDYW5Mb3R0ZXJ5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBJbml0UGFuZWwoKSB7XHJcbiAgICAgICAgLy/lhbblrp5VSemHkeW4geeahOaVsOaNruS4jeiDveaYr+WbvueJh+S9nOatu+eahO+8jOW6lOivpeaYr+mAmui/h+e9kee7nOaVsOaNrui/m+ihjOaUueWPmOeahFxyXG4gICAgICAgIC8v5omA5Lul77yM5Zyo5q+P5qyh5omT5byA56qX5L2T5pe26YO95bqU6K+l6K+35rGC5LiA5qyh572R57uc5pWw5o2u77yM54S25ZCO5Yi35pawVUlcclxuICAgICAgICAvL+iHs+S6juaYr+aMh+S7pOWQjOatpeaYr+i/mOaYr+S6i+S7tuWQjOatpVxyXG4gICAgICAgIC8v55yL562W5YiSXHJcbiAgICAgICAgLy9TbyDpnIDopoHkuKpVcGRhdGVVSSgp77yM6L+Z5Liq5pa55rOV77yM5Zug5Li655uu5YmN55qE5ZCE5Liq6Z2i5p2/5Lmf5LiN5piv6YO96KaB6K+35rGC5pWw5o2u77yM5omA5Lul5bqU6K+l5aOw5piO5Li65oq96LGh5pa55rOV77yM5L2G5piv5aW95YOP5oq96LGh5pa55rOV5b+F6aG75piv5oq96LGh57G777ybXHJcbiAgICAgICAgc3VwZXIuSW5pdFBhbmVsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYXBweUd1eVBhbmVsIGluaXQuLi5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmltZ1JvYXRPYmoubm9kZS5ldWxlckFuZ2xlcyA9IHRoaXMuZXVsO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcIuaIkeS4gOebtOWcqOiiq+iwg+eUqC4uLu+8n++8n++8n1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+WlluWKse+8iOWFtuWunuaIkeS7rOW6lOivpeaKiumihOWFiOmaj+acuuWlveeahOWlluWKseeJqeWTgUlE5pS+5Zyo5pyN5Yqh56uv6L+b6KGM6K6h566X77yJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRBd2FyZCgpIHtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblm77niYfnmoTmrKfmi4nop5JcclxuICAgICAgICB0aGlzLmltZ1JvYXRPYmoubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDAsIDMwKTtcclxuXHJcbiAgICAgICAgLy/pmo/mnLrkuIDkuKpJRO+8jOavj+S4qklE5a+55bqU5LiA5Liq6KeS5bqm77yM5Lmf5a+55bqU5LiA5Liq5Lqn5ZOBXHJcbiAgICAgICAgLy9lZ++8mjEtPjYwwrAgMi0+MTIwwrAgXHJcbiAgICAgICAgbGV0IGlkID0gQ29tbW9uLlJhbmRvbUFsbCgxLCA2KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaXi+i9rOeahElE5piv5aSa5bCR77yaXCIgKyBpZCk7XHJcbiAgICAgICAgLy/ojrflvpfopoHml4vovaznmoTop5LluqZcclxuICAgICAgICBsZXQgZXVsZXIgPSAtKGlkICogNjApICsgMzA7XHJcblxyXG4gICAgICAgIC8vI3JlZ2lvbiAg5pa55rOV5LiA77ya5qyn5ouJ6KeSXHJcbiAgICAgICAgLy9sZXQgcm90YTogVmVjMyA9IG5ldyBWZWMzKDAsIDAsIGV1bGVyKTtcclxuICAgICAgICAvL+aXi+i9rOWbuuWumueahOinkuW6plxyXG4gICAgICAgIC8vdHdlZW5VdGlsKHRoaXMuaW1nUm9hdFBvcy5ub2RlLnJvdGF0aW9uLmdldEV1bGVyQW5nbGVzKS50bygzMDAsIHJvdGEpO1xyXG4gICAgICAgIFZlYzMuY29weSh0aGlzLmV1bCwgdGhpcy5ub2RlLmV1bGVyQW5nbGVzKTtcclxuXHJcbiAgICAgICAgdHdlZW5VdGlsKHRoaXMuZXVsKVxyXG4gICAgICAgICAgICAudG8oNiwgbmV3IFZlYzMoMCwgMCwgZXVsZXIgKyA2MCkpXHJcbiAgICAgICAgICAgIC50byg2LCBuZXcgVmVjMygwLCAwLCBldWxlcikpXHJcbiAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8jZW5kcmVnaW9uIFxyXG5cclxuICAgICAgICAvLyNyZWdpb24gIOaWueazleS6jCAg5Zub5YWD5pWwXHJcblxyXG4gICAgICAgIC8vIFF1YXQuY29weSh0aGlzLnF1YSwgdGhpcy5ub2RlLnJvdGF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcXVhdDEgPSBuZXcgUXVhdCgpO1xyXG4gICAgICAgIC8vIFF1YXQuZnJvbUV1bGVyKHF1YXQxLCA5MCwgOTAsIDkwKTtcclxuICAgICAgICAvLyBjb25zdCBxdWF0MiA9IG5ldyBRdWF0KCk7XHJcbiAgICAgICAgLy8gIFF1YXQuZnJvbUV1bGVyKHF1YXQyLCAwLCAwLCAwKTtcclxuICAgICAgICAvLyB0d2VlblV0aWwodGhpcy5xdWEpXHJcbiAgICAgICAgLy8gICAgIC50byg2LCBxdWF0MSwgeyBlYXNpbmc6ICdCb3VuY2UtSW5PdXQnIH0pXHJcbiAgICAgICAgLy8gICAgIC50byg2LCBxdWF0MiwgeyBlYXNpbmc6ICdFbGFzdGljLU91dCcgfSlcclxuICAgICAgICAvLyAgICAgLnVuaW9uKClcclxuICAgICAgICAvLyAgICAgLnJlcGVhdChJbmZpbml0eSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICAvL+abtOaWsOaVsOaNruWIsOaVsOaNruW6k1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5oq95aWW5pWw5o2u5Yiw5pWw5o2u5bqTLi4uXCIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmir3lpZbkuK0uLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8vc3VwZXIuQ2xpY2tDbG9zZUJ0bigpO1xyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFwcHlHdXlQYW5lbCDlhbPpl61cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnnIvop4bpopHmir3lpZZcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrV2F0Y2hWaWRlb0xvdHRlcnlCdG4oKSB7XHJcbiAgICAgICAgLy/mkq3mlL7pn7Plk41cclxuICAgICAgICBBdWRpb1N2Yy5JbnN0YW5jZSgpLlBsYXlVSUF1ZGlvKCk7XHJcbiAgICAgICAgLy/miZPlvIDnnIvop4bpopHmuKDpgZMo6L+Z5Liq5pa55rOV57uP5bi455So77yM5bqU6K+l5bCB6KOF5ZyoU2hhcmVTdmMudHPkuK0pXHJcbiAgICAgICAgLy8gdGhpcy5zaGFyZVN2Yy5XYXRjaFZpZGVvRm9yQXdhcmQoKTsgIC8v6L+Z5Liq5Li65LuA5LmI5LiN6IO96L+Z5qC36LCD55So77yf77yf77yfXHJcbiAgICAgICAgU2hhcmVTdmMuSW5zdGFuY2UoKS5XYXRjaFZpZGVvRm9yQXdhcmQoKTtcclxuICAgICAgICAvL+eci+WujOW8gOWni+aKveWlllxyXG4gICAgICAgIHRoaXMuR2V0QXdhcmQoKTsvL+i/meS4quW6lOivpeebkeWQrOWtkOWfn+WPkea2iOaBr1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFjei0ueaKveS4gOasoe+8iOavj+WkqeaciW7vvIhuPjAsbuWxnuS6jk7vvInmrKHvvIlcclxuICAgICAqL1xyXG4gICAgcHVibGljIENsaWNrRnJlZUxvdHRleUJ0bigpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+ivt+axgue9kee7nOaVsOaNru+8jOWIpOaWreiDveWQpui/m+ihjOWFjei0ueaKveWlllxyXG4gICAgICAgIHRoaXMuUnNwSGFwcHlHdXlEYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLor7fnnIvop4bpopHmir3lpZYhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+35rGC572R57uc5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZXFIYXBweUd1eURhdGEoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYLmir3lpZbnvZHnu5zmlbDmja4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbnuW6lOe9kee7nOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUnNwSGFwcHlHdXlEYXRhKCkgeyAvL+mcgOS8oOWFpeaVsOaNruWPguaVsCBUT0RPXHJcbiAgICAgICAgLy/lpoLmnpzkuI3og73vvIxUaXBz5LiA5Liq5raI5oGv77ya6K+355yL6KeG6aKR5oq95aWWXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5Mb3R0ZXJ5ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIE1haW5NZ3IuSW5zdGFuY2UoKS50aXBzUGFuZWwuQWRkVGlwcyhcIuW9k+WkqeWFjei0ueasoeaVsOW3sue7j+eUqOWujCzor7fnnIvop4bpopHmir3lpZbvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5aaC5p6c5Y+v5Lul77yM5bCx5oq95aWWXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5Mb3R0ZXJ5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5HZXRBd2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19