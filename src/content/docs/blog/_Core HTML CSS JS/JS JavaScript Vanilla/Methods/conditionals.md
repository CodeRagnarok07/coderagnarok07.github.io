Condicionales

```jsx
!    |diferente o lo contrario
no   |queNoSea    
==   |igual       
===  |Estrictamente igual
!=   |diferente
!==  |Estricta diferente
```

Doble condición

```jsx
una_o_otra : "||, OR",
una_y_otra : "&&, AND"
```

---

Uso de If, else, else if

```jsx
const condicion = () =>{
if (undefined === null){
console.log("undefine siempre esta declarada, y no es igual a null estrictamente")
}
else if(undefined == null){
console.log("undefine es igual a null pero no estrictamente")
}
else{
console.log("nada")
}
}
```

---

Comprobación

```jsx
false && console.log("no es true")
```

Comprobacion con opciones

```jsx
false || true && console.log("se cumple")
```

---

Pregunta

```jsx
null == undefined ?
// si se cumple =
console.log('se cumple la condicion') 
: // si no se cumple =
console.log('no se cumple la condicion')
```

### **While**

```js
while (i < conteo) {
  i++;
  if (i % 2 == 0 && i % 5 == 0) {
    document.write("bisbos" + i + "<br>");
  } else if (i % 2 == 0) {
    break; // detiene el ciclo
    document.write("bizz " + i + "<br>");
  } else if (i % 5 == 0) {
    continue; // equivalente a pass
    document.write("bozz" + i + "<br>");
  } else {
    document.write(i + "<br>");
  }
}
```

### Do While:

```js
do {
 console.log("primera ejecucion")
} while (!true); // si es true se volvera a ejecutar
```
> es útil para ejecutar el ciclo una ves solamente para impulsar el algoritmo
> ejecuta el ciclo una primera ves luego la condicion dice si se ejecuta de nuevo


### Switch

```jsx
switch (key) {
    case value:
        break;

    default:
        break;
        
}
```