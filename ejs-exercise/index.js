const express = require('express');
const app = express();
const port = 8080
const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '#BeastMode27',
    port: 5432,
});
let newObj = {};
app.use(express.static('public'));
app.set('view engine', 'ejs');
var parser = require('body-parser');
app.use(express.json());
app.use(parser.urlencoded({extended: true}));

// *****************************************************************************************************************************/
app.get('/grocery', (req, res) => {
  res.render('Grocery', {
    groceries: ['bananas', 'milk', 'lettuce', 'Eggs', 'Juice', 'Bathing Soap'],
      hobbies: ['Gym', 'Baseball', 'coding', 'drink a lot']
  })
});

// *****************************************************************************************************************************/


app.get('/users', (req, res) => {

  pool.query('select * from userdata', (request, response) => {
      // console.log(res.rows);
      newObj = response.rows;

      res.render('users', {
        userdata: newObj
      })
  });

});

app.post('/post', (req, res) => {
  var info = req.body;
  var query = {
      text: 'INSERT INTO userdata(id, email, states) VALUES($1, $2, $3)',
      values: [info.id, info.email, info.states]
  }

  pool.query(query, (req, res) => {
    console.log(query);
  });

  res.redirect('Users#');

});

// *****************************************************************************************************************************/
app.get('/hats', (req, res) => {
    res.render('hats', {

    })
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
