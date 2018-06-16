const express = require('express');
const app = express();
const port = 8000;
const { Pool, Client } = require('pg');
const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';
// export POSTGRES_USER = `postgres`;
// export POSTGRES_PASSWORD= `#BeastMode27`;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '#BeastMode27',
    port: 5432,
});

let newObj = {};

// ROUTE FOR THE POST LINK
app.get('/', (req1, res1) => {
    res1.render('index');
});

// ROUTE FOR THE MESSAGES
app.get('/messages', (req, res) => {
  pool.query('SELECT * FROM messages', (req2, res2) => {

    newObj = res2.rows;

    res.render('messages', {
      data: newObj
    });
  });
});

// GETTING INFORMATION AND INSERTING IT INTO THE DATABASE
app.post('/post', (req, res) => {

  var inserQuery = {
    text: 'INSERT INTO messages(title, body) VALUES($1, $2)',
    values: [req.body.title, req.body.body]
  }

  pool.query(inserQuery, (req, res) => {
    console.log('Data inserted to database');
  });

  res.redirect('/');

});

// DELETING THE REQUEST THAT I GOT FORM THE AJAX FROM THE DATABASE
app.delete('/delete/:id', (req, res) => {

  var deleteQuery = {
    text: 'DELETE FROM messages WHERE id = $1',
    values: [req.params.id]
  }

  pool.query(deleteQuery, (req, res) => {

  });

  res.redirect('/messages')

});

// THE PORT IS LISTENING AND IS BEING LOG INTO THE TERMINAL
app.listen(port, () => {
  console.log(`Listening to port ${port}......`);
});
