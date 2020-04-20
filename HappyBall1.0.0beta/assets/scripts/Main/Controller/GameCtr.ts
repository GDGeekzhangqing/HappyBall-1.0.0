
import { _decorator, Component, Node, LabelComponent, ButtonComponent, EventHandler } from "cc";
import { ColumnCtr } from "./ColumnCtr";
import { FloorFlagCtr } from "./FloorFlagCtr";
import { CameraFollow } from "./CamerFollow";
import { BallCtr } from "./BallCtrl";
import { MainMgr } from "../System/MainMgr";

const { ccclass, property } = _decorator;

enum EGameSate {
    LOBBY,
    GAMING,
    GAMEOVER
}

@ccclass("GameCtr")
export class GameCtr extends Component {

    /*@property({ type: Node })
    gamePanel: Node = null;

    @property({ type: Node })
    loginPanel: Node = null;

    @property({ type: Node })
    overPanel: Node = null;*/


    @property({ type: Node })
    gameoverPanel: Node = null;

    @property({type:CameraFollow})
    cameraCtr: CameraFollow = null;

    @property({type:ColumnCtr})
    public columnCtr: ColumnCtr = null;

    @property({type:BallCtr})
    ballCtr: BallCtr = null;

    @property({type:FloorFlagCtr})
    floorFlagCtr: FloorFlagCtr = null;

    @property
    totalSecond: number = 90;

    tick = 0;
    intervalId = 0;

    state: EGameSate = EGameSate.LOBBY;

    // timingLb: LabelComponent = null;
    // scoreLb: LabelComponent = null;


    start() {

        this.columnCtr.enabled = false;
        /*const score = localStorage.getItem('score');
        if (score != null) {
            this.scoreLb.string = score;
        }*/
    }

    /**
     * 游戏开始
     */
    public GameStart() {
        this.columnCtr.enabled = true;
        //this.loginPanel.active = false;
        MainMgr.Instance().OpenPlayPanel();
        /*this.tick = 0;
        this.timingLb.string = parseTime2String(this.totalSecond);
        this.scoreLb.string = '0';
        this.intervalId = setInterval(this.GameTick.bind(this), 1000);*/
        this.state = EGameSate.GAMING;
        console.log("游戏开始...");
    }

    /**
     * 游戏重新开始
     */
    public GameRestart() {
        //this.overPanel.active = false;
        MainMgr.Instance().gameoverPanel.ClickClose();
        MainMgr.Instance().OpenPlayPanel();
        this.ballCtr.reset();
        this.columnCtr.reset();
        this.floorFlagCtr.reset();
        this.cameraCtr.reset();
        this.GameStart();
    }


    /**
     * 返回
     */
    public GameBackToLogin() {
        //this.loginPanel.active = true;
        //this.overPanel.active = false;

        this.ballCtr.reset();
        this.columnCtr.reset();
        this.floorFlagCtr.reset();
        this.cameraCtr.reset();
        this.floorFlagCtr.reset();

        /*this.timingLb.string = parseTime2String(this.totalSecond);
        const score = localStorage.getItem('score');
        if (score != null) {
            this.scoreLb.string = score;
        }*/
        console.log("返回");
    }

    private GameTick() {
        this.tick++;
        const dt = this.totalSecond - this.tick;
       if (dt < 0 || this.ballCtr.hitRed) {
            this.columnCtr.enabled = false;

            if ((this.ballCtr.isDeadlock || this.ballCtr.hitRed) && this.state != EGameSate.GAMEOVER) {
                /** GAME OVER */
                this.state = EGameSate.GAMEOVER;
                clearInterval(this.intervalId);
                // this.overPanel.active = true;
                MainMgr.Instance().OpenGameOverPanel();
                this.columnCtr.enabled = false;

                //保存本地数据
                const score = localStorage.getItem('score');
               /* if (score != null) {
                    let s0 = parseInt(score);
                    let s1 = parseInt(this.scoreLb.string);
                    if (s1 > s0) {
                        localStorage.setItem('score', this.scoreLb.string);
                    }
                } else {
                    localStorage.setItem('score', this.scoreLb.string);
                }*/
            }

        } else {
            //this.timingLb.string = parseTime2String(dt);
        }
    }
}

