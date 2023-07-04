const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkerPlugin = require("worker-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  plugins: [
    new WorkerPlugin(),
    new HtmlWebpackPlugin(),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, ".")
  }),
  // Have this example work in Edge which doesn't ship `TextEncoder` or
  // `TextDecoder` at this time.
  new webpack.ProvidePlugin({
    TextDecoder: ['text-encoding', 'TextDecoder'],
    TextEncoder: ['text-encoding', 'TextEncoder']
  }),

  new MiniCssExtractPlugin({
    filename: 'css/mystyles.css'
  }),
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    assetModuleFilename : `static/[hash][ext]`
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },
  module:{
    rules: [{
      test: /\.(wasm|greet)$/,
      resourceQuery: {
        not: /module/,
      },
      type: "asset/resource",
    },

    {
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    },
    {
      test: /\.(ts|tsx)?$/,
      use: {
        loader: 'ts-loader'
      },
      exclude:[/node_modules/,/\/src\/wasm_modules\/hello_world_js\/assembly/,
              /\/src\/wasm_modules\/hello-world-rust/],
      // excludes: ["node_modules"],
   }
  
  ]
  }
};


