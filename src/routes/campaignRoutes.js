const campaign = require('../models/campaigns');
const orderline = require('../models/orderline');
const global = require('../middlewares/auth');
const util = require('../middlewares/util');
module.exports = function (app) {
    app.get('/campaigns', (req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                orderline.getOrderlinesByCampaign(function (error, data) {
                    if (!error) {
                        campaigns = util.mix(data);
                        res.status(200).json(campaigns);
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
    /*
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
    });*/
};