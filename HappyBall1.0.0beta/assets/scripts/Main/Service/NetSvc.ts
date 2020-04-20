import { _decorator, Component, Node, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_NORTH_INDEX } from "cc";
const { ccclass, property } = _decorator;

export class UserGameMsg {
    public coinVal: number = 0;

    public diamondVal: number = 0;

    public hightscoreVal: number = 0;

    public isCanMode: boolean = false;

    public progressVal: number = 0;

    public isCanSign: boolean = true;

    constructor(coin: number, diamond: number, hightscore: number, canMode: boolean, progress: number, canSign: boolean) {
        this.coinVal = coin;
        this.diamondVal = diamond;
        this.hightscoreVal = hightscore;
        this.isCanMode = canMode;
        this.progressVal = progress;
        this.isCanSign = canSign;
    }
}

export class SignAwardConfig {
    public mondayCfg: number = 0;
    public tuesdayCfg: number = 0;
    public wednessdayCfg: number = 0;
    public thursdayCfg: number = 0;
    public fridayCfg: number = 0;
    public saturdayCfg: number = 0;
    public sundayCfg: number = 0;

    constructor(monday: number, tuesday: number, wednessday: number, thursday: number, friday: number, saturday: number, sunday: number) {
        this.mondayCfg = monday;
        this.tuesdayCfg = tuesday;
        this.wednessdayCfg = wednessday;
        this.thursdayCfg = thursday;
        this.fridayCfg = friday;
        this.saturdayCfg = saturday;
        this.sundayCfg = sunday;
    }
}

@ccclass("NetSvc")
export class NetSvc extends Component {
    //#region  单例

    //private static instance: NetMgr = new NetMgr();
    private static instance: NetSvc = null;

    //限制产生多个对象
    /* private constructor() {
         super();
     }*/

    /**
     * 获得实例对象 
     */
    public static Instance(): NetSvc {
        return this.instance;
    }

    //#endregion

    public static readonly obj: string = "lock";//线程锁

    // private msgQue: Array<SkinItem> = new Array<SkinItem>();//Js 没有队列？

    /**
     * 该游戏微信云服务数据库名称
     */
    private readonly targetDataBaseUrl: string = 'HappyBallData';
    private readonly targetSignAwardUrl: string = 'SignAwardConfig';

    /**
     * 数据库引用
     */
    private db;

    /**
     * 云服务CMD指令
     */
    private cmd;

    /**
     * 用户Id
     */
    private userOpenID: string = '';

    private userDataID: string = '';

    /**
     * 用户云端数据
     */
    private userGameMsg: UserGameMsg = null;

    private signAwardCfg: SignAwardConfig = null;

    /**
     * 外部访问UserGameMsg
     */
    public GetUserGameMsg(): UserGameMsg {
        return this.userGameMsg;
    }

    /**
     *外部返回signAwardCfg
     */
    public GetSignAwardCfg(): SignAwardConfig {
        return this.signAwardCfg;
    }

    public InitSvc() {
        NetSvc.instance = this;
        //初始化云服务
        window['wx'].cloud.init();
        //获取数据库引用
        this.db = window['wx'].cloud.database();
        //初始化CMD云端指令
        this.cmd = this.db.command;
        //拿到用户的openId
        this.GetWechatOpenId();

        //初始化广告列表接口
        //this.AdvertisingList();
        //this.BannerAd(phone);

        console.log("Init NetMgr...");
    }

    /**
     * 获取当前用户的OpenId
     */
    public GetWechatOpenId() {
        let self = this;
        window['wx'].cloud.callFunction({
            name: 'GetWechatOpenId',
            complete: res => {
                console.log('云函数获取到的openid：' + res.result._openid)
                var openid = res.result.openid;
                self.userOpenID = openid;
                console.log("赋值给了userOpenID：" + self.userOpenID);
                //查询签到配置数据
                this.QuerySignAwardConfigData();

                //如果userOpenID赋值成功
                if (self.userOpenID != "") {
                    //查询/获取微信云服务数据库数据
                    this.QueryWechatCloudData();
                }
                //如果没有，则反复查询
                else {
                    self.GetWechatOpenId();
                }
            }
        })
    }

