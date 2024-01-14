## Arrays [ ]

- pasar por referencia en array
    
    
    ```jsx
    // pasar por referencia en array
    let arr1 = [1,2,3,4]
    let arr2 = arr1
    arr2.pop()
    console.log(arr1, arr2) // [ 1, 2, 3 ] [ 1, 2, 3 ]
    ```
    
    ```jsx
    // pasar por referencia en array
    let arr1 = [1,2,3,4]
    let arr2 = [...arr1]
    arr2.pop()
    console.log(arr1, arr2) // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
    ```
    
    pasarle valores
    
    ```jsx
    // pasar por referencia en array
    let arr1 = [1,2,3,4]
    let arr2 = [...arr1, 5, 6, 7, 8]
    arr2.pop()
    console.log(arr1, arr2) // [ 1, 2, 3, 4 ] [ 1, 2, 3, 5, 6, 7, 8 ]
    
    ```
    
- metodos de array
    
    ```jsx
    const array = [1,2,3,4,5,6,7,8]
    
    array.map((valor, index)=> console.log(index, 2*valor, ) ) // devuelve cada uno de los valores 
    
    const filter = array.filter((valor,index)=> (valor === 5 || valor > 7) ) // acepta una condicion
    console.log(filter) // 5 , 8
    
    const reducer = array.reduce((acumulado, valor)=> acumulado * valor , 2) // acumulador, valor, index que comienza
    console.log(reducer) // 40255
    
    const find = array.find(e=> e > 1) // solo el primer elemento que coincide con la condicion
    console.log(find) // 2
    ```
    
    - infografia
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/07f35c21-96cc-4ff2-a958-0ce64916fe4d/Untitled.png)
        
    

### FUNCIONES :

---

Actualizar

```jsx
r.push(20)    //agrega un elemento al final
r.unshift(3)  //agrega un elemento al principio
r.shift()     //remueve el primer lemento  [es el inverso de unshift]
r.pop()       // elimina el utimo elemento [es el inverso de push]
```

---

Generador de lista numérico

```jsx
let lista = new Array(20);  //genera un array de 20 elementos undefine
lista = new Array(20, 10);  //genera un array de 2 elementos 20 y 10
let r = [1, 5, 3, 2, 10, 12,]

```

---

Ordenar el Array

```jsx
r.reverse();        //ordena de atras adelante
r.length            //cuenta cuantos elementos tiene

r.sort();                           //ordena los numbers alfabeticamente 1, 10 , 11 ,2, 12, 122, 3 ,
order = r.sort( (a,b)=>  b - a)     // ordenar numericamente

// explicacion
const num = (a, b) => (a - b)       // manera estandar de orndenar de sort
orden = r.sort(num)                 // de esta manera si lo ordena numericamente creando esa funcion ni idea por que 
```

---

Convertir un "String" en array

```jsx
let string = "separa por split"

let a = string.split(" ")   // si no se le pasa parametro solo devuelve 1 valor, si es "" separa cada letra, " " separa cada palabra
let b = a.join(" ")         // regresa de un array a un string separa por el valor asignado, sigual sin parametro queda en comas las separaciones de palabras, "" no separa, " " queda una frace normal

console.log(b)
```


```js
const array = [1,2,3,4,5,6,7,8]

array.map((valor, index)=> console.log(index, 2*valor, ) ) // devuelve cada uno de los valores 

const filter = array.filter((valor,index)=> (valor === 5 || valor > 7) ) // acepta una condicion
console.log(filter) // 5 , 8

const reducer = array.reduce((acumulado, valor)=> acumulado * valor , 2) // acumulador, valor, index que comienza
console.log(reducer) // 40255

const find = array.find(e=> e > 1) // solo el primer elemento que coincide con la condicion
console.log(find) // 2
```