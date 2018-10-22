'use strict';
module.exports = (app) => {
    var appController = require('../controllers/appController.js');

    app.route('/api/ps_ax')
    .get(appController.ps_ax)
    
    app.route('/api/kill')
    .post(appController.kill)

    app.route('/api/services')
    .get(appController.services)
};