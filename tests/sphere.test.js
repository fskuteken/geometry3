import Sphere from '../src/sphere';
import Vector3 from '../src/vector3';

describe('Sphere', () => {
  describe('constructor', () => {
    describe('when the radius and the center arguments are supplied', () => {
      it('initializes a sphere with the values', () => {
        const radius = 10;
        const center = new Vector3(1, 2, 3);

        const sphere = new Sphere(radius, center);

        expect(sphere).toMatchObject({ radius, center });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a sphere with the default values', () => {
        const sphere = new Sphere();

        expect(sphere).toMatchObject({ radius: 0, center: Vector3.zero });
      });
    });
  });

  describe('clone', () => {
    it('returns a clone of the sphere', () => {
      const sphere = new Sphere(1, new Vector3(2, 3, 4));

      const result = sphere.clone();

      expect(result).toMatchObject(sphere);
      expect(result).not.toBe(sphere);
    });
  });

  describe('copy', () => {
    it('copies the radius and the center of another sphere', () => {
      const sphere = new Sphere();
      const sphereToCopy = new Sphere(1, new Vector3(2, 3, 4));

      sphere.copy(sphereToCopy);

      expect(sphere).toMatchObject(sphereToCopy);
      expect(sphere.center).not.toBe(sphereToCopy.center);
    });

    it('returns the sphere', () => {
      const sphere = new Sphere();
      const sphereToCopy = new Sphere();

      const result = sphere.copy(sphereToCopy);

      expect(result).toBe(sphere);
    });
  });

  describe('equals', () => {
    describe('when the radius of the spheres are different', () => {
      it('returns false', () => {
        const sphere = new Sphere(1);
        const other = new Sphere(2);

        const result = sphere.equals(other);

        expect(result).toEqual(false);
      });
    });

    describe('when the center of the spheres are different', () => {
      it('returns false', () => {
        const sphere = new Sphere(1, new Vector3(1, 2, 3));
        const other = new Sphere(1, new Vector3(2, 3, 4));

        const result = sphere.equals(other);

        expect(result).toEqual(false);
      });
    });

    describe('when the radius and the center of the spheres are equal', () => {
      it('returns true', () => {
        const sphere = new Sphere(1, new Vector3(1, 2, 3));
        const other = new Sphere(1, new Vector3(1, 2, 3));

        const result = sphere.equals(other);

        expect(result).toEqual(true);
      });
    });
  });

  describe('setCenter', () => {
    it('sets the values of the center of the sphere', () => {
      const sphere = new Sphere();
      const center = new Vector3(1, 2, 3);

      sphere.setCenter(center);

      expect(sphere.center).toMatchObject(center);
      expect(sphere.center).not.toBe(center);
    });

    it('returns the sphere', () => {
      const sphere = new Sphere();

      const result = sphere.setCenter(new Vector3());

      expect(result).toBe(sphere);
    });
  });

  describe('setRadius', () => {
    it('sets the radius of the sphere', () => {
      const sphere = new Sphere();
      const radius = 1;

      sphere.setRadius(radius);

      expect(sphere.radius).toEqual(radius);
    });

    it('returns the sphere', () => {
      const sphere = new Sphere();

      const result = sphere.setRadius(1);

      expect(result).toBe(sphere);
    });
  });
});
