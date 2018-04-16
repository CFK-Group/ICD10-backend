let spotModel = {};

spotModel.getSpots = function (params, callback) {
    if (connection) {
        if (params[0] === 0 && params[1] === 0){
            connection.query('SELECT * FROM spot ORDER BY id',
                function (err, row) {
                    if (err) {
                        callback(err, null);
                        console.log(err);
                    }
                    if (!err) callback(null, row);
                }
            )
        }else {
            connection.query('SELECT * FROM spot where isAgi = ? and isAsset = ? ORDER BY id', params,
                function (err, row) {
                    if (err) {
                        callback(err, null);
                        console.log(err);
                    }
                    if (!err) callback(null, row);
                }
            )
        }
    }
};

spotModel.addSpot = function (spotData, callback){
    if(connection){
        connection.query(
            'INSERT INTO spot SET ?', spotData,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            })
    }
};

module.exports = spotModel;