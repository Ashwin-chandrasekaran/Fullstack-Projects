const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const { signup, signin, updatebody} = require("../types")
const {User,Admin,Manager,Headcook,Supervisor}=require("../Db")
const authmiddleware = require("../middleware")

router.post("/",async(req,res)=>{
    const createpayload=req.body
    const {success}=signup.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials to create an account"
        })
        return
    }
    const Modelname=req.body.usercategory
    const Model=require("../Db")[Modelname]
    const existinguser=await Model.findOne({
        username:req.body.username
    })
    if(existinguser){
        res.status(401).json({
            msg:"user already exists"
        })
        return
    }
    const user=await Model.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password,
        usercategory:req.body.usercategory
    })
    res.status(200).json({
        msg:"user created successfully"
    })
    const token=jwt.sign({
        userId:user._id
    },JWT_SECRET)
    res.status(200).json({
        token:token
    })
})

// router.put("/",authmiddleware,async(req,res)=>{
//     const payload=req.body
//     const {success}=updatebody.safeParse(payload)
//     if(!success){
//         res.status(401).json({
//             msg:"invalid credentials for changing"
//         })
//         return
//     }
//     await User.updateOne({_id:req.userId},payload)
//     res.status(200).json({
//         msg:"updated successfully"
//     })
// })
module.exports=router