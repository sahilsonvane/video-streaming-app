import dotenv from 'dotenv'

import express from "express"
import connectDB from './db/index.js'

dotenv.config({path:'./env'})
const app = express()





connectDB()






/*
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_URI}`)
        app.on("Error in express", (error)=> {
            console.log("ERRR",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("Error in connecting db.", error)
    }
})()

*/