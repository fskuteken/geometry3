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

  describe('clone', () => {
    it('creates a clone of the size', () => {
      const size = new Size2(1, 2);

      const result = size.clone();

      expect(result).toMatchObject(size);
      expect(result).not.toBe(size);
    });
  });

  describe('copy', () => {
    it('copies the properties of another size', () => {
      const size = new Size2();
      const sizeToCopy = new Size2(1, 2);

      size.copy(sizeToCopy);

      expect(size).toMatchObject(sizeToCopy);
    });

    it('returns the size', () => {
      const size = new Size2();
      const sizeToCopy = new Size2();

      const result = size.copy(sizeToCopy);

      expect(result).toBe(size);
    });
  });
});
