/**
 * A size that has a width and a height.
 */
class Size2 {
  /**
   * Creates a new Size2.
   * @param {Number} width The width of the size.
   * @param {Number} height The height of the size.
   */
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
  }

  /**
   * Creates a clone of the size.
   * @returns {Size2} The cloned size.
   */
  clone() {
    return new Size2(this.width, this.height);
  }

  /**
   * Copies the width and the height of another size.
   * @param {Size2} size The size to copy.
   * @returns {Size2} The size.
   */
  copy(size) {
    this.width = size.width;
    this.height = size.height;

    return this;
  }
}

export default Size2;
