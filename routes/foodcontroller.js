const express=require("express")
const router=express.Router()
const { fooditem, modifyfoodItems } = require("../types")
const {Food}=require("../Db")
const {handleAddItem,handleDeleteItem,handleModifyItem}=require("./mainhandlercontroller")

router.post("/Add",async(req,res)=>{
    handleAddItem(req,res,Food,fooditem,"itemname")
})
router.delete("/Delete",async(req,res)=>{
    handleDeleteItem(req,res,Food,"itemname")
})
router.put("/Modify",async(req,res)=>{
    handleModifyItem(req,res,Food,modifyfoodItems,"itemname")
})
module.exports=router