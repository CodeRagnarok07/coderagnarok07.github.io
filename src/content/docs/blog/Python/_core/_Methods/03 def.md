
```py
def funcionB(a, b):

print(f"funcion {a} {b}")
#funcion(A, E)
```

# lambda 

### crea funciones post definidas dentro de una variable

```py

suma2 = lambda n01, n02: n01+ n02   # se crea asi==> variable = lambda valor1 valor2: codigo de los valores
print(suma2(10, 50))                # se ejecuta asi==>  variable()

```

### SE PUEDE DEPOSITAR UNA FUNCION DENTRO DE UNA VARIABLE
```py
sumar = sum()
sumar(1,5,6,72,8,8)
```

---

# Argumentos adicionales *args y **kwargs

## args = argumentos

```py
# toma varios arugmentos indefinidos
def sum(*args):
	r = 0
	for i in args:
		r = r+i
# ejecucion
sum(1,2,3,4,6,5,8,7,8,95,65,656,56,56,21,54,54,84,5,321,456,45,15,15,1,321,1,5,5,15,5)
```

## kwargs = dicionarios
TOMAR VARIOS ARUGUMENTOS INDEFINIDOS ya definidos  ===== devuelve dict por defecto
```py
def sum(**kwargs):
    r = {}
    for i in kwargs:
        r = r.get(i)
# ejecucion
sum(plata='asdas',plsaata='asdas',plaadta='asdas',plawrta='asdas', )
```

---

# GENERADORA

retorna el valor cada ves que se le invoca y no de una ves
```py
def listayield(limite):                 #se crea una funcion de numeros hasta la variable indicada
    num=1
    while num < limite:
        yield num*2                     # esto es lo que retorna
        num += 1

x = listayield(10)                      # aqui se invoca pero no devuelve nada por que hay que llamarla 

continuamente
next(x)                                 #entre llama y llama entra en suspencion o staybai
next(x)                                 #entre llama y llama entra en suspencion o staybai
```



