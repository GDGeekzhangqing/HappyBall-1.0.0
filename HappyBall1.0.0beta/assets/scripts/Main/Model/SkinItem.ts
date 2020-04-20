import { _decorator, Component, Node, SpriteComponent } from "cc";
import { PanelRoot } from "../Root/PanelRoot";
import { SkinType } from "./SkinItemData";
const { ccclass, property } = _decorator;

@ccclass("SkinItem")
export class SkinItem extends PanelRoot {

    /**
     * 设置标识
     */
    public id: number = 1;

    @property({type:SkinType})
    public skinType:SkinType;

    @property({ type: SpriteComponent })
    public imgSkin: SpriteComponent = null;

    @property({ type: SpriteComponent })
    public imgBg: SpriteComponent = null;

   

   
}
