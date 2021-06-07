// const { json } = require("express")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
    const{auhtorization} = req.headers
     //auhtorization == Bearer wertyuisdxfgh(token)
    if(!auhtorization){
        return res.status(401).json({error:"you must be logged in hum"})
    }
    const token = auhtorization.replace("Bearer","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged in pl"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
        })
        next()
    })
}