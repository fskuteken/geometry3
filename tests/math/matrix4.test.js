import Matrix4 from '../../src/math/matrix4';

describe('Matrix4', () => {
  describe('constructor', () => {
    it('initializes a new Matrix4 with identity values', () => {
      const matrix = new Matrix4();

      expect(matrix.values).toEqual([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ]);
    });
  });

  describe('.fromValues', () => {
    it('initializes a new Matrix4 from the values', () => {
      const matrix = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      expect(matrix.values).toEqual([
        1, 5, 9, 13,
        2, 6, 10, 14,
        3, 7, 11, 15,
        4, 8, 12, 16,
      ]);
    });
  });

  describe('constants', () => {
    describe('identity', () => {
      it('is a 4x4 identity matrix', () => {
        expect(Matrix4.identity.values).toEqual([
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1,
        ]);
      });
    });

    describe('zero', () => {
      it('has all values equal to zero', () => {
        expect(Matrix4.zero.values).toEqual([
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
        ]);
      });
    });
  });
});
