const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const { signup, signin, updatebody} = require("../types")
const {User,Admin,Manager,Headcook,Supervisor}=require("../Db")
router.post("/",async(req,res)=>{
    const createpayload=req.body
    const {success}=signin.safeParse(createpayload)
    const Modelname=req.body.usercategory
    const Model=require("../Db")[Modelname]
    if(!success){
        res.status(401).json({
            msg:"invalid credentials for signing in"
        })
        return
    }
    const user=await Model.findOne({
        username:req.body.username,
        password:req.body.password
    })
    if(!user){
        res.status(401).json({
            msg:"invalid username or password"
        })
        return
    }
    const token=jwt.sign({
        userId:user._id
    },JWT_SECRET)
    res.status(200).json({
        token:token
    })
})
module.exports=router