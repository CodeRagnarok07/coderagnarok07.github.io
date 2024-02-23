
# conectar por ssh a un servidor de aws


54.205.189.169 este es el ip 

ssh -i /path/key-pair-name.pem instance-user-name@instance-public-dns-name
ssh -i ./aws/upisa.pem ubuntu@54.205.189.169

## error unprotected private key file error?
```sh
$ chmod 400 /path/key-pair-name.pem
```




- https://99robots.com/how-to-fix-permission-error-ssh-amazon-ec2-instance/
