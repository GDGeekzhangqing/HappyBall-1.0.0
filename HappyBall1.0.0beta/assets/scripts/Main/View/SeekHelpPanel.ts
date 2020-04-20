import { _decorator, Component, Node, SpriteComponent, LabelComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { ShareSvc, ShareLinkType } from "../Service/ShareSvc";
import { AudioSvc } from "../Service/AudioSvc";
const { ccclass, property } = _decorator;

@ccclass("SeekHelpPanel")
@_decorator.menu("View/SeekHelpPanel")
export class SeekHelpPanel extends PanelRoot {

    @property({ type: SpriteComponent })
    public imgIcon: SpriteComponent = null;

    @property({ type: LabelComponent })
    public txtVal: LabelComponent = null;


    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        console.log("SeekHelpPanel 关闭");
    }

    /**
     * 免费求助
     */
    public ClickSeekHelp() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //调用分享链接函数
        //this.shareSvc.ShareLink();
        ShareSvc.Instance().ShareLink(ShareLinkType.Both);
    }






}
