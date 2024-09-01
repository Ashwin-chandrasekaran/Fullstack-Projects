const express=require("express")
const router=express.Router()
const {Partyhall}=require("../Db")
const {partyhall,modifypartyhalls}=require("../types")
const authmiddleware=require("../middleware")
router.post("/Add",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=partyhall.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid inputs for partyhall details"
        })
    }
    const existingpartyhall=await Partyhall.findOne({hallname:payload.hallname})
    if(existingpartyhall){
        return res.status(401).json({
            msg:"hall already exists"
        })
    }
    const partyhallcreate=await Partyhall.create(payload)
    if(partyhallcreate){
        res.status(200).json({
            msg:"hall added successfully"
        })
    }
})
router.delete("/delete",authmiddleware,async(req,res)=>{
    const payload=req.body
    const existingpartyhall=await Partyhall.findOne(payload)
    if(!existingpartyhall){
        return res.status(401).json({
            msg:"partyhall does not exists"
        })
    }
    const deletehall=await Partyhall.deleteOne(existingpartyhall)
    res.status(200).json({
        msg:"hall deleted successfully"
    })
})
router.put("/modify",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=modifypartyhalls.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid data for modifying partyhall data"
        })
    }
    const existingpartyhall=await Partyhall.findOne({hallname:payload.hallname})
    if(!existingpartyhall){
        return res.status(401).json({
            msg:"no partyhall exists to get modified"
        })
    }
    const modifypartyhall=await Partyhall.findOneAndUpdate(
            {hallname:existingpartyhall.hallname},
            { $set: payload },
            {new:true,runValidators:true}
    )
    res.status(200).json({
        msg:"hall details modified"
    })
})
module.exports=router

