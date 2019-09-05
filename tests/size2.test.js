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

  describe('aspectRatio', () => {
    it('calculates the aspect ratio of the size', () => {
      const width = 8;
      const height = 6;
      const size = new Size2(width, height);

      const result = size.aspectRatio();

      expect(result).toEqual(width / height);
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

  describe('equals', () => {
    describe('when the properties are not equal', () => {
      it('returns false', () => {
        const size = new Size2(1, 2);
        const sizeToCompare = new Size2(3, 4);

        const result = size.equals(sizeToCompare);

        expect(result).toEqual(false);
      });
    });

    describe('when the properties are equal', () => {
      it('returns true', () => {
        const size = new Size2(1, 2);
        const sizeToCompare = new Size2(1, 2);

        const result = size.equals(sizeToCompare);

        expect(result).toEqual(true);
      });
    });
  });

  describe('set', () => {
    it('sets the properties of the size', () => {
      const width = 1;
      const height = 2;
      const size = new Size2();

      size.set(width, height);

      expect(size).toMatchObject({ width, height });
    });

    it('returns the size', () => {
      const size = new Size2();

      const result = size.set(1, 2);

      expect(size).toBe(result);
    });
  });
});
