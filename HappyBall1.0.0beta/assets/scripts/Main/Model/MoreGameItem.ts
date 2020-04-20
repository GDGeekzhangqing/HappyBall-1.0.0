import { _decorator, Component, Node, SpriteComponent, LabelComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MoreGameItem")
export class MoreGameItem extends Component {

    /**
     * 这个用来标识小游戏的ID
     */
    @property({ type: String})
    public Id: string ;

    @property({ type: SpriteComponent })
    public imgIcon: SpriteComponent = null;

    @property({ type: LabelComponent })
    public txtDes: LabelComponent = null;


    //监听函数不在这里添加
    //在实例化的时候添加
    //写在MoreGamePanel.ts中
    //TODO
}
