const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/Registered_user');


passport.serializeUser((userArr, done) => {
    const [ user ] = userArr;
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ where: {id: id} });
    console.log("user de findone: " + user);
    done(null, user);
});

const encrypt = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
  
const comparePassword = (clientPass, userArr) =>{
    const [ user ] = userArr;
    const dbPass = user.password;
    //return bcrypt.compareSync(clientPass, dbPass); 
    if(clientPass === dbPass){
        return true;
    }
}

const validator = (email,pass) => {
    emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");   
    passRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5})");
}
  
passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {

    try{
        const userArr = await User.findAll({
            where: {
                email: email
            }
        });

        if(!userArr){
            return done(null,false, req.flash('errorSignInMessage', 'The user not exists.'));
        }
        if(!comparePassword(password,userArr)) {
            return done(null, false, req.flash('errorSignInMessage', 'Incorrect Password'));
        }

        return done(null, userArr);

    }catch(err){
        console.log(err);
    }
}));