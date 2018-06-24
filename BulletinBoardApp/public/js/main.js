$(document).ready(function() {

  $(`#submitId`).on('click', () => {
    console.log('You submitted your post');
  });

  $(".far").on('click', (event) => {
    let id = $(event.target).parent().attr(`data-Post`);
    let url = `/delete/` + id;
    if (confirm(`Are you sure you want to delete ?`)) {
      $.ajax({
        url: url,
        type: 'DELETE',
        succcess: function() {
          console.log('Deleting post...');
          // redirecting
          windows.location.href = '/';
        }
      })

    }
  })
});
