const express = require ('express');
const app = express();
const passport = require ('passport');
const path = require('path');
const dbConnection = require('./database');


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


//Routes
app.use('/api/users', require('./routes/user.route'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});