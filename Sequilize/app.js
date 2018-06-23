let Sequelize = require('sequelize');
const express = require('express');
const app = express();
const port = 3000;
const sequelize = new Sequelize({
  database: 'postgres',
  username: 'postgres',
  password: '#BeastMode27',
  dialect: 'postgres'
});

// CREATING THE TABLE
const caps = sequelize.define('caps', {
  //create name and material as strings,
  name: Sequelize.STRING,
  material: Sequelize.STRING,
  height: Sequelize.INTEGER,
  brim: Sequelize.BOOLEAN
})

// INSERTING INTO THE TABLE
caps.sync().then(function() {
  caps.create({
    name: 'cowboy',
    material: 'straw',
    height: 4,
    brim: true
  });
})

// caps.findAll({
//   where: {
//     name: {
//       iLike: 'cow%'
//     }
//   }}).then( function(rows) {
//     // work with returned data
//   }

app.get('/posts/search', function (req, res) {
  var query  = req.query.term;
  res.send(query);
});

//
// caps.findAll({
//   where: {
//     brim: true
//   }
// }).then( function(rows) {
//   for(var i = 0; i < rows.length; i++) {
//     var columnData = rows[i].dataValues;
//     var name = columnData.name;
//     var brim = columnData.brim;
//   }
// });

app.listen(port, (req, res) => {
  console.log(`Listening to ${port}`);
});
