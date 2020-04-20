import { _decorator, Component, Node, LabelComponent, ProgressBarComponent, UITransformComponent, loader, instantiate, SpriteFrame, EventMouse, Enum, SpriteAtlas } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { SkinItemData, SkinType } from "../Model/SkinItemData";
import { SkinItem } from "../Model/SkinItem";
import { AudioSvc } from "../Service/AudioSvc";
import { PathCfg } from "../../config/PathCfg";
const { ccclass, property } = _decorator;


@ccclass("SkinPanel")
@_decorator.menu("View/SkinPanel")
export class SkinPanel extends PanelRoot {

    @property({ type: LabelComponent })
    public txtGoldVal: LabelComponent = null;

    @property({ type: ProgressBarComponent })
    public barProgress: ProgressBarComponent = null;

    @property({ type: LabelComponent })
    public txtBarVal: LabelComponent = null;

    @property({ type: Node })
    public challengeSkinspawnPos: Node = null;

    @property({ type: Node })
    public goldSkinspawnPos: Node = null;

    @property({ type: Node })
    public stampSkinspawnPos: Node = null;

    @property({ type: Node })
    public TrallingSkinspawnPos: Node = null;

    InitPanel() {
        super.InitPanel();
        //请求网络数据
        this.ReqSkinProgressData();
        this.SpawnAllSkinItem(this.resSvc.skinDataLst);

        console.log("SkinPanel Init...");
    }

    start() {

    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        console.log("skinPanel 关闭");
    }

    /**
     *请求网络数据（在面板启用时调用）
     */
    public ReqSkinProgressData() {
        //发送对应的事件码
        //TODO

        console.log("请求网络数据");
    }

    /**
     * 收到网络数据（这个函数或许不会放在这个，将会放在MainMgr.ts中）
     * 会有类型参数
     */
    public RspGoldData() {
        //MianMgr.ts将会有解析这个数据包代码
        //TODO

        //然后它会调用这个脚本中的SetSkinProgressVal函数
        //并传入对应的值
        // this.SetProgressVal();
    }

    /**
     * 设置金币数目
     */
    public SetSkinGoldVal(goldVal: number, progressVal: number) {
        //请求网络数据(这个方法不在这里写)

        //设置金币的值
        this.txtGoldVal.string = goldVal.toString();
        //设置进度值
        this.SetProgressVal(progressVal);
    }

    /**
     * 设置进度
     */
    public SetProgressVal(val: number) {
        //转化数据
        let targetVal: number = val / 10;
        //给进度条赋值
        this.barProgress.progress = targetVal;
        //给文字赋值
        this.txtBarVal.string = val.toString() + "/8";
    }

    //#region   分页按钮函数（这些都是重复的函数，后面要重构）

    /**
     * 从一开始生成所有的SkinItem
     * 数据应该是从网络获取，而非本地配置？
     */
    public SpawnAllSkinItem(data: SkinItemData[]) {
        //如果是挑战，则生成在挑战容器中；如果是金币，则生成在金币容器中；如果是印记，则生成在对应的容器中；如果是拖尾，则生成在拖尾容器中
        //同时绑定对应事件。
        data.forEach(element => {
            //获取实例化出来的对象的组件
            let skinItemNode: Node;
            //实例化，设置父节点
            // this.resSvc.LoadPrefabs(element.prefabUrl,this.spawnPos,skinItemComp);
            loader.loadRes(element.prefabUrl, (err, prefab) => {
                if (err) {
                    console.log("error: while read" + "," + err);
                    return;
                }

                let curNode = instantiate(prefab);
                //设置父对象
                if (element.skinType == SkinType.ChallengeSkin) {
                    this.challengeSkinspawnPos.addChild(curNode);
                }
                else if (element.skinType == SkinType.GoldSkin) {
                    this.goldSkinspawnPos.addChild(curNode);
                }
                else if (element.skinType == SkinType.StampSkin) {
                    this.stampSkinspawnPos.addChild(curNode);
                }
                else {
                    this.TrallingSkinspawnPos.addChild(curNode);
                }

                //拿到对应的组件
                let curComp: SkinItem = curNode.getComponent(SkinItem);
                //设置Id
                curComp.id = element.id;

                //加载图集并设置
                loader.loadRes(PathCfg.Alta_08Test_PATH, SpriteAtlas, (err: any, altas) => {
                    if (err) {
                        console.log("error while downing" + "," + err);
                        return;
                    }
                    let sp: SpriteFrame = altas.getSpriteFrame(element.imgUrl);
                    curComp.imgSkin.spriteFrame = sp;
                    console.log("1111");
                })

                //绑定监听事件
                curNode.on(Node.EventType.MOUSE_DOWN, this.ClickSkinItem, curNode);
                console.log("加载皮肤预制体：" + element.id);
            })
        });
    }

