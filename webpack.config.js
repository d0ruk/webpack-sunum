const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nesting = require("postcss-nesting");

module.exports = function(env) {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      "main": "./index.js",
    },
    output: {
      filename: "[name]_[hash:5].js",
      path: path.resolve(__dirname, "build"),
      // publicPath: "//cdn.example.com/"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: { importLoaders: 1 }
              },
              {
                loader: "postcss-loader",
                options: { plugins: [autoprefixer, nesting] }
              }
            ]
          })
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["react", "env"] }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Taytıl",
        template: "template.html"
      }),
      // new webpack.WatchIgnorePlugin([path.resolve(__dirname, "build")]/*, { watch: true }*/),
      new ExtractTextPlugin({ filename: "[name]_[hash:5].css" }),
      new CleanWebpackPlugin([path.resolve(__dirname, "build/**.**")]),
    ],
  }
}
