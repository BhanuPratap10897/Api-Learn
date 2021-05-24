const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = 5000
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on('error',()=>{
    console.log("err connecting",err)
})

// const customMiddleware =(req,res,next)=>{
//     console.log("middleware executed !")
//     next()
// }
// // all page middleware
// // app.use(customMiddleware)

// app.get ('/',(req,res)=>{
//     console.log("home")
//     res.send("Hello Express")
// })

// //for single page middleware
// app.get ('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("About Hello Express")
// })

app.listen(PORT,()=>{
    console.log("server is running on", PORT)
})