const express=require('express')
const route=express.Router()
const appointment=require('../models/appointment')
route.post('/appoint',async (req,res)=>{
    try{
        const {
            type,date,time
        }=req.body
        const result= await appointment.create({
            type,date,time
        })
        if(result){
            return res.status(201).json({message: "Appointment details are stored"})
        }
        else{
            return res.status(405).json({message:"Appointment details are not stored"})
        }
    }
    catch(err){
        console.log(err)
    }
    
})
module.exports=route