import Math from '../../src/math/index';
import Vector2 from '../../src/math/vector2';
import Vector3 from '../../src/math/vector3';
import Vector4 from '../../src/math/vector4';

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
