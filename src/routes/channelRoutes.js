const channel = require('../models/channel');
const global = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/channels', (req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                channel.getChannels(function (error, data) {
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