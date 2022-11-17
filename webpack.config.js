const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
    sharedPlace: "./src/components/sharedPlace.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/assets/scripts/"),
    publicPath: "assets/scripts",
    filename: "[name].js",
    clean: true,
  },
  devtool: "eval",

  //   devServer: {
  //     static: "./dist",
  //   },
};
