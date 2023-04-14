import jwt from "jsonwebtoken";
export const verifyToken = (req  , res , next) =>{
    const token = req.cookies.access_token
    if(!token)
        res.status(403).json("no Token")
    jwt.verify(token , process.env.JWT_SEC , (err , user)=>{
        if(err)
            res.status(403).json(err)
        req.user = user ; 
        next() ;
    } )
}


export const verifyUser = (req , res , next)=>{
    verifyToken(req , res , ()=>{
        if(req.user.id === req.params.id)
            next();
        res.status(401).json("login first")
    })
}


export const verifyStaff = (req  , res , next)=>{
    verifyToken(req , res ,()=>{
        if(req.user.staff)
            return next()
        res.status(403).json("only for staff users")
    })
}