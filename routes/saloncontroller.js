const express=require('express')
const router=express.Router()
const { beautysalon, modifysalonItems } = require("../types")
const {Food, Salon}=require("../Db")
const {handleAddItem,handleDeleteItem,handleModifyItem}=require("./mainhandlercontroller")


router.post("/Add",async(req,res)=>{
    handleAddItem(req,res,Salon,beautysalon,"servicename")
})
router.delete("/Delete",async(req,res)=>{
    handleDeleteItem(req,res,Salon,"servicename")
})
router.put("/Modify",async(req,res)=>{
    handleModifyItem(req,res,Salon,modifysalonItems,"servicename")
})
module.exports=router