const express = require ('express');
const passport = require ('passport');
const session = require('express-session');
const path = require('path');
const dbConnection = require('./database');

//Initialitzations
const app = express();
require('./passport-aut/local-auth');
dbConnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Settings of the server
app.set('port', process.env.PORT || 3000);

//Midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: "ivanmfit",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/login', require('./routes/login.route'));
app.use('/api/users', require('./routes/user.route'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});