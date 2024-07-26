import mongoose from "mongoose"



const connection = async ()=>{
    try{
    let database = await mongoose.connect(`${process.env.Mongodb_Url}`)
    console.log("Database Is Connected")
    }catch(err){
        console.log("Database is not connected ")
    }

}
export default connection