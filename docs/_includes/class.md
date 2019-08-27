# {{ include.class.name }}

{{ include.class.description }}

## Properties

{% for property in include.class.properties %}

### {{ property.name }} : {{ property.type }}

{{ property.description}}

{% endfor %}

## Class properties

{% for class_property in include.class.class_properties %}

### {{ class_property.name }} : {{ class_property.type }}

{{ class_property.description }}

#### Example

```javascript
{{ class_property.example }}
```

---

{% endfor %}

## Methods

{% for method in include.class.methods %}

### {{ method.name }} : {{ method.type }}

{{ method.description }}

{% if method.arguments != nil %}

#### Arguments

{% endif %}

{% for argument in method.arguments %}

* {{ argument.name }} : {{ argument.type }} - {{ argument.description }}

{% endfor %}

#### Returns

{{ method.returns }}

#### Example

```javascript
{{ method.example }}
```

---

{% endfor %}
