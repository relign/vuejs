'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//配置代理 暂用不到，
var proxy = [{
    path: "/api/*",
    target: "http://localhost:8090/",
    host: "localhost"
}]
//启动服务
var compiler = webpack(config);

var server  = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    inline: true,
    hot:true,
    historyApiFallback: true
});
server.listen(8090,'127.0.0.1',function (err) {
  console.log('Listening at localhost:8090');
});
