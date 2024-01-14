
### Subir imágenes a los campos

instalar pillow `python -m pip install Pillow`

agregar images al models Product `models.py`

```python
image = models.ImageField(
     null=True, blank=True, default='imagen_predefinida.png',upload_to='photos/%Y/%m/%d/')
```

- realizar la migración
        `python manage.py makemigrations`
        `python manage.py migrate`

modificamos el `settings.py` al final esto guardara las imágenes subidas dentro de ese directorio`settings.py` 

```python

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_ROOT = BASE_DIR / 'media/'
```

---

ahora se modifica las `urls.py` base para que cada imagen tenga un link con su nombre

```python
from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import  static  # add this
from django.conf import settings # add this
  
urlpatterns = [
  path('admin/', admin.site.urls),
  path('', include('main.urls')),
  path('store/', include('store.urls'), name="store"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # add this
```

1. se actualiza el `html` para que las imágenes vengan desde los datos de product

```python
<img class="thumbnail" src="{{product.image.url}}">
```

#### Métodos para las imágenes

- Crear miniatura a partir de imagen
    
    ```python
    from django.core.files import File
    from io import BytesIO
    from PIL import Image
    
    def make_thumbnail(self, image, size=(300, 200)):
            img = Image.open(image)
            img.convert('RGB')
            img.thumbnail(size)
    
            thumb_io = BytesIO()
            img.save(thumb_io, 'JPEG', quality=85)
    
            thumbnail = File(thumb_io, name=image.name)
    
            return thumbnail
    ```
    
#### Mostrar imagen

```python
def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()

                return self.thumbnail.url
            else:
                return 'https://via.placeholder.com/240x180.jpg'
    

```

uso

```python
<img src="{{ product.get_thumbnail }}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
```
