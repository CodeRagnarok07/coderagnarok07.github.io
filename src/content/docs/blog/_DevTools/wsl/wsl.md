
ok el dia de hoy quisiera realizar este rapido video

sobre las herramientas que mas me ayudan a multiplicar mi productividad a la hora de desarrollar

son 2 simples herramientas que me hacen mi dia mas productivo

el editor de codigo y una terminal poderoza como la de linux

si la verdad que es muy bueno utilizar una terminal de linux para desarrollar cualquier cosa.

basicamente por que los errores son mucho mas faciles de corregir que en windows

pero ya se!
te preguntaras como puedo desarrollar en linux si tengo windows 10

la verdad que eso es lo que le vengo a mostrar

una herrmienta de windos llamada windos subsytem for linux

lo cual significa que puedes tener esta herrmienta de linux a tu dispocion

y te voy a mostrar como combinar estas dos herrmientas

# paso 1

ok asi que comenzamos por instalar nuestro editor de codigo favorito en mi caso visual estudio code

buscamos en google o nuestro buscador de preferencia "vscode"

podemos tener muchos resultados,

code.visualstudio que es la pagina oficial y la pagina de microsoft podemos igualmente descargarlas por igual

aqui tambien tendremos mucha informacion sobre como usar esta herramienta aunque yo te recomiendo que si eres nivel basico mejor

veas algunos cursos aqui en youtube

te dejo algunos canales muy buenos para comenzar en la programacion

entre los beneficios de visual estudio code esta la personalizacion

la intregracion de otras herrmientas por medio de pluggins, como docker, github,

o en concreto wsl que es de lo que trata este tutorial

una vez descargado instalamos, damos aceptar los terminos, siguiente, seleccionamos estas dos casillas que ya te muestro como te ayudaran

y listo aqui como podras ver puedes personalizar esta herramienta y usar la terminal integrada

comenzar a desarrollar

usar una carpeta como ambiente de desarrollo

podemos hacer click derecho dentro de la carpeta y comenzar a usar la carpeta o simplemente arrastrarla

# paso 2

pero esta terminal es muy pobre para desarrollar asi que vamos al paso 2

instalar la terminar de linux

la verdad es que este paso puede ser muy frustrante y puede dar mucho miedo por que hay que realizar algunas configuraciones avanzadas

pero debes superar ese miedo o nunca podras avanzar al siguiente nivel como programador

sip. esto lo digo por mi, ya que pase bastante tiempo limitado por el miedo

y una vez que supere el miedo o las limitaciones, me dije como pude ser tan tonto para no superar esto antes

pero todo a su tiempo


# NOTE el post esta en notion

# Ubuntu en windows para programadores

ya sabemos que linux es ese windows para gente inteligente que no hace otra cosa mas que programar y no se le puede instalar juegos y que todo es libre y sobre todo es no windows

pero aqui podremos echarle un rapido vistaso a linux sin tener que renunciar a windows, a traves de la simple instalacion de una terminal de linux en windows

podremos instalarle programas y toda la cosa y cuando se nos salga de las manos tantas actualizaciones y softwares podemos quemarla y crear otra


1. debemos asegurarnos de que nuestra computadora soporta la virtualizacion de maquinas ya que vamos a instalar una maquina virtual en nuestro ordenador
installamos wsl en windows
reiniciamos?

ejecutamos algunos comandos

wsl --install
wsl --help => vemos todos los comandos posibles
wsl --update
wsl --set-default-version 2

wsl --list => listamos las distribuciones
wsl --install -d Ubuntu
wsl --install --distribution Debian

wsl --import <Distro> <InstallLocation> <FileName> [Options]
wsl --import CentOS E:\wslDistroStorage\CentOS .\centos.tar

wsl --set-default, -s <Distro>
wsl --set-default Ubuntu-20.04


2. ya que no tenemos distribuciones vamos a la store windows y buscamos "ubuntu20" y esperamos que termine la descarga

3. una ves completada la descarga le decimos un usuario y una contraseña, que sea lo mas facil posible

recuerda es un entorno virtual un laboratorio para que las cosas salgan mal, no nos importa que vulneren la seguridad aqui para eso es esto para romperlo para cagarla "para ser testigos de los peligros de la informatica" exageracion; luego si se pone fea la cosa destruimos el entorno virtual

4. pero antes podemos configurar nuestra terminal de windows para ejecutar nustro linux rapidamente
	a. abrimos nuestra terminal nuevamente
wsl -d --list
wsl --setdefault ubunto20
wsl set defaultu wsl2


5. ahora podemos ejecutar nuestro entorno virtual de linux, 
"wsl"
pero esto simplemente lo ejecuta en nuestra carpeta raiz , es como si el entorno virtual tiene que acceder a nuestro sistema y lo ahce muy lento
ejecutamos wsl ~ para acceder a la ruta local del entorno virtual
podemos saber donde esta esa carpeta dentro de nuestra computadora exjecutando 

"explorer.exe ." que es una caracteristica de windows que funciona por ser una instancia creada por windows

6. una ves dentro ejecutamos los comandos de actualizacion de linux

sudo apt update && sudo apt upgrade. => ejecutamos las intalaciones que neesitamos





# Installacion de node 
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts
## Instalación de Versiones: (wget)

```bash
sudo apt install wget //instalador de versiones
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile ⇒ permiso para ejecutar el wget
nvm ls-remote ⇒ ver las versiones de node disponibles
nvm install v16.15.1 ⇒ elegir versión
sudo apt install nodejs instalacion de node
sudo apt install npm Instalacion de npm
nodejs -v Version de node
```
