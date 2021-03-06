import index from '../src/index';
import Camera3 from '../src/camera3';
import Matrix2 from '../src/matrix2';
import Matrix3 from '../src/matrix3';
import Matrix4 from '../src/matrix4';
import Quaternion from '../src/quaternion';
import Ray3 from '../src/ray3';
import Size2 from '../src/size2';
import Size3 from '../src/size3';
import Sphere from '../src/sphere';
import Vector2 from '../src/vector2';
import Vector3 from '../src/vector3';
import Vector4 from '../src/vector4';

describe('index', () => {
  it('exports the Camera3 class', () => {
    expect(index.Camera3).toEqual(Camera3);
  });

  it('exports the Matrix2 class', () => {
    expect(index.Matrix2).toEqual(Matrix2);
  });

  it('exports the Matrix3 class', () => {
    expect(index.Matrix3).toEqual(Matrix3);
  });

  it('exports the Matrix4 class', () => {
    expect(index.Matrix4).toEqual(Matrix4);
  });

  it('exports the Quaternion class', () => {
    expect(index.Quaternion).toEqual(Quaternion);
  });

  it('exports the Ray3 class', () => {
    expect(index.Ray3).toEqual(Ray3);
  });

  it('exports the Size2 class', () => {
    expect(index.Size2).toEqual(Size2);
  });

  it('exports the Size3 class', () => {
    expect(index.Size3).toEqual(Size3);
  });

  it('exports the Sphere class', () => {
    expect(index.Sphere).toEqual(Sphere);
  });

  it('exports the Vector2 class', () => {
    expect(index.Vector2).toEqual(Vector2);
  });

  it('exports the Vector3 class', () => {
    expect(index.Vector3).toEqual(Vector3);
  });

  it('exports the Vector4 class', () => {
    expect(index.Vector4).toEqual(Vector4);
  });
});
