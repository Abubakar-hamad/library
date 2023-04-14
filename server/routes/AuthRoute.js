import express from "express" ;
const route = express.Router()

import { register , login, logout } from "../controller/AuthController.js";

route.post('/register' , register) ;
route.post('/login' , login) ;
route.get('/logout' , logout) ;


export default route