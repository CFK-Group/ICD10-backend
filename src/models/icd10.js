const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ICD10'
});

let icd10Model = {};

icd10Model.getICD10s = function (callback) {
    if(connection){
        connection.query(
            'SELECT *FROM icd10 ORDER BY id',
            function (err, result) {
                if(err){
                    throw err;
                }else{
                    callback(null, result)
                }
            }
        )
    }
};

icd10Model.getICD10 = function(id, callback) {
    if (connection) {
        connection.query('SELECT * FROM icd10 WHERE id=?', id,
            function(err, row) {
                if(err) {
                    throw err;
                }
                else {
                    callback(null, row);
                }
            }
        );
    }
};

icd10Model.createICD10 = function (icd10Data, callback) {
    if(connection){
        connection.query(
            'INSERT INTO icd10 SET ?', icd10Data,
            function (err, rows) {
                if(err){
                    throw err
                }else{
                    callback(null,  {
                        success: true,
                        id: rows.insertId
                    })
                }
            }
        )
    }
};

module.exports = icd10Model;