import express from 'express'
import RecModel from '../model/Recipe.js'
const router=express.Router()
router.post('/create',(req,res)=>{
    RecModel.create({
    name:req.body.name,
    description:req.body.description,
    ingredients:req.body.ingredients,
    imageUrl:req.body.imageUrl,
    userId:req.body.userId

    }).then(result=>{
        return res.json(result)

    }).catch(err=>console.log(err))

})
router.get('/rec',(req,res)=>{
    RecModel.find()
    .then(repies=>{
        return res.json(repies)
    }).catch(err=>res.json(err))
})

export default router