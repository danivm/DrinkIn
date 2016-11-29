const Category = require('../../../models/Category')

function getMenu(req, res) {

	Category.find({ account: req.params.id })
		.populate('dishes')
		.then(data => res.json(data))
		.catch( err => console.log(err) )
}

module.exports = getMenu;