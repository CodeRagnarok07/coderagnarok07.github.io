# execution context
- es el entorno de ejecución del código JavaScript. 
- crea y ejecuta y destruye el contexto según su llamado por medio call stack
- determina el entorno léxico o scope dentro de cada contexto por medio de la palabra clave this


## entorno léxico
es un objeto literal con la información de las variables y funciones dentro de un [execution context](#execution-context) 
teniendo acceso a su propio valor this con este objecto

### fase 1 hoisting 
fase de creación del contexto en el que primero se definen las claves (nombres de variables y funciones) dentro del contexto

### fase 2 Binding
fase de ejecución del contexto en el que se definen sus valores, por ello son undefine si se llaman antes de declararse


## call stack
el registro guarda en memoria los datos de el [execution context](#execution-context) y su entorno léxico durante la ejecución
guarda el orden de ejecucion de las funciones, la creacion y destrucion del entorno lexico y su registro en memoria


# event loop
característica agregada por los navegadores a JavaScript para realizar operaciones asincrónas
sin bloquear la ejecución, distribuyendo el orden de prioridad de la cola de tareas enviandolos al stack 
la prioridad es, tareas de js > tareas web Apis > micro tareas webApis




## las WEB API's
son características no propias de js si no del navegador que permiten manejar funciones mas lentas sin bloquear la ejecución
distribuye el orden de ejecución en la [cola de tareas]() dependiendo de su prioridad

- tarea
  - setTimeout | setInterval
  - fetch
  - Intersection DOM
- micro tarea
  - Promise
  - async await
  - process.NextTick
  - mutation observer
  - insertection

## cola de tareas
determina el orden de prioridad de ejecucion de las tareas web api
el orden de ejecucion de tareas del call stack es el siguiente 
1. tarea [javascript puro]
2. micro tarea  web-api 
3. Tarea web-api

## promesas

Representan un valor que no retorna lo esperado de manera inmediata si no que promete resolverlo o rechazarlo a futuro permitiendo gestionar tareas asíncronas en JavaScript 


# el shadowDOM

esta por encima del DOM, visualmente se muestra cuando se le señala y tapa el DOM original
Es un DOM que puede ser usado para modificarlo con js y CSS de manera cerrada y del resto del documento, 

# prototype

todos las variables son Objetos que heredan funciones de objeto Object
proto o prototype puede acceder a las funciones del elemento padre

```js
Object.prototype.newFunction = () => console.log("esta function puede ser usada en todos los elementos del js")

const newObjetoString = new Object("soy un string")

newObjetoString._proto_.newFunction()
newObjetoString._proto_.create_inline_for_this = ()=> console.log("function solo para este objeto string")
```
también prototype aguarda los métodos dependiendo del tipo de elemento

# Las funciones compose

son funciones que pueden combinar funciones,
es una function que recibe dos funciones y devuelve una function 


# funciones pura y funciones impuras
funciones puras son aquellas que son mandadas directamente al call stack ya que su retorno no cambia y son rápidas
funciones impuras son funciones tipo web api que pueden ser async 


# Rarezas de js

```js
a = [1,2,3]
b = [4,5,6]

a+b // '1,2,34,5,6'
c = [...a,...b] // [1, 2, 3, 4, 5, 6]
d = (a + [,,] + b).split(",") // ['1', '2', '3', '4', '5', '6']


10,2
2


![ ] // false
+[] // 0

[]==false // true
[,]==false // true

[,,].length // 2
[,].length // 1

"" - - "" // 0
"" - - "" // 0
0/0 //NaN
1/0 // Infinity

Math.pow(10, 309) //Infinity

2
0+"0" // '00'
null + "0" // 'null0'
null + [,,,,,] // 'null,,,,'

0 + null // 0
[] + 0 + null // '0null'
[] + [] 
''
[] - []
0
[] + undefined
'undefined'
undefined - []
NaN
undefined - [] == true
false
[] - [true]
NaN
true + ("sadasdsa" - 0) // NaN
false - [] 
0

NaN++ // NaN

- "" + null + + + + + "1" * null - [,] // 0




{}+[] // 0
[] + {} // object

```
