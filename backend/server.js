import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import Todos from './models/todomodel.js'
import todoRoute from "./routes/todoRoute.js";
import cors from 'cors'
const app = express()
dotenv.config()
let port = process.env.PORT;
connectDb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//http://localhost:3000/

app.listen(3000,()=>console.log('server started'))
app.use('/api/todos',todoRoute)


