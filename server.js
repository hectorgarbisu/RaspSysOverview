const express = require('express')
//bodyParser = require('body-parser');


const app = express();
port = process.env.PORT || 3000;

var web_routes = require('./routes/routes.js');
var api_routes = require('./routes/api.js');
web_routes(app);
api_routes(app)



app.use(express.static(__dirname + '/public'));

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.listen(port, () => console.log(`App listening on port ${port}!`))
