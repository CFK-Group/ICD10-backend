let util = {};

util.mix = function (objectToMix) {
    mixed = [];
    for (const object of objectToMix) {
        if (mixed.length === 0){
            first = {
                orderId: object.orderId,
                nombreCampania: object.nombreCampania,
                inicio: object.inicio,
                fin: object.fin,
                orderlines:[
                    {id:object.orderline, nombre: object.nombreOrderLine, prioridad: object.prioridad, spot: object.spot}
                ]
            };
            mixed.push(first);
        }else{
            for (const mixedElement of mixed){
                if (object.orderId === mixedElement.orderId){
                    console.log('Este objeto ya se encuentra dentro del array');
                    for (const orderline of mixedElement.orderlines){
                        if (object.orderline !== orderline.id){
                            mixedElement.orderlines.push({
                                id: object.orderline,
                                nombre: object.nombreOrderLine,
                                prioridad: object.prioridad,
                                spot: object.spot
                            })
                        }
                    }
                }else{
                    console.log('Objeto Nuevo');
                    newElement = {
                        orderId: object.orderId,
                        nombreCampania: object.nombreCampania,
                        inicio: object.inicio,
                        fin: object.fin,
                        orderlines: [
                            {
                                id: object.orderline,
                                nombre: object.nombreOrderLine,
                                prioridad: object.prioridad,
                                spot: object.spot
                            }
                        ]
                    };
                    mixed.push(newElement);
                }
            }
        }
  }

    return mixed;
};

module.exports = util;