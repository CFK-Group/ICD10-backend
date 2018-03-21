let spotModel = {};

spotModel.getChannels = function (params, callback) {
    if (connection) {
        connection.query('SELECT * FROM spot where isAgi = ? and isAsset = ? ORDER BY id', params,
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

/*
spotModel.addChannel = function (channelData, callback){
    if(connection){
        connection.query(
            'INSERT INTO canal SET ?', channelData,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            })
    }
};*/

module.exports = spotModel;