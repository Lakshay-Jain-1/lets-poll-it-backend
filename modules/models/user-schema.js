import mongoose from "mongoose";



let userSchema = mongoose.Schema(
    {
        name:{type:String},
        password:{type:String}
    }
)



export const  UserModel = mongoose.model("User",userSchema)