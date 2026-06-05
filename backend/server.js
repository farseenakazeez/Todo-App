import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import Todos from './models/todomodel.js'
import todoRoute from "./routes/todoRoute.js";
import userRoute from "./routes/userRoutes.js";
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
const app = express()
dotenv.config()
let port = process.env.PORT;
connectDb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:"https://todo-app-mern-mitj.onrender.com",
    credentials: true,
}))

//http://localhost:3000/


app.use('/api/todo',todoRoute);
app.use("/api/user", userRoute);

app.use(notFound);
app.use(errorHandler);




app.listen(3000,()=>console.log('server started'))


