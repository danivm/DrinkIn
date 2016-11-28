const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const image_url_default='http://images.gofreedownload.net/geant-pictogram-restaurant-clip-art-6351.jpg'
var Account = new Schema({
    username: String,
    password: String,
});

Account.plugin( passportLocalMongoose );

module.exports = mongoose.model('Account', Account);