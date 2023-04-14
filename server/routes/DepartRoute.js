import express from "express" 
const route = express.Router()

import { addDepart} from "../controller/DepartController.js"
import { verifyStaff } from "../middleware/verifyToken.js";


route.post("/" , verifyStaff , addDepart)




export default route ;