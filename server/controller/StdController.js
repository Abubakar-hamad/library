import asyncHandler from "express-async-handler";
import StdModel from "../models/StdModel.js";
import ProcModel from "../models/Processes.js";
import DepartModel from "../models/DepartModel.js";

export const addStd = asyncHandler(async(req , res)=>{
    const {stdId , name  , college , depart , level , fee , paid , remaining } = req.body
    if(!stdId || !name)
        res.status(400).json("field required")
    
    const isStdID = await StdModel.findOne({stdId:req.body.stdId})
    if(isStdID)
        return res.status(400).json("student ID is booked up")
    const std  = new StdModel({
        ...req.body
    }) 
    const userProc = new ProcModel({
        username:req.user.username ,
        procType:"addStd" ,
        befor:"none", 
        after:std
    })
    // {name , stdId ,  }
    const addstdToDepart =  await DepartModel.findOne({title:req.body.depart})
    const arr = [req.body.name , req.body.stdId]
    const departUpdate = await DepartModel.findByIdAndUpdate(addstdToDepart._id  , {$push:{std:arr}} , {new:true})
    // console.log(addstdToDepart._id);
    await userProc.save()
    const newstd = await std.save()
    res.status(201).json({newstd , departUpdate})
})

export const updateStd = asyncHandler(async(req , res)=>{
    const id = req.params.id ; 
    const stdbefor = await StdModel.findById(id)
    const stud = await StdModel.findByIdAndUpdate(id , {$set:req.body} , {new:true})
    if(!stud)
        res.status(404).json("student not found")

    const userProc = new ProcModel({
        username:req.user.username ,
        procType:"putStd" ,
        befor:stdbefor ,
        after:stud
    })
    await userProc.save()
    res.status(201).json(stud)
})

export const delStd = asyncHandler(async(req  , res)=>{
    const id = req.params.id
    const stdbefor = await StdModel.findById(id)
    if(!stdbefor)
        res.status(404).json("studen not found")
    const  stud  = await StdModel.findByIdAndRemove(id)
    const userProc = new ProcModel({
        username:req.user.username ,
        procType:"delStd" ,
        befor:stdbefor ,
        after:"none"
    })
    await userProc.save()
    res.status(200).json({"delte success":stud})
})

export const getStd = asyncHandler(async(req  , res)=>{
    const id =req.params.id
    const stud = await StdModel.findById(id)
    if(!stud)
        res.status(404).json("student not found")
    res.status(200).json(stud)
})

export const getAll = asyncHandler(async(req  , res)=>{
    const stud = await StdModel.find()
    if(stud.length === 0 || !stud)
        res.status(200).json("dataBase empty")
    res.status(201).json(stud)
})