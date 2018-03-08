const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'invidi'
});

let userModel = {};

userModel.getUsers = function (callback) {
    if(connection){
        connection.query(
            'SELECT *FROM usuario ORDER BY id',
            function (err, result) {
                if(err){
                    throw err
                }else{
                    callback(null, result)
                }
            }
        )
    }
};

userModel.getUserById = function(id, callback) {
    if (connection) {
        connection.query('SELECT * FROM usuario WHERE id=?', id,
            function(err, row) {
                if(err) {
                    throw err
                }
                else {
                    callback(null, row);
                }
            }
        )
    }
};

userModel.getUserByUsername = function(user, callback) {
    if (connection) {
        connection.query('SELECT * FROM usuario WHERE usuario=?', user,
            function (err, res) {
                if(err) {
                    throw err;
                }else{
                    callback(null, res)
                }
            }
        );
    }
};

userModel.createUser = function (userData, callback) {
    if(connection){
        connection.query(
            'INSERT INTO usuario SET ?', userData,
            function (err, rows) {
                if(err){
                    throw err
                }else{
                    callback(null, rows)
                }
            }
        )
    }
};

module.exports = userModel;