export default class Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}

Vector4.zero = new Vector4(0, 0, 0, 0);
Vector4.one = new Vector4(1, 1, 1, 1);
Vector4.unitX = new Vector4(1, 0, 0, 0);
Vector4.unitY = new Vector4(0, 1, 0, 0);
Vector4.unitZ = new Vector4(0, 0, 1, 0);
Vector4.unitW = new Vector4(0, 0, 0, 1);
