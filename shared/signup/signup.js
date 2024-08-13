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
    res.cookie("token",token ,{secure:true,sameSite:"none"} ).cookie("success",true,{secure:true,sameSite:"none"}).json({ success: true });
  } catch (err) {
    res.cookie("success",false,{secure:true,sameSite:"none"}).json({ success: false });
  }
});

export default signupRouter;
