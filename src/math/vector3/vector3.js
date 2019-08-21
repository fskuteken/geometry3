export default class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

Vector3.zero = new Vector3(0, 0, 0);
Vector3.one = new Vector3(1, 1, 1);
Vector3.unitX = new Vector3(1, 0, 0);
Vector3.unitY = new Vector3(0, 1, 0);
Vector3.unitZ = new Vector3(0, 0, 1);
