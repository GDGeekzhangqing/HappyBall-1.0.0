import { _decorator, Component, Node } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { AudioSvc } from "../Service/AudioSvc";
import { SignAwardConfig } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("SignPanel")
@_decorator.menu("View/SignPanel")
export class SignPanel extends PanelRoot {

   private signAwardCfg: SignAwardConfig = null;

   InitPanel() {
      super.InitPanel();

      //拿到签到奖励数据
      this.signAwardCfg = this.netSvc.GetSignAwardCfg();

      console.log("SignPanel Init...");
   }

   /**
    * 关闭按钮
    */
   public ClickCloseBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //super.ClickCloseBtn();
      this.SetPanelState(false);
      console.log("SignPanel 关闭");
   }

   //#region  重复的按钮函数，后面重构

   /**
    * 签到星期一
    */
   public ClickMondaySignBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.mondayCfg, 0, 0, 0, null, null);

      console.log("签到星期一");
   }

   /**
    * 签到星期二
    */
   public ClickTuesdaySignBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是400金币

      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.tuesdayCfg, 0, 0, 0, null, null);

      console.log("签到星期二");

   }

   /**
    * 签到星期三
    */
   public ClickWednessdaySignBtn() { //播放音响
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是500金币

      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.wednessdayCfg, 0, 0, 0, null, null);

      console.log("签到星期三");
   }


   /**
    * 签到星期四
    */
   public ClickThursdayBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是600金币

      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.thursdayCfg, 0, 0, 0, null, null);

      console.log("签到星期四");
   }

   /**S
    * 签到星期五
    */
   public ClickFridaySignBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是800金币

      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.fridayCfg, 0, 0, 0, null, null);
      console.log("签到星期五");
   }

   /**
    * 签到星期六
    */
   public ClickSaturdayBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是1000金币

      //更新数据库 
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.saturdayCfg, 0, 0, 0, null, null);
      console.log("签到星期六");
   }

   /**
    * 签到星期天
    */
   public ClickSundayBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //拿到奖励数据，这里是1500金币

      //更新数据库
      this.netSvc.UpdataInCreaseWechatCloudData(this.signAwardCfg.sundayCfg, 0, 0, 0, null, null);
      console.log("签到星期天");
   }

   //#endregion

   /**
    * 直接签到
    */
   public ClickJustSignBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //直接签到，不看视频广告
      //发送数据到数据库，更新数据
      console.log("直接签到...");
   }

   /**
    * 双倍签到
    */
   public ClickDoubleSignBtn() {
      //播放音响
      AudioSvc.Instance().PlayUIAudio();
      //看完视频广告，更新双倍数据 

      //发送数据到数据库，更新数据
      console.log("双倍签到...");
   }

}
