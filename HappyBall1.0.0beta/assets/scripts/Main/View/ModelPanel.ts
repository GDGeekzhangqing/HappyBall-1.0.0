import { _decorator, Component, Node, LabelComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { ShareSvc } from "../Service/ShareSvc";
import { MainMgr } from "../System/MainMgr";
import { AudioSvc } from "../Service/AudioSvc";
const { ccclass, property } = _decorator;

//这个脚本负责游戏难度的调整
//开启困难模式的条件就是看视频
//打开这个界面的逻辑在MainMgr.ts里
@ccclass("ModelPanel")
@_decorator.menu("View/ModePanel")
export class ModelPanel extends PanelRoot {
  @property({ type: LabelComponent })
  public txtDialogDes: LabelComponent = null;

  InitPanel() {
    super.InitPanel();

  }

  /**
   * 关闭按钮
   */
  public ClickCloseBtn() {
    //播放音响
    //this.audioSvc.PlayUIAudio()
    AudioSvc.Instance().PlayUIAudio();

    //super.ClickCloseBtn();
    this.SetPanelState(false);
    console.log("ModelPanel 关闭");
  }

  /**
   * 看视频得皮肤
   */
  public ClickWatchVideoForSkin() {
    //播放音响
    //this.audioSvc.PlayUIAudio()
    AudioSvc.Instance().PlayUIAudio();

    //this.shareSvc.WatchVideoForSkin();
    ShareSvc.Instance().WatchVideoForSkin();
    //看完后是否回到主城？
    MainMgr.Instance().OpenMainPanel();
    console.log("看完视频回到主城...");
  }





}
