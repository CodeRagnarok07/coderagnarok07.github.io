# [postgreSQL](/wiki/Database/PostgreSQL/postgresql.md)


# integrate with Django

```
POSTGRES_NAME=name
POSTGRES_PASSWORD=newPasword
```
DATABASE_URL=sqlite:///db.sqlite3
DATABASE_URL=postgres://postgres:123456@localhost:5432/vocabulary_app  


```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": env("POSTGRES_NAME"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("POSTGRES_HOST"),
        "PORT": "5432",
    }
}
```