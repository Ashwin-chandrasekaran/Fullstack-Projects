const express=require("express")
const router=express.Router()
const { fitness, modifyprograms } = require("../types")
const {Fitness}=require("../Db")
const {handleAddItem,handleDeleteItem,handleModifyItem}=require("./mainhandlercontroller")

router.post("/Add",async(req,res)=>{
    handleAddItem(req,res,Fitness,fitness,"programname")
})
router.delete("/Delete",async(req,res)=>{
    handleDeleteItem(req,res,Fitness,"programname")
})
router.put("/Modify",async(req,res)=>{
    handleModifyItem(req,res,Fitness,modifyprograms,"programname")
})
module.exports=router