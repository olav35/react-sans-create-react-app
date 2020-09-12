const path = require('path')
const webpack = require('webpack')

const config = (_, argv) => {
  const productionConfig = {}

  const developmentConfig = {}

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        CONFIG: JSON.stringify(argv.mode === 'production' ? productionConfig : developmentConfig)
      })
    ]
  }
}

module.exports = config
