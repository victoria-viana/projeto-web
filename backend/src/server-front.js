const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use('/', express.static(path.resolve(__dirname, '..', '..', 'frontend')));

try {

    app.listen(5555, () => {
        console.log("Server App started...");
    });
} catch (error) {
    console.log('Não foi possível iniciar o servidor frontend');
}
