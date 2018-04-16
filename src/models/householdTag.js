let hhtModel = {};

hhtModel.getHHTags = function (callback) {
    if (connection) {
        connection.query('SELECT * FROM household_tag ORDER BY id',
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

module.exports = hhtModel;