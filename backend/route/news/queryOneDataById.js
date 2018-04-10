let express = require('express');
let router = express.Router();
let connection = require('../../common/connect');

router.get('/news/get/queryOneById' , (req ,res) => {
    let sql = 'select * from news where id = ?';
    let params = [req.query.id];
    connection.query(sql , params , (err , data) => {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.send({
            status:0,
            msg:'查询新闻成功',
            data:data
        })
    })
});

module.exports = router;