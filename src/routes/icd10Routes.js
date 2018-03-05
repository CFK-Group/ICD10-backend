const icd10 = require('../models/icd10');

module.exports = function (app) {
    app.get('/ICD10s', (req, res) => {
        icd10.getICD10s(function (err, data) {
            res.status(200).json(data);
        })
    });

    app.get("/icd10/:id", function(req, res) {
        //id del usuario
        let id = req.params.id;
        //solo actualizamos si la id es un número
        if(!isNaN(id)) {
            icd10.getICD10(id, function(error, data) {
                //si el usuario existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else {
                    res.status(404).json({
                        "msg":`No existe el ICD10 con id = ${req.params.id}`
                    });
                }
            });
        }
        //si hay algún error
        else {
            res.status(500).json({"msg":"Error"});
        }
    });

    app.post('/new/ICD10', function (req, res) {
        console.log(req.body);
        const icd10Data = {
            id: null,
            card_id: req.body.card_id,
            order_line_id: req.body.order_line_id,
            break_id: req.body.break_id,
            network: req.body.network,
            broadcast_cue_time: req.body.broadcast_cue_time,
            actual_play_time: req.body.actual_play_time,
            break_window_start_time: req.body.break_window_start_time,
            break_window_end_time: req.body.break_window_end_time,
            break_number: req.body.break_number,
            offset: req.body.offset,
            status_type: req.body.status_type,
            status_code: req.body.status_code,
            number_of_second_viewed: req.body.number_of_second_viewed,
            number_of_second_viewed_in_normal_mode: req.body.number_of_second_viewed_in_normal_mode,
            number_of_second_viewed_in_trick_mode: req.body.number_of_second_viewed_in_trick_mode,
            number_of_second_paused: req.body.number_of_second_paused,
            tuner_type: req.body.tuner_type,
            box_type: req.body.box_type,
            time_zone: req.body.time_zone,
            watch_probability: req.body.watch_probability,
            time_since_last_key_press: req.body.time_since_last_key_press,
            compatibility_index: req.body.compatibility_index
        };

        icd10.createICD10(icd10Data, function (err, data) {
            if(data && data.id){
                res.status(200).json({
                    success: true,
                    msg: 'ICD10 creado',
                    data: data
                })
            }else{
                res.status(500).json({
                    success: false,
                    msg: `Error: ${err}`
                })
            }
        })
    });

};
