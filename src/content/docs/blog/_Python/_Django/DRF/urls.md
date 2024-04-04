`urls.py`  

## Directo de views al settings/urls

only with viewsets.ModelViewSet

```py
class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer        # add this
    queryset = Todo.objects.all()            # add this
```


```python
from django.contrib import admin
from django.urls import path, include                   # add this
from rest_framework import routers                      # add this
from todo import views                                  # add this

router = routers.DefaultRouter()                        # add this
router.register(r'todos', views.TodoView, 'todo')       # add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))                   # add this
]
```