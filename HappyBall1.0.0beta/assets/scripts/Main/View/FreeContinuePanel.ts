import { _decorator, Component, Node, LabelAtlas, LabelComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { GameCtr } from "../Controller/GameCtr";
import { AudioSvc } from "../Service/AudioSvc";
import { ShareSvc, ShareLinkType } from "../Service/ShareSvc";
import { PlayPanel } from "./PlayPanel";
import { PlayerData } from "../Model/PlayerData";
import { LoadSys } from "../System/LoadSys";
const { ccclass, property } = _decorator;

/**
 * 免费继续界面
 */
@ccclass("FreeContinuePanel")
@_decorator.menu("View/FreeContinuePanel")
export class FreeContinuePanel extends PanelRoot {

    @property({ type: LabelComponent })
    public txtVal: LabelComponent = null;

    @property({ type: GameCtr })
    public gameCtrl: GameCtr = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;


    protected InitPanel() {
        super.InitPanel();

        this.SetUI(3);
    }
    
    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //super.ClickCloseBtn();
        AudioSvc.Instance().PlayUIAudio();

        this.SetPanelState(false);
        console.log("FreeContinuePanel 关闭");
    }

    /**
     * 点击免费求助
     */
    public ClickSeekHelpBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        //点击之后调用分享接口
        ShareSvc.Instance().ShareLink(ShareLinkType.Both);
        //完成之后

        //继续游戏
        this.gameCtrl.GameRestart();
        //设置上盘的得分为这盘的得分

        //并且钻石数量增加
        //TODO

        console.log("点击免费求助...");
    }

    /**
     * 点击继续
     */
    public ClickContinueBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //消耗钻石数量（这个写活，要么配置json，要么请求网络数据）

        //请求网络数据

        //判断钻石数量是否满足消耗条件后
        if (PlayerData.Instance().DiamondVal >= 3) {
            //扣除钻石
            PlayerData.Instance().DiamondVal -= 1;
            //更新到数据库
            //LoadSys.Instance().ServerSave();
            //重新游戏
            this.gameCtrl.GameRestart();
            console.log("判断钻石数目...")
        }
        //重新游戏
        this.gameCtrl.GameRestart();

        console.log("点击继续...");
    }


    /**
     * 设置消耗的钻石UI
     */
    public SetUI(val: number) {
        
        this.txtVal.string = val.toString();
    }




}
