const express = require('express')
bodyParser = require('body-parser');

const app = express();
port = process.env.PORT || 3000;

var routes = require('./routes/routes.js');
routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`App listening on port ${port}!`))
