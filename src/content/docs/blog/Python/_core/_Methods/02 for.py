## Range

### solo devuelve si se itera sobre el, el tercer valor dicta el ciclo
for x in range(1, 20, 1):    
    print(x)

### para tuplas
tupla = tuple(i for i in range(0,100))





# FOR 


### para diccionario


diccionario = {"xx": 320, "xy": 540, }

diccionario = {i:v for i,v in enumerate(tupla)}

for aaa,bbb in diccionario.items():
    print(aaa,bbb)


# Enumerate obtiene indice y value de una lista
listado = [3,2,4,8]
for i in enumerate(listado):
    print(i)


# WHILE
word = "bananasd"      #se espesifica el iterable
i = 0                   #se espesifica la condicion para el breack

while i < len(word):
    letra = word[i]
    print(i, letra)
    i += 1



# cargador

import sys
import time
for i in range(100):
    time.sleep(0.2)
    sys.stdout.write("\r%s" %i)
    sys.stdout.flush()
