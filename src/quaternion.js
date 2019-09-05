/**
 * A quaternion.
 * It has x, y, z and w components.
 */
class Quaternion {
  /**
   * Creates a new quaternion.
   * @param {Number} x The x component.
   * @param {Number} y The y component.
   * @param {Number} z The z component.
   * @param {Number} w The w component.
   */
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  /**
   * Sets the components of the quaternion.
   * @param {Number} x The x component.
   * @param {Number} y The y component.
   * @param {Number} z The z component.
   * @param {Number} w The w component.
   * @returns {Quaternion} The quaternion.
   */
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;

    return this;
  }

  /**
   * Sets the components of the quaternion to the identity.
   * @returns {Quaternion} The quaternion.
   */
  setIdentity() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;

    return this;
  }

  /**
   * Sets the quaternion to a rotation.
   * @param {Vector3} axis The axis to rotate around.
   * @param {Number} angle The angle to rotate.
   * @returns {Quaternion} The quaternion.
   */
  setAxisAngle(axis, angle) {
    const sin = Math.sin(angle / 2);

    this.x = sin * axis.x;
    this.y = sin * axis.y;
    this.z = sin * axis.z;
    this.w = Math.cos(angle / 2);

    return this;
  }

  /**
   * Copies the components of another quaternion.
   * @param {Quaternion} q The quaternion to copy the components from.
   * @returns {Quaternion} The quaternion.
   */
  copy(q) {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;

    return this;
  }

  /**
   * Creates a clone of the quaternion.
   * @returns {Quaternion} The cloned quaternion.
   */
  clone() {
    return new Quaternion(this.x, this.y, this.z, this.w);
  }

  /**
   * Sets the quaternion to its conjugate.
   * @returns {Quaternion} The quaternion.
   */
  conjugate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;
  }

  /**
   * Sets the quaternion to the conjugate of another quaternion.
   * @param {Quaternion} q The quaternion to calculate the conjugate.
   * @returns {Quaternion} The quaternion.
   */
  conjugateQuaternion(q) {
    this.x = -q.x;
    this.y = -q.y;
    this.z = -q.z;
    this.w = q.w;

    return this;
  }

  /**
   * Sets the quaternion to its inverse.
   * @returns {Quaternion} The quaternion.
   */
  invert() {
    const { x, y, z, w } = this;
    const dot = x * x + y * y + z * z + w * w;

    this.x = -x / dot;
    this.y = -y / dot;
    this.z = -z / dot;
    this.w = w / dot;

    return this;
  }

  /**
   * Sets the quaternion to the inverse of another quaternion.
   * @param {Quaternion} q The quaternion to calculate the inverse.
   */
  invertQuaternion(q) {
    const { x, y, z, w } = q;
    const dot = x * x + y * y + z * z + w * w;

    this.x = -x / dot;
    this.y = -y / dot;
    this.z = -z / dot;
    this.w = w / dot;

    return this;
  }

  /**
   * Calculates the length of the quaternion.
   * @returns {Number} The length of the quaternion.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  /**
   * Calculates the squared length of the quaternion.
   * @returns {Number} The squared length of the quaternion.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }

  /**
   * Normalizes the quaternion.
   * @returns {Quaternion} The quaternion.
   */
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

  /**
   * Sets the quaternion to the product of other two quaternions.
   * @param {Quaternion} q The first quaternion.
   * @param {Quaternion} r The second quaternion.
   * @returns {Quaternion} The quaternion.
   */
  multiplyQuaternions(q, r) {
    this.x = q.x * r.w + q.w * r.x + q.y * r.z - q.z * r.y;
    this.y = q.y * r.w + q.w * r.y + q.z * r.x - q.x * r.z;
    this.z = q.z * r.w + q.w * r.z + q.x * r.y - q.y * r.x;
    this.w = q.w * r.w - q.x * r.x - q.y * r.y - q.z * r.z;

    return this;
  }

  /**
   * Calculates the dot product with another quaternion.
   * @param {Quaternion} q The quaternion to calculate the dot product with.
   * @returns {Number} The dot product between the quaternions.
   */
  dot(q) {
    return this.x * q.x + this.y * q.y + this.z * q.z + this.w * q.w;
  }
}

/**
 * An identity quaternion.
 */
Quaternion.identity = new Quaternion(0, 0, 0, 1);

export default Quaternion;
