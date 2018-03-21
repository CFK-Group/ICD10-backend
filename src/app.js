const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./middlewares/database');

// Settings
const port =  process.env.PORT || 8100;

// Middlewares
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

// Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
require('./routes/icd10Routes')(app);
require('./routes/userRoutes')(app);
require('./routes/channelRoutes')(app);
require('./routes/campaignRoutes')(app);
require('./routes/spotRoutes')(app);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});