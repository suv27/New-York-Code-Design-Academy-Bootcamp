$(document).ready(() => {

var states = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json";


$.ajax({
  url: states,
  dataType: "json",
  type: "GET",
  success: (data) => {
    for(var i = 0; i < data.length; i++){
      $("#table").append("<tr><td>" + data[i].name + "</td> " + "<td>" + data[i].abbreviation  + "</td></tr>");
    }
  }
});

});
