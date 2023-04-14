import mongoose from "mongoose";

const procSchema = mongoose.Schema({
    username:{
        type:String , 
        required:true
    } ,
    procType:{
        type:String ,
        required:true
    } ,
    befor:{
        type:String
    },
    after:{
        type:String
    }
    
} ,
{tiemstamps:true}
) ;

const ProcModel = mongoose.model("Processes" , procSchema)
export default ProcModel