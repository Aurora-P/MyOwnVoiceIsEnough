$(function() {

  $('#submit').on('click', function() {

    const params = {
      title: $('#title').val(),
      publishedYear: $('#year').val(),
      genre: $('#genre').val(),
      score: $('#score').val(),
      review: $('#review').val()
    };

    $.ajax({
      url: 'https://us-central1-myownvoiceisenough.cloudfunctions.net/postMovie',
      type: 'POST',
      data: params
    })
    .done(function(data, status, XHR) {
        // ...
      console.log('succeedddddeed');
    })
    .fail(function(XHR, status, e) {
        // ...
      console.log('ova');
    })
    .always(function(XHR, status) {
        // ...
    });

  });

});
