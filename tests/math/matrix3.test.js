import Matrix3 from '../../src/math/matrix3';

describe('Matrix3', () => {
  describe('constructor', () => {
    it('initializes a new Matrix3 with identity values', () => {
      const matrix = new Matrix3();

      expect(matrix.values).toEqual([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ]);
    });
  });

  describe('.fromValues', () => {
    it('initializes a new Matrix3 from the values', () => {
      const matrix = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

      expect(matrix.values).toEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
      ]);
    });
  });

  describe('#set', () => {
    it('sets the values of the matrix', () => {
      const matrix = new Matrix3();

      matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9);

      expect(matrix.values).toEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix3();

      const result = matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9);

      expect(result).toBe(matrix);
    });
  });

  describe('#copy', () => {
    it('copies the values of another matrix', () => {
      const matrix = new Matrix3();
      const matrixToCopy = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

      matrix.copy(matrixToCopy);

      expect(matrix.values).toEqual(matrixToCopy.values);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix3();
      const matrixToCopy = new Matrix3();

      const result = matrix.copy(matrixToCopy);

      expect(result).toBe(matrix);
    });
  });

  describe('constants', () => {
    describe('identity', () => {
      it('is a 3x3 identity matrix', () => {
        expect(Matrix3.identity.values).toEqual([
          1, 0, 0,
          0, 1, 0,
          0, 0, 1,
        ]);
      });
    });

    describe('zero', () => {
      it('has all values equal to zero', () => {
        expect(Matrix3.zero.values).toEqual([
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
        ]);
      });
    });
  });
});
