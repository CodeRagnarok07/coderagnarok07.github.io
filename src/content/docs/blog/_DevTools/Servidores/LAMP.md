
- https://geekrewind.com/how-to-install-phpmyadmin-on-windows-wsl-with-apache/
- https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-22-04



# Apache2

sudo apt update
sudo apt install apache2


sudo service apache2 stop
sudo service apache2 start
sudo service apache2 restart


abrir en el explorador
```
http://localhost
http://your_server_ip
```


## instalacion de php

sudo apt install php libapache2-mod-php php-common php-mysql php-gmp php-curl php-intl php8.1-mbstring php-xmlrpc php-gd php-xml php-cli php-zip
php -v

sudo nano /var/www/html/phpinfo.php
<?php phpinfo( ); ?>

sudo service apache restart



## configuracion de apache

existen 3 directorios que debemos entender 

1.- /var/www/[nombre de algun proyecto] aqui deberian estar ubicados nuestros proyectos
el archivo `/etc/apache2/sites-available/000-default.conf` 
en la linea 12 `DocumentRoot /var/www/html` llama a toda esa carpeta como host statico

como los archivos `/var/www/html/phpinfo.php` y `/var/www/html/index.html`

http://localhost/ y http://localhost/phpinfo.php correspondientes





# install mysql

sudo apt install mysql-server


sudo service mysql stop
sudo service mysql start
sudo service mysql restart

sudo mysql_secure_installation

no al primero
y si a todo lo demas


# instalacion de phpmyadmin



sudo apt install phpmyadmin


sudo mysql
USE mysql;
UPDATE user SET plugin='' WHERE user ='root';
FLUSH PRIVILEGES;
EXIT;



root
password


- https://earhackerdem.github.io/wsl/configurarWslParaEntornoDeDesarrollo.html#instalarPhpMyAdmin




