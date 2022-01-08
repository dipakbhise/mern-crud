const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONN_URL).then((response)=>{
    console.log("database connection scuccessfull")
}).catch((error)=>{
    console.log("db connection failed", error)
})