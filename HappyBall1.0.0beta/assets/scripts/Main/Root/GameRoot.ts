import { _decorator, Component, Node, find } from "cc";
import { LoadPanel } from "../View/LoadPanel";
import { MainMgr } from "../System/MainMgr";
import { ShareSvc } from "../Service/ShareSvc";
import { NetSvc } from "../Service/NetSvc";
import { AudioSvc } from "../Service/AudioSvc";
import { ResSvc } from "../Service/ResSvc";
import { PlayerData } from "../Model/PlayerData";
import { TipsPanel } from "../View/TipsPanel";
import { LoadSys } from "../System/LoadSys";
const { ccclass, property } = _decorator;

@ccclass("GameRoot")
export class GameRoot extends Component {

    //#region  单例

    //private static instance: GameRoot = new GameRoot();
    private static instance: GameRoot = null;


    //限制产生多个对象
    /*private constructor() {
        super();
    }*/

    /**
     * 获得实例对象
     */
    public static Instance(): GameRoot {
        return this.instance;
    }

    //#endregion

    //#region  会造成循环引用
    /* @property({ type: LoadPanel })
     public loadPanel: LoadPanel = null;*/
    //#endregion

    // 通过字符串而非类本身来标记属性类型为 LoadPanel；"loadPanel" 是 类 LoadPanel  的 cc 名称
    @property('LoadPanel')
    public loadPanel: LoadPanel = null;

    @property('TipsPanel')
    public tipPanel: TipsPanel = null;


    start() {  
        GameRoot.instance = this;

        console.log("Game Start...")
        this.ClearUIRoot();
        this.Init();      
    }

    /**
     * 初始化游戏
     */
    public Init() {
        //服务模块初始化
        let netSvc: NetSvc = this.node.getComponent(NetSvc);
        netSvc.InitSvc();
        let audioSvc: AudioSvc = this.node.getComponent(AudioSvc);
        audioSvc.InitSvc();
        let resSvc: ResSvc = this.node.getComponent(ResSvc);
        resSvc.InitSvc();
        let shareSvc: ShareSvc = this.node.getComponent(ShareSvc);
        shareSvc.InitMgr();

        //业务系统初始化

        //#region 会造成循环引用
        /* let mainMgr: MainMgr = this.node.getComponent(MainMgr);
         mainMgr.InitMgr();
         let shareSvc: ShareSvc = this.node.getComponent(ShareSvc);
         shareSvc.InitMgr();*/
        //#endregion

        //通过字符串而非类本身来获取 MainMgr 组件
        // "MainMgr" 是 类 MainMgr  的 cc 名称，因为有：
        // ```ts
        // @ccclass("MainMgr") export class MainMgr
        // ```
        let mainMgr: MainMgr = this.node.getComponent('MainMgr') as MainMgr;
        mainMgr.InitMgr();

        let loadSys:LoadSys=this.node.getComponent('LoadSys') as LoadSys;
        loadSys.InitSys();
    
        //进入场景并加载相应UI (Cocos3D不支持多场景同屏，所以要改成常驻节点)
        //但是我们可以加载预制体啊！
        //TODO

        loadSys.EnterLogin();
        console.log("Game Init...");
    }

    /**
     * 清理UIRoot
     */
    private ClearUIRoot() {
        //canvas:Node=
        /*let canvasPos:Node[]=this.node.getChildByName("UIRoot");
        for(let i=0;i<canvasPos.c;i++){
            canvasPos.getChildByUuid(i).active=false;
       }*/
        console.log("隐藏整个节点...");
    }

    /**
     * 添加提示信息
     */
    public AddTips(tips: string) {
        //this.tipPanel.AddTips(tips);
        GameRoot.instance.tipPanel.AddTips(tips);
    }


    //#region  设置数据
   
    /**
     * 设置玩家数据
     */
    public SetPlayerData(data: PlayerData) {
        //this.playerData=data.playerData;//这个有错。
        console.log("设置玩家数据...");
    }

    /**
     * 设置钻石数据
     */
    public SetDiamond(data: PlayerData) {     
        console.log("设置钻石数据成功...");
    }

    /**
     * 设置单人排行榜数据
     */
    public SetTiwnRankListData(data: PlayerData) {  //这个函数好像不需要
        //this.playerData.tiwnRankItemData = data.tiwnRankItemData;
        console.log("设置单人排行榜数据")
    }

    /**
     * 设置接力排行榜数据
     */
    public SetRelayRankListData(data: PlayerData) {  //这个函数好像不需要
        // this.playerData.tiwnRankItemData = data.relayRankItemData;//可能有问题
        console.log("设置接力排行榜数据")
    }

    //#endregion



}
