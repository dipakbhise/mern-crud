const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dipakbhise:Srcas123*@cluster0.teizo.mongodb.net/studentdata?retryWrites=true&w=majority").then((response)=>{
    console.log("database connection scuccessfull")
}).catch((error)=>{
    console.log("db connection failed", error)
})