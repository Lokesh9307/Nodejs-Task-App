import mongoose from "mongoose";


const Schema =new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
}) 

export const Task = mongoose.model("Task",Schema)