    /**
     * 查询/获取微信云服务数据库数据
     */
    public QueryWechatCloudData() {
        let self = this;
        self.db.collection(self.targetDataBaseUrl).where({ _openid: "'" + self.userOpenID + "'" }).get({
            complete: res => {
                //如果存在当前用户
                if (res.data.length > 0) {
                    console.log("查询到当前用户：" + res.data);
                    //赋值UserDataId
                    //持有云端数据
                    self.userGameMsg = new UserGameMsg(res.data[0].CoinVal, res.data[0].DiamondVal, res.data[0].HightscoreVal, res.data[0].isCanMode, res.data[0].progressVal, res.data[0].isCanSign);
                    console.log("持有云端用户数据：" + self.userGameMsg);
                }
                //如果不存在当前用户
                else {
                    console.log("当前用户数据为空：" + res.data);
                    self.InsertWechatCloudData();
                }
                console.log("查询云端用户数据完成...");
            }
        })
        console.log("查询云端用户数据...");
    }

    /**
     * 插入微信云服务数据库数据
     */
    public InsertWechatCloudData() {
        let self = this;
        //获取当前时间
        let data: Date = new Date();
        let sign1 = "-";
        let sign2 = ":";
        let curYear: string = data.getFullYear().toString();
        let curMonth: string = data.getMinutes().toString();
        let curDay: string = data.getDay().toString();
        let curHour: string = data.getHours().toString();
        let curMinutes: string = data.getMinutes().toString();
        let curSeonds: string = data.getSeconds().toString();

        let curTime: string = curYear + sign1 + curMonth + sign1 + curDay + " " + curHour + sign2 + curMinutes + sign2 + curSeonds;

        self.db.collection(self.targetDataBaseUrl).add({
            // data 字段表示需新增的 JSON 数据
            data: {
                //_id: self.userOpenID, // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
                Description: "欢乐球球数据库数据",
                LastUpdateTime: new Date(curTime),
                CoinVal: 199,
                DiamondVal: 188,
                HightscoreVal: 0,
                Progress: 0,
                // 为待办事项添加一个地理位置（113°E，23°N）
                location: new self.db.Geo.Point(113, 23),
                isCanMode: false,
                isCanSign: true,
            },
            complete: function (res) {
                console.log("插入微信云数据完成：" + res.data);
                //再次查询
                self.QueryWechatCloudData();
                console.log("再次查询当前用户数据是否存在...");
            }
        })
    }

    /**
     * 更新微信云服务数据库数据(减少)
     */
    public UpdataDecreaseWechatCloudData(coinVal: number, diamondVal: number, hightscoreVal: number, progress: number, isCanMode?: boolean, isCanSign?: boolean) {
        console.log("开始更新该用户微信云数据....")
        let self = this;

        self.db.collection(self.targetDataBaseUrl).doc(self.userDataID).update({
            // data 传入需要局部更新的数据
            data: {
                // 表示将将CoinVal数据更新
                CoinVal: self.cmd.inc(-coinVal),
                DiamondVal: self.cmd.inc(-diamondVal),
                HightscoreVal: self.cmd.inc(-hightscoreVal),
                isCanMode: self.cmd.inc(-isCanMode),
                progressVal: self.cmd.inc(-progress),
                isCanSign: isCanSign
            },
            success: console.log("更新成功"),
            complete: function (res) {
                console.log("更新微信云服务数据库数据完成：" + res)
            }
        })
    }

    /**
     * 更新微信云服务数据库数据(增加)
     */
    public UpdataInCreaseWechatCloudData(coinVal: number, diamondVal: number, hightscoreVal: number, progress: number, isCanMode?: boolean, isCanSign?: boolean) {
        console.log("开始更新该用户微信云数据:" + coinVal)
        let self = this;
        self.db.collection(self.targetDataBaseUrl).doc(self.userDataID).update({
            // data 传入需要局部更新的数据
            data: {
                // 表示将将CoinVal数据更新
                CoinVal: self.cmd.inc(coinVal),
                DiamondVal: self.cmd.inc(diamondVal),
                HightscoreVal: self.cmd.inc(hightscoreVal),
                isCanMode: isCanSign,
                ProgressVal: self.cmd.inc(progress),
                isCanSign: isCanSign
            },
            success: console.log("更新成功"),
            complete: function (res) {
                console.log("更新微信云服务数据库数据完成：" + res)
            }
        })
    }

    /**
     * 查询签到奖励数据配置
     */
    public QuerySignAwardConfigData() {
        console.log("查询签到配置...");
        let self = this;
        self.db.collection('signcfg').get({
            complete: res => {
                //如果存在当前用户
                // if (res.data.length > 0) {
                console.log("查询到当前配置：" + res.data);
                // }     
                console.log("查询配置完成...");
            }
        })
        console.log("查询签到配置结束");
    }

    //self.signAwardCfg = new SignAwardConfig(res.data[0].Monday, res.data[0].Tuesday, res.data[0].Wednessday, res.data[0].Thursday, res.data[0].Friday, res.data[0].Saturday, res.data[0].Sunday)
}
