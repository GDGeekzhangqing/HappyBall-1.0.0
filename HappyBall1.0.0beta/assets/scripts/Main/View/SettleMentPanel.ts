import { _decorator, Component, Node, LabelComponent, UITransformComponent, SpriteComponent, Vec3, tweenUtil, Quat } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { ShareSvc } from "../Service/ShareSvc";
import { PlayPanel } from "./PlayPanel";
import { MainMgr } from "../System/MainMgr";
import { GameCtr } from "../Controller/GameCtr";
import { AudioSvc } from "../Service/AudioSvc";
import { SkinPanel } from "./SkinPanel";
import { NetSvc, UserGameMsg } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("SettleMentPanel")
@_decorator.menu("View/SettleMentPanel")
export class SettleMentPanel extends PanelRoot {

    @property({ type: LabelComponent })
    public txtGoldVal: LabelComponent = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    @property({ type: SkinPanel })
    public skinPanel: SkinPanel = null;

    @property({ type: UITransformComponent })
    public imgLight: UITransformComponent = null;

    @property({ type: GameCtr })
    public gameCtrl: GameCtr = null;

    /**
    * 金币数量
    */
    private goldVal: number;

    public eul: Vec3 = new Vec3(0, 0, 0);

    private rotaVal = 0;

    InitPanel() {
        super.InitPanel();
        //拿到云端用户数据赋值给金币txt
        let pd: UserGameMsg = NetSvc.Instance().GetUserGameMsg();
        this.goldVal = pd.coinVal;
        console.log("是否拿到本地存储的金币数据："+pd.coinVal);

        console.log(" SettleMentPanel init...");
    }

    update() {
        this.rotaVal += 1;
        //旋转imgLight
        this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);

    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        console.log("SettleMentPanel 关闭");
    }

    /**
     * 看视频翻一倍
     */
    public ClickWatchVideoBtn() {
        //看完视频后
        ShareSvc.Instance().WatchVideoForAward();
        //回到当前界面

        //奖励翻倍
        this.goldVal = this.goldVal * 2;
        //更新UI

        //更新数据库

        //清空本次奖励数据
        this.goldVal = 0;

        console.log("看视频翻一倍");
    }

    /**
     * 点击跳过
     */
    public ClickSkipBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio();
        //更新云端数据
        NetSvc.Instance().UpdataInCreaseWechatCloudData(this.goldVal, 0, 0, 0,null,null);
        console.log("更新云数据在结算界面...")

        //关闭这个界面
        this.SetPanelState(false);
        //重置游戏状态
        this.gameCtrl.GameBackToLogin();
        //设置皮肤界面的UI
        this.skinPanel.SetSkinGoldVal(this.goldVal, 7);//先传个7，7可能代表连续签到7天
        //打开主界面
        MainMgr.Instance().OpenMainPanel();
        //清空本次奖励数据
        this.goldVal = 0;

        console.log("点击跳过");
    }

    /**
     * 设置金币数目
     */
    public SetGoldValUI(val: number) {
        //设置本次金币数据
        this.goldVal = val * 2;
        console.log("传进来的金币数目是：" + this.goldVal);
        this.txtGoldVal.string = this.goldVal.toString();
    
    }
}
