const campaign = require('../models/campaigns');
const orderline = require('../models/orderline');
const global = require('../middlewares/auth');
const util = require('../middlewares/util');
const omit = require('object.omit');
module.exports = function (app) {
    app.get('/campaigns', (req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                orderline.getOrderlinesByCampaign(function (error, data) {
                    if (!error) {
                        campaigns = util.mix(data);
                        //console.log(campaigns);
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

    app.post('/campaign/new', (req, res) => {
        global.validateToken(req.query.token, function (response, err){
            if (!err){
                campaignData = omit(req.body, 'orderlines'); //datos de la campaña, sin las orderline
                campaignOrderlines = req.body.orderlines;
                console.log(campaignData);
                campaign.addCampaign(campaignData, function (error, data) {
                    console.log('insertando campaña');
                    if(!error){
                        insertedId = data.insertId;
                        orderline.addOrderLine(campaignOrderlines, insertedId, function(orderlineError, orderlineData){
                            if(!orderlineError){ res.status(200).json(orderlineData); }
                            else { res.status(500).send(orderlineError); console.log(orderlineError); }
                        });

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