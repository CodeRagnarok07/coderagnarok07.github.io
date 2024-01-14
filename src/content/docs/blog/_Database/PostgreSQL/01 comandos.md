# Uso de la base de datos

- `psql --version`  ⇒ Chequear la version
- `sudo -u postgres psql`
    - postgres ⇒ usuario predeterminado
    - psql ⇒ comando de iniciación de la base de datos

### Comenzar la base de datos

- `sudo service postgresql status` for checking the status of your database.
- `sudo service postgresql start` to start running your database.
- `sudo service postgresql stop` to stop running your database.
- `sudo passwd postgres` You will get a prompt to enter your new password.

### uri conection
postgres://USER:PASSWORD@HOST:PORT/NAME 

### Comandos de postgreSql terminal

- `\l`  ⇒ listado de bases de datos
- `\q`  ⇒ salir de psql
- `\c` ⇒ entra en la base de datos listada
- `alter user postgres with password 'postgres';`  ⇒ modifica o restablece la contraseña del usuario `postgres`
- Una ves dentro de una base de datos con `\c` se hace uso de las sentencias sql
- `drop database;`  ⇒ elimina la base de datos

- hotkey
    - `q` ⇒ salir

`CREATE DATABASE name;`  ⇒ crea una nueva base de datos

#### ***Comandos de ayuda***

En consola los dos principales comandos con los que podemos revisar el todos los comandos y consultas son:

- **`\?`** Con el cual podemos ver la lista de todos los comandos disponibles en consola, comandos que empiezan con backslash ( \ )

