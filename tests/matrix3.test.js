import Matrix3 from '../src/matrix3';

describe('Matrix3', () => {
  describe('constructor', () => {
    it('initializes a new Matrix3 with identity values', () => {
      const matrix = new Matrix3();

      expect(matrix.elements).toEqual([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ]);
    });
  });

  describe('.fromValues', () => {
    it('initializes a new Matrix3 from the values', () => {
      const matrix = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

      expect(matrix.elements).toEqual([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
      ]);
    });
  });

  describe('#equals', () => {
    describe('when all elements of the matrices are equal', () => {
      it('returns true', () => {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const matrix = Matrix3.fromValues(...values);
        const matrixToCompare = Matrix3.fromValues(...values);

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(true);
      });
    });

    describe('when any elements of the matrices are not equal', () => {
      it('returns false', () => {
        const matrix = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
        const matrixToCompare = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 0);

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(false);
      });
    });
  });

  describe('#set', () => {
    it('sets the values of the elements of the matrix', () => {
      const matrix = new Matrix3();

      matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9);

      expect(matrix.elements).toEqual([
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

  describe('#setIdentity', () => {
    it('sets the elements of the matrix to the identity', () => {
      const matrix = Matrix3.fromValues(0, 0, 0, 0, 0, 0, 0, 0, 0);

      matrix.setIdentity();

      expect(matrix.elements).toEqual([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix3();

      const result = matrix.setIdentity();

      expect(result).toBe(matrix);
    });
  });

  describe('#copy', () => {
    it('copies the elements of another matrix', () => {
      const matrix = new Matrix3();
      const matrixToCopy = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

      matrix.copy(matrixToCopy);

      expect(matrix.elements).toEqual(matrixToCopy.elements);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix3();
      const matrixToCopy = new Matrix3();

      const result = matrix.copy(matrixToCopy);

      expect(result).toBe(matrix);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the matrix', () => {
      const matrix = Matrix3.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

      const result = matrix.clone();

      expect(result.elements).toEqual(matrix.elements);
      expect(result).not.toBe(matrix);
    });
  });

  describe('#transpose', () => {
    it('transposes the matrix', () => {
      const matrix = Matrix3.fromValues(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
      );

      matrix.transpose();

      expect(matrix.elements).toEqual([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix3();

      const result = matrix.transpose();

      expect(result).toBe(matrix);
    });
  });

  describe('constants', () => {
    describe('identity', () => {
      it('is a 3x3 identity matrix', () => {
        expect(Matrix3.identity.elements).toEqual([
          1, 0, 0,
          0, 1, 0,
          0, 0, 1,
        ]);
      });
    });

    describe('zero', () => {
      it('has all elements equal to zero', () => {
        expect(Matrix3.zero.elements).toEqual([
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
        ]);
      });
    });
  });
});
