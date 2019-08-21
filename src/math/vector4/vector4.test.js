import Vector4 from './vector4';

describe('Vector4', () => {
  describe('constructor', () => {
    describe('when x, y, z and w arguments are supplied', () => {
      it('initializes a new Vector4 with the values', () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const w = 4;

        const vector = new Vector4(x, y, z, w);

        expect(vector).toMatchObject({
          x, y, z, w,
        });
      });
    });

    describe('when no arguments are supplied', () => {
      it('initializes a new Vector4 with default values', () => {
        const vector = new Vector4();

        expect(vector).toMatchObject({
          x: 0, y: 0, z: 0, w: 1,
        });
      });
    });
  });

  describe('constants', () => {
    describe('zero', () => {
      it('has x, y, z and w components equal to zero', () => {
        expect(Vector4.zero).toMatchObject({
          x: 0, y: 0, z: 0, w: 0,
        });
      });
    });

    describe('one', () => {
      it('has x, y, z and w components equal to one', () => {
        expect(Vector4.one).toMatchObject({
          x: 1, y: 1, z: 1, w: 1,
        });
      });
    });

    describe('unitX', () => {
      it('is a unit vector along the x axis', () => {
        expect(Vector4.unitX).toMatchObject({
          x: 1, y: 0, z: 0, w: 0,
        });
      });
    });

    describe('unitY', () => {
      it('is a unit vector along the y axis', () => {
        expect(Vector4.unitY).toMatchObject({
          x: 0, y: 1, z: 0, w: 0,
        });
      });
    });

    describe('unitZ', () => {
      it('is a unit vector along the z axis', () => {
        expect(Vector4.unitZ).toMatchObject({
          x: 0, y: 0, z: 1, w: 0,
        });
      });
    });

    describe('unitW', () => {
      it('is a unit vector along the w axis', () => {
        expect(Vector4.unitW).toMatchObject({
          x: 0, y: 0, z: 0, w: 1,
        });
      });
    });
  });
});
