const path = require('path');

module.exports = {
  entry: '/',
  output: {
    filename: 'contactus.min.js',
    path: path.resolve(__dirname, ''),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

};

