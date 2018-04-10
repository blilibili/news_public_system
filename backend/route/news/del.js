let express = require('express');
let router = express.Router();
let connection = require('../../common/connect');
router.post('/news/post/del' , (req , res) => {
    let delSql = "Delete from news where id = ?";
    let delParam = [req.body.id];
    connection.query(delSql , delParam , (err) => {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.send({
            status:0,
            msg:'删除新闻成功'
        })
    })
});

module.exports = router;