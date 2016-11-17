function addAllergens(db, req, res) {
	var newAllergen = req.body;
	db.collection("allergens").insert(newAllergen)
	res.redirect('/allergens');
}

module.exports = addAllergens;