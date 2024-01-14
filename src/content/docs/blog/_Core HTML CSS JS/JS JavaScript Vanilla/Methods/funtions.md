### Sintaxis de función común

```jsx
function funcion(n1, n2){
console.log(n1 + n2)
};
```

### funcion de flecha

> no soporta (this)
> 

> se usa return cuando retorna un solo objeto
> 

```jsx
const deflecha1 = (n1, n2) =>{ return  (n1+ n2)} ;
```

reduce el codigo se omite las llaves y el return:

```jsx
const deflecha = (n1, n2) => (n1+ n2);
s = deflecha1(2,8);

```

se puede omitir los paréntesis si solo usa un parámetro

```jsx
const deflechax = () => ("no necesita parametros");
const deflecha2 = parametro => ("si solo usa un"+  parametro + "omite los parentesis");

```

valores predeterminados:

```jsx
const valor = (a, b) =>{
b = b || 3          // b o 3 = predetermina el valor de una variable
return console.log(a + b)
}
```

---

# Función que se llama a si misma

```jsx
(function(){
document.write(
"las variables se deben declarar solo dentro de funciones por que contaminan todo el script global <br>")
}) ();
```

```jsx
(function(){let valor = "asdas"
console.log("me puedo ejecutar yo misma por el script? si podemos")
})();
```

---

# Funciones de Evento

```jsx
document.getElementById("flecha_autollamada").addEventListener("click", () => {
alert("esta funcion por flecha pero desde el javascript no necesita llamarse a si misma")
})

// si se quiere hacer llamados dentro del html se declara lsa funciones en funciones CLOSURE que se llaman a si mismas
```

---

FUNCION CONSTRUCTOR FUERA DE CLASES

```jsx
function noconstructor(params) {
this.nombre = params
this.dice = "yo no soy un constructor"
this.declaracion = function(){
console.log(`hola soy ${this.nombre} y no soy una clase soy un constructor fuera de una clase`)
}
}
carlos = new noconstructor("carlos")
//### agregar atriburtos a la instancia
carlos.nuevovalor = "asi se agrega un nuevo valor"
carlos.nuevaFuncion = function(){
return "tambien se le pueden agregar functiones de esta manera"
}
console.log(carlos.nuevaFuncion())
console.log(__proto__.__proto__) //todas las variables y functiones son __proto__
//### agrega functiones a el constructor disponibles para todas las instancias
noconstructor.prototype.functionClaseAdd=() =>{
return "de esta manera se agrega una funcion nuev al constructor disponible para todas las instancias"
}
```

- funcion rest
    
    
    ```jsx
    function norest(var1, var2, var3){
        console.log(var1, var2, var3)
    }
    norest(1, 2 ,3 ) // 1 2 3 
    
    function rest(...vars){
        console.log(vars)
        vars.forEach(element => {
            console.log(element)
        });
    }
    // rest(1, 2 ,3 ,4)
    
    // [ 1, 2, 3, 4 ]
    // 1
    // 2
    // 3
    // 4
    ```