import { _decorator, Component, Node, loader, ButtonComponent } from "cc";
import { SystemRoot } from "../Root/SystemRoot";
import { LoadPanel } from "../View/LoadPanel";
import { PlayerData } from "../Model/PlayerData";
import { MainPanel } from "../View/MainPanel";
import { MainMgr } from "./MainMgr";
import { PlayPanel } from "../View/PlayPanel";

const { ccclass, property } = _decorator;

//登录系统
@ccclass("LoadSys")
export class LoadSys extends SystemRoot {

    //#region  单例

    //private static instance: GameRoot = new GameRoot();
    private static instance: LoadSys = null;

    //限制产生多个对象
    /*private constructor() {
        super();
    }*/

    /**
     * 获得实例对象
     */
    public static Instance(): LoadSys {
        return this.instance;
    }

    //#endregion

    public appID = "wx232ea3d2e7178890";
    public progarmId = "f705ccfcab834e0a962bf43da332166d";
    public userId: number = null;
    public token = null;
    public code = null;
    public key = null;

    public phone = null;
    public phoneWid = null;
    public phoneHig = null;

    public HOST: string = "https://game.beetry.com/wx-game";//未设置

    public txtName: string = "";

    public avatarUrl: string = "";

    public gender: string = "";

    // public programId: number;

    public invitionCode: string = "";

    public advertisLength;

    public advertisResult;

    public hightScoreVal: number = 0;

    public diamondVal: number = 0;

    public coinVal: number = 0;

    @property({ type: LoadPanel })
    public loadPanel: LoadPanel = null;

    @property({ type: MainPanel })
    public mainPanel: MainPanel = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    /**
     * 微信登录按钮
     */
    private loginBtn;

    private isLogin: boolean;

    public hello = "hello!";

    public InitSys() {

        LoadSys.instance = this;

        window.InterstitialAd = window['wx'].createInterstitialAd({
            adUnitId: ""  //广告单元ID
        })
        console.log("Init LoginSys...");
    }


    /**
     * 进入登录场景
     */
    public EnterLogin() {
        //异步加载Game场景
        //并显示加载进度
        //this.resSvc.AsynceLoadScene(PathCfg.GAMEPATH,);//TODO
        let self = this;
        this.loadPanel.SetPanelState();
        /*this.resSvc.AsynceLoadScene("", function () {
            console.log("调用加载回调");
            //播放背景音效
            // SettingMgr.Instance().SetAudioEnable();
            //询问是否微信登录
            self.AskWechatLogin();
        })*/

        self.AskWechatLogin();

        console.log("进入登录场景");
    }

    /**
     * 询问是否微信登录
     */
    public AskWechatLogin() {
        let self = this;
        console.log("询问是否微信登录");
        let phone = window['wx'].getSystemInfoSync();


        self.loginBtn = window['wx'].createUserInfoButton({
            type: 'text',
            text: '',
            style: {
                left: phone.screenWidth * 0.25,
                top: phone.screenHeight * 0.61,
                width: phone.screenWidth * 0.51,
                height: phone.screenHeight * 0.1,
                lineHeight: 40,
                backgroundColor: '#ff0000',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
            }
        })

        self.WechatLogin();

        this.loginBtn.onTap(function (res) {
            console.log("点击啊");
            self.WechatLogin();
        })
    }

    /**
     * 回应登录
     */
    public RspLogin() {
        //关闭LoadPanel界面

        this.loadPanel.SetPanelState(false);
        MainMgr.Instance().EnterMainCity();
        console.log("回应登录");
    }

