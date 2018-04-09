let express = require('express');
let router = express.Router();
let connection = require('../../common/connect');

router.get('/news/get/queryAll' , (req ,res) => {
    let sql = 'select * from news';

    connection.query(sql , (err , data) => {
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