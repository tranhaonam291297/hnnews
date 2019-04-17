var express = require('express');
var hbs = require('express-handlebars');
var app = express();
var path = require('path');

var login = require('./routers/login');

app.set('view engine', 'hbs');
app.listen(3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));


app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
}));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.use(login)