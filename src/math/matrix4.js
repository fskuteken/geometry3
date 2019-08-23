export default class Matrix4 {
  constructor() {
    this.values = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1,
    ];
  }

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
}

Matrix4.identity = Matrix4.fromValues(
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
);

Matrix4.zero = Matrix4.fromValues(
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
);
