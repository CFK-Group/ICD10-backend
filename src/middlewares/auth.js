const secret = 'starLabs';
const user = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
let global = {};

global.auth = function (username, password, res) {
    user.getUserByUsername(username, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        user = user[0];
        if (!user) return res.status(404).send('No user found.');

        //Validar la contraseña
        passwordIsValid = bcrypt.compareSync(password, user.pswd);
        if (!passwordIsValid) return res.status(401).send({auth: false, token: null});

        //Crear token
        token = jwt.sign({id: user.id}, secret, {
            expiresIn: 86400 // expires in 24 hoursΩ
        });
        return res.status(200).send({ auth: true, token: token });
    });

};

global.validateToken = function(token, callback){
   if (!token) callback(null, {statusCode: 403, data:{ auth: false, message: 'No token provided.' }});
   jwt.verify(token, secret, function(err, decoded) {
        if (err) callback(null, {statusCode: 500, data:{ auth: false, message: 'Failed to authenticate token.' }});
        // if everything good, save to request for use in other routes
       callback(true, null);
    });
};

module.exports = global;