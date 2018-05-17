const express = require('express')
const app = express()
const hbs = require('hbs');
 
app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    name: 'Hernan',
    year: new Date().getFullYear()
  })
})
 
app.listen(3000)