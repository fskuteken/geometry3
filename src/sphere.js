import Vector3 from './vector3';

/**
 * A sphere represented by its center and its radius.
 */
class Sphere {
  /**
   * Creates a new sphere.
   * @param {Number} radius The radius of the sphere.
   * @param {Vector3} center The center of the sphere. The default is (0, 0, 0).
   */
  constructor(radius = 0, center = new Vector3(0, 0, 0)) {
    this.radius = radius;
    this.center = center;
  }

  /**
   * Gets the diameter of the sphere.
   * @returns {Number} The diameter of the sphere.
   */
  get diameter() {
    return 2 * this.radius;
  }

  /**
   * Sets the diameter of the sphere.
   */
  set diameter(value) {
    this.radius = value / 2;
  }

  /**
   * Creates a clone of the sphere.
   * @returns {Sphere} The cloned sphere.
   */
  clone() {
    return new Sphere(this.radius, new Vector3(this.center.x, this.center.y, this.center.z));
  }

  /**
   * Copies the radius and the center of another sphere.
   * @param {Sphere} sphere The sphere to copy.
   * @returns {Sphere} The sphere.
   */
  copy(sphere) {
    this.radius = sphere.radius;
    this.center.copy(sphere.center);

    return this;
  }

  /**
   * Compares the radius and the center to another sphere.
   * @param {Sphere} sphere sphere to compare to.
   * @returns {Boolean} A value indicating whether the radius and the center are equal.
   */
  equals(sphere) {
    return this.radius === sphere.radius && this.center.equals(sphere.center);
  }

  /**
   * Sets the center of the sphere to the same values of a vector.
   * @param {Vector3} center The vector containing the values to set.
   */
  setCenter(center) {
    this.center.copy(center);

    return this;
  }

  /**
   * Sets the radius of the sphere.
   * @param {Number} radius The radius of the sphere.
   * @returns {Sphere} The sphere.
   */
  setRadius(radius) {
    this.radius = radius;

    return this;
  }
}

export default Sphere;
