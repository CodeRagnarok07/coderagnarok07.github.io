# [Basic User register](#)

`form.py`

```python
from django.contrib.auth.forms import UserCreationForm # 
from django.contrib.auth.models import User
# from django.forms import ModelForm
class CreateUserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']
```

`views.py`

```python
from django.shortcuts import render, redirect 
from django.contrib.auth import login
from .forms import CreateUserForm       

# Create your views here.

def register(request):		
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():            
            user = form.save()          
            login(request, user)    
            return redirect('home')
    else:
        form = CreateUserForm()
    ctx = {'form':form}

    return render(request, 'users/register.html', ctx)
```


`register.html`

```html
{% extends '../base.html' %}  <!-- trae a main como padre -->
{% block title %}titulo de la pagina{% endblock %}


{% block content %}  

<!-- bloque de contenido a utilizar -->

<form action="" method="post">
    {% csrf_token %}
    {{ form.as_p }}
</form>

{% endblock content %}

```

# Basic user Login and logout

`urls.py`
```py
from django.urls import path
from .views import register_user, user_panel
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('register/', register_user, name="register"),
    path('', user_panel, name="user_panel"),

    # Login y logout
	path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
]
```

## login form

```html
{% extends '../base.html' %}  <!-- trae a main como padre -->
{% block title %}titulo de la pagina{% endblock %}
{% block content %}  

<!-- bloque de contenido a utilizar -->

<form action="" method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">login</button>
</form>
{% endblock content %}
```


## logut link

```html
<div class="grid grid-cols-2 gap-2">
    {% if request.user.is_authenticated %}

    <button class="hover:bg-gray-400 border-black rounded-3xl p-2">
        <a href="{% url 'logout' %}">
            logout
        </a>
    </button>
    {% else %}
    <button class="hover:bg-gray-400 border-black rounded-3xl p-2">
        <a href="{% url 'login' %}">
            login
        </a>
    </button>
    {% endif %}
    <button class="hover:bg-gray-400 border-black rounded-3xl p-2">register</button>
</div>
```

# path Auth

`settings.py`
```python
LOGIN_URL = 'login'  # cuando quieren acceder a una url con el decorador  @login_required
LOGIN_REDIRECT_URL = 'userPanel'  
LOGOUT_REDIRECT_URL = 'home' 
```

# Custom user
configure `settings.py`

`AUTH_USER_MODEL = 'auth.User'`


### use of user
```py
from users import User
from customuser.settings import AUTH_USER_MODEL
# utiliza el get_user_model()método de django.contrib.auth documentation
```

### create model of user baseUser

```py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class UserManager(BaseUserManager):

    """The UserManager subclasses the BaseUserManager and overrides the methods create_user and create_superuser. These custom methods are needed because the default methods expect a username to be provided. The admin app and manage.py will call these methods."""

  def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
    if not email:
        raise ValueError('Users must have an email address')
    now = timezone.now()
    email = self.normalize_email(email)
    user = self.model(
        email=email,
        is_staff=is_staff, 
        is_active=True,
        is_superuser=is_superuser, 
        last_login=now,
        date_joined=now, 
        **extra_fields
    )
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_user(self, email, password, **extra_fields):
    return self._create_user(email, password, False, False, **extra_fields)

  def create_superuser(self, email, password, **extra_fields):
    user=self._create_user(email, password, True, True, **extra_fields)
    user.save(using=self._db)
    return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254, unique=True)
    name = models.CharField(max_length=254, null=True, blank=True)
    is_staff = models.BooleanField(default=False) # required by the admin.
    is_superuser = models.BooleanField(default=False) # used by the PermissionsMixin to grant all permissions.
    is_active = models.BooleanField(default=True) # indicates whether the user is considered “active”.
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    

    USERNAME_FIELD = 'email' # The name of the field that will serve as unique identifier (which will be the email field for us).
    EMAIL_FIELD = 'email' # The name of the field that will be returned when get_email_field_name() is called on a User instance.
    REQUIRED_FIELDS = [] # Required fields besides the password and USERNAME_FIELD when signing up.

    objects = UserManager()

    def get_absolute_url(self):
        return "/users/%i/" % (self.pk)
```

- [Documentation](https://medium.com/@ksarthak4ever/django-custom-user-model-allauth-for-oauth-20c84888c318)