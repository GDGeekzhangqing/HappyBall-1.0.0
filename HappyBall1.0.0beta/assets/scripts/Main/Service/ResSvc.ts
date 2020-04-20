import { _decorator, Component, Node, SpriteFrame, loader, Prefab, instantiate, director, SphereColliderComponent, SpriteComponent, AudioClip, AudioSourceComponent, JsonAsset } from "cc";
import { GameRoot } from "../Root/GameRoot";
import { PathCfg } from "../../config/PathCfg";
import { SkinItemData, SkinType } from "../Model/SkinItemData";
import { PlayerData } from "../Model/PlayerData";
import { TiwnRankListData } from "../Model/TiwnRankListData";
import { RelayRankListData } from "../Model/RelayRankListData";
import { MoreGameData } from "../Model/MoreGameData";

const { ccclass, property } = _decorator;

@ccclass("ResSvc")
export class ResSvc extends Component {

    //#region  单例

    //private static instance: ResMgr = new ResMgr();
    private static instance: ResSvc = null;


    //限制产生多个对象
    /* private constructor() {
         super();
     }*/


    /**
     * 获得实例对象
     */
    public static Instance(): ResSvc {
        return this.instance;
    }



    //#endregion

    public InitSvc() {
        ResSvc.instance = this;
        //Instance = this;
        //加载资源函数初始化...
        this.InitMoreGameDataCfg(PathCfg.MOREGameCFG_PATH);
        this.InitSkinCfg(PathCfg.SIKNCFG_PATH);
        this.InitPlayerDataCfg(PathCfg.PALAYERDATACFG_PATH);
        //this.InitTiwnRankDataCfg(PathCfg.TIWNRANKCFG_PATH);
        //this.InitRelayRankDataCfg(PathCfg.RELAYRANKCFG_PATH);
        console.log("Init ResMgr...");
    }

    /**
     *异步加载场景
     */
    public AsynceLoadScene(sceneName: string,loaded:Function) {
        //设置LoadPanel的显示
        GameRoot.Instance().loadPanel.SetPanelState();

        loaded();
        //设置场景加载进度值

        /* loader.onProgress = function (cp, tt) {
            console.log("cp/tt:" + cp / tt);//能打印出来加载的进度变化
            let val: number = cp / tt;
            GameRoot.Instance().loadPanel.SetProgress(val);

        }.bind(this);

        this.scheduleOnce(function () {
           //director.loadScene("Game", null, null);
        }, 2);
        //director.loadScene("Game", null, null);*/

        cc.log("加载场景中...");
    }


    //#region  更多游戏数据配置

    /**
     * 更多游戏数据数组
     */
    public moreGameDataLst: Array<MoreGameData> = [];

    /**
     * 初始化更多游戏数据
     */
    public InitMoreGameDataCfg(url: string) {
        //持有全局变量
        var self = this;
        /*{
            "id": 2,
            "imgIconUrl": "b.spriteFrame",
            "txtDes": "这是第二章图片"
        },*/
        //加载资源
        loader.loadRes(url, function (err: string, obj: { json: any; }) {
            //console.log("延时调用 1");
            if (err) {
                console.log("error while read" + "," + err);
                return;
            }
            //解析数据
            let allMoreGameData = obj.json;

            for (let i = 0; i < allMoreGameData.length; i++) {
                let currId = allMoreGameData[i].id;
                //console.log("当前的id:" + currId);
                let currImgIconUrl = allMoreGameData[i].imgIconUrl;
                //console.log("当前的imgIconUrl:" + currImgIconUrl);
                let currTxtDes = allMoreGameData[i].txtDes;
                //console.log("当前的txtDes：" + currTxtDes);
                self.moreGameDataLst[i] = new MoreGameData(currId, currImgIconUrl, currTxtDes);
                //console.log("打印更多游戏数据：" + self.moreGameDataLst[i].id + "  " + self.moreGameDataLst[i].imgIconUrl + "  " + self.moreGameDataLst[i].txtDes);
            }
        });
    }

