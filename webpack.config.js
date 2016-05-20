
module.exports = {

  // Input
  entry: [
    './app/index.js'
  ],

  // Loaders(plugins) - transformations
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        },
        exclude: /node_modules/
      },
      // Load stylus
      // You can ignore this, not React related
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader', exclude: /node_modules/ }
    ]
  },

  // Enable imports like `require('file')` instead of `require('file.js')`
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // Output
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }

}

// RUN:
// `webpack` for building once for development
// `webpack -p` for building once for production (minification)
// `webpack --watch` for continuous incremental build in development (fast!)
// `webpack -d` to include source maps
