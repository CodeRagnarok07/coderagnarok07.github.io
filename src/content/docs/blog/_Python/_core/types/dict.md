# Constructor

```python
x = {
"a": 1,
"b": 2,
"c": 3,
"d": 4,
"e": 5,
"f": 6
}
```

# Modificar

```python
x["g"]= "7"    #agregan valores
x["g"]= "8"    #modifica valores
del x["g"]     #elimina valores
```

# METODOS

```python
x.keys()    #señala solo las keys
x.values()  #señala solo los values
x.items()   #señala keys y su valor
x.clear()   #deja el formato pero limpia todo su contenido
```

```python
k = "h"
v = 9
x.get(k,v)     #agrega valor al diccionario
```

# los valores o las keys pueden transformarse en listas separadas de la key o valor

```python
favoritos = {'fruta':'manzanas', 'animal':'gatos', 'número': 42}
list(favoritos.keys())
list(favoritos.values())
```

# agegar lista a un diccionario valores repetidos

```python
counts = dict()
names = ["antonio", "ramon", "antonio", "jose", "antonieta", "jose"]
for i in names:
    counts[i] = counts.get(i, 0) + 1
    print(counts)
```

For en diccionarios

```python
dict = {"xx": 320, "xy": 540, }
for aaa,bbb in dicionariote.items():
    print(aaa,bbb)
```