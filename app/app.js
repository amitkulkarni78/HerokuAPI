const express = require('express');
const app = express();
const indexRoutes = require('../routes/index');
const authRoutes  = require('../routes/auth.routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.raw());
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

module.exports = app;