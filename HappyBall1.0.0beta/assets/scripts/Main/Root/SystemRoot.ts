import { _decorator, Component, Node } from "cc";
import { ResSvc } from "../Service/ResSvc";
import { AudioSvc } from "../Service/AudioSvc";
import { NetSvc } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("SystemRoot")
export class SystemRoot extends Component {
   //#region  服务持有
   protected resSvc: ResSvc;
   protected audioSvc: AudioSvc;
   protected netSvc: NetSvc;

   //#endregion
   
   /**
    * 初始化系统
    */
   public InitSys() {
      this.resSvc = ResSvc.Instance();
      this.audioSvc = AudioSvc.Instance();
      this.netSvc = NetSvc.Instance();
   }


}
