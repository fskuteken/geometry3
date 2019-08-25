import Math from '../../src/math/index';
import Matrix3 from '../../src/math/matrix3';
import Matrix4 from '../../src/math/matrix4';
import Quaternion from '../../src/math/quaternion';
import Vector2 from '../../src/math/vector2';
import Vector3 from '../../src/math/vector3';
import Vector4 from '../../src/math/vector4';

describe('Math', () => {
  it('exports the Matrix3 class', () => {
    expect(Math.Matrix3).toEqual(Matrix3);
  });

  it('exports the Matrix4 class', () => {
    expect(Math.Matrix4).toEqual(Matrix4);
  });

  it('exports the Quaternion class', () => {
    expect(Math.Quaternion).toEqual(Quaternion);
  });

  it('exports the Vector2 class', () => {
    expect(Math.Vector2).toEqual(Vector2);
  });

  it('exports the Vector3 class', () => {
    expect(Math.Vector3).toEqual(Vector3);
  });

  it('exports the Vector4 class', () => {
    expect(Math.Vector4).toEqual(Vector4);
  });
});