    //#endregion

    //#region  皮肤数据配置

    /**
     * 皮肤数据数组
     */
    public skinDataLst: Array<SkinItemData> = [];

    /**
     * 解析皮肤数据
     */
    private InitSkinCfg(url: string) {
        var self = this;

        //加载资源
        loader.loadRes(url, function (err: string, obj: { json: any; }) {
            if (err) {
                console.log("error while read" + "," + err);
                return;
            }

            //解析数据
            let skinData = obj.json;

            for (let i = 0; i < skinData.length; i++) {
                //当前Id
                let currId = skinData[i].id;
                //console.log("当前的Id:" + currId);
                let currSkinTypeId = skinData[i].skinType;
                //console.log("当前皮肤类型Id:" + currSkinTypeId);
                //转换SkinType 
                let currSkinType: SkinType;
                //如果是挑战皮肤
                if (currSkinTypeId == 0) {
                    currSkinType = SkinType.ChallengeSkin;
                }
                //如果是金币皮肤
                else if (currSkinTypeId == 1) {
                    currSkinType = SkinType.GoldSkin;
                }
                //如果是印记-->对应"泥泞图片”
                else if (currSkinTypeId == 2) {
                    currSkinType = SkinType.StampSkin;
                }
                //如果是拖尾-->对应“特效”(ps.特效或许有两个)
                else {
                    currSkinType = SkinType.TrailingSkin;
                }
                //console.log("转换SkinType:" + currSkinType);
                //预制体路径
                let currPrefabUrl = skinData[i].prefabUrl;
                //console.log("预制体路径：" + currPrefabUrl);
                //图片路径
                let currImgUrl = skinData[i].imgUrl;
                //console.log("图片路径：" + currImgUrl);
                //构造SkinItemData类数组
                self.skinDataLst[i] = new SkinItemData(currId, currSkinType, currPrefabUrl, currImgUrl);
                //console.log("构造skinItemData类数组：" + self.skinDataLst[i].id + "  " + self.skinDataLst[i].skinType + "  " + self.skinDataLst[i].prefabUrl + "  " + self.skinDataLst[i].imgUrl + "当前是第{0}个数据：", i + 1);
            }
        });
        console.log("初始化皮肤数据成功...");
    }

    //#endregion

    //#region  解析PlayerData数据

    /**
     * 当前的玩家数据
     */
    public currPlayerData: PlayerData;

    /**
     * 初始化玩家数据
     */
    public InitPlayerDataCfg(url: string) {
        var self = this;

        //加载资源
        loader.loadRes(url, function (err: string, obj: { json: any; }) {
            if (err) {
                console.log("error while read" + "," + err);
                return;
            }

            //解析数据
            let playerData = obj.json;
            //console.log("当前玩家数据:" + playerData);
            for (let i = 0; i < playerData.length; i++) {
                //玩家姓名
                let currName = playerData[i].name;
                //console.log("玩家姓名：" + currName);
                //金币数量
                let currCoinVal = playerData[i].CoinVal;
                //console.log("金币数量：" + currCoinVal);
                //上盘得分
                let currLastScore = playerData[i].lastScore;
                //console.log("上盘得分：" + currLastScore);
                //这盘得分
                let currScore = playerData[i].currentScore;
                //console.log("这盘得分：" + currScore);
                //历史最高分
                let currHightestScore = playerData[i].HightestScore;
                //console.log("历史最高分：" + currHightestScore);
                //钻石数量
                let currDiamondVal = playerData[i].DiamondVal;
                //console.log("钻石数量：" + currDiamondVal);
                //构造PlayerData类
                self.currPlayerData = new PlayerData(currName, currCoinVal, currLastScore, currScore, currHightestScore, currDiamondVal);

                //console.log("打印玩家数据：" + self.currPlayerData.name + "  " + self.currPlayerData.lastScore + "  " + self.currPlayerData.currentScore + "  " + self.currPlayerData.HightestScore + "  " + self.currPlayerData.DiamondVal);                
            }
        });

        console.log("初始化玩家数据成功...");
    }

