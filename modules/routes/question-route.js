// yahan par route handling hoti hain

import express from "express"
import { enterAQuestion, makeAQuestion, showAllQuestions, updateAPoll } from "../controllers/question-controller.js"

const router = express.Router()


router.get("/",showAllQuestions)

router.post("/generate",makeAQuestion)

router.post("/enter",enterAQuestion)

router.post("/play",updateAPoll)

export default router