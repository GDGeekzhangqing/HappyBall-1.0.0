import { _decorator, Component, Node, AudioSourceComponent, AudioClip, loader } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AudioSvc")
export class AudioSvc extends Component {


    @property({ type: AudioSourceComponent })
    public bgAudio: AudioSourceComponent = null;

    @property({ type: AudioSourceComponent })
    public uiAudio: AudioSourceComponent = null;

    //#region  单例
    //private static instance: AudioMgr = new AudioMgr();
    private static instance: AudioSvc = null;

    //限制产生多个对象
    /* private constructor() {
         super();
     }*/

    /**
     * 获得实例对象
     */
    public static Instance(): AudioSvc {
        return this.instance;
    }

    //#endregion

    /**
     * 初始化管理
     */
    public InitSvc() {
        AudioSvc.instance = this;
        //Instance = this;
        this.uiAudio = this.node.getChildByName("uiAudio").getComponent(AudioSourceComponent);
        this.bgAudio = this.node.getChildByName("bgAudio").getComponent(AudioSourceComponent);


        console.log("Init AudioSvc...");
    }

    /**
     *背景音效
     */
    public PlayBgMusic(url: string, isLoop = true) {
        //拿到音效片段
        //需要改
        /* let clip:AudioClip=ResSvc.Instance().LoadAudio(url,this.bgAudio);
         if(this.bgAudio.clip==null||this.bgAudio.clip.string!=clip.name){
             this.bgAudio.clip=clip;
             this.bgAudio.loop=isLoop;
              //播放
             this.bgAudio.play();
         }*/


        console.log("PlayBgMusic...");
    }

    /**
     * 按钮音效
     */
    public PlayUIAudio(url?: string) {
        try {
            //拿到音效片段
            /*loader.loadRes(url, (err, clip) => {
                 if(err){
                     console.log("load in PlayUIAudio:"+err);
                     return;
                 }
                 this.bgAudio.clip=clip;
            })*/
            //播放
            this.uiAudio.play();
            console.log("PlayUIAudio...");
        } catch (error) {
            console.log("当前音响组件被禁用:"+error);
        }

    }


    /**
     * 小球音效
     */
    public PlayCharAudio(url?: string) {
        try {
            //拿到音效片段
            /* loader.loadRes(url, (err, clip) => {
                 if(err){
                     console.log("load in PlayUIAudio:"+err);
                     return;
                 }
                 this.bgAudio.clip=clip;
            })*/
            //播放
            this.bgAudio.play();

            console.log("PlayCharAudio...");
        } catch (error) {
            console.log("当前音响组件被禁用:"+error);
        }

    }

}
