import express from "express"
const route = express.Router()

import { addBook } from "../controller/BooksController.js"
import multer from "../utils/multer.js"

route.post('/addBook' , multer , addBook)

export default route