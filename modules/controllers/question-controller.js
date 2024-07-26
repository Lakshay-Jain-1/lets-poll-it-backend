// route ke callback function ismein jaate hain 
// yahan par model ka use hoga

import { ProductModel } from "../models/question-schema.js"

const  showAllQuestions = async(req,res)=>{
   const data = await ProductModel.find({})
   res.send(data)
}



export {showAllQuestions}