    //#region  监听事件
    
    /**
     * 点击SkinItem
     */
    public ClickSkinItem(event: EventMouse) {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        //拿到当前点击的物体
        let targetComp: Node = event.target as Node;
        //获取对应的SkinItem.ts
        let comp: SkinItem = targetComp.getComponent(SkinItem);
        //判断SkinType,按照类型来处理对应的事件
        if (comp.skinType == SkinType.ChallengeSkin) {//如果是挑战皮肤，则装备它？？？
            //替换挑战皮肤？？？
            //这个管理GameSys-->Ball
            //TODO
            console.log("当前点击的类型：挑战；当前的ID： " + comp.id);
        }
        else if (comp.skinType == SkinType.GoldSkin) {//如果是金币皮肤，则装备它？？？
            //替换金币皮肤？？？
            //这个管理GameSys-->Ball
            //TODO
            console.log("当前点击的类型：金币；当前的ID： " + comp.id);
        }
        else if (comp.skinType == SkinType.StampSkin) {//如果是印记，则替换Ball.ts印记.所以这个json文件少了印记预制体的路径
            //把印记预制体路径传递给GameSys.ts
            //在那把预制体给Ball.ts印记
            //TODO
            console.log("当前点击的类型：印记；当前的ID： " + comp.id);
        }
        else {//如果是拖尾，则替换Ball.ts拖尾特效。拖尾特效可能有两个，所以缺少拖尾特效预制体的路径
            //把特效预制体路径传递给GameSys.ts
            //在那把预制体给Ball.ts印记
            //TODO

            console.log("当前点击的类型：拖尾；当前的ID： " + comp.id);
        }
    }

    //#endregion

    //#region  按钮点击事件

    /**
     * 显示挑战皮肤
     */
    public ClickChallengeSkinBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.challengeSkinspawnPos.active = true;
        this.goldSkinspawnPos.active = false;
        this.stampSkinspawnPos.active = false;
        this.TrallingSkinspawnPos.active = false;
        console.log("点击挑战按钮...");
    }

    /**
     * 显示金币皮肤
     */
    public ClcikGoldSkinBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.challengeSkinspawnPos.active = false;
        this.goldSkinspawnPos.active = true;
        this.stampSkinspawnPos.active = false;
        this.TrallingSkinspawnPos.active = false;
        console.log("点击金币按钮...");
    }

    /**
     * 显示印记
     */
    public ClickStampSkinBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.challengeSkinspawnPos.active = false;
        this.goldSkinspawnPos.active = false;
        this.stampSkinspawnPos.active = true
        this.TrallingSkinspawnPos.active = false;

        console.log("点击印记按钮...");
    }

    /**
     * 显示拖尾
     */
    public ClickTrailingSkinBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();

        this.challengeSkinspawnPos.active = false;
        this.goldSkinspawnPos.active = false;
        this.stampSkinspawnPos.active = false;
        this.TrallingSkinspawnPos.active = true;

        console.log("点击拖尾按钮...");
    }

    //#endregion

}
