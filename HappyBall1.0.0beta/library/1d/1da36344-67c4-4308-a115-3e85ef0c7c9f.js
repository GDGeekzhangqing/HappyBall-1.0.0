"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

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
        }]);

        //public tiwnRankItemData:TiwnRankListItem;  //暂时不用
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Nb2RlbC9QbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5ZXJEYXRhIiwiaW5zdGFuY2UiLCJuYW1lIiwiY29pblZhbCIsImxhc3RTY29yZSIsImN1cnJlbnRTY29yZSIsImhpZ2h0ZXN0U2NvcmUiLCJkaWFtb25kVmFsIiwiQ29pblZhbCIsIkhpZ2h0ZXN0U2NvcmUiLCJEaWFtb25kVmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7O2lGQUVnRTs7O0FBQ2pFQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxRLEVBRWpCOzs0QkFFYUMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7OztBQUdKO0FBRUE7QUFHQTs7QUFDQTs7OztBQUlBOzs7cUNBR3FDO0FBQ2pDLG1CQUFPLEtBQUtHLFFBQVo7QUFDSDs7O0FBUUQ7QUFDQTtBQUNBLDRCQUFZQyxJQUFaLEVBQTBCQyxPQUExQixFQUEyQ0MsU0FBM0MsRUFBOERDLFlBQTlELEVBQW9GQyxhQUFwRixFQUEyR0MsVUFBM0csRUFBK0g7QUFBQTtBQUFBLGVBUnhITCxJQVF3SCxHQVJ6RyxJQVF5RztBQUFBLGVBUHhITSxPQU93SCxHQVB0RyxJQU9zRztBQUFBLGVBTnhISixTQU13SCxHQU5wRyxJQU1vRztBQUFBLGVBTHhIQyxZQUt3SCxHQUxqRyxJQUtpRztBQUFBLGVBSnhISSxhQUl3SCxHQUpoRyxJQUlnRztBQUFBLGVBSHhIQyxVQUd3SCxHQUhuRyxJQUdtRztBQUMzSCxlQUFLUixJQUFMLEdBQVlBLElBQVo7QUFDQSxlQUFLTSxPQUFMLEdBQWVMLE9BQWY7QUFDQSxlQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsZUFBS0ksYUFBTCxHQUFxQkgsYUFBckI7QUFDQSxlQUFLSSxVQUFMLEdBQWtCSCxVQUFsQjtBQUNIOzs7bUJBN0JjTixRLEdBQXVCLEk7O29CQVZ4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBSZWxheVJhbmtMaXN0SXRlbSB9IGZyb20gXCIuL1JlbGF5UmFua0xpc3RJdGVtXCI7XHJcbmltcG9ydCB7IFRpd25SYW5rTGlzdEl0ZW0gfSBmcm9tIFwiLi9UaXduUmFua0xpc3RJdGVtXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vL+e9kee7nOeOqeWutuaVsOaNruWNj+iurlxyXG5AY2NjbGFzcyhcIlBsYXllckRhdGFcIilcclxuZXhwb3J0IGNsYXNzIFBsYXllckRhdGEge1xyXG5cclxuICAgIC8vI3JlZ2lvbiAg5Y2V5L6LXHJcblxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTmV0TWdyID0gbmV3IE5ldE1ncigpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFBsYXllckRhdGEgPSBudWxsO1xyXG5cclxuICAgIC8v6ZmQ5Yi25Lqn55Sf5aSa5Liq5a+56LGhXHJcbiAgICAvKiBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICBzdXBlcigpO1xyXG4gICAgIH0qL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a6e5L6L5a+56LGhIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IFBsYXllckRhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIENvaW5WYWw6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgbGFzdFNjb3JlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGN1cnJlbnRTY29yZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBIaWdodGVzdFNjb3JlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIERpYW1vbmRWYWw6IG51bWJlciA9IG51bGw7XHJcbiAgICAvL3B1YmxpYyB0aXduUmFua0l0ZW1EYXRhOlRpd25SYW5rTGlzdEl0ZW07ICAvL+aaguaXtuS4jeeUqFxyXG4gICAgLy9wdWJsaWMgcmVsYXlSYW5rSXRlbURhdGE6UmVsYXlSYW5rTGlzdEl0ZW1bXTtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29pblZhbDogbnVtYmVyLCBsYXN0U2NvcmU6IG51bWJlciwgY3VycmVudFNjb3JlOiBudW1iZXIsIGhpZ2h0ZXN0U2NvcmU6IG51bWJlciwgZGlhbW9uZFZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLkNvaW5WYWwgPSBjb2luVmFsO1xyXG4gICAgICAgIHRoaXMubGFzdFNjb3JlID0gbGFzdFNjb3JlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gY3VycmVudFNjb3JlO1xyXG4gICAgICAgIHRoaXMuSGlnaHRlc3RTY29yZSA9IGhpZ2h0ZXN0U2NvcmU7XHJcbiAgICAgICAgdGhpcy5EaWFtb25kVmFsID0gZGlhbW9uZFZhbDtcclxuICAgIH1cclxufVxyXG4iXX0=