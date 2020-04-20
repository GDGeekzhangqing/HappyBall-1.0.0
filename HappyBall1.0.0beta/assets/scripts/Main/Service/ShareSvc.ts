import { _decorator, Component, Node, System, LabelComponent, Enum } from "cc";
const { ccclass, property } = _decorator;


export enum ShareLinkType {
    None,
    ShareFriend,
    ShareFlock,
    Both
}
Enum(ShareLinkType);

@ccclass("ShareSvc")
export class ShareSvc extends Component {

    //#region  单例

    //private static instance: ShareSvc = new ShareSvc();
    private static instance: ShareSvc = null;

    //限制产生多个对象
    /* private constructor() {
         super();
     }*/

    /**
     * 获得实例对象 
     */
    public static Instance(): ShareSvc {
        return this.instance;
    }
    //#endregion

    public isShared: boolean = false;
    //public shareTag: string = "";
    public shareLinkType: ShareLinkType = ShareLinkType.None;
    public closeTime: number;

    private isRecycleFinish: boolean = false;

    public InitMgr() {
        ShareSvc.instance = this;
        //Instance = this;

   
        console.log("Init ShareSvc...");
    }

  


    //#region  即将超越

    /**
     * 即将超越
     */
    public SurpassTips(score, messageType) {
        if (CC_WECHATGAME) {
            //发消息给子域
            window['wx'].postMessage({
                messageType: messageType,
                score: score
            });
        }
    }

    //#endregion

    //#region  跳转小游戏

    /**
     * 跳转小游戏
     */
    public ToOtherMiniGame(event) {
        let curNode = event.target;
        //获取要跳转的游戏的id
        let curId = this.node.getChildByName("id").getComponent(LabelComponent).string;
        window['wx'].navigateToMiniProgram({
            appId: curId,
            success(res) {
                //打开成功
                console.log("跳转小游戏成功");
            },
            fail(res) {
                console.log("跳转小游戏失败");
            }
        })
    }

    //#endregion

    //#region  看视频相关

    /**
     * 看视频
     */
    public WatchVideoMethod() {
        let videoAd = window['wx'].createRewardedVideoAd({
            adUnitId: 'adunit-4f783310ef0d7883'
        })
        videoAd.load()
            .then(() => videoAd.show())
            .catch(err => console.log(err.errMsg))
        videoAd.onError(err => {
            console.log(err)
        })
        //关闭视频的回调函数
        videoAd.onClose(res => {
            if (!videoAd) return
            videoAd.offClose()
            //this.main.seepop.active = false
            if (res && res.isEnded || res === undefined) {
                
                
                console.log("双倍奖励");
            } else {
                window['wx'].showToast({
                    title: '您的视频还没看完',
                    icon: 'none',
                    duration: 2000
                })
                // 播放中途退出，不下发游戏奖励
                // 您的视频还没看完，无法获得奖励
            }
        })
    }


    /**
     * 看视频换奖励
     */
    public WatchVideoForAward() {
        this.WatchVideoMethod();
        console.log("看视频抽奖成功...")
    }

    /**
     * 看视频抽皮肤
     */
    public WatchVideoForSkin() {
        this.WatchVideoMethod();
        console.log("看视频抽皮肤成功...")
    }

    //#endregion

    //#region  分享链接相关

    /**
     * 是否分享成功
     */
    public IsShareOK() {
        let self = this;
        if (typeof (window['wx'] != "underfined")) {
            window['wx'].onShow(function (res) {

                if ((self.isShared && self.shareLinkType == ShareLinkType.ShareFriend) || (self.isShared && self.shareLinkType == ShareLinkType.Both)) {
                    //分享后返回
                    let curTime = new Date().getTime();
                    if (curTime - self.closeTime >= 3000) {//微信把分享成功的回调关闭了吗？
                        //分享成功
                        console.log("分享成功");
                        self.isShared = false;
                        self.shareLinkType = ShareLinkType.None;
                        self.closeTime = curTime;
                        //业务逻辑
                        //TODO
                    }
                    else {
                        window['wx'].showToast({
                            title: "请分享给不同的好友",
                            icon: 'none'
                        })
                    }
                }

                if ((self.isShared && self.shareLinkType == ShareLinkType.ShareFlock) || (self.isShared && self.shareLinkType == ShareLinkType.Both)) {
                    //分享后返回
                    let curTime = new Date().getTime();
                    if (curTime - self.closeTime >= 3000) {//微信把分享成功的回调关闭了吗？
                        //分享成功
                        console.log("分享成功");
                        self.isShared = false;
                        self.shareLinkType = ShareLinkType.ShareFlock;
                        self.closeTime = curTime;
                        //业务逻辑
                        //TODO
                    }
                    else {
                        window['wx'].showToast({
                            title: "请分享给不同的群",
                            icon: 'none'
                        })
                    }
                }
            })
        }
    }

    /**
     *分享链接
     */
    public ShareLink(shareType: ShareLinkType) {

        window['wx'].showToast({
            title: "分享链接啊",
            icon: "none"
        })

        this.isShared = true;
        this.shareLinkType = shareType;
        this.closeTime = new Date().getTime();
        if (CC_WECHATGAME) {
            window['wx'].shareAppMessage({
                title: "分享微信链接",
                imageUrl: ""
            })
        }
        console.log("分享链接成功...")
    }

    //#endregion

}
