'use strict';
module.exports = (app) => {
    var appController = require('../controllers/appController.js');
    app.route('/')
    .get(appController.main_page)

};