![https://static.platzi.com/media/user_upload/2-f3fd936e-bdb2-4583-afce-1899ca222a77.jpg](https://static.platzi.com/media/user_upload/2-f3fd936e-bdb2-4583-afce-1899ca222a77.jpg)

- **`\h`** Con este comando veremos la información de todas las consultas SQL disponibles en consola. Sirve también para buscar ayuda sobre una consulta específica, para buscar información sobre una consulta específica basta con escribir **`\h`** seguido del inicio de la consulta de la que se requiera ayuda, así: **`\h ALTER`**

De esta forma podemos ver toda la ayuda con respecto a la consulta ***ALTER***

![https://static.platzi.com/media/user_upload/3-ee850ea6-271e-4826-9d8f-aa054dddc3fc.jpg](https://static.platzi.com/media/user_upload/3-ee850ea6-271e-4826-9d8f-aa054dddc3fc.jpg)

#### ***Comandos de navegación y consulta de información***

- **`\c`** Saltar entre bases de datos
- **`\l`** Listar base de datos disponibles
- **`\dt`** Listar las tablas de la base de datos
- **`\d <nombre_tabla>`** Describir una tabla
- **`\dn`** Listar los esquemas de la base de datos actual
- **`\df`** Listar las funciones disponibles de la base de datos actual
- **`\dv`** Listar las vistas de la base de datos actual
- **`\du`** Listar los usuarios y sus roles de la base de datos actual

#### ***Comandos de inspección y ejecución***

- **`\g`** Volver a ejecutar el comando ejecutando justo antes
- **`\s`** Ver el historial de comandos ejecutados
- **`\s <nombre_archivo>`** Si se quiere guardar la lista de comandos ejecutados en un archivo de texto plano
- **`\i <nombre_archivo>`** Ejecutar los comandos desde un archivo
- **`\e`** Permite abrir un editor de texto plano, escribir comandos y ejecutar en lote. **\e** abre el editor de texto, escribir allí todos los comandos, luego guardar los cambios y cerrar, al cerrar se ejecutarán todos los comandos guardados.
- **`\ef`** Equivalente al comando anterior pero permite editar también funciones en PostgreSQL

#### ***Comandos para debug y optimización***

- **`\timing`** Activar / Desactivar el contador de tiempo por consulta

#### ***Comandos para cerrar la consola***

- **`\q`** Cerrar la consola


 
# Manejo de la base de datos postgres
        

#### **La Consola**

La consola en PostgreSQL es una herramienta muy potente para crear, administrar y depurar nuestra base de datos. podemos acceder a ella después de instalar PostgreSQL y haber seleccionado la opción de instalar la consola junto a la base de datos.

PostgreSQL está más estrechamente acoplado al entorno UNIX que algunos otros sistemas de bases de datos, utiliza las cuentas de usuario nativas para determinar quién se conecta a ella (de forma predeterminada). El programa que se ejecuta en la consola y que permite ejecutar consultas y comandos se llama psql, psql es la terminal interactiva para trabajar con PostgreSQL, es la interfaz de línea de comando o consola principal, así como PgAdmin es la interfaz gráfica de usuario principal de PostgreSQL.

Después de emitir un comando PostgreSQL, recibirás comentarios del servidor indicándote el resultado de un comando o mostrándote los resultados de una solicitud de información. Por ejemplo, si deseas saber qué versión de PostgreSQL estás usando actualmente, puedes hacer lo siguiente:

![https://static.platzi.com/media/user_upload/1-3db23704-3297-40cf-b3fc-27ec761a2579.jpg](https://static.platzi.com/media/user_upload/1-3db23704-3297-40cf-b3fc-27ec761a2579.jpg)


#### ***Ejecutando consultas en la base de datos usando la consola***

De manera predeterminada PostgreSQL no crea bases de datos para usar, debemos crear nuestra base de datos para empezar a trabajar, verás que existe ya una base de datos llamada ***postgres*** pero no debe ser usada ya que hace parte del CORE de PostgreSQL y sirve para gestionar las demás bases de datos.

Para crear una base de datos debes ejecutar la consulta de creación de base de datos, es importante entender que existe una costumbre no oficial al momento de escribir consultas; consiste en poner en mayúsculas todas las palabras propias del lenguaje SQL cómo ***CREATE, SELECT, ALTE***, etc y el resto de palabras como los nombres de las tablas, columnas, nombres de usuarios, etc en minúscula. No está claro el porqué de esta especie de “estándar” al escribir consultas SQL pero todo apunta a que en el momento que SQL nace, no existían editores de consultas que resaltaran las palabras propias del lenguaje para diferenciar fácilmente de las palabras que no son parte del lenguaje, por eso el uso de mayúsculas y minúsculas.

Las palabras reservadas de consultas SQL usualmente se escriben en mayúscula, ésto para distinguir entre nombres de objetos y lenguaje SQL propio, no es obligatorio, pero podría serte útil en la creación de Scripts SQL largos.

Vamos ahora por un ligero ejemplo desde la creación de una base de datos, la creación de una tabla, la inserción, borrado, consulta y alteración de datos de la tabla.

Primero crea la base de datos, “**CREATE DATABASE transporte**;” sería el primer paso.

![https://static.platzi.com/media/user_upload/4-669e8520-bb3d-47f5-9002-a3f5fcaf9191.jpg](https://static.platzi.com/media/user_upload/4-669e8520-bb3d-47f5-9002-a3f5fcaf9191.jpg)

Ahora saltar de la base de datos ***postgres*** que ha sido seleccionada de manera predeterminada a la base de datos transporte recién creada utilizando el comando **`\c transporte`**.

![https://static.platzi.com/media/user_upload/5-7d6dd8c4-a03b-48b7-b077-4cb589f55ee2.jpg](https://static.platzi.com/media/user_upload/5-7d6dd8c4-a03b-48b7-b077-4cb589f55ee2.jpg)

Ahora vamos a crear la tabla tren, el SQL correspondiente sería:

`CREATE TABLE tren ( id serial NOT NULL, modelo character varying, capacidad integer, CONSTRAINT tren_pkey PRIMARY KEY (id) );`

La columna id será un número autoincremental (cada vez que se inserta un registro se aumenta en uno), modelo se refiere a una referencia al tren, capacidad sería la cantidad de pasajeros que puede transportar y al final agregamos la llave primaria que será id.

![https://static.platzi.com/media/user_upload/6-444c767c-7f5b-4410-ac3a-df6c23d4552a.jpg](https://static.platzi.com/media/user_upload/6-444c767c-7f5b-4410-ac3a-df6c23d4552a.jpg)

Ahora que la tabla ha sido creada, podemos ver su definición utilizando el comando **`\d tren`**

![https://static.platzi.com/media/user_upload/7-93ef9744-1514-4d83-bf0b-b13462b639ca.jpg](https://static.platzi.com/media/user_upload/7-93ef9744-1514-4d83-bf0b-b13462b639ca.jpg)

PostgreSQL ha creado el campo id automáticamente cómo integer con una asociación predeterminada a una secuencia llamada ‘tren_id_seq’. De manera que cada vez que se inserte un valor, id tomará el siguiente valor de la secuencia, vamos a ver la definición de la secuencia. Para ello, **`\d tren_id_seq`** es suficiente:

![https://static.platzi.com/media/user_upload/8-6f223092-0ee7-49db-8979-b251f1d5f56a.jpg](https://static.platzi.com/media/user_upload/8-6f223092-0ee7-49db-8979-b251f1d5f56a.jpg)

Vemos que la secuencia inicia en uno, así que nuestra primera inserción de datos dejará a la columna id con valor uno.

**`INSERT INTO tren( modelo, capacidad ) VALUES (‘Volvo 1’, 100);`**

![https://static.platzi.com/media/user_upload/9-86a5c14f-d2ef-45eb-b835-abbb32f0d34b.jpg](https://static.platzi.com/media/user_upload/9-86a5c14f-d2ef-45eb-b835-abbb32f0d34b.jpg)

Consultamos ahora los datos en la tabla:

**`SELECT * FROM tren;`**

![https://static.platzi.com/media/user_upload/10-2c25adb4-615f-4691-973f-c0a231c33d60.jpg](https://static.platzi.com/media/user_upload/10-2c25adb4-615f-4691-973f-c0a231c33d60.jpg)

Vamos a modificar el valor, establecer el tren con id uno que sea modelo Honda 0726. Para ello ejecutamos la consulta tipo **`UPDATE tren SET modelo = 'Honda 0726' Where id = 1;`**

![https://static.platzi.com/media/user_upload/11-b1d3b646-6ca6-4ae0-9005-ed002c21ef32.jpg](https://static.platzi.com/media/user_upload/11-b1d3b646-6ca6-4ae0-9005-ed002c21ef32.jpg)

Verificamos la modificación **`SELECT * FROM tren;`**

![https://static.platzi.com/media/user_upload/12-370abb43-290b-43bd-a1c2-609c42b85767.jpg](https://static.platzi.com/media/user_upload/12-370abb43-290b-43bd-a1c2-609c42b85767.jpg)

Ahora borramos la fila: **`DELETE FROM tren WHERE id = 1;`**

![https://static.platzi.com/media/user_upload/13-4224641d-e97f-4e01-8784-19b2a9d39386.jpg](https://static.platzi.com/media/user_upload/13-4224641d-e97f-4e01-8784-19b2a9d39386.jpg)

Verificamos el borrado **`SELECT * FROM tren;`**

![https://static.platzi.com/media/user_upload/14-9a75b2b9-587b-476a-88b1-15c6164104c8.jpg](https://static.platzi.com/media/user_upload/14-9a75b2b9-587b-476a-88b1-15c6164104c8.jpg)

El borrado ha funcionado tenemos 0 rows, es decir, no hay filas. Ahora activemos la herramienta que nos permite medir el tiempo que tarda una consulta **`\timing`**

![https://static.platzi.com/media/user_upload/15-ccffbd2f-fd1a-4fa2-ae31-43313bc5a82b.jpg](https://static.platzi.com/media/user_upload/15-ccffbd2f-fd1a-4fa2-ae31-43313bc5a82b.jpg)

Probemos cómo funciona al medición realizando la encriptación de un texto cualquiera usando el algoritmo md5:

![https://static.platzi.com/media/user_upload/16-0699feec-184c-4aa3-8b9a-2a03e1326238.jpg](https://static.platzi.com/media/user_upload/16-0699feec-184c-4aa3-8b9a-2a03e1326238.jpg)

La consulta tardó 10.011 milisegundos

Ahora que sabes como manejar algunos de los comandos más utilizados en PostgreSQL es momento de comenzar a practicar!!!