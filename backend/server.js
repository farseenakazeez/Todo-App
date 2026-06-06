import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import Todos from './models/todomodel.js'
import todoRoute from "./routes/todoRoute.js";
import userRoute from "./routes/userRoutes.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
const app = express()
dotenv.config()
let port = process.env.PORT;
connectDb();



const allowedOrigins = [
  "http://localhost:5173",
  "https://todo-app-mern-mitj.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS"));
    }
  },
  credentials: true
}));

app.options('*', cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//http://localhost:3000/


app.use('/api/todo',todoRoute);
app.use("/api/user", userRoute);

app.use(notFound);
app.use(errorHandler);




app.listen(process.env.PORT || 3000, () =>
  console.log("server started")
);


