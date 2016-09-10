module.exports = {
  entry: './src/app.jsx',
  output: {
  	path: './client/yohdl',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};