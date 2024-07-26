// yahan par route handling hoti hain

import express from "express"
import { makeAQuestion, showAllQuestions } from "../controllers/question-controller.js"

const router = express.Router()


router.get("/",showAllQuestions)

router.post("/post",makeAQuestion)


export default router