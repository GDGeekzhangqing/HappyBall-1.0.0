"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TZXJ2aWNlL05ldFN2Yy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVXNlckdhbWVNc2ciLCJjb2luIiwiZGlhbW9uZCIsImhpZ2h0c2NvcmUiLCJjYW5Nb2RlIiwicHJvZ3Jlc3MiLCJjYW5TaWduIiwiY29pblZhbCIsImRpYW1vbmRWYWwiLCJoaWdodHNjb3JlVmFsIiwiaXNDYW5Nb2RlIiwicHJvZ3Jlc3NWYWwiLCJpc0NhblNpZ24iLCJTaWduQXdhcmRDb25maWciLCJtb25kYXkiLCJ0dWVzZGF5Iiwid2VkbmVzc2RheSIsInRodXJzZGF5IiwiZnJpZGF5Iiwic2F0dXJkYXkiLCJzdW5kYXkiLCJtb25kYXlDZmciLCJ0dWVzZGF5Q2ZnIiwid2VkbmVzc2RheUNmZyIsInRodXJzZGF5Q2ZnIiwiZnJpZGF5Q2ZnIiwic2F0dXJkYXlDZmciLCJzdW5kYXlDZmciLCJOZXRTdmMiLCJ0YXJnZXREYXRhQmFzZVVybCIsInRhcmdldFNpZ25Bd2FyZFVybCIsInVzZXJPcGVuSUQiLCJ1c2VyRGF0YUlEIiwidXNlckdhbWVNc2ciLCJzaWduQXdhcmRDZmciLCJpbnN0YW5jZSIsIndpbmRvdyIsImNsb3VkIiwiaW5pdCIsImRiIiwiZGF0YWJhc2UiLCJjbWQiLCJjb21tYW5kIiwiR2V0V2VjaGF0T3BlbklkIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiY29tcGxldGUiLCJyZXMiLCJyZXN1bHQiLCJfb3BlbmlkIiwib3BlbmlkIiwiUXVlcnlTaWduQXdhcmRDb25maWdEYXRhIiwiUXVlcnlXZWNoYXRDbG91ZERhdGEiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXQiLCJkYXRhIiwibGVuZ3RoIiwiQ29pblZhbCIsIkRpYW1vbmRWYWwiLCJIaWdodHNjb3JlVmFsIiwiSW5zZXJ0V2VjaGF0Q2xvdWREYXRhIiwiRGF0ZSIsInNpZ24xIiwic2lnbjIiLCJjdXJZZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsImN1ck1vbnRoIiwiZ2V0TWludXRlcyIsImN1ckRheSIsImdldERheSIsImN1ckhvdXIiLCJnZXRIb3VycyIsImN1ck1pbnV0ZXMiLCJjdXJTZW9uZHMiLCJnZXRTZWNvbmRzIiwiY3VyVGltZSIsImFkZCIsIkRlc2NyaXB0aW9uIiwiTGFzdFVwZGF0ZVRpbWUiLCJQcm9ncmVzcyIsImxvY2F0aW9uIiwiR2VvIiwiUG9pbnQiLCJkb2MiLCJ1cGRhdGUiLCJpbmMiLCJzdWNjZXNzIiwiUHJvZ3Jlc3NWYWwiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OzZFQUVvRDs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs2QkFFSkMsVyxHQWFULHFCQUFZQyxJQUFaLEVBQTBCQyxPQUExQixFQUEyQ0MsVUFBM0MsRUFBK0RDLE9BQS9ELEVBQWlGQyxRQUFqRixFQUFtR0MsT0FBbkcsRUFBcUg7QUFBQTtBQUFBLGFBWjlHQyxPQVk4RyxHQVo1RixDQVk0RjtBQUFBLGFBVjlHQyxVQVU4RyxHQVZ6RixDQVV5RjtBQUFBLGFBUjlHQyxhQVE4RyxHQVJ0RixDQVFzRjtBQUFBLGFBTjlHQyxTQU04RyxHQU56RixLQU15RjtBQUFBLGFBSjlHQyxXQUk4RyxHQUp4RixDQUl3RjtBQUFBLGFBRjlHQyxTQUU4RyxHQUZ6RixJQUV5RjtBQUNqSCxhQUFLTCxPQUFMLEdBQWVOLElBQWY7QUFDQSxhQUFLTyxVQUFMLEdBQWtCTixPQUFsQjtBQUNBLGFBQUtPLGFBQUwsR0FBcUJOLFVBQXJCO0FBQ0EsYUFBS08sU0FBTCxHQUFpQk4sT0FBakI7QUFDQSxhQUFLTyxXQUFMLEdBQW1CTixRQUFuQjtBQUNBLGFBQUtPLFNBQUwsR0FBaUJOLE9BQWpCO0FB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LFVBZ0JYMEQsRyxHQUFjLE07O29CQWpFdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFRFUlJBSU5fTUFYX0JMRU5EX0xBWUVSUywgVEVSUkFJTl9OT1JUSF9JTkRFWCB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJHYW1lTXNnIHtcclxuICAgIHB1YmxpYyBjb2luVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBkaWFtb25kVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBoaWdodHNjb3JlVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpc0Nhbk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NWYWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGlzQ2FuU2lnbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29pbjogbnVtYmVyLCBkaWFtb25kOiBudW1iZXIsIGhpZ2h0c2NvcmU6IG51bWJlciwgY2FuTW9kZTogYm9vbGVhbiwgcHJvZ3Jlc3M6IG51bWJlciwgY2FuU2lnbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29pblZhbCA9IGNvaW47XHJcbiAgICAgICAgdGhpcy5kaWFtb25kVmFsID0gZGlhbW9uZDtcclxuICAgICAgICB0aGlzLmhpZ2h0c2NvcmVWYWwgPSBoaWdodHNjb3JlO1xyXG4gICAgICAgIHRoaXMuaXNDYW5Nb2RlID0gY2FuTW9kZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzVmFsID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgdGhpcy5pc0NhblNpZ24gPSBjYW5TaWduO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbkF3YXJkQ29uZmlnIHtcclxuICAgIHB1YmxpYyBtb25kYXlDZmc6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgdHVlc2RheUNmZzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3ZWRuZXNzZGF5Q2ZnOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRodXJzZGF5Q2ZnOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGZyaWRheUNmZzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzYXR1cmRheUNmZzogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdW5kYXlDZmc6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9uZGF5OiBudW1iZXIsIHR1ZXNkYXk6IG51bWJlciwgd2VkbmVzc2RheTogbnVtYmVyLCB0aHVyc2RheTogbnVtYmVyLCBmcmlkYXk6IG51bWJlciwgc2F0dXJkYXk6IG51bWJlciwgc3VuZGF5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vbmRheUNmZyA9IG1vbmRheTtcclxuICAgICAgICB0aGlzLnR1ZXNkYXlDZmcgPSB0dWVzZGF5O1xyXG4gICAgICAgIHRoaXMud2VkbmVzc2RheUNmZyA9IHdlZG5lc3NkYXk7XHJcbiAgICAgICAgdGhpcy50aHVyc2RheUNmZyA9IHRodXJzZGF5O1xyXG4gICAgICAgIHRoaXMuZnJpZGF5Q2ZnID0gZnJpZGF5O1xyXG4gICAgICAgIHRoaXMuc2F0dXJkYXlDZmcgPSBzYXR1cmRheTtcclxuICAgICAgICB0aGlzLnN1bmRheUNmZyA9IHN1bmRheTtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3MoXCJOZXRTdmNcIilcclxuZXhwb3J0IGNsYXNzIE5ldFN2YyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvLyNyZWdpb24gIOWNleS+i1xyXG5cclxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE5ldE1nciA9IG5ldyBOZXRNZ3IoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOZXRTdmMgPSBudWxsO1xyXG5cclxuICAgIC8v6ZmQ5Yi25Lqn55Sf5aSa5Liq5a+56LGhXHJcbiAgICAvKiBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICBzdXBlcigpO1xyXG4gICAgIH0qL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IE5ldFN2YyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBvYmo6IHN0cmluZyA9IFwibG9ja1wiOy8v57q/56iL6ZSBXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtc2dRdWU6IEFycmF5PFNraW5JdGVtPiA9IG5ldyBBcnJheTxTa2luSXRlbT4oKTsvL0pzIOayoeaciemYn+WIl++8n1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+l5ri45oiP5b6u5L+h5LqR5pyN5Yqh5pWw5o2u5bqT5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0RGF0YUJhc2VVcmw6IHN0cmluZyA9ICdIYXBweUJhbGxEYXRhJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0U2lnbkF3YXJkVXJsOiBzdHJpbmcgPSAnU2lnbkF3YXJkQ29uZmlnJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruW6k+W8leeUqFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LqR5pyN5YqhQ01E5oyH5LukXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY21kO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi3SWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1c2VyT3BlbklEOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIHVzZXJEYXRhSUQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi35LqR56uv5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXNlckdhbWVNc2c6IFVzZXJHYW1lTXNnID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNpZ25Bd2FyZENmZzogU2lnbkF3YXJkQ29uZmlnID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWklumDqOiuv+mXrlVzZXJHYW1lTXNnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRVc2VyR2FtZU1zZygpOiBVc2VyR2FtZU1zZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckdhbWVNc2c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuWklumDqOi/lOWbnnNpZ25Bd2FyZENmZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0U2lnbkF3YXJkQ2ZnKCk6IFNpZ25Bd2FyZENvbmZpZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkF3YXJkQ2ZnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0U3ZjKCkge1xyXG4gICAgICAgIE5ldFN2Yy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgLy/liJ3lp4vljJbkupHmnI3liqFcclxuICAgICAgICB3aW5kb3dbJ3d4J10uY2xvdWQuaW5pdCgpO1xyXG4gICAgICAgIC8v6I635Y+W5pWw5o2u5bqT5byV55SoXHJcbiAgICAgICAgdGhpcy5kYiA9IHdpbmRvd1snd3gnXS5jbG91ZC5kYXRhYmFzZSgpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyWQ01E5LqR56uv5oyH5LukXHJcbiAgICAgICAgdGhpcy5jbWQgPSB0aGlzLmRiLmNvbW1hbmQ7XHJcbiAgICAgICAgLy/mi7/liLDnlKjmiLfnmoRvcGVuSWRcclxuICAgICAgICB0aGlzLkdldFdlY2hhdE9wZW5JZCgpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluW5v+WRiuWIl+ihqOaOpeWPo1xyXG4gICAgICAgIC8vdGhpcy5BZHZlcnRpc2luZ0xpc3QoKTtcclxuICAgICAgICAvL3RoaXMuQmFubmVyQWQocGhvbmUpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXQgTmV0TWdyLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5b2T5YmN55So5oi355qET3BlbklkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRXZWNoYXRPcGVuSWQoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvd1snd3gnXS5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICBuYW1lOiAnR2V0V2VjaGF0T3BlbklkJyxcclxuICAgICAgICAgICAgY29tcGxldGU6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5LqR5Ye95pWw6I635Y+W5Yiw55qEb3Blbmlk77yaJyArIHJlcy5yZXN1bHQuX29wZW5pZClcclxuICAgICAgICAgICAgICAgIHZhciBvcGVuaWQgPSByZXMucmVzdWx0Lm9wZW5pZDtcclxuICAgICAgICAgICAgICAgIHNlbGYudXNlck9wZW5JRCA9IG9wZW5pZDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LWL5YC857uZ5LqGdXNlck9wZW5JRO+8mlwiICsgc2VsZi51c2VyT3BlbklEKTtcclxuICAgICAgICAgICAgICAgIC8v5p+l6K+i562+5Yiw6YWN572u5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB0aGlzLlF1ZXJ5U2lnbkF3YXJkQ29uZmlnRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5aaC5p6cdXNlck9wZW5JROi1i+WAvOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudXNlck9wZW5JRCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mn6Xor6Iv6I635Y+W5b6u5L+h5LqR5pyN5Yqh5pWw5o2u5bqT5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5RdWVyeVdlY2hhdENsb3VkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmsqHmnInvvIzliJnlj43lpI3mn6Xor6JcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuR2V0V2VjaGF0T3BlbklkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+iL+iOt+WPluW+ruS/oeS6keacjeWKoeaVsOaNruW6k+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUXVlcnlXZWNoYXRDbG91ZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuZGIuY29sbGVjdGlvbihzZWxmLnRhcmdldERhdGFCYXNlVXJsKS53aGVyZSh7IF9vcGVuaWQ6IFwiJ1wiICsgc2VsZi51c2VyT3BlbklEICsgXCInXCIgfSkuZ2V0KHtcclxuICAgICAgICAgICAgY29tcGxldGU6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOWtmOWcqOW9k+WJjeeUqOaIt1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuafpeivouWIsOW9k+WJjeeUqOaIt++8mlwiICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6LWL5YC8VXNlckRhdGFJZFxyXG4gICAgICAgICAgICAgICAgICAgIC8v5oyB5pyJ5LqR56uv5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyR2FtZU1zZyA9IG5ldyBVc2VyR2FtZU1zZyhyZXMuZGF0YVswXS5Db2luVmFsLCByZXMuZGF0YVswXS5EaWFtb25kVmFsLCByZXMuZGF0YVswXS5IaWdodHNjb3JlVmFsLCByZXMuZGF0YVswXS5pc0Nhbk1vZGUsIHJlcy5kYXRhWzBdLnByb2dyZXNzVmFsLCByZXMuZGF0YVswXS5pc0NhblNpZ24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oyB5pyJ5LqR56uv55So5oi35pWw5o2u77yaXCIgKyBzZWxmLnVzZXJHYW1lTXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5LiN5a2Y5Zyo5b2T5YmN55So5oi3XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeeUqOaIt+aVsOaNruS4uuepuu+8mlwiICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuSW5zZXJ0V2VjaGF0Q2xvdWREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuafpeivouS6keerr+eUqOaIt+aVsOaNruWujOaIkC4uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmn6Xor6LkupHnq6/nlKjmiLfmlbDmja4uLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5LlhaXlvq7kv6HkupHmnI3liqHmlbDmja7lupPmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIEluc2VydFdlY2hhdENsb3VkRGF0YSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy/ojrflj5blvZPliY3ml7bpl7RcclxuICAgICAgICBsZXQgZGF0YTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHNpZ24xID0gXCItXCI7XHJcbiAgICAgICAgbGV0IHNpZ24yID0gXCI6XCI7XHJcbiAgICAgICAgbGV0IGN1clllYXI6IHN0cmluZyA9IGRhdGEuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBjdXJNb250aDogc3RyaW5nID0gZGF0YS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgY3VyRGF5OiBzdHJpbmcgPSBkYXRhLmdldERheSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGN1ckhvdXI6IHN0cmluZyA9IGRhdGEuZ2V0SG91cnMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBjdXJNaW51dGVzOiBzdHJpbmcgPSBkYXRhLmdldE1pbnV0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBjdXJTZW9uZHM6IHN0cmluZyA9IGRhdGEuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJUaW1lOiBzdHJpbmcgPSBjdXJZZWFyICsgc2lnbjEgKyBjdXJNb250aCArIHNpZ24xICsgY3VyRGF5ICsgXCIgXCIgKyBjdXJIb3VyICsgc2lnbjIgKyBjdXJNaW51dGVzICsgc2lnbjIgKyBjdXJTZW9uZHM7XHJcblxyXG4gICAgICAgIHNlbGYuZGIuY29sbGVjdGlvbihzZWxmLnRhcmdldERhdGFCYXNlVXJsKS5hZGQoe1xyXG4gICAgICAgICAgICAvLyBkYXRhIOWtl+auteihqOekuumcgOaWsOWinueahCBKU09OIOaVsOaNrlxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvL19pZDogc2VsZi51c2VyT3BlbklELCAvLyDlj6/pgInoh6rlrprkuYkgX2lk77yM5Zyo5q2k5aSE5Zy65pmv5LiL55So5pWw5o2u5bqT6Ieq5Yqo5YiG6YWN55qE5bCx5Y+v5Lul5LqGXHJcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogXCLmrKLkuZDnkIPnkIPmlbDmja7lupPmlbDmja5cIixcclxuICAgICAgICAgICAgICAgIExhc3RVcGRhdGVUaW1lOiBuZXcgRGF0ZShjdXJUaW1lKSxcclxuICAgICAgICAgICAgICAgIENvaW5WYWw6IDE5OSxcclxuICAgICAgICAgICAgICAgIERpYW1vbmRWYWw6IDE4OCxcclxuICAgICAgICAgICAgICAgIEhpZ2h0c2NvcmVWYWw6IDAsXHJcbiAgICAgICAgICAgICAgICBQcm9ncmVzczogMCxcclxuICAgICAgICAgICAgICAgIC8vIOS4uuW+heWKnuS6i+mhuea3u+WKoOS4gOS4quWcsOeQhuS9jee9ru+8iDExM8KwRe+8jDIzwrBO77yJXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogbmV3IHNlbGYuZGIuR2VvLlBvaW50KDExMywgMjMpLFxyXG4gICAgICAgICAgICAgICAgaXNDYW5Nb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzQ2FuU2lnbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o+S5YWl5b6u5L+h5LqR5pWw5o2u5a6M5oiQ77yaXCIgKyByZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvL+WGjeasoeafpeivolxyXG4gICAgICAgICAgICAgICAgc2VsZi5RdWVyeVdlY2hhdENsb3VkRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlho3mrKHmn6Xor6LlvZPliY3nlKjmiLfmlbDmja7mmK/lkKblrZjlnKguLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5b6u5L+h5LqR5pyN5Yqh5pWw5o2u5bqT5pWw5o2uKOWHj+WwkSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIFVwZGF0YURlY3JlYXNlV2VjaGF0Q2xvdWREYXRhKGNvaW5WYWw6IG51bWJlciwgZGlhbW9uZFZhbDogbnVtYmVyLCBoaWdodHNjb3JlVmFsOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXIsIGlzQ2FuTW9kZT86IGJvb2xlYW4sIGlzQ2FuU2lnbj86IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW8gOWni+abtOaWsOivpeeUqOaIt+W+ruS/oeS6keaVsOaNri4uLi5cIilcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYuZGIuY29sbGVjdGlvbihzZWxmLnRhcmdldERhdGFCYXNlVXJsKS5kb2Moc2VsZi51c2VyRGF0YUlEKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAvLyBkYXRhIOS8oOWFpemcgOimgeWxgOmDqOabtOaWsOeahOaVsOaNrlxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyDooajnpLrlsIblsIZDb2luVmFs5pWw5o2u5pu05pawXHJcbiAgICAgICAgICAgICAgICBDb2luVmFsOiBzZWxmLmNtZC5pbmMoLWNvaW5WYWwpLFxyXG4gICAgICAgICAgICAgICAgRGlhbW9uZFZhbDogc2VsZi5jbWQuaW5jKC1kaWFtb25kVmFsKSxcclxuICAgICAgICAgICAgICAgIEhpZ2h0c2NvcmVWYWw6IHNlbGYuY21kLmluYygtaGlnaHRzY29yZVZhbCksXHJcbiAgICAgICAgICAgICAgICBpc0Nhbk1vZGU6IHNlbGYuY21kLmluYygtaXNDYW5Nb2RlKSxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzVmFsOiBzZWxmLmNtZC5pbmMoLXByb2dyZXNzKSxcclxuICAgICAgICAgICAgICAgIGlzQ2FuU2lnbjogaXNDYW5TaWduXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGNvbnNvbGUubG9nKFwi5pu05paw5oiQ5YqfXCIpLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmm7TmlrDlvq7kv6HkupHmnI3liqHmlbDmja7lupPmlbDmja7lrozmiJDvvJpcIiArIHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlvq7kv6HkupHmnI3liqHmlbDmja7lupPmlbDmja4o5aKe5YqgKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgVXBkYXRhSW5DcmVhc2VXZWNoYXRDbG91ZERhdGEoY29pblZhbDogbnVtYmVyLCBkaWFtb25kVmFsOiBudW1iZXIsIGhpZ2h0c2NvcmVWYWw6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlciwgaXNDYW5Nb2RlPzogYm9vbGVhbiwgaXNDYW5TaWduPzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5pu05paw6K+l55So5oi35b6u5L+h5LqR5pWw5o2uOlwiICsgY29pblZhbClcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5kYi5jb2xsZWN0aW9uKHNlbGYudGFyZ2V0RGF0YUJhc2VVcmwpLmRvYyhzZWxmLnVzZXJEYXRhSUQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC8vIGRhdGEg5Lyg5YWl6ZyA6KaB5bGA6YOo5pu05paw55qE5pWw5o2uXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIC8vIOihqOekuuWwhuWwhkNvaW5WYWzmlbDmja7mm7TmlrBcclxuICAgICAgICAgICAgICAgIENvaW5WYWw6IHNlbGYuY21kLmluYyhjb2luVmFsKSxcclxuICAgICAgICAgICAgICAgIERpYW1vbmRWYWw6IHNlbGYuY21kLmluYyhkaWFtb25kVmFsKSxcclxuICAgICAgICAgICAgICAgIEhpZ2h0c2NvcmVWYWw6IHNlbGYuY21kLmluYyhoaWdodHNjb3JlVmFsKSxcclxuICAgICAgICAgICAgICAgIGlzQ2FuTW9kZTogaXNDYW5TaWduLFxyXG4gICAgICAgICAgICAgICAgUHJvZ3Jlc3NWYWw6IHNlbGYuY21kLmluYyhwcm9ncmVzcyksXHJcbiAgICAgICAgICAgICAgICBpc0NhblNpZ246IGlzQ2FuU2lnblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBjb25zb2xlLmxvZyhcIuabtOaWsOaIkOWKn1wiKSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pu05paw5b6u5L+h5LqR5pyN5Yqh5pWw5o2u5bqT5pWw5o2u5a6M5oiQ77yaXCIgKyByZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i562+5Yiw5aWW5Yqx5pWw5o2u6YWN572uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBRdWVyeVNpZ25Bd2FyZENvbmZpZ0RhdGEoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmn6Xor6Lnrb7liLDphY3nva4uLi5cIik7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuZGIuY29sbGVjdGlvbignc2lnbmNmZycpLmdldCh7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKjlvZPliY3nlKjmiLdcclxuICAgICAgICAgICAgICAgIC8vIGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuafpeivouWIsOW9k+WJjemFjee9ru+8mlwiICsgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuafpeivoumFjee9ruWujOaIkC4uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmn6Xor6Lnrb7liLDphY3nva7nu5PmnZ9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZWxmLnNpZ25Bd2FyZENmZyA9IG5ldyBTaWduQXdhcmRDb25maWcocmVzLmRhdGFbMF0uTW9uZGF5LCByZXMuZGF0YVswXS5UdWVzZGF5LCByZXMuZGF0YVswXS5XZWRuZXNzZGF5LCByZXMuZGF0YVswXS5UaHVyc2RheSwgcmVzLmRhdGFbMF0uRnJpZGF5LCByZXMuZGF0YVswXS5TYXR1cmRheSwgcmVzLmRhdGFbMF0uU3VuZGF5KVxyXG59XHJcbiJdfQ==