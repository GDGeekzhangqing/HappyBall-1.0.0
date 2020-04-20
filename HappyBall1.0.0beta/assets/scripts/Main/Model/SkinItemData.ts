import { _decorator, Component, Node, Enum } from "cc";
const { ccclass, property } = _decorator;

export enum SkinType {
    ChallengeSkin,
    GoldSkin,
    StampSkin,
    TrailingSkin
}
Enum(SkinType);

@ccclass("SkinItemData")
export class SkinItemData {
    imgIconUrl(imgIconUrl: any): import("cc").SpriteFrame {
        throw new Error("Method not implemented.");
    }
    public id: number;
    public skinType: SkinType;
    public prefabUrl: string;
    public imgUrl: string;

    constructor(id:number,skinType:SkinType,prefabUrl:string,imgUrl:string){
           this.id=id;
           this.skinType=skinType;
           this.prefabUrl=prefabUrl;
           this.imgUrl=imgUrl;
    }

}
