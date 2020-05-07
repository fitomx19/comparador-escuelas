const express = require('express');
const router = express.Router();
var mysql = require('mysql');
fs = require('fs');

var conn = mysql.createConnection({
    host: "comparador-escuelas-mysql.mysql.database.azure.com",
    user: "god@comparador-escuelas-mysql",
    password: 'Kinect123',
    database: 'escuela',
    port: 3306,
    ssl: {
        ca: fs.readFileSync(__dirname + '/BaltimoreCyberTrustRoot.crt.pem')
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







