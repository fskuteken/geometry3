import Ray from '../src/ray3';
import Vector3 from '../src/vector3';

describe('Ray', () => {
  describe('constructor', () => {
    describe('when the origin and the direction arguments are supplied', () => {
      it('initializes a ray with the values', () => {
        const origin = new Vector3(1, 2, 3);
        const direction = new Vector3(4, 5, 6);

        const ray = new Ray(origin, direction);

        expect(ray).toMatchObject({ origin, direction });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a ray with the default values', () => {
        const ray = new Ray();

        expect(ray).toMatchObject({
          origin: { x: 0, y: 0, z: 0 },
          direction: { x: 0, y: 0, z: -1 },
        });
      });
    });
  });

  describe('clone', () => {
    it('returns a clone of the ray', () => {
      const ray = new Ray(new Vector3(1, 2, 3), new Vector3(4, 5, 6));

      const result = ray.clone();

      expect(result).toMatchObject(ray);
      expect(result).not.toBe(ray);
    });
  });

  describe('copy', () => {
    it('copies the origin and the direction of another ray', () => {
      const ray = new Ray();
      const rayToCopy = new Ray(new Vector3(1, 2, 3), new Vector3(4, 5, 6));

      ray.copy(rayToCopy);

      expect(ray).toMatchObject(rayToCopy);
      expect(ray.origin).not.toBe(rayToCopy.origin);
      expect(ray.direction).not.toBe(rayToCopy.direction);
    });

    it('returns the ray', () => {
      const ray = new Ray();
      const rayToCopy = new Ray();

      const result = ray.copy(rayToCopy);

      expect(result).toBe(ray);
    });
  });

  describe('equals', () => {
    describe('when the origin of the rays are different', () => {
      it('returns false', () => {
        const ray = new Ray(new Vector3(1, 2, 3));
        const other = new Ray(new Vector3(2, 3, 4));

        const result = ray.equals(other);

        expect(result).toEqual(false);
      });
    });

    describe('when the direction of the rays are different', () => {
      it('returns false', () => {
        const ray = new Ray(new Vector3(1, 2, 3), new Vector3(1, 2, 3));
        const other = new Ray(new Vector3(1, 2, 3), new Vector3(2, 3, 4));

        const result = ray.equals(other);

        expect(result).toEqual(false);
      });
    });

    describe('when the origin and the direction of the rays are equal', () => {
      it('returns true', () => {
        const ray = new Ray(new Vector3(1, 2, 3), new Vector3(4, 5, 6));
        const other = new Ray(new Vector3(1, 2, 3), new Vector3(4, 5, 6));

        const result = ray.equals(other);

        expect(result).toEqual(true);
      });
    });
  });
});
