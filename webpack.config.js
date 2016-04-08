module.exports = {
  entry: [ './public/javascripts/common' ],
  output: {
    filename: '[name].bundle.js',
    path: './public/javascripts/dist'
  },
  resolve: {
    extensions: [ '', '.ts', '.scss' ]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file'}
    ]
  }
}
