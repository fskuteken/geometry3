import Vector4 from './vector4';

describe('Vector4', () => {
  describe('constructor', () => {
    describe('when x, y, z and w arguments are supplied', () => {
      it('initializes a new Vector4 with the values', () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const w = 4;

        const vector = new Vector4(x, y, z, w);

        expect(vector).toMatchObject({
          x, y, z, w,
        });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Vector4 with default values', () => {
        const vector = new Vector4();

        expect(vector).toMatchObject({
          x: 0, y: 0, z: 0, w: 1,
        });
      });
    });
  });

  describe('#set', () => {
    it('sets the x, y, z and w values of the vector', () => {
      const x = 1;
      const y = 2;
      const z = 3;
      const w = 4;
      const vector = new Vector4();

      vector.set(x, y, z, w);

      expect(vector).toMatchObject({
        x, y, z, w,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.set(1, 2, 3, 4);

      expect(result).toEqual(vector);
    });
  });

  describe('#copy', () => {
    it('copies the x, y, z and w values from another vector', () => {
      const vector = new Vector4();
      const vectorToCopy = new Vector4(1, 2, 3, 4);

      vector.copy(vectorToCopy);

      expect(vector).toMatchObject(vectorToCopy);
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const vectorToCopy = new Vector4();

      const result = vector.copy(vectorToCopy);

      expect(result).toEqual(vector);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      const result = vector.clone();

      expect(result).toMatchObject(vector);
      expect(result).not.toBe(vector);
    });
  });

  describe('#negate', () => {
    it('negates the values of the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.negate();

      expect(vector).toMatchObject({
        x: -1, y: -2, z: -3, w: -4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.negate();

      expect(result).toBe(vector);
    });
  });

  describe('#negateVector', () => {
    it('negates the values of another vector', () => {
      const vector = new Vector4();
      const vectorToNegate = new Vector4(1, 2, 3, 4);

      vector.negateVector(vectorToNegate);

      expect(vector).toMatchObject({
        x: -1, y: -2, z: -3, w: -4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const vectorToNegate = new Vector4();

      const result = vector.negateVector(vectorToNegate);

      expect(result).toBe(vector);
    });
  });

  describe('#add', () => {
    it('adds the values from another vector', () => {
      const vector = new Vector4(1, 2, 3, 4);
      const vectorToAdd = new Vector4(5, 6, 7, 8);

      vector.add(vectorToAdd);

      expect(vector).toMatchObject({
        x: 6, y: 8, z: 10, w: 12,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const vectorToAdd = new Vector4();

      const result = vector.add(vectorToAdd);

      expect(result).toBe(vector);
    });
  });

  describe('#addScalar', () => {
    it('adds a scalar to the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.addScalar(4);

      expect(vector).toMatchObject({
        x: 5, y: 6, z: 7, w: 8,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.addScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#addValues', () => {
    it('adds values to the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.addValues(5, 6, 7, 8);

      expect(vector).toMatchObject({
        x: 6, y: 8, z: 10, w: 12,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.addValues(1, 2, 3, 4);

      expect(result).toBe(vector);
    });
  });

  describe('#addVectors', () => {
    it('sets the vector to the addition of two vectors', () => {
      const vector = new Vector4();
      const u = new Vector4(1, 2, 3, 4);
      const v = new Vector4(5, 6, 7, 8);

      vector.addVectors(u, v);

      expect(vector).toMatchObject({
        x: 6, y: 8, z: 10, w: 12,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const u = new Vector4();
      const v = new Vector4();

      const result = vector.addVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#subtract', () => {
    it('subtracts the values from another vector', () => {
      const vector = new Vector4(1, 2, 3, 4);
      const vectorToSubtract = new Vector4(5, 6, 7, 8);

      vector.subtract(vectorToSubtract);

      expect(vector).toMatchObject({
        x: -4, y: -4, z: -4, w: -4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const vectorToSubtract = new Vector4();

      const result = vector.subtract(vectorToSubtract);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractScalar', () => {
    it('subtracts a scalar to the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.subtractScalar(4);

      expect(vector).toMatchObject({
        x: -3, y: -2, z: -1, w: 0,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.subtractScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#subtractValues', () => {
    it('subtracts values to the vector', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.subtractValues(5, 6, 7, 8);

      expect(vector).toMatchObject({
        x: -4, y: -4, z: -4, w: -4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.subtractValues(1, 2, 3, 4);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractVectors', () => {
    it('sets the vector to the difference of two vectors', () => {
      const vector = new Vector4();
      const u = new Vector4(1, 2, 3, 4);
      const v = new Vector4(5, 6, 7, 8);

      vector.subtractVectors(u, v);

      expect(vector).toMatchObject({
        x: -4, y: -4, z: -4, w: -4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();
      const u = new Vector4();
      const v = new Vector4();

      const result = vector.subtractVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#multiplyScalar', () => {
    it('multiplies the vector by a scalar', () => {
      const vector = new Vector4(1, 2, 3, 4);

      vector.multiplyScalar(2);

      expect(vector).toMatchObject({
        x: 2, y: 4, z: 6, w: 8,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.multiplyScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#divideScalar', () => {
    it('divides the vector by a scalar', () => {
      const vector = new Vector4(2, 4, 6, 8);

      vector.divideScalar(2);

      expect(vector).toMatchObject({
        x: 1, y: 2, z: 3, w: 4,
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.divideScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#length', () => {
    it('returns the length of the vector', () => {
      const vector = new Vector4(3, 4, 5, 6);

      const result = vector.length();

      expect(result).toEqual(Math.sqrt(86));
    });
  });

  describe('#lengthSquared', () => {
    it('returns the square of the length of the vector', () => {
      const vector = new Vector4(3, 4, 5, 6);

      const result = vector.lengthSquared();

      expect(result).toEqual(86);
    });
  });

  describe('#normalize', () => {
    describe('when the length of the vector is zero', () => {
      it('does nothing', () => {
        const vector = new Vector4(0, 0, 0, 0);

        vector.normalize();

        expect(vector).toMatchObject({
          x: 0, y: 0, z: 0, w: 0,
        });
      });
    });

    describe('when the length of the vector is not zero', () => {
      it('normalizes the vector', () => {
        const vector = new Vector4(3, 4, 5, 6);
        const length = Math.sqrt(86);

        vector.normalize();

        expect(vector).toMatchObject({
          x: 3 / length, y: 4 / length, z: 5 / length, w: 6 / length,
        });
      });
    });

    it('returns the vector', () => {
      const vector = new Vector4();

      const result = vector.normalize();

      expect(result).toBe(vector);
    });
  });

  describe('constants', () => {
    describe('zero', () => {
      it('has x, y, z and w components equal to zero', () => {
        expect(Vector4.zero).toMatchObject({
          x: 0, y: 0, z: 0, w: 0,
        });
      });
    });

    describe('one', () => {
      it('has x, y, z and w components equal to one', () => {
        expect(Vector4.one).toMatchObject({
          x: 1, y: 1, z: 1, w: 1,
        });
      });
    });

    describe('unitX', () => {
      it('is a unit vector along the x axis', () => {
        expect(Vector4.unitX).toMatchObject({
          x: 1, y: 0, z: 0, w: 0,
        });
      });
    });

    describe('unitY', () => {
      it('is a unit vector along the y axis', () => {
        expect(Vector4.unitY).toMatchObject({
          x: 0, y: 1, z: 0, w: 0,
        });
      });
    });

    describe('unitZ', () => {
      it('is a unit vector along the z axis', () => {
        expect(Vector4.unitZ).toMatchObject({
          x: 0, y: 0, z: 1, w: 0,
        });
      });
    });

    describe('unitW', () => {
      it('is a unit vector along the w axis', () => {
        expect(Vector4.unitW).toMatchObject({
          x: 0, y: 0, z: 0, w: 1,
        });
      });
    });
  });
});
