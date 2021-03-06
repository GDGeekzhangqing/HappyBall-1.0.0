import { _decorator, Component, Node, systemEvent, SystemEventType, EventKeyboard, macro, Quat, EventTouch, Touch, Vec3 } from "cc";
import { quat_t, v2_t, v3_t } from "../../helps/TempConst";

const { ccclass, property } = _decorator;

@ccclass("ColumnCtr")
export class ColumnCtr extends Component {

    @property
    rotFactor = 0.75;

    onEnable () {   
        systemEvent.on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onDisable () {   
        systemEvent.off(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
    }
  
    onTouchMove (touch: Touch, event: EventTouch) {
        touch.getDelta(v2_t);
        if (v2_t.x != 0) {
            Quat.fromEuler(quat_t, 0, v2_t.x * this.rotFactor, 0);
            this.node.rotate(quat_t); 

            console.log("Touch doing...");
        }
    }

    reset () {
        const cnode = this.node.children[0];
        cnode.worldPosition = Vec3.ZERO;
        cnode.worldRotation = Quat.IDENTITY;

        for (let i = 1; i < this.node.children.length; i++) {
            const cnode = this.node.children[i];
            v3_t.set(0, i * -8, 0);
            cnode.worldPosition = v3_t;
        }
    }
}
