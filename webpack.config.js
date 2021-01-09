// webpack.config.js

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    index:  './src/index.js',
    about: './src/about.js',
    blog:  './src/blog.js',
  },
  mode: 'development',
  module: {
    rules: [
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
    roots: [
      path.resolve('./src/'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Michael Scott',
      favicon: './assets/hedgehog.svg',
      templateContent: `
        <html>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
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
