import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

//这个脚本负责共用的方法
@ccclass("Common")
export class Common extends Component {


    /**
       * 产生随机整数，包含下限值，但不包括上限值
       * @param {Number} lower 下限
       * @param {Number} upper 上限
       * @return {Number} 返回在下限到上限之间的一个随机整数
       */
    public static Random(lower: number, upper: number): number {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }

    /**
     * 产生随机整数，包含下限值，包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机整数
     */
    public static RandomAll(lower: number, upper: number): number {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }

}

/**
 * 返回参数接口
 */
interface Out<T> {
    /**
     * 值
     */
    value: T;
}

//#region  示例


function set(out: Out<number>) {
    out.value = 1;
}

const value = { value: 0 };
set(value);
console.log(value.value);


//#endregion