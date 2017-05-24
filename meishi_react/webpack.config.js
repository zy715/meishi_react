var path = require('path');
module.exports = {
    entry:'./js/entry.js',
    output: {//设置出口
        path: path.resolve(__dirname, 'dist'),
    		filename: 'bundle.js'
    },
    module: {
        rules: [
        {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use:[
         	{
         	loader: 'babel-loader',
         	options:{//配置文件信息
		        presets:["es2015","react"]//预设置
		         }
         	}
         ]
        }
        ]}
};






