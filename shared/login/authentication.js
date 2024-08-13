import express from "express"
import { UserModel } from "../../modules/models/user-schema.js"
import { generateToken } from "../Token/token.js"

const loginRouter = express.Router()

// schema mein user and password se 



loginRouter.post("/",async(req,res)=>{
    try{
    const {name,password}= req.body
    let user_data = await UserModel.find({name,password})
    let token =  generateToken(user_data)
      res.cookie("token",token).json({"success":true})
    }catch(err){
          res.json({"success":false})
    }

})



export default loginRouter