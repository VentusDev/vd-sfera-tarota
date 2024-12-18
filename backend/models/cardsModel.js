import mongoose from "mongoose";

const cardsSchema = new mongoose.Schema({
    name: {type:String,required:true},
    meaningUp: {type:String,required:true},
    meaningRev: {type:String,required:true},
    desc: {type:String,required:true},
    image: {type:String,required:true},
})

const cardsModel = mongoose.models?.cards || mongoose.model('cards',cardsSchema)

export default cardsModel; 