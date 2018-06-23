


/*
 7. Declare a function that takes no arguments but prints
 something to the console. Try running it after it has been declared.
*/

function printSomething(){
  console.log("PRINTING SOMETHING TO THE CONSOLE");
}

/*
  8. Declare a function that depending upon which virtual 'door' was entered
  tells the user they've received a different 'prize' in an alert. After
  declaring the function, try running it with different options. There must be at least 3 doors.
*/

function door(doorNumber) {
  if (doorNumber === 1) {
    alert("FIRST DOOR SELECGED");
  } else if (doorNumber === 2) {
    alert("SECOND DOOR SELECTED");
  } else {
    alert("THIRD DOOR SELECTED");
  }
}
