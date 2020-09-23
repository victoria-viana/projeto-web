const fs = require('fs');
const mongoose = require('mongoose');
const cron = require('node-cron');
require('dotenv').config();

try {
    mongoose.connect(`mongodb+srv://dbAdmin:${process.env.DBPASSWD}@cluster-rode.anech.mongodb.net/rodetransportesvistoria?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    function saveData(data, col) {
        fs.writeFile(`./bckps/${Date.now()}-${col}-backup.json`, JSON.stringify(data), function (err, data) {
            if (err) {
                throw err;
            }
        });
    }

    function makeBackup() {
        mongoose.connection.on('open', () => {
            mongoose.connection.db.listCollections().toArray((err, collections) => {
                collections.forEach(async col => {
                    mongoose.connection.db.collection(col.name, function (err, collection) {
                        collection.find({}).toArray((err, result) => {
                            saveData(result, col.name);
                        });
                    });
                });
            });
        });
    }

    cron.schedule('0 0,12 * * *', () => {
        makeBackup();
    }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
    });


} catch (error) {
    console.log(error);
}