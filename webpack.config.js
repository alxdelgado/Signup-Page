// // import dependencies 
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const path = require('path');

// // create webpack export
// module.exports = {
//     context: __dirname,
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js',
//         publicPath: '/',
//     },
//     devServer: {
//         historyApiFallback: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 use: 'babel-loader',
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//             {
//                 test: /\.(png|jpg|svg|gif)$/,
//                 use: [{
//                     loader: 'file-loader',
//                 }]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: path.resolve(__dirname, 'public/index.html'),
//             filename: 'index.html'
//         })
//     ]
// }; 



/////////////


const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            inject: "body"
        })
    ],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif|webm)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]",
                            outputPath: "media/"
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    }
}