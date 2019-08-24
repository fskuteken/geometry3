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
   * Compares if the elements of the matrix are equal to the elements of another matrix.
   * @param {Matrix4} matrix The matrix to compare the components to.
   * @returns {Boolean} A value indicating whether all the elements are equal.
   */
  equals(matrix) {
    const m = matrix.values;
    const t = this.values;

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
      && m[9] === t[9]
      && m[10] === t[10]
      && m[11] === t[11]
      && m[12] === t[12]
      && m[13] === t[13]
      && m[14] === t[14]
      && m[15] === t[15]
    );
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
   * Sets the elements of the matrix to the identity.
   * @returns {Matrix4} The matrix.
   */
  setIdentity() {
    return this.set(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    );
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

  /**
   * Creates a clone of the matrix.
   * @returns {Matrix4} The cloned matrix.
   */
  clone() {
    const v = this.values;

    return Matrix4.fromValues(
      v[0], v[4], v[8], v[12],
      v[1], v[5], v[9], v[13],
      v[2], v[6], v[10], v[14],
      v[3], v[7], v[11], v[15],
    );
  }

  /**
   * Sets the matrix to the multiplication of two matrices.
   * @param {Matrix4} a The first matrix.
   * @param {Matrix4} b The second matrix.
   * @returns {Matrix4} The matrix.
   */
  multiplyMatrices(a, b) {
    const av = a.values;
    const bv = b.values;
    const v = this.values;

    const a00 = av[0], a01 = av[4], a02 = av[8], a03 = av[12];
    const a10 = av[1], a11 = av[5], a12 = av[9], a13 = av[13];
    const a20 = av[2], a21 = av[6], a22 = av[10], a23 = av[14];
    const a30 = av[3], a31 = av[7], a32 = av[11], a33 = av[15];

    const b00 = bv[0], b01 = bv[4], b02 = bv[8], b03 = bv[12];
    const b10 = bv[1], b11 = bv[5], b12 = bv[9], b13 = bv[13];
    const b20 = bv[2], b21 = bv[6], b22 = bv[10], b23 = bv[14];
    const b30 = bv[3], b31 = bv[7], b32 = bv[11], b33 = bv[15];

    v[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
    v[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
    v[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
    v[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

    v[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
    v[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
    v[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
    v[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

    v[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
    v[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
    v[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
    v[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

    v[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
    v[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
    v[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
    v[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

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
