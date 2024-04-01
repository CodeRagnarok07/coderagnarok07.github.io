# instalacion de varias distros

https://learn.microsoft.com/es-es/windows/wsl/use-custom-distro

# descargar de distro
https://github.com/NotGlop/docker-drag

 


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

# configuracion de distro instalaciones para alpine
https://terminaldelinux.com/terminal/administracion/instalar-y-configurar-sudo/
instalacion de sudo
```
apt-get update && apt upgrade -y && apt-get install sudo && sudo apt-get install git curl wget -y

apt-get update && apt-get install -y lsb-release && apt-get clean all
```

$ su - root
$ createuser --interactive -P root
Enter password for new role:
Enter it again:
Shall the new role be a superuser? (y/n) y



sudo apt-get install nano


# distro decente

https://gist.github.com/cristian-aldea/c8f91187de922303fa10c6e5fd85e324

```
# update packages
sudo apt update

# install required packages
sudo apt install zsh git curl -y

# verify zsh installation
zsh --version

# Set the default shell to zsh
sudo chsh -s $(which zsh) $(whoami)

# Install oh-my-zsh: https://ohmyz.sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install Powerlevel10k: https://github.com/romkatv/powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

nano ~/.zshrc

ZSH_THEME="powerlevel10k/powerlevel10k"


# instalcion de python3

sudo apt install libgmp3-dev libpq-dev python3 python3-virtualenv -y

# instalacion de Node

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs