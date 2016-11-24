const Category = require('../../../models/Category')

function delCategories(req,res) {

	Category.findByIdAndRemove(req.params.id)
		.then( category => res.sendStatus(200) )
		.catch( console.log )
}

module.exports = delCategories;