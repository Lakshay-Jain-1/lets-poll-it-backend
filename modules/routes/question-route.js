// yahan par route handling hoti hain

import express from "express"
import { getAQuestion } from "../controllers/question-controller.js"

const router = express.Router()


router.get("/",getAQuestion)


export default router