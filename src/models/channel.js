let channelModel = {};

channelModel.getChannels = function (callback) {
  if (connection) {
      connection.query('SELECT * FROM canal ORDER BY id',
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

channelModel.addChannel = function (channelData, callback){
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

module.exports = channelModel;