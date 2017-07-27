/*
    - find place for client-id
    - image post -> response -> post to server with the response
*/

console.log('Loaded');

$('#form').submit((ev) => {
    ev.preventDefault();

    const input = document.getElementById('file-input');
    const file = input.files[0];

    const request = new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://api.imgur.com/3/image',
            type: 'POST',
            headers: {
                'Authorization': 'Client-ID 9dd341bb27efbfd'
            },
            data: file,
            success: resolve,
            error: reject,
            processData: false,
        });
    });

    request.then((resp) => {
        console.log(resp.data.link);

        const $img = $('<img>');
        $img.attr('src', resp.data.link);
        $('body').append($img);
    });
});