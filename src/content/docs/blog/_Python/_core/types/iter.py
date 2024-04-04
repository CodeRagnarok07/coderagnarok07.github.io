
string = "iteracion sobre string"

# Iterar sobre el String
mystr = "banana"
myit = iter(mystr) # Hacerlo iterable
primera_iteracion_B = next(myit)
next(myit)


lista = string.split(" ")




# strings

string.index(" ")
s = string

"""COOMPORTAMIENTO ITERABLE"""
i, j, k = 3,2,1
s[:2]       # del 0 al 2
s[1:]       # del 1 al final
s[:]        # del principio al fin
s[::-1]     # reverse s=string
s[0:0:-1]   #[init:fin:frecuencia]

s[i]        # i -ésimo artículo de s , origen 0
s[i:j]      # segmento de s de i a j
s[i:j:k]    #  segmento de s de i a j con frecuencia k default 0
