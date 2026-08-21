import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../controllers/userControllers.js";
export const verifyToken = async(req,res,next)=> {

   try{
     const header = req.headers.authorization
      const token = header.split(" ")[1];

     const isMatch = jwt.verify(token,JWT_SECRET)

     if(!isMatch) {
        return res.status(403).send("Token Invalid or expired")
     }

     next()
   }
   catch(err) {
        return res.status(403).send("Token Invalid or expired")

   }

}