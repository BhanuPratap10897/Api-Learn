const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')

// router.get('/',(req,res)=>{
//     res.send("hello")
// })

router.post('/signup',(req,res)=>{
    // console.log(req.body)
    const {email, password, name} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all the field"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpasswprd =>{

            const user = new User({
                email,
                password:hashedpasswprd,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router