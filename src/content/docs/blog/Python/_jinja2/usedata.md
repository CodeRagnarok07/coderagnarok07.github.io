# Datos globales [ Context ]

Crea un archivo `context_processors.py` 

```python

from apps.product.models import Category

def menu_categories(request): # NOMBRE DE LA FUNCION DEBEN SER IGUALES
    categories = Category.objects.all()

    return {'menu_categories': categories} # NOMBRE DEL OBJETO LLAMABLE DEBEN SER IGUALES
```

Agrégalo a los templetes en `sttings.py`

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'apps.product.context_processors.menu_categories', # add thist                
            ],
        },
    }
    ]
```

La view para llamar los resultados de esa url

```python
def formato(request, formato):
    titulos = Titulo.objects.filter(formato = formato ).all()
    ctx = {"titulos": titulos}
    return render(request, 'core/home.html', ctx)
```

Puede ser llamado en cualquier pagina

```python
{% for i in menu_categories %}
  <li class="nav-item">
    <a class="nav-link" href="{% url 'category' i.slug %}">{{ i.title }}</a>
  </li>
{% endfor %}
```


[Motor de plantillas](https://docs.djangoproject.com/en/4.0/ref/templates/)


# Templetes  y uso de datos

- Comprueba si el objeto es el primero de la lista
    ```python
    <ol>
      {% for i in franquicias %}
      <li>
        {{i.id}} {{i.nombre_franquicia}} 
        {% if franquicias.0 is i %} 
            {{ franquicias.0 }} 
        {% endif %}
      </li>
      {% endfor %}
    </ol>
    ```
    
## Claves Foráneas
    
```html
{% for i in category.products.all %}
    <li>{{i.name}}</li> 
{% endfor %}
<!-- accede a los productos que tienen seleccionado dicha categoria -->
```

```python
{{ personaje.obra.all.0 }}  # todos los foreikey many to many es preferible llamarlos con .all 
# el 0 hace referencia al primero de la lista
```
    
## Autentificación
```html
{% if request.user.is_authenticated %}
        <li class="nav-item">
        <a class="nav-link" href="{% url 'userPanel' %}">Panel</a>
        </li>
    {% else %}
        <li class="nav-item">
        <a class="nav-link" href="{% url 'register' %}">Registro</a>
        </li>
    {% endif %}
```
    
## Formato de Plantillas
    
```text
{{ i.description|truncatewords:7 }}  =>  Solo muestra las primeras 7 palabras del texto

```

# Condicionales en templates
    
```python
{% if variable %}True{% endif %}
To check if it's False (note this works because there's only 3 values -- True/False/None):

{% if variable and variable == variable %}True{% endif %}

{% if variable != None %}False{% endif %}
To check if it's None:

{% if variable == None %}None{% endif %}

{% if myvar|is_false %}...{% endif %}

{% if test.passed|lower == 'false' %} ... {% endif %}
Or if you prefer getting excited over the whole thing...

{% if test.passed|upper == 'FALSE' %} ... {% endif %}

Look at the yesno helper

Eg:

{{ myValue|yesno:"itwasTrue,itWasFalse,itWasNone" }}

{% if some_bool in false_list %}False {% endif %}
```

construcciones complejas

```python
{% if object.some_bool == None %}Empty
{% else %}{% if not object.some_bool %}False{% else %}True{% endif %}{% endif %}
If you only want to test if its false, then just

{% if some_bool == None %}{% else %}{% if not some_bool %}False{% endif %}{% endif %}
EDIT: This seems to work.

{% if 0 == a|length %}Zero-length array{% else %}{% if a == None %}None type{% else %}{% if not a %}False type{% else %}True-type {% endif %}{% endif %}{% endif %}
```