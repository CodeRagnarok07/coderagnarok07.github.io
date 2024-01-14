# Crear y abrir archivos
    
    
#### Abrir un archivo
  
```python
# Abrir un archivo y leer su contenido
text = open('file.html')
text.read()
for i in text:
    print(i)
```
  
#### crear Archivos text

```python
with open(f'{titulo}.txt', 'w') as file: 
    file.write(data)
```

#### Archivo Json

```python
import json

with open(f'{titulo}.json', "w") as outfile:
    json.dump(lista, outfile)
```

