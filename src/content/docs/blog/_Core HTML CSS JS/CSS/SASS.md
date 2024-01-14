Se puede decir que solo son variables que se pueden crear dentro de css

etiqueta para usar sass en html

```html
<style type='text/scss'>

</style>
```

# definir variables: 
la ventaja es que se puede modificar la variable sin tener que modificar todo el codigo
    
```css
$text-color: red;

.header{
    text-align: center;
}
.blog-post, h2 {
    color:$text-color;
}
    h1{
        color:$text-color;
    }
```
    
# anidar clases
    
```css
/*sin anidar*/

nav {
    background-color: red;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline-block;
}

/*anidado*/
nav {
    background-color: red;

    ul {
    list-style: none;

    li {
        display: inline-block;
    }
    }
}
```
    
## inport class
    
```css
h3{
    text-align: center;
    }
    .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
    }
    .info-important{
    @extend .info;
    background-color: magenta;
    }
```
    
# Mixin
son variables pero con todo un conjunto de 

```css
@mixin box-shadow($x, $y, $blur, $c){ 
    -webkit-box-shadow: $x $y $blur $c;
    -moz-box-shadow: $x $y $blur $c;
    -ms-box-shadow: $x $y $blur $c;
    box-shadow: $x $y $blur $c;
}
h1{
    @include box-shadow(15px, 15px );
    };

h2{
    @include box-shadow(15px);
    }
```
    
# Condicionales
    
```css
@mixin border-stroke($val) {
    @if $val == light  {
        border: 1px solid black;
    }
    @else if $val == medium {
        border: 3px solid black;
    }
    @else if $val == heavy {
        border: 6px solid black;
    }
    @else {
        border: none;
        
    }
    }

    #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
    }

```
    
# ciclos
    
```css
@for $j from 1 through 6 {
    .text-#{$j} { font-size: 15px - $j; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
    
# for each
    
```css
@each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
}

    div {
    height: 200px;
    width: 200px;
    }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# for map en un array
    
```css
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
    .#{$color}-text {color: $color;}
}
```
    
# While
    
```css
$x: 1;
@while $x < 6 {
    .text-#{$x} { font-size: 15px * $x;}
    $x: $x + 1;
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
    
# importar variables
    
archivo para ser importado

`_variable.scss` ⇒ importante este formato

```css
$variable1 : red
```

`insdex.scss`

```css
@import "variable"
h1{
    color: $variable1
};
```