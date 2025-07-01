import express from "express"
const app = express()

app.use("/health", (req, res, next)=>{
    res.status(200).json({"message":"healthy"})
    next()
})

app.listen(3000, ()=>{
    console.log("running")
})