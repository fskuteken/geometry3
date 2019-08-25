import Quaternion from '../../src/math/quaternion';
import Vector3 from '../../src/math/vector3';

describe('Quaternion', () => {
  describe('constructor', () => {
    describe('when x, y, z and w arguments are supplied', () => {
      it('initializes a new Quaternion with the values', () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const w = 4;

        const quaternion = new Quaternion(x, y, z, w);

        expect(quaternion).toMatchObject({ x, y, z, w });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Quaternion with default values', () => {
        const quaternion = new Quaternion();

        expect(quaternion).toMatchObject({ x: 0, y: 0, z: 0, w: 1 });
      });
    });
  });

  describe('#set', () => {
    it('sets the components of the quaternion', () => {
      const x = 1;
      const y = 2;
      const z = 3;
      const w = 4;
      const quaternion = new Quaternion();

      quaternion.set(x, y, z, w);

      expect(quaternion).toMatchObject({ x, y, z, w });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();

      const result = quaternion.set(1, 2, 3, 4);

      expect(result).toBe(quaternion);
    });
  });

  describe('#setIdentity', () => {
    it('sets the components of the quaternion to the identity', () => {
      const quaternion = new Quaternion();

      quaternion.setIdentity();

      expect(quaternion).toMatchObject({ x: 0, y: 0, z: 0, w: 1 });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();

      const result = quaternion.setIdentity();

      expect(result).toBe(quaternion);
    });
  });

  describe('#setAxisAngle', () => {
    it('sets the quaternion to a rotation', () => {
      const axis = new Vector3(0.6, 0.8, 0.0);
      const angle = Math.PI;
      const quaternion = new Quaternion();

      quaternion.setAxisAngle(axis, angle);

      expect(quaternion).toMatchObject({
        x: 0.6,
        y: 0.8,
        z: 0,
        w: Math.cos(Math.PI / 2),
      });
    });

    it('returns the quaternion', () => {
      const axis = new Vector3();
      const angle = Math.PI;
      const quaternion = new Quaternion();

      const result = quaternion.setAxisAngle(axis, angle);

      expect(result).toBe(quaternion);
    });
  });

  describe('#copy', () => {
    it('copies the components of another quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToCopy = new Quaternion(1, 2, 3, 4);

      quaternion.copy(quaternionToCopy);

      expect(quaternion).toMatchObject(quaternionToCopy);
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToCopy = new Quaternion();

      const result = quaternion.copy(quaternionToCopy);

      expect(result).toBe(quaternion);
    });
  });

  describe('#clone', () => {
    it('creates a clone of the quaternion', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);

      const result = quaternion.clone();

      expect(result).toMatchObject(quaternion);
      expect(result).not.toBe(quaternion);
    });
  });

  describe('#conjugate', () => {
    it('sets the quaternion to its conjugate', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);

      quaternion.conjugate();

      expect(quaternion).toMatchObject({ x: -1, y: -2, z: -3, w: 4 });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();

      const result = quaternion.conjugate();

      expect(result).toBe(quaternion);
    });
  });

  describe('#conjugateQuaternion', () => {
    it('sets the quaternion to the conjugate of another quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToConjugate = new Quaternion(1, 2, 3, 4);

      quaternion.conjugateQuaternion(quaternionToConjugate);

      expect(quaternion).toMatchObject({ x: -1, y: -2, z: -3, w: 4 });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToConjugate = new Quaternion();

      const result = quaternion.conjugateQuaternion(quaternionToConjugate);

      expect(result).toBe(quaternion);
    });
  });

  describe('#invert', () => {
    it('sets the quaternion to its inverse', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);

      quaternion.invert();

      expect(quaternion).toMatchObject({
        x: -1 / 30,
        y: -2 / 30,
        z: -3 / 30,
        w: 4 / 30,
      });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();

      const result = quaternion.invert();

      expect(result).toBe(quaternion);
    });
  });

  describe('#invertQuaternion', () => {
    it('sets the quaternion to the inverse of another quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToInvert = new Quaternion(1, 2, 3, 4);

      quaternion.invertQuaternion(quaternionToInvert);

      expect(quaternion).toMatchObject({
        x: -1 / 30,
        y: -2 / 30,
        z: -3 / 30,
        w: 4 / 30,
      });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();
      const quaternionToInvert = new Quaternion();

      const result = quaternion.invertQuaternion(quaternionToInvert);

      expect(result).toBe(quaternion);
    });
  });

  describe('#length', () => {
    it('calculates the length of the quaternion', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);

      const result = quaternion.length();

      expect(result).toEqual(Math.sqrt(30));
    });
  });

  describe('#lengthSquared', () => {
    it('calculates the squared length of the quaternion', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);

      const result = quaternion.lengthSquared();

      expect(result).toEqual(30);
    });
  });

  describe('#normalize', () => {
    describe('when the length is zero', () => {
      it('does nothing', () => {
        const quaternion = new Quaternion(0, 0, 0, 0);

        quaternion.normalize();

        expect(quaternion).toMatchObject({ x: 0, y: 0, z: 0, w: 0 });
      });
    });

    describe('when the length is not zero', () => {
      it('normalizes the quaternion', () => {
        const quaternion = new Quaternion(1, 2, 3, 4);
        const length = Math.sqrt(30);

        quaternion.normalize();

        expect(quaternion).toMatchObject({
          x: 1 / length,
          y: 2 / length,
          z: 3 / length,
          w: 4 / length,
        });
      });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();

      const result = quaternion.normalize();

      expect(result).toBe(quaternion);
    });
  });

  describe('#multiplyQuaternions', () => {
    it('sets the quaternion to the product of other two quaternions', () => {
      const quaternion = new Quaternion();
      const q = new Quaternion(1, 2, 3, 4);
      const r = new Quaternion(4, 3, 2, 1);

      quaternion.multiplyQuaternions(q, r);

      expect(quaternion).toMatchObject({
        x: 12,
        y: 24,
        z: 6,
        w: -12,
      });
    });

    it('returns the quaternion', () => {
      const quaternion = new Quaternion();
      const q = new Quaternion();
      const r = new Quaternion();

      const result = quaternion.multiplyQuaternions(q, r);

      expect(result).toBe(quaternion);
    });
  });

  describe('#dot', () => {
    it('calculates the dot product with another quaternion', () => {
      const quaternion = new Quaternion(1, 2, 3, 4);
      const other = new Quaternion(4, 3, 2, 1);

      const result = quaternion.dot(other);

      expect(result).toEqual(20);
    });
  });
});
