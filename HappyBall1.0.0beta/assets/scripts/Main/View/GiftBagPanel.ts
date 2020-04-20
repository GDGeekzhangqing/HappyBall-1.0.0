import { _decorator, Component, Node } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { ShareSvc, ShareLinkType } from "../Service/ShareSvc";
import { AudioSvc } from "../Service/AudioSvc";
const { ccclass, property } = _decorator;

@ccclass("GiftBagPanel")
@_decorator.menu("View/GiftBagPanel")
export class GiftBagPanel extends PanelRoot {


    InitPanel() {
        super.enabled = false;
    }

    /**
     * 更新UI
     */
    public UpdataUI() {
        //图片/参照图是给死的
        //这个方法不知道要不要写
        this.SetUI(1);
    }

    /**
     * 设置UI
     */
    public SetUI(data) {

    }

    /**
     * 点击关闭
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.SetPanelState(false);
        console.log("关闭了GiftBagPanel...");
    }

    /**
     *点击发送
     */
    public ClickSendBtn() {
        
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //发送分享链接
        //打开分享渠道
        ShareSvc.Instance().ShareLink(ShareLinkType.Both);
        console.log("点击发送...");
    }


}
