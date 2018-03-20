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

orderlineModel.addOrderLine = function(orderlineData, insertedId, callback){
    if(connection){
        for (const orderline of orderlineData){
            orderline.campania_id = insertedId;
        }

        nestedArray = orderlineData.map(function (obj) {
            return [parseInt(obj.numero), obj.nombre, parseInt(obj.prioridad) || 0, obj.campania_id, parseInt(obj.spot_id)];
        });
        const sql = 'INSERT INTO orderline (numero, nombre, prioridad, campania_id, spot_id) VALUES ?';
        connection.query(sql, [nestedArray],
            function(err, row) {
                if(err){
                    callback(err, null);
                    console.log(err);
                }
                if(!err){
                    console.log('listo');
                    callback(null, row);
                }
            })
    }
};

module.exports = orderlineModel;