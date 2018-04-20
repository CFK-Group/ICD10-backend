const hhTag = require('../models/householdTag');
const global = require('../middlewares/auth');

module.exports = function (app){
    app.get('/hhTags',(req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                hhTag.getHHTags(function (error, data) {
                    if (!error) {
                        console.log(data);
                        res.status(200).json(data);
                    } else {
                        console.log('Error!!!! ', error);
                        res.status(500).send('Internal Server Error');
                    }
                })
            }else{
                res.status(500).send('Internal Server Error');
            }
        });
    });
};