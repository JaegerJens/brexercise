const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename:  "bundle.js",
        path: path.resolve(__dirname, "..", "wwwroot")
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devtool: "source-map"
}