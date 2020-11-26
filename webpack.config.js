// webpack.config.js

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './public/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: [
                  "public/style",
                ],
              },
            },
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    roots: [
      path.resolve('./public'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8080,
    publicPath: "http://localhost:8080/dist/",
  },
}
