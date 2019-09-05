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
}

export default Size3;
