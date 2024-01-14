
### Filosofia DRY Dont Repeat Yourself

- patron de diseño
    - MVC
    - MTV (Model Template View)
        - Model = recibe informacion de la base de datos  y la manda a la vista
        - Template = como se va a mostrar
        - View = manda o recibe los datos del model y manda los datos al template formato html



# 1.- Entornos virtuales

### Installacion de Pip

 0.- Instalacion de pip

`python -m pip install --upgrade pip`

`python -m pip install virtualenv`

Linux 

`sudo apt install python3-pip python3-virtualenv`

`python3 -m pip install --upgrade pip`


`curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py`   ⇒ descarga paquetes iniciales

`python get-pip.py`

`python -m pip install --upgrade pip`

```
$ sudo apt update
$ sudo apt install python3-venv python3-pip
```

- 2.- requirements.txt
1. `pip list` para saber los paquetes instalados
2. `pip freeze > requirements.txt`  requirements.txt con todos los paquetes
3. `pip install -r requirements.txt`
4. `python -m pip freeze` 
5. `python -m pip uninstall freeze`
6. `python -m pip install django==1.9.`  
- 4.- Registro de las aplicaciones
1. `'aplicacion1'`
  


### Virtualenv:

#### normal
1. python -m pip install virtualenv
2. 1.-Create virtual environment and activate it 
  1. `virtualenv project_name`  
  2. Selecciona la version, previamente descargada 
      1. `virtualenv project -p python3.9.0` 
3. Activacion
  3. `[dir]\scripts\activate.bat`   (for win)
      1.  `\scripts\activate.bat`
  4. `source venv/bin/activate` Linux
      1. `source bin/activate`
      2. para salir del entorno virtual `desactivate`
4. Install Django and create project 
  5. `python -m pip install django`
  6. `django-admin startproject name`
  7. `cd proyect-name`
  8. `python manage.py startapp appName`


#### Crear entorno virtual python3.9.10
```text
$ python3.9 -m pip install --upgrade pip
$ python3.9 -m pip install virtualenv
$ python3.9 -m virtualenv backend -p python3.9.10
```
    

### pipenv

- pasos
    
    instalacion
    
    `python3 -m pip install pipenv`
    
    -Crea dos archivos, lock y pipfile, lock es el que no se debería modificar por nosotros,
    
    -Cambiar versión de python
    Modificar el pip file
    
- hoja de comandos 1
    
    `pipenv shell` ⇒ -Activar el virtual env
    
    `pipenv install [nombre de paquete]`
    
    `pipenv install` ⇒ Crear un environment que tenga las características de nuestro pip file:
    
    `pipenv install`  ⇒ (para crear un environment basado en el pipfile)
    
    `pipenv install -r  requirements.txt` ⇒ Llevar a mi virtual environment mis paquetes de un requirements.txt
    
    `pipenv install [nombre de paquete] --dev` ⇒ -Instalar solo un paquete para nosotros pero que no se vaya a producción
    
    `pipenv install --ignore-pipfile` ⇒ -Crear un environment con lo que tenga un piplock
    
    `pipenv uninstall [nombre de paquete]` ⇒ -Desinstalar un paquete
    
    `pipenv uninstall nombredelibreria`
    `pipenv --rm` ⇒ (para borrar un enviornment)
    
    `pipenv --rm` ⇒ -Eliminar un environment
    
     `pipenv --python [número de versión]` ⇒ -Cambiar versión de python “Modificar el pip file”
    
    `pipenv --venv` ⇒ -Ver el path del virtual environment
    
    `pipenv check` ⇒ -Revisar que nuestros paquetes del environment estén ok
    
    `pipenv lock` ⇒  Actualizar mi pip.lock con los paquetes que tengo en mi pipfile
    
    `pipenv lock -r`  ⇒ Ver los paquetes instalados
    
    `pipenv graph` ⇒ ver los paquetes en arbol de dependencias
    
    `pipenv run python manage.py runserver` ⇒ y para correr el proyecto de django uso:
    
    `pipenv run python [nombre de mi script]`  ⇒ Hacer que funcione un script sin activar el virtual env
    
    `exit`  ⇒Desactivar un virtual env
    
    pipenv lock -r > requirements.txt
    
    pipenv lock -r -d > requirements.txt
    

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

