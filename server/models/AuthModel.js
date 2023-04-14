import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username:{
        type:String , 
        required:true
    } ,
    email:{
        type:String , 
        required:true
    } ,
    password:{
        type:String  ,
        required:true
    } ,
    isStaff:{
        type:Boolean , 
        default:false , 
    } 
},
{timestamps:true}
)

const AuthModel = mongoose.model("Users" , authSchema) ;
export default AuthModel