    /**
     * 微信登录
     */
    public WechatLogin() {
        let self = this;
        if (self.code == null) {
            window['wx'].login({
                success(res) {
                    if (res.code) {
                        self.code = res.code;
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        }
        self.loginBtn.hide();

        window['wx'].getSetting({
            success(res) {
                console.log("1223");
                if (!res.authSetting['scope.userInfo']) {
                    window['wx'].authorize({
                        success() {
                            self.loginBtn.hide();
                            console.log("隐藏...");
                            self.GameLogin();
                            self.RspLogin();
                        },
                        fail() {
                            self.loginBtn.show();
                            console.log("展示...");
                        }
                    })
                } else {
                    self.loginBtn.hide();
                    console.log("隐藏最后...++" + self.node.name);

                    self.GameLogin();
                    self.RspLogin();


                }
            },
        })
    }

    /**
     * 游戏登录
     */
    public GameLogin() {
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        let url = this.HOST + "/user/user_logins"
        let self = this;
        window['wx'].getUserInfo({
            success(res) {
                self.txtName = res.userInfo.nickName;
                self.avatarUrl = res.userInfo.avatarUrl;
                self.gender = res.userInfo.gender;
                let postData = {
                    "code": self.code,
                    "programId": self.progarmId,
                    "nickName": self.txtName,
                    "gender": self.gender,
                    "avatarUrl": self.avatarUrl || "http://www.sucaijishi.com/uploadfile/2016/0203/20160203022631226.jpg",
                    "invitionCode": self.invitionCode,
                }
                let data = JSON.stringify(postData);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                        let response = xhr.responseText;
                        self.ReceiveResponseToken(response);
                    }
                    else if (xhr.readyState == 12) {
                        console.log(xhr.readyState, "186");
                        self.GameLogin();
                    }
                };
                xhr.open("POST", url, true);
                xhr.send(data);
                console.log("数据：" + data);
                console.log("子域登录成功后的最高分数据：" + self.hightScoreVal);
                console.log("登录成功！！！");
            }
        })

    }

    /**
     * 从服务器收到的信息
     * @param rsp 
     */
    public ReceiveResponseToken(rsp) {
        let data = JSON.parse(rsp);
        if (this.key == null) {
            this.key = data.result.key;
        }
        if (this.token == null) {
            this.token = data.result.token;
        }
        this.GetWeChatUserInfo();
        console.log("从服务器收到的信息")
    }

    /**
     * 接受服务端数据
     * @param rsp 
     */
    public ReceiveResponseUser(rsp) {
        let data = JSON.parse(rsp);
        if (this.userId == null) {
            this.userId = data.result.userInfo.id;
        }
        this.ServerLoad(data.result);
        console.log("接受服务端数据");
    }

    /**
     * 加载服务器的数据
     * @param data 
     */
    public ServerLoad(data) {
        if (data.score != null && data.score != undefined) {
            console.log("我们后台有最高分的数据吗？：" + data.score);
            this.hightScoreVal = parseInt(data.score);
        }
        if (data.diamondVas != undefined && data.diamondVas != null) {
            this.diamondVal = parseInt(data.diamondVas);
            // this.diamondVal = 910;
            console.log("我上传了钻石数据了吗？")
        }
        if (data.coin != undefined && data.coin != null) {
            this.coinVal = 888;
            console.log("金币数据有更新吗？")
        }
        else {
            console.log("未超过...");
        }

        //开启转发按钮
        window['wx'].showShareMenu({
            withShareTicket: true
        })
        console.log("加载服务器的数据")
    }

    /**
     * 获取微信用户的信息,保存到变量中并发送给服务器
     */
    public GetWeChatUserInfo() {
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        let url = this.HOST + "/user/query_game_data"
        let self = this;
        window['wx'].getUserInfo({
            success(res) {
                let postData = {
                    "token": self.token,
                    "key": self.key,
                }
                let data = JSON.stringify(postData);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                        let response = xhr.responseText;
                        self.ReceiveResponseUser(response);
                    }
                    else if (xhr.readyState == 12) {
                        self.GetWeChatUserInfo();
                    }
                };
                xhr.open("POST", url, true);
                xhr.send(data);
                console.log("获取微信用户的信息，保存到变量中并发送给服务器 1");
            }
        })
        console.log("获取微信用户的信息，保存到变量中并发送给服务器 2");
    }

    /**
     * 广告列表接口
     */
    public AdvertisingList() {
        let url = this.HOST + "/jowim/advertising/select_advertising_wechat"
        let postData = null;
        let data = null;
        postData = {
            "token": this.token,
            "programId": this.progarmId
        }
        data = JSON.stringify(postData);
        let self = this;

        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("POST", url, true);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                let responseText = JSON.parse(xhr.responseText);
                // console.log(responseText,"2038");
                if (responseText.status == 0) {
                    self.advertisLength = responseText.result.length;   //广告数量
                    self.advertisResult = responseText.result;          //本游戏广告
                    console.log(self.advertisLength, '广告数量');
                    // self.transpondShare();  //右上角转发分享
                }
            }
        }
    }

    /**
     * 插屏广告
     */
    public BannerAd(phone) {
        let width = phone.windowWidth - 300;
        let height = phone.windowHeight;
        let bannerAd = window['wx'].createBannerAd()({
            adUnitId: '',
            style: {
                left: width / 2,
                top: 0,
                width: 300
            }
        });
        bannerAd.onResize(res => {
            bannerAd.style.top = height - bannerAd.style.realHeight;
        })
        bannerAd.onError(errCode => {
            console.log(errCode, "bbbbbbbb")
        })
        bannerAd.onLoad(() => {
            console.log('banner 广告加载成功')
        })
        // 在适合的场景显示 Banner 广告
        bannerAd.show()
            .then(() => console.log('banner 广告显示'))
            .catch(err => console.log(err))
        window.BannerAd = bannerAd
    }

    /**
     * 保存到服务器
     */
    public ServerSave() {
        console.log("超过的分数有吗？：" + this.playPanel.lastScore);
        console.log("最高分有更新吗？：" + this.hightScoreVal);
        if (this.playPanel.lastScore > this.hightScoreVal) {
            console.log("主域lastScore：" + this.playPanel.lastScore)
            // this.main.scorenum = this.main.scorenum
            this.hightScoreVal = this.playPanel.lastScore;
            console.log(this.hightScoreVal, "主域最高分");
        }
        else {
            //this.main.scorenum = this.main.highscorenum
            console.log("未超过");
        }
        console.log("这里有被执行吗？");
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        let url = this.HOST + "/jowim/gameData/update_gamedata_game"
        let postData = null;
        let data = null;
        console.log("最高分数据是不是没有改变：" + this.hightScoreVal);
        postData = {
            "token": this.token,
            "programId": this.progarmId,
            "dataSet": [
                {
                    "dataValue": this.hightScoreVal,
                    "fieldDataKey": "score" //分数
                },
                {
                    "dataValue": this.diamondVal,
                    "fieldDataKey": "diamondVas" //钻石
                },

                {
                    "dataValue": this.coinVal,
                    "fieldDataKey": "coin" //金币
                }
            ]
        };
        console.log("现在的最高分有被改变吗？" + this.hightScoreVal)

        xhr = new XMLHttpRequest();
        xhr.setRequestHeader("Content-Type", "application/json");
        data = JSON.stringify(postData);
        xhr.open("POST", url, true);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {


            }
        };
    }

    /**
     * 商品列表接口
     */
    productList() {

    }


}
