'use strict';
var sysCtrl = require("./systemController.js")

var path = require("path");


exports.main_page = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "views", "index.html"));
};

exports.list = (req, res) => {
    res.send(sysCtrl.ls() + sysCtrl.status_all() + sysCtrl.ps_ax())
};

exports.admin_page = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "views", "admin.html"));
};
