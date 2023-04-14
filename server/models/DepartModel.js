import mongoose from "mongoose";
const departSchema = mongoose.Schema({
    title:{
        type:String ,
        require:true
    } ,
    std:{
        type:[String] , 
        require:true ,
       
    }
} ,
{timestamps:true}
) ;

const DepartModel = mongoose.model("Department" , departSchema)
export default DepartModel ;