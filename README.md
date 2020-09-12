# Development server
In this step we set up a development server similar to that of create-react-app using webpack-dev-server. To start off install and configure the package.
```sh
$ npm i --save-dev webpack-dev-server
```
```js
// webpack.config.js
output: {
  // ...
},
devServer: {
  contentBase: path.resolve(__dirname, 'build'),
  compress: true,
  port: 3000
},
module: {
  // ...
}
```

Now we can start the development server.
```sh
$ npx webpack-dev-server --mode=development
```

We also add a npm script `start` in `package.json` so that we can start the app like we are used to.
```
"scripts": {
  "build": "webpack --mode=development",
  "start": "webpack-dev-server --mode=development"
},
```

Finally we have to use a source map. The source map maps lines from the compiled program to lines of our source code.E ssentially it makes the errors refer to lines in our source code as opposed to compiled gibberish. To use it we just have to add one line to the webpack configuration.
```js
// webpack.config.js
devServer: {
  // ...
},
devtool: 'source-map',
```