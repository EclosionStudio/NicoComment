// https://github.com/glenjamin/webpack-hot-middleware
const fs = require ('fs');
const express = require ('express');
const path = require ('path');

const config = require('../webpack.config')
const webpack = require ('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackHotMiddleware = require ('webpack-hot-middleware');

const app = express();
const bodyParser = require ('body-parser');
const DATA_PATH = path.join(__dirname, 'sampleData.json')

const compiler = webpack (config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));
app.use(express.static('./server'))

app.use(bodyParser.json());
// http://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');

    res.setHeader('Cache-Control','no-cache');

    next();
});

app.get('/api/getComment', function(req, res) {
    fs.readFile(DATA_PATH, function(error, data){
        if(error){
            console.log(error);
        }

        res.json(JSON.parse(data));
    })
});

app.post('/api/postComment',function (req, res) {

    fs.readFile(DATA_PATH, function (err, data) {
        if(err){
            console.log(err)
        }
        let comments = JSON.parse(data);

        // ES6 class
        let newComment = {
            "uniqueID": Math.floor(Math.random()*100+30).toString(),
            "nickName": req.body.author,
            "date": (new Date()).toISOString(),
            "userEmail": req.body.mailaddr,
            "baseID": 0,
            "forwardWebsite": req.body.website,
            "comment": req.body.comment,
            get reply () {return this.uniqueID;},
            "score": [90, 20]
        }
        console.log(data);
        comments.commentBody.push(newComment);
        fs.writeFile(
            DATA_PATH,
            JSON.stringify(comments, null, 4),
            function (err) {
                if(err){
                    console.log(err);
                }
                res.json(comments);
            }
        )
    })
})



app.use('/', function(req,res){
   res.sendFile(path.resolve('client/index.html'));
});

const port = 3000;

app.listen(port,function (error) {
    if (error) throw error;
    console.log('Express server listening on port'+ port);
});

// https://segmentfault.com/a/1190000005605424