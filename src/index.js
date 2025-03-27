//require("dotenv").config({path:'./.env'})


/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
*/


import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path:'./env'
})  // Load environment variables from .env file


////////////////////////////////////////////////////////////////////////////////


//IMPORTANT NOTE 

//in package .json 
    /* we can also use the below line as well it is also working fine */
    // "dev": "nodemon src/index.js"


/////////////////////////////////////////////////////////////////////////////////////

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})






















/*
import express from "express"
const app = express()
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    }
    catch(error){
        console.log("Error: ", error)
        throw error
    }
})()

*/