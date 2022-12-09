const express = require('express');
const bcryptjs = require('bcryptjs')
const router = express.Router();

require('./conn');
const User= require('./model/userSchema');

router.get('/',(req, res) =>{
    res.send(`hello from route.js`)
});

router.get('/',(req, res) =>{
    res.send(`hello from route.js`)
});
// signup route///
router.post('/signup', async (req,res) =>{

    const { name,email,password,cpassword } = req.body;

    if(!name || !email || !password || !cpassword ){
        return res.status(422).json({error: "All Fields Mandatory"});
    }

    try{
        const alreadyExits = await User.findOne({email})

            if(alreadyExits){
                return res.status(420).json({error: "Already Exits"});
            }
            else if(password != cpassword){
                return res.status(420).json({error: "Password doesn't match"});
            }
            else{

                const user= new User({name, email, password, cpassword});

                const userRegister = await user.save();

                res.status(201).json({message: `registred`});
            }
    } catch(err){
        console.log(err);
    }
});


//login  Route///

router.post('/login', async (req,res) =>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:`Not to be left empty`})
        }

        const userLogin = await User.findOne({email});
        if(userLogin){
            const passwordMatch = await bcryptjs.compare(String(password), userLogin.password);
            if(!passwordMatch){
                res.status(400).json({error:`Invalid Credientials`});
            }
            else{
                res.json({message:`Successful login`});
            }   
        }
        else{
            res.status(400).json({error:`Invalid Credientials`});
        }           
    }catch(err){
        console.log(err);
    }
});
/////GPSsumary page route///////

// router.get('/gpssummary', (req,res) =>{
//     console.log("hello my gpssumary");
//     res.send(`hello world server`);
// });



module.exports = router;