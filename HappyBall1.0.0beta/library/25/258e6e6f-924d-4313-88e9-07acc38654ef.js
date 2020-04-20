"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

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
            var isLoop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            //拿到音效片段
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9TZXJ2aWNlL0F1ZGlvU3ZjLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJBdWRpb1NvdXJjZUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkF1ZGlvU3ZjIiwidHlwZSIsImluc3RhbmNlIiwidWlBdWRpbyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsImJnQXVkaW8iLCJjb25zb2xlIiwibG9nIiwidXJsIiwiaXNMb29wIiwicGxheSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsb0IsT0FBQUEsb0I7OzsrRUFFbUM7OztBQURqRUMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUlIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFSjtBQUFSLE9BQUQsQyxVQUdSRSxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFSjtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJUOztBQUVBOzs7b0NBR2lCO0FBQ2JHLFlBQUFBLFFBQVEsQ0FBQ0UsUUFBVCxHQUFvQixJQUFwQixDQURhLENBRWI7O0FBQ0EsaUJBQUtDLE9BQUwsR0FBZSxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NDLFlBQXBDLENBQWlEVCxvQkFBakQsQ0FBZjtBQUNBLGlCQUFLVSxPQUFMLEdBQWUsS0FBS0gsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFNBQXpCLEVBQW9DQyxZQUFwQyxDQUFpRFQsb0JBQWpELENBQWY7QUFHQVcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSDtBQUVEOzs7Ozs7c0NBR21CQyxHLEVBQTRCO0FBQUEsZ0JBQWZDLE1BQWUsdUVBQU4sSUFBTTtBQUMzQztBQUNBOztBQUNBOzs7Ozs7O0FBU0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0g7QUFFRDs7Ozs7O3NDQUdtQkMsRyxFQUFjO0FBQzdCLGdCQUFJO0FBQ0E7O0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBLG1CQUFLUCxPQUFMLENBQWFTLElBQWI7QUFDQUosY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSCxhQVpELENBWUUsT0FBT0ksS0FBUCxFQUFjO0FBQ1pMLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWFJLEtBQXpCO0FBQ0g7QUFFSjtBQUdEOzs7Ozs7d0NBR3FCSCxHLEVBQWM7QUFDL0IsZ0JBQUk7QUFDQTs7QUFDQTs7Ozs7OztBQU9BO0FBQ0EsbUJBQUtILE9BQUwsQ0FBYUssSUFBYjtBQUVBSixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILGFBYkQsQ0FhRSxPQUFPSSxLQUFQLEVBQWM7QUFDWkwsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBYUksS0FBekI7QUFDSDtBQUVKOzs7QUF6RkQ7O0FBQ0E7Ozs7QUFJQTs7O3FDQUdtQztBQUMvQixtQkFBTyxLQUFLWCxRQUFaO0FBQ0g7OztRQXZCeUJOLFMsV0FXWE0sUSxHQUFxQixJOzs7OztpQkFQRyxJOzs7Ozs7O2lCQUdBLEk7Ozs7b0JBVHpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb1NvdXJjZUNvbXBvbmVudCwgQXVkaW9DbGlwLCBsb2FkZXIgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiQXVkaW9TdmNcIilcclxuZXhwb3J0IGNsYXNzIEF1ZGlvU3ZjIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQXVkaW9Tb3VyY2VDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyBiZ0F1ZGlvOiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQXVkaW9Tb3VyY2VDb21wb25lbnQgfSlcclxuICAgIHB1YmxpYyB1aUF1ZGlvOiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgLy8jcmVnaW9uICDljZXkvotcclxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1ZGlvTWdyID0gbmV3IEF1ZGlvTWdyKCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9TdmMgPSBudWxsO1xyXG5cclxuICAgIC8v6ZmQ5Yi25Lqn55Sf5aSa5Liq5a+56LGhXHJcbiAgICAvKiBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICBzdXBlcigpO1xyXG4gICAgIH0qL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogQXVkaW9TdmMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW566h55CGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0U3ZjKCkge1xyXG4gICAgICAgIEF1ZGlvU3ZjLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICAvL0luc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnVpQXVkaW8gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ1aUF1ZGlvXCIpLmdldENvbXBvbmVudChBdWRpb1NvdXJjZUNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5iZ0F1ZGlvID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdBdWRpb1wiKS5nZXRDb21wb25lbnQoQXVkaW9Tb3VyY2VDb21wb25lbnQpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbml0IEF1ZGlvU3ZjLi4uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrog4zmma/pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIFBsYXlCZ011c2ljKHVybDogc3RyaW5nLCBpc0xvb3AgPSB0cnVlKSB7XHJcbiAgICAgICAgLy/mi7/liLDpn7PmlYjniYfmrrVcclxuICAgICAgICAvL+mcgOimgeaUuVxyXG4gICAgICAgIC8qIGxldCBjbGlwOkF1ZGlvQ2xpcD1SZXNTdmMuSW5zdGFuY2UoKS5Mb2FkQXVkaW8odXJsLHRoaXMuYmdBdWRpbyk7XHJcbiAgICAgICAgIGlmKHRoaXMuYmdBdWRpby5jbGlwPT1udWxsfHx0aGlzLmJnQXVkaW8uY2xpcC5zdHJpbmchPWNsaXAubmFtZSl7XHJcbiAgICAgICAgICAgICB0aGlzLmJnQXVkaW8uY2xpcD1jbGlwO1xyXG4gICAgICAgICAgICAgdGhpcy5iZ0F1ZGlvLmxvb3A9aXNMb29wO1xyXG4gICAgICAgICAgICAgIC8v5pKt5pS+XHJcbiAgICAgICAgICAgICB0aGlzLmJnQXVkaW8ucGxheSgpO1xyXG4gICAgICAgICB9Ki9cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheUJnTXVzaWMuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInpkq7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIFBsYXlVSUF1ZGlvKHVybD86IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8v5ou/5Yiw6Z+z5pWI54mH5q61XHJcbiAgICAgICAgICAgIC8qbG9hZGVyLmxvYWRSZXModXJsLCAoZXJyLCBjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIGluIFBsYXlVSUF1ZGlvOlwiK2Vycik7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5iZ0F1ZGlvLmNsaXA9Y2xpcDtcclxuICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgICAgICAvL+aSreaUvlxyXG4gICAgICAgICAgICB0aGlzLnVpQXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlVSUF1ZGlvLi4uXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN6Z+z5ZON57uE5Lu26KKr56aB55SoOlwiK2Vycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwj+eQg+mfs+aViFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUGxheUNoYXJBdWRpbyh1cmw/OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL+aLv+WIsOmfs+aViOeJh+autVxyXG4gICAgICAgICAgICAvKiBsb2FkZXIubG9hZFJlcyh1cmwsIChlcnIsIGNsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgaW4gUGxheVVJQXVkaW86XCIrZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB0aGlzLmJnQXVkaW8uY2xpcD1jbGlwO1xyXG4gICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgIC8v5pKt5pS+XHJcbiAgICAgICAgICAgIHRoaXMuYmdBdWRpby5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlDaGFyQXVkaW8uLi5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3pn7Plk43nu4Tku7booqvnpoHnlKg6XCIrZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==