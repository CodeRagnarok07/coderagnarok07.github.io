
generador de expresiones regulares= (https://regexr.com/)

# Extrae tags de Html
de el resultado de soup = BeautifulSoup(content, 'lxml')

```py
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, 'lxml')
tags = soup.select('i, b , audio')

# EXTRER LOS ELEMENTOS DE UNA WEB
""" se recomienda buscar elementos en este orden = id > classname > tagname cssSelector > Xpath"""

tags = soup.select('i, b , audio')
# tags = soup.findAll(re.compile(r'(i)'))
# tags = soup.find_all(['i', 'b', 'audio' ])
# r = re.compile('(?<=src=").*?(?=")')
# audio='src="(.*?)"', text= '>"([^<>]*)"'

# content = open('cosa.txt', 'r')

# for i in content:
#     content = i

```

extraer un atributo de una etiqueta

```python

for line in tags:
    text = line.get_text()
    string = str(line)
    url = r.findall(string)
    print(text, url)
    for i in line:
            string = str(i)
            data = r.findall(string)
            print("link=",data , "text =")
            print(type(string))

            audio = i["src"]
    
    # print(text )
```