const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    myPlace: "./src/myPlace.js",
    placeLocator: "./src/placeLocator.js",
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
