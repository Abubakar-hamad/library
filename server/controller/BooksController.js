import asyncHandler from "express-async-handler"
import uploadPdf from "../utils/cloudinary.js";
import fs from 'fs'
import BookModel from "../models/BookModel.js";
import path from "path";

export const addBook = asyncHandler(async(req , res)=>{
    const {title , level , depart , college} = req.body
    const {pdf} = req.files[0]
    if(!title || !level|| !depart || !college ){
        res.status(400)
        throw new Error ("field required")
    }
    // const books =  new BookModel({
    //     ...req.body,
    // })
    const result  = await uploadPdf(req.files[0].path , 'server/Images')
    const book = new BookModel({
        ...req.body ,
        pdf : result
    })
    console.log(book);
    fs.unlinkSync(req.files[0].path)
    await book.save()
    res.status(201).json(book)

})  

// {
// 	"title":"123" ,
// 	"level":"asd" ,
// 	"college":"asdasd",
// 	"depart":"123"
// }