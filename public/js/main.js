$('.categories td .delete').on('click', function(event) {
	event.preventDefault();
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')

	$.ajax({
		url: '/admin/categories/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})
});

$('.allergens td .delete').on('click', function(event) {
	event.preventDefault();
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')

	$.ajax({
		url: '/admin/allergens/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})
});

$('.dishes td .delete').on('click', function(event) {
	event.preventDefault();
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')
	$.ajax({
		url: '/admin/dishes/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})
});
$('.dishes td .edit').on('click', function(event) {
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')
	window.location.href = "/admin/dishes/edit/"+id
});

$('.dishes td .info').on('click', function(event) {
	let $currentElem = $(this).parent().parent();
	const id = $currentElem.attr('data-id')

	let $currentSpan = $(this).children()
	let toggle = true;
	if ($currentSpan.hasClass('glyphicon-eye-open')) {
		toggle = false
	} 
	$.ajax({
		url: '/admin/dishes/toggleinfo',
		type: 'PUT',
		data: { id, toggle }
	})
	.done(function() {
		if (toggle==true) {
			$currentSpan.removeClass('glyphicon-eye-close')
			$currentSpan.addClass('glyphicon-eye-open')
		} else {
			$currentSpan.removeClass('glyphicon-eye-open')
			$currentSpan.addClass('glyphicon-eye-close')
		}
	})
});

$('.dishes td .stock').on('click', function(event) {
	let $currentElem = $(this).parent().parent();
	const id = $currentElem.attr('data-id')

	let $currentSpan = $(this).children()
	let toggle = true;
	if ($currentSpan.hasClass('glyphicon-ok')) {
		toggle = false
	} 
	$.ajax({
		url: '/admin/dishes/togglestock',
		type: 'PUT',
		data: { id, toggle }
	})
	.done(function() {
		if (toggle==true) {
			$currentSpan.removeClass('glyphicon-remove')
			$currentSpan.addClass('glyphicon-ok')
		} else {
			$currentSpan.removeClass('glyphicon-ok')
			$currentSpan.addClass('glyphicon-remove')
		}
	})
});



$('#update-dish .cancel').on('click', function(){
	window.location.href = "/admin/dishes"
})
$('#update-dish').on('submit', function(event) {

	let { id, name, price, description } = this;
	id = id.value;
	name = name.value;
	price = price.value;
	description = description.value;
	allergens = [].filter.call( this.allergens, ( elem ) => elem.checked  ).map( elem => elem.value )
	sAllergens = allergens.toString()
	event.preventDefault();

	$.ajax({
		url: '/admin/dishes/edit',
		type: 'PUT',
		data: { name, price, description, id, sAllergens }
	})
	.done(function() {
		window.location.href = "/admin/dishes"
	})

});