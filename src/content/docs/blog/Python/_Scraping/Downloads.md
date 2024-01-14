# one file
```python
import json
import urllib3
import urllib
import requests
url = ""
file_name = "audio.mp3"

# open Json
with requests.Session() as req:
    "! se abre una secion para hacer multiples descargas"
    print(f"Downloading File {file_name}")
    download = req.get(url)
    if download.status_code == 200: # si el status es 200 comienza la descarga
        with open(f'{file_name}', 'wb') as f:
            f.write(download.content)
            print(f"Success Download File {file_name}")
    else:
        print(f"Download Failed For File {file_name}")
```

# multi file

```py
import json
import urllib3
import urllib
card_name = "Pantheon"
# open Json
data = []
with open(f'{card_name}/{card_name}.json') as json_file:
    data = json.load(json_file)

formato = ".ogg"
new_data = []


for index, i in enumerate(data):
    # print(index, i["url"])
    video_name = i["url"].split('/')[-1]
    print("Downloading file:%s" % video_name)
    # Copy a network object to a local file
    audio = f'[sound:{card_name}_{index}{formato}]'
    i["audio"] = audio

    urllib.urlretrieve(i["url"], f'{card_name}/{audio}')
    
    new_data.insert(len(new_data), i)

with open(f'{card_name}/{card_name}.json', "w") as outfile:
    json.dump(new_data, outfile)

print("Completado")

```


# MultiDownload

```python
import requests
from bs4 import BeautifulSoup
import re

r = requests.get("https://ghalliance.org/resource/bible-reading/")
soup = BeautifulSoup(r.text, 'html.parser')

with requests.Session() as req:
    for item in soup.select("#playlist"):
        for href in item.findAll("a"):
            href = href.get("href")
            name = re.search(r"([^\/]+$)", href).group()
            if '.' not in name[-4]:
                name = name[:-3] + '.mp3'
            else:
                pass
            print(f"Downloading File {name}")
            download = req.get(href)
            if download.status_code == 200:
                with open(name, 'wb') as f:
                    f.write(download.content)
            else:
                print(f"Download Failed For File {name}")
```