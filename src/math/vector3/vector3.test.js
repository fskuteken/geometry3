import Vector3 from './vector3';

describe('Vector3', () => {
  describe('constructor', () => {
    describe('when x, y and z arguments are supplied', () => {
      it('initializes a new Vector3 with the values', () => {
        const x = 1;
        const y = 2;
        const z = 3;

        const vector = new Vector3(x, y, z);

        expect(vector).toMatchObject({ x, y, z });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Vector3 with default values', () => {
        const vector = new Vector3();

        expect(vector).toMatchObject({ x: 0, y: 0, z: 0 });
      });
    });
  });

  describe('#set', () => {
    it('sets the x, y and z values of the vector', () => {
      const x = 1;
      const y = 2;
      const z = 3;
      const vector = new Vector3();

      vector.set(x, y, z);

      expect(vector).toMatchObject({ x, y, z });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.set(1, 2, 3);

      expect(result).toEqual(vector);
    });
  });

  describe('#copy', () => {
    it('copies the x, y and z values from another vector', () => {
      const vector = new Vector3();
      const vectorToCopy = new Vector3(1, 2, 3);

      vector.copy(vectorToCopy);

      expect(vector).toMatchObject(vectorToCopy);
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const vectorToCopy = new Vector3();

      const result = vector.copy(vectorToCopy);

      expect(result).toEqual(vector);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the vector', () => {
      const vector = new Vector3(1, 2, 3);

      const result = vector.clone();

      expect(result).toMatchObject(vector);
      expect(result).not.toBe(vector);
    });
  });

  describe('#negate', () => {
    it('negates the values of the vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.negate();

      expect(vector).toMatchObject({ x: -1, y: -2, z: -3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.negate();

      expect(result).toBe(vector);
    });
  });

  describe('#negateVector', () => {
    it('negates the values of another vector', () => {
      const vector = new Vector3();
      const vectorToNegate = new Vector3(1, 2, 3);

      vector.negateVector(vectorToNegate);

      expect(vector).toMatchObject({ x: -1, y: -2, z: -3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const vectorToNegate = new Vector3();

      const result = vector.negateVector(vectorToNegate);

      expect(result).toBe(vector);
    });
  });

  describe('#add', () => {
    it('adds the values from another vector', () => {
      const vector = new Vector3(1, 2, 3);
      const vectorToAdd = new Vector3(4, 5, 6);

      vector.add(vectorToAdd);

      expect(vector).toMatchObject({ x: 5, y: 7, z: 9 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const vectorToAdd = new Vector3();

      const result = vector.add(vectorToAdd);

      expect(result).toBe(vector);
    });
  });

  describe('#addScalar', () => {
    it('adds a scalar to the vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.addScalar(4);

      expect(vector).toMatchObject({ x: 5, y: 6, z: 7 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.addScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#addValues', () => {
    it('adds values to the vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.addValues(4, 5, 6);

      expect(vector).toMatchObject({ x: 5, y: 7, z: 9 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.addValues(1, 2, 3);

      expect(result).toBe(vector);
    });
  });

  describe('#addVectors', () => {
    it('sets the vector to the addition of two vectors', () => {
      const vector = new Vector3();
      const u = new Vector3(1, 2, 3);
      const v = new Vector3(4, 5, 6);

      vector.addVectors(u, v);

      expect(vector).toMatchObject({ x: 5, y: 7, z: 9 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const u = new Vector3();
      const v = new Vector3();

      const result = vector.addVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#subtract', () => {
    it('subtracts the values from another vector', () => {
      const vector = new Vector3(1, 2, 3);
      const vectorToSubtract = new Vector3(4, 5, 6);

      vector.subtract(vectorToSubtract);

      expect(vector).toMatchObject({ x: -3, y: -3, z: -3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const vectorToSubtract = new Vector3();

      const result = vector.subtract(vectorToSubtract);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractScalar', () => {
    it('subtracts a scalar to the vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.subtractScalar(4);

      expect(vector).toMatchObject({ x: -3, y: -2, z: -1 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.subtractScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#subtractValues', () => {
    it('subtracts values to the vector', () => {
      const vector = new Vector3(1, 2, 3);

      vector.subtractValues(4, 5, 6);

      expect(vector).toMatchObject({ x: -3, y: -3, z: -3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.subtractValues(1, 2, 3);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractVectors', () => {
    it('sets the vector to the difference of two vectors', () => {
      const vector = new Vector3();
      const u = new Vector3(1, 2, 3);
      const v = new Vector3(4, 5, 6);

      vector.subtractVectors(u, v);

      expect(vector).toMatchObject({ x: -3, y: -3, z: -3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();
      const u = new Vector3();
      const v = new Vector3();

      const result = vector.subtractVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#multiplyScalar', () => {
    it('multiplies the vector by a scalar', () => {
      const vector = new Vector3(1, 2, 3);

      vector.multiplyScalar(2);

      expect(vector).toMatchObject({ x: 2, y: 4, z: 6 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.multiplyScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#divideScalar', () => {
    it('divides the vector by a scalar', () => {
      const vector = new Vector3(2, 4, 6);

      vector.divideScalar(2);

      expect(vector).toMatchObject({ x: 1, y: 2, z: 3 });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.divideScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#length', () => {
    it('returns the length of the vector', () => {
      const vector = new Vector3(3, 4, 5);

      const result = vector.length();

      expect(result).toEqual(Math.sqrt(50));
    });
  });

  describe('#lengthSquared', () => {
    it('returns the square of the length of the vector', () => {
      const vector = new Vector3(3, 4, 5);

      const result = vector.lengthSquared();

      expect(result).toEqual(50);
    });
  });

  describe('#normalize', () => {
    describe('when the length of the vector is zero', () => {
      it('does nothing', () => {
        const vector = new Vector3(0, 0, 0);

        vector.normalize();

        expect(vector).toMatchObject({ x: 0, y: 0, z: 0 });
      });
    });

    describe('when the length of the vector is not zero', () => {
      it('normalizes the vector', () => {
        const vector = new Vector3(3, 4, 5);
        const length = Math.sqrt(50);

        vector.normalize();

        expect(vector).toMatchObject({ x: 3 / length, y: 4 / length, z: 5 / length });
      });
    });

    it('returns the vector', () => {
      const vector = new Vector3();

      const result = vector.normalize();

      expect(result).toBe(vector);
    });
  });

  describe('constants', () => {
    describe('zero', () => {
      it('has x, y and z components equal to zero', () => {
        expect(Vector3.zero).toMatchObject({ x: 0, y: 0, z: 0 });
      });
    });

    describe('one', () => {
      it('has x, y and z components equal to one', () => {
        expect(Vector3.one).toMatchObject({ x: 1, y: 1, z: 1 });
      });
    });

    describe('unitX', () => {
      it('is a unit vector along the x axis', () => {
        expect(Vector3.unitX).toMatchObject({ x: 1, y: 0, z: 0 });
      });
    });

    describe('unitY', () => {
      it('is a unit vector along the y axis', () => {
        expect(Vector3.unitY).toMatchObject({ x: 0, y: 1, z: 0 });
      });
    });

    describe('unitZ', () => {
      it('is a unit vector along the z axis', () => {
        expect(Vector3.unitZ).toMatchObject({ x: 0, y: 0, z: 1 });
      });
    });
  });
});
