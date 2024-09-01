const express=require("express")
const { Schema } = require("zod")
const router=express.Router()
const handleAddItem=async(req,res,model,schema,name)=>{
    const payload=req.body
    const {success}=schema.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid credentials for adding data"
        })
    }
    if (payload[name] === null || payload["description"]===null) {
        return res.status(400).json({ msg: "Cannot insert document with null category name or description" });
    }
    
    const existingitem=await model.findOne({[name]:payload[name]})
    if(existingitem){
        return res.status(401).json({
            msg:"item already exists"
        })
    }
    const existingDescription = await model.findOne({ description: payload.description });
    if (existingDescription) {
        return res.status(401).json({ msg: "Description already exists" });
    }
    const item=await model.create(payload)
    res.status(200).json({
        msg:"items added successfully"
    })


}
const handleDeleteItem=async(req,res,model,name)=>{
    const payload=req.body
    const foodtodelete=await model.findOne({[name]:payload[name]})
    if(!foodtodelete){
        return res.status(401).json({
            msg:"food item not found"
        })
    }
    const deletedfood=await model.deleteOne(payload)
    res.status(200).json({
        msg:"item deleted succesfully"
    })
}
const handleModifyItem=async(req,res,model,schema,name)=>{
    const payload=req.body
    const {success}=schema.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid data for modifying"
        })
    }
    const existingItem = await model.findOne({ [name]: payload[name] });

    if (!existingItem) {
        return res.status(404).json({
            msg: `No item found with ${name}: ${payload[name]}`
        });
    }
    const newname=`new${name}`
    if(payload[newname]){
        payload[name]=payload[newname]
        delete payload.newname
    }
    const modifieditem=await model.findOneAndUpdate(
        {[name]:existingItem[name]},
        { $set: payload },
        {new:true,runValidators:true}

    ) 
    if(!modifieditem){
        return res.status(401).json({
            msg:"items not modified"
        })
    }
    res.status(200).json({
        msg:"items modified successfully"
    })

}
module.exports={
    handleAddItem,
    handleDeleteItem,
    handleModifyItem
}