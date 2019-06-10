const express = require ('express');
const app = express();
const path = require('path');

//Settings of the server
app.set('port', process.env.PORT || 3000);

//Midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/employees', require('./routes/employee.route'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});