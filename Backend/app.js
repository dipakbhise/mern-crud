require('dotenv').config();
const serverless = require('serverless-http');
const express = require("express");
var cors = require('cors')
const app = express();
const port = process.env.PORT || 8000
require("./dbconn/db.js")
const Studentdata = require("./models/Studentdata")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/studentdata", (req, res)=>{

    
    Studentdata.find().then((response)=>{
        res.status(201).send(response)
    }).catch((error)=>{
        res.status(401).send(error)
    })


})

app.get("/test", (req, res)=>{

    res.status(201).send("success")

    


})

app.get("/studentdata/:id", (req, res)=>{

    Studentdata.findById(req.params.id).then((response)=>{
        res.status(201).send(response)
    }).catch((error)=>{
        res.status(401).send(error)
    })


})

app.post("/studentdata", (req, res)=>{

    const student = new Studentdata(req.body)

    student.save().then((response)=>{
        res.status(201).send(response)
    }).catch((error)=>{
        res.status(401).send(error)
    })


})

app.put("/studentdata/:id", (req, res)=>{

    Studentdata.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((response)=>{

        res.status(201).send(response)
    }).catch((error)=>{
        res.status(401).send(error)
    })

})

app.delete("/studentdata/:id", (req, res)=>{

    Studentdata.findByIdAndDelete(req.params.id).then((response)=>{

        res.status(201).send(response)
    }).catch((error)=>{
        res.status(401).send(error)
    })

})


app.listen(port, ()=>{
    console.log(`Server started at port no. ${port}`)
})

module.exports.handler = serverless(app);