import { _decorator, Component, Node, SpriteComponent, LabelComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("RelayRankListData")
export class RelayRankListData {

    public id:number;

    public imgLogoUrl: string;

    public imgIconUrl: string;

    public txtName: string;

    public txtScore: string;

    constructor(id:number,imgLogoUrl:string,imgIconUrl:string,txtName:string,txtScore:string){
        this.id=id;
        this.imgLogoUrl=imgLogoUrl;
        this.imgIconUrl=imgIconUrl;
        this.txtName=txtName;
        this.txtScore=txtScore;
    }
}
