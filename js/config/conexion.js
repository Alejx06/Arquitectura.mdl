let database = "papeleria_bd"
let user = "root"
let password = ""
let host = "localhost"
let port = 3306

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos con ID ' + connection.threadId);
});

module.exports = connection; 