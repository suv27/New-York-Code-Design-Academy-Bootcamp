const express = require('express');
const app = express();
const port = 8080;

// Accept apple or ale, returning "Apple or Ale?".
app.get(['/apple', '/Ale'], (req, res) => {
  res.send('Apple or Ale.... ?');
});

// Accept the word whoa with an aribitrary number of os and as, returning "I know, right?!".
app.get('/whoa/:number', (req, res) => {
  console.log(req.params.number);
  if(req.params.number > 0){
    res.send('<h1>I know, right?!</h1>');
  }else{
    res.send('<h1>Invalid arbitrary number</h1>');
  }
});

// Take a first name and last name as parameters, returning a greeting for that user.
app.get('/name/:fName/:lName', (req, res) => {
  res.send('<h1>Welcome ' + req.params.fName + ' ' + req.params.lName);
});

// Take a word as a parameter and returning the word reversed.
app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  let str = "";
  for(let i = id.length-1 ; i>=0 ;i--){
      str += id[i];
  }
  res.send('<h1>Your ' + id + ' in reserve is ' + str + '</h1>');
});

// Add a route that will execute if nothing else is matched


app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
