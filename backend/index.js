import express from 'express'
import dotenv from 'dotenv'
import router from './route/user.js'
import recipers from './route/reciper.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173"],
    method:["GET","POST"],
    credentials:true
}))
app.use('/auth',router)
app.use('/recipe',recipers)
const PORT=5000
app.listen(PORT,()=>{console.log(`server ${PORT}`)})