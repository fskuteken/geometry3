/**
 * A size that has a width, a height and a depth.
 */
class Size3 {
  /**
   * Creates a new Size3.
   * @param {Number} width The width of the size.
   * @param {Number} height The height of the size.
   * @param {Number} depth The depth of the size.
   */
  constructor(width = 0, height = 0, depth = 0) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  /**
   * Creates a clone of the size.
   * @returns {Size3} The cloned size.
   */
  clone() {
    return new Size3(this.width, this.height, this.depth);
  }

  /**
   * Copies the width, the height and the depth of another size.
   * @param {Size3} size The size to copy.
   * @returns {Size3} The size.
   */
  copy(size) {
    this.width = size.width;
    this.height = size.height;
    this.depth = size.depth;

    return this;
  }
}

export default Size3;
