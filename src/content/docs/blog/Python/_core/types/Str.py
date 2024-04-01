
"""Concatenation"""
aguacate = "agua" "cate"
cacatua = ("ca"*2)+"tua"
caca_tua = ("ca"*2),"tua"




"""FORMAT"""
comodin = "texto %s %s" % (2, 3)
format = "valores =  {0} {1}".format(1,2)
format2 = "valores =  {a} {b}".format(a=1,b=2)
s = f'var1 = {2} y var2 = {3}'


"""CARACTERES"""    
formatos = """
\n  = salto de linea 
\t   = sangría 
\"" = comillas
\’   = escape de comillas
\\   = Barra inversa
"""
sinformatos = r"c\th\n\file ♀ile"  # >>> c       h




"""TRANSFORM"""
s.upper()           # to mayuscula
s.lower()           # to minuscula
s.capitalize        # primer carácter to M
s.swapcase()        # intercambia M por m y m por M
"ß".casefold()  # 'ss'

s.replace("hello", "bay", 1) # remplaza el "el valor seleccionado" por "el valor asignado" "numero de veces encontrado"


"""COMPROBACIONES"""
sinformatos.isprintable() # >>> any True

#  CASE
'BANANA'.isupper() # >>> True
'banana'.islower() # >>> True
"Banana de Acccion".istitle() # >>> False
"Banana De Acccion".istitle() # >>> True

"   ".isspace()  # >>> True
"684".isnumeric() # >>> True

s.startswith("he")   #verifica si comienza con lo especificado
s.endswith("llo")    #verifica si termina asi

# DEVUELVE INT
s.find("o")      #encuentra el index del carácter o cadena a partir del primer index
s.count(" ") # cuenta las veces que encuentra el caracter


"""BORRADO"""
s.strip()  
s.rstrip()  # borra lo primero (o carácter desde el principio)
s.lstrip()  # borra desde el ultimo (o carácter desde el left)


## lista a string
''.join(str(i) for i in range(1, 10))  # Convierte una lista en String
s.split("o")    
# crea una lista dividida por el carácter 
# #(maxsplit=1) cantidad de elementos de lista   
# .split(separador)[numero elemento:elemento + lista]