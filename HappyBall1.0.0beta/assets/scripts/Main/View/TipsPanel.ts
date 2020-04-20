import { _decorator, Component, Node, LabelComponent, AnimationComponent, SpriteComponent, SpriteFrame } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
const { ccclass, property } = _decorator;

//这个脚本用来控制活动提示信息界面
@ccclass("TipsPanel")
@_decorator.menu("View/TipsPanel")
export class TipsPanel extends PanelRoot {

    @property({ type: AnimationComponent })
    public tipsAni: AnimationComponent = null;

    @property({ type: LabelComponent })
    public txtTips: LabelComponent = null;

    @property({ type: LabelComponent })
    public txtAddScore: LabelComponent = null;

    @property({ type: SpriteComponent })
    public imgIconTips: SpriteComponent = null;

    @property({ type: LabelComponent })
    public txtDes: LabelComponent = null;

    private isTipsShow: boolean = false;

    private tipsQue: Array<string> = new Array<string>();


    protected InitPanel() {
        super.InitPanel();

        //延时隐藏tips
        

        this.SetActive(this.txtTips, false);
    }

    update() {
       /* if (this.tipsQue.length > 0 && this.isTipsShow == false) {
            let tips: string = this.tipsQue[this.tipsQue.length - 1];
            this.tipsQue.splice(this.tipsQue.length - 1);//移除
            this.SetTips(tips);
        }*/
    }

    //这个脚本不需要写关闭按钮
    //它会自己经过一段时间就关闭

    /**
     * 增加Tips
     */
    public AddTips(tips: string) {
        this.tipsQue.unshift(tips);
        console.log("添加tips...");
    }

    /**
     * 设置Tips
     * @param tips 值
     */
    private SetTips(tips: string) {
        this.SetActive(this.txtTips);
        this.SetText(this.txtTips, tips);

        this.tipsAni.play();

        //延时关闭激活状态
        this.scheduleOnce(() => {
            this.SetActive(this.txtTips, false);
            this.isTipsShow = false;
        }, this.tipsAni.clips.length);
    }

    /**
     * 设置好友图片
     */
    public SetIcon(sp: SpriteFrame) {
        //怎么从网络上拿到好友的头像
        this.imgIconTips.spriteFrame = sp;
    }

    /**
     *设置描述
     */
    public SetDes(tips: string) {
        this.txtDes.string = tips;
    }
}
