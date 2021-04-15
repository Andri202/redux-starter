const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js", // combine semua file js kita jadi app.js
    path: path.resolve(__dirname, "dist") // disimpen di folder dist "distributable"
  },
  devServer: { // config buat dev server
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};
