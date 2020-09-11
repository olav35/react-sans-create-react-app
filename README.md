# Webpack hello world
In this step we make a hello world app with webpack.

First we add the hello world program.
```js
// src/index.js
console.log('hello, world')
```

Then we install webpack and webpack-cli.
````sh
$ npm i --save-dev webpack webpack-cli
```

Finally we configure webpack to build our project to `build/main.js` and add a npm script in `package.json` for quickly building the project.
```
// webpack.config.js
const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  }
}

module.exports = config
```
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack --mode=development"
},
```
