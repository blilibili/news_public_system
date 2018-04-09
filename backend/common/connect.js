//mysql.js
let mysql = require('mysql'); //调用MySQL模块
//创建一个connection
let connection = mysql.createConnection({
    host: '127.0.0.1', //主机
    user: 'root',     //数据库用户名
    password: '',     //数据库密码
    port: '3306',
    database: 'article', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

module.exports = connection;