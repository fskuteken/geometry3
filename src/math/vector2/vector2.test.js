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
});
