const express=require("express")
const authmiddleware = require("../middleware")
const { Foodcart,Saloncart,Fitnesscart,Stationerycart,Partyhallcart,Movieticketcart } = require("../Db")
const { foodcart, saloncart, partyhallcart, fitnesscart, stationerycart, movieticketcart } = require("../types")
const router=express.Router()
router.post("/foodcart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=foodcart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const foodcarts=await Foodcart.findOne({userId})
    if(foodcarts){
        foodcarts.fooditems.push({fooditemid})
    }else{
        await Foodcart.create(payload)
    }
    res.status(200).json({
        msg:"successfully added fooditems to the cart"
    })

})
router.post("/saloncart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=saloncart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const saloncarts=await Saloncart.create(payload)
    res.status(200).json({
        msg:"successfully added salonitems to the cart"
    })

})
router.post("/fitnesscart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=fitnesscart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const fitnesscarts=await Fitnesscart.create(payload)
    res.status(200).json({
        msg:"successfully added fitnessitems to the cart"
    })

})
router.post("/partyhallcart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=partyhallcart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const partyhallcarts=await Partyhallcart.create(payload)
    res.status(200).json({
        msg:"successfully added partyhallitems to the cart"
    })

})
router.post("/stationerycart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=stationerycart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const stationerycarts=await Stationerycart.create(payload)
    res.status(200).json({
        msg:"successfully added stationeryitems to the cart"
    })

})
router.post("/movieticketcart",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=movieticketcart.safeParse(payload)
    if(!success){
        res.status(401).json({
          msg:"invalid credentials to place in the cart"  
        })
    }
    const movieticketcarts=await Movieticketcart.create(payload)
    res.status(200).json({
        msg:"successfully added movieticketitems to the cart"
    })

})
module.exports=router