const Category = require('../../../models/Category')
const title = 'Dishes'

function getDishes(req,res) {
	debugger;
	
	Category.find()
		.populate('dishes')
		.then( categories => {
			const user = req.user;
			console.log('user: '+user)
			res.render('dishes', { user, categories, title })	
		})
		.catch( console.log )

}

module.exports = getDishes;