import dotenv from 'dotenv'

import {app} from "./app.js"
import connectDB from './db/index.js'

dotenv.config({path:'./env'})






connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log("MongoDb Connection failed.", err)
})






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