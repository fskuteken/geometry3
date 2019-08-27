---
layout: default
---
# Vector3

{{ site.data.classes.vector3.description }}

## Properties

{% for property in site.data.classes.vector3.properties %}

### {{ property.name }} : {{ property.type }}

{{ property.description}}

{% endfor %}

## Class properties

{% for class_property in site.data.classes.vector3.class_properties %}

### {{ class_property.name }} : {{ class_property.type }}

{{ class_property.description }}

#### Example

```javascript
{{ class_property.example }}
```

---

{% endfor %}
