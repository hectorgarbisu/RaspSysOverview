'use strict';
var sysCtrl = require("./systemController.js")

var path = require("path");


exports.main_page = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', "public", "index.html"));
};

exports.services = (req, res) => {
    res.status(200).send(sysCtrl.services())
};

exports.ps_ax = (req, res) => {
    res.status(200).send(sysCtrl.ps_ax())
};

exports.admin_page = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', "public", "admin.html"));
};
