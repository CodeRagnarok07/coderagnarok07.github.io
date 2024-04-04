# @api_view ( no Form, no links )

[Django REST API - CRUD Tutorial](https://dev.to/balt1794/django-rest-api-crud-tutorial-2894)

> No form, util para pasar de view render a view api

`views.py`
```python
from django.shortcuts import render
from rest_framework import serializers
# Create your views here.

from rest_framework.response import Response    # The Return
from rest_framework.decorators import api_view  # views

from .models import TodoCrud      # BD          
from .serializers import TodoCrudSerializer  #serializers
```

## GET: 

### 1. List
    
```python
@api_view(['GET']) # LIST
def todoCrudList(request):
    todo1 = TodoCrud.objects.all()
    serializer1 = TodoCrudSerializer(todo1, many=True)
    return Response(serializer1.data)

```
    
### 2. Details
    
```python
@api_view(['GET']) # DETAILS
def todoCrudDetail(request, pk):
    todo1 = TodoCrud.objects.get(id=pk)
    serializer1 = TodoCrudSerializer(todo1, many=False)
    return Response(serializer1.data)

```
    
## 3. POST
    
```python
@api_view(['POST']) # CREATE
def todoCrudCreate(request):
    serializer1 = TodoCrudSerializer(data=request.data)
    if serializer1.is_valid():
        serializer1.save
    return Response(serializer1.data)

```
    
## 4. Update
    
```python
@api_view(['POST']) # UPDATE
def todoCrudUpdate(request, pk):
    todo1 = TodoCrud.objects.get(id=pk)
    serializer1 = TodoCrudSerializer(instance=todo1, data=request.data)
    if serializer1.is_valid():
        serializer1.save
    return Response(serializer1.data)

```
    
## 5. Delete
    
```python
@api_view(['DELETE']) # DELETE
def todoCrudDelete(request, pk):
    todo1 = TodoCrud.objects.get(id=pk)
    todo1.delete()
    return Response('Deleted') # respuesta
```
    

`urls.py`

```python
from django.urls import path
from . import views

urlpatterns =[
    path('', views.todoCrudList, name='TodoCrud'),
    path('todoCrudDetail/<str:pk>/', views.todoCrudDetail, name='todoCrudDetail'),
    path('todoCrudCreate', views.todoCrudCreate, name='todoCrudCreate'),
    path('todoCrudUpdate/<str:pk>/', views.todoCrudUpdate, name='todoCrudUpdate'),
    path('todoCrudDelete/<str:pk>/', views.todoCrudDelete, name='todoCrudDelete'),
]

```

### Api METHOD=  viewsets  ( directo a settings )

[Viewsets - Django REST framework](https://www.django-rest-framework.org/api-guide/viewsets/)

[Deploying React-Django App using Heroku](https://dev.to/mdrhmn/deploying-react-django-app-using-heroku-2gfa)

`models` : 

```python
from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=250)
    def __str__(self):
        return self.title
```

`serializers`  :

```python
from rest_framework import serializers
from .models import Todo

class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
```

`views.py`:

```python
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo                     # add this

class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer        # add this
    queryset = Todo.objects.all()            # add this
```

`urls.py`  

> Directo al settings

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

methodos

```python
class UserViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
```

## Autentificacion viewsets

```jsx
from django.shortcuts import render
from rest_framework import viewsets    
from .serializers import ExpSerializers, SkillsSerializers, ProjectsSerializers
from .models import Exp, Skills, Projects
from rest_framework.permissions import BasePermission, IsAuthenticated, IsAdminUser

# Create your views here.

class ExpView(viewsets.ModelViewSet):
    serializer_class = ExpSerializers      
    queryset = Exp.objects.all()     
    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'list':
            permission_classes = [BasePermission]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
```

### Api METHOD= APIView

`Imports`

```python
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from blog.models import BlogPost  # Models
from blog.serializers import BlogPostSerializer  # Serialicer
```

GET: 

1. List All
    
    ```python
    class BlogPostListView(ListAPIView):
        queryset = BlogPost.objects.order_by('-date_created')
    
        serializer_class = BlogPostSerializer
        lookup_field = 'slug'
        permission_classes = (permissions.AllowAny, )
    ```
    
2. Details
    
    ```python
    class BlogPostDetailView(RetrieveAPIView):
        queryset = BlogPost.objects.order_by('-date_created')
    
        serializer_class = BlogPostSerializer
        lookup_field = 'slug'
        permission_classes = (permissions.AllowAny, )
    
    ```
    
3. Get List By
    
    ```python
    class BlogPostCategoryView(APIView):
        serializer_class = BlogPostSerializer
        permission_classes = (permissions.AllowAny, )
    
        def post(self, request, format=None):
            data = self.request.data
            category = data['category']
            queryset = BlogPost.objects.order_by('-date_created').filter(category__iexact=category)
    
            serializer = BlogPostSerializer(queryset, many=True)
    
            return Response(serializer.data)
    
    ```
    

urls

```python

from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
]
```

settings/urls.py

```python

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),     
    path('api/blog/', include('blog.urls')),
```