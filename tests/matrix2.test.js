import Matrix2 from '../src/matrix2';

describe('Matrix2', () => {
  describe('constructor', () => {
    it('initializes a new Matrix2 with identity values', () => {
      const matrix = new Matrix2();

      expect(matrix.elements).toEqual([
        1, 0,
        0, 1,
      ]);
    });
  });

  describe('.fromValues', () => {
    it('initializes a new Matrix2 from the values', () => {
      const matrix = Matrix2.fromValues(1, 2, 3, 4);

      expect(matrix.elements).toEqual([
        1, 3,
        2, 4,
      ]);
    });
  });

  describe('#equals', () => {
    describe('when all elements of the matrices are equal', () => {
      it('returns true', () => {
        const values = [1, 2, 3, 4];
        const matrix = Matrix2.fromValues(...values);
        const matrixToCompare = Matrix2.fromValues(...values);

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(true);
      });
    });

    describe('when any elements of the matrices are not equal', () => {
      it('returns false', () => {
        const matrix = Matrix2.fromValues(1, 2, 3, 4);
        const matrixToCompare = Matrix2.fromValues(1, 2, 3, 5);

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(false);
      });
    });
  });

  describe('#set', () => {
    it('sets the values of the elements of the matrix', () => {
      const matrix = new Matrix2();

      matrix.set(1, 2, 3, 4);

      expect(matrix.elements).toEqual([
        1, 3,
        2, 4,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix2();

      const result = matrix.set(1, 2, 3, 4);

      expect(result).toBe(matrix);
    });
  });

  describe('#setIdentity', () => {
    it('sets the elements of the matrix to the identity', () => {
      const matrix = Matrix2.fromValues(0, 0, 0, 0);

      matrix.setIdentity();

      expect(matrix.elements).toEqual([
        1, 0,
        0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix2();

      const result = matrix.setIdentity();

      expect(result).toBe(matrix);
    });
  });

  describe('#copy', () => {
    it('copies the elements of another matrix', () => {
      const matrix = new Matrix2();
      const matrixToCopy = Matrix2.fromValues(1, 2, 3, 4);

      matrix.copy(matrixToCopy);

      expect(matrix.elements).toEqual(matrixToCopy.elements);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix2();
      const matrixToCopy = new Matrix2();

      const result = matrix.copy(matrixToCopy);

      expect(result).toBe(matrix);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the matrix', () => {
      const matrix = Matrix2.fromValues(1, 2, 3, 4);

      const result = matrix.clone();

      expect(result.elements).toEqual(matrix.elements);
      expect(result).not.toBe(matrix);
    });
  });

  describe('#transpose', () => {
    it('transposes the matrix', () => {
      const matrix = Matrix2.fromValues(
        1, 2,
        3, 4,
      );

      matrix.transpose();

      expect(matrix.elements).toEqual([
        1, 2,
        3, 4,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix2();

      const result = matrix.transpose();

      expect(result).toBe(matrix);
    });
  });

  describe('constants', () => {
    describe('identity', () => {
      it('is a 2x2 identity matrix', () => {
        expect(Matrix2.identity.elements).toEqual([
          1, 0,
          0, 1,
        ]);
      });
    });

    describe('zero', () => {
      it('has all elements equal to zero', () => {
        expect(Matrix2.zero.elements).toEqual([
          0, 0,
          0, 0,
        ]);
      });
    });
  });
});
