'use strict';
var path = require("path");


exports.main_page = (req, res) => {
    res.sendFile(path.join(__dirname, '..', "views", "index.html"));
};