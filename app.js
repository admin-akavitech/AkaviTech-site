var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

app.disable('x-powered-by');
app.set('view engine','pug');
app.set('port',4000);
app.set('env','production');

app.use('/public',express.static(path.join(__dirname,'public')));

app.get('/',function (req, res) {
    res.render('home');
    res.end();
});

app.use(function (req, res) {

    res.status(404);
    res.render('404');
});

//500 route handler
app.use(function (err,req, res,next) {

    res.status(500);
    res.render('500');
});

app.listen(app.get('port'),function () {
    console.log('Server now started at http://localhost:'+app.get('port'));
});