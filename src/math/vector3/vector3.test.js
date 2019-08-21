import Vector3 from './vector3';

describe('Vector3', () => {
  describe('constructor', () => {
    describe('when x, y and z arguments are supplied', () => {
      it('initializes a new Vector3 with the values', () => {
        const x = 1;
        const y = 2;
        const z = 3;

        const vector = new Vector3(x, y, z);

        expect(vector).toMatchObject({ x, y, z });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Vector3 with default values', () => {
        const vector = new Vector3();

        expect(vector).toMatchObject({ x: 0, y: 0, z: 0 });
      });
    });
  });

  describe('constants', () => {
    describe('zero', () => {
      it('has x, y and z components equal to zero', () => {
        expect(Vector3.zero).toMatchObject({ x: 0, y: 0, z: 0 });
      });
    });

    describe('one', () => {
      it('has x, y and z components equal to one', () => {
        expect(Vector3.one).toMatchObject({ x: 1, y: 1, z: 1 });
      });
    });

    describe('unitX', () => {
      it('is a unit vector along the x axis', () => {
        expect(Vector3.unitX).toMatchObject({ x: 1, y: 0, z: 0 });
      });
    });

    describe('unitY', () => {
      it('is a unit vector along the y axis', () => {
        expect(Vector3.unitY).toMatchObject({ x: 0, y: 1, z: 0 });
      });
    });

    describe('unitZ', () => {
      it('is a unit vector along the z axis', () => {
        expect(Vector3.unitZ).toMatchObject({ x: 0, y: 0, z: 1 });
      });
    });
  });
});
