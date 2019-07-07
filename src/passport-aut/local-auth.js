const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const dbConnection = require('../database.js');
const User = require ('../models/User');



passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const newUser = new User();
    newUser.email = email;
    newUser.password = password;
    
    if(!newUser.userExist(email)){
        return done(null,false, req.flash('errorCreatingUser', 'the user not exists'));
    }
    if(!newUser.comparePassword(password)){
        
    }

    

}));