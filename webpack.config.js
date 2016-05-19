
module.exports = {

  // Input
  entry: [
    './app/index.js'
  ],

  // Loaders(plugins) - transformations
  module: {

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
