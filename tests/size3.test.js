import Size3 from '../src/size3';

describe('Size3', () => {
  describe('constructor', () => {
    describe('when width and height arguments are supplied', () => {
      it('initializes a new Size3 with the values', () => {
        const width = 1;
        const height = 2;
        const depth = 3;

        const size = new Size3(width, height, depth);

        expect(size).toMatchObject({ width, height, depth });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Size3 with default values', () => {
        const size = new Size3();

        expect(size).toMatchObject({ width: 0, height: 0, depth: 0 });
      });
    });
  });
});
