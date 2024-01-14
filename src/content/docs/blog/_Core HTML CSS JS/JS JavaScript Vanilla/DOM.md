### Get elements

### Selecciona un elemento por id

```jsx
let laID = document.getElementById("id")
```

---

### Selecciona un elemento por clase

```jsx
let clase = document.getElementsByClassName("classe")
```

> devuelve una array ya que las clases pueden tenerlo muchos elementos
> 

---

### Etiqueta HTML

```jsx
let etiqueta = document.getElementsByTagName("h1")
```

también devuelve todos los elementos h1

---

### Etiqueta HTML + Clase

```jsx
let selector = document.querySelector("div.Clisiado")
```

por medio de selectores de CSS solo devuelve el primero que encuentra

---

### Etiqueta HTML + CLase

```jsx
let selector2 = document.querySelectorAll("div.Cchivo") 
```

devuelve todos los elementos que consiga en un array

# Modificar los elementos

agrega una clase de css a el elemento obtenido

```jsx
laID.classList.add("simb", "mb-2","",)    
```

> *puede agregar varias classes*
> 
> 
> *Cambiar datos solo funciona con querySelector no All*
> 

 no agrega etiquetas html

```jsx
selector2.textContent = "<h1> eadsd </h1>"  //
selector.innerHTML = "<button>agrega un boton html a el txto string </button>"
selector // siempre llamar la funcion
```

//puede agregar o eliminar cualquier tipo de elemento

```jsx
let cpersona = document.getElementById("Cpersona").style.fontSize= "130px";
```

### Crear elementos

```jsx
let aguila = document.getElementById("aguila")      // toma el elemento
let creaboton = document.createElement("button")    //crea un elemento html
creaboton.innerHTML = "nuevo botn"                  //agrega cosas
aguila.appendChild(creaboton)                       // lo introduce como hijo
cpersona
```