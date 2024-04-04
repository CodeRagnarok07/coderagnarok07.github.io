# Instalación y creación del Proyecto en heroku
    
1. **Signup** for **[Heroku](https://signup.heroku.com/)** if you don't have an existing account
2. **Install** the **[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)**.
    1. `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`
    2. `npm install -g heroku`
3. Login in cdm  `heroku login -i`
4. **Create** a n*ew Heroku app*either via Heroku CLI (`$ heroku create APP_NAME`) or directly in the **[Heroku dashboard](https://dashboard.heroku.com/)**:

heroku git:remote -a rierangel 
5. Add remote git heroku `$ heroku git:remote -a your-heroku-app`   (go to your project)
6. Configurar los buildpacks
    1. `heroku plugins:install buildpacks`
    2. `heroku plugins:install buildpack-registry`
    3. `heroku buildpacks`
    4. `heroku buildpacks:set heroku/python`
    5. `heroku buildpacks:add --index 1 heroku/nodejs`
    

# Configuración de las variables de entorno en heroku

1. Configuraciones de variables de entorno en producción
    
`heroku config:set ALLOWED_HOSTS=todo-reactdj.herokuapp.com`
`heroku config:set SECRET_KEY=DJANGO_SECRET_KEY`
`heroku config:set WEB_CONCURRENCY=1`
`heroku config:set DISABLE_COLLECTSTATIC=1`
    
2. Variables de entorno locales en el archivo `.env`

```text
DATABASE_URL=sqlite:///db.sqlite3
DATABASE_URL=postgres://postgres:123456@localhost:5432/vocabulary_app             
                                                user:password@host:port/namedatabase

SECRET_KEY=s1_t1nvs3af$iul#-*rrjhlnz(+u&t!w2(p1jx^1t-eb(@1!hp
DEBUG=False
ALLOWED_HOSTS=127.0.0.1, localhost
```
>`recuerda agregarlo al .gitignore`
  

# Alternar entre la base de datos local y de produccion usando variables de entorno
    
1. installaciones 

```python
pip install django-environ # no environ
pip install dj_database_url django_heroku
```

    
2. Actualiza el `settings.py` para la lectura de las variables de entorno locales

```python
import imp
import django_heroku        ## HEROKU DEPLOY
import dj_database_url      ## HEROKU DEPLOY
from pathlib import Path
import os
import environ   #add this

env = environ.Env(                #add this
    # set casting, default value
    # DEBUG=(bool, False)         # add this
)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = Path(__file__).resolve().parent.parent
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))  #add this
```
    
3. Uso de las variables de entorno en local `settings.py` 
    
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
    
# Espesificacion de los archivos static
    
```python
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
X_FRAME_OPTIONS = 'SAMEORIGIN'
```
        
# Archivos de ejecucion en heroku

1. Crea un archivo `runtime.txt`
    
    ```python
    python-3.9.5
    ```
    
2. Crea un archivo `Procfile` y agrega lo siguiente “”
    
    modificar el “backend” por el nombre de la carpeta que contiene settings.py
    
    `Procfile` :
    
    ```python
    release: python manage.py migrate
    web: gunicorn backend.wsgi --log-file -
    ```
3. Recuerde ejecutar `pip freeze > requirements.txt`


# Los requirements
    
```python
asgiref==3.4.1
backports.zoneinfo==0.2.1
bleach==4.1.0
dj-database-url==0.5.0
Django==4.0.1
django-cors-headers==3.11.0
django-debug-toolbar==3.2.4
django-environ==0.8.1
django-heroku==0.3.1
django-summernote==0.8.20.0
djangorestframework==3.13.1
gunicorn==20.1.0
packaging==21.3
psycopg2==2.9.3
psycopg2-binary==2.9.3
pyparsing==3.0.7
pytz==2021.3
six==1.16.0
sqlparse==0.4.2
webencodings==0.5.1
whitenoise==5.3.0
```
    
# Add new database
    
```
heroku addons:create heroku-postgresql:hobby-dev
heroku config -s | grep DATABASE_URL
```

# Comando de heroku

`heroku logs --tail`


# pull heroku to local database

### 1. get DATABASE_URL
```text
heroku pg:psql 
Connecting to HEROKU_POSTGRESQL_RED...
```

### 2. pull to local db Postgres

```
PGUSER=localuserpg PGPASSWORD=localpassword heroku pg:pull DATABASE_URL mylocaldb --app nameherokuapp
```
1 solucion 1 crear otro usuario
`$sudo -u postgres createuser -s $YOUR_USERNAME [-P]`
`postgres=# ALTER USER postgres with password 'postgres';`

https://stackoverflow.com/questions/65222869/how-do-i-solve-this-problem-to-use-psql-psql-error-fatal-role-postgres-d
```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'test', #< == nombre de la base de datos creada en pgadmin
            'USER': 'postgres',
            'PASSWORD': 'clave de instalacion',
            'HOST': 'localhost',
            'PORT': 5432,
        }
    }
```
