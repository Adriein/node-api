const express = require('express');
const router = express.Router();

const User = require('../models/Registered_user');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post('/', async (req,res) =>{

    const {email, password, first_name, last_name, rol, sex, user_status} = req.body;
    try{
        const user = await User.create({
            email,
            password,
            first_name,
            last_name,
            rol,
            sex,
            user_status
        });
        if(user){
            res.json({
                "message": "Succesfully created",
                "data":user
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