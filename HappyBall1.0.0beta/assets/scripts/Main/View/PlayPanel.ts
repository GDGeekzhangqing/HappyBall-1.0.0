import { _decorator, Component, Node, LabelComponent, SpriteComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { AudioSvc } from "../Service/AudioSvc";
import { LoadSys } from "../System/LoadSys";
import { PlayerData } from "../Model/PlayerData";
const { ccclass, property } = _decorator;

@ccclass("PlayPanel")
@_decorator.menu("View/PlayPanel")
export class PlayPanel extends PanelRoot {

    @property({ type: LabelComponent })
    public txtScore: LabelComponent = null;

    @property({ type: SpriteComponent })
    public imgTips: SpriteComponent = null;

    /**
     * 上盘成绩
     */
    public lastScore: number = 0;

    InitPanel() {
        super.InitPanel();

        //一开始就展示Tips
        this.imgTips.enabled = true;

        console.log("PlayPanel Init...");

        //隔一段时间隐藏Tips
        this.HideTips();
    }

    update() {
        //如果超过历史最高分
        if (this.lastScore > LoadSys.Instance().hightScoreVal) {
            this.Surpass();
        }
    }


    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        console.log("PlayPanel 关闭");
    }


    /**
     * 即将超过
     */
    public Surpass() {

        //发消息给子域
        if (CC_WECHATGAME) {
            window['wx'].postMessage({
                messageType: 3,
            });
            //console.log("发消息给子域");
        }
        this.scheduleOnce(function () {
            //发消息给子域
            if (CC_WECHATGAME) {
                window['wx'].postMessage({
                    messageType: 5,
                });
                //console.log("发消息给子域");
            }
        })

    }

    /**
     * 设置分数
     */
    public SetScoreUI(val: number) {
        this.txtScore.string = val.toString();
        //更新上盘成绩
        this.lastScore = val;
        //更新数据到数据库
       
        console.log("更新上盘的成绩：" + val);
    }

    /**
     * 隐藏游戏操作说明
     */
    public HideTips() {
        this.scheduleOnce(() => {
            this.imgTips.node.active = false;
            console.log("隐藏游戏操作提示...");
        }, 1)
    }

}
