import mongoose from "mongoose";



const stdSchema = mongoose.Schema({
    stdId:{
        type:String ,
        require:true 
    } ,
    name:{
        type:String ,
        require:true
    } ,
    college:{
        type:String ,
        require:true
    },

    depart:{
        type:String ,
        require:true
    } ,
    level:{
        type:String ,
        require:true
    } ,
    fee:{

    } ,
    paid:{
        type:String ,
        require:true
    } ,

    remaining:{
        type:String ,
        require:true
    } 
} ,
{timestamps:true} 
);

const StdModel = mongoose.model("Students" , stdSchema) ;
export default StdModel ;