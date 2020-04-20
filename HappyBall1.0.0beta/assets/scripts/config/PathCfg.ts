import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

//这个脚本负责资源路径的配置
@ccclass("PathCfg")
export class PathCfg {

  //#region  场景路径

  public static readonly GAME_PATH: string = "assets\resources\scenes\Game";

  //#endregion

  //#region  预制体路径

  public static readonly TIWMRANKLISTITEM_PATH: string = "prefabs/tiwnRankListItem";//单人排行榜

  public static readonly RELAYRANKLISTITEM_PATH: string = "prefabs/relayRankListItem";//接力排行榜

  public static readonly MOREGAMEITEM_PATH: string = "prefabs/moregameItem"; //更多游戏

  //#endregion

  //#region  图片路径

  public static readonly CS_Path: string = "";

  public static readonly MOREGAMEICON_PATH: string = "";


  //#endregion

  //#region  声音路径


  //#endregion


  //#region json文件路径
  public static readonly LEVELCFG_PATH: string = "config/LevelCfg.json";
  public static readonly MOREGameCFG_PATH: string = "config/MoreGameCfg.json";
  public static readonly PALAYERDATACFG_PATH: string = "config/PlayerDataCfg.json";
  public static readonly RELAYRANKCFG_PATH: string = "config/RelayRankCfg.json";
  public static readonly SIKNCFG_PATH: string = "config/SkinCfg.json";
  public static readonly TIWNRANKCFG_PATH: string = "config/TwinRankCfg.json";
  //#endregion


  //#region  Alta路径

  public static readonly Alta_01IconBtn_PATH: string = "image/altas/01IconBtn";
  public static readonly Alta_02TitleBtn_PATH: string = "image/altas/02TitleBtn";
  public static readonly Alta_03DialogBtn_PATH: string = "image/altas/03DialogBtn";
  public static readonly Alta_04TxtDes_PATH: string = "image/altas/04TxtDes";
  public static readonly Alta_05SignBtn_PATH: string = "image/altas/05SignBtn";
  public static readonly Alta_06OthersBtn_PATH: string = "image/altas/06OthersBtn";
  public static readonly Alta_07BgBtn_PATH: string = "image/altas/07BgBtn";
  public static readonly Alta_08Test_PATH: string = "image/altas/08Test";




  //#endregion
}
