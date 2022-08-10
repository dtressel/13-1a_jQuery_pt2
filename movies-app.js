// Event listener to add movie to table with rating and delte button
$('#movies-submit').click((e) => {
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $('#movies-table').append('<tr>');
    $('tr').last().append(`<td>${title}</td>`);
    $('td').last().after(`<td>${rating}</td>`);
    $('<td><button class="delete">Delete</button></td>').appendTo($('tr').last());
    $('input').val('');
})

// Event listener to delete button
$('#movies-table').on('click', '.delete', (function() {
    $(this).closest('tr').remove();
}));