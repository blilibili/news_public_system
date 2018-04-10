let express = require('express');
let router = express.Router();
let connection = require('../../common/connect');
router.post('/news/post/add', function(req, res) {
    let addSql = 'Insert into news(title , content , tag , timestamp)values(? , ? , ?, ?)';
    let upateSql = 'Update news set title = ? , content = ? , tag = ? , timestamp = ? where id = ?';
    let addParams = [req.body.title , req.body.content , req.body.tag , Date.parse(new Date())];
    let updateParams = [ req.body.title , req.body.content , req.body.tag , Date.parse(new Date()) , req.body.id ]
    if(req.body.id){
        connection.query(upateSql , updateParams , (err) => {
            if (err) {
                console.log('[query] - :' + err);
                return;
            }
            res.send({
                status:0,
                msg:'修改新闻成功'
            })
        })
    }else{
        connection.query(addSql , addParams , (err) => {
            if (err) {
                console.log('[query] - :' + err);
                return;
            }
            res.send({
                status:0,
                msg:'新增新闻成功'
            })
        })
    }
});

module.exports = router;