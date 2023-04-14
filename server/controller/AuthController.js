import AuthModel from "../models/AuthModel.js";
import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// ----------------------------------
export const register = asyncHandler(async(req , res)=>{
    const {username , email , password } = req.body
    if(!username || !password || !email)
        return res.status(400).json('field require')
    const user = new AuthModel({
        ...req.body , 

    })
    const isExist = await AuthModel.findOne({email:req.body.email})
    if(isExist)
        return res.status(400).json('email already existing')
    const salt = await bcrypt.genSalt(10) 
    const hashed = await bcrypt.hash(password  , salt)
    const userNew = new AuthModel({
        ...req.body , 
        password:hashed
    })
    const newUser = await userNew.save()
    res.status(200).json({newUser})
    })




// -----------------------------------
export const login = asyncHandler(async(req   , res)=>{
    // const{username , password} =  ;
    if(!req.body.username  || !req.body.password) 
         res.status(400).json("field require")
    const user = await AuthModel.findOne({username:req.body.username})
    if(!user)
         res.status(400).json("there is NO account with this username")
    const isPassword = await bcrypt.compare(req.body.password  , user.password)
    if(!isPassword)
         res.status(404).json("password not match")
    const token = jwt.sign(
        {id:user._id , username:user.username , staff:user.isStaff} , process.env.JWT_SEC
    )
    const {password  , isStaff , ...others} = user._doc

    res.cookie("access_token" , token , {httpOnly:true}).status(200).json({user:others , token})
    // res.status(200).json(user)
})


export const logout = asyncHandler(async(req   , res) =>{
    res.clearCookie("access_token").status(200).json('logout success')
    res.end
})