import SurpassTips from "./SurpassTips";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankPanel extends cc.Component {


    @property(cc.Prefab)
    public tiwnRankPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    public relayRankPrefab: cc.Prefab = null;

    @property(cc.SpriteFrame)
    public defaultIcon: cc.SpriteFrame = null;

    @property(cc.Node)
    public tiwnRankPos: cc.Node = null;

    @property(cc.Node)
    public relayRankPos: cc.Node = null;


    @property(cc.Node)
    public tiwnRankSpawnPos: cc.Node = null;

    @property(cc.Node)
    public relayRankSpawnPos: cc.Node = null;

    @property(cc.Node)
    public logoPos: cc.Node = null;


    @property(cc.Node)
    public surpassPos: cc.Node = null;

    @property(cc.Node)
    public relayLogo: cc.Node = null;

    @property(cc.AudioSource)
    public uiAudio: cc.AudioSource = null;

    /**
     * 是否播放按键音效
     */
    private isPlayUIAudio: boolean = true;

    /**
     * 是否振动
     */
    private isVibration: boolean = true;

    /**
     * 好友排行数据
     */
    private friends = [];

    /**
     * 群排行数据
     */
    private group = [];

    private surpassData = [];

    /**
     * 是否分享后，查看群排行
     */
    private tickets;

    @property([cc.SpriteFrame])
    public logoArr: cc.SpriteFrame[] = [];

    onLoad() {

    }

    start() {
        if (cc.sys.WECHAT_GAME) {
            window['wx'].onMessage(data => {
                //打开单人排行榜
                if (data.messageType == 1) {
                    this.OpenTiwnRank();
                }
                //打开接力排行榜
                else if (data.messageType == 2) {
                    this.OpenRelayRank();
                }
                //打开即将超越
                else if (data.messageType == 3) {
                    this.OpenSurpassRank(data.score);
                }
                //关闭所有排行榜
                else if (data.messageType == 4) {
                    this.CloseAllRank();
                }
                //关闭即将超越
                else if (data.messageType == 5) {
                    this.CloseSurpassTIps();
                }
                //设置按键音效的开关
                else if (data.messageType == 6) {
                    this.SetIsPlayUIAudio();
                }
                //设置微信振动开关
                /* if (data.messageType == 7) {
                    this.SetVibrate();
                }*/
            })
        }
    }


    /**
     * 设置微信振动
     */
    public SetVibrate() {
        if (this.isVibration == true) {
            if ('vibrate' in window.navigator) {

                console.log("设置振动（0.1秒）");
            }
            else {
                console.log("当前平台不支持振动...");
            }
        }
        else {
            this.isVibration = true;
        }

        console.log("设置微信振动...");
    }


    /**
     * 设置子域按键音效的播放
     */
    public SetIsPlayUIAudio() {
        if (this.isPlayUIAudio == true) {
            this.isPlayUIAudio = false;
        }
        else {
            this.isPlayUIAudio = true;
        }
    }

    /**
     * 播放按键音效
     */
    public PlayUIAudio() {
        if (this.isPlayUIAudio == false)
            return;
        this.uiAudio.play();
    }

    /**
     * 更新所有排行
     */
    public UpdateAllRank() {
        console.log("更新");
        //清空原有的排行信息
        this.tiwnRankSpawnPos.removeAllChildren();
        this.relayRankSpawnPos.removeAllChildren();
        //清空数据
        this.friends = [];
        //加载所有排行
        this.LoadAllRankData();
    }

    /**
     * 更新世界排行
     */
    public UpdateWorldRank() {

    }

    /**
     * 更新群排行
     */
    public UpdateGroupRank() {
        //清空原有的排行信息
        //this.groupRankSpawnPos.removeAllChildren();
        this.group = [];
        //加载群排行
        this.LoadGroupRankData();
    }

    /**
     * 加载所有排行数据
     */
    public LoadAllRankData() {
        console.log("加载所有数据");

        /*for (let i = 0; i < 3; i++) {
            let rankItem = cc.instantiate(this.tiwnRankPrefab);
        
            rankItem.getChildByName("txtName").getComponent(cc.Label).string = i.toString();
            rankItem.parent = this.tiwnRankSpawnPos;
        }*/
        
        let self = this;
        //获取好友的数据
        window['wx'].getFriendCloudStorage({
            keyList: ['lastscore'],//主域发过来的数据
            success: (res) => {
                let data = res.data;
                console.log("数据：" + data[0].toString());
                for (let i = 0; i < res.data.length; i++) {
                    let tiwnRankInfo = res.data[i];
                    if (!tiwnRankInfo) {
                        continue;
                    }
                    //创建单人排行榜信息
                    self.SpawnRank(tiwnRankInfo, self.tiwnRankPrefab,i);
                }
                self.tiwnRankSpawnPos.height = 120 * self.friends.length;
                //排行
                self.Sorts(self.friends);
            },
            fail: function (res) {
                console.log("加载好友失败");
            }
        });

        //获取好友的数据
        /* window['wx'].getFriendCloudStorage({
             keyList: ['hightscorenum'],
             success: function (res) {
                 let data = res.data;
                 for (let i = 0; i < res.data.length; i++) {
                     let relayRankInfo = res.data[i];
                     if (!relayRankInfo) {
                         continue;
                     }
                     //创建接力排行榜信息
                     self.SpawnRank(relayRankInfo, self.relayRankPrefab);
                 }
 
                 self.relayRankSpawnPos.height = 79 * self.friends.length;
                 //排行
                 self.Sorts(self.friends);
             },
             fail: function (res) {
                 console.log("加载多人排行榜失败");
             }
         })*/
    }

    /**
     * 加载群排行数据
     */
    public LoadGroupRankData() {
        let self = this;

        if (this.tickets != undefined && this.tickets != null) {
            window['wx'].getGroupCloudStorage({
                shareTicket: this.tickets,
                keyList: ['money'],
                success: res => {
                    for (let i = 0; i < res.data.length; i++) {
                        let groupInfo = res.data[i];
                        if (!groupInfo) {
                            continue;
                        }

                        self.SpawnRank(groupInfo, this.tiwnRankPrefab,i);
                    }

                    self.tiwnRankSpawnPos.height = 20 + 60 * self.group.length;
                    console.log("当前容器的高度：" + self.tiwnRankSpawnPos.height.toString())
                    self.Sorts(self.group);
                    //self.node.getChildByName("Buttons").getChildByName("btn_right").getComponent(cc.Button).interactable = true;
                },
                fail: res => {
                    console.log("加载群排行数据失败：" + res);
                }
            })
        }
        else {
            //self.node.getChildByName("Buttons").getChildByName("btn_right").getComponent(cc.Button).interactable = true;
        }
    }

    /**
     * 创建排行榜信息单元
     */
    public SpawnRank(userInfo, curPrefab: cc.Prefab, index:number, type?: string) {
        console.log("创建排行榜");
        let rankItem:cc.Node = cc.instantiate(curPrefab);
        rankItem.parent = this.tiwnRankSpawnPos;
        //rank.parent=this.relayRankSpawnPos;


        //手动设置Item的位置
        if(index!=0)
        {
            rankItem.position.y-=index*89;
        }
       
        this.friends.push(rankItem);

        let name = userInfo.nickname// ? userInfo.nickName : userInfo.nickName;
        console.log("用户数据是：" + userInfo);


        console.log("昵称：" + userInfo.nickname);
        console.log("用户数据是：" + userInfo.toString());

        let avatarUrl = userInfo.avatarUrl;

        let maxNum = 0;

        //获取游戏数据，如果获取不到则将该信息单元关闭
        if (userInfo.KVDataList != 0) {
            if (userInfo.KVDataList[0].value != null && userInfo.KVDataList[0].value != undefined) {
                maxNum = userInfo.KVDataList[0].value;
                console.log("子域 ++当前分数：" + maxNum);
            }
            else {
                rankItem.active = false;
            }
        }
        else {
            maxNum = 0;
        }

        //赋值 
        //rankItem.getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = avatarUrl    ;
        //console.log("赋值：" + rankItem.getChildByName("imgLogo").name);
        // rankItem.getComponent("imgIcon").getComponent(cc.Sprite).spriteFrame = avatarUrl;
        rankItem.getChildByName("txtName").getComponent(cc.Label).string = name;
        rankItem.getChildByName("txtScore").getComponent(cc.Label).string = maxNum.toString();

        //显示头像，无头像则显示默认头像
        if (avatarUrl != "") {
            cc.loader.load({
                url: avatarUrl,
                type: "png"
            }, (err: any, imgicon) => {
                rankItem.getChildByName("imgIcon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(imgicon);
            })
        }
        else {
            rankItem.getChildByName("imgIcon").getComponent(cc.Sprite).spriteFrame = this.defaultIcon;
        }
        //rankItem.getChildByName("money").getComponent(cc.Label).string=maxNum.toString()+"分";
    }

    /**
     * 排序函数
     * @param data 
     */
    public Sorts(data: cc.Node[]) {
        let tempArr = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i].active) {
                tempArr.push(data[i].getChildByName("txtScore").getComponent(cc.Label).string);
            }
        }

        /**
         * 辅助排序的函数
         * @param a 
         * @param b 
         */
        function SortNum(a, b) {
            return a - b;
        }

        //对数组进行排序，排序后为从小到大
        let sorted = tempArr.sort(SortNum);
        //将数组倒序变成从大到小
        sorted.reverse();

        //根据数组顺序对排行进行排序
        for (let i = 0; i < sorted.length; i++) {
            if (i >= 0 && sorted[i] != sorted[i - 1]) {
                for (let j = 0; j < data.length; j++) {
                    if (data[j].getChildByName('txtScore').getComponent(cc.Label).string == sorted[i] && data[j].active) {
                        //设置排名
                        if (i == 1) {
                            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[0];
                            data[j].getChildByName("txtRank").active = false;
                        }
                        else if (i == 2) {
                            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[1];
                            data[j].getChildByName("txtRank").active = false;
                        }
                        else if (i == 3) {
                            data[j].getChildByName("imgLogo").getComponent(cc.Sprite).spriteFrame = this.logoArr[2];
                            data[j].getChildByName("txtRank").active = false;
                        }
                        else {
                            data[j].getChildByName("txtRank").getComponent(cc.Label).string = (i + 1).toString();
                            data[j].getChildByName("imgLogo").active = false;
                        }

                        //设置子节点渲染顺序
                        data[j].zIndex = i + 1;
                        console.log("对排行进行排序...");
                    }
                }
            }
        }
    }

    /**
     * 开关单人排行榜
     */
    public OpenTiwnRank() {
        //播放音响
        this.PlayUIAudio();
        //加载数据
        this.UpdateAllRank();

        this.tiwnRankPos.active = true;
        this.logoPos.active = false;
        this.relayRankPos.active = false;

        console.log("打开单人排行榜")
    }

    /**
     *开关接力排行榜
     */
    public OpenRelayRank() {
        //播放音效
        this.PlayUIAudio();
        this.tiwnRankPos.active = false;
        this.logoPos.active = true;
        this.relayRankPos.active = true;

        console.log("打开接力排行榜");
    }


    /**
     * 关闭所有排行
     */
    public CloseAllRank() {
        //播放音效
        this.PlayUIAudio();
        //加载数据

        //显示隐藏
        this.tiwnRankPos.active = false;
        this.relayRankPos.active = false;

        console.log("关闭全部排行榜");
    }

    /**
     * 关闭即将超越提示
     */
    public CloseSurpassTIps() {
        this.PlayUIAudio();
        this.surpassPos.active = false;
    }

    /**
     * 打开超过排行
     */
    public OpenSurpassRank(score) {
        this.surpassPos.active = true;
        
        function SortNum(a, b) {
            return a.KVDataList[0].value - b.KVDataList[0].value;
        }

        //判断是否是微信平台
        if (cc.sys.WECHAT_GAME) {
            if (score == 0) {
                //取出所有好友数据
                window['wx'].getFriendCloudStorage({
                    keyList: ['hightscorenum'],
                    success: res => {
                        console.log("成功取出所有好友数据");
                        //拿到数据
                        let data = res.data;

                        let num = data.sort(SortNum);
                        num.reverse();
                        //赋值给超越数据
                        this.surpassData = num;
                        for (let i = num.length; i >= 0; i--) {
                            if (i > 0) {
                                if (num[i - 1].KVDataList.length != 0 && score < num[i - 1].KVDataList[0].value) {
                                    this.surpassPos.getComponent(SurpassTips).Init(num[i - 1]);
                                    break;
                                }
                            }
                            else {
                                this.surpassPos.getComponent(SurpassTips).First(num[0]);
                            }
                        }
                    },
                    fail: res => {
                        console.log("加载好友数据失败");
                    }
                })
            }
        }
        else {
            if (this.surpassPos != undefined) {
                let data = this.surpassData;

                let num = data.sort(SortNum);
                num.reverse();
                for (let i = num.length; i >= 0; i--) {
                    if (i > 0) {
                        if (num[i - 1].KVDataList.length != 0 && score < num[i - 1].KVDataList[0].value) {
                            this.surpassPos.getComponent(SurpassTips).Init(num[i - 1]);
                            break;
                        }
                    }
                    else {
                        this.surpassPos.getComponent(SurpassTips).First(num[0]);
                        break;
                    }
                }
            }
            else {
                //取出所有好友数据
                window['wx'].getFriendCloudStorage({
                    keyList: ['highscorenum'],
                    success: res => {
                        let data = res.data;
                        let num = data.sort(SortNum);

                        this.surpassData = num;
                        for (let i = num.length; i >= 0; i--) {
                            if (i > 0) {
                                if (num[i - 1].KVDataList.length != 0 && score < num[i - 1].KVDataList[0].value) {
                                    this.surpassPos.getComponent(SurpassTips).Init(num[i - 1]);
                                    break;
                                }
                            }
                            else {
                                this.surpassPos.getComponent(SurpassTips).First(num[0]);
                                break;
                            }
                        }
                    },
                    fail: res => {
                        console.log("加载排行数据失败:" + res);
                    }

                })
            }
        }
    }
}
