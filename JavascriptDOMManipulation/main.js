alert("connected");

var body = document.body;
var h1 = document.getElementById("header");
var username = document.getElementById("InputUserName");
var email = document.getElementById("InputEmail");
var password = document.getElementById("InputPassword");
var btn = document.getElementById("submitBtn");

btn.addEventListener("click", function() {
  checking();
});

function checking() {
  if (password.value != '12345678') {
    alert("Wrong password");
  }else if(!hasNumber(username.value)){
    alert("Username doesnt has a number")
  }else {
    alert("Login Sucessfull");
    body.style.backgroundColor = "yellow";
    header.textContent = "Login Sucessfully";
    
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}
