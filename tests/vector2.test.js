import Vector2 from '../src/vector2';

describe('Vector2', () => {
  describe('constructor', () => {
    describe('when x and y arguments are supplied', () => {
      it('initializes a new Vector2 with the values', () => {
        const x = 1;
        const y = 2;

        const vector = new Vector2(x, y);

        expect(vector).toMatchObject({ x, y });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Vector2 with default values', () => {
        const vector = new Vector2();

        expect(vector).toMatchObject({ x: 0, y: 0 });
      });
    });
  });

  describe('#equals', () => {
    describe('when all components of the vectors are equal', () => {
      it('returns true', () => {
        const vector = new Vector2(1, 2);
        const vectorToCompare = new Vector2(1, 2);

        const result = vector.equals(vectorToCompare);

        expect(result).toEqual(true);
      });
    });

    describe('when any components of the vectors are not equal', () => {
      it('returns false', () => {
        const vector = new Vector2(1, 2);
        const vectorsToCompare = [
          new Vector2(0, 2), new Vector2(1, 0), new Vector2(0, 0),
        ];

        vectorsToCompare.forEach((vectorToCompare) => {
          const result = vector.equals(vectorToCompare);

          expect(result).toEqual(false);
        });
      });
    });
  });

  describe('#set', () => {
    it('sets the x and y values of the vector', () => {
      const x = 1;
      const y = 2;
      const vector = new Vector2();

      vector.set(x, y);

      expect(vector).toMatchObject({ x, y });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.set(1, 2);

      expect(result).toEqual(vector);
    });
  });

  describe('#setX', () => {
    it('sets the x value of the vector', () => {
      const x = 1;
      const vector = new Vector2();

      vector.setX(x);

      expect(vector.x).toEqual(x);
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.setX(1);

      expect(result).toBe(vector);
    });
  });

  describe('#setY', () => {
    it('sets the y value of the vector', () => {
      const y = 1;
      const vector = new Vector2();

      vector.setY(y);

      expect(vector.y).toEqual(y);
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.setY(1);

      expect(result).toBe(vector);
    });
  });

  describe('#copy', () => {
    it('copies the x and y values from another vector', () => {
      const vector = new Vector2();
      const vectorToCopy = new Vector2(1, 2);

      vector.copy(vectorToCopy);

      expect(vector).toMatchObject(vectorToCopy);
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const vectorToCopy = new Vector2();

      const result = vector.copy(vectorToCopy);

      expect(result).toEqual(vector);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the vector', () => {
      const vector = new Vector2(1, 2);

      const result = vector.clone();

      expect(result).toMatchObject(vector);
      expect(result).not.toBe(vector);
    });
  });

  describe('#negate', () => {
    it('negates the values of the vector', () => {
      const vector = new Vector2(1, 2);

      vector.negate();

      expect(vector).toMatchObject({ x: -1, y: -2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.negate();

      expect(result).toBe(vector);
    });
  });

  describe('#negateVector', () => {
    it('negates the values of another vector', () => {
      const vector = new Vector2();
      const vectorToNegate = new Vector2(1, 2);

      vector.negateVector(vectorToNegate);

      expect(vector).toMatchObject({ x: -1, y: -2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const vectorToNegate = new Vector2();

      const result = vector.negateVector(vectorToNegate);

      expect(result).toBe(vector);
    });
  });

  describe('#add', () => {
    it('adds the values from another vector', () => {
      const vector = new Vector2(1, 2);
      const vectorToAdd = new Vector2(3, 4);

      vector.add(vectorToAdd);

      expect(vector).toMatchObject({ x: 4, y: 6 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const vectorToAdd = new Vector2();

      const result = vector.add(vectorToAdd);

      expect(result).toBe(vector);
    });
  });

  describe('#addScalar', () => {
    it('adds a scalar to the vector', () => {
      const vector = new Vector2(1, 2);

      vector.addScalar(3);

      expect(vector).toMatchObject({ x: 4, y: 5 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.addScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#addValues', () => {
    it('adds values to the vector', () => {
      const vector = new Vector2(1, 2);

      vector.addValues(3, 4);

      expect(vector).toMatchObject({ x: 4, y: 6 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.addValues(1, 2);

      expect(result).toBe(vector);
    });
  });

  describe('#addVectors', () => {
    it('sets the vector to the addition of two vectors', () => {
      const vector = new Vector2();
      const u = new Vector2(1, 2);
      const v = new Vector2(3, 4);

      vector.addVectors(u, v);

      expect(vector).toMatchObject({ x: 4, y: 6 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const u = new Vector2();
      const v = new Vector2();

      const result = vector.addVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#subtract', () => {
    it('subtracts the values from another vector', () => {
      const vector = new Vector2(1, 2);
      const vectorToSubtract = new Vector2(3, 4);

      vector.subtract(vectorToSubtract);

      expect(vector).toMatchObject({ x: -2, y: -2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const vectorToSubtract = new Vector2();

      const result = vector.subtract(vectorToSubtract);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractScalar', () => {
    it('subtracts a scalar to the vector', () => {
      const vector = new Vector2(1, 2);

      vector.subtractScalar(3);

      expect(vector).toMatchObject({ x: -2, y: -1 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.subtractScalar(1);

      expect(result).toEqual(vector);
    });
  });

  describe('#subtractValues', () => {
    it('subtracts values to the vector', () => {
      const vector = new Vector2(1, 2);

      vector.subtractValues(3, 4);

      expect(vector).toMatchObject({ x: -2, y: -2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.subtractValues(1, 2);

      expect(result).toBe(vector);
    });
  });

  describe('#subtractVectors', () => {
    it('sets the vector to the difference of two vectors', () => {
      const vector = new Vector2();
      const u = new Vector2(1, 2);
      const v = new Vector2(3, 4);

      vector.subtractVectors(u, v);

      expect(vector).toMatchObject({ x: -2, y: -2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();
      const u = new Vector2();
      const v = new Vector2();

      const result = vector.subtractVectors(u, v);

      expect(result).toBe(vector);
    });
  });

  describe('#multiplyScalar', () => {
    it('multiplies the vector by a scalar', () => {
      const vector = new Vector2(1, 2);

      vector.multiplyScalar(2);

      expect(vector).toMatchObject({ x: 2, y: 4 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.multiplyScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#divideScalar', () => {
    it('divides the vector by a scalar', () => {
      const vector = new Vector2(2, 4);

      vector.divideScalar(2);

      expect(vector).toMatchObject({ x: 1, y: 2 });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.divideScalar(1);

      expect(result).toBe(vector);
    });
  });

  describe('#dot', () => {
    it('returns the dot product with another vector', () => {
      const vector1 = new Vector2(1, 2);
      const vector2 = new Vector2(3, 4);

      const result = vector1.dot(vector2);

      expect(result).toEqual(11);
    });
  });

  describe('#length', () => {
    it('returns the length of the vector', () => {
      const vector = new Vector2(3, 4);

      const result = vector.length();

      expect(result).toEqual(5);
    });
  });

  describe('#lengthSquared', () => {
    it('returns the square of the length of the vector', () => {
      const vector = new Vector2(3, 4);

      const result = vector.lengthSquared();

      expect(result).toEqual(25);
    });
  });

  describe('#distanceTo', () => {
    it('returns the distance to another vector', () => {
      const vector = new Vector2(1, 2);
      const other = new Vector2(3, 4);

      const result = vector.distanceTo(other);

      expect(result).toBe(Math.sqrt(8));
    });
  });

  describe('#distanceToSquared', () => {
    it('returns the squared distance to another vector', () => {
      const vector = new Vector2(1, 2);
      const other = new Vector2(3, 4);

      const result = vector.distanceToSquared(other);

      expect(result).toBe(8);
    });
  });

  describe('#normalize', () => {
    describe('when the length of the vector is zero', () => {
      it('does nothing', () => {
        const vector = new Vector2(0, 0);

        vector.normalize();

        expect(vector).toMatchObject({ x: 0, y: 0 });
      });
    });

    describe('when the length of the vector is not zero', () => {
      it('normalizes the vector', () => {
        const vector = new Vector2(3, 4);

        vector.normalize();

        expect(vector).toMatchObject({ x: 0.6, y: 0.8 });
      });
    });

    it('returns the vector', () => {
      const vector = new Vector2();

      const result = vector.normalize();

      expect(result).toBe(vector);
    });
  });

  describe('constants', () => {
    describe('zero', () => {
      it('has x and y components equal to zero', () => {
        expect(Vector2.zero).toMatchObject({ x: 0, y: 0 });
      });
    });

    describe('one', () => {
      it('has x and y components equal to one', () => {
        expect(Vector2.one).toMatchObject({ x: 1, y: 1 });
      });
    });

    describe('unitX', () => {
      it('is a unit vector along the x axis', () => {
        expect(Vector2.unitX).toMatchObject({ x: 1, y: 0 });
      });
    });

    describe('unitY', () => {
      it('is a unit vector along the y axis', () => {
        expect(Vector2.unitY).toMatchObject({ x: 0, y: 1 });
      });
    });
  });
});
