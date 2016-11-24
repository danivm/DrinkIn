const express = require('express')
const bodyparser = require('body-parser')
const passport = require('passport')
const db = require('./db');
const app = express()
const PORT = 3000;

app.set('view engine', 'pug')

app.use( express.static('public') )
app.use( express.static('angularApp') )

app.use( bodyparser.urlencoded({ extended: false }) )

const routerCategories = require('./routes/categories');
const routerAllergens = require('./routes/allergens');
const routerDishes = require('./routes/dishes');
const routerApi = require('./routes/api')

app.use( '/admin/categories', routerCategories )
app.use( '/admin/allergens', routerAllergens )
app.use( '/admin/dishes', routerDishes )
app.use( '/api', routerApi )

app.use( passport.initialize() );
app.use( passport.session() );

const routerAuthGoogle = require('./routes/auth/social/google')
app.use('/auth/google', routerAuthGoogle)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )