import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MoreGameData")
export class MoreGameData {
    public id: string;
    public imgIconUrl: string;
    public txtDes: string;

    constructor(id:string,imgIconUrl:string,txtDes:string){
        this.id=id;
        this.imgIconUrl=imgIconUrl;
        this.txtDes=txtDes;
    }

}
