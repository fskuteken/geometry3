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

  describe('#equals', () => {
    describe('when all elements of the matrices are equal', () => {
      it('returns true', () => {
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const matrix = Matrix4.fromValues(...values);
        const matrixToCompare = Matrix4.fromValues(...values);

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(true);
      });
    });

    describe('when any elements of the matrices are not equal', () => {
      it('returns false', () => {
        const matrix = Matrix4.fromValues(
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        );
        const matrixToCompare = Matrix4.fromValues(
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0,
        );

        const result = matrix.equals(matrixToCompare);

        expect(result).toEqual(false);
      });
    });
  });

  describe('#set', () => {
    it('sets the values of the matrix', () => {
      const matrix = new Matrix4();

      matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      expect(matrix.values).toEqual([
        1, 5, 9, 13,
        2, 6, 10, 14,
        3, 7, 11, 15,
        4, 8, 12, 16,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

      expect(result).toBe(matrix);
    });
  });

  describe('#copy', () => {
    it('copies the values of another matrix', () => {
      const matrix = new Matrix4();
      const matrixToCopy = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

      matrix.copy(matrixToCopy);

      expect(matrix.values).toEqual(matrixToCopy.values);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const matrixToCopy = new Matrix4();

      const result = matrix.copy(matrixToCopy);

      expect(result).toBe(matrix);
    });
  });

  describe('#setIdentity', () => {
    it('sets the elements of the matrix to the identity', () => {
      const matrix = Matrix4.fromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

      matrix.setIdentity();

      expect(matrix.values).toEqual([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.setIdentity();

      expect(result).toBe(matrix);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the matrix', () => {
      const matrix = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      const result = matrix.clone();

      expect(result.values).toEqual(matrix.values);
      expect(result).not.toBe(matrix);
    });
  });

  describe('#multiply', () => {
    it('sets the matrix to the multiplication of itself and another matrix', () => {
      const matrix = Matrix4.fromValues(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1);
      const other = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      matrix.multiply(other);

      expect(matrix.values).toEqual([
        2, 10, 18, 13,
        4, 12, 20, 14,
        6, 14, 22, 15,
        8, 16, 24, 16,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const other = new Matrix4();

      const result = matrix.multiply(other);

      expect(result).toBe(matrix);
    });
  });

  describe('#premultiply', () => {
    it('sets the matrix to the multiplication of another matrix and itself', () => {
      const matrix = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
      const other = Matrix4.fromValues(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1);

      matrix.premultiply(other);

      expect(matrix.values).toEqual([
        2, 10, 18, 13,
        4, 12, 20, 14,
        6, 14, 22, 15,
        8, 16, 24, 16,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const other = new Matrix4();

      const result = matrix.premultiply(other);

      expect(result).toBe(matrix);
    });
  });

  describe('#multiplyMatrices', () => {
    it('sets the matrix to the multiplication of two matrices', () => {
      const matrix = new Matrix4();
      const a = Matrix4.fromValues(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1);
      const b = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      matrix.multiplyMatrices(a, b);

      expect(matrix.values).toEqual([
        2, 10, 18, 13,
        4, 12, 20, 14,
        6, 14, 22, 15,
        8, 16, 24, 16,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const a = new Matrix4();
      const b = new Matrix4();

      const result = matrix.multiplyMatrices(a, b);

      expect(result).toBe(matrix);
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
