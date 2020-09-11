# React hello world
In this step we configure webpack for building a simple react application and write a "hello, world" program in react.

First we need to install react and react-dom
```sh
$ npm install --save react react-dom
```

Then we write our react app with the `src/index.js` starting point and `src/App.js` component.
```js
// src/index.js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```
```js
// src/App.js
import React from 'react'

const App = () => {
  return (
    <div>hello, world</div>
  )
}

export default App
```

This app is built to `build/main.js`, but we also need to include the app in a html document. Therefore we add a file `build/index.html` directly to our build.
```html
<!-- build/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>hello, world</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="./main.js"></script>
  </body>
</html>
```
