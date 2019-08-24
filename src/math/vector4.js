export default class Vector4 {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;

    return this;
  }

  setX(value) {
    this.x = value;

    return this;
  }

  setY(value) {
    this.y = value;

    return this;
  }

  setZ(value) {
    this.z = value;

    return this;
  }

  setW(value) {
    this.w = value;

    return this;
  }

  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;
    this.w = vector.w;

    return this;
  }

  clone() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;

    return this;
  }

  negateVector(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
    this.z = -vector.z;
    this.w = -vector.w;

    return this;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    this.w += vector.w;

    return this;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;

    return this;
  }

  addValues(x, y, z, w) {
    this.x += x;
    this.y += y;
    this.z += z;
    this.w += w;

    return this;
  }

  addVectors(u, v) {
    this.x = u.x + v.x;
    this.y = u.y + v.y;
    this.z = u.z + v.z;
    this.w = u.w + v.w;

    return this;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    this.w -= vector.w;

    return this;
  }

  subtractScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;

    return this;
  }

  subtractValues(x, y, z, w) {
    this.x -= x;
    this.y -= y;
    this.z -= z;
    this.w -= w;

    return this;
  }

  subtractVectors(u, v) {
    this.x = u.x - v.x;
    this.y = u.y - v.y;
    this.z = u.z - v.z;
    this.w = u.w - v.w;

    return this;
  }

  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    this.w *= s;

    return this;
  }

  divideScalar(s) {
    this.x /= s;
    this.y /= s;
    this.z /= s;
    this.w /= s;

    return this;
  }

  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }

  distanceTo(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;
    const distW = this.w - vector.w;

    return Math.sqrt(distX * distX + distY * distY + distZ * distZ + distW * distW);
  }

  distanceToSquared(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;
    const distW = this.w - vector.w;

    return distX * distX + distY * distY + distZ * distZ + distW * distW;
  }

  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

    if (length !== 0) {
      this.x /= length;
      this.y /= length;
      this.z /= length;
      this.w /= length;
    }

    return this;
  }

  transform(matrix4) {
    const { x, y, z, w } = this;
    const v = matrix4.values;

    this.x = x * v[0] + y * v[4] + z * v[8] + w * v[12];
    this.y = x * v[1] + y * v[5] + z * v[9] + w * v[13];
    this.z = x * v[2] + y * v[6] + z * v[10] + w * v[14];
    this.w = x * v[3] + y * v[7] + z * v[11] + w * v[15];

    return this;
  }

  transformVector(vector, matrix3) {
    const { x, y, z, w } = vector;
    const v = matrix3.values;

    this.x = x * v[0] + y * v[4] + z * v[8] + w * v[12];
    this.y = x * v[1] + y * v[5] + z * v[9] + w * v[13];
    this.z = x * v[2] + y * v[6] + z * v[10] + w * v[14];
    this.w = x * v[3] + y * v[7] + z * v[11] + w * v[15];

    return this;
  }
}

Vector4.zero = new Vector4(0, 0, 0, 0);
Vector4.one = new Vector4(1, 1, 1, 1);
Vector4.unitX = new Vector4(1, 0, 0, 0);
Vector4.unitY = new Vector4(0, 1, 0, 0);
Vector4.unitZ = new Vector4(0, 0, 1, 0);
Vector4.unitW = new Vector4(0, 0, 0, 1);
