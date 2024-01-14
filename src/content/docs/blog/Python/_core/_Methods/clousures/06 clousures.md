
# funcion como parametro
```py
def f1():
    print("llamado a f1")

def f2(arg):
    arg()

f2(f1)
# >>> llamado a f1
```

# Anidar funciones

```py
def anidadora(funtion):
    def wrapper():
        print("start anidadora")
        funtion()
        print("end anidadora")
    return wrapper
 

def funt():
    print("hello world fron funtion")

# PRIMERA FORMA DE LLAMARLA
anidadora(funt)()

# SEGUNDA FORMA DE LLAMARLA
funcional = anidadora(funt)
funcional()


# >>> start anidadora
# >>> hello world fron funtion
# >>> end anidadora
```

# Decorado

```py
def decorator(funtion):
    def wrapper():
        print("start decorator")
        funtion()
        print("end decorator")
    return wrapper
 
@decorator
def decorado():
    print("hello world fron decorado1")

decorado()
```

# Decorador con argumentos

def decorator(funtion):
    def wrapper(*arg, **kargs):
        print("start decorator")
        funtion(*arg, **kargs) # simplemente pasamos los parametros
        print("end decorator")
    return wrapper
 
@decorator
def decorado(argumento):
    print(argumento)

decorado("hola mundo")