const spot = require('../models/spot');
const global = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/spots', (req, res) => {
        token = req.query.token;
        filter = req.query.filter;
        if(filter === 'agi'){
            params = [1, 0];
        }else if(filter === 'asset'){
            params = [0, 1];
        }
        global.validateToken(token, function (response, err){
            if (!err){
                spot.getChannels(params, function (error, data) {
                    if (!error) {
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

    app.post('/channels/new', (req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                console.log(req.body);
                channel.addChannel(req.body, function (error, data) {
                    if(!error){
                        res.status(200).json(data);
                    }else{
                        console.log('Error!!!! ', error);
                        res.status(500).send('Internal Server Error');
                    }
                });
            }else{
                res.status(500).send('Internal Server Error');
            }
        });
    });
};