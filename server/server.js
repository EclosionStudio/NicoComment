// 教程： https://segmentfault.com/a/1190000005605424
const fs = require ('fs'); // 读写文件
// cmd + c select current row
const path = require ('path'); // 路径
// shift + Enter next line
const express = require ('express'); // express框架
const bodyParser = require ('body-parser'); // 中间件
// 定义app
const app = express();

// HMR
const config = require('../webpack.config');
const webpack = require ('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackHotMiddleware = require ('webpack-hot-middleware');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler, {log: console.log}));


// 评论文件地址, 是server.js当前的位置
const DATA_PATH = path.join(__dirname, 'data/sampleData.json');
// 启用bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// 静态文件文件目录
app.use('/', express.static(path.join(__dirname, '..', 'client')));

 //app.use('/', function (req, res) {
 //   res.sendFile(path.resolve('client/index.html'));
 //});

// 响应头信息
app.use(function(req, res, next){
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 缓存设置
    res.setHeader('Cache-Control','no-cache');

    next();
});
// 设定get请求url对应的处理函数
app.get('/api/getComment',function (req, res) {
    fs.readFile(DATA_PATH,function (err, data) {
        if(err) {
            console.log(err);
        }

        res.json(JSON.parse(data));
    })
})

// 端口
//app.use('port', (process.env.PORT || 3000));
const port = 3000;

// app.get('port')

// 启动
app.listen(port, function(error){
    if(error) throw error;
    console.log('Express server listening on port', port);
});
