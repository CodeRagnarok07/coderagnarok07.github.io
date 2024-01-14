# Tailwind en Django

### 1. Instalaciones

`npm init -y`
`npm install tailwindcss postcss-cli autoprefixer`
`npx tailwind init`
`touch postcss.config.js`

### 2. configurar el `postcss.config.js`
    
```js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}
```
    
### 3. crear los archivos static
    
`mkdir static/css`

`touch static/css/main.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
    
### 4. Configurar `tailwind.config.js`
    
    ```
    module.exports = {
      content: ["./templates/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
    
### 5. Configurar los archivos static
    
`sttings.py`

```
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "static"]
```
    
### 6. configurar la build
    
    ```
    "scripts": {
        "build": "postcss static/css/main.css -o static/css/main.min.css",
        "build-watch": "npx tailwindcss -i ./static/css/main.css -o ./static/css/main.min.css --watch",
    ```
    
### 7. `npm run build`


### 8. Load static in index.html

`settings.py`

```py
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / "static"]

```

`index.html`
``` html
<!DOCTYPE html>
<html lang="en">
    <head>
    {% load static %}
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{% static '/css/main.min.css' %}">
    <script src="{% static 'hello.js' %}"></script>
</head>
<body>
    <h1>Hello word</h1>
</body>
</html>
```
