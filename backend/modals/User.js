const mongoose=require('mongoose');
const {Schema}=mongoose;

const sch=new Schema({
    name:String,
    class:String,
    section:String,
    branch:String
},{versionKey:false})
const myModel=mongoose.model("NEWCOL",sch)
module.exports=myModel;