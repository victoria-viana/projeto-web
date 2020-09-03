const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const port = process.env.PORT || 3333;

const app = express();

const app1 = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app1.use('/', express.static(path.resolve(__dirname, '..', '..', 'frontend')));

try {
    mongoose.connect(`mongodb+srv://dbAdmin:${process.env.DBPASSWD}@cluster-rode.anech.mongodb.net/rodetransportesvistoria?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.listen(port, () => {
        console.log("Server started...");
    });

    app1.listen(5555, () => {
        console.log("Server started...");
    });
} catch (error) {
    console.log('Não foi possível se conectar com o banco de dados');
}
