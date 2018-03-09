let userModel = {};

userModel.getUsers = function (callback) {
    if(connection){
        connection.query('SELECT *FROM usuario ORDER BY id',
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            }
        )
    }
};

userModel.getUserById = function(id, callback) {
    if (connection) {
        connection.query('SELECT * FROM usuario WHERE id=?', id,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            }
        )
    }
};

userModel.getUserByUsername = function(user, callback) {
    if (connection) {
        connection.query('SELECT * FROM usuario WHERE usuario=?', user,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            }
        );
    }
};

userModel.createUser = function (userData, callback) {
    if(connection){
        connection.query(
            'INSERT INTO usuario SET ?', userData,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            }
        )
    }
};

module.exports = userModel;