"use strict";

System.register(["cc", "../Root/PanelRoot.ts", "../../config/PathCfg.ts", "../Model/MoreGameItem.ts", "../Service/AudioSvc.ts", "../Service/ShareSvc.ts"], function (_export, _context) {
  "use strict";

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

            var self = this; //遍历生成预制体并赋值

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
      }(PanelRoot), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "spawnPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end MoreGamePanel

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9WaWV3L01vcmVHYW1lUGFuZWwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJsb2FkZXIiLCJpbnN0YW50aWF0ZSIsIlNwcml0ZUF0bGFzIiwiUGFuZWxSb290IiwiUGF0aENmZyIsIk1vcmVHYW1lSXRlbSIsIkF1ZGlvU3ZjIiwiU2hhcmVTdmMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNb3JlR2FtZVBhbmVsIiwibWVudSIsInR5cGUiLCJTcGF3bk1vcmVHYW1lSXRlbSIsInJlc1N2YyIsIm1vcmVHYW1lRGF0YUxzdCIsImNvbnNvbGUiLCJsb2ciLCJJbnN0YW5jZSIsIlBsYXlVSUF1ZGlvIiwiU2V0UGFuZWxTdGF0ZSIsIkNsZWFuQWxsTW9yZUdhbWVJdGVtIiwiZGF0YSIsInNlbGYiLCJmb3JFYWNoIiwiZWxlbWVudCIsImxvYWRSZXMiLCJNT1JFR0FNRUlURU1fUEFUSCIsImVyciIsInByZWZhYiIsImN1ck5vZGUiLCJzcGF3blBvcyIsImFkZENoaWxkIiwibW9yZUdhbWVDb21wIiwiZ2V0Q29tcG9uZW50IiwiSWQiLCJpZCIsIkFsdGFfMDhUZXN0X1BBVEgiLCJhbHRhcyIsInNwIiwiZ2V0U3ByaXRlRnJhbWUiLCJpbWdJY29uVXJsIiwiaW1nSWNvbiIsInNwcml0ZUZyYW1lIiwidHh0RGVzIiwic3RyaW5nIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiQ2xpY2tNb3JlR2FtZUl0ZW0iLCJyZW1vdmVBbGxDaGlsZHJlbiIsImV2ZW50IiwiVG9PdGhlck1pbmlHYW1lIiwidGFyZ2V0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFjQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLFcsT0FBQUEsVztBQUF3RkMsTUFBQUEsVyxPQUFBQSxXOztBQUNs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VyxNQUFiLENBQW9CQyxNQUFwQixHQUE2QnBCLE9BQU8sQ0FBQ21CLE1BQXJDLENBL0N1RCxDQWdEdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWQsZ0JBQUFBLE9BQU8sQ0FBQ2dCLEVBQVIsQ0FBVy9DLElBQUksQ0FBQ2dELFNBQUwsQ0FBZUMsVUFBMUIsRUFBc0MsTUFBSSxDQUFDQyxpQkFBM0MsRUFBOERuQixPQUE5RCxFQXJEdUQsQ0FzRHZEOztBQUNBOzs7OztBQUtBO0FBQ0gsZUE3REQ7QUErREFkLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVRLE9BQU8sQ0FBQ1csRUFBbkM7QUFDSCxhQW5FRDtBQXFFQXBCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSDtBQUVEOzs7Ozs7aURBRzhCO0FBQzFCO0FBQ0EsaUJBQUtjLFFBQUwsQ0FBY21CLGlCQUFkO0FBQ0FsQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0g7QUFFRDs7Ozs7OzRDQUd5QjtBQUNyQjtBQUNBO0FBQ0FELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDSDtBQUVEOzs7Ozs7NENBR3lCa0MsSyxFQUFtQjtBQUN4QztBQUNBN0MsWUFBQUEsUUFBUSxDQUFDWSxRQUFULEdBQW9CQyxXQUFwQixHQUZ3QyxDQUd4QztBQUNBO0FBRUE7O0FBQ0FaLFlBQUFBLFFBQVEsQ0FBQ1csUUFBVCxHQUFvQmtDLGVBQXBCLENBQW9DRCxLQUFwQztBQUNBbkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBY2tDLEtBQUssQ0FBQ0UsTUFBUCxDQUF1QkMsSUFBaEQ7QUFDSDs7O1FBN0k4Qm5ELFM7Ozs7O2lCQUdQLEk7Ozs7b0JBZFYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExvYWRlciwgbG9hZGVyLCB1cmwsIFByZWZhYiwgaW5zdGFudGlhdGUsIEJ1dHRvbkNvbXBvbmVudCwgRXZlbnRUeXBlLCBFdmVudE1vdXNlLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgU3ByaXRlRnJhbWUsIFNwcml0ZUF0bGFzIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IFBhbmVsUm9vdCB9IGZyb20gXCIuLi9Sb290L1BhbmVsUm9vdFwiO1xyXG5pbXBvcnQgeyBNb3JlR2FtZURhdGEgfSBmcm9tIFwiLi4vTW9kZWwvTW9yZUdhbWVEYXRhXCI7XHJcbmltcG9ydCB7IFBhdGhDZmcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL1BhdGhDZmdcIjtcclxuaW1wb3J0IHsgTW9yZUdhbWVJdGVtIH0gZnJvbSBcIi4uL01vZGVsL01vcmVHYW1lSXRlbVwiO1xyXG5pbXBvcnQgeyBNYWluTWdyIH0gZnJvbSBcIi4uL1N5c3RlbS9NYWluTWdyXCI7XHJcbmltcG9ydCB7IEF1ZGlvU3ZjIH0gZnJvbSBcIi4uL1NlcnZpY2UvQXVkaW9TdmNcIjtcclxuaW1wb3J0IHsgU2hhcmVTdmMgfSBmcm9tIFwiLi4vU2VydmljZS9TaGFyZVN2Y1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLy/mm7TlpJrmuLjmiI9cclxuQGNjY2xhc3MoXCJNb3JlR2FtZVBhbmVsXCIpXHJcbkBfZGVjb3JhdG9yLm1lbnUoXCJWaWV3L01vcmVHYW1lUGFuZWxcIilcclxuZXhwb3J0IGNsYXNzIE1vcmVHYW1lUGFuZWwgZXh0ZW5kcyBQYW5lbFJvb3Qge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcclxuICAgIHB1YmxpYyBzcGF3blBvczogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3nmoTlrp7kvovljJbnmoTpooTliLbkvZPmlbDnu4TvvIznlKjkuo7lhbPpl63nqpfkvZPlkI7plIDmr4FcclxuICAgICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBjdXJEZXN0b3J5TW9yZUdhbWVJdGVtOiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICBJbml0UGFuZWwoKSB7XHJcbiAgICAgICAgc3VwZXIuSW5pdFBhbmVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuU3Bhd25Nb3JlR2FtZUl0ZW0odGhpcy5yZXNTdmMubW9yZUdhbWVEYXRhTHN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vcmVHYW1lUGFuZWwgIGluaXQuLi5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6Zet5oyJ6ZKuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDbGlja0Nsb3NlQnRuKCkge1xyXG4gICAgICAgIC8v5pKt5pS+6Z+z5ZONXHJcbiAgICAgICAgQXVkaW9TdmMuSW5zdGFuY2UoKS5QbGF5VUlBdWRpbygpO1xyXG4gICAgICAgIC8vc3VwZXIuQ2xpY2tDbG9zZUJ0bigpO1xyXG4gICAgICAgIHRoaXMuU2V0UGFuZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgLy/muIXnkIbmlbDmja5cclxuICAgICAgICB0aGlzLkNsZWFuQWxsTW9yZUdhbWVJdGVtKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb3JlR2FtZVBhbmVsIOWFs+mXrVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWunuS+i+WMlk1vcmVHYW1lSXRlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3Bhd25Nb3JlR2FtZUl0ZW0oZGF0YTogTW9yZUdhbWVEYXRhW10pIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAvL+mBjeWOhueUn+aIkOmihOWItuS9k+W5tui1i+WAvFxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHsvL+mCo+S4quW4g+WxgOe7hOS7tuimgeeglOeptuS4gOS4i1xyXG4gICAgICAgICAgICAvL+WKoOi9vemihOWItuS9k1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJlc1N2Yy5Mb2FkUHJlZmFicyhQYXRoQ2ZnLk1PUkVHQU1FSVRFTV9QQVRILHRoaXMuc3Bhd25Qb3MsbWFrZU9iaik7XHJcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKFBhdGhDZmcuTU9SRUdBTUVJVEVNX1BBVEgsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgcmVhZFwiICsgXCIsXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBjdXJOb2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rueItuWvueixoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3blBvcy5hZGRDaGlsZChjdXJOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOi/m+mihOWItuS9k+mbhuWQiFxyXG4gICAgICAgICAgICAgICAgLy9zZWxmLmN1ckRlc3RvcnlNb3JlR2FtZUl0ZW0ucHVzaChjdXJOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9ruWug+eahOWQjeWtl1xyXG4gICAgICAgICAgICAgICAgLy9jdXJOb2RlLm5hbWUgPSBcIm1vcmVJdGVtOlwiICsgZWxlbWVudC5pZDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJOb2RlLm5hbWU6XCIrY3VyTm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v6I635b6X57uE5Lu2XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIE1vcmVHYW1lSXRlbee7hOS7tlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9yZUdhbWVDb21wOiBNb3JlR2FtZUl0ZW0gPSBjdXJOb2RlLmdldENvbXBvbmVudChNb3JlR2FtZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLojrflvpfnu4Tku7bvvJpcIiArIG1vcmVHYW1lQ29tcCk7XHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rklkXHJcbiAgICAgICAgICAgICAgICBtb3JlR2FtZUNvbXAuSWQgPSBlbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7nva5pZO+8mlwiICsgbW9yZUdhbWVDb21wLklkKTtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295Zu+54mH5bm26K6+572uXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVzU3ZjLkxvYWRJbWFnZShlbGVtZW50LmltZ0ljb25VcmwsIG1vcmVHYW1lQ29tcC5pbWdJY29uKTtcclxuICAgICAgICAgICAgICAgIC8qbG9hZGVyLmxvYWRSZXMoZWxlbWVudC5pbWdJY29uVXJsLCAoZXJyOiBhbnksIHNwOiBTcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB3aGlsZSBkb3duaW5nXCIgKyBcIixcIiArIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZUdhbWVDb21wLmltZ0ljb24uc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgICAgICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lm77pm4blubborr7nva5cclxuICAgICAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKFBhdGhDZmcuQWx0YV8wOFRlc3RfUEFUSCwgU3ByaXRlQXRsYXMsIChlcnI6IGFueSwgYWx0YXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgZG93bmluZ1wiICsgXCIsXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcDogU3ByaXRlRnJhbWUgPSBhbHRhcy5nZXRTcHJpdGVGcmFtZShlbGVtZW50LmltZ0ljb25VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcmVHYW1lQ29tcC5pbWdJY29uLnNwcml0ZUZyYW1lID0gc3A7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMTExXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iuvue9rkRlc1xyXG4gICAgICAgICAgICAgICAgbW9yZUdhbWVDb21wLnR4dERlcy5zdHJpbmcgPSBlbGVtZW50LnR4dERlcztcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN55qEQnV0dG9u57uE5Lu2XHJcbiAgICAgICAgICAgICAgICAvL2xldCBidXR0b25Db21wOiBCdXR0b25Db21wb25lbnQgPSBjdXJOb2RlLmdldENvbXBvbmVudChCdXR0b25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgLy/liqjmgIHmt7vliqDnm5HlkKxcclxuICAgICAgICAgICAgICAgIC8vY3VyTm9kZS5vbihOb2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLkNsaWNrTW9yZUdhbWVJdGVtLCBjdXJOb2RlLGN1ck5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy9jdXJOb2RlLm9uKE5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMuQ2xpY2tNb3JlR2FtZUl0ZW0oY3VyTm9kZSksIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgY3VyTm9kZS5vbihOb2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLkNsaWNrTW9yZUdhbWVJdGVtLCBjdXJOb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vY3VyTm9kZS5vbihOb2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLkNsaWNrTW9yZUdhbWVJdGVtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIC8qY3VyTm9kZS5vbihOb2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoZXJyLCBjdXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/or7fmsYLnvZHnu5zmlbDmja4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuUmVxTW9yZUdhbWVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuobmm7TlpJrmuLjmiI/vvJpcIiArIGN1ck5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAvL2J1dHRvbkNvbXAuY2xpY2tFdmVudHMoKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a6e5L6L5YyW5pu05aSa5ri45oiP6aKE5Yi25L2TXCIgKyBlbGVtZW50LmlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlrp7kvovljJbmm7TlpJrmuLjmiI/pooTliLbkvZMuLi5cIilcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4heeQhuWKoOi9veeahEl0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIENsZWFuQWxsTW9yZUdhbWVJdGVtKCkge1xyXG4gICAgICAgIC8v5ou/5Yiw5b2T5YmN55qE5a6e5L6L5YyW55qEXHJcbiAgICAgICAgdGhpcy5zcGF3blBvcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+B5omA5pyJ5a2Q6IqC54K5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K+35rGC5pu05aSa5ri45oiP572R57uc5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBSZXFNb3JlR2FtZUl0ZW0oKSB7XHJcbiAgICAgICAgLy/lkJHmnI3liqHlmajlj5HpgIHor7fmsYJcclxuICAgICAgICAvL0RPRE9cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axguabtOWkmua4uOaIj+eahOe9kee7nOaVsOaNrlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeCueWHu01vcmVHYW1lSXRlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ2xpY2tNb3JlR2FtZUl0ZW0oZXZlbnQ6IEV2ZW50TW91c2UpIHtcclxuICAgICAgICAvL+aSreaUvumfs+WTjVxyXG4gICAgICAgIEF1ZGlvU3ZjLkluc3RhbmNlKCkuUGxheVVJQXVkaW8oKTtcclxuICAgICAgICAvL+ivt+axgue9kee7nOaVsOaNriAgICAgIFxyXG4gICAgICAgIC8vTWFpbk1nci5JbnN0YW5jZSgpLm1vcmVnYW1lUGFuZWwuUmVxTW9yZUdhbWVJdGVtKCk7Ly/ov5nmoLflhpnmiY3og73orr/pl67liLBcclxuXHJcbiAgICAgICAgLy/miZPlvIDnrKzkuInmlrnpk77mjqVcclxuICAgICAgICBTaGFyZVN2Yy5JbnN0YW5jZSgpLlRvT3RoZXJNaW5pR2FtZShldmVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuobmm7TlpJrmuLjmiI/vvJpcIiArIChldmVudC50YXJnZXQgYXMgTm9kZSkubmFtZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==