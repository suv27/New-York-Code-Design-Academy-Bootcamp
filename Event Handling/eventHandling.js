var cat = document.getElementsByTagName('img')[0];
var dog = document.getElementsByTagName('img')[1];
var tiger = document.getElementsByTagName('img')[2];
var human = document.getElementsByTagName('img')[3];
var temporary;

// EVENT LISTENERS
cat.addEventListener("click", function(){
  dog.classList.add("selected");
  tem
});

dog.addEventListener("click", function(){
  cat.classList.add("selected");
});

human.addEventListener("click", function(){
  tiger.classList.add("selected");
});

tiger.addEventListener("click", function(){
  cat.classList.add("selected");
});
