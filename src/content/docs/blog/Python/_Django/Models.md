# Comandos de base de datos Django

1. `python manage.py inspectdb` ⇒ hace display completo de toda la base de datos
    1. `python manage.py inspectdb > models.py` ⇒ Crea los models a partir de una base de datos ya definida
        > “crea todos los models en un solo archivo, los datos realcionales en clases diferentes, y con deficiencias”

2. `python manage.py migrate` ⇒ relacion los models y la base de datos o las crea
3. `python manage.py dumpdata titulos --indent=4 > api.json`  ⇒ crea un archivo de la base de datos
4. python manage.py `makemigrations --empty appname`.
5. `python manage.py migrate --run-syncdb` ⇒ Sincroniza las bases de datos para que tengan las tablas correctas
6. `python manage.py makemigrations app --fake` ⇒ crea una migracion sin modificaciones reales


# Modificar Esquema de base de datos

[https://docs.djangoproject.com/es/4.0/ref/schema-editor/](https://docs.djangoproject.com/es/4.0/ref/schema-editor/)

`makemigrations --empty appname`

`python manage.py migrate --run-syncdb`

- Modificar el esquema de base de datos:

[How to force migrations to a DB if some tables already exist in Django?](https://stackoverflow.com/questions/43880426/how-to-force-migrations-to-a-db-if-some-tables-already-exist-in-django)

- solución 1 Eliminar la tabla


1. Primero comenta la tabla que se quiera modificar y  as una migracion falsa solo en la app
    1. `python manage.py makemigrations app --fake`
2. Realiza las migraciones
    1. `python manage.py migrate --run-syncdb`
3. Integra la modificación de la tabla

# Tipos comunes de campos

- [CharField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.CharField)
    
    se usa para definir cadenas de longitud corta a media. Debes especificar la `max_length` (longitud máxima) de los datos que se guardarán.
    
- [TextField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.TextField)
    
    se usa para cadenas de longitud grande o arbitraria. Puedes especificar una `max_length` para el campo, pero sólo se usa cuando el campo se muestra en formularios (no se fuerza al nivel de la base de datos).
    
- [IntegerField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#django.db.models.IntegerField)
    
    es un campo para almacenar valores de números enteros y para validar los valores introducidos como enteros en los formularios.
    
- [DateField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datefield) y [DateTimeField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#datetimefield)
    
    se usan para guardar/representar fechas e información fecha/hora (como en los objetos Python `datetime.date` y `datetime.datetime`, respectivamente). Estos campos pueden adicionalmente declarar los parámetros (mutuamente excluyentes) `auto_now=True` (para establecer el campo a la fecha actual cada vez que se guarda el modelo), `auto_now_add` (para establecer sólo la fecha cuando se crea el modelo por primera vez), y `default` (para establecer una fecha por defecto que puede ser sobreescrita por el usuario).
    
- [EmailField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#emailfield)
    
    se usa para validar direcciones de correo electrónico.
    
- [FileField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#filefield) e [ImageField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#imagefield)
    
    se usan para subir ficheros e imágenes respectivamente (el `ImageField` añade simplemente una validación adicional de que el fichero subido es una imagen). Éstos tienen parámetros para definir cómo y donde se guardan los ficheros subidos.
    
- [AutoField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#autofield)
    
    es un tipo especial de `IntegerField` que se incrementa automáticamente. Cuando no especificas una clave primaria para tu modelo, se añade -automáticamente- una de éste tipo.
    
- [ForeignKey](https://docs.djangoproject.com/en/1.10/ref/models/fields/#foreignkey) ⇒ clave de relación uno a muchos;  atreves de el nombre de este campo se puede acceder a la clave primara el cual será del modelo único
    
    ```python
    primariKey = ForeingKey1- ForeingKey2 - ForeingKey3
    ```
    
- [ManyToManyField](https://docs.djangoproject.com/en/1.10/ref/models/fields/#manytomanyfield)
    
    se usa para especificar una relación muchos a muchos (ej. un libro puede tener varios géneros, y cada género puede contener varios libros). En nuestra aplicación de la biblioteca usaremos ésta de forma muy similar a `ForeignKeys`, pero pueden usarse de formas más complicadas para describir las relaciones entre grupos. Éstas tienen el parámetro `on_delete` para definir que ocurre cuando un registro asociado se borra (ej. un valor de `models.SET_NULL` establecería simplemente el valor a `NULL`).
    

#### Argumentos comunes de los campos

 “Los siguientes argumentos son comunes a la mayoría de los tipos de campo y pueden usarse al declararlos:”

- `help_text=”descripcion del campo”` ⇒ Proporciona una etiqueta de texto para formularios HTML
- `verbose_name='elle'` ⇒  por defecto es el nombre del campo, se modifica con esta etiqueta, [si es campo de llave foránea es el nombre que se usa desde el iten que lo llama]
- `default=valor`  ⇒ Valor por defecto para el campo. Puede ser un valor o un *callable object* (objeto que puede ser llamado como una función), en cuyo caso el objeto será llamado cada vez que se cree un nuevo registro.
- `null=False`  ⇒ Si es `True`, Django guardará valores en blanco o vacíos como `NULL`
- `blank=True` ⇒ Si es `True`, se permite que el campo quede en blanco en tus formularios.
- `choices={ “clave1”: valor1 , “clave2” : valor2 }` ⇒
    
    Un grupo de valores de selección para este campo. Si se proporciona, el widget correspondiente por defecto del formulario será una caja de selección con estos valores de selección en vez del campo de texto estándar.
    
- `**primary_key=False`** ⇒
    
    Si es `True`, establece el campo actual como clave primaria para el modelo (Una clave primaria es una columna especial de la base de datos, diseñada para identificar de forma única todos los diferentes registros de una tabla). Si no se especifica ningún campo como clave primaria, Django añadirá automáticamente un campo para este propósito.
    
- `**max_length=255**`  ⇒ "num" maximos carácter

## claves foraneas Foreikey, ManyToMany, ManyToOne, OneToOne

- Claves foraneas
    - `ForeingKey` ⇒ [ muchas a una ] si un model lo usa puede acceder a un model superior ( varias entradas acceden a ese modelo superior [ManyToOne] )
        1. `related_name='entrega'`   ⇒ el model superior accede a este a traves del de este atributo
        2. `on_delete=models.CASCADE`  ⇒ si el modelo superior es eliminado, todos los que son encadenados a ese se borran
    - `ManyToMany` ⇒ desde el model que lo usa puede seleccionar varias opciones de campo
    - `OneToOne` ⇒ una entrada solo puede usar una entrada superior única que otras entradas no pueden usar


### Foreikey Y usos
    
```python
class Category(models.Model):
    title = models.CharField(max_length=255)

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

"desde la categoria = Category.products [Model.related_name]"
            "HTML = {% for i in category.products.all %} "

"desde el producto = Product.category [Model.Variable ]"
"[comprovar] Product.categorie.title "

"en el html [ {{  }} ]"
```


`on_delete=models.CASCADE)`

Siguiendo el ejemplo anterior el que declara el on_delete dice que si su llave foranea es borrada se borra su entrada


## Uso models Foreikey
    
```python

#subTitulo = models.CharField(max_length=500)
descripcion = models.TextField(blank=True , null=True) # Post foreikey
# temporada = models.ForeignKey() # 

# TAGS
formato = models.CharField(max_length=50, choices=Formato.choices)
genero = models.CharField(max_length=50, choices=Genero.choices)

fecha_de_creacion = models.DateTimeField(auto_now_add=True)
actualizado = models.DateTimeField(auto_now=True)

# MEDIA
imagen1 = models.URLField(blank=True , null=True)

# LOGICA
slug = models.SlugField(max_length=500, blank=True) # sera agregada mas adelante
```
    


# Metadatos

Puedes declarar metadatos a nivel de modelo para tu Modelo declarando `class Meta`, tal como se muestra.

```python
class Meta:
    ordering = ["title", "-pubdate"] # se ordena por 2 parametros
    ...

class Meta:
    ordering = ["obra__nombre_titulo"] 
# se ordenan por los nombres de la clave foranea manyToMany
```

`ordering = ["title", "-pubdate"]` ⇒ Define el primer y segundo orden a utilizar

`verbose_name = "BetterName"` ⇒  un nombre descriptivo para la clase en forma singular y plural:

# Metodos

#### Nombre del campo mostrado en admin:

```py 
def __str__(self):
    return self.field_name
```

#### Devuelve la url para acceder a una instancia particular del modelo:
    
```py
def get_absolute_url(self):    
    return reverse('model-detail-view', args=[str(self.id)])
```
> si defines este método, Django añadirá automáticamente un botón "Ver en el sitio" en la ventana de edición del registro del modelo en el sitio de Administración


# Consultas query

### Views consultas

[QuerySet API reference | Django documentation | Django](https://docs.djangoproject.com/en/4.0/ref/models/querysets/)

```python
franquicias = Franquicia.objects.all()[:3] #=> solo trae las primeras 3
# .all()[-3:0] no funcionara
franquicias = Franquicia.objects.reverse()[:3] 
```

## Hojas de consultas
    
[https://docs.djangoproject.com/es/4.0/topics/db/aggregation/](https://docs.djangoproject.com/es/4.0/topics/db/aggregation/)

```python
# Total number of books.
>>> Book.objects.count()
2452

# Total number of books with publisher=BaloneyPress
>>> Book.objects.filter(publisher__name='BaloneyPress').count()
73

# Average price across all books.
>>> from django.db.models import Avg
>>> Book.objects.all().aggregate(Avg('price'))
{'price__avg': 34.35}

# Max price across all books.
>>> from django.db.models import Max
>>> Book.objects.all().aggregate(Max('price'))
{'price__max': Decimal('81.20')}

# Difference between the highest priced book and the average price of all books.
>>> from django.db.models import FloatField
>>> Book.objects.aggregate(
...     price_diff=Max('price', output_field=FloatField()) - Avg('price'))
{'price_diff': 46.85}

# All the following queries involve traversing the Book<->Publisher
# foreign key relationship backwards.

# Each publisher, each with a count of books as a "num_books" attribute.
>>> from django.db.models import Count
>>> pubs = Publisher.objects.annotate(num_books=Count('book'))
>>> pubs
<QuerySet [<Publisher: BaloneyPress>, <Publisher: SalamiPress>, ...]>
>>> pubs[0].num_books
73

# Each publisher, with a separate count of books with a rating above and below 5
>>> from django.db.models import Q
>>> above_5 = Count('book', filter=Q(book__rating__gt=5))
>>> below_5 = Count('book', filter=Q(book__rating__lte=5))
>>> pubs = Publisher.objects.annotate(below_5=below_5).annotate(above_5=above_5)
>>> pubs[0].above_5
23
>>> pubs[0].below_5
12

# The top 5 publishers, in order by number of books.
>>> pubs = Publisher.objects.annotate(num_books=Count('book')).order_by('-num_books')[:5]
>>> pubs[0].num_books
1323
```