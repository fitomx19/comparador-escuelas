const express = require('express');
const router = express.Router();

const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "azure@comparadorescuelas",
            password: "Kinect123"
        },
        type: "default"
    },
    server: "comparadorescuelas.database.windows.net",
    options: {
        database: "comparador_escuelas",
        encrypt: true
    }
};

const connection = new Connection(config);


router.get('/',function (req, res) {
        queryDatabase();
        res.render('home');
    });

router.get('/comparar',
    function (req, res) {
        res.render('comparation');
    });
module.exports = router;

function queryDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `select * from test`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
            const name = column.metadata.colName;
            console.log(name +' funciona ');
        });
    });

    connection.execSql(request);
}