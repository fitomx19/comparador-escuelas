const express = require('express');
const router = express.Router();


router.get('/',
    function (req, res) {
        res.render('home', );
    });

router.get('/comparar',
    function (req, res) {
        res.render('comparation');
    });
module.exports = router;