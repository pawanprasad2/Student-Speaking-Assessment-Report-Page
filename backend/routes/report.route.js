const express=require("express")
const router =express.Router()
const reportData = require("../data/reportdata")

router.get('/',(req,res)=>{
    res.json(reportData)
})


module.exports=router