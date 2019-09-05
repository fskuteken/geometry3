import Camera3 from '../src/camera3';

describe('Camera3', () => {
  describe('constructor', () => {
    it('initializes a new camera with default values', () => {
      const projectionType = 'perspective';
      const camera = new Camera3(projectionType);

      expect(camera).toMatchObject({
        projectionType,
        viewport: { width: 1, height: 1 },
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0, w: 1 },
      });
    });
  });
});
