const Restaurant = require('../../../models/Restaurant')
const title = 'Restaurant'


function putRestaurant(req,res) {
	const { name, numTables, image_url } = req.body
	const user = req.user;
	Restaurant.update(
		{ account: user._id },
		{ name, numTables, image_url },
		{ upsert: true } )
		.then( res.sendStatus(200) )
		.catch( console.log )

}

module.exports = putRestaurant;