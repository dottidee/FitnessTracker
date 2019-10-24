const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req, res) => res.send('Login'));

//register page
router.get('/register', (req, res) => res.send('Register'));

//register handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    
    //check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fiels'});
    }

    //check passwords match
    if(password != password2){
        errors.push({msg: 'Passwors do not match'});
    }

    //check password length
    if(password.length < 8){
        errors.push({msg: 'Password must be at least 8 characters'});
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else{
        res.send('pass');
    }
});

module.exports= router;