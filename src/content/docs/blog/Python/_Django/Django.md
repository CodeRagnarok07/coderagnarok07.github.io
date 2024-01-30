
### Filosofia DRY Dont Repeat Yourself

- patron de diseño
    - MVC
    - MTV (Model Template View)
        - Model = recibe informacion de la base de datos  y la manda a la vista
        - Template = como se va a mostrar
        - View = manda o recibe los datos del model y manda los datos al template formato html


    

### Variables de entorno (.env )

> “Son las variables que son sensibles a ataques”
> 

Instalacion: 

`python -m pip install django-environ`

archivo `.evn`

```python
DEBUG=on
DATABASE_URL=sqlite:///db.sqlite3
SECRET_KEY=s1_t1nvs3af$iul#-*rrjhlnz(+u&t!w2(p1jx^1t-eb(@1!hp
ALLOWED_HOSTS=127.0.0.1, localhost

```

`settings.py` 

> importación y creación de la variable
> 

```python
from pathlib import Path

import imp
import django_heroku        ## HEROKU DEPLOY
import dj_database_url      ## HEROKU DEPLOY

from pathlib import Path

import os
import environ   #add this
env = environ.Env(                #add this
    # set casting, default value
    DEBUG=(bool, False)         # add this
)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = Path(__file__).resolve().parent.parent
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))  #add this

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG') 
ALLOWED_HOSTS = [ env('ALLOWED_HOSTS') ]
```


#### alternar entre sqlite3 en local y posgres en produccion

```python
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES = {}
# Usa la variable de entorno DATABASE_URL="esta"
django_heroku.settings(locals())
options = DATABASES['default'].get('OPTIONS', {})
options.pop('sslmode', None)
DATABASES['default'] = dj_database_url.config(conn_max_age=600)
```

---


# 2.- Directorios y templates

### Alojar varias apps en una carpeta

`settings.py`

```python

from pathlib import Path
import os
import sys

# Build paths inside the project like this: BASE_DIR / 'subdir'.

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))
```

Dentro de cada app
apps/core/apps.py

```python
from django.apps import AppConfig

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
	# name = 'core' # antes
    name = 'apps.core' # add thist
```

# Configuraciones basicas

### Configuración View

`view.py`

```html
def index(request):        
    return render(request, "index.html", )   
```

`create templates/index.html`

### Configuración Urls

`urls.py` 

1. `create base/app/urls.py` 
    
    ```python
    from django.contrib import admin
    from django.urls import path, include ###
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('appbase.urls')), #####
    		path('/otraruta', include('otraapp.urls')), #####
    ]
    
    ```
    

Carpeta base

1. `create base/appname/urls.py` 
    
    ```python
    from django.urls import path
    from . import views
    
    urlpatterns = [
        path('', views.index, name='index')
    ]
    ```
    

### Configuración admin app


```python
from django.contrib import admin
from .models import App
# Register your models here.
admin.site.register(App)
```

Personalización Admin 

```python
@admin.register(Model)              # ---- > hace llamar a la clase por funcion directamente
class CursoAdmin(admin.ModelAdmin): # ---- > ya no es clase si no funcion
		# list_display = ('id', 'coloreado', 'creditos')  # -----> lo que se va a mostrar
    # ordering = ('creditos', 'nombre')         # -----> ordenado por puede ser negativo
    # search_fields = ('nombre', 'creditos')   # ---> campo por medio se puede hacer busqueda
    # list_editable = ('nombre','creditos')    # -----> se puede editar todos en la pagina principal
    # list_display_links = ('nombre',)         # -----> agrega un link para modificar
    # list_filter = ('creditos',)              # ----->crea un filtro lateral
    # list_per_page = 3 # Paginación           # -----> divide los objetos en paginas de numero asignado
    # exclude = ('creditos',)  

from django_summernote.admin import SummernoteModelAdmin

class BlogPostAdmin(SummernoteModelAdmin): 
    summernote_fields = ('content', 'body', 'TextArea' )        # Texto enriquecido

admin.site.register(Modelo_Importado, Configuracion_admin )
```

