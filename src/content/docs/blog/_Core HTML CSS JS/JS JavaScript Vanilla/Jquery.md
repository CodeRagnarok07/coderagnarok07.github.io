## Jquery

todos los elementos Jquere comienzan con un $

función que se ejecuta cuando se pinta el dom

```jsx
$(document).ready(function() {
  
  });
```

```js
// add or remove class
$("button").addClass("animated bounce shake"
$("button").removeClass("btn-default");
// add css style
$("#target1").css("color", "red");
//modificar propiedades
$("#target1").prop("disabled", true);
$("h3").html("<h1>cambia las etiquetas</h1>");
$("h3").text("cambia solo el texto")
//insertar en otro elemento
$("#target2").appendTo("#right-well");
// clona y lo inserta en otro lado
$("#target5").clone().appendTo("#left-well");
$("#target4").remove()

```

# SELECTORES

```js
// modifica al elemento padre directo
$("#target1").parent().css("background-color", "red")

// modifica al elemento hijo directo
$("#right-well").children().css("color", "orange")
// solo selecciona los segundos elemntos de la classe que estan uno despues de otro
$(".target:nth-child(2)").addClass("animated bounce");
// slecciona elementos pares dentro de target
$(".target:even").addClass("animated shake");
// slecciona elementos impares
$(".target:odd").addClass("animated shake");

$(".target:nth-child(3)").addClass("animated bounce");

```