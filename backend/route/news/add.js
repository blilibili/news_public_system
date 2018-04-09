let express = require('express');
let router = express.Router();
let connection = require('../../common/connect');
router.post('/news/post/add', function(req, res) {
    let sql = 'Insert into news(title , content , tag , timestamp)values(? , ? , ?, ?)';
    let params = [req.body.title , req.body.content , req.body.tag , Date.parse(new Date())];

    connection.query(sql , params , (err) => {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.send({
            status:0,
            msg:'新增新闻成功'
        })
    })
});

module.exports = router;