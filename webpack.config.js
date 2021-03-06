const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: './app.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devtool: 'inline-source-map',
   devServer: {
    headers: {
        'Cache-Control': 'no-store',
      },
      inline: true,
      port: 3000,
   },
   cache: false,
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         }
      ]
   },
   plugins:[
    new HtmlWebpackPlugin({
        template:"./index.html",
    })
   ]
}