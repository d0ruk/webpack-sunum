const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nesting = require("postcss-nesting");

module.exports = function(env) {
  const isDev = env === "development";

  const toAppend = isDev
    ? []
    : [new CleanWebpackPlugin([path.resolve(__dirname, "build")]),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            // warnings: false,
            drop_console: true,
            dead_code: true,
            unused: true,
          },
          mangle: true,
          // comments: false,
          screw_ie8: true,
        }),
      ];

  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      "main": "./index.js",
    },
    output: {
      filename: isDev
        ? "[name].js"
        : "[name]_[hash:5].js",
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
      new ExtractTextPlugin({
        filename: isDev
          ? "[name].css"
          : "[name]_[hash:5].css",
      }),
      new webpack.DefinePlugin({
        process: {
          env: {
            NODE_ENV: isDev
              ? JSON.stringify("development")
              : JSON.stringify("production")
          }
        }
      }),
    ].concat(toAppend),
  }
}
