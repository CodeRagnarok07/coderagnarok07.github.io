
# instalacion de varias distros

https://learn.microsoft.com/es-es/windows/wsl/use-custom-distro



ver distros disponibles
```sh
wsl -l
```

comando para crear nueva distro 
```sh
wsl --import namedistro ./path/distro/fisico distro.tar

wsl --import pg ./pg ubuntu.tar
```

Eliminar Distro
```sh
wsl --unregister distroname
```

### instalaciones para alpine


https://terminaldelinux.com/terminal/administracion/instalar-y-configurar-sudo/
instalacion de sudo
```
apt-get update && apt upgrade && apt-get install sudo && sudo apt-get install git curl -y
 
```

$ su - root
$ createuser --interactive -P root
Enter password for new role:
Enter it again:
Shall the new role be a superuser? (y/n) y





sudo apt-get install nano


# distro decente

apt-get update

sudo apt install zsh git curl -y

https://gist.github.com/cristian-aldea/c8f91187de922303fa10c6e5fd85e324