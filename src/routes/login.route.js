const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local-signin'),(req,res) => {
  console.log("autenticado");
  res.json("dashboard");
});

module.exports = router;