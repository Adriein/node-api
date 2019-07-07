const express = require('express');
const router = express.Router();

const Clients = require('../models/Client');

router.get('/', async (req, res) => {
    const clients = await Clients.findAll();
    res.json(clients);
});

router.post('/', async (req,res) =>{

    const {email, password, first_name, last_name, rol, sex, user_status} = req.body;
    try{
        const client = Clients.create({
            email,
            password,
            first_name,
            last_name,
            rol,
            sex,
            user_status
        });
        if(client){
            res.json({
                "message": "Succesfully created",
                "data":client
            });
        }
    }catch(err){
        console.log(err);
    }

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