'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { entry, htmlWebpackPlugins } = require('./mutli-page-config.js');
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
// const smwp = new SpeedMeasureWebpackPlugin();
// const Happypack = require('happypack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const config = {
    entry:entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode:"production",
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                include:path.resolve('src'),
                use: [
                    // 'happypack/loader'
                   'babel-loader?cacheDirectory=true', 
                    // 'eslint-loader'
                     ]
            },
            {
                test:/\.(less|css)$/,
                use:[
                 MiniCssExtractPlugin.loader,
                'css-loader',
                 {
                    loader:"postcss-loader",
                    options:{
                        plugins:[
                            require('autoprefixer')({
                                overrideBrowsers:['last 2 version', '>%1', 'ios 7']
                            })
                        ]
                    }
                },
                'less-loader',
                {
                    loader:"px2rem-loader",
                    options:{
                        remUnit:75,
                        remPrecesion:8
                    }
                }
                ] // 从右向左执行，先将css文件解析好之后，再传递给style-loader
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                        // 图片的hash跟css和js的hash概念不一样，图片的hash,md5由图片内容来决定，css/js只要有文件变化，整个项目都会发生变化。
                    },   
                },
            },
            {
                test:/\.(woff|woff2|eot|ttf)$/,  
                use:{
                    loader:'file-loader',
                    options: {
                        limit: 2048,
                        name: path.posix.join('imgs/[name].[hash:8].[ext]'),
                        // 图片的hash跟css和js的hash概念不一样，图片的hash,md5由图片内容来决定，css/js只要有文件变化，整个项目都会发生变化。
                    }
                }
            },
        ]
    },
    resolve:{
        // alias:{
        //     'react':path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
        //     "react-dom":path.resolve(__dirname,'./node_modules/react-dom/umd/react-dom.production.min.js')
        // },
        // extensions:['.js'],
        // mainFields:['main']
    },
    plugins: [
       new MiniCssExtractPlugin({
           filename:'[name]_[contenthash:8].css'
       }),
       new OptimizeCssAssetsWebpackPlugin({
           assetNameRegExp:/\.css$/g,
           cssProcessor:require('cssnano')
       }),
        new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            manifest:require('../build/library/library.json')
        }),
          new webpack.DllReferencePlugin({
            manifest:require('../build/library/plgLib.json')
        }),
        // new Happypack({
        //     loaders:['babel-loader']
        // }),
        ...htmlWebpackPlugins,
        // new BundleAnalyzerPlugin()
    ],
  //  devtool:"cheap-source-map",
  optimization: {
    splitChunks: {
        // minSize:0,
        cacheGroups:{
            vendor: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'vendor',
                chunks: 'all',
            },
            // commons:{
            //     name:"commons",
            //     chunks:'all',
            //     // minchunks:2// 被引用两次会单独打包成一个文件
            // }
        }
     
    }
  },
};

module.exports = config