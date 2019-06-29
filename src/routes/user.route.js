const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/', (req, res) => {

    mysqlConnection.query('SELECT * FROM client', (err, row) =>{
        if(!err){
            res.json(row);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req,res) =>{

    const userToInsert = req.body;
   
    mysqlConnection.query('INSERT INTO client SET ?', [userToInsert], (err) =>{
        if(!err){
            res.send('inserted');
        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req,res) =>{

    const { id } = req.params;
    const { first_name, last_name, rol } = req.body;

    mysqlConnection.query('UPDATE registered_user SET first_name=?, last_name=?, rol=? WHERE id=?',[first_name, last_name, rol, id], (err) =>{
        if(!err){
            req.send('correct update');
            
        }else{
            console.log(err);
            
        }
    });

});

router.delete('/:id', (req,res) =>{

    const { id } = req.params;

    mysqlConnection.query('DELETE FROM registered_user WHERE id=?', [id], (err) =>{
        if(!err){
            res.send('user deleted succesfully');
        }else{
            console.log(err);
            
        }
    });
});

module.exports = router;