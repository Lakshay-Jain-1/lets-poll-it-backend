// in this we will create a schema   for question 
import mongoose, {SchemaType} from "mongoose";

const questionSchema= mongoose.Schema(
    {
        question:{ type: String  ,maxLength:10, minLength:1}
    }
)

export const ProductModel =  mongoose.model('question',questionSchema)