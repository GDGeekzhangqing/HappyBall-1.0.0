import { _decorator, Component, Node, SpriteComponent, LabelComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("TiwnRankListItem")
export class TiwnRankListItem extends Component {
  
    @property({type:SpriteComponent})
    public  imgLogo:SpriteComponent=null;

    @property({type:SpriteComponent})
    public imgIcon:SpriteComponent=null;

    @property({type:LabelComponent})
    public txtName:LabelComponent=null;

    @property({type:LabelComponent})
    public txtScore:LabelComponent=null;

}
