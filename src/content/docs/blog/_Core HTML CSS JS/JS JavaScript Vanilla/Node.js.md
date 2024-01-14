# package.json

`npm init -y`

some scripts

```js
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
}
```

# Exports and required
    
export.js

```js
iten = [ 1, 2, 3, 4, 5]
module.exports = iten;
// or

const iten2 = true
module.exports = {
    iten: iten; 
    iten2 // si el nombre es igual se puede omitir a un solo nombre
} 
```

app.js

```js
const iten_inport = require(./export.js)
// two imports for destructuring
const {iten, iten2} = require(./export.js) // use names from export.js
```
    
