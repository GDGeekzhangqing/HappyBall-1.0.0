import { _decorator, Component, Node } from "cc";
import { RelayRankListItem } from "./RelayRankListItem";
import { TiwnRankListItem } from "./TiwnRankListItem";
const { ccclass, property } = _decorator;

//网络玩家数据协议
@ccclass("PlayerData")
export class PlayerData {

    //#region  单例

    //private static instance: NetMgr = new NetMgr();
    private static instance: PlayerData = null;

    //限制产生多个对象
    /* private constructor() {
         super();
     }*/

    /**
     * 获得实例对象 
     */
    public static Instance(): PlayerData {
        return this.instance;
    }

    public name: string = null;
    public CoinVal: number = null;
    public lastScore: number = null;
    public currentScore: number = null;
    public HightestScore: number = null;
    public DiamondVal: number = null;
    //public tiwnRankItemData:TiwnRankListItem;  //暂时不用
    //public relayRankItemData:RelayRankListItem[];
    constructor(name: string, coinVal: number, lastScore: number, currentScore: number, hightestScore: number, diamondVal: number) {
        this.name = name;
        this.CoinVal = coinVal;
        this.lastScore = lastScore;
        this.currentScore = currentScore;
        this.HightestScore = hightestScore;
        this.DiamondVal = diamondVal;
    }
}
