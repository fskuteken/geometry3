import Vector3 from './vector3';

/**
 * A 3D ray that is emitted from an origin into a direction.
 */
class Ray3 {
  /**
   * Creates a new Ray3.
   * @param {Vector3} origin The origin of the ray.
   * @param {Vector3} direction The direction of the ray. It should be a unit vector.
   */
  constructor(origin = new Vector3(0, 0, 0), direction = new Vector3(0, 0, -1)) {
    this.origin = origin;
    this.direction = direction;
  }

  /**
   * Creates a clone of the ray.
   * @returns {Ray3} The cloned ray.
   */
  clone() {
    return new Ray3(this.origin.clone(), this.direction.clone());
  }

  /**
   * Copies the origin and the direction of another ray.
   * @param {Ray3} ray The ray to copy.
   * @returns {Ray3} The ray.
   */
  copy(ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);

    return this;
  }

  /**
   * Compares the origin and the direction to another ray.
   * @param {Ray3} ray The ray to compare to.
   * @returns {Boolean} A value indicating whether the rays are equal.
   */
  equals(ray) {
    return this.origin.equals(ray.origin) && this.direction.equals(ray.direction);
  }
}

export default Ray3;
