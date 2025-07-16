import express from "express";
import { generateToken } from "../Token/token.js";
import { UserModel } from "../../modules/models/user-schema.js";
import bcrypt from "bcrypt";
const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  try {
    let { name, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const newUser = await UserModel.create({ name, password: hash });
    let token = generateToken({ name: newUser.name, _id: newUser._id });
    res.cookie("token",token ,{secure:true,sameSite:"none"} ).cookie("success",true,{secure:true,sameSite:"none"}).json({ success: true });
  } catch (err) {
    res.cookie("success",false,{secure:true,sameSite:"none"}).json({ success: false });
  }
});

export default signupRouter;
