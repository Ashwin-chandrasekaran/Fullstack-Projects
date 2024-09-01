const express=require("express")
const authmiddleware = require("../middleware")
const { Food, Salon, Fitness, Partyhall, Movieticket } = require("../Db")
const router=express.Router()
router.get("/Food",authmiddleware,async(req,res)=>{
    const response=await Food.find({})
    res.status(200).json({
        msg:"food items retrieved successfully",
        data:response
    })
})
router.get("/Salon",authmiddleware,async(req,res)=>{
    const response=await Salon.find({})
    res.status(200).json({
        msg:"salon items retrieved successfully",
        data:response
    })
})
router.get("/Fitness",async(req,res)=>{
    const response=await Fitness.find({})
    res.status(200).json({
        msg:"fitness items retrieved successfully",
        data:response
    })
})
router.get("/Partyhall",async(req,res)=>{
    const response=await Partyhall.find({})
    res.status(200).json({
        msg:"Partyhall details retrieved successfully",
        data:response
    })
})
router.get("/Movieticket",async(req,res)=>{
    const response=await Movieticket.find({})
    res.status(200).json({
        msg:"Movieticket details retrieved successfully",
        data:response
    })
})
module.exports=router