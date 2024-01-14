
# sites-available/tatsite.arasait.com

server {
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;
        client_max_body_size 200M;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                # root /home/ubuntu/web/frontend/.next/static;
        }

}
server {
        listen   443 ssl;
        ssl    on;
        ssl_certificate    /etc/ssl/arasait.com_ssl_certificate.cer;
        ssl_certificate_key    /etc/ssl/_.arasait.com_private_key.key;

        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;
        client_max_body_size 200M;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        location /back {
                include proxy_params;
                proxy_pass http://unix:/run/gunicorn.sock;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
}


# sites-available/tatsite.arasait.com

server {
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;
        client_max_body_size 200M;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                # root /home/ubuntu/web/frontend/.next/static;
        }

}
server {
listen   443 ssl;
        ssl    on;
        ssl_certificate    /etc/ssl/arasait.com_ssl_certificate.cer;
        ssl_certificate_key    /etc/ssl/_.arasait.com_private_key.key;

        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;
        client_max_body_size 200M;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        location /back {
                include proxy_params;
                proxy_pass http://unix:/run/gunicorn.sock;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
}
