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
export default class SurpassTips extends cc.Component {

    @property(cc.Sprite)
    public imgAvatar: cc.Sprite = null;

    /* @property(cc.Label)
     public txtNick: cc.Label = null;*/

    @property(cc.Label)
    public txtTopScore: cc.Label = null;

    @property(cc.Animation)
    public tipsAin: cc.Animation = null;

    /**
     * 如果你是第一名
     */
    public First(data) {
        let avtarUrl = data.avtarUrl;
        this.CreateImgIcon(avtarUrl);
        //this.txtNick.string = "超越自己";
        this.txtTopScore.string = "已经是好友中最高了";
    }

    /**
     * 如果你不是第一名
    */
    public Init(data) {
        let avtarUrl = data.avtarUrl;
        //let nick = data.nickName;
        let grade = data.KVDataList.length != 0 ? data.KVDataList[0].Value : 0;
        this.CreateImgIcon(avtarUrl);
        //this.txtNick.string = nick;
        this.txtTopScore.string = grade.toString();
    }

    /**
     * 创建Icon
     */
    public CreateImgIcon(avtarUrl) {
        cc.loader.load({
            url: avtarUrl,
            type: 'png'
        }, (err, texture) => {
            if (err) {
                console.log("创建 超过Icon失败...");
            }
            this.imgAvatar.spriteFrame = new cc.SpriteFrame(texture);
            console.log("创建超过Icon")
        })
    }

}
