import express from "express"
import { addStd, delStd, getStd, updateStd , getAll } from "../controller/StdController.js"
import { verifyStaff, verifyUser } from "../middleware/verifyToken.js"
const  route = express.Router()


route.post("/"   , verifyStaff , addStd)
route.get("/" , verifyStaff  , getAll)
route.get('/:id' , verifyStaff , getStd)
route.put("/:id"  , verifyStaff , updateStd)
route.delete('/:id/'  , verifyStaff   ,delStd)

export default route