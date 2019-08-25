---
layout: default
---

# Vector3

A class that represents a 3D vector.

---

## Constructor

Vector3(x: Number, y: Number, z: Number)

* `x`: The value of the x component of the vector. The default is 0.
* `y`: The value of the y component of the vector. The default is 0.
* `z`: The value of the z component of the vector. The default is 0.

```javascript
new Vector3(1, 2, 3)

// Vector3 { x: 1, y: 2, z: 3 }


new Vector3()

// Vector3 { x: 0, y: 0, z: 0 }
```

---

## Properties

### `x` : Number

The first component of the vector.

### `y` : Number

The second component of the vector.

### `z` : Number

The third component of the vector.

---

## Class Properties

### `zero` : Vector3

A 3D vector with all components equal to 0.

```javascript
Vector3.zero

// Vector3 { x: 0, y: 0, z: 0 }
```

### `one` : Vector3

A 3D vector with all components equal to 1.

```javascript
Vector3.one

// Vector3 { x: 1, y: 1, z: 1 }
```

### `unitX` : Vector3

A unit 3D vector along the x axis.

```javascript
Vector3.unitX

// Vector3 { x: 1, y: 0, z: 0 }
```

### `unitY` : Vector3

A unit 3D vector along the y axis.

```javascript
Vector3.unitY

// Vector3 { x: 0, y: 1, z: 0 }
```

### `unitZ` : Vector3

A unit 3D vector along the z axis.

```javascript
Vector3.unitZ

// Vector3 { x: 0, y: 0, z: 1 }
```
