/**
 * A 3x3 matrix.
 * Its values are stored in column-major order.
 */
export default class Matrix3 {
  /**
   * Creates a new identity Matrix3.
   */
  constructor() {
    this.values = [
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
    const v = matrix.values;

    v[0] = a00; v[3] = a01; v[6] = a02;
    v[1] = a10; v[4] = a11; v[7] = a12;
    v[2] = a20; v[5] = a21; v[8] = a22;

    return matrix;
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
    const v = this.values;

    v[0] = a00; v[3] = a01; v[6] = a02;
    v[1] = a10; v[4] = a11; v[7] = a12;
    v[2] = a20; v[5] = a21; v[8] = a22;

    return this;
  }

  /**
   * Copies the elements from another matrix.
   * @param {Matrix3} matrix The matrix to copy the elements from.
   * @returns {Matrix3} The matrix.
   */
  copy(matrix) {
    const v = this.values;

    [
      v[0], v[1], v[2],
      v[3], v[4], v[5],
      v[6], v[7], v[8],
    ] = matrix.values;

    return this;
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
