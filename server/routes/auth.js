const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require("../middleware/requireLogin")

// router.get('/',(req,res)=>{
//     res.send("hello")
// })

router.get('/protected',requireLogin,(req,res)=>{
        res.send("hello user")
    })

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

router.post('/signin',(req,res)=>{
    const { email,password } = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"Successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router