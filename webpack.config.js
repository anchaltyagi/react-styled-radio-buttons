module.exports = {
  entry: {
    example: './example/example.jsx',
  },
  output: {
    path: './example',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /build|node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};