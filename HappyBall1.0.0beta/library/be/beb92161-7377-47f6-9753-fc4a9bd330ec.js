"use strict";

System.register(["cc", "../Root/SystemRoot.ts", "../View/LoadPanel.ts", "../View/MainPanel.ts", "./MainMgr.ts", "../View/PlayPanel.ts"], function (_export, _context) {
  "use strict";

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
              if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TeXN0ZW0vTG9hZFN5cy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3lzdGVtUm9vdCIsIkxvYWRQYW5lbCIsIk1haW5QYW5lbCIsIk1haW5NZ3IiLCJQbGF5UGFuZWwiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkU3lzIiwidHlwZSIsImFwcElEIiwicHJvZ2FybUlkIiwidXNlcklkIiwidG9rZW4iLCJjb2RlIiwia2V5IiwicGhvbmUiLCJwaG9uZVdpZCIsInBob25lSGlnIiwiSE9TVCIsInR4dE5hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJpbnZpdGlvbkNvZGUiLCJoaWdodFNjb3JlVmFsIiwiZGlhbW9uZFZhbCIsImNvaW5WYWwiLCJoZWxsbyIsImluc3RhbmNlIiwid2luZG93IiwiSW50ZXJzdGl0aWFsQWQiLCJjcmVhdGVJbnRlcnN0aXRpYWxBZCIsImFkVW5pdElkIiwiY29uc29sZSIsImxvZyIsInNlbGYiLCJsb2FkUGFuZWwiLCJTZXRQYW5lbFN0YXRlIiwiQXNrV2VjaGF0TG9naW4iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImxvZ2luQnRuIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0Iiwic2NyZWVuV2lkdGgiLCJ0b3AiLCJzY3JlZW5IZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwiV2VjaGF0TG9naW4iLCJvblRhcCIsInJlcyIsIkluc3RhbmNlIiwiRW50ZXJNYWluQ2l0eSIsImxvZ2luIiwic3VjY2VzcyIsImVyck1zZyIsImhpZGUiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJhdXRob3JpemUiLCJHYW1lTG9naW4iLCJSc3BMb2dpbiIsImZhaWwiLCJzaG93Iiwibm9kZSIsIm5hbWUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInNldFJlcXVlc3RIZWFkZXIiLCJ1cmwiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJwb3N0RGF0YSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwicmVzcG9uc2VUZXh0IiwiUmVjZWl2ZVJlc3BvbnNlVG9rZW4iLCJvcGVuIiwic2VuZCIsInJzcCIsInBhcnNlIiwicmVzdWx0IiwiR2V0V2VDaGF0VXNlckluZm8iLCJpZCIsIlNlcnZlckxvYWQiLCJzY29yZSIsInVuZGVmaW5lZCIsInBhcnNlSW50IiwiZGlhbW9uZFZhcyIsImNvaW4iLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiUmVjZWl2ZVJlc3BvbnNlVXNlciIsImFkdmVydGlzTGVuZ3RoIiwibGVuZ3RoIiwiYWR2ZXJ0aXNSZXN1bHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImJhbm5lckFkIiwiY3JlYXRlQmFubmVyQWQiLCJvblJlc2l6ZSIsInJlYWxIZWlnaHQiLCJvbkVycm9yIiwiZXJyQ29kZSIsIm9uTG9hZCIsInRoZW4iLCJlcnIiLCJCYW5uZXJBZCIsInBsYXlQYW5lbCIsImxhc3RTY29yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxVLHFCQUFBQSxVOztBQUNBQyxNQUFBQSxTLG9CQUFBQSxTOztBQUVBQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxPLGNBQUFBLE87O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7Ozs4RUFKZ0U7OztBQU1qRUMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUSxFQUVqQjs7eUJBRWFDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQyxVQXVESEMsUUFBUSxDQUFD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QUFsQztBQUVBa0QsWUFBQUEsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBTjtBQUNBRCxZQUFBQSxHQUFHLENBQUNFLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBTSxZQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxRQUFmLENBQVA7QUFDQVAsWUFBQUEsR0FBRyxDQUFDaUIsSUFBSixDQUFTLE1BQVQsRUFBaUJkLEdBQWpCLEVBQXNCLElBQXRCO0FBQ0FILFlBQUFBLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU1YsSUFBVDs7QUFDQVIsWUFBQUEsR0FBRyxDQUFDVyxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLGtCQUFJWCxHQUFHLENBQUNZLFVBQUosSUFBa0IsQ0FBbEIsSUFBd0JaLEdBQUcsQ0FBQ2EsTUFBSixJQUFjLEdBQWQsSUFBcUJiLEdBQUcsQ0FBQ2EsTUFBSixHQUFhLEdBQTlELEVBQW9FLENBR25FO0FBQ0osYUFMRDtBQU1IO0FBRUQ7Ozs7Ozt3Q0FHYyxDQUViOzs7QUE5YkQ7O0FBQ0E7Ozs7QUFJQTs7O3FDQUdrQztBQUM5QixtQkFBTyxLQUFLM0QsUUFBWjtBQUNILFcsQ0FFRDs7OztRQW5CeUIzQixVLFdBS1YyQixRLEdBQW9CLEk7Ozs7O2lCQWtETCxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0EsSTs7OztvQkF2RWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBTeXN0ZW1Sb290IH0gZnJvbSBcIi4uL1Jvb3QvU3lzdGVtUm9vdFwiO1xyXG5pbXBvcnQgeyBMb2FkUGFuZWwgfSBmcm9tIFwiLi4vVmlldy9Mb2FkUGFuZWxcIjtcclxuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9Nb2RlbC9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IE1haW5QYW5lbCB9IGZyb20gXCIuLi9WaWV3L01haW5QYW5lbFwiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4vTWFpbk1nclwiO1xyXG5pbXBvcnQgeyBQbGF5UGFuZWwgfSBmcm9tIFwiLi4vVmlldy9QbGF5UGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+eZu+W9leezu+e7n1xyXG5AY2NjbGFzcyhcIkxvYWRTeXNcIilcclxuZXhwb3J0IGNsYXNzIExvYWRTeXMgZXh0ZW5kcyBTeXN0ZW1Sb290IHtcclxuXHJcbiAgICAvLyNyZWdpb24gIOWNleS+i1xyXG5cclxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVSb290ID0gbmV3IEdhbWVSb290KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9hZFN5cyA9IG51bGw7XHJcblxyXG4gICAgLy/pmZDliLbkuqfnlJ/lpJrkuKrlr7nosaFcclxuICAgIC8qcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfSovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpflrp7kvovlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBMb2FkU3lzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBwdWJsaWMgYXBwSUQgPSBcInd4MjMyZWEzZDJlNzE3ODg5MFwiO1xyXG4gICAgcHVibGljIHByb2dhcm1JZCA9IFwiZjcwNWNjZmNhYjgzNGUwYTk2MmJmNDNkYTMzMjE2NmRcIjtcclxuICAgIHB1YmxpYyB1c2VySWQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG9rZW4gPSBudWxsO1xyXG4gICAgcHVibGljIGNvZGUgPSBudWxsO1xyXG4gICAgcHVibGljIGtleSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBob25lID0gbnVsbDtcclxuICAgIHB1YmxpYyBwaG9uZVdpZCA9IG51bGw7XHJcbiAgICBwdWJsaWMgcGhvbmVIaWcgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBIT1NUOiBzdHJpbmcgPSBcImh0dHBzOi8vZ2FtZS5iZWV0cnkuY29tL3d4LWdhbWVcIjsvL+acquiuvue9rlxyXG5cclxuICAgIHB1YmxpYyB0eHROYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGdlbmRlcjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAvLyBwdWJsaWMgcHJvZ3JhbUlkOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGludml0aW9uQ29kZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgYWR2ZXJ0aXNMZW5ndGg7XHJcblxyXG4gICAgcHVibGljIGFkdmVydGlzUmVzdWx0O1xyXG5cclxuICAgIHB1YmxpYyBoaWdodFNjb3JlVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBkaWFtb25kVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb2luVmFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IExvYWRQYW5lbCB9KVxyXG4gICAgcHVibGljIGxvYWRQYW5lbDogTG9hZFBhbmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBNYWluUGFuZWwgfSlcclxuICAgIHB1YmxpYyBtYWluUGFuZWw6IE1haW5QYW5lbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogUGxheVBhbmVsIH0pXHJcbiAgICBwdWJsaWMgcGxheVBhbmVsOiBQbGF5UGFuZWwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h55m75b2V5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW5CdG47XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvZ2luOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBoZWxsbyA9IFwiaGVsbG8hXCI7XHJcblxyXG4gICAgcHVibGljIEluaXRTeXMoKSB7XHJcblxyXG4gICAgICAgIExvYWRTeXMuaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aW5kb3cuSW50ZXJzdGl0aWFsQWQgPSB3aW5kb3dbJ3d4J10uY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogXCJcIiAgLy/lub/lkYrljZXlhYNJRFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbml0IExvZ2luU3lzLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/m+WFpeeZu+W9leWcuuaZr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRW50ZXJMb2dpbigpIHtcclxuICAgICAgICAvL+W8guatpeWKoOi9vUdhbWXlnLrmma9cclxuICAgICAgICAvL+W5tuaYvuekuuWKoOi9vei/m+W6plxyXG4gICAgICAgIC8vdGhpcy5yZXNTdmMuQXN5bmNlTG9hZFNjZW5lKFBhdGhDZmcuR0FNRVBBVEgsKTsvL1RPRE9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkUGFuZWwuU2V0UGFuZWxTdGF0ZSgpO1xyXG4gICAgICAgIC8qdGhpcy5yZXNTdmMuQXN5bmNlTG9hZFNjZW5lKFwiXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjliqDovb3lm57osINcIik7XHJcbiAgICAgICAgICAgIC8v5pKt5pS+6IOM5pmv6Z+z5pWIXHJcbiAgICAgICAgICAgIC8vIFNldHRpbmdNZ3IuSW5zdGFuY2UoKS5TZXRBdWRpb0VuYWJsZSgpO1xyXG4gICAgICAgICAgICAvL+ivoumXruaYr+WQpuW+ruS/oeeZu+W9lVxyXG4gICAgICAgICAgICBzZWxmLkFza1dlY2hhdExvZ2luKCk7XHJcbiAgICAgICAgfSkqL1xyXG5cclxuICAgICAgICBzZWxmLkFza1dlY2hhdExvZ2luKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5YWl55m75b2V5Zy65pmvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+i6Zeu5piv5ZCm5b6u5L+h55m75b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBc2tXZWNoYXRMb2dpbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLor6Lpl67mmK/lkKblvq7kv6HnmbvlvZVcIik7XHJcbiAgICAgICAgbGV0IHBob25lID0gd2luZG93Wyd3eCddLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5cclxuICAgICAgICBzZWxmLmxvZ2luQnRuID0gd2luZG93Wyd3eCddLmNyZWF0ZVVzZXJJbmZvQnV0dG9uKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHBob25lLnNjcmVlbldpZHRoICogMC4yNSxcclxuICAgICAgICAgICAgICAgIHRvcDogcGhvbmUuc2NyZWVuSGVpZ2h0ICogMC42MSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwaG9uZS5zY3JlZW5XaWR0aCAqIDAuNTEsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBob25lLnNjcmVlbkhlaWdodCAqIDAuMSxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmMDAwMCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2VsZi5XZWNoYXRMb2dpbigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luQnRuLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vllYpcIik7XHJcbiAgICAgICAgICAgIHNlbGYuV2VjaGF0TG9naW4oKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5bqU55m75b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSc3BMb2dpbigpIHtcclxuICAgICAgICAvL+WFs+mXrUxvYWRQYW5lbOeVjOmdolxyXG5cclxuICAgICAgICB0aGlzLmxvYWRQYW5lbC5TZXRQYW5lbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICBNYWluTWdyLkluc3RhbmNlKCkuRW50ZXJNYWluQ2l0eSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Zue5bqU55m75b2VXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h55m75b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBXZWNoYXRMb2dpbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHNlbGYuY29kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snd3gnXS5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmxvZ2luQnRuLmhpZGUoKTtcclxuXHJcbiAgICAgICAgd2luZG93Wyd3eCddLmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMjIzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3d4J10uYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9naW5CdG4uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpmpDol48uLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLkdhbWVMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5Sc3BMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpbkJ0bi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekui4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9naW5CdG4uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqQ6JeP5pyA5ZCOLi4uKytcIiArIHNlbGYubm9kZS5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5HYW1lTG9naW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlJzcExvZ2luKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP55m75b2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHYW1lTG9naW4oKSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5IT1NUICsgXCIvdXNlci91c2VyX2xvZ2luc1wiXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvd1snd3gnXS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnR4dE5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmdlbmRlciA9IHJlcy51c2VySW5mby5nZW5kZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IHNlbGYuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2dyYW1JZFwiOiBzZWxmLnByb2dhcm1JZCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5pY2tOYW1lXCI6IHNlbGYudHh0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcImdlbmRlclwiOiBzZWxmLmdlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBzZWxmLmF2YXRhclVybCB8fCBcImh0dHA6Ly93d3cuc3VjYWlqaXNoaS5jb20vdXBsb2FkZmlsZS8yMDE2LzAyMDMvMjAxNjAyMDMwMjI2MzEyMjYuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnZpdGlvbkNvZGVcIjogc2VsZi5pbnZpdGlvbkNvZGUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKTtcclxuICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuUmVjZWl2ZVJlc3BvbnNlVG9rZW4ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVhZHlTdGF0ZSwgXCIxODZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuR2FtZUxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaVsOaNru+8mlwiICsgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWtkOWfn+eZu+W9leaIkOWKn+WQjueahOacgOmrmOWIhuaVsOaNru+8mlwiICsgc2VsZi5oaWdodFNjb3JlVmFsKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55m75b2V5oiQ5Yqf77yB77yB77yBXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47mnI3liqHlmajmlLbliLDnmoTkv6Hmga9cclxuICAgICAqIEBwYXJhbSByc3AgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZWNlaXZlUmVzcG9uc2VUb2tlbihyc3ApIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocnNwKTtcclxuICAgICAgICBpZiAodGhpcy5rZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmtleSA9IGRhdGEucmVzdWx0LmtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gZGF0YS5yZXN1bHQudG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuR2V0V2VDaGF0VXNlckluZm8oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS7juacjeWKoeWZqOaUtuWIsOeahOS/oeaBr1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o6l5Y+X5pyN5Yqh56uv5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gcnNwIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVjZWl2ZVJlc3BvbnNlVXNlcihyc3ApIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocnNwKTtcclxuICAgICAgICBpZiAodGhpcy51c2VySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IGRhdGEucmVzdWx0LnVzZXJJbmZvLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlNlcnZlckxvYWQoZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5o6l5Y+X5pyN5Yqh56uv5pWw5o2uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295pyN5Yqh5Zmo55qE5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNlcnZlckxvYWQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnNjb3JlICE9IG51bGwgJiYgZGF0YS5zY29yZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiJHku6zlkI7lj7DmnInmnIDpq5jliIbnmoTmlbDmja7lkJfvvJ/vvJpcIiArIGRhdGEuc2NvcmUpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2h0U2NvcmVWYWwgPSBwYXJzZUludChkYXRhLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuZGlhbW9uZFZhcyAhPSB1bmRlZmluZWQgJiYgZGF0YS5kaWFtb25kVmFzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kVmFsID0gcGFyc2VJbnQoZGF0YS5kaWFtb25kVmFzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kaWFtb25kVmFsID0gOTEwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkeS4iuS8oOS6humSu+efs+aVsOaNruS6huWQl++8n1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5jb2luICE9IHVuZGVmaW5lZCAmJiBkYXRhLmNvaW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvaW5WYWwgPSA4ODg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeR5biB5pWw5o2u5pyJ5pu05paw5ZCX77yfXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacqui2hei/hy4uLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5byA5ZCv6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgd2luZG93Wyd3eCddLnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295pyN5Yqh5Zmo55qE5pWw5o2uXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvq7kv6HnlKjmiLfnmoTkv6Hmga8s5L+d5a2Y5Yiw5Y+Y6YeP5Lit5bm25Y+R6YCB57uZ5pyN5Yqh5ZmoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRXZUNoYXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLkhPU1QgKyBcIi91c2VyL3F1ZXJ5X2dhbWVfZGF0YVwiXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvd1snd3gnXS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b2tlblwiOiBzZWxmLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCI6IHNlbGYua2V5LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlJlY2VpdmVSZXNwb25zZVVzZXIocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PSAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLkdldFdlQ2hhdFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPluW+ruS/oeeUqOaIt+eahOS/oeaBr++8jOS/neWtmOWIsOWPmOmHj+S4reW5tuWPkemAgee7meacjeWKoeWZqCAxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPluW+ruS/oeeUqOaIt+eahOS/oeaBr++8jOS/neWtmOWIsOWPmOmHj+S4reW5tuWPkemAgee7meacjeWKoeWZqCAyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bm/5ZGK5YiX6KGo5o6l5Y+jXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBBZHZlcnRpc2luZ0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuSE9TVCArIFwiL2pvd2ltL2FkdmVydGlzaW5nL3NlbGVjdF9hZHZlcnRpc2luZ193ZWNoYXRcIlxyXG4gICAgICAgIGxldCBwb3N0RGF0YSA9IG51bGw7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBudWxsO1xyXG4gICAgICAgIHBvc3REYXRhID0ge1xyXG4gICAgICAgICAgICBcInRva2VuXCI6IHRoaXMudG9rZW4sXHJcbiAgICAgICAgICAgIFwicHJvZ3JhbUlkXCI6IHRoaXMucHJvZ2FybUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZVRleHQsXCIyMDM4XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dC5zdGF0dXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWR2ZXJ0aXNMZW5ndGggPSByZXNwb25zZVRleHQucmVzdWx0Lmxlbmd0aDsgICAvL+W5v+WRiuaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWR2ZXJ0aXNSZXN1bHQgPSByZXNwb25zZVRleHQucmVzdWx0OyAgICAgICAgICAvL+acrOa4uOaIj+W5v+WRilxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuYWR2ZXJ0aXNMZW5ndGgsICflub/lkYrmlbDph48nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLnRyYW5zcG9uZFNoYXJlKCk7ICAvL+WPs+S4iuinkui9rOWPkeWIhuS6q1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o+S5bGP5bm/5ZGKXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBCYW5uZXJBZChwaG9uZSkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHBob25lLndpbmRvd1dpZHRoIC0gMzAwO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBwaG9uZS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJhbm5lckFkID0gd2luZG93Wyd3eCddLmNyZWF0ZUJhbm5lckFkKCkoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBiYW5uZXJBZC5vblJlc2l6ZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBiYW5uZXJBZC5zdHlsZS50b3AgPSBoZWlnaHQgLSBiYW5uZXJBZC5zdHlsZS5yZWFsSGVpZ2h0O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQub25FcnJvcihlcnJDb2RlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyQ29kZSwgXCJiYmJiYmJiYlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lciDlub/lkYrliqDovb3miJDlip8nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5Zyo6YCC5ZCI55qE5Zy65pmv5pi+56S6IEJhbm5lciDlub/lkYpcclxuICAgICAgICBiYW5uZXJBZC5zaG93KClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ2Jhbm5lciDlub/lkYrmmL7npLonKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIHdpbmRvdy5CYW5uZXJBZCA9IGJhbm5lckFkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjliLDmnI3liqHlmahcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNlcnZlclNhdmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLotoXov4fnmoTliIbmlbDmnInlkJfvvJ/vvJpcIiArIHRoaXMucGxheVBhbmVsLmxhc3RTY29yZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmnIDpq5jliIbmnInmm7TmlrDlkJfvvJ/vvJpcIiArIHRoaXMuaGlnaHRTY29yZVZhbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheVBhbmVsLmxhc3RTY29yZSA+IHRoaXMuaGlnaHRTY29yZVZhbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4u+Wfn2xhc3RTY29yZe+8mlwiICsgdGhpcy5wbGF5UGFuZWwubGFzdFNjb3JlKVxyXG4gICAgICAgICAgICAvLyB0aGlzLm1haW4uc2NvcmVudW0gPSB0aGlzLm1haW4uc2NvcmVudW1cclxuICAgICAgICAgICAgdGhpcy5oaWdodFNjb3JlVmFsID0gdGhpcy5wbGF5UGFuZWwubGFzdFNjb3JlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhpZ2h0U2NvcmVWYWwsIFwi5Li75Z+f5pyA6auY5YiGXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy90aGlzLm1haW4uc2NvcmVudW0gPSB0aGlzLm1haW4uaGlnaHNjb3JlbnVtXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyq6LaF6L+HXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIui/memHjOacieiiq+aJp+ihjOWQl++8n1wiKTtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLkhPU1QgKyBcIi9qb3dpbS9nYW1lRGF0YS91cGRhdGVfZ2FtZWRhdGFfZ2FtZVwiXHJcbiAgICAgICAgbGV0IHBvc3REYXRhID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmnIDpq5jliIbmlbDmja7mmK/kuI3mmK/msqHmnInmlLnlj5jvvJpcIiArIHRoaXMuaGlnaHRTY29yZVZhbCk7XHJcbiAgICAgICAgcG9zdERhdGEgPSB7XHJcbiAgICAgICAgICAgIFwidG9rZW5cIjogdGhpcy50b2tlbixcclxuICAgICAgICAgICAgXCJwcm9ncmFtSWRcIjogdGhpcy5wcm9nYXJtSWQsXHJcbiAgICAgICAgICAgIFwiZGF0YVNldFwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhVmFsdWVcIjogdGhpcy5oaWdodFNjb3JlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGREYXRhS2V5XCI6IFwic2NvcmVcIiAvL+WIhuaVsFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGFWYWx1ZVwiOiB0aGlzLmRpYW1vbmRWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZERhdGFLZXlcIjogXCJkaWFtb25kVmFzXCIgLy/pkrvnn7NcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVZhbHVlXCI6IHRoaXMuY29pblZhbCxcclxuICAgICAgICAgICAgICAgICAgICBcImZpZWxkRGF0YUtleVwiOiBcImNvaW5cIiAvL+mHkeW4gVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueOsOWcqOeahOacgOmrmOWIhuacieiiq+aUueWPmOWQl++8n1wiICsgdGhpcy5oaWdodFNjb3JlVmFsKVxyXG5cclxuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWVhuWTgeWIl+ihqOaOpeWPo1xyXG4gICAgICovXHJcbiAgICBwcm9kdWN0TGlzdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=