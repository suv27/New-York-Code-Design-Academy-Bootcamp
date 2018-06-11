var states = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json";

$("#ctry").on("change", function() {
  if ($(this).val() === 'CH') {
    console.log("ch");
    console.log("chossing ");
    $("div:nth-of-type(3)").removeClass("display");
  } else if ($(this).val() === 'USA') {
    $("div:nth-of-type(3)").toggleClass("display");
    console.log("usa");
    console.log("chose USA ");
  } else if ($(this).val() === 'D.R.') {
    $("div:nth-of-type(3)").addClass("display");
    console.log("dr");
    console.log("chose DOM. REP ");
  }
});

// GETTING STATES FROM JSON FILE
// $.getJSON(
//   states,
//   (data) => {
//     for(var i = 0; i < data.length; i++){
//       console.log(data[i]);
//     }
//
//   }
// )

// GETTING STATES FROM AJAX FILE
$.ajax({
  url: states,
  dataType: "json",
  type: "GET",
  success: (data) => {
    for (var i = 0; i < data.length; i++) {
      $("div:nth-of-type(3) .stts").append("<option>" + data[i].name + ", " + data[i].abbreviation + "</option>");
    }
  }
});




// // EVENT LISTENER FOR THE SUBMIT BUTTON
$("#submitBtn").on("click", (event) => {
  let fName = $("#InputFirstName").val();
  let sName = $("#InputLastName").val();
  let country = $("#ctry").val();
  let   state = $(".stts").val();

  if(state === 'chState'){
    state = 'No state found';
  }

  alert("Your First Name is " + fName + "\n" +
        "Your Second Name is " + sName + "\n" +
        "Your from " + country + "\n" +
        "Your live in " + state);

  event.preventDefault();

});
