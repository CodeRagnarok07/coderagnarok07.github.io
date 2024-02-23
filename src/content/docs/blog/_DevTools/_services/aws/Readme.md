## Crea un usuario con permisos
sudo su -
passwd ubuntu
ubuntu pass
adduser USERNAME

## configuracion de hostname

- hostnamectl set-hostname nombre.dominio.com
- sudo hostnamectl set-hostname tatsite.arasait.com

```yml
Static hostname: ip-172-26-12-32
Icon name: computer-vm
Chassis: vm
Machine ID: 199d2c8323144599ab8b21798af24ea4
Boot ID: 85220d20f2d94d5ba254fbb339247d73
Virtualization: xen
Operating System: Ubuntu 20.04.5 LTS
Kernel: Linux 5.4.0-1018-aws
Architecture: x86-64
```

# configuracion ngixn
sudo nginx -t
sudo systemctl restart nginx

modifica
`sudo nano /etc/nginx/sites-available/tatsite.arasait.com`
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        location /:8000 {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;

                # include proxy_params;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
 }
```
 

```
server {
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;

        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        # location = /favicon.ico { access_log off; log_not_found off; }
        # location /static/ {
        #         root home/ubuntu/web/backend/static;
        # }

        location /front/ {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                # root /home/ubuntu/web/frontend/.next/static;
        }
        location / {
                include proxy_params;
                proxy_pass http://unix:/run/gunicorn.sock;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
}
```


tatsite.arasait.com
/etc/nginx/sites-available/tatsite.arasait.com
copia la configuracion por default
`sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/tatsite.arasait.com`

habilitar
`sudo ln -s /etc/nginx/sites-available/tatsite.arasait.com /etc/nginx/sites-enabled`


sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled




# configuracion gunicorn
https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04

sudo vim /etc/systemd/system/gunicorn.service
```yml
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/web/backend
ExecStart=/home/ubuntu/web/backend/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          config.wsgi:application

[Install]
WantedBy=multi-user.target
```

gunicorn --bind 0.0.0.0:8000 config.wsgi



sudo systemctl start gunicorn.socket
sudo systemctl status gunicorn.socket
sudo systemctl daemon-reload.socket && sudo systemctl restart gunicorn.socket


gunicorn app:application --preload -b 0.0.0.0:8000 

PYTHONPATH=`pwd`/.. gunicorn --bind 0.0.0.0:8000 config.wsgi:application


# configuracion servicio nginx backend

```bash
server {
        listen 80;
        server_name IP;
        location = /favicon.ico { access_log off; log_not_found off; }
        location /static/ {
            root /home/ubuntu/web;
        }
        location / {
            include proxy_params;
            proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
    }
```





## certificado ssl
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tatsite.arasait.com -d www.tatsite.arasait.com


# ejecuciones de ngixn
habilitar
`sudo ln -s /etc/nginx/sites-available/tatsite.arasait.com /etc/nginx/sites-enabled`
sudo vim /etc/nginx/sites-available/tatsite.arasait.com
sudo vim /etc/nginx/sites-enabled/tatsite.arasait.com
sudo rm -rf  /etc/nginx/sites-available/*
sudo rm -rf  /etc/nginx/sites-enabled/*
sudo nginx -t

sudo systemctl restart nginx


# restar server

### backend
sudo systemctl start gunicorn.socket
sudo systemctl status gunicorn.socket
sudo systemctl daemon-reload && sudo systemctl restart gunicorn 


### frontend next

$ cd web/frontend
$ pm2 start "npm run start -- -p 3000" --name front
$ pm2 start r.js –name back






$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>

pm2ls
pm2 restart nextfrontend 






# pm2 en win

crea un script run.js

```js
var cmd=require('node-cmd'); cmd.run('npm run start -- -p 3000');
```

pm2 start r.js –-name front


### ejecutar pm2 tras reinicio
npm install pm2 -g // instala pm2 de forma global
npm install pm2-windows-startup -g // instala pm2-windows-startup de forma global
pm2-startup install // configura el registro de Windows para que pm2 save  funcione
pm2 start myApp.js –name mySuperApp
pm2 save // ¡Ahora si sirve para algo!
reinicia la máquina….
pm2 status y verás tu proceso que se ha guardado perfectamente



http://tatsite.arasait.com/

# referencias
- https://austinogiza.medium.com/deploying-react-and-django-rest-framework-with-nginx-and-gunicorn-7a0553459500
- https://www.shawndsilva.com/blog/systems-administration-and-devops/hosting-multiple-full-stack-web-projects-on-one-vps-using-nginx-and-docker
- https://dev.to/nsengiyunva/deploy-a-python-django-and-reactjs-restful-app-with-gunicorn-supervisor-and-nginx-on-a-linux-ubuntu-server-3b3n
- https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04




# docker

python manage.py collectstatic


### docker file 
docker build -t django .
docker run -p 8000:8000 django-s
docker run -it django bash 

# docker hub

docker tag tat-django ragnarokf17/tat-django
docker push ragnarokf17/tat-django

### Comandos de docker compose:

`docker-compose build` guarda las modificaciones realizadas de los archivos dockerfile
`docker-compose up` levanta el servidor de (de manera interactiva con nuestro codigo)

`docker rm $(docker ps -aq) -f`  ⇒ Fuerza a detener y eliminar los contenedores
`docker rmi $(docker images -aq)` ⇒ Script que elimina todas las imagenes 
docker rm $(docker ps -aq) -f && docker rmi $(docker images -aq)

### debugg

export DOCKER_BUILDKIT=0 
sudo rm ~/.docker/config.json

### Hoja de comandos para la administracion de docker:
“Docker hub para ver las imágenes disponibles” docker images ⇒ verifica todas las imagenes disponibles

```
- docker version
- docker pull hello-word ⇒ descarga la imagen
- docker run hello-word ⇒ ejecuta la imagen

- docker search [nombre de la imagen] ⇒ Busca las versiones de las imágenes
- docker run ubuntu echo 'hello world' ⇒ ejecuta los programas disponibles dentro de la imagen
- docker run -it ubuntu bash ⇒ ejecuta de manera interactiva los programas disponibles dentro de la imagen
- “ todos los contenedores al crearse mueren vuelven a un estado en stop automáticamente”

- docker ps ⇒ muestra las imágenes que están en ejecución y sus datos
- docker ps -a ⇒ todos los contenedores existentes en stop
- docker ps -aq ⇒ todos los contenedores existentes en stop solo mostrando una lista de id’s
- docker rm [id o nombre] ⇒ elimina del historial un contenedor ejecutado a través del nombre o id devuelto en el historial
- docker rm $(docker ps -aq) ⇒ Script que elimina todos los contenedores en stop
- docker rm $(docker ps -aq) -f ⇒ Fuerza a detener y eliminar los contenedores
- docker rmi [nombre de la imagen] ⇒ elimina una imagen del sistema
- docker rmi $(docker images -aq) ⇒ Script que elimina todas las imagenes

- docker start [id o nombre] ⇒ vuelve a ejecutar un contenedor del historial o en stop
- docker stop [id o nombre] ⇒ detiene el contenedor en ejcucion
- docker exec -it [id o nombre] bash ⇒ ejecuta un programa disponible dentro del contenedor en un contenedor previamente creado
```

# Backend: 





pm2 start manage.py -- runserver --interpreter .\envw\scripts\activate.bat --name back 


module.exports = {
   apps:
      [{
        name: "back",
        script: "manage.py",
        args: ["runserver", "0.0.0.0:8080"],
        exec_mode: "fork",
        instances: "1",
        wait_ready: true,
        autorestart: false,
        max_restarts: 5,
        interpreter : "python"
      }]
};



$ pm2 start "npm run start -- -p 3000" --name front

envw\scripts\activate.bat

pm2 start manage.py -- runserver --interpreter python --name back 