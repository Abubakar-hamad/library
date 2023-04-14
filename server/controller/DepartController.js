import CollegeModel from "../models/DepartModel.js";
import asyncHandler from "express-async-handler";

// create college =:

export const addDepart = asyncHandler(async(req  , res)=>{
    const {title } = req.body ;
    if(!title)
        res.status(400).json("field required")
    const isExist = await CollegeModel.findOne({title:req.body.title})
    if(isExist)
        return res.status(400).json("college added befor")
    const college = new CollegeModel({
        ...req.body
    })
    const newCol = await college.save() ;
    res.status(201).json(newCol)
})