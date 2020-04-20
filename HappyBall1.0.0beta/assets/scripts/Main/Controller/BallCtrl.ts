
import { _decorator, Component, Node, ICollisionEvent, ColliderComponent, RigidBodyComponent, Vec3 } from "cc";

import { ColumnCtr } from "./ColumnCtr";
import { v3_t } from "../../helps/TempConst";
import { GameOverPanel } from "../View/GameOverPanel";
import { PlayPanel } from "../View/PlayPanel";
import { LoadSys } from "../System/LoadSys";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("BallCtr")
@requireComponent(RigidBodyComponent)
export class BallCtr extends Component {

    private rigidBody: RigidBodyComponent = null;

    @property({ type: GameOverPanel })
    public gameoverPanel: GameOverPanel = null;

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    @property
    velocity_y: number = 10;

    @property({ type: ColumnCtr })
    columnCtr: ColumnCtr = null;

    private _deadlockCount = 0;
    private _tempUuid = '';

    private _hitRedFlag = 0;
    get hitRed() {
        return this._hitRedFlag == 1;
    }

    get isDeadlock() {
        return this._deadlockCount >= 2;
    }

    onLoad() {
        this.rigidBody = this.getComponent(RigidBodyComponent);
        this.rigidBody.allowSleep = false;
    }

    start() {
        const collider = this.getComponent(ColliderComponent);
        collider.on('onCollisionEnter', this.onCollisionEnter, this);
    }

    onCollisionEnter(event: ICollisionEvent) {
        v3_t.set(this.node.worldPosition);
        v3_t.y = event.otherCollider.node.worldPosition.y + 1; // 1 = radius + halfY
        this.node.worldPosition = v3_t;

        if (event.otherCollider.node.name == "CubeRed") {
            this._hitRedFlag = 1;
            this.rigidBody.enabled = false;
            this.columnCtr.enabled = false;
            console.log("死亡逻辑...");

            //打开GameOverPanel
            this.gameoverPanel.SetPanelState();
            //设置分数
            this.gameoverPanel.SetScoreUIInfo(this.playPanel.lastScore);
            
        } else if (event.otherCollider.node.name == "Cube") {
            v3_t.set(0, this.velocity_y, 0);
            this.rigidBody.setLinearVelocity(v3_t);

            if (this._tempUuid == event.otherCollider.node.uuid) {
                this._deadlockCount++;
            } else {
                this._tempUuid = event.otherCollider.node.uuid;
                this._deadlockCount = 0;
            }
            

        }
    }

    update() {
        this.rigidBody.getLinearVelocity(v3_t);
        if (v3_t.y > this.velocity_y) {
            v3_t.set(0, this.velocity_y, 0);
            this.rigidBody.setLinearVelocity(v3_t);
        }
    }

    reset() {
        this.rigidBody.enabled = true;
        this._hitRedFlag = 0;
        v3_t.set(0, 6, 4.5);
        this.node.worldPosition = v3_t;
    }
}

