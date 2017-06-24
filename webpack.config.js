const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env) {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      "main": "./index.js",
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()],
  }
}
