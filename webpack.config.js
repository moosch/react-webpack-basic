const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Entry points for main JS and SCSS
  entry: [
    './app/index.js',
    './app/scss/styles.scss'
  ],
  output: {
    // Name of our bundled js
    filename: 'bundle.js',
    // Set absolute path to our bundled js
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        // Look for any js files
        test: /\.js$/,
        // Don't transpile any node modules!
        exclude: /node_modules/,
        // ES6 to ES5
        loader: 'babel-loader',
        // Presets is an option to the loader (babel-loader)
        options: {
          presets: [
            /*
            modules that are not static can't be bundled by webpack,
            but babel helps with this by setting modules to false to NOT transform modules
            */
            ['es2015', {modules: false}]
          ]
        }
      },
      {
        // Load any scss files
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader'
        ])
      }
    ]
  },
  plugins: [
    // Designate filename for comiled css. Path is already set
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ]
};
