import Matrix4 from '../../src/math/matrix4';
import Vector3 from '../../src/math/vector3';

describe('Matrix4', () => {
  describe('constructor', () => {
    it('initializes a new Matrix4 with identity values', () => {
      const matrix = new Matrix4();

      expect(matrix.elements).toEqual([
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

      expect(matrix.elements).toEqual([
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
    it('sets the values of the elements of the matrix', () => {
      const matrix = new Matrix4();

      matrix.set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      expect(matrix.elements).toEqual([
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
    it('copies the elements of another matrix', () => {
      const matrix = new Matrix4();
      const matrixToCopy = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

      matrix.copy(matrixToCopy);

      expect(matrix.elements).toEqual(matrixToCopy.elements);
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

      expect(matrix.elements).toEqual([
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

      expect(result.elements).toEqual(matrix.elements);
      expect(result).not.toBe(matrix);
    });
  });

  describe('#multiply', () => {
    it('sets the matrix to the multiplication of itself and another matrix', () => {
      const matrix = Matrix4.fromValues(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1);
      const other = Matrix4.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

      matrix.multiply(other);

      expect(matrix.elements).toEqual([
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

      expect(matrix.elements).toEqual([
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

      expect(matrix.elements).toEqual([
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

  describe('#makeRotationX', () => {
    it('sets the matrix to a rotation matrix around the x axis', () => {
      const matrix = new Matrix4();
      const theta = Math.PI;
      const sin = Math.sin(theta);
      const cos = Math.cos(theta);

      matrix.makeRotationX(theta);

      expect(matrix.elements).toEqual([
        1, 0, 0, 0,
        0, cos, sin, 0,
        0, -sin, cos, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeRotationX(0);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeRotationY', () => {
    it('sets the matrix to a rotation matrix around the y axis', () => {
      const matrix = new Matrix4();
      const theta = Math.PI;
      const sin = Math.sin(theta);
      const cos = Math.cos(theta);

      matrix.makeRotationY(theta);

      expect(matrix.elements).toEqual([
        cos, 0, -sin, 0,
        0, 1, 0, 0,
        sin, 0, cos, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeRotationY(0);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeRotationZ', () => {
    it('sets the matrix to a rotation matrix around the z axis', () => {
      const matrix = new Matrix4();
      const theta = Math.PI;
      const sin = Math.sin(theta);
      const cos = Math.cos(theta);

      matrix.makeRotationZ(theta);

      expect(matrix.elements).toEqual([
        cos, sin, 0, 0,
        -sin, cos, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeRotationZ(0);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeScale', () => {
    it('sets the matrix to a scale matrix', () => {
      const matrix = new Matrix4();
      const scale = new Vector3(2, 3, 4);

      matrix.makeScale(scale);

      expect(matrix.elements).toEqual([
        scale.x, 0, 0, 0,
        0, scale.y, 0, 0,
        0, 0, scale.z, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const scale = new Vector3();

      const result = matrix.makeScale(scale);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeScaleValues', () => {
    it('sets the matrix to a scale matrix', () => {
      const matrix = new Matrix4();
      const x = 2, y = 3, z = 4;

      matrix.makeScaleValues(x, y, z);

      expect(matrix.elements).toEqual([
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeScaleValues(2, 3, 4);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeTranslation', () => {
    it('sets the matrix to a translation matrix', () => {
      const matrix = new Matrix4();
      const translation = new Vector3(2, 3, 4);

      matrix.makeTranslation(translation);

      expect(matrix.elements).toEqual([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        translation.x, translation.y, translation.z, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();
      const scale = new Vector3();

      const result = matrix.makeScale(scale);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeTranslationValues', () => {
    it('sets the matrix to a translation matrix', () => {
      const matrix = new Matrix4();
      const x = 2, y = 3, z = 4;

      matrix.makeTranslationValues(x, y, z);

      expect(matrix.elements).toEqual([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeTranslationValues(2, 3, 4);

      expect(result).toBe(matrix);
    });
  });

  describe('#makeOrthographic', () => {
    it('sets the matrix to an orthographic projection matrix', () => {
      const matrix = new Matrix4();

      matrix.makeOrthographic(-2, 2, 4, -4, -8, 8);

      expect(matrix.elements).toEqual([
        0.5, 0, 0, 0,
        0, 0.25, 0, 0,
        0, 0, -0.125, 0,
        -0, -0, -0, 1,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makeOrthographic(-1, 1, 1, -1, -1, 1);

      expect(result).toBe(matrix);
    });
  });

  describe('#makePerspective', () => {
    it('sets the matrix to a perspective projection matrix', () => {
      const matrix = new Matrix4();

      matrix.makePerspective(-2, 2, 4, -4, -8, 8);

      expect(matrix.elements).toEqual([
        -4, 0, 0, 0,
        0, -2, 0, 0,
        0, 0, -0, -1,
        0, 0, 8, 0,
      ]);
    });

    it('returns the matrix', () => {
      const matrix = new Matrix4();

      const result = matrix.makePerspective(-1, 1, 1, -1, -1, 1);

      expect(result).toBe(matrix);
    });
  });

  describe('constants', () => {
    describe('identity', () => {
      it('is a 4x4 identity matrix', () => {
        expect(Matrix4.identity.elements).toEqual([
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1,
        ]);
      });
    });

    describe('zero', () => {
      it('has all elements equal to zero', () => {
        expect(Matrix4.zero.elements).toEqual([
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
          0, 0, 0, 0,
        ]);
      });
    });
  });
});
