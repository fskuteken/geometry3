import Math from './index';
import Vector2 from './vector2';
import Vector3 from './vector3';
import Vector4 from './vector4';

describe('Math', () => {
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
