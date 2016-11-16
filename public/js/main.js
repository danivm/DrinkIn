$('.categories td .delete').on('click', function(event) {
	event.preventDefault();
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')

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
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')
	$.ajax({
		url: '/dishes/' + id,
		type: 'DELETE'
	})
	.done(function() {
		$currentElem.remove();
	})
});
$('.dishes td .edit').on('click', function(event) {
	let $currentElem = $(this).parent().parent().parent();
	const id = $currentElem.attr('data-id')
	window.location.href = "/dishes/edit/"+id
});
$('#update-dish .cancel').on('click', function(){
	window.location.href = "/dishes"
})
$('#update-dish').on('submit', function(event) {

	let { id, name, price, description } = this;
	id = id.value;
	name = name.value;
	price = price.value;
	description = description.value;

	event.preventDefault();

	$.ajax({
		url: '/dishes/edit',
		type: 'PUT',
		data: { name, price, description, id }
	})
	.done(function() {
		window.location.href = "/dishes"
	})

});