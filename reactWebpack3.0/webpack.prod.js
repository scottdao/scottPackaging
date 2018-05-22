const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');
module.exports = merge(common, {
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin({

		}),
        new webpack.optimize.CommonsChunkPlugin({
			name: 'base',
			filename: 'js/[name].[hash:8].js'
		  }),
    	//生产环境和开发环境对代码压缩的区别；
	    new webpack.DefinePlugin({
	            'process.env': {
	            	NODE_ENV: JSON.stringify("production")
	            }
	        }),
	    new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
        //文件信息；
		new webpack.BannerPlugin('@Copyright by scott time:2018')
	]
})