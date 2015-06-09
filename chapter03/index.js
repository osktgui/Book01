var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views')
app.set('view options', {
  layout: false
});

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Meadowlark Travel');
});



app.get('/about', function(req, res){
  res.type('text/html');
  res.render('about', {
    'title': 'About Us'
  });
});

//Custom page 404
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

//Custom page 500
app.use(function(req, res){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
