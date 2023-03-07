const mongoose=require('mongoose')
const express=require('express')
const User=require('../modals/User')
const router=express.Router();
var jwt=require('jsonwebtoken')
router.get('/',(req,res)=>{
    obj={
        a:'thios',
        number:56
    }
    res.json(obj)
})
router.get('/fetchdetails',async(req,res)=>{
    try{
        const userinfo=await User.find()
        console.log("in auth.js")
        console.log(userinfo)
        // res.json(userinfo)
        res.send({dat:userinfo});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
router.post('/myinfo',async(req,res)=>{
try{
    const user=await User.find({class:"402"})
    res.send(user)
}
catch(error){
    console.error(error.message)
    res.status(500).send("internal Server error");
}
})
module.exports=router