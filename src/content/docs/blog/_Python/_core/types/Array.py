

### tuple to list
lista = list(("blue", "red", "black"))  
# >>> lista ["blue", "red", "black"] 
"""No acepta string o mas de una variable 
constructor list solo acepta un valor 
por eso se le asigna un separador () [] {} cualquiera"""


# range 
"generar listas"
x,s = list(range(1, 10)) 
lista = [0 for i in range(10)]

i, j, k, t = 1,1, 1, 2




"""COMPOBRACION"""
len(s)            

lista.count(5)          # cuenta cuantas veces hay un elemento espesifico
lista.index(2)          # devuelve la posicion del elemento

x in s      # comprueba si existe
x not in s  # comprueba si no existe

"""SELECCION"""
min(s) # elemento más pequeño de s
max(s) # artículo más grande de s

lista[0] # selecciona el index a usar
lista[2] = "white"  #sutituir un valor
lista[3][0]       #accede a la lista dentro de la list

index = 0

s[i]  # i = index
s[i:j]  # segmento de s de i a j
s[i:j:k]  #  segmento de s de i a j con frecuencia k default 0




"""EDICION"""

## AGREGA
lista.append("violet")              #  agrega elemento al final  => lista.insert(len(lista), "pink")
lista.extend({"green","yellow"})    # lista += ["green","yellow"]
lista.insert(0, "bronw")            # lo agrega en el index asignado

### Conct
lista + lista  # la concatenación de lista y t
lista * 5  # multiplica por un numero esa lista
lista += lista # lista.extend(lista)



## DELETE
lista.pop(index)        # elimina el ultimo o index asignado    
lista.remove("red")     # elimina espesificado por valor
lista.clear             # vacia toda la lista
del s[i:j]
del s[i:j:k]

## ORDER
lista.sort()     # ordena alph  (str)
lista.sort(reverse=True)  #ordena al inverso
lista.reverse()     #reordena (int)





# Funciones especificas

string_to_array = list("studytonight")
for_to_array = [f"algoritmo {i}" for i in range(23)]
copy = lista.copy(), s[:] # devuelve una copia entera
reverseany = lista[::-1]


lista[len(lista):len(lista)] = t
