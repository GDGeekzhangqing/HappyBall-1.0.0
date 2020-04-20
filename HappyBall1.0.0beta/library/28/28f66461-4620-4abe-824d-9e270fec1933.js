"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTWFpbi9Nb2RlbC9Ta2luSXRlbURhdGEudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkVudW0iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTa2luVHlwZSIsIlNraW5JdGVtRGF0YSIsImltZ0ljb25VcmwiLCJFcnJvciIsImlkIiwic2tpblR5cGUiLCJwcmVmYWJVcmwiLCJpbWdVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLEksT0FBQUEsSTs7O21GQUVtQzs7O0FBRGpFQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROztpQkFFTEMsUTtBQUFBQSxRQUFBQSxRLENBQUFBLFE7QUFBQUEsUUFBQUEsUSxDQUFBQSxRO0FBQUFBLFFBQUFBLFEsQ0FBQUEsUTtBQUFBQSxRQUFBQSxRLENBQUFBLFE7U0FBQUEsUSx3QkFBQUEsUTs7QUFNWkgsTUFBQUEsSUFBSSxDQUFDRyxRQUFELENBQUo7OzhCQUdhQyxZLFdBRFpILE9BQU8sQ0FBQyxjQUFELEM7Ozs7O3FDQUVPSSxXLEVBQTJDO0FBQ2xELGtCQUFNLElBQUlDLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQ0g7OztBQU1ELDhCQUFZQyxFQUFaLEVBQXNCQyxRQUF0QixFQUF3Q0MsU0FBeEMsRUFBeURDLE1BQXpELEVBQXVFO0FBQUE7QUFDaEUsZUFBS0gsRUFBTCxHQUFRQSxFQUFSO0FBQ0EsZUFBS0MsUUFBTCxHQUFjQSxRQUFkO0FBQ0EsZUFBS0MsU0FBTCxHQUFlQSxTQUFmO0FBQ0EsZUFBS0MsTUFBTCxHQUFZQSxNQUFaO0FBQ047Ozs7O29CQXhCYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgRW51bSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gU2tpblR5cGUge1xyXG4gICAgQ2hhbGxlbmdlU2tpbixcclxuICAgIEdvbGRTa2luLFxyXG4gICAgU3RhbXBTa2luLFxyXG4gICAgVHJhaWxpbmdTa2luXHJcbn1cclxuRW51bShTa2luVHlwZSk7XHJcblxyXG5AY2NjbGFzcyhcIlNraW5JdGVtRGF0YVwiKVxyXG5leHBvcnQgY2xhc3MgU2tpbkl0ZW1EYXRhIHtcclxuICAgIGltZ0ljb25VcmwoaW1nSWNvblVybDogYW55KTogaW1wb3J0KFwiY2NcIikuU3ByaXRlRnJhbWUge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2tpblR5cGU6IFNraW5UeXBlO1xyXG4gICAgcHVibGljIHByZWZhYlVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIGltZ1VybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcixza2luVHlwZTpTa2luVHlwZSxwcmVmYWJVcmw6c3RyaW5nLGltZ1VybDpzdHJpbmcpe1xyXG4gICAgICAgICAgIHRoaXMuaWQ9aWQ7XHJcbiAgICAgICAgICAgdGhpcy5za2luVHlwZT1za2luVHlwZTtcclxuICAgICAgICAgICB0aGlzLnByZWZhYlVybD1wcmVmYWJVcmw7XHJcbiAgICAgICAgICAgdGhpcy5pbWdVcmw9aW1nVXJsO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=