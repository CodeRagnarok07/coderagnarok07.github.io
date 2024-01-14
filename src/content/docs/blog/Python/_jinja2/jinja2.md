### Herencia de plantillas:


`Father.html` 
```html
{% block title %}{% endblock %}  
{% block content %}    
{% endblock content %}
```

`Daughter.html`

```html
{% extends '"app"//main.html' %}  <!-- trae a main como padre -->
{% block title %}titulo de la pagina {% endblock %}
{% block content %}  

<!-- bloque de contenido a utilizar -->
{% endblock content %}

```

Por include: 

```html
{% include 'dir/navbar.html' %}         
```


### Motor de plantillas

#### ciclos
```html
{% for i in tareas %}
	<li>{{i.name}}</li>
{% endfor %}
```



### Acceder a `static` en las plantillas

Configuracion de sttings

```python
import os

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "static"]

MEDIA_URL = '/images/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images')
```

carga los static

```html
{%load static %}
```

load css 

```html
<link rel="stylesheet" type="text/css" href="{% static 'css/main.css' %}">                      
```

Load images  

```html
<img src="{% static 'images/nameimge.png' %}"> 
```

### Acceso a las urls

in `urls.py`

```python
path('', views.index, name='nam'),
```

in `html` 

```python
<a href="{% url 'nam' %}">
```

### Plantillas fuera de las apps + archivos static

- Creamos las carpetas
    - `static/css/main.css`
    - `static/images`
    - `static/templates`

`sttings.py`

```python
TEMPLATES = [   
			 ###### dentro de la app ##   /     ######## en la carpeta base ###########
      'DIRS': [BASE_DIR , 'templates'], [os.path.join(BASE_DIR, 'templates')],  [BASE_DIR , 'apps/templates'],
      'APP_DIRS': True,                    
				## señala que templates esta dentro de la carpeta de cada app
```
