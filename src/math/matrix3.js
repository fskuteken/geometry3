export default class Matrix3 {
  constructor() {
    this.values = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ];
  }

  static fromValues(a00, a01, a02, a10, a11, a12, a20, a21, a22) {
    const matrix = new Matrix3();
    const v = matrix.values;

    v[0] = a00; v[3] = a01; v[6] = a02;
    v[1] = a10; v[4] = a11; v[7] = a12;
    v[2] = a20; v[5] = a21; v[8] = a22;

    return matrix;
  }
}

Matrix3.identity = Matrix3.fromValues(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
);

Matrix3.zero = Matrix3.fromValues(
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
);
