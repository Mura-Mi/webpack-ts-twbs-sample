module.exports = {
  entry: [ './public/javascripts/common' ],
  output: {
    filename: '[name].bundle.js',
    path: './public/javascripts/dist'
  },
  resolve: {
    extensions: ['', '.ts']
  },
  module: {
    loaders: [
      { test: /\.tesx?$/, loader: 'ts-loader' }
    ]
  }
}
