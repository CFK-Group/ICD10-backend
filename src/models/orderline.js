let orderlineModel = {};

orderlineModel.getOrderlinesByCampaign = function (callback) {
    if (connection) {
        connection.query('select o.numero as orderline, o.nombre as nombreOrderLine, o.prioridad as prioridad, c.nombre as nombreCampania, c.orderid as orderId, c.Inicio as inicio, c.fin as fin, s.seachangeCode as spot  from  orderline o JOIN campania  c on c.id = o.campania_id JOIN spot s on s.id = o.spot_id;',
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

module.exports = orderlineModel;