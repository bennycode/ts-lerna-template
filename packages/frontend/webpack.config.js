const pkg = require('./package.json');
const webpack = require('webpack');

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    publicPath: '/dist/',
  },
  entry: {
    [pkg.name]: `${__dirname}/${pkg.main}`,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    filename: `[name].bundle.js`,
    path: `${__dirname}/dist`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
