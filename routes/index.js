const express = require('express');
const router = express.Router();
var mysql = require('mysql');
fs = require('fs');
require('dotenv').config({ path: 'variables.env' });


var conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_URL_USER,
    password: process.env.PSW_PSW,
    database: process.env.DATABASE,
    port: 3306,
    ssl: {
        ca: fs.readFileSync(__dirname + process.env.CR_URL_AZURE)
    },
    insecureAuth: true

});


router.get('/',function (req, res) {
       
        conn.query('select * from test as solution', function (error, result, fields) {
        if (error) throw error;
            console.log(result);
            obj = { home: result };
            res.render('home',  obj );
            
        });

    });

router.get('/comparar',
    function (req, res) {
        res.render('comparation');
    });
router.get('/test', function(req,res){
    res.render('test');
});

module.exports = router;







