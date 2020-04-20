import { _decorator, Component, Node, UITransformComponent, LabelComponent } from "cc";
import { ShareSvc } from "../Service/ShareSvc";
import { ResSvc } from "../Service/ResSvc";
import { AudioSvc } from "../Service/AudioSvc";
import { NetSvc } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("PanelRoot")
export class PanelRoot extends Component {

    //#region  服务持有
    protected resSvc: ResSvc;
    protected audioSvc: AudioSvc;
    protected netSvc: NetSvc;
    protected shareSvc: ShareSvc;

    //#endregion


    /**
     * 设置窗体的显示隐藏状态
     */
    public SetPanelState(isActive: boolean = true) {
        if (this.node.active != isActive) {
            this.SetActive(this.node.getComponent(UITransformComponent), isActive);
        }
        if (isActive) {
            this.InitPanel();
        }
        else {
            this.ClearPanel();
        }
    }

    /**
     * 初始化窗体
     */
    protected InitPanel() {
        this.resSvc = ResSvc.Instance();
        this.audioSvc = AudioSvc.Instance();
        this.netSvc = NetSvc.Instance();
        this.shareSvc = ShareSvc.Instance();
        console.log("初始化窗体服务...");
    }

    /**
     * 清理窗体
     */
    public ClearPanel() {
        this.resSvc = null;
        this.audioSvc = null;
        this.netSvc = null;
        this.shareSvc=null;
        console.log("清理窗体服务...");
    }

    /**
     * 获取窗体状态
     */
    public GetPanelState() {
        return this.node.active;
    }


    /**
     * 点击关闭
     */
    /*public ClickCloseBtn() {  //出现问题
      
        //this.node.active = false;

        console.log("继承窗体关闭....");
    }*/


    //#region   显示隐藏函数重载

    /*protected SetActive(go:UITransformComponent,isActive:boolean);
    protected SetActive(go: LabelComponent, isActive: boolean ) ;*/

    //protected SetActive(go: any, isActive: any) {}
    protected SetActive(go: Component, isActive: boolean = true) {
        go.node.active = isActive;
    }

    /* protected SetActive(go: LabelComponent, isActive: boolean = true) {
         go.enabled=isActive;
    }*/
    //#endregion

    //#region 设置文本函数的重载

    protected SetText(txt: LabelComponent, context: string = "") {
        txt.string = context;
    }

    //#endregion



}
