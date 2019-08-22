export default class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  }

  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;

    return this;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;
  }

  negateVector(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
    this.z = -vector.z;

    return this;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;

    return this;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;

    return this;
  }

  addValues(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;

    return this;
  }

  addVectors(u, v) {
    this.x = u.x + v.x;
    this.y = u.y + v.y;
    this.z = u.z + v.z;

    return this;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;

    return this;
  }

  subtractScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;

    return this;
  }

  subtractValues(x, y, z) {
    this.x -= x;
    this.y -= y;
    this.z -= z;

    return this;
  }

  subtractVectors(u, v) {
    this.x = u.x - v.x;
    this.y = u.y - v.y;
    this.z = u.z - v.z;

    return this;
  }

  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;

    return this;
  }

  divideScalar(s) {
    this.x /= s;
    this.y /= s;
    this.z /= s;

    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (length !== 0) {
      this.x /= length;
      this.y /= length;
      this.z /= length;
    }

    return this;
  }
}

Vector3.zero = new Vector3(0, 0, 0);
Vector3.one = new Vector3(1, 1, 1);
Vector3.unitX = new Vector3(1, 0, 0);
Vector3.unitY = new Vector3(0, 1, 0);
Vector3.unitZ = new Vector3(0, 0, 1);
