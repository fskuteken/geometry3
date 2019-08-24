/**
 * A 2D vector.
 * It has x and y components.
 */
export default class Vector2 {
  /**
   * Creates a new vector.
   * @param {Number} x The x component. The default is 0.
   * @param {Number} y The y component. The default is 0.
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Sets the x and y components of the vector.
   * @param {Number} x The x component.
   * @param {Number} y The y component.
   * @returns {Vector2} The vector.
   */
  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Sets the x component of the vector.
   * @param {Number} value The x component.
   * @returns {Vector2} The vector.
   */
  setX(value) {
    this.x = value;

    return this;
  }

  /**
   * Sets the y component of the vector.
   * @param {Number} value The y component.
   * @returns {Vector2} The vector.
   */
  setY(value) {
    this.y = value;

    return this;
  }

  /**
   * Copies the components of another vector.
   * @param {Vector2} vector The vector to copy.
   * @returns {Vector2} The vector.
   */
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;

    return this;
  }

  /**
   * Creates a clone of the vector.
   * @returns {Vector2} The cloned vector.
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Negates the components of the vector.
   * @returns {Vector2} The vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;

    return this;
  }

  /**
   * Sets the components to the negation of another vector.
   * @param {Vector2} vector The vector to negate.
   * @returns {Vector2} The vector.
   */
  negateVector(vector) {
    this.x = -vector.x;
    this.y = -vector.y;

    return this;
  }

  /**
   * Adds the components of another vector.
   * @param {Vector2} vector The vector to add.
   * @returns {Vector2} The vector.
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  /**
   * Adds a scalar to the x and y components of the vector.
   * @param {Number} s The scalar to add.
   * @returns {Vector2} The vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;

    return this;
  }

  /**
   * Adds a value to each component of the vector.
   * @param {Number} x The value to add to the x component.
   * @param {Number} y The value to add to the y component.
   * @returns {Vector2} The vector.
   */
  addValues(x, y) {
    this.x += x;
    this.y += y;

    return this;
  }

  /**
   * Sets the vector to the addition of two vectors.
   * @param {Vector2} u The first vector.
   * @param {Vector2} v The second vector.
   * @returns {Vector2} The vector.
   */
  addVectors(u, v) {
    this.x = u.x + v.x;
    this.y = u.y + v.y;

    return this;
  }

  /**
   * Subtracts the components of another vector.
   * @param {Vector2} vector The vector to subtract.
   * @returns {Vector2} The vector.
   */
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  /**
   * Subtracts a scalar from the x and y components of the vector.
   * @param {Number} s The scalar to subtract.
   * @returns {Vector2} The vector.
   */
  subtractScalar(s) {
    this.x -= s;
    this.y -= s;

    return this;
  }

  /**
   * Subtracts a value from each component of the vector.
   * @param {Number} x The value to subtract from the x component.
   * @param {Number} y The value to subtract from the y component.
   * @returns {Vector2} The vector.
   */
  subtractValues(x, y) {
    this.x -= x;
    this.y -= y;

    return this;
  }

  /**
   * Sets the vector to the difference of two vectors.
   * @param {Vector2} u The first vector.
   * @param {Vector2} v The second vector.
   * @returns {Vector2} The vector.
   */
  subtractVectors(u, v) {
    this.x = u.x - v.x;
    this.y = u.y - v.y;

    return this;
  }

  /**
   * Multiplies the components of the vector by a scalar.
   * @param {Number} s The scalar to multiply.
   * @returns {Vector2} The vector.
   */
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;

    return this;
  }

  /**
   * Divides the components of the vector by a scalar.
   * @param {Number} s The scalar to divide.
   * @returns {Vector2} The vector.
   */
  divideScalar(s) {
    this.x /= s;
    this.y /= s;

    return this;
  }

  /**
   * Calculates the dot product with another vector.
   * @param {Vector2} vector The vector to calculate the dot product with.
   * @returns {Number} The dot product.
   */
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  /**
   * Calculates the length of the vector.
   * @returns {Number} The length.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Calculates the squared length of the vector.
   * @returns {Number} The squared length.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Calculates the distance to another vector.
   * @param {Vector2} vector The vector to calculate the distance to.
   * @returns {Number} The distance.
   */
  distanceTo(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;

    return Math.sqrt(distX * distX + distY * distY);
  }

  /**
   * Calculates the squared distance to another vector.
   * @param {Vector2} vector The vector to calculate the squared distance to.
   * @returns {Number} The squared distance.
   */
  distanceToSquared(vector) {
    const distX = this.x - vector.x;
    const distY = this.y - vector.y;

    return distX * distX + distY * distY;
  }

  /**
   * Normalizes the vector.
   * When the vector length is 0, it does nothing.
   * @returns {Vector2} The vector.
   */
  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y);

    if (length !== 0) {
      this.x /= length;
      this.y /= length;
    }

    return this;
  }
}

/**
 * A Vector2 with its x and y components equal to zero.
 */
Vector2.zero = new Vector2(0, 0);

/**
 * A Vector2 with its x and y components equal to one.
 */
Vector2.one = new Vector2(1, 1);

/**
 * A unit Vector2 along the x axis.
 */
Vector2.unitX = new Vector2(1, 0);

/**
 * A unit Vector2 along the y axis.
 */
Vector2.unitY = new Vector2(0, 1);
