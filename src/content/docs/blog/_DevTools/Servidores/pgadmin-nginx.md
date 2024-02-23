# instalacion de nginx

# instalacion de python

# instalacion de pgAdmin

sudo apt install libgmp3-dev libpq-dev python3 python3-virtualenv curl gnupg



# PgAdmin server (python)
https://www.pgadmin.org/download/pgadmin-4-python/

## entorno virtual 

cd /var/www/
python3 -m virtualenv pgadmin4
source pgadmin4/bin/activate
pip install pgadmin4
nano pgadmin4/lib/python3.10/site-packages/pgadmin4/config_local.py

``` pgadmin4/lib/python3.10/site-packages/pgadmin4/config_local.py
LOG_FILE = '/var/log/pgadmin4/pgadmin4.log'
SQLITE_PATH = '/var/lib/pgadmin4/pgadmin4.db'
SESSION_DB_PATH = '/var/lib/pgadmin4/sessions'
STORAGE_DIR = '/var/lib/pgadmin4/storage'
AZURE_CREDENTIAL_CACHE_DIR = '/var/lib/pgadmin4/azurecredentialcache'
KERBEROS_CCACHE_DIR = '/var/lib/pgadmin4/kerberoscache'
```

pgadmin4



# implementacion en nginx unicord


sudo apt install nginx
sudo service nginx start

```sh nginx comandos
sudo service nginx stop && sudo service nginx start
sudo service nginx restart
```

nano /etc/nginx/sites-available/pgadmin4
sudo ln -s /etc/nginx/sites-available/pgadmin4 /etc/nginx/sites-enabled/pgadmin4

```txt
server {
	listen 80; #Listening on port 80 IPv4
	listen [::]:80; #In most cases, when starting nginx -t gives an error, is sent to this line, when you get an error, comment out the line
	server_name test_domain.ru www.test_domain.ru; #Server name
	
	location /pgadmin4/ {
		include proxy_params;
		proxy_pass http://unix:/tmp/pgadmin4.sock;
		proxy_set_header X-Script-Name /pgadmin4;
	}
}
```
deactivate


## comando de activacion de pgadmin con unicord

```
source /var/www/pgadmin4/bin/activate &&  gunicorn --bind unix:/tmp/pgadmin4.sock --workers=1 --threads=25 --chdir /var/www/pgadmin4/lib/python3.10/site-packages/pgadmin4 pgAdmin4:app
```

http://localhost/pgadmin4/




referencias: 
- https://www.pgadmin.org/docs/pgadmin4/latest/server_deployment.html#python
- https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-pgadmin-4-in-server-mode-on-ubuntu-22-04
- https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04

## administrar procesos pm2

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install pm2 -g
pm2 --name=pgadmin4 start "source /var/www/pgadmin4/bin/activate &&  gunicorn --bind unix:/tmp/pgadmin4.sock --workers=1 --threads=25 --chdir /var/www/pgadmin4/lib/python3.10/site-packages/pgadmin4 pgAdmin4:app"
pm2 init
vim ecosystem.config.js

```json
module.exports = {
  apps : [
  {
    name: 'pgadmin4',
    cmd: 'gunicorn',
    args: '--bind unix:/tmp/pgadmin4.sock --workers=1 --threads=25 --chdir /var/www/pgadmin4/lib/python3.10/site-packages/pgadmin4 pgAdmin4:app',
    watch: true,    
	interpreter: '/var/www/pgadmin4/bin/python'
  },
};

```

pm2 start ecosystem.config.js


# instalacion de base de datos

https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

sudo apt install postgresql postgresql-contrib -y
psql --version


sudo service postgresql status for checking the status of your database.
sudo service postgresql start to start running your database.
sudo service postgresql stop to stop running your database.


## Conectar pgadmin4

sudo su - postgres
postgres@DESKTOP-1T9P0KN:~$ psql

postgres

alter user postgres with encrypted password 'postgres';
\q


## en la interface web:

servers > register > server

