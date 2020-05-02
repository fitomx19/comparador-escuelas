var mysql = require('mysql');
fs = require('fs');

var conn = mysql.createConnection({ 
        host: "comparador-escuelas-mysql.mysql.database.azure.com", 
        user: "god@comparador-escuelas-mysql", 
        password: 'Kinect123', 
        database: 'escuela',  
        port: 3306, 
        ssl: { 
        ca: fs.readFileSync(__dirname + '/certs/BaltimoreCyberTrustRoot.crt.pem')
             },
        insecureAuth: true  
        
    });

conn.connect(function (err) {
    if (err) throw err;
    console.log("Conectado a Azure Database!");
});



