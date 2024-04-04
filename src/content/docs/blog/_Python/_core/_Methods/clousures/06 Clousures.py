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