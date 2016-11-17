const express = require('express')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const app = express()
const PORT = 3000;
const url = "mongodb://localhost:27017/drinkin"

const getRouterCategories = require('./routes/categories');
const getRouterDishes = require('./routes/dishes');
const getRouterAllergens = require('./routes/allergens');
const getRouterApi = require('./routes/api')

app.set('view engine', 'pug')

app.use( express.static('public') )
app.use( express.static('angularApp') )

app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	// app.get('/', (req,res)=>res.render('index'))
	app.use( '/admin/categories', getRouterCategories(db) )
	app.use( '/admin/dishes', getRouterDishes(db) )
	app.use( '/admin/allergens', getRouterAllergens(db) )
	app.use( '/api', getRouterApi(db))

//	/ => angular app 
	// /admin => admin
	// /api => json

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )