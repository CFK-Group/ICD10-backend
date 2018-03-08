const user = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const secret = 'starLabs';

module.exports = function (app) {
    app.get('/users', (req, res) => {
        user.getUsers(function (err, data) {
            res.status(200).json(data);
        })
    });

    app.get("/user/id/:id", function(req, res) {
        //id del usuario
        let id = req.params.id;
        //solo actualizamos si la id es un número
        if(!isNaN(id)) {
            user.getUser(id, function(error, data) {
                //si el usuario existe lo mostramos en formato json
                if (typeof data !== 'undefined' && data.length > 0) {
                    res.status(200).json(data);
                }
                //en otro caso mostramos una respuesta conforme no existe
                else {
                    res.status(404).json({
                        "msg":`No existe el usuario con id = ${req.params.id}`
                    });
                }
            });
        }
        //si hay algún error
        else {
            res.status(500).json({"msg":"Error"});
        }
    });

    app.get("/user/:userName", function(req, res) {
        //id del usuario
        let userName = req.params.userName;
        user.getUserByUsername(userName, function(err, data) {
            //si el usuario existe lo mostramos en formato json
            if (typeof data !== 'undefined' && data.length > 0) {
                res.status(200).json(data);
            }
            //en otro caso mostramos una respuesta conforme no existe
            else {
                res.status(404).json({
                    "msg":`No existe el usuario con userName = ${req.params.userName}`
                });
            }
        });
    });

    app.post('/new/user', function (req, res) {
        const userData = {
            'id': null,
            'usuario': req.body.usuario,
            'pswd': bcrypt.hashSync(req.body.pswd)
        };

        user.createUser(userData, function (err, data) {
            if(data && data.insertId){
                res.status(200).json({
                    success: true,
                    msg: 'Usuario creado',
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

    app.post('/login', function (req, res) {
        //Buscar el usuario en ls BD
        user.getUserByUsername(req.body.username, function(err, user){
            user = user[0];
            if (err) return res.status(500).send('Error on the server.');
            if (!user) return res.status(404).send('No user found.');

            //Validar la contraseña
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.pswd);

            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            //Crear token
            var token = jwt.sign({ id: user.id }, secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            return res.status(200).send({ auth: true, token: token });
        });
    });

};
