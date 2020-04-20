import { _decorator, Component, Node, AudioSourceComponent } from "cc";
const { ccclass, property } = _decorator;

//这个脚本负责游戏的设置
//比如游戏难度、游戏的音效、游戏的振动
@ccclass("SettingMgr")
export class SettingMgr extends Component {

     //#region  单例
     //private static instance: AudioMgr = new AudioMgr();
     private static instance: SettingMgr = null;

     //限制产生多个对象
     /* private constructor() {
          super();
      }*/

     /**
      * 获得实例对象
      */
     public static Instance(): SettingMgr {
          return this.instance;
     }

     //#endregion

     public isVolume: boolean = true;
     public isImageQuality: boolean = true;
     public isVibration: boolean = true;


     /*@property({ type: AudioSvc })
     public audioSvc: AudioSvc = null;*/

     @property({ type: AudioSourceComponent })
     public bgAudioNode: AudioSourceComponent = null;

     @property({ type: AudioSourceComponent })
     public uiAudioNode: AudioSourceComponent = null;


     update(){
          if(this.isVibration==true){
               window['wx'].vibrateShort(15);
          }
     }


     /**
      * 设置音响的播放
      */
     public SetAudioEnable() {
          if (this.isVolume == true) {
               //关闭audio组件
               this.bgAudioNode.pause();
               this.uiAudioNode.pause();
               this.isVolume = false;
               console.log("关闭音效...");
          }
          else {
               //开启audio组件             
               this.bgAudioNode.play();
               this.uiAudioNode.play();
               this.isVolume = true;
               console.log("打开音响...");
          }
     }

     /**
      * 设置遮罩/高清，模糊
      */
     public SetFuzzyMask() {

          if (this.isImageQuality == true) {
               this.isImageQuality = false;
               console.log("设置流畅...");
          }
          else {
               this.isImageQuality = true;
               console.log("设置高清...");
          }

     }

     /**
      * 设置振动（0.1秒）
      */
     public SetVibrate() {
          if (this.isVibration == true) {
              
               this.isVibration = false;
          }
          else {
               this.isVibration = true;
          }

     }

}
