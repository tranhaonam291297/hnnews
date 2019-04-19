var express = require('express');
var hbs = require('express-handlebars');
var app = express();
var path = require('path');

var login = require('./routers/login');
var admin = require('./routers/admin');
var register = require('./routers/register');
var forgetpassword = require('./routers/forget-password');
var resultsearch = require('./routers/result-search');


app.set('view engine', 'hbs');
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
app.use(admin)
app.use(register)
app.use(forgetpassword)
app.use(resultsearch);

app.listen(3000);