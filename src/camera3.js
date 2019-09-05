import Quaternion from './quaternion';
import Size2 from './size2';
import Vector3 from './vector3';

class Camera3 {
  constructor(projectionType) {
    this.projectionType = projectionType;
    this.viewport = new Size2(1, 1);
    this.position = new Vector3(0, 0, 0);
    this.rotation = new Quaternion(0, 0, 0, 1);
  }
}

export default Camera3;
