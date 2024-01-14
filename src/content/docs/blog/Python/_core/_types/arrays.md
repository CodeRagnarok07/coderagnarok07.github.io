### Convertir una tupla o diccionario en lista,

```python
colors = list(("blue", "red", "black"))  
# >>> colors ["blue", "red", "black"] 
```
No acepta string o mas de una variable 
constructor list solo acepta un valor 
por eso se le asigna un separador () [] {} cualquiera


# range
### crea una lista de numeros

```python
s = list(range(1, 10)) 
```

### devuelve una lista con el numero itens seleccionado en range
```python
lista = [0 for i in range(10)]
```



# Concatenar “sirve para string”

```python
s + t  # la concatenación de s y t
s * 2  # multiplica por un numero esa lista

s += t

```

# Acceder a los elementos de la lista

```python
colors[0] # selecciona el index a usar
colors[2] = "white"  #sutituir un valor
colors[3][0]       #accede a la lista dentro de la list

s[i]  # i -ésimo artículo de s , origen 0
s[i:j]  # segmento de s de i a j
s[i:j:k]  #  segmento de s de i a j con frecuencia k default 0
```
# Métodos:

## Comprobación
    
```python
len(s)              # dice cuantos elementos hay desde 1
s.count(5)          # cuenta cuantas veces hay un elemento espesifico
s.index(2)          # devuelve la posicion del elemento

s.index(x[, i[,j]])  
# índice de la primera aparición de x en s (en o después del índice i y antes del índice j )

min(s) # elemento más pequeño de s
max(s) # artículo más grande de s

x in s      # comprueba si existe
x not in s  # comprueba si no existe
```


## Agregar elementos

```python

colors.append("violet")            # solo agrega un elemento, o una lista  mas al final dentro de esta lista
colors.extend({"green","yellow"})  # agrega por separado los elementos de una lista tupla o dict

colors.insert(0, "bronw")          # lo agrega en el index asignado
colors.insert(len(colors), "pink") # para poder agregarlo al final

s.extend(t)
s += t
s[len(s):len(s)] = t

# devuelve una copia entera
s.copy()  
s[:]
```

## Remover

```python
colors.pop(5)   # elimina el ultimo por defecto >( o el index asignado)
colors.pop()    # Elimina el ultimo

colors.remove("red")  # elimina el espesificado por el nombre
colors.clear          # vacia toda la lista

del s[i:j]
del s[i:j:k]
```

## Ordena

```python
colors.sort()     # ordena alph  (str)
colors.sort(reverse=True)  #ordena al inverso
colors.reverse()     #reordena (int)
```


---

[Tuplas ( )](https://www.notion.so/Tuplas-969b94c2e0a045f39ec41e09818e726d)


# Funciones especificas
```python
#devuelve una lista  + datos         +   enumera el dato   /    cantidad de numeros seleccionas
datos = [int(input("ingrese un dato " + str(1+i) + " = " )) for i in range(2) ]
print(datos)

```