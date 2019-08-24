/**
 * A 4D vector.
 * It has x, y, z and w components.
 */
export default class Vector4 {
  /**
   * Creates a new vector.
   * @param {Number} x The x component. The default is 0.
   * @param {Number} y The y component. The default is 0.
   * @param {Number} z The z component. The default is 0.
   * @param {Number} w The w component. The default is 1.
   */
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  /**
   * Sets the x, y, z and w components of the vector.
   * @param {Number} x The x component.
   * @param {Number} y The y component.
   * @param {Number} z The z component.
   * @param {Number} w The w component.
   * @returns {Vector4} The vector.
   */
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;

    return this;
  }

  /**
   * Sets the x component of the vector.
   * @param {Number} value The x component.
   * @returns {Vector4} The vector.
   */
  setX(value) {
    this.x = value;

    return this;
  }

  /**
   * Sets the y component of the vector.
   * @param {Number} value The y component.
   * @returns {Vector4} The vector.
   */
  setY(value) {
    this.y = value;

    return this;
  }

  /**
   * Sets the z component of the vector.
   * @param {Number} value The z component.
   * @returns {Vector4} The vector.
   */
  setZ(value) {
    this.z = value;

    return this;
  }

  /**
   * Sets the w component of the vector.
   * @param {Number} value The w component.
   * @returns {Vector4} The vector.
   */
  setW(value) {
    this.w = value;

    return this;
  }

  /**
   * Copies the components of another vector.
   * @param {Vector4} vector The vector to copy.
   * @returns {Vector4} The vector.
   */
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;
    this.w = vector.w;

    return this;
  }

  /**
   * Creates a clone of the vector.
   * @returns {Vector4} The cloned vector.
   */
  clone() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  /**
   * Negates the components of the vector.
   * @returns {Vector4} The vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;

    return this;
  }

  /**
   * Sets the components to the negation of another vector.
   * @param {Vector4} vector The vector to negate.
   * @returns {Vector4} The vector.
   */
  negateVector(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
    this.z = -vector.z;
    this.w = -vector.w;

    return this;
  }

  /**
   * Adds the components of another vector.
   * @param {Vector4} vector The vector to add.
   * @returns {Vector4} The vector.
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    this.w += vector.w;

    return this;
  }

  /**
   * Adds a scalar to the x, y, z and w components of the vector.
   * @param {Number} s The scalar to add.
   * @returns {Vector4} The vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;

    return this;
  }

  /**
   * Adds a value to each component of the vector.
   * @param {Number} x The value to add to the x component.
   * @param {Number} y The value to add to the y component.
   * @param {Number} z The value to add to the z component.
   * @param {Number} w The value to add to the w component.
   * @returns {Vector4} The vector.
   */
  addValues(x, y, z, w) {
    this.x += x;
    this.y += y;
    this.z += z;
    this.w += w;

    return this;
  }

  /**
   * Sets the vector to the addition of two vectors.
   * @param {Vector4} u The first vector.
   * @param {Vector4} v The second vector.
   * @returns {Vector4} The vector.
   */
  addVectors(u, v) {
    this.x = u.x + v.x;
    this.y = u.y + v.y;
    this.z = u.z + v.z;
    this.w = u.w + v.w;

    return this;
  }

  /**
   * Subtracts the components of another vector.
   * @param {Vector4} vector The vector to subtract.
   * @returns {Vector4} The vector.
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    this.w -= vector.w;

    return this;
  }

  /**
   * Subtracts a scalar from the x, y, z and w components of the vector.
   * @param {Number} s The scalar to subtract.
   * @returns {Vector4} The vector.
   */
  subtractScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;

    return this;
  }

  /**
   * Subtracts a value from each component of the vector.
   * @param {Number} x The value to subtract from the x component.
   * @param {Number} y The value to subtract from the y component.
   * @param {Number} z The value to subtract from the z component.
   * @param {Number} w The value to subtract from the w component.
   * @returns {Vector4} The vector.
   */
  subtractValues(x, y, z, w) {
    this.x -= x;
    this.y -= y;
    this.z -= z;
    this.w -= w;

    return this;
  }

  /**
   * Sets the vector to the difference of two vectors.
   * @param {Vector4} u The first vector.
   * @param {Vector4} v The second vector.
   * @returns {Vector4} The vector.
   */
  subtractVectors(u, v) {
    this.x = u.x - v.x;
    this.y = u.y - v.y;
    this.z = u.z - v.z;
    this.w = u.w - v.w;

    return this;
  }

  /**
   * Multiplies the components of the vector by a scalar.
   * @param {Number} s The scalar to multiply.
   * @returns {Vector4} The vector.
   */
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    this.w *= s;

    return this;
  }

  /**
   * Divides the components of the vector by a scalar.
   * @param {Number} s The scalar to divide.
   * @returns {Vector4} The vector.
   */
  divideScalar(s) {
    this.x /= s;
    this.y /= s;
    this.z /= s;
    this.w /= s;

    return this;
  }

  /**
   * Calculates the dot product with another vector.
   * @param {Vector4} vector The vector to calculate the dot product with.
   * @returns {Number} The dot product.
   */
  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
  }

  /**
   * Calculates the length of the vector.
   * @returns {Number} The length.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  /**
   * Calculates the squared length of the vector.
   * @returns {Number} The squared length.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }

  /**
   * Calculates the distance to another vector.
   * @param {Vector4} vector The vector to calculate the distance to.
   * @returns {Number} The distance.
   */
  distanceTo(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;
    const distW = this.w - vector.w;

    return Math.sqrt(distX * distX + distY * distY + distZ * distZ + distW * distW);
  }

  /**
   * Calculates the squared distance to another vector.
   * @param {Vector4} vector The vector to calculate the squared distance to.
   * @returns {Number} The squared distance.
   */
  distanceToSquared(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;
    const distW = this.w - vector.w;

    return distX * distX + distY * distY + distZ * distZ + distW * distW;
  }

  /**
   * Normalizes the vector.
   * When the vector length is 0, it does nothing.
   * @returns {Vector4} The vector.
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
   * Transforms the vector by applying a Matrix4 to it.
   * @param {Matrix4} matrix4 The transform matrix.
   * @returns {Vector4} The vector.
   */
  transform(matrix4) {
    const { x, y, z, w } = this;
    const v = matrix4.values;

    this.x = x * v[0] + y * v[4] + z * v[8] + w * v[12];
    this.y = x * v[1] + y * v[5] + z * v[9] + w * v[13];
    this.z = x * v[2] + y * v[6] + z * v[10] + w * v[14];
    this.w = x * v[3] + y * v[7] + z * v[11] + w * v[15];

    return this;
  }

  /**
   * Sets the vector to the components of another vector transformed by a matrix.
   * @param {Vector4} vector The vector to transform.
   * @param {Matrix4} matrix3 The transform matrix.
   * @returns {Vector4} The vector.
   */
  transformVector(vector, matrix4) {
    const { x, y, z, w } = vector;
    const v = matrix4.values;

    this.x = x * v[0] + y * v[4] + z * v[8] + w * v[12];
    this.y = x * v[1] + y * v[5] + z * v[9] + w * v[13];
    this.z = x * v[2] + y * v[6] + z * v[10] + w * v[14];
    this.w = x * v[3] + y * v[7] + z * v[11] + w * v[15];

    return this;
  }
}

/**
 * A Vector4 with its x, y, z and w components equal to zero.
 */
Vector4.zero = new Vector4(0, 0, 0, 0);

/**
 * A Vector4 with its x, y, z and w components equal to zero.
 */
Vector4.one = new Vector4(1, 1, 1, 1);

/**
 * A unit Vector4 along the x axis.
 */
Vector4.unitX = new Vector4(1, 0, 0, 0);

/**
 * A unit Vector4 along the y axis.
 */
Vector4.unitY = new Vector4(0, 1, 0, 0);

/**
 * A unit Vector4 along the z axis.
 */
Vector4.unitZ = new Vector4(0, 0, 1, 0);

/**
 * A unit Vector4 along the w axis.
 */
Vector4.unitW = new Vector4(0, 0, 0, 1);
