import { _decorator, Component, Node, Vec3, tweenUtil, UITransformComponent, Quat } from "cc";
import { Common } from "../../helps/Common";
import { PanelRoot } from "../Root/PanelRoot";
import { ShareSvc } from "../Service/ShareSvc";
import { MainMgr } from "../System/MainMgr";
import { AudioSvc } from "../Service/AudioSvc";
const { ccclass, property } = _decorator;

@ccclass("HappyGuyPanel")
@_decorator.menu("View/HappyGuyPanel")
export class HappyGuyPanel extends PanelRoot {
    public targetId: number = 0;

    @property({ type: UITransformComponent })
    public imgRoatObj: UITransformComponent = null;

    public eul: Vec3 = new Vec3(0, 0, 0);
    public qua: Quat = new Quat();

    /**
     * 是否能抽奖
     */
    public isCanLottery: boolean = true;

    InitPanel() {
        //其实UI金币的数据不能是图片作死的，应该是通过网络数据进行改变的
        //所以，在每次打开窗体时都应该请求一次网络数据，然后刷新UI
        //至于是指令同步是还是事件同步
        //看策划
        //So 需要个UpdateUI()，这个方法，因为目前的各个面板也不是都要请求数据，所以应该声明为抽象方法，但是好像抽象方法必须是抽象类；
        super.InitPanel();
        console.log("HappyGuyPanel init...");
    }


    update() {
        this.imgRoatObj.node.eulerAngles = this.eul;
        //  console.log("我一直在被调用...？？？");
    }

    /**
     * 获得奖励（其实我们应该把预先随机好的奖励物品ID放在服务端进行计算）
     */
    public GetAward() {

        //初始化图片的欧拉角
        this.imgRoatObj.node.eulerAngles = new Vec3(0, 0, 30);

        //随机一个ID，每个ID对应一个角度，也对应一个产品
        //eg：1->60° 2->120° 
        let id = Common.RandomAll(1, 6);
        console.log("旋转的ID是多少：" + id);
        //获得要旋转的角度
        let euler = -(id * 60) + 30;

        //#region  方法一：欧拉角
        //let rota: Vec3 = new Vec3(0, 0, euler);
        //旋转固定的角度
        //tweenUtil(this.imgRoatPos.node.rotation.getEulerAngles).to(300, rota);
        Vec3.copy(this.eul, this.node.eulerAngles);

        tweenUtil(this.eul)
            .to(6, new Vec3(0, 0, euler + 60))
            .to(6, new Vec3(0, 0, euler))
            .union()
            .repeat(1)
            .start();
        //#endregion 

        //#region  方法二  四元数

        // Quat.copy(this.qua, this.node.rotation);

        // const quat1 = new Quat();
        // Quat.fromEuler(quat1, 90, 90, 90);
        // const quat2 = new Quat();
        //  Quat.fromEuler(quat2, 0, 0, 0);
        // tweenUtil(this.qua)
        //     .to(6, quat1, { easing: 'Bounce-InOut' })
        //     .to(6, quat2, { easing: 'Elastic-Out' })
        //     .union()
        //     .repeat(Infinity)
        //     .start();

        //#endregion

        //更新数据到数据库
        //TODO
        console.log("更新抽奖数据到数据库...");


        console.log("抽奖中....");
    }

    /**
     * 关闭按钮
     */
    public ClickCloseBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //super.ClickCloseBtn();
        this.SetPanelState(false);
        //this.node.active=false;
        console.log("HappyGuyPanel 关闭");
    }

    /**
     * 看视频抽奖
     */
    public ClickWatchVideoLotteryBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //打开看视频渠道(这个方法经常用，应该封装在ShareSvc.ts中)
        // this.shareSvc.WatchVideoForAward();  //这个为什么不能这样调用？？？
        ShareSvc.Instance().WatchVideoForAward();
        //看完开始抽奖
        this.GetAward();//这个应该监听子域发消息
    }


    /**
     * 免费抽一次（每天有n（n>0,n属于N）次）
     */
    public ClickFreeLotteyBtn() {
        //播放音响
        AudioSvc.Instance().PlayUIAudio();
        //请求网络数据，判断能否进行免费抽奖
        this.RspHappyGuyData();
        console.log("请看视频抽奖!");
    }

    /**
     * 请求网络数据
     */
    public ReqHappyGuyData() {
        console.log("请求抽奖网络数据..");
    }

    /**
     * 回应网络数据
     */
    public RspHappyGuyData() { //需传入数据参数 TODO
        //如果不能，Tips一个消息：请看视频抽奖
        if (this.isCanLottery == false) {
            MainMgr.Instance().tipsPanel.AddTips("当天免费次数已经用完,请看视频抽奖！");
        }
        //如果可以，就抽奖
        if (this.isCanLottery == true) {
            this.GetAward();
        }
    }

}
