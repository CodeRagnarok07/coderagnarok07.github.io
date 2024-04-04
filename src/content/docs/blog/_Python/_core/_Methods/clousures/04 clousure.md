# CLOSURE: agrega funciones a funciones

```py
def closureA(func,a, b):         #debe asignarse los  parametros de la funcion que recibe
    func(a,b)
    print("y agrega closure")

A = "valor 1"
E = "valor 2"

closureA(funcionB, A, E)
```

## CREAR UNA DECORADA 

```py
def closureA(funcionB):
    print("[closureA] ")
def creadaC():
    print("[creadaC] funcion creada")
    funcionB()
    return creadaC

@closureA
def decorada():
    print("[decorada] [funcionB] soy una funcion decorada equivalente a funcionB")

decorada() # debe ejecutar las acciones de clousureA y decorada()

```



## CREAR DECORADORA CON VALORES


```py
def closureA(funcionB):
    print("[closureA] ")

def wrapperC(*args,**kwars):
    print("[creadaC] funcion creada wrapper es la combencion")
    def funcionB(*args,**kwars)
        return wrapperC

v1 = "valor1"
v2 = "valor2"
@closureA
def decorada(a,b):
    print(f"[decorada] equivalente a [funcionB] con valores {a} y {b}")

decorada(v1,v2)

```

```py
######################
```

```py
closureA.**doc** #devuelve la documentacion  que es el string que esta al principio de la funcion
closureA.**name**  # devuelve el nombre de la funcion
```