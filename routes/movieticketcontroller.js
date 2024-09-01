const express=require("express")
const router=express.Router()
const authmiddleware=require("../middleware")
const {Movieticket}=require("../Db")
const {movieticket,modifymovieticket}=require("../types")
router.post("/Add",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=movieticket.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid data for creating movie"
        })
    }
    const existingmovie=await Movieticket.findOne({moviename:payload.moviename})
    if(existingmovie){
        return res.status(401).json({
            msg:"movie already existing and running"
        })
    }
    const movie=await Movieticket.create(payload)
    if(movie){
        res.status(200).json({
            msg:"movie created successfully"
        })
    }
})
router.delete("/Delete",authmiddleware,async(req,res)=>{
    const payload=req.body
    const existingmovie=await Movieticket.findOne({moviename:payload.moviename})
    if(!existingmovie){
        return res.status(401).json({
            msg:"movie doesn't exist to delete"
        })
    }
    const deletemovie=await Movieticket.deleteOne(payload)
    if(deletemovie){
        res.status(200).json({
            msg:"movie deleted successfully"
        })
    }
})
router.put("/modify",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=modifymovieticket.safeParse(payload)
    if(!success){
        return res.status(401).json({
            msg:"invalid data for modifying movie details"
        })
    }
    const existingmovie=await Movieticket.findOne({moviename:payload.moviename})
    if(!existingmovie){
        return res.status(401).json({
            msg:"movie doesn't exist to modify"
        })
    }
    const modifymovietickets=await Movieticket.findOneAndUpdate(
        {moviename:payload.moviename},
        {$set:payload},
        {new:true,runValidators:true}
    )
    if(modifymovietickets){
        res.status(200).json({
            msg:"movie details modified"
        })
    }
})
module.exports=router

