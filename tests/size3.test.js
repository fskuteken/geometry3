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

  describe('clone', () => {
    it('creates a clone of the size', () => {
      const size = new Size3(1, 2, 3);

      const result = size.clone();

      expect(result).toMatchObject(size);
      expect(result).not.toBe(size);
    });
  });

  describe('copy', () => {
    it('copies the properties of another size', () => {
      const size = new Size3();
      const sizeToCopy = new Size3(1, 2, 3);

      size.copy(sizeToCopy);

      expect(size).toMatchObject(sizeToCopy);
    });

    it('returns the size', () => {
      const size = new Size3();
      const sizeToCopy = new Size3();

      const result = size.copy(sizeToCopy);

      expect(result).toBe(size);
    });
  });

  describe('equals', () => {
    describe('when the properties are not equal', () => {
      it('returns false', () => {
        const size = new Size3(1, 2, 3);
        const sizeToCompare = new Size3(4, 5, 6);

        const result = size.equals(sizeToCompare);

        expect(result).toEqual(false);
      });
    });

    describe('when the properties are equal', () => {
      it('returns true', () => {
        const size = new Size3(1, 2, 3);
        const sizeToCompare = new Size3(1, 2, 3);

        const result = size.equals(sizeToCompare);

        expect(result).toEqual(true);
      });
    });
  });

  describe('set', () => {
    it('sets the properties of the size', () => {
      const width = 1;
      const height = 2;
      const depth = 3;
      const size = new Size3();

      size.set(width, height, depth);

      expect(size).toMatchObject({ width, height, depth });
    });

    it('returns the size', () => {
      const size = new Size3();

      const result = size.set(1, 2, 3);

      expect(size).toBe(result);
    });
  });
});
