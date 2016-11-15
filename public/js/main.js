$('#categories li .delete').on('click', function(event) {

	event.preventDefault();
	let $currentElem = $(this).parent();
	const id = $currentElem.attr('data-index')

	$.ajax({
		url: '/task/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})

});

