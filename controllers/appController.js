'use strict';
var sysCtrl = require("./systemController.js")

var path = require("path");


exports.main_page = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "public", "index.html"));
};

exports.list = (req, res) => {
    res.send(sysCtrl.status_all())
};

exports.admin_page = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "public", "admin.html"));
};
