import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type:String,required:true, unique: true},
    image: {type:String,required:true},
    userId: {type:String,required:true},
    category: {type:String}
})

const categoryModel = mongoose.models?.category || mongoose.model('category',categorySchema)

export default categoryModel; 