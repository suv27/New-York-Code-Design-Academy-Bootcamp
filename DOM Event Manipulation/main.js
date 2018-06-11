// DECLARING ALL MY VARIABLES BY GETTING ALL THEIR 'ID'S' FROM HTML FILE
var p1Btn = document.getElementById("p1Btn");
var p2Btn = document.getElementById("p2Btn");
var changingText = document.getElementById("text");
var dont = document.getElementById("doNot");
var listens = document.getElementById("listens");
var registerDislpay = document.getElementById("register");
var username = document.getElementById("InputUserName");
var email = document.getElementById("InputEmail");
var password = document.getElementById("InputPassword");
var submitBtn = document.getElementById("submitBtn");

// EVENT LISTENER FOR THE FIRST BUTTON
p1Btn.addEventListener("click", function(){
  changingText.textContent = "I'm Right";
});

// EVENT LISTENER FOR THE SECOND BUTTON
p2Btn.addEventListener("click", function(){
  changingText.textContent = "No I'm Right";
});

// EVENT LISTENER FOR THE 'H1' TO CHECK WHEN THE MOUSE HOVERS IT
dont.addEventListener("mouseout", function(){
  alert("Hey, I told you not to hover over me!");
});

// EVENT LISTENER FROM THE KEYBOARD
document.addEventListener('keypress', function(event){
  var keyName = event.key;
  listens.textContent = (keyName);
});

// EVENT LISTENER FOR THE FORM OF REGISTRATION
submitBtn.addEventListener("click", function() {
  checking();
});

function checking() {
  if (password.value != '12345678') {
    alert("Wrong password");
  }else if(!hasNumber(username.value)){
    alert("Username must have a number ")
  }else if(username.length > 14){
    alert("Username must be 14 character or less")
  }else {
    registerDislpay.textContent = "Congrats on knowing your username and password!";
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
