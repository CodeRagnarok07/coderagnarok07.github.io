# pgadmin on wsl or vps


sudo apt install libgmp3-dev libpq-dev


## crear los directorios


sudo mkdir -p /var/lib/pgadmin4/sessions
sudo mkdir /var/lib/pgadmin4/storage
sudo mkdir /var/log/pgadmin4

## Crear usuario serverspace:

useradd -m serverspace
Luego, una nueva frase de contraseña para el usuario. serverspace se debe establecer:
passwd serverspace
Añádalo al sudo grupo:
usermod -aG sudo serverspace
A continuación, cambie los propietarios del directorio de raíz a serverspace, algunas utilidades no permiten el acceso para ejecutar servicios como root:

sudo chown -R serverspace:serverspace /var/lib/pgadmin4
sudo chown -R serverspace:serverspace /var/log/pgadmin4


## crear entorno de python

sudo apt update && sudo apt upgrade -y
sudo apt install python3
sudo apt install python3-virtualenv -y


mkdir test/

python3 -m pip install -U pip


source /root/test/test_env/bin/activate


## instalar paquetes para pgadmin

python -m pip install wheel

https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v8.2/pip/pgadmin4-8.2-py3-none-any.whl
python -m pip install pgadmin4-8.2-py3-none-any.whl

python -m pip install gunicorn




cd /root/test_env/lib/python3.10/site-packages/pgadmin4/

cp config.py config.py.orig
nano /test_env/lib/python3.10/site-packages/pgadmin4/config_local.py

```
LOG_FILE = '/var/log/pgadmin4/pgadmin4.log'
SQLITE_PATH = '/var/lib/pgadmin4/pgadmin4.db'
SESSION_DB_PATH = '/var/lib/pgadmin4/sessions'
STORAGE_DIR = '/var/lib/pgadmin4/storage'
AZURE_CREDENTIAL_CACHE_DIR = '/var/lib/pgadmin4/azurecredentialcache'
SERVER_MODE = True
```


# instalacion de pgadmin


curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -



$ sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add
$ sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/focal pgadmin4 main" \
  > /etc/apt/sources.list.d/pgadmin4.list && apt update'
$ sudo apt update
$ sudo apt install pgadmin4-web 
$ sudo /usr/pgadmin4/bin/setup-web.sh



pgadmin4



- https://serverspace.io/es/support/help/initial-setup-of-ubuntu-server-22-04/
- https://www.digitalocean.com/community/tutorials/how-to-install-configure-pgadmin4-server-mode-es

# implementacion en nginx unicord

sudo apt install nginx

cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default_0
nano /etc/nginx/sites-available/default


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




gunicorn 
	--bind unix:/tmp/pgadmin4.sock 
	--workers=1 
	--threads=25 
	--chdir /root/test/test_env/lib/python3.10/site-packages/pgadmin4 pgAdmin4:app