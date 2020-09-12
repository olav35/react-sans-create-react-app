# Final configurations

In this step we will minize the build and configure mode-specific constants.

All that is needed to minize the builds is to make the build npm script use production mode.

`package.json`
```json
"scripts": {
  "build": "webpack --mode=production",
  "start": "webpack-dev-server --mode=development"
},
```
This drastically reduces the size of the build.

Next is configuring mode-specific constants. Below is the changes we made to supply our app with a global constant BACKEND_URL.
```js
const config = (env, argv) => {
  const backend_url = argv.mode === 'production' ? 'example.com' : 'localhost:3001'

  return {
    // ...
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      })
    ]
  }
}
```
Any values specified in the object can be accessed as a global variable in the app. 

Now you have configured a react app yourself. This has some advantages to create-react-app. First off it is much lighter, 2256 dependencies to be precise. A consequence of this is that further configuring and customizing things yourself is more straight forward. 