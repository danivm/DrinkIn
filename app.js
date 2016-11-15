const express = require('express')
const bodyparser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const app = express()
const PORT = 3000;
const url = "mongodb://localhost:27017/drinkin"

const getCategories = require('./handlers/categories/getCategories')
const addCategories = require('./handlers/categories/addCategories')
const delCategories = require('./handlers/categories/delCategories')

const getDishes = require('./handlers/dishes/getDishes')
const addDishes = require('./handlers/dishes/addDishes')
const delDishes = require('./handlers/dishes/delDishes')

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/categories', getCategories.bind(null, db) )
	app.post('/categories', addCategories.bind(null, db) )
	app.delete('/categories/:id', delCategories.bind(null, db) )

	app.get('/dishes', getDishes.bind(null, db) )
	app.post('/dishes', addDishes.bind(null, db) )
	app.delete('/dishes/:id', delDishes.bind(null, db) )

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )