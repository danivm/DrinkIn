const Restaurant = require('../../../models/Restaurant')
const title = 'Restaurant'

function getRestaurant(req,res) {
	const user = req.user;
	Restaurant.findOne({ account: user._id })
		.then( restaurant => {
			if (restaurant) {
				const predefined_css = `#preview-image { background-image: url( ${restaurant.image_url} ) }`
				res.render('restaurant', { user, restaurant, title, predefined_css })	
			} else {
				const newRestaurant = new Restaurant()
				newRestaurant.save()
					.then(res.render('restaurant', { user, restaurant, title }))
			}
		})
		.catch( console.log )

}

module.exports = getRestaurant;