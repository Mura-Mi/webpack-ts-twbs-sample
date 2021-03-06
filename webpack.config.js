module.exports = {
  entry: [ 
    'bootstrap-loader',
    './public/index',
    './public/page1/index'
  ],
  output: {
    filename: '[name].bundle.js',
    path: './public/javascripts/dist'
  },
  resolve: {
    extensions: [ '', '.ts', '.scss', '.js' ]
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'style', 'css' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file'},
      { 
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery' 
      },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: "html" }
    ]
  }
}
