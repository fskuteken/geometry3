import Size2 from '../src/size2';

describe('Size2', () => {
  describe('constructor', () => {
    describe('when width and height arguments are supplied', () => {
      it('initializes a new Size2 with the values', () => {
        const width = 1;
        const height = 2;

        const size = new Size2(width, height);

        expect(size).toMatchObject({ width, height });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Size2 with default values', () => {
        const size = new Size2();

        expect(size).toMatchObject({ width: 0, height: 0 });
      });
    });
  });
});
