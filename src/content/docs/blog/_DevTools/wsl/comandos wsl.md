wsl --install
wsl --update
wsl --set-default-version 2
wsl --help
--set-default, -s <Distro>

wsl --list
wsl -d name ⇒
wsl --list ⇒ Distribuciones instaladas
wsl --unregister name ⇒ Desinstalar distribucion
code . ⇒ uso de vscode (extencion vc Remote - WSLv0.63.13Preview )
explorer.exe . ⇒ abre una carpeta del directorio


Node.js
Instalación de Versiones:

sudo apt install wget instalador de versiones
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile ⇒ permiso para ejecutar el wget
nvm ls-remote ⇒ ver las versiones de node disponibles
nvm install v16.15.1 ⇒ elegir versión
sudo apt install nodejs instalacion de node
sudo apt install npm Instalacion de npm
nodejs -v Version de node