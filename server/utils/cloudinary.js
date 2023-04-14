import cloudinaryModule  from 'cloudinary' ;
const cloudinary = cloudinaryModule.v2 ;
import dotenv from 'dotenv'
dotenv.config()


cloudinary.config({
    cloud_name:process.env.cloud_name ,
    api_secret:process.env.api_secret,
    api_key:process.env.api_key
})

const uploadPdf = async(file , folder)=>{
    const options={
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder:folder,
      width:400 ,
      height:400 ,
      crop: "fill",
      pages:true ,
      public_ids:true
    } ;

    try {
       const result = await cloudinary.uploader.upload(file  ,  options)
       const pdf = await cloudinary.api.resource(file , {pages:true , public_ids:true})
       console.log(pdf);
       return result.secure_url 
    } catch (error) {
        console.log("errrrrrrr" , error);
    }
}

export default uploadPdf