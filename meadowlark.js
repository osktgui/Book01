var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('view options', {
  layout: false
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

app.get('/about', function(req, res){
  res.type('text/html');
  res.render('about', {
    'title': 'About Us',
    'fortune': 'this is a fortune'
  });
});

//Custom 404 Page
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

//Custom 500 Page
app.use(function(req, res){
  res.type('text/plain');
  res.status(500);
  res.send('500 - Error Internal');
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
  app.get('port') + '; Press Ctrl-C to terminate.');
});
