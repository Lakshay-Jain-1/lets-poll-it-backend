// in this we will create a schema   for question
import mongoose, { SchemaType } from "mongoose";

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  options: { type: Array },
  password: { type: String },
  polled:{type: Array}
});


export const ProductModel = mongoose.model("question", questionSchema);
