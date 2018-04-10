let app = require('express')();
let addNews = require('./route/news/add');
let queryAllNews = require('./route/news/queryAll');
let queryOneById = require('./route/news/queryOneDataById');
let delById = require('./route/news/del');
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.post('/users/login' , (req , res) => {
    res.send({
        status:0,
        msg:'登录成功！'
    })
});
//新增文章
app.post('/news/post/add' , addNews);
//查询所有文章
app.get('/news/get/queryAll' , queryAllNews);
//根据id查询一个文章
app.get('/news/get/queryOneById' , queryOneById);
//删除新闻
app.post('/news/post/del' , delById);
app.listen(3001);