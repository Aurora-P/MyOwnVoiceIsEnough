$(function() {

  $('#submit').on('click', function() {
    $(this).prop('disabled', true);

    const params = {
      title: $('#title').val(),
      publishedYear: parseInt($('#year').val()),
      genre: $('#genre').val(),
      score: parseInt($('#score').val()),
      review: $('#review').val()
    };

    if (!validate(params)) {
      $(this).prop('disabled', false);
      return false;
    }
    $.ajax({
      url: 'https://us-central1-myownvoiceisenough.cloudfunctions.net/postMovie',
      type: 'POST',
      data: params
    })
    .done(function(data, status, XHR) {
      alert('succeeded!!');
      $('#submit').prop('disabled', false);
    })
    .fail(function(XHR, status, e) {
      alert('failed...');
      $('#submit').prop('disabled', false);
    });

  });

  $('#cancel').on('click', function() {
    $('#submit').prop('disabled', false);
  });

  function validate(params) {
    let msg = "";
    if (params.title === "") {
      msg += "Title,";
    }
    if (isNaN(params.score) || score < 0 || score > 100) {
      msg += "Score, ";
    }
    if (params.review === "") {
      msg += "Review";
    }
    if (msg !== "") {
      alert('入力不足 ' + msg);
      return false;
    }
    return true;
  };
});
