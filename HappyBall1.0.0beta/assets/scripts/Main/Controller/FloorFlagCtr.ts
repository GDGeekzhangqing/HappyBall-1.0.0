import { _decorator, Component, Node, LabelComponent, Quat, randomRange, ColliderComponent, director, Director, Prefab, instantiate, RigidBodyComponent, Vec3 } from "cc";
import { v3_t, quat_t } from "../../helps/TempConst";
import { PrefabPoolUtil } from "../../Pool/PrefabPoolUtil";
import { PlayPanel } from "../View/PlayPanel";
import { LoadSys } from "../System/LoadSys";
import { GameOverPanel } from "../View/GameOverPanel";

const { ccclass, property } = _decorator;

@ccclass("FloorFlagCtr")
export class FloorFlagCtr extends Component {

    @property({ type: Node })
    targetNode: Node = null;

    @property({ type: Node })
    floorRoot: Node = null;

    @property({ type: Node })
    floorFlag0: Node = null;

    @property({ type: Node })
    floorFlag1: Node = null;

    /* @property({ type: LabelComponent })
     scoreLabel: LabelComponent = null;*/

    @property({ type: PlayPanel })
    public playPanel: PlayPanel = null;

    @property({ type: GameOverPanel })
    public gameOverPanel: GameOverPanel= null;

    @property({ type: Prefab })
    cubePrefab: Prefab = null;

    @property({ type: Prefab })
    cubeRedPrefab: Prefab = null;

    @property({ type: Node })
    cubeRoot: Node = null;

    private _flag = 0;

    update() {

        if (this.floorFlag0.worldPosition.y > this.targetNode.worldPosition.y) {
            v3_t.set(this.floorFlag0.worldPosition);
            v3_t.y -= 8;
            this.floorFlag0.worldPosition = v3_t;

            const len = this.floorRoot.children.length;
            console.log("len is :" + len);
            const floorNode = this.floorRoot.children[this._flag % len];
            console.log("floorNode is:" + floorNode);
            const colliders = floorNode.getComponentsInChildren(ColliderComponent);
            for (let i = 0; i < colliders.length; i++) {//生成掉落预制体，也生成四散而去的预制体
                let clone: Node;
                if (colliders[i].node.name == "Cube") {
                    clone = PrefabPoolUtil.getItemByPoolName(colliders[i].node.name, this.cubePrefab, 5);
                } else {
                    clone = PrefabPoolUtil.getItemByPoolName(colliders[i].node.name, this.cubeRedPrefab, 5);
                }
                this.cubeRoot.addChild(clone);

                clone.worldPosition = colliders[i].node.worldPosition;
                clone.worldRotation = colliders[i].node.worldRotation;

                //获得刚体
                const cBody = clone.getComponent(RigidBodyComponent);
                cBody.sleep();
                cBody.wakeUp();

                v3_t.set(0, 0, 10000);
                Vec3.transformQuat(v3_t, v3_t, clone.worldRotation);
                cBody.applyForce(v3_t);
            }

            //生成下一个平台
            v3_t.set(0, -(this._flag + len) * 8, 0);
            floorNode.worldPosition = v3_t;

            //设置随机旋转
            Quat.fromEuler(quat_t, 0, randomRange(-180, 180), 0);
            floorNode.worldRotation = quat_t;

            //计算得分
            this._flag++;
            //this.scoreLabel.string = this._flag.toString();
            this.playPanel.SetScoreUI(this._flag);

            console.log("超过.....111");

            //设置超过的人
            if (this._flag > LoadSys.Instance().hightScoreVal) {
                this.gameOverPanel.SetSurpassUIInfo(this._flag);
                console.log("超越...222");
            }
        }
        //移动柱子
        if (this.floorFlag1.worldPosition.y > this.targetNode.worldPosition.y) {
            v3_t.set(this.floorFlag1.worldPosition);
            v3_t.y -= 8;
            this.floorFlag1.worldPosition = v3_t;
        }
    }

    reset() {
        this._flag = 0;
        v3_t.set(0, -1, 0);
        this.floorFlag0.worldPosition = v3_t;
        v3_t.set(0, -3, 0);
        this.floorFlag1.worldPosition = v3_t;
    }

}
