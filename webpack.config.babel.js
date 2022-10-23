import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import CopyPlugin from 'copy-webpack-plugin';

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/main.ts',
    pinterest: './src/pinterest.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].[name].js'

  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
  ]
};