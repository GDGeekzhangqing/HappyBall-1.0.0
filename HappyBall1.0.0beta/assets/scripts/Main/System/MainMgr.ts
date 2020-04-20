import { _decorator, Component, Node, loader } from "cc";
import { LoadPanel } from "../View/LoadPanel";
import { MainPanel } from "../View/MainPanel";
import { HappyGuyPanel } from "../View/HappyGuyPanel";
import { ModelPanel } from "../View/ModelPanel";
import { SeekHelpPanel } from "../View/SeekHelpPanel";
import { GiftBagPanel } from "../View/GiftBagPanel";
import { RankListPanel } from "../View/RankListPanel";
import { SkinPanel } from "../View/SkinPanel";
import { SettleMentPanel } from "../View/SettleMentPanel";
import { GameOverPanel } from "../View/GameOverPanel";
import { SignPanel } from "../View/SignPanel";
import { PlayPanel } from "../View/PlayPanel";
import { SystemRoot } from "../Root/SystemRoot";
import { GameRoot } from "../Root/GameRoot";
import { PlayerData } from "../Model/PlayerData";
import { FreeContinuePanel } from "../View/FreeContinuePanel";
import { TipsPanel } from "../View/TipsPanel";
import { MoreGamePanel } from "../View/MoreGamePanel";
const { ccclass, property } = _decorator;


//主城业务系统
//继承SystemRoot
@ccclass("MainMgr")
export class MainMgr extends SystemRoot {

    //#region  窗体引用持有
    @property({ type: LoadPanel })
    public loadPanel: LoadPanel = null;

    @property({ type: MainPanel })
    public mainPanel: MainPanel = null;

    @property({ type: HappyGuyPanel })
    public happyguyPanel: HappyGuyPanel = null;

    @property({ type: ModelPanel })
    public modelPanel: ModelPanel = null;

    @property({ type: SeekHelpPanel })
    public seekHelpPanel: SeekHelpPanel = null;

    @property({ type: GiftBagPanel })
    public giftbagPanel: GiftBagPanel = null;

    @property({ type: RankListPanel })
    public rankListPanel: RankListPanel = null;

    @property({ type: SkinPanel })
    public skinPanel: SkinPanel = null;

    @property({ type: SettleMentPanel })
    public settleMentPanel: SettleMentPanel = null;

    @property({ type: GameOverPanel })
    public gameoverPanel: GameOverPanel = null;

    @property({ type: SignPanel })
    public signPanel: SignPanel = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    @property({ type: FreeContinuePanel })
    public freeContinuePanel: FreeContinuePanel = null;

    @property({ type: TipsPanel })
    public tipsPanel: TipsPanel = null;

    @property({ type: MoreGamePanel })
    public moregamePanel: MoreGamePanel = null;

    //#endregion
    
    //#region  单例

    private static instance: MainMgr = null;

    //限制产生多个对象
    /* private constructor() {
         super();
     }*/

    /**
     * 获得实例对象
     */
    public static Instance(): MainMgr {
        return this.instance;
    }

    public InitMgr() {
        MainMgr.instance = this;
        //Instance = this;
        //加载资源函数初始化...
        //TODO
        console.log("Init MainMgr...");
        //this.EnterMainCity();
    }


    /**
     * 进入主城
     */
    public EnterMainCity() {

        //设置主城UI的显示以及其它窗体的隐藏
        this.mainPanel.SetPanelState();//这里要封装成一个方法
         //初始化MainPanel
         //this.mainPanel.InitPanel();
         console.log("进入主城...");
    }

    /**
     * 加载玩家
     */
    public LoadPlayer() {
        //通过资源服务加载玩家/小球

        //设置玩家的相关属性

        //初始化相机

    }


    //#region   主城控制各个窗体的显示隐藏

    //#region  更多游戏

    /**
     * 打开主界面
     */
    public OpenMainPanel() {
        this.mainPanel.SetPanelState();
    }

    //#endregion

    //#region  幸运转盘

    /**
     * 打开幸运转盘
     */
    public OpenHappyGuyPanel() {
        this.happyguyPanel.SetPanelState();
    }

    /**
     * 回应网络数据
     */
    public RspHappyGuyData(data) {  //传入的数据还没写
        //反序列数据

        //如果数据判断后为可以
        //调用抽奖、转盘相关方法
        /*if(){
          this.GetAward();//这里应该传入奖励物品的数据=》奖品 ID
        }*/
    }

    //#endregion

    //#region  模式选择（普通模式/困难模式） 

    /**
     * 打开模式选择界面
     */
    public ChooseModelPanel() {
        this.modelPanel.SetPanelState();
    }
    //#endregion

    //#region 免费求助界面

    /**
     * 打开免费求助界面
     */
    public OpenSeekHelpPanel() {
        this.seekHelpPanel.SetPanelState();
    }

    /**
     * 回应免费继续的钻石网络数据
     */
    public RspSeekHelpData() {

    }

    //#endregion

    //#region  道具礼包

    /**
     * 打开道具礼包面板
     */
    public OpenGiftBagPanel() {
        this.giftbagPanel.SetPanelState();
    }

    //#endregion

    //#region 排行榜界面

    /**
     * 打开排行榜界面
     */
    public OpenRankListPanel() {
        this.rankListPanel.SetPanelState();
    }


    //#endregion

    //#region 皮肤界面

    /**
     * 打开皮肤界面
     */
    public OpenSkinPanel() {
        this.skinPanel.SetPanelState();
        console.log("MainMgr 打开皮肤界面...");
    }

    /**
     * 回应皮肤数据
     */
    public RspSkinData() {

    }

    //#endregion

    //#region  结算界面

    /**
     * 打开结算界面
     */
    public OpenSettleMentPanel() {
        this.settleMentPanel.SetPanelState();
    }

    /**
     * 回应结算数据
     */
    public RspSettleMentData() {

    }

    //#endregion

    //#region 游戏结束界面

    /**
     * 打开游戏结束界面
     */
    public OpenGameOverPanel() {
        this.gameoverPanel.SetPanelState();
    }

    /**
     * 回应游戏结束数据
     */
    public RspGameOverData() {

    }

    //#endregion

    //#region  签到界面

    /**
     * 打开签到界面
     */
    public OpenSignPanel() {
        this.signPanel.SetPanelState();
    }

    /**
     * 回应签到数据
     */
    public RspSignData() {

    }

    //#endregion

    //#region  游戏界面

    /**
     * 打开游戏界面
     */
    public OpenPlayPanel() {
        this.playPanel.SetPanelState();
    }

    /**
     * Play
     */
    public RspPlayData() {

    }

    //#endregion

    //#region  免费继续界面

    /**
     * 打开免费继续界面
     */
    public OpenFreeContinuePanel() {
        this.freeContinuePanel.SetPanelState();
    }

    /**
     * 回应免费继续数据
     */
    public RspFreeContinueData() {

    }

    //#endregion

    //#region  更多游戏

    /**
     * 打开更多游戏
     */
    public OpenMoreGamePanel() {
        this.moregamePanel.SetPanelState();
    }

    /**
     * 回应更多游戏数据
     */
    public RspMoreGameData() {

    }

    //#endregion

    //#region  设置界面

    /**
     * 打开设置界面
     */
    public OpenSettingBtn() { //弃用
        // this.mainPanel.set
    }

    //#endregion  

    //#endregion

}
