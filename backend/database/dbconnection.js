import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {dbname:"LIFE_WITH_PRUTHVI"})
        .then(() =>{
        console.log("connected to database!")
    })
    .catch((err)=>{
        console.log("some error occured while connecting to database", err);
    });
};