const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssNormalize = require('postcss-normalize')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssNormalize()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|png|jpe?g|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Code Like a Girl - Tech Puzzles for Problem Solvers',
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyPlugin([
      {
        from: './src/imgs/social/social-media-meta.gif',
        to: './'
      },
      {
        from: './src/imgs/tech-puzzles.png',
        to: './'
      }
    ])
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.devServer.historyApiFallback = true
  }
  config.mode = argv.mode

  return config
}
