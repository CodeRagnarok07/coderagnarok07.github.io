# Instalación en Linux

```
$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
 
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
 
$ sudo apt-get update
 
$ sudo apt-get -y install postgresql postgresql-contrib
$ sudo apt-get install libpq-dev
 


```

`sudo apt-get -y install postgresql postgresql-contrib`  ⇒ paquetes necesarios 

`sudo apt-get install libpq-dev`  Forzar la instalación

# Install postgres and create database

#### 1. **.- Install PostgresSQl**

```text
$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get -y install postgresql postgresql-contrib
$ sudo apt-get install libpq-dev
```

#### 2. **execute postgresql**

```text
$ sudo service postgresql status
$ sudo service postgresql start
```

#### 3. **Create database and password**

```text
sudo -u postgres psql => start console
postgres=# alter user Postgres with password 'newPasword';
postgres=# CREATE DATABASE name;
```

# installacion en Win

1. PostgreSQL
    https://tutorial-extensions.djangogirls.org/es/optional_postgresql_installation
2. agregarlo al PATH por consola
        `setx PATH "%PATH%;C:\Program Files\PostgreSQL\12\bin"`
3. abrir pgAdmin 4 
        crear la base de datos ---> que luego sera  
4. psycopg2 


### pgadmin

1. conectarse ⇒ click add new conecction
    1. Name ⇒ cualquiera
    2. Host ⇒ localHost

### Uso pgadmin win mediante WSL2

[Programas en Linux](https://www.notion.so/Programas-en-Linux-081dfc3dcfdd4ee6976d58026a6998ca) 

[Set up PostgreSQL on WSL2 and Connect to PostgreSQL with pgAdmin on Windows](https://chloesun.medium.com/set-up-postgresql-on-wsl2-and-connect-to-postgresql-with-pgadmin-on-windows-ca7f0b7f38ab)

Configura la contraseña : 

`ALTER USER postgres PASSWORD 'newPassword';`  NO OLVIDES EL PUNTO Y COMA

- Error Connection refused
    
    `sudo -u postgres psql -c 'SHOW config_file'` ubicar el archivo
    
    `sudo vim /etc/postgresql/12/main/postgresql.conf` ⇒ modificar el archivo
    
    ‣ 
    
    Sustituir la linea ⇒ `listen_addresses = '*'`
    
    `sudo vim /etc/postgresql/12/main/pg_hba.conf`
    
    `sudo service postgresql restart` ⇒ reiniciar pstgre 
    
    ```python
    local   all         postgres                          ident
    
    # IPv4 local connections:
    host    all             all             127.0.0.1/32            md5
    host    all             all             172.0.0.0/8             md5
    ```
    

1. en ‘win’ abre pgadmin
    1. Databases -> Create ->Database


# PostgreSQL en Django

### Instalación de psycopg2

Previamente instalar PostgreSql

`pip3 install psycopg2-binary ==2.8.6`

`pip3 install psycopg2==2.9.3 ==2.8.6`

> para la versión correcta de python `https://github.com/nwcell/psycopg2-windows`
> 
- Crea una base de datos desde pgAdmin
