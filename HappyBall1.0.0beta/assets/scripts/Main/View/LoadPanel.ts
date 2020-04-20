import { _decorator, Component, Node, ProgressBarComponent, director, loader } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { NetSvc } from "../Service/NetSvc";
const { ccclass, property } = _decorator;

@ccclass("LoadPanel")
@_decorator.menu("View/LoadPanel")
export class LoadPanel extends PanelRoot {
    //这个脚本负责加载场景
    //loading界面

    @property({ type: ProgressBarComponent })
    public barProgress: ProgressBarComponent | null = null;

    private isCompProgress: boolean = false;

    //初始化
    InitPanel() {
        super.InitPanel();

        console.log("初始化loadpanel...")
    }

    update() {
        if (this.isCompProgress == true)
            return;
        for (let i = 0; i < 1000; i++) {
            this.SetProgress(i / 1000);
            this.isCompProgress = true;
        }
    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() { //这个脚本不需要这个函数
        //播放音响
        this.audioSvc.PlayUIAudio()
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        console.log("LoadPanel 关闭");
    }

    /**
     * 设置加载进度值
     */
    public SetProgress(val: number) {
        //设置bar
        this.barProgress.progress = val;
        //console.log("设置场景加载进度成功...");
    }

    /**
     * 加载场景
     */
    public LoadScence() {//弃用
        //获取Game场景的UUID
        let target = director._getSceneUuid("Game");

        loader.load({ uuid: target.uuid, type: 'uuid' }, (completedCount, totalCount, item) => {
            cc.log("已完成Items:" + completedCount);
            cc.log("全部Items:" + totalCount);
            cc.log("当前Item:" + item.url);

            let val = completedCount / totalCount;
            cc.log("加载进度:" + val);
            this.barProgress.progress = val;

        }, (error) => {
            if (error) {
                cc.errorID(1210, "Game", error.message);
            }
            else {
                cc.log("加载完成");
            }
        })

    }


    public loadSS() {//要改，改为加载预制体资源，或者不加载。好吧不加载。
        let bar = this.barProgress;
        loader.onProgress = function (cp, tt) {
            console.log("cp/tt:" + cp / tt);//能打印出来加载的进度变化
            bar.progress = cp / tt;

        }.bind(this);

        this.scheduleOnce(function () {
            director.loadScene("Game", null, null);
        }, 2);
        //director.loadScene("Game", null, null);.

        cc.log("加载中...");
    }
}
