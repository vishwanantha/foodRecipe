import mongoose from "./connection.js"

const ReSchema=new mongoose.Schema({
    name:{type:String,required:[true,'name is required']},
    description:{type:String},
    ingredients:{type:String},
    imageUrl:{type:String},

userId:{
   type:[mongoose.Schema.Types.ObjectId],ref:"User"

}
    
   
    
  
},{
    versionKey:false
})

const RecModel=mongoose.model('recipe',ReSchema)

export default RecModel