import { _decorator, Component, Node, LabelComponent, SpriteComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { MainPanel } from "./MainPanel";
import { MainMgr } from "../System/MainMgr";
import { GameCtr } from "../Controller/GameCtr";
import { PlayPanel } from "./PlayPanel";
import { SettleMentPanel } from "./SettleMentPanel";
import { AudioSvc } from "../Service/AudioSvc";
import { ShareSvc } from "../Service/ShareSvc";
import { LoadSys } from "../System/LoadSys";
import { NetSvc } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("GameOverPanel")
@_decorator.menu("View/GameOverPanel")
export class GameOverPanel extends PanelRoot {

    @property({ type: LabelComponent })
    public txtScore: LabelComponent = null;

    @property({ type: SpriteComponent })
    public imgIcon: SpriteComponent = null;

    @property({ type: LabelComponent })
    public txtSurpassVal: LabelComponent = null;

    private oldScoreVal: number = 0;

    @property({ type: MainPanel })
    public mainPanel: MainPanel = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    @property({ type: GameCtr })
    public gameCtrl: GameCtr = null;

    @property({ type: SettleMentPanel })
    public settleMentPanel: SettleMentPanel = null;

    @property({ type: LoadSys })
    public loadSys: LoadSys = null;

    public InitPanel() {
        super.InitPanel();


        //设置上盘得分

        console.log("GameOverPanel Init...")
    }

    /**
     * 关闭按钮
     */
    public ClickClose() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.SetPanelState(false);
    }

    /**
     * 看视频翻倍
     */
    public ClickWatchVideoBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //看完视频
        ShareSvc.Instance().WatchVideoForAward();

        //关闭该界面
        this.SetPanelState(false);
        //打开结算界面
        MainMgr.Instance().OpenSettleMentPanel();
        //奖励翻倍
        this.settleMentPanel.txtGoldVal.string = (this.oldScoreVal * 2 * 2).toString();
        //更新数据库
        //LoadSys.Instance().ServerSave();
        console.log("看视频翻倍...");
    }

    /**
     * 免费继续
     */
    public ClickFreePlayBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //打开免费求助面板，消耗免费继续资源
        //TODO
        MainMgr.Instance().OpenFreeContinuePanel();
        //关闭该界面
        this.SetPanelState();
        console.log("免费继续...");
    }

    /**
     * 点击跳过
     */
    public ClickSkipBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //保存数据到服务端
        //LoadSys.Instance().ServerSave();

        //关闭当前界面
        this.SetPanelState(false);
        //重置游戏状态
        //this.gameCtrl.GameBackToLogin();
        //结算界面
        this.settleMentPanel.SetPanelState();
        //设置金币
        this.settleMentPanel.SetGoldValUI(this.playPanel.lastScore);
        //上传数据
        //发送数据给子域
        let data = new Array();
        data.push({
            key: "lastscore",
            value: this.playPanel.lastScore.toString()
        });

        window['wx'].setUserCloudStorage({
            KVDataList: data,
            success: res => {
                console.log("上传数据成功:" + res.toString());
                console.log('res', res)
            },
            fail: res => {
                console.log("上传数据失败：" + res);
            }
        });
        console.log("loadSys有吗？：" + this.loadSys.hello);
        this.loadSys.ServerSave();

        console.log("结算界面！！！");

    }

    /**
     * 设置得分UI
     */
    public SetScoreUIInfo(val: number) {
        this.txtScore.string = val.toString();
        this.oldScoreVal = val;
    }

    /**
     * 设置超过的好友
     * @param val 
     */
    public SetSurpassUIInfo(val) {
        //this.txtSurpassVal.string = val.toString();
        if (CC_WECHATGAME) {
            //发送消息给子域
            window['wx'].postMessage({
                messageType: 3,
                score: val
            })
        }

        console.log("设置超过的好友");
    }

}
