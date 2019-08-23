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

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
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
}

Vector4.zero = new Vector4(0, 0, 0, 0);
Vector4.one = new Vector4(1, 1, 1, 1);
Vector4.unitX = new Vector4(1, 0, 0, 0);
Vector4.unitY = new Vector4(0, 1, 0, 0);
Vector4.unitZ = new Vector4(0, 0, 1, 0);
Vector4.unitW = new Vector4(0, 0, 0, 1);
