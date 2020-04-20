import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

//这个是泛型单例模板
@ccclass("SingletonPattern")
export class SingletonPattern<T> extends Component {
    private static instance:any=null;
    public static Instance<T>(type:{new ():T}):T{
        if(this.instance==null){
            this.instance=new type();
        }
        return this.instance;
    }
}
