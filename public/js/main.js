$('#categories li .delete').on('click', function(event) {

	event.preventDefault();
	let $currentElem = $(this).parent();
	const id = $currentElem.attr('data-index')

	$.ajax({
		url: '/categories/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})

});

$('.dishes td .delete').on('click', function(event) {

	event.preventDefault();
	let $currentElem = $(this).parent().parent();
	const id = $currentElem.attr('data-id')

	$.ajax({
		url: '/dishes/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})

});

