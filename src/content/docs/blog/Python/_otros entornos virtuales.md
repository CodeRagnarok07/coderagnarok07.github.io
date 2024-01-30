
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
