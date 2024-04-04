
# BUSCADOR

`views.py`

```python
from django.db.models import Q

def search(request):
    query = request.GET.get('query', '')
    products = Product.objects.filter(Q(title__icontains=query) | Q(description__icontains=query))

    return render(request, 'core/search.html', {'products': products, 'query': query})
```

`urls.py`

```python
from django.urls import path
from .views import detail_product, category, search #

urlpatterns = [
    path('search', search, name='search'), # add this
    path('<slug:category_slug>', category , name='category'),
    path('<slug:category_slug>/<slug:product_slug>', detail_product , name='detail_product'),
]
```

`html`  

es de forma global ya que se accede a la busqueda desde una url

```html
<!-- # Buscador -->
<form  method="get" action="{% url 'search' %}">

  <input  type="text"  name="query">

  <button type="submit">Search</button>

</form>
```

# SIMILARES

objeto + objetos tag similar random

```python
import random

def detail_product(request, category_slug, product_slug):    
    product = get_object_or_404(Product, category__slug=category_slug, slug=product_slug)
                                    # se accede a un parametro por doble __ category__slug
    similar_products = list(product.category.products.exclude(id=product.id))
    if len(similar_products) >= 4:
        similar_products = random.sample(similar_products, 4)
    ctx = {    
        'product': product,
        'similar_products': similar_products,
    }
    return render(request, 'core/detail_product.html', ctx)
```

```python
import random

def product_detail_view(request, product_id):
    product = Product.objects.get(id=product_id)
    similar_products = list(product.category.products.exclude(id=product.id))
    if len(similar_products) >= 4:
        similar_products = random.sample(similar_products, 4)
    ctx = {    
        'product': product,
        'similar_products': similar_products,
    }
    return render(request, "ecommerce/product_detail.html", ctx)
```

> Explicacion:
> 
> 1. llama un objeto de el query Products
> 2. entra a la llave foranea categoria de ese objeto
> 3. vuelve a el query del objeto principal y llama a todos los objetos
> 4. excluye el objeto llamado al principio de la lista de similares

# TEXT RICH

- Summernote
    
    [https://github.com/summernote/django-summernote](https://github.com/summernote/django-summernote)
    

Formato en django

```python
{{ personaje.bio|safe }}
```

Formatos en React

```python
const createBlog = () => {
        return {__html: blog.content}
    };

<div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />

const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

{capitalizeFirstLetter(blog.category)}

```

[Text rich Django + React](https://www.notion.so/Text-rich-Django-React-2871c7cf24ea42ae9e1c6bac77be2f49)


# Generar Urls unicas


```py
from django.template.defaultfilters import slugify

class Projects(models.Model):
    name = models.CharField(max_length=255)     
    slug = models.SlugField(null=True, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.name) # creacion automatica apartir del titulo
        queryset = Projects.objects.all().filter(slug__iexact=original_slug).count() 
        # "Busca si hay otro slug que conincida con el mismo original_slug"
        count = 1
        slug = original_slug
        # (queryset) si encuentra otro con este mismo slug
        while(queryset): 
            slug = original_slug + '-' + str(count)
            count += 1
            # vuelve a hacer la verificacion
            queryset = Projects.objects.all().filter(slug__iexact=slug).count() 
        self.slug = slug 
        super(Projects, self).save(*args, **kwargs)
        
```
- Urls automatica y unica
    
    ```python
    def save(self, *args, **kwargs):
            original_slug = slugify(self.title) # creacion automatica apartir del titulo
    
            # LOGICA PARA LAS URLS UNICAS        
            queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count() 
                # "Busca si hay otro slug que conincida con el mismo original_slug"
            count = 1
            slug = original_slug
            # (queryset) si encuentra otro con este mismo slug
            while(queryset): 
                slug = original_slug + '-' + str(count)
                count += 1
                # vuelve a hacer la verificacion
                queryset = BlogPost.objects.all().filter(slug__iexact=slug).count() 
    
            self.slug = slug
    				super(BlogPost, self).save(*args, **kwargs)
    ```
    

## generar urls apartir del titulo en admin

```py
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'slug')

admin.site.register(Category, CategoryAdmin)

```

# CRUD by methods

## create new object

`view.py`
```py
def add_new_enterprise(request, vacant_id):
    query = request.POST.get('query', '')
    if request.method == 'POST':
        vacant = Vacant.objects.get(pk=vacant_id)
        enterprise = Enterprise.objects.get_or_create(name=query)
        vacant.enterprise = enterprise[0]
        vacant.save()
        return redirect("index")
```

`url.py`
```py
    path('add-new-enterprise/<int:vacant_id>/', add_new_enterprise, name="add_new_enterprise"),
```

```html
 <form  method="POST" action="{% url 'add_new_enterprise' i.id %}">
{% csrf_token %}
<div class="flex">
    <input  class="w-full" type="text"  name="query">                    
    <button type="submit">ADD</button>            
</div>
</form>
```


## delete object


`view.py`
```py
def delete_vacant(request, vacant_id):
    vacant = get_object_or_404(Vacant, pk=vacant_id)
    vacant.delete()
    return redirect("index")
    # return JsonResponse({'success': "delete"})
```

`url.py`
```py
path('delete-vacant/<int:vacant_id>/', delete_vacant, name="delete_vacant"),
```

```html
<a href="{% url 'delete_vacant' i.id %}" method="delete">delete</a>
```

## Method 2



`view.py`
```py
def delete_vacant(request, vacant_id):
    vacant = get_object_or_404(Vacant, pk=vacant_id)
    vacant.delete()
    return redirect("index")
    # return JsonResponse({'success': "delete"})
```

`url.py`
```py
path('vacant/<str:vacant_slug>/', vacant, name="vacant"), #allow delete

```

```html
<script>
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    async function delete_vacant(slug) {
        let csrftoken = getCookie('csrftoken');
        const apiRes = await fetch(`vacant/${slug}/`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        });
        if(apiRes.status == 200){
        }
    }
</script>
```

 