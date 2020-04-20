"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TZXJ2aWNlL1NoYXJlU3ZjLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkVudW0iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTaGFyZUxpbmtUeXBlIiwiU2hhcmVTdmMiLCJpc1NoYXJlZCIsInNoYXJlTGlua1R5cGUiLCJOb25lIiwiaXNSZWN5Y2xlRmluaXNoIiwiaW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwic2NvcmUiLCJtZXNzYWdlVHlwZSIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJwb3N0TWVzc2FnZSIsImV2ZW50IiwiY3VyTm9kZSIsInRhcmdldCIsImN1cklkIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwibmF2aWdhdGVUb01pbmlQcm9ncmFtIiwiYXBwSWQiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsInZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJhZFVuaXRJZCIsImxvYWQiLCJ0aGVuIiwic2hvdyIsImVyciIsImVyck1zZyIsIm9uRXJyb3IiLCJvbkNsb3NlIiwib2ZmQ2xvc2UiLCJpc0VuZGVkIiwidW5kZWZpbmVkIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJXYXRjaFZpZGVvTWV0aG9kIiwic2VsZiIsIm9uU2hvdyIsIlNoYXJlRnJpZW5kIiwiQm90aCIsImN1clRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImNsb3NlVGltZSIsIlNoYXJlRmxvY2siLCJzaGFyZVR5cGUiLCJzaGFyZUFwcE1lc3NhZ2UiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF5QkMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxJLE9BQUFB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WUFBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhNEIsU0FBYixDQUF1QjtBQUNuQkMsY0FBQUEsS0FBSyxFQUFFLE9BRFk7QUFFbkJDLGNBQUFBLElBQUksRUFBRTtBQUZhLGFBQXZCO0FBS0EsaUJBQUt4QyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUtDLGFBQUwsR0FBcUJtRCxTQUFyQjtBQUNBLGlCQUFLRixTQUFMLEdBQWlCLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFqQjs7QUFDQSxnQkFBSXhDLGFBQUosRUFBbUI7QUFDZkMsY0FBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhMkMsZUFBYixDQUE2QjtBQUN6QmQsZ0JBQUFBLEtBQUssRUFBRSxRQURrQjtBQUV6QmUsZ0JBQUFBLFFBQVEsRUFBRTtBQUZlLGVBQTdCO0FBSUg7O0FBQ0RqRCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsVyxDQUVEOzs7O0FBek1BOztBQUNBOzs7O0FBSUE7OztxQ0FHbUM7QUFDL0IsbUJBQU8sS0FBS0YsUUFBWjtBQUNILFcsQ0FDRDs7OztRQWxCMEJYLFMsV0FLWFcsUSxHQUFxQixJOztvQkFoQnRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTeXN0ZW0sIExhYmVsQ29tcG9uZW50LCBFbnVtIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU2hhcmVMaW5rVHlwZSB7XHJcbiAgICBOb25lLFxyXG4gICAgU2hhcmVGcmllbmQsXHJcbiAgICBTaGFyZUZsb2NrLFxyXG4gICAgQm90aFxyXG59XHJcbkVudW0oU2hhcmVMaW5rVHlwZSk7XHJcblxyXG5AY2NjbGFzcyhcIlNoYXJlU3ZjXCIpXHJcbmV4cG9ydCBjbGFzcyBTaGFyZVN2YyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8jcmVnaW9uICDljZXkvotcclxuXHJcbiAgICAvL3ByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTaGFyZVN2YyA9IG5ldyBTaGFyZVN2YygpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNoYXJlU3ZjID0gbnVsbDtcclxuXHJcbiAgICAvL+mZkOWItuS6p+eUn+WkmuS4quWvueixoVxyXG4gICAgLyogcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgc3VwZXIoKTtcclxuICAgICB9Ki9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+W+l+WunuS+i+WvueixoSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBTaGFyZVN2YyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICBwdWJsaWMgaXNTaGFyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vcHVibGljIHNoYXJlVGFnOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHNoYXJlTGlua1R5cGU6IFNoYXJlTGlua1R5cGUgPSBTaGFyZUxpbmtUeXBlLk5vbmU7XHJcbiAgICBwdWJsaWMgY2xvc2VUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlY3ljbGVGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgSW5pdE1ncigpIHtcclxuICAgICAgICBTaGFyZVN2Yy5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgLy9JbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXQgU2hhcmVTdmMuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuXHJcbiAgICAvLyNyZWdpb24gIOWNs+Wwhui2hei2ilxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2z5bCG6LaF6LaKXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTdXJwYXNzVGlwcyhzY29yZSwgbWVzc2FnZVR5cGUpIHtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAvL+WPkea2iOaBr+e7meWtkOWfn1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10ucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOi3s+i9rOWwj+a4uOaIj1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Lez6L2s5bCP5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBUb090aGVyTWluaUdhbWUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgY3VyTm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvL+iOt+WPluimgei3s+i9rOeahOa4uOaIj+eahGlkXHJcbiAgICAgICAgbGV0IGN1cklkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWRcIikuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmc7XHJcbiAgICAgICAgd2luZG93Wyd3eCddLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgICAgIGFwcElkOiBjdXJJZCxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8v5omT5byA5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui3s+i9rOWwj+a4uOaIj+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Lez6L2s5bCP5ri45oiP5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOeci+inhumikeebuOWFs1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55yL6KeG6aKRXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBXYXRjaFZpZGVvTWV0aG9kKCkge1xyXG4gICAgICAgIGxldCB2aWRlb0FkID0gd2luZG93Wyd3eCddLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LTRmNzgzMzEwZWYwZDc4ODMnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2aWRlb0FkLmxvYWQoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIuZXJyTXNnKSlcclxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/lhbPpl63op4bpopHnmoTlm57osIPlh73mlbBcclxuICAgICAgICB2aWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKCF2aWRlb0FkKSByZXR1cm5cclxuICAgICAgICAgICAgdmlkZW9BZC5vZmZDbG9zZSgpXHJcbiAgICAgICAgICAgIC8vdGhpcy5tYWluLnNlZXBvcC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj4zlgI3lpZblirFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aCqOeahOinhumikei/mOayoeeci+WujCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAvLyDmgqjnmoTop4bpopHov5jmsqHnnIvlrozvvIzml6Dms5XojrflvpflpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55yL6KeG6aKR5o2i5aWW5YqxXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBXYXRjaFZpZGVvRm9yQXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5XYXRjaFZpZGVvTWV0aG9kKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnnIvop4bpopHmir3lpZbmiJDlip8uLi5cIilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeci+inhumikeaKveearuiCpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgV2F0Y2hWaWRlb0ZvclNraW4oKSB7XHJcbiAgICAgICAgdGhpcy5XYXRjaFZpZGVvTWV0aG9kKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnnIvop4bpopHmir3nmq7ogqTmiJDlip8uLi5cIilcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvLyNyZWdpb24gIOWIhuS6q+mTvuaOpeebuOWFs1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5YiG5Lqr5oiQ5YqfXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJc1NoYXJlT0soKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHdpbmRvd1snd3gnXSAhPSBcInVuZGVyZmluZWRcIikpIHtcclxuICAgICAgICAgICAgd2luZG93Wyd3eCddLm9uU2hvdyhmdW5jdGlvbiAocmVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChzZWxmLmlzU2hhcmVkICYmIHNlbGYuc2hhcmVMaW5rVHlwZSA9PSBTaGFyZUxpbmtUeXBlLlNoYXJlRnJpZW5kKSB8fCAoc2VsZi5pc1NoYXJlZCAmJiBzZWxmLnNoYXJlTGlua1R5cGUgPT0gU2hhcmVMaW5rVHlwZS5Cb3RoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YiG5Lqr5ZCO6L+U5ZueXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVGltZSAtIHNlbGYuY2xvc2VUaW1lID49IDMwMDApIHsvL+W+ruS/oeaKiuWIhuS6q+aIkOWKn+eahOWbnuiwg+WFs+mXreS6huWQl++8n1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WIhuS6q+aIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1NoYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNoYXJlTGlua1R5cGUgPSBTaGFyZUxpbmtUeXBlLk5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xvc2VUaW1lID0gY3VyVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuJrliqHpgLvovpFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuivt+WIhuS6q+e7meS4jeWQjOeahOWlveWPi1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoc2VsZi5pc1NoYXJlZCAmJiBzZWxmLnNoYXJlTGlua1R5cGUgPT0gU2hhcmVMaW5rVHlwZS5TaGFyZUZsb2NrKSB8fCAoc2VsZi5pc1NoYXJlZCAmJiBzZWxmLnNoYXJlTGlua1R5cGUgPT0gU2hhcmVMaW5rVHlwZS5Cb3RoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YiG5Lqr5ZCO6L+U5ZueXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVGltZSAtIHNlbGYuY2xvc2VUaW1lID49IDMwMDApIHsvL+W+ruS/oeaKiuWIhuS6q+aIkOWKn+eahOWbnuiwg+WFs+mXreS6huWQl++8n1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WIhuS6q+aIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1NoYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNoYXJlTGlua1R5cGUgPSBTaGFyZUxpbmtUeXBlLlNoYXJlRmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xvc2VUaW1lID0gY3VyVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuJrliqHpgLvovpFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuivt+WIhuS6q+e7meS4jeWQjOeahOe+pFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAq5YiG5Lqr6ZO+5o6lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTaGFyZUxpbmsoc2hhcmVUeXBlOiBTaGFyZUxpbmtUeXBlKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1snd3gnXS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLliIbkuqvpk77mjqXllYpcIixcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmlzU2hhcmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoYXJlTGlua1R5cGUgPSBzaGFyZVR5cGU7XHJcbiAgICAgICAgdGhpcy5jbG9zZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ3d4J10uc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWIhuS6q+W+ruS/oemTvuaOpVwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvpk77mjqXmiJDlip8uLi5cIilcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbn1cclxuIl19