import { _decorator, Component, Node, UITransformComponent, Enum, instantiate, loader, SpriteFrame, SpriteAtlas, Texture2D, SpriteComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { ResSvc } from "../Service/ResSvc";
import { AudioSvc } from "../Service/AudioSvc";
import { GameCtr } from "../Controller/GameCtr";
import { PlayPanel } from "./PlayPanel";
const { ccclass, property } = _decorator;


export enum RankItemType {//这个好像没用，可以放弃
    tiwnRankListType,
    relayRankListType
}

//wx232ea3d2e7178890
//01e8e69ddfb85507b1822ea45dfdeedc

@ccclass("RankListPanel")
@_decorator.menu("View/RankListPanel")
export class RankListPanel extends PanelRoot {

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    InitPanel() {
        super.InitPanel();

        //发消息给子域
        if (CC_WECHATGAME) {
            window['wx'].postMessage({
                messageType: 1,
            });
            console.log("发消息给子域");
        }
        console.log("RankListPanel init...");
    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        //发消息给子域
        if (CC_WECHATGAME) {
            window['wx'].postMessage({
                messageType: 7,
            });
            console.log("发消息给子域");
        }

        this.SetPanelState(false);

        console.log("RankListPanel 关闭");
    }

    /**
     * 单人排行榜
     */
    public ClickTiwnRankListBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        //发消息给子域
        if (CC_WECHATGAME) {
            window['wx'].postMessage({
                messageType: 1,
            });
            console.log("发消息给子域");
        }
        console.log("请求单人排行榜数据...");
    }

    /**
     * 接力排行榜
     */
    public ClickRelayRankListBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        //请求网络数据
        //发消息给子域
        if (CC_WECHATGAME) {
            window['wx'].postMessage({
                messageType: 2
            });
        }
        console.log("请求接力排行榜数据...");
    }

}

