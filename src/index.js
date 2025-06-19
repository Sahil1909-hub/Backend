import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express()

;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("Error in express app:", err);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);  
        })
    } catch (error) {
        console.error(error, "Failed while connecting to database")
        throw err
    }
}) ()