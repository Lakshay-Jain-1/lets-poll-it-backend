import express from "express";
import { generateToken } from "../Token/token.js";
import { UserModel } from "../../modules/models/user-schema.js";

const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  try {
    let { name, password } = req.body;
    console.log(name,password)
    await UserModel.create({ name, password });
    let token = generateToken(name)
    res.cookie("token",token ).cookie("success",true).json({ success: true });
  } catch (err) {
    res.cookie("success",false).json({ success: false });
  }
});

export default signupRouter;
