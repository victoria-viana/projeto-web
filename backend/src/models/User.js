const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    img: String, 
    name: String,
    cpf: String,
    password: String,
    permission: Number,
})

module.exports = mongoose.model('User', UserSchema);