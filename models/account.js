const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const image_url_default='http://images.gofreedownload.net/geant-pictogram-restaurant-clip-art-6351.jpg'
var Account = new Schema({
    username: String,
    password: String,
    restaurantName: { type: String, default: 'My New Restaurant' },
    numTables: { type: Number, default: 20 },
    image_url: { type: String, default: image_url_default },
});

Account.plugin( passportLocalMongoose );

module.exports = mongoose.model('Account', Account);