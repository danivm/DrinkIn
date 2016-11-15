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

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.get('/categories', getCategories.bind(null, db) )
	app.post('/categories', addCategories.bind(null, db) )

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )