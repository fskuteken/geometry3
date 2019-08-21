import Vector2 from './vector2';

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
