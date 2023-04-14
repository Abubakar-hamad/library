import mongoose from "mongoose";



const bookSchema  = mongoose.Schema({
    title:{
        type:String  , 
    } ,
    college:{
        type:String
    } ,
    depart:{
        type:String
    },
    level:{
        type:String
    } ,
    pdf:{
        type:[String]
    }
} ,
{
    timestamps:true
}
)


const BookModel = mongoose.model("Books" , bookSchema)
export default BookModel