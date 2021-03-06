/**
 * A 3x3 matrix.
 * Its elements are stored in column-major order.
 */
class Matrix3 {
  /**
   * Creates a new identity Matrix3.
   */
  constructor() {
    this.elements = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ];
  }

  /**
   * Creates a new Matrix3 from the values of each element.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a02 The element at row 0 and column 2.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @param {Number} a12 The element at row 1 and column 2.
   * @param {Number} a20 The element at row 2 and column 0.
   * @param {Number} a21 The element at row 2 and column 1.
   * @param {Number} a22 The element at row 2 and column 2.
   * @returns {Matrix3} The created matrix.
   */
  static fromValues(
    a00, a01, a02,
    a10, a11, a12,
    a20, a21, a22,
  ) {
    const matrix = new Matrix3();
    const t = matrix.elements;

    t[0] = a00; t[3] = a01; t[6] = a02;
    t[1] = a10; t[4] = a11; t[7] = a12;
    t[2] = a20; t[5] = a21; t[8] = a22;

    return matrix;
  }

  /**
   * Compares if the elements of the matrix are equal to the elements of another matrix.
   * @param {Matrix3} matrix The matrix to compare the components to.
   * @returns {Boolean} A value indicating whether all the elements are equal.
   */
  equals(matrix) {
    const m = matrix.elements;
    const t = this.elements;

    return (
      m[0] === t[0]
      && m[1] === t[1]
      && m[2] === t[2]
      && m[3] === t[3]
      && m[4] === t[4]
      && m[5] === t[5]
      && m[6] === t[6]
      && m[7] === t[7]
      && m[8] === t[8]
    );
  }

  /**
   * Sets the elements of the matrix.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a02 The element at row 0 and column 2.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @param {Number} a12 The element at row 1 and column 2.
   * @param {Number} a20 The element at row 2 and column 0.
   * @param {Number} a21 The element at row 2 and column 1.
   * @param {Number} a22 The element at row 2 and column 2.
   * @returns {Matrix3} The matrix.
   */
  set(
    a00, a01, a02,
    a10, a11, a12,
    a20, a21, a22,
  ) {
    const t = this.elements;

    t[0] = a00; t[3] = a01; t[6] = a02;
    t[1] = a10; t[4] = a11; t[7] = a12;
    t[2] = a20; t[5] = a21; t[8] = a22;

    return this;
  }

  /**
   * Sets the elements of the matrix to the identity.
   * @returns {Matrix3} The matrix.
   */
  setIdentity() {
    return this.set(
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    );
  }

  /**
   * Copies the elements from another matrix.
   * @param {Matrix3} matrix The matrix to copy the elements from.
   * @returns {Matrix3} The matrix.
   */
  copy(matrix) {
    const t = this.elements;

    [
      t[0], t[1], t[2],
      t[3], t[4], t[5],
      t[6], t[7], t[8],
    ] = matrix.elements;

    return this;
  }

  /**
   * Creates a clone of the matrix.
   * @returns {Matrix3} The cloned matrix.
   */
  clone() {
    const t = this.elements;

    return Matrix3.fromValues(
      t[0], t[3], t[6],
      t[1], t[4], t[7],
      t[2], t[5], t[8],
    );
  }

  /**
   * Transposes the matrix.
   * @returns {Matrix3} The matrix.
   */
  transpose() {
    return this.set(...this.elements);
  }
}

/**
 * An identity Matrix3.
 */
Matrix3.identity = Matrix3.fromValues(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
);

/**
 * A Matrix3 with all elements equal to zero.
 */
Matrix3.zero = Matrix3.fromValues(
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
);

export default Matrix3;
