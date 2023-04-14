import multer from "multer";


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const fileStrg = multer.diskStorage({
    destination:'server/Images' ,
    filename:(req , file , cb)=>{
        // cb(null , `${Date.now()}-${file.originalname}`)
        cb(null , `${Date.now()}-${makeid(5)}`)
    }
})


const fileFilter = (req , file , cb)=>{
    
        cb(null , true)
   
}


export default multer({storage:fileStrg , fileFilter:fileFilter}).any('file')
