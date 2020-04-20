import { _decorator, Component, Node, UITransformComponent, LabelComponent, SpriteComponent, Vec3, SpriteFrame } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { MainMgr } from "../System/MainMgr";
import { SettingMgr } from "../System/SettingMgr";
import { ShareSvc, ShareLinkType } from "../Service/ShareSvc";
import { GameCtr } from "../Controller/GameCtr";
import { NetSvc } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("MainPanel")
@_decorator.menu("View/MainPanel")
export class MainPanel extends PanelRoot {

    //#region  UI 引用

    @property({ type: UITransformComponent })
    public settingPos: UITransformComponent = null;

    @property({ type: UITransformComponent })
    public fristPos: UITransformComponent = null;

    @property({ type: UITransformComponent })
    public laterPos: UITransformComponent = null;

    @property({ type: LabelComponent })
    public txtWillGetVal: LabelComponent = null;

    @property({ type: SpriteComponent })
    public imgWillGetSkin: SpriteComponent = null;

    @property({ type: LabelComponent })
    public txtCurrentScore: LabelComponent = null;

    private isSettingActive: boolean = false;

    @property({ type: GameCtr })
    public gameCtrl: GameCtr = null;

    @property({ type: UITransformComponent })
    public imgLight: UITransformComponent = null;

    public rotaVal = 0;

    @property({ type: SettingMgr })
    public settingMgr: SettingMgr = null;

    @property([SpriteFrame])
    public spVolume: SpriteFrame[] = [];//0 关 1 开

    @property([SpriteFrame])
    public spImageQuality: SpriteFrame[] = []; //0 流畅  1 高清

    @property([SpriteFrame])
    public spVibration: SpriteFrame[] = [];//0 振动  1 不振动

    @property({ type: SpriteComponent })
    public imgVolume: SpriteComponent = null;

    @property({ type: SpriteComponent })
    public imgImageQuality: SpriteComponent = null;

    @property({ type: SpriteComponent })
    public imgVibration: SpriteComponent = null;


    private loginBtn;

    //#endregion

    //#region  单例

    //private static instance: NetMgr = new NetMgr();
    private static instance: MainPanel = null;


    //限制产生多个对象
    /* private constructor() {
         super();
     }*/


    /**
     * 获得实例对象 
     */
    public static Instance(): MainPanel {
        return this.instance;
    }
    //#endregion

    public InitPanel() {
        super.InitPanel();
        console.log(" Main Panel init...");
    }

    update() {
        this.rotaVal += 1;
        this.imgLight.node.eulerAngles = new Vec3(0, 0, this.rotaVal);
    }

    //#region  公共按钮函数

