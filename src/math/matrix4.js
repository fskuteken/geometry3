/**
 * A 4x4 matrix.
 * Its values are stored in column-major order.
 */
export default class Matrix4 {
  /**
   * Creates a new identity Matrix4.
   */
  constructor() {
    this.values = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ];
  }

  /**
   * Creates a new Matrix4 from the values of each element.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a02 The element at row 0 and column 2.
   * @param {Number} a03 The element at row 0 and column 3.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @param {Number} a12 The element at row 1 and column 2.
   * @param {Number} a13 The element at row 1 and column 3.
   * @param {Number} a20 The element at row 2 and column 0.
   * @param {Number} a21 The element at row 2 and column 1.
   * @param {Number} a22 The element at row 2 and column 2.
   * @param {Number} a23 The element at row 2 and column 3.
   * @param {Number} a30 The element at row 3 and column 0.
   * @param {Number} a31 The element at row 3 and column 1.
   * @param {Number} a32 The element at row 3 and column 2.
   * @param {Number} a33 The element at row 3 and column 3.
   * @returns {Matrix4} The created matrix.
   */
  static fromValues(
    a00, a01, a02, a03,
    a10, a11, a12, a13,
    a20, a21, a22, a23,
    a30, a31, a32, a33,
  ) {
    const matrix = new Matrix4();
    const v = matrix.values;

    v[0] = a00; v[4] = a01; v[8] = a02; v[12] = a03;
    v[1] = a10; v[5] = a11; v[9] = a12; v[13] = a13;
    v[2] = a20; v[6] = a21; v[10] = a22; v[14] = a23;
    v[3] = a30; v[7] = a31; v[11] = a32; v[15] = a33;

    return matrix;
  }

  /**
   * Sets the elements of the matrix.
   * @param {Number} a00 The element at row 0 and column 0.
   * @param {Number} a01 The element at row 0 and column 1.
   * @param {Number} a02 The element at row 0 and column 2.
   * @param {Number} a03 The element at row 0 and column 3.
   * @param {Number} a10 The element at row 1 and column 0.
   * @param {Number} a11 The element at row 1 and column 1.
   * @param {Number} a12 The element at row 1 and column 2.
   * @param {Number} a13 The element at row 1 and column 3.
   * @param {Number} a20 The element at row 2 and column 0.
   * @param {Number} a21 The element at row 2 and column 1.
   * @param {Number} a22 The element at row 2 and column 2.
   * @param {Number} a23 The element at row 2 and column 3.
   * @param {Number} a30 The element at row 3 and column 0.
   * @param {Number} a31 The element at row 3 and column 1.
   * @param {Number} a32 The element at row 3 and column 2.
   * @param {Number} a33 The element at row 3 and column 3.
   * @returns {Matrix4} The matrix.
   */
  set(
    a00, a01, a02, a03,
    a10, a11, a12, a13,
    a20, a21, a22, a23,
    a30, a31, a32, a33,
  ) {
    const v = this.values;

    v[0] = a00; v[4] = a01; v[8] = a02; v[12] = a03;
    v[1] = a10; v[5] = a11; v[9] = a12; v[13] = a13;
    v[2] = a20; v[6] = a21; v[10] = a22; v[14] = a23;
    v[3] = a30; v[7] = a31; v[11] = a32; v[15] = a33;

    return this;
  }

  /**
   * Copies the elements from another matrix.
   * @param {Matrix4} matrix The matrix to copy the elements from.
   * @returns {Matrix4} The matrix.
   */
  copy(matrix) {
    const v = this.values;

    [
      v[0], v[1], v[2], v[3],
      v[4], v[5], v[6], v[7],
      v[8], v[9], v[10], v[11],
      v[12], v[13], v[14], v[15],
    ] = matrix.values;

    return this;
  }
}

/**
 * An identity Matrix4.
 */
Matrix4.identity = Matrix4.fromValues(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
);

/**
 * A Matrix4 with all elements equal to zero.
 */
Matrix4.zero = Matrix4.fromValues(
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
);
