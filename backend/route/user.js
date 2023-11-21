import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userModel from '../model/user.js'
const router=express.Router()

router.post('/reg',async(req,res)=>{
    const{username,password}=req.body
    const user=await userModel.findOne({username})
    
    if(user){
        return res.json({Message:"user exists"})
    }
    const hashedpassword=await bcrypt.hash(password,10)
    const newUser=new userModel({username,password:hashedpassword
    })
    await newUser.save()

   return res.json({Message:"user"})
})
router.post("/login",async(req,res)=>{
    const{username,password}=req.body
    const user=await userModel.findOne({username})
    
    if(!user){
        return res.json({Message:"user doesnot exists"})
    }
    const ispassword=await bcrypt.compare(password,user.password)
   if (!ispassword){
    return res.json({Message:"user or password incorrect"})
   }
   
const token =jwt.sign({id:user._id},"secret")
res.cookie("token",token)
return res.json({id:user._id})
})
export default router