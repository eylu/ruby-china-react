var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        // publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'], // babel 配置项中
                plugins: [
                    ["import", {
                        libraryName: "antd",
                        style: "css"
                    }]
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css?modules!less',
            include: /src/
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=2048000&name=images-[hash:8].[name].[ext]'
        },{
            test: /\.json$/,
            loader: 'json'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.tmpl.html")
        })
    ],
    devServer: {
        contentBase: 'build/',
        inline: true,
        hot: true,
    }
};
