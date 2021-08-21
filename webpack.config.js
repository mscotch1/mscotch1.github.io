// webpack.config.js

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    index:  './src/index.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.svg/,
        loader: 'raw-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
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
                  "./src/style",
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
    alias: {
      posts: path.resolve(__dirname, 'posts/'),
      src: path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Michael Scott',
      favicon: './assets/hedgehog.svg',
      templateContent: `
        <html>
          <head>
            <meta charset="utf-8">
            <title>Michael Scott</title>
            <meta http-equiv="Content-Security-Policy" content="default-frame 'self'">
            <meta name="description" content="Personal website for Michael Scott">
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, ''),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 8080,
    publicPath: "http://localhost:8080",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
