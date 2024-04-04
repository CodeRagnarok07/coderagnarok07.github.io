# comprobaciones

`isinstance(x, str)`      ⇒ comprueba si el primer valor es instancia del segundo valor

# SENTENCIAS

`if`              ⇒ condición principal
`brack`         ⇒ detiene el bucle donde esta anidado
`continue`     ⇒ no ejecuta la acción
`pass`           ⇒ no ejecuta la acción
`elif`           ⇒ una extensión de if
`else`            ⇒ ejecución final


# Comprobacion de condiciones

```python
if x == 2 and y == 2:   # no pasa al segundo si no se cumple el primero
    print()
if x == 2 or y == 2:    #pasa al segundo si no se cumple el primero
    print()
if not y == 2:          #pasa solo si no se cumple la condicion
    print()
```


# comparacion

```py 
x == x  "igual"
x != y  "Diferente"
x > y   "Mayor"
x < y   "Menor"
x >= y   "Mayor o igual"
x <= y  "Menor o igual"
is = "object identity" 
is not = "negated object identity" 

```


# Resultados boléanos

```py 
(False and False) = False
(False and True) = False
(True and False) = False
(True and True) = True
```

# SEPARACION LOGICA
```py
(False or False) = False
(False or True) = True
(True or False) = True
(True or True) = True
(not True) = False
(not False) = True
```


# try 

```py
try:
    pass
except:
    pass
```

try
assert
assertEqual

Expresiones | EXCECCIONES

```python
try:         # si esto funciona ignora el resto
	print(2/0)
```

```python
except Exception as error: 
#ejecuta esto si no funciona
	print("no se pudo ejecutar por que " )
	print(error)
	print("codigo completado")
```
