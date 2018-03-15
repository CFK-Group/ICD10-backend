let campaignModel = {};

campaignModel.getCampaigns = function (callback) {
    if (connection) {
        connection.query('SELECT * FROM campania ORDER BY id',
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
campaignModel.addChannel = function (channelData, callback){
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

};
*/
module.exports = campaignModel;