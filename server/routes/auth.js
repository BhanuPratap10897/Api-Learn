const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
3
router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('./signup',(req,res)=>{
    // console.log(req.body)
    const {name,email,password} = req.body
    if(!email || !password || name){
        res.json({error:"please fill all field"})
    }
    User.findOne({email:email})
    .then((savesUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with that email"})
        }
        const user = new User({
            email,
            password,
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
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router