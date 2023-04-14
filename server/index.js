import express from "express" ;
import cors from "cors"
import dotenv from "dotenv" ;
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import {fileURLToPath} from 'url'
import color from "colors";
import asyncHandler from "express-async-handler"
import fs from 'fs'
import errorHandler from "./middleware/erroMiddleware.js";
import Auth from "./routes/AuthRoute.js";
import Books from "./routes/BookRoute.js";
import Depart from "./routes/DepartRoute.js";
import Std from "./routes/StdRoute.js";


const app = express()
dotenv.config()
import connectDB from "./config/db.js";
connectDB()
const port = process.env.PORT  ;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true ,
    limit:'50mb'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(cookieParser())

app.use(errorHandler)


app.use('/api/auth'  , Auth)
app.use('/api/book'  , Books)
app.use('/api/depart'  , Depart)
app.use('/api/std'  , Std)


app.listen(port , ()=>{
    console.log(`Connecting With PORT Number '${port}'`.blue);
})

app.get("/test" , (req,res)=>{
    console.log('api work perfectly');
    res.status(200).json('api work perfectly')
})
