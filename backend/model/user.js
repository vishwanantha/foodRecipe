import mongoose from "./connection.js"

const userSchema=new mongoose.Schema({
    username:{type:String,required:[true,'username is required']},
  
    
    password:{type:String,required:[true,'should be enter password']},
   
  
},{
    versionKey:false
})

const userModel=mongoose.model('users',userSchema)

export default userModel