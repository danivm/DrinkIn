const express = require('express')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const app = express()
const PORT = 3000;
const url = "mongodb://localhost:27017/drinkin"

const getRouterCategories = require('./routes/categories');
const getRouterDishes = require('./routes/dishes');

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.use( '/categories', getRouterCategories(db) )
	app.use( '/dishes', getRouterDishes(db) )

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )