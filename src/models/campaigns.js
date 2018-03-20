var moment = require('moment');
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


campaignModel.addCampaign = function (campaignData, callback){
    if(connection){
        campaignData.Inicio = moment(campaignData.Inicio, 'DD MMM, YYYY').format('YYYY-MM-DD HH:mm:ss');
        if(campaignData.fin === '') campaignData.fin = null;
        connection.query(
            'INSERT INTO campania SET ?', campaignData,
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err) callback(null, row);
            })
    }

};

module.exports = campaignModel;