    /**
     * 更多游戏
     */
    public ClickMoreGameBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //加载网络数据
        MainMgr.Instance().OpenMoreGamePanel();
    }


    /**
     * 将要获得
     */
    public ClickWillGetBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开皮肤面板
        MainMgr.Instance().OpenSkinPanel();
    }

    /**
     * 签到
     */
    public ClickSignBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开签到面板
        MainMgr.Instance().OpenSignPanel();
    }

    /**
     * 设置
     */
    public ClickSettingBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开设置面板
        if (this.isSettingActive == false) {
            this.settingPos.node.active = true;
            this.isSettingActive = true;
        }
        else {
            this.settingPos.node.active = false;
            this.isSettingActive = false;
        }
    }

    /**
     * 皮肤
     */
    public ClickSkinBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开皮肤面板
        MainMgr.Instance().OpenSkinPanel();
        console.log("MainPanel ClickSkinBtn...");
    }

    /**
     * 分享
     */
    public ClickShareBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开分享渠道
        //TODO
        //this.shareSvc.ShareLink();
        ShareSvc.Instance().ShareLink(ShareLinkType.Both);
        console.log("MainPanel ClickShareBtn...");
    }

    /**
     * 模式
     */
    public ClickModelBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //选择难度
        //如果不满足条件，则打开面板
        MainMgr.Instance().ChooseModelPanel();
        console.log("MainPanel ClickModelBtn...");
    }

    /**
     * 继续
     */
    public ClickContinueBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开寻求帮助面板
        MainMgr.Instance().OpenFreeContinuePanel();
        console.log("MainPanel ClickContinueBtn...");
    }

    /**
     * 幸运转盘
     */
    public ClickHappyGuyBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开幸运转盘面板
        MainMgr.Instance().OpenHappyGuyPanel();
        console.log("MainPanel ClickHappyGuyBtn...");
    }

    /**
     * 道具礼包
     */
    public ClickGiftBagBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开道具礼包面板
        MainMgr.Instance().OpenGiftBagPanel();
        console.log("MainPanel ClickGiftBagBtn...");
    }

    /**
     * 音量开关
     */
    public ClickVolumeBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio();

        //SettingMgr.Instance().SetAudioEnable();
        this.settingMgr.SetAudioEnable();
        //更换图片
        if (this.settingMgr.isVolume == false) {
            this.imgVolume.spriteFrame = this.spVolume[0];
        }
        else {
            this.imgVolume.spriteFrame = this.spVolume[1];
        }
        console.log("点击 音量开关...");
    }

    /**
     *画质选择
     */
    public ClickImageQualityBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio();
        //怎么做？
        //设置相机分辨率
        //SettingMgr.Instance().SetFuzzyMask();
        this.settingMgr.SetFuzzyMask();
        //更换图片
        if (this.settingMgr.isImageQuality == false) {
            this.imgImageQuality.spriteFrame = this.spImageQuality[0]
        }
        else {
            this.imgImageQuality.spriteFrame = this.spImageQuality[1]
        }
        console.log("MainPanel ClickImageQualityBtn...");
    }

    /**
     * 振动开关
     */
    public ClickVibrtionBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()

        //设置振动
        //SettingMgr.Instance().SetVibrate();
        this.settingMgr.SetVibrate();
        //更换图片
        if (this.settingMgr.isVibration == false) {
            this.imgVibration.spriteFrame = this.spVibration[0];
        }
        else {
            this.imgVibration.spriteFrame = this.spVibration[1];
        }
        console.log("MainPanel ClickVibrtionBtn...");
    }

    //#endregion

    //#region  未玩时函数

    /**
     * 开始游戏
     */
    public ClickStartPlayBtn() {

        //播放音响
        this.audioSvc.PlayUIAudio();
        //开始游戏
        //GameSys.Instance().InitSys();
        this.gameCtrl.GameStart();
        //隐藏主UI
        this.node.active = false;
        //显示游戏时的UI
        MainMgr.Instance().OpenPlayPanel();
        console.log("MainPanel ClickStartPlayBtn...");
    }

    /**
     * 排行榜
     */
    public ClickRankListBtn() {//这个逻辑要补，打开对应的排行榜
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开排行榜
        MainMgr.Instance().OpenRankListPanel();

        //调用对应的函数
        console.log("MainPanel ClickIRankListBtn...");
    }

    /**
     * 查看群排行
     */
    public ClickCrowdRankListBtn() {//这个逻辑要补，打开对应的排行榜
        //播放音响
        this.audioSvc.PlayUIAudio()
        //打开排行榜
        MainMgr.Instance().OpenRankListPanel();
        //调用对应的函数
        console.log("MainPanel ClickImageQualityBtn...");
    }

    //#endregion

    //#region  玩过后的函数

    /**
     * 显示本次得分
     */
    public ShowScore(val: number) {
        //拿到本次得分，赋值给UI
        this.txtCurrentScore.string = val.toString();
    }

    /**
     * 发起挑战
     */
    public ClickChallengeBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //调用分享吗，或许有点不一样，不只只是分享
        this.shareSvc.ShareLink(ShareLinkType.Both);
        console.log("MainPanel ClickChanllengeBtn...");
    }

    /**
     * 发起接力
     */
    public ClickRelayBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //发起接力
        // this.shareSvc.ShareLink();
        ShareSvc.Instance().ShareLink(ShareLinkType.Both);
        console.log("MainPanel ClickRelayBtn...");
    }

    /**
     * 再玩一局
     */
    public ClickPlayAgainBtn() {
        //播放音响
        this.audioSvc.PlayUIAudio()
        //开始游戏
        //GameSys.Instance().InitSys();
        this.gameCtrl.GameRestart();
        //隐藏主UI
        this.node.active = false;
        //显示游戏时的UI
        MainMgr.Instance().OpenPlayPanel();
        console.log("MainPanel ClickRelayAgainBtn...");
    }

    //#endregion


}
