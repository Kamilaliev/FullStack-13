import { Schema,model } from "mongoose";

let plantsSchema = new Schema({
    image: String,
    title: String,
    price: Number
})
export let plantsModel= model("plants",plantsSchema)