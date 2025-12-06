import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
let port = process.env.PORT;
connectDb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//http://localhost:3000/

app.listen(3000,()=>console.log('server started'))

app.get('/',(req,res)=>{
    console.log(req)
    res.send('hello world')
})


app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send('great')
    
})

