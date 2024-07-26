import mongoose from "mongoose"



const connection = async ()=>{
    try{
    let database = await mongoose.connect("mongodb://localhost:27017/POLLING_BACKEND")
    console.log("Database Is Connected")
    }catch(err){
        console.log("Database is not connected ")
    }

}
export default connection