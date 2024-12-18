import mongoose from "mongoose";

const propSchema = new mongoose.Schema({
    name: {type:String,required:true, unique: true},
    description: {type:String,required:true},
    userId: {type:String,required:true},
    price: {type:Number}
})

const propModel = mongoose.models?.prop || mongoose.model('prop',propSchema)

export default propModel; 