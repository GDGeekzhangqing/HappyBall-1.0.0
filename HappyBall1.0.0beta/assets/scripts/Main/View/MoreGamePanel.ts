import { _decorator, Component, Node, Loader, loader, url, Prefab, instantiate, ButtonComponent, EventType, EventMouse, UITransformComponent, SpriteFrame, SpriteAtlas } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { MoreGameData } from "../Model/MoreGameData";
import { PathCfg } from "../../config/PathCfg";
import { MoreGameItem } from "../Model/MoreGameItem";
import { MainMgr } from "../System/MainMgr";
import { AudioSvc } from "../Service/AudioSvc";
import { ShareSvc } from "../Service/ShareSvc";
const { ccclass, property } = _decorator;

//更多游戏
@ccclass("MoreGamePanel")
@_decorator.menu("View/MoreGamePanel")
export class MoreGamePanel extends PanelRoot {

    @property({ type: Node })
    public spawnPos: Node = null;

    /**
     * 当前的实例化的预制体数组，用于关闭窗体后销毁
     */
    // private curDestoryMoreGameItem: Node[] = [];

    InitPanel() {
        super.InitPanel();

        this.SpawnMoreGameItem(this.resSvc.moreGameDataLst);
        console.log("MoreGamePanel  init...");

    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        //清理数据
        this.CleanAllMoreGameItem();
        console.log("MoreGamePanel 关闭");
    }

    /**
     * 实例化MoreGameItem
     */
    public SpawnMoreGameItem(data: MoreGameData[]) {

        var self = this;

        //遍历生成预制体并赋值
        data.forEach(element => {//那个布局组件要研究一下
            //加载预制体
            // this.resSvc.LoadPrefabs(PathCfg.MOREGAMEITEM_PATH,this.spawnPos,makeObj);
            loader.loadRes(PathCfg.MOREGAMEITEM_PATH, (err, prefab) => {
                if (err) {
                    console.log("error while read" + "," + err);
                    return;
                }
                let curNode = instantiate(prefab);

                //设置父对象
                this.spawnPos.addChild(curNode);

                //添加进预制体集合
                //self.curDestoryMoreGameItem.push(curNode);

                //设置它的名字
                //curNode.name = "moreItem:" + element.id;
                //console.log("curNode.name:"+curNode.name);
                //获得组件
                /**
                 * MoreGameItem组件
                 */
                let moreGameComp: MoreGameItem = curNode.getComponent(MoreGameItem);
                console.log("获得组件：" + moreGameComp);
                //设置Id
                moreGameComp.Id = element.id;
                console.log("设置id：" + moreGameComp.Id);
                //加载图片并设置
                //this.resSvc.LoadImage(element.imgIconUrl, moreGameComp.imgIcon);
                /*loader.loadRes(element.imgIconUrl, (err: any, sp: SpriteFrame) => {
                    if (err) {
                        console.log("error while downing" + "," + err);
                        return;
                    }
                    moreGameComp.imgIcon.spriteFrame = sp;
                });*/

                //加载图集并设置
                loader.loadRes(PathCfg.Alta_08Test_PATH, SpriteAtlas, (err: any, altas) => {
                    if (err) {
                        console.log("error while downing" + "," + err);
                        return;
                    }
                    let sp: SpriteFrame = altas.getSpriteFrame(element.imgIconUrl);
                    moreGameComp.imgIcon.spriteFrame = sp;
                    console.log("1111");
                })

                //设置Des
                moreGameComp.txtDes.string = element.txtDes;
                //获取当前的Button组件
                //let buttonComp: ButtonComponent = curNode.getComponent(ButtonComponent);
                //动态添加监听
                //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem, curNode,curNode);
                //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem(curNode), this);
                curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem, curNode);
                //curNode.on(Node.EventType.MOUSE_DOWN, this.ClickMoreGameItem, this);
                /*curNode.on(Node.EventType.MOUSE_DOWN, function (err, curNode) {
                    //请求网络数据      
                    //this.ReqMoreGameItem();
                    console.log("点击了更多游戏：" + curNode.name);
                })*/
                //buttonComp.clickEvents();
            })

            console.log("实例化更多游戏预制体" + element.id);
        });

        console.log("实例化更多游戏预制体...")
    }

    /**
     * 清理加载的Item
     */
    public CleanAllMoreGameItem() {
        //拿到当前的实例化的
        this.spawnPos.removeAllChildren();
        console.log("销毁所有子节点");
    }

    /**
     * 请求更多游戏网络数据
     */
    public ReqMoreGameItem() {
        //向服务器发送请求
        //DODO
        console.log("请求更多游戏的网络数据");
    }

    /**
     * 点击MoreGameItem
     */
    public ClickMoreGameItem(event: EventMouse) {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //请求网络数据      
        //MainMgr.Instance().moregamePanel.ReqMoreGameItem();//这样写才能访问到

        //打开第三方链接
        ShareSvc.Instance().ToOtherMiniGame(event);
        console.log("点击了更多游戏：" + (event.target as Node).name);
    }

}
