/**
 * A 4x4 matrix.
 * Its elements are stored in column-major order.
 */
class Matrix4 {
  /**
   * Creates a new identity Matrix4.
   */
  constructor() {
    this.elements = [
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
    const t = matrix.elements;

    t[0] = a00; t[4] = a01; t[8] = a02; t[12] = a03;
    t[1] = a10; t[5] = a11; t[9] = a12; t[13] = a13;
    t[2] = a20; t[6] = a21; t[10] = a22; t[14] = a23;
    t[3] = a30; t[7] = a31; t[11] = a32; t[15] = a33;

    return matrix;
  }

  /**
   * Compares if the elements of the matrix are equal to the elements of another matrix.
   * @param {Matrix4} matrix The matrix to compare the components to.
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
    const t = this.elements;

    t[0] = a00; t[4] = a01; t[8] = a02; t[12] = a03;
    t[1] = a10; t[5] = a11; t[9] = a12; t[13] = a13;
    t[2] = a20; t[6] = a21; t[10] = a22; t[14] = a23;
    t[3] = a30; t[7] = a31; t[11] = a32; t[15] = a33;

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
    const t = this.elements;

    [
      t[0], t[1], t[2], t[3],
      t[4], t[5], t[6], t[7],
      t[8], t[9], t[10], t[11],
      t[12], t[13], t[14], t[15],
    ] = matrix.elements;

    return this;
  }

  /**
   * Creates a clone of the matrix.
   * @returns {Matrix4} The cloned matrix.
   */
  clone() {
    const t = this.elements;

    return Matrix4.fromValues(
      t[0], t[4], t[8], t[12],
      t[1], t[5], t[9], t[13],
      t[2], t[6], t[10], t[14],
      t[3], t[7], t[11], t[15],
    );
  }

  /**
   * Calculates the determinant of the matrix.
   * @returns {Number} The determinant of the matrix.
   */
  determinant() {
    const t = this.elements;

    const a00 = t[0], a01 = t[1], a02 = t[2], a03 = t[3];
    const a10 = t[4], a11 = t[5], a12 = t[6], a13 = t[7];
    const a20 = t[8], a21 = t[9], a22 = t[10], a23 = t[11];
    const a30 = t[12], a31 = t[13], a32 = t[14], a33 = t[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }

  /**
   * Transposes the matrix.
   * @returns {Matrix4} The matrix.
   */
  transpose() {
    return this.set(...this.elements);
  }

  /**
   * Inverts the matrix.
   * @returns {Matrix4} The matrix.
   */
  invert() {
    const t = this.elements;

    const a00 = t[0], a01 = t[4], a02 = t[8], a03 = t[12];
    const a10 = t[1], a11 = t[5], a12 = t[9], a13 = t[13];
    const a20 = t[2], a21 = t[6], a22 = t[10], a23 = t[14];
    const a30 = t[3], a31 = t[7], a32 = t[11], a33 = t[15];

    const b00 = a00 * a11 - a01 * a10;
    const b01 = a00 * a12 - a02 * a10;
    const b02 = a00 * a13 - a03 * a10;
    const b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11;
    const b05 = a02 * a13 - a03 * a12;
    const b06 = a20 * a31 - a21 * a30;
    const b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30;
    const b09 = a21 * a32 - a22 * a31;
    const b10 = a21 * a33 - a23 * a31;
    const b11 = a22 * a33 - a23 * a32;

    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (det !== 0.0) {
      det = 1.0 / det;

      t[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      t[4] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      t[8] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      t[12] = (a22 * b04 - a21 * b05 - a23 * b03) * det;

      t[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      t[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      t[9] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      t[13] = (a20 * b05 - a22 * b02 + a23 * b01) * det;

      t[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      t[6] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      t[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      t[14] = (a21 * b02 - a20 * b04 - a23 * b00) * det;

      t[3] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      t[7] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      t[11] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      t[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    }

    return this;
  }

  /**
   * Post-multiplies another matrix, and sets this matrix to the result.
   * @param {Matrix4} a The matrix to post-multiply with.
   * @returns {Matrix4} The matrix.
   */
  multiply(matrix) {
    const m = matrix.elements;
    const t = this.elements;

    const a00 = t[0], a01 = t[4], a02 = t[8], a03 = t[12];
    const a10 = t[1], a11 = t[5], a12 = t[9], a13 = t[13];
    const a20 = t[2], a21 = t[6], a22 = t[10], a23 = t[14];
    const a30 = t[3], a31 = t[7], a32 = t[11], a33 = t[15];

    const b00 = m[0], b01 = m[4], b02 = m[8], b03 = m[12];
    const b10 = m[1], b11 = m[5], b12 = m[9], b13 = m[13];
    const b20 = m[2], b21 = m[6], b22 = m[10], b23 = m[14];
    const b30 = m[3], b31 = m[7], b32 = m[11], b33 = m[15];

    t[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
    t[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
    t[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
    t[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

    t[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
    t[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
    t[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
    t[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

    t[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
    t[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
    t[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
    t[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

    t[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
    t[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
    t[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
    t[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  /**
   * Pre-multiplies another matrix, and sets this matrix to the result.
   * @param {Matrix4} a The matrix to pre-multiply with.
   * @returns {Matrix4} The matrix.
   */
  premultiply(matrix) {
    const m = matrix.elements;
    const t = this.elements;

    const a00 = m[0], a01 = m[4], a02 = m[8], a03 = m[12];
    const a10 = m[1], a11 = m[5], a12 = m[9], a13 = m[13];
    const a20 = m[2], a21 = m[6], a22 = m[10], a23 = m[14];
    const a30 = m[3], a31 = m[7], a32 = m[11], a33 = m[15];

    const b00 = t[0], b01 = t[4], b02 = t[8], b03 = t[12];
    const b10 = t[1], b11 = t[5], b12 = t[9], b13 = t[13];
    const b20 = t[2], b21 = t[6], b22 = t[10], b23 = t[14];
    const b30 = t[3], b31 = t[7], b32 = t[11], b33 = t[15];

    t[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
    t[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
    t[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
    t[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

    t[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
    t[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
    t[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
    t[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

    t[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
    t[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
    t[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
    t[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

    t[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
    t[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
    t[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
    t[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  /**
   * Sets the matrix to the multiplication of two matrices.
   * @param {Matrix4} a The first matrix.
   * @param {Matrix4} b The second matrix.
   * @returns {Matrix4} The matrix.
   */
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const t = this.elements;

    const a00 = ae[0], a01 = ae[4], a02 = ae[8], a03 = ae[12];
    const a10 = ae[1], a11 = ae[5], a12 = ae[9], a13 = ae[13];
    const a20 = ae[2], a21 = ae[6], a22 = ae[10], a23 = ae[14];
    const a30 = ae[3], a31 = ae[7], a32 = ae[11], a33 = ae[15];

    const b00 = be[0], b01 = be[4], b02 = be[8], b03 = be[12];
    const b10 = be[1], b11 = be[5], b12 = be[9], b13 = be[13];
    const b20 = be[2], b21 = be[6], b22 = be[10], b23 = be[14];
    const b30 = be[3], b31 = be[7], b32 = be[11], b33 = be[15];

    t[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
    t[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
    t[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
    t[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

    t[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
    t[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
    t[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
    t[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

    t[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
    t[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
    t[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
    t[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

    t[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
    t[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
    t[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
    t[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;

    return this;
  }

  /**
   * Sets the matrix to a rotation matrix around the x axis.
   * @param {Number} theta The angle of the rotation in radians.
   * @returns {Matrix4} The matrix.
   */
  makeRotationX(theta) {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return this.set(
      1, 0, 0, 0,
      0, cos, -sin, 0,
      0, sin, cos, 0,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a rotation matrix around the y axis.
   * @param {Number} theta The angle of the rotation in radians.
   * @returns {Matrix4} The matrix.
   */
  makeRotationY(theta) {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return this.set(
      cos, 0, sin, 0,
      0, 1, 0, 0,
      -sin, 0, cos, 0,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a rotation matrix around the z axis.
   * @param {Number} theta The angle of the rotation in radians.
   * @returns {Matrix4} The matrix.
   */
  makeRotationZ(theta) {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return this.set(
      cos, -sin, 0, 0,
      sin, cos, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a scale matrix.
   * @param {Vector3} scale The vector containing the scale values.
   * @returns {Matrix4} The matrix.
   */
  makeScale(scale) {
    return this.set(
      scale.x, 0, 0, 0,
      0, scale.y, 0, 0,
      0, 0, scale.z, 0,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a scale matrix.
   * @param {Number} x The scale along the x axis.
   * @param {Number} y The scale along the y axis.
   * @param {Number} z The scale along the z axis.
   * @returns {Matrix4} The matrix.
   */
  makeScaleValues(x, y, z) {
    return this.set(
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a translation matrix.
   * @param {Vector3} translation The vector containing the translation values.
   * @returns {Matrix4} The matrix.
   */
  makeTranslation(translation) {
    return this.set(
      1, 0, 0, translation.x,
      0, 1, 0, translation.y,
      0, 0, 1, translation.z,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a translation matrix.
   * @param {Number} x The translation along the x axis.
   * @param {Number} y The translation along the y axis.
   * @param {Number} z The translation along the z axis.
   * @returns {Matrix4} The matrix.
   */
  makeTranslationValues(x, y, z) {
    return this.set(
      1, 0, 0, x,
      0, 1, 0, y,
      0, 0, 1, z,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to an orthographic projection matrix.
   * @param {Number} left The left clipping plane distance.
   * @param {Number} right The right clipping plane distance.
   * @param {Number} top The top clipping plane distance.
   * @param {Number} bottom The bottom clipping plane distance.
   * @param {Number} near The near clipping plane distance.
   * @param {Number} far The far clipping plane distance.
   * @returns {Matrix4} The matrix.
   */
  makeOrthographic(left, right, top, bottom, near, far) {
    const width = 1 / (right - left);
    const height = 1 / (top - bottom);
    const depth = 1 / (far - near);

    return this.set(
      2 * width, 0, 0, -(right + left) * width,
      0, 2 * height, 0, -(top + bottom) * height,
      0, 0, -2 * depth, -(far + near) * depth,
      0, 0, 0, 1,
    );
  }

  /**
   * Sets the matrix to a perspective projection matrix.
   * @param {Number} left The left clipping plane distance.
   * @param {Number} right The right clipping plane distance.
   * @param {Number} top The top clipping plane distance.
   * @param {Number} bottom The bottom clipping plane distance.
   * @param {Number} near The near clipping plane distance.
   * @param {Number} far The far clipping plane distance.
   * @returns {Matrix4} The matrix.
   */
  makePerspective(left, right, top, bottom, near, far) {
    const width = right - left;
    const height = top - bottom;
    const depth = far - near;

    const x = (2 * near) / width;
    const y = (2 * near) / height;

    const a = (right + left) / width;
    const b = (top + bottom) / height;
    const c = -(far + near) / depth;
    const d = -(2 * far * near) / depth;

    return this.set(
      x, 0, a, 0,
      0, y, b, 0,
      0, 0, c, d,
      0, 0, -1, 0,
    );
  }

  /**
   * Sets the matrix to a view matrix that looks at a target.
   * @param {Vector3} source The position to translate to.
   * @param {Vector3} target The target to look at.
   * @param {Vector3} up The up direction.
   * @returns {Vector3} The matrix.
   */
  lookAt(source, target, up) {
    let ix, iy, iz;
    let kx, ky, kz;
    let length;

    kx = source.x - target.x;
    ky = source.y - target.y;
    kz = source.z - target.z;

    length = Math.sqrt(kx * kx + ky * ky + kz * kz);

    kx /= length;
    ky /= length;
    kz /= length;

    ix = up.y * kz - up.z * ky;
    iy = up.z * kx - up.x * kz;
    iz = up.x * ky - up.y * kx;

    length = Math.sqrt(ix * ix + iy * iy + iz * iz);

    ix /= length;
    iy /= length;
    iz /= length;

    const jx = ky * iz - kz * iy;
    const jy = kz * ix - kx * iz;
    const jz = kx * iy - ky * ix;

    const tx = -ix * source.x - iy * source.y - iz * source.z;
    const ty = -jx * source.x - jy * source.y - jz * source.z;
    const tz = -kx * source.x - ky * source.y - kz * source.z;

    return this.set(
      ix, iy, iz, tx,
      jx, jy, jz, ty,
      kx, ky, kz, tz,
      0, 0, 0, 1,
    );
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


export default Matrix4;
