


$("#searchBox").keyup( (event) => {
  if($('#searchBox').val().length >= 2){
    $.ajax({
            type: 'GET',
            dataType: 'JSON',
            data: { t: event.target.value },
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey={API_KEY}',
            success: function(response) {
              console.log(response);
              $('#title span').html(response.Title);
              $('#year span').html(response.Year);
              $('#rated span').html(response.Rated);
              $('#released span').html(response.Released);
              $('#runtime span').html(response.Runtime);
              $('img').attr('src', response.Poster);
            }
    });
  }
});
