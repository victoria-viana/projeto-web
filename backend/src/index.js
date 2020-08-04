const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 5555;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);


app.listen(port, function() {
    console.log("Server started...");
});