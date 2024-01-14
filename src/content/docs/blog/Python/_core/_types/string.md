# Format

```python
var1 = 1
var2 = 2
s = f'var1 = {var1} y var2 = {var2}'
s = f"var1 = {var1} y var2 = {var2}"
```

# Formato de caracteres
    
```python
"""
\n  = salto de linea 
\t   = sangría 
\"" = comillas
\’   = escape de comillas
\\   = Barra inversa
"""

s = "hello \"world \nhello \t baby"  

saltos = """las tres comillas
permite los saltos de lineas sin el \n)""",
"""
```

### r”” = evita el formato
```python
print("c\th\n\file")
# >>> c       h
♀ile
print(r"c\th\n\file")
# >>> c\th\n\file
```
    


# Formateo de Mayúsculas

```python
s.upper()           #todo en mayuscula
s.lower()           #minuscula
s.swapcase()        #intercambia M por m y m por M
s.capitalize        #primer caracter en M

"ß".casefold()  # 'ss'
```

# comprobaciones de caracteres

```python

'BANANA'.isupper() # >>> True

'banana'.islower() # >>> True

"684".isnumeric() # >>> True

"Banana de Acccion".istitle() # >>> False
"Banana De Acccion".istitle() # >>> True

"   ".isspace()  # >>> True

isprintable() # >>> any True

```
    

    
# Funciones de lista
    
```python
len(s)           # dice cuantos elementos hay desde 1
s.count(5)   # cuenta cuantas veces hay un elemento espesifico
s.index(2)  # devuelve la posicion del elemento
s.index(x[, i[, j]])  # índice de la primera aparición de x en s (en o después del índice i y antes del índice j )

min(s) # elemento más pequeño de s
max(s) # artículo más grande de s

x in s        # comprueba si existe
x not in s       # comprueba si no existe

s[i]  # i -ésimo artículo de s , origen 0
s[i:j]  # segmento de s de i a j
s[i:j:k]  #  segmento de s de i a j con frecuencia k default 0

s + t  # la concatenación de s y t
s * 2  # multiplica por un numero esa lista
s += t

```
##  Seleccionar o hacer cadena [0:0:-1]
    
```python
s[:2]       # del 0 al 2
s[1:]       # del 1 al final
s[:]        # del principio al fin
s[::-1]     # reverse s=string
s[0:0:-1]   #[init:fin:frecuencia]

s[i]        # i -ésimo artículo de s , origen 0
s[i:j]      # segmento de s de i a j
s[i:j:k]    #  segmento de s de i a j con frecuencia k default 0
```

# Remplazar
    
```python
s.replace("hello", "bay", 1) 
```
>remplaza el "el valor seleccionado" por "el valor asignado" "numero de veces encontrado"
    
# Cuenta y Encontrar

```python
len(s)           #devuelve el numero de valores en el string

count( sub [ , inicio [ , fin ] ] ) 

s.find("o")      #encuentra el index del caracter o cadena a partir del primer index
s.index("e")     #muestra el index de el valor (cuenta desde 0)

s.startswith("he")   #verifica si comienza con lo espesificado
s.endswith("llo")    #verifica si termina asi
```

# Borrar strip y split

```python
s.strip()   
# borra el ultimo espacio o los ultimos caracteres contando desde -1 (letras si los encuentra) 
# (se pueden contar con len)

s.rstrip()  # borra lo primero (o caracter desde el principio)
s.lstrip()  # borra desde el ultimo (o caracter desde el left)

s.split("o")    
#crea una lista dividia por el caracter 
# #(maxsplit=1) cantidad de elementos de lista   
# .split(separador)[numero elemento:elemento + lista]
```

# Iterar sobre el String

```python
mystr = "banana"
myit = iter(mystr) # Hacerlo iterable
print(next(myit))  # Iterar sobre la primera
print(next(myit))  # Iterar sobre la segunda
print(next(myit))

```

# Concatenation

```python
print("agua" "cate")  # aguacate
print(("ca"*2)+"tua") # cacatua
print(("ca"*2),"tua") # caca tua

''.join(list)  # Convierte una lista en String
```

- Programas