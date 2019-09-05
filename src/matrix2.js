/**
 * A 2x2 matrix.
 * Its elements are stored in column-major order.
 */
class Matrix2 {
  /**
   * Creates a new identity Matrix2.
   */
  constructor() {
    this.elements = [
      1, 0,
      0, 1,
    ];
  }

  /**
   * Creates a new Matrix2 from the values of each element.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @returns {Matrix2} The created matrix.
   */
  static fromValues(
    a00, a01,
    a10, a11,
  ) {
    const matrix = new Matrix2();
    const t = matrix.elements;

    t[0] = a00; t[2] = a01;
    t[1] = a10; t[3] = a11;

    return matrix;
  }

  /**
   * Compares if the elements of the matrix are equal to the elements of another matrix.
   * @param {Matrix2} matrix The matrix to compare the components to.
   * @returns {Boolean} A value indicating whether all the elements are equal.
   */
  equals(matrix) {
    const m = matrix.elements;
    const t = this.elements;

    return m[0] === t[0] && m[1] === t[1] && m[2] === t[2] && m[3] === t[3];
  }

  /**
   * Sets the elements of the matrix.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @returns {Matrix2} The matrix.
   */
  set(
    a00, a01,
    a10, a11,
  ) {
    const t = this.elements;

    t[0] = a00; t[2] = a01;
    t[1] = a10; t[3] = a11;

    return this;
  }

  /**
   * Sets the elements of the matrix to the identity.
   * @returns {Matrix2} The matrix.
   */
  setIdentity() {
    return this.set(
      1, 0,
      0, 1,
    );
  }

  /**
   * Copies the elements from another matrix.
   * @param {Matrix2} matrix The matrix to copy the elements from.
   * @returns {Matrix2} The matrix.
   */
  copy(matrix) {
    const t = this.elements;

    [t[0], t[1], t[2], t[3]] = matrix.elements;

    return this;
  }

  /**
   * Creates a clone of the matrix.
   * @returns {Matrix2} The cloned matrix.
   */
  clone() {
    const t = this.elements;

    return Matrix2.fromValues(
      t[0], t[2],
      t[1], t[3],
    );
  }

  /**
   * Transposes the matrix.
   * @returns {Matrix2} The matrix.
   */
  transpose() {
    return this.set(...this.elements);
  }
}

/**
 * An identity Matrix2.
 */
Matrix2.identity = Matrix2.fromValues(
  1, 0,
  0, 1,
);

/**
 * A Matrix2 with all elements equal to zero.
 */
Matrix2.zero = Matrix2.fromValues(
  0, 0,
  0, 0,
);

export default Matrix2;
