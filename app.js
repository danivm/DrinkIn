const express       = require('express')
const bodyparser    = require('body-parser')
const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session       = require('express-session')
const cookieParser  = require('cookie-parser');

const db     = require('./db');
const app    = express()
const PORT   = process.env.PORT || 3000;

const routerCategories = require('./routes/categories');
const routerAllergens  = require('./routes/allergens');
const routerDishes     = require('./routes/dishes');
const routerRestaurant = require('./routes/restaurant');
const routerTickets    = require('./routes/tickets');
const routerApi        = require('./routes/api')

const socketTicketsEvents = require('./sockets/tickets')

app.set('view engine', 'pug')

app.use( express.static('public') )
app.use( express.static('angularApp') )
app.use( bodyparser.urlencoded({ extended: false }) )

app.use( cookieParser() );
app.use( session({ secret: 'drinkin12345'}) );

app.use( passport.initialize() );
app.use( passport.session() );

/* @begin LOCAL */
var Account = require('./models/account');
passport.use( new LocalStrategy( Account.authenticate() ) );
passport.serializeUser( Account.serializeUser() );
passport.deserializeUser( Account.deserializeUser() );

const routerAuthLocal = require('./routes/auth/local')
app.use('/', routerAuthLocal)
/* @end LOCAL */

app.use( '/admin/categories', routerCategories )
app.use( '/admin/allergens', routerAllergens )
app.use( '/admin/dishes', routerDishes )
app.use( '/admin/restaurant', routerRestaurant )
app.use( '/admin/tickets', routerTickets )
app.use( '/api', routerApi )

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )

socketTicketsEvents(server);