/**
 * A 3D vector.
 * It has x, y and z components.
 */
class Vector3 {
  /**
   * Creates a new vector.
   * @param {Number} x The x component. The default is 0.
   * @param {Number} y The y component. The default is 0.
   * @param {Number} z The z component. The default is 0.
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Compares if the components of the vector are equal to the components of another vector.
   * @param {Vector3} vector The vector to compare the components to.
   * @returns {Boolean} A value indicating whether all the components are equal.
   */
  equals(vector) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  }

  /**
   * Sets the x, y and z components of the vector.
   * @param {Number} x The x component.
   * @param {Number} y The y component.
   * @param {Number} z The z component.
   * @returns {Vector3} The vector.
   */
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  }

  /**
   * Sets the x component of the vector.
   * @param {Number} value The x component.
   * @returns {Vector3} The vector.
   */
  setX(value) {
    this.x = value;

    return this;
  }

  /**
   * Sets the y component of the vector.
   * @param {Number} value The y component.
   * @returns {Vector3} The vector.
   */
  setY(value) {
    this.y = value;

    return this;
  }

  /**
   * Sets the z component of the vector.
   * @param {Number} value The z component.
   * @returns {Vector3} The vector.
   */
  setZ(value) {
    this.z = value;

    return this;
  }

  /**
   * Copies the components of another vector.
   * @param {Vector3} vector The vector to copy.
   * @returns {Vector3} The vector.
   */
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;

    return this;
  }

  /**
   * Creates a clone of the vector.
   * @returns {Vector3} The cloned vector.
   */
  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * Negates the components of the vector.
   * @returns {Vector3} The vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;

    return this;
  }

  /**
   * Sets the components to the negation of another vector.
   * @param {Vector3} vector The vector to negate.
   * @returns {Vector3} The vector.
   */
  negateVector(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
    this.z = -vector.z;

    return this;
  }

  /**
   * Adds the components of another vector.
   * @param {Vector3} vector The vector to add.
   * @returns {Vector3} The vector.
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;

    return this;
  }

  /**
   * Adds a scalar to the x, y and z components of the vector.
   * @param {Number} s The scalar to add.
   * @returns {Vector3} The vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;

    return this;
  }

  /**
   * Adds a value to each component of the vector.
   * @param {Number} x The value to add to the x component.
   * @param {Number} y The value to add to the y component.
   * @param {Number} z The value to add to the z component.
   * @returns {Vector3} The vector.
   */
  addValues(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;

    return this;
  }

  /**
   * Sets the vector to the addition of two vectors.
   * @param {Vector3} u The first vector.
   * @param {Vector3} v The second vector.
   * @returns {Vector3} The vector.
   */
  addVectors(u, v) {
    this.x = u.x + v.x;
    this.y = u.y + v.y;
    this.z = u.z + v.z;

    return this;
  }

  /**
   * Subtracts the components of another vector.
   * @param {Vector3} vector The vector to subtract.
   * @returns {Vector3} The vector.
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;

    return this;
  }

  /**
   * Subtracts a scalar from the x, y and z components of the vector.
   * @param {Number} s The scalar to subtract.
   * @returns {Vector3} The vector.
   */
  subtractScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;

    return this;
  }

  /**
   * Subtracts a value from each component of the vector.
   * @param {Number} x The value to subtract from the x component.
   * @param {Number} y The value to subtract from the y component.
   * @param {Number} z The value to subtract from the z component.
   * @returns {Vector3} The vector.
   */
  subtractValues(x, y, z) {
    this.x -= x;
    this.y -= y;
    this.z -= z;

    return this;
  }

  /**
   * Sets the vector to the difference of two vectors.
   * @param {Vector3} u The first vector.
   * @param {Vector3} v The second vector.
   * @returns {Vector3} The vector.
   */
  subtractVectors(u, v) {
    this.x = u.x - v.x;
    this.y = u.y - v.y;
    this.z = u.z - v.z;

    return this;
  }

  /**
   * Multiplies the components of the vector by a scalar.
   * @param {Number} s The scalar to multiply.
   * @returns {Vector3} The vector.
   */
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;

    return this;
  }

  /**
   * Divides the components of the vector by a scalar.
   * @param {Number} s The scalar to divide.
   * @returns {Vector3} The vector.
   */
  divideScalar(s) {
    this.x /= s;
    this.y /= s;
    this.z /= s;

    return this;
  }

  /**
   * Calculates the dot product with another vector.
   * @param {Vector3} vector The vector to calculate the dot product with.
   * @returns {Number} The dot product.
   */
  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  /**
   * Sets the vector to the cross product between two vectors.
   * @param {Vector3} u The first vector.
   * @param {Vector3} v The second vector.
   * @returns {Vector3} The vector.
   */
  crossVectors(u, v) {
    this.x = u.y * v.z - u.z * v.y;
    this.y = u.z * v.x - u.x * v.z;
    this.z = u.x * v.y - u.y * v.x;

    return this;
  }

  /**
   * Calculates the length of the vector.
   * @returns {Number} The length.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * Calculates the squared length of the vector.
   * @returns {Number} The squared length.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * Calculates the distance to another vector.
   * @param {Vector3} vector The vector to calculate the distance to.
   * @returns {Number} The distance.
   */
  distanceTo(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;

    return Math.sqrt(distX * distX + distY * distY + distZ * distZ);
  }

  /**
   * Calculates the squared distance to another vector.
   * @param {Vector3} vector The vector to calculate the squared distance to.
   * @returns {Number} The squared distance.
   */
  distanceToSquared(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;
    const distZ = this.z - vector.z;

    return distX * distX + distY * distY + distZ * distZ;
  }

  /**
   * Normalizes the vector.
   * When the vector length is 0, it does nothing.
   * @returns {Vector3} The vector.
   */
  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (length !== 0) {
      this.x /= length;
      this.y /= length;
      this.z /= length;
    }

    return this;
  }

  /**
   * Transforms the vector by applying a Matrix3 to it.
   * @param {Matrix3} matrix3 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transform(matrix3) {
    const { x, y, z } = this;
    const m = matrix3.elements;

    this.x = x * m[0] + y * m[3] + z * m[6];
    this.y = x * m[1] + y * m[4] + z * m[7];
    this.z = x * m[2] + y * m[5] + z * m[8];

    return this;
  }

  /**
   * Sets the vector to the components of another vector transformed by a matrix.
   * @param {Vector3} vector The vector to transform.
   * @param {Matrix3} matrix3 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transformVector(vector, matrix3) {
    const { x, y, z } = vector;
    const m = matrix3.elements;

    this.x = x * m[0] + y * m[3] + z * m[6];
    this.y = x * m[1] + y * m[4] + z * m[7];
    this.z = x * m[2] + y * m[5] + z * m[8];

    return this;
  }

  /**
   * Transforms the vector with a Matrix4.
   * It considers the homogeneous coordinate as 1.
   * @param {Matrix4} matrix4 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transformPosition(matrix4) {
    const { x, y, z } = this;
    const m = matrix4.elements;

    this.x = x * m[0] + y * m[4] + z * m[8] + m[12];
    this.y = x * m[1] + y * m[5] + z * m[9] + m[13];
    this.z = x * m[2] + y * m[6] + z * m[10] + m[14];

    return this;
  }

  /**
   * Sets the vector to the components of another vector transformed by a matrix.
   * It considers the homogeneous coordinate as 1.
   * @param {Vector3} vector The vector to transform.
   * @param {Matrix4} matrix4 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transformPositionVector(vector, matrix4) {
    const { x, y, z } = vector;
    const m = matrix4.elements;

    this.x = x * m[0] + y * m[4] + z * m[8] + m[12];
    this.y = x * m[1] + y * m[5] + z * m[9] + m[13];
    this.z = x * m[2] + y * m[6] + z * m[10] + m[14];

    return this;
  }

  /**
   * Transforms the vector with a Matrix4.
   * It considers the homogeneous coordinate as 0.
   * @param {Matrix4} matrix4 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transformDirection(matrix4) {
    const { x, y, z } = this;
    const m = matrix4.elements;

    this.x = x * m[0] + y * m[4] + z * m[8];
    this.y = x * m[1] + y * m[5] + z * m[9];
    this.z = x * m[2] + y * m[6] + z * m[10];

    return this;
  }

  /**
   * Sets the vector to the components of another vector transformed by a matrix.
   * It considers the homogeneous coordinate as 0.
   * @param {Vector3} vector The vector to transform.
   * @param {Matrix4} matrix4 The transform matrix.
   * @returns {Vector3} The vector.
   */
  transformDirectionVector(vector, matrix4) {
    const { x, y, z } = vector;
    const m = matrix4.elements;

    this.x = x * m[0] + y * m[4] + z * m[8];
    this.y = x * m[1] + y * m[5] + z * m[9];
    this.z = x * m[2] + y * m[6] + z * m[10];

    return this;
  }

  /**
   * Sets the vector to the interpolation of two other vectors.
   * @param {Vector3} u The first vector of the interpolation.
   * @param {Vector3} v The second vector of the interpolation.
   * @param {Number} t The interpolation value.
   * @returns {Vector3} The vector.
   */
  lerpVectors(u, v, t) {
    this.x = (1 - t) * u.x + t * v.x;
    this.y = (1 - t) * u.y + t * v.y;
    this.z = (1 - t) * u.z + t * v.z;

    return this;
  }
}

/**
 * A Vector3 with its x, y and z components equal to zero.
 */
Vector3.zero = new Vector3(0, 0, 0);

/**
 * A Vector3 with its x, y and z components equal to zero.
 */
Vector3.one = new Vector3(1, 1, 1);

/**
 * A unit Vector3 along the x axis.
 */
Vector3.unitX = new Vector3(1, 0, 0);

/**
 * A unit Vector3 along the y axis.
 */
Vector3.unitY = new Vector3(0, 1, 0);

/**
 * A unit Vector3 along the z axis.
 */
Vector3.unitZ = new Vector3(0, 0, 1);

export default Vector3;
