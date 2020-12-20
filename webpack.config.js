const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    //inputs
    entry: {
        main: { import: path.join(__dirname, '/assets/js/src/index.js'), dependOn: 'vendor' },
        vendor: { import: ['react', 'react-dom'] }
    },
    output: {
        path: path.join(__dirname, '/assets/js/dist'),
        publicPath: 'http://node.example.com/static/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    //transformation
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                        presets: ["@babel/preset-env"], plugins: [
                            ["@babel/transform-react-jsx"],
                            ["@babel/transform-runtime"]
                        ]
                    }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'React SSR application',
        //     filename: path.join(__dirname,'templates/index.html'),
        //     template: path.join(__dirname,'templates/index.html'),
        //     scriptLoading: 'defer'
        // }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ],
    devServer: {
        writeToDisk: true,
        // compress: true,
        // disableHostCheck: true
    }
    
};