// yahan par route handling hoti hain

import express from "express"
import { enterAQuestion, getAQuestion, makeAQuestion, showAllQuestions, updateAPoll } from "../controllers/question-controller.js"
import authorization from "../../shared/login/authorization.js"

const router = express.Router()


router.get("/",showAllQuestions) 
router.post("/get",getAQuestion) 
 
router.post("/generate",authorization,makeAQuestion)

router.post("/enter",authorization,enterAQuestion)

router.post("/play",authorization,updateAPoll)

export default router