name: postgres

conection 
> host name/address: localhost
port: 5432
username: postgres
password: postgres


creamos una nueva base de datos llamada django


# configuracion proyecto python

sudo apt install python3 python3-virualenv
python3 -m virtualenv .venv
soruce .venv/bin/activate

pip install django psycopg2


# base de datos conection

django-admin startproject config .

nano ./config/settings.py

```py
ALLOWED_HOSTS = ['*', 'localhost']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'django',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

STATIC_ROOT = "static"

```



python manage.py check
python manage.py migrate

http://localhost:8000/admin


### levantamos el proyecto con gunicord

source /var/django/.venv/bin/activate
pip install gunicorn


deactivate
```
source /var/www/django/.venv/bin/activate &&  gunicorn --bind unix:/tmp/django.sock --workers=1 --threads=25 --chdir /var/www/django config.wsgi:application
```

si es exitoso ahora configuramos el pm2

nano ~/ecosystem.config.js


module.exports = {
  apps : [
       {
        name: 'pgadmin4',
        cmd: 'gunicorn',
        args: '--bind unix:/tmp/pgadmin4.sock --workers=1 --threads=25 --chdir /var/www/pgadmin4/lib/python3.10/site-packages/pgadmin4 pgAdmin4:app',
        watch: true,
        interpreter: '/var/www/pgadmin4/bin/python'
       },
	   {
        name: 'django',
        cmd: 'gunicorn',
        args: '--bind unix:/tmp/django.sock --workers=1 --threads=25 --chdir /var/www/django config.wsgi:application',
        watch: true,
        interpreter: '/var/www/django/.venv/bin/python'
       }
  ],
};

{
        name: 'django',
        cmd: 'gunicorn',
        args: '--bind unix:/tmp/django.sock --workers=1 --threads=25 --chdir ~/django config.wsgi:application',
        watch: true,
        interpreter: '~/django/.venv/bin/python'
       }

pm2 restart ecosystem.config.js

pm2 save
pm2 startup

nano /var/www/django/config/url



# configuraciones de  nginx


nano /etc/nginx/sites-available/default

server {

        listen 80; #Listening on port 80 IPv4
        listen [::]:80; #In most cases, when starting nginx -t gives an error, is sent to this line, when you get an error, comment out the line
        server_name django testing; #Server name

		location / {
                root /var/www/html;
                # Add index.php to the list if you are using PHP
                index index.html index.htm index.nginx-debian.html;
                server_name _;
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
        location /pgadmin4/ {
                include proxy_params;
                proxy_pass http://unix:/tmp/pgadmin4.sock;
                proxy_set_header X-Script-Name /pgadmin4;
        }
		
		location /django/ {
                include proxy_params;
                proxy_pass http://unix:/tmp/django.sock;
                proxy_set_header X-Script-Name /django;
        }

        location /static/ {
                autoindex on;
				alias /var/www/django/static/;
                # root /var/www/django/static/;
                # proxy_set_header X-Script-Name /static;               
        }
}



# auto start

sudo service nginx start && sudo service postgresql start && pm2 restart ecosystem.config.js
















## postgresql

```txt
[Unit]
Description=PostgreSQL database server
Documentation=man:postgres(1)

[Service]
Type=notify
User=postgres
ExecStart=/usr/lib/postgresql/<version>/bin/postgres -D /var/lib/postgresql/<version>/main -c config_file=/etc/postgresql/<version>/main/postgresql.conf
ExecReload=/bin/kill -HUP $MAINPID
KillMode=mixed
KillSignal=SIGINT
TimeoutSec=0

[Install]
WantedBy=multi-user.target
```

$ sudo chown root:root /etc/systemd/system/postgresql.service
$ sudo chmod 644 /etc/systemd/system/postgresql.service


sudo systemctl daemon-reload
sudo systemctl enable postgresql
systemctl enable nginx




- https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04
curl https://github.com/nginx/nginx/blob/master/conf/uwsgi_params > uwsgi_params