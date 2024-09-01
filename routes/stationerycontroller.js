const express=require("express")
const router=express.Router()
const { stationery,modifystationerys } = require("../types")
const {Stationery}=require("../Db")
const {handleAddItem,handleDeleteItem,handleModifyItem}=require("./mainhandlercontroller")

router.post("/Add",async(req,res)=>{
    handleAddItem(req,res,Stationery,stationery,"materialname")
})
router.delete("/Delete",async(req,res)=>{
    handleDeleteItem(req,res,Stationery,"materialname")
})
router.put("/Modify",async(req,res)=>{
    handleModifyItem(req,res,Stationery,modifystationerys,"materialname")
})
module.exports=router