    //#endregion

    //#region  解析单人排行榜数据

    /**
     * 单人排行榜数据数组
     */
    public tiwnRankDataLst: Array<TiwnRankListData> = [];

    /**
     * 初始化单人排行榜数据成功
     */
    public InitTiwnRankDataCfg(url: string) {
        var self = this;

        //加载资源
        loader.loadRes(url, function (err: string, obj: { json: any; }) {
            if (err) {
                console.log("error while read" + "," + err);
                return;
            }

            //解析数据
            let tiwnRankData = obj.json;
            //console.log("当前的数据：" + tiwnRankData);

            for (let i = 0; i < tiwnRankData.length; i++) {
                let currId = tiwnRankData[i].id;
                //console.log("当前的id：" + currId);
                let currImgLogoUrl = tiwnRankData[i].imgLogo;
                //console.log("当前的imgLogoUrl:" + currImgLogoUrl);
                let currImgIconUrl = tiwnRankData[i].imgIcon;
                //console.log("当前的imgIconUrl:" + currImgIconUrl);
                let currTxtName = tiwnRankData[i].txtName;
                //console.log("当前的txtName:" + currTxtName);
                let currTxtScore = tiwnRankData[i].txtScore;
                //console.log("当前的txtScore：" + currTxtScore);
                self.tiwnRankDataLst[i] = new TiwnRankListData(currId, currImgLogoUrl, currImgIconUrl, currTxtName, currTxtScore);

                console.log("打印单人排行榜：" + self.tiwnRankDataLst[i].id + "  " + self.tiwnRankDataLst[i].imgLogoUrl + "  " + self.tiwnRankDataLst[i].imgIconUrl + "  " + self.tiwnRankDataLst[i].txtName + "  " + self.tiwnRankDataLst[i].txtScore);
            }

        });
        console.log("初始化单人排行榜数据成功...");
    }

    //#endregion

    //#region  解析接力排行榜数据

    /**
     * 接力排行榜数据数组
     */
    public relayRankDataLst: Array<RelayRankListData> = [];

    /**
     * 初始化接力排行榜数据成功
     */
    public InitRelayRankDataCfg(url: string) {
        var self = this;

        //加载资源
        loader.loadRes(url, function (err: string, obj: { json: any; }) {
            if (err) {
                console.log("error while read" + "," + err);
                return;
            }
            
            //解析数据
            let relayRankData = obj.json;
            //console.log("当前数据：" + relayRankData);

            for (let i = 0; i < relayRankData.length; i++) {
                let currId = relayRankData[i].id;
                //console.log("当前的id：" + currId);
                let currImgLogoUrl = relayRankData[i].imgLogo;
                //console.log("当前的imgLogoUrl:" + currImgLogoUrl);
                let currImgIconUrl = relayRankData[i].imgIcon;
                //console.log("当前的imgIconUrl:" + currImgIconUrl);
                let currTxtName = relayRankData[i].txtName;
                //console.log("当前的txtName:" + currTxtName);
                let currTxtScore = relayRankData[i].txtScore;
                //console.log("当前的txtScore：" + currTxtScore);
                self.relayRankDataLst[i] = new RelayRankListData(currId, currImgLogoUrl, currImgIconUrl, currTxtName, currTxtScore);

                //console.log("打印接力排行榜：" + self.relayRankDataLst[i].id + "  " + self.relayRankDataLst[i].imgLogoUrl + "  " + self.relayRankDataLst[i].imgIconUrl + "  " + self.relayRankDataLst[i].txtName + "  " + self.relayRankDataLst[i].txtScore);
            }
        });
        console.log("初始化接力排行榜数据成功...");
    }

    //#endregion
}
