// route ke callback function ismein jaate hain 
// yahan par model ka use hoga

import { ProductModel } from "../models/question-schema.js"

const  showAllQuestions = async (req,res)=>{
   const data = await ProductModel.find({})
   console.log(data)
   res.send(data)
}

const makeAQuestion= async (req,res)=>{
    const {question ,options,password} = req.body
    const data = await ProductModel.create({question,options,password})
    res.json({message:"question has been created"})
 }

const enterAQuestion = async (req,res)=>{
   const {question,password} = req.body
   console.log(question,password)
    const data = await ProductModel.find({question,password})
    res.json(data)
 }

export {showAllQuestions, makeAQuestion ,enterAQuestion}