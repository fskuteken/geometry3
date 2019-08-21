export default class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;

    return this;
  }

  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;

    return this;
  }
}

Vector2.zero = new Vector2(0, 0);
Vector2.one = new Vector2(1, 1);
Vector2.unitX = new Vector2(1, 0);
Vector2.unitY = new Vector2(0, 1);
