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
