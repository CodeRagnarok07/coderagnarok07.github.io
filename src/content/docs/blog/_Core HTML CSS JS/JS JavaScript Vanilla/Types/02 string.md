## String "" '' ``

### Escapar de las comillas :

El carácter \ permite escribir " si esta seguido y continuo

```jsx
var string= "escapar", "de las \"comillas"  + "se puede concatenar"
```

Las comillas invertidas `` permiten muchas funciones

```jsx
var string=  `las comillas de [alt 96] acepta espacios
y saltos de linea
												y tabulacion 
	${"y templates"}`
```

### Saltos de linea simple \n :

```jsx
var texto2 = "con el + es otra forma de hacer saltos de linea" + 
"se puede concatenar en otra linea pero no \n las lee como salto de linea "
```

---

## Funciones:

```jsx
texto.replace()
texto.toUpperCase       // todo a mayuscula
texto.toLowerCase()     //devuelve a minusculas
texto.slice(0,10)       //desde hasta
texto.indexOf("se");    //devuelve el indice donde comiensa lo espesificado -1 si no existe
texto.charAt(19)        //todo lo contrario de indexOF
texto.length;           //devuelve len
texto.replace("remplazar","porEsteUnaVes") // remplaza el texto la  primera ves que consige el primer valor por el segundo valor
texto.replaceall("remplazar","porEsteTodas") // remplaza el texto todas las  veces que lo encuentre
```

## TEMPLATE STRING

Equivalentes a format de python se usa con comillas alt 96

```jsx
let nombre = "carlos"
let apellido = "ramon"

//template =  `su nombre es ${nombre} y su apellido es ${apellido}`
const ztemple = (v1 , v2) =>  `su nombre es ${v1} y su apellido es ${v2}`
```