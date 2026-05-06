const express=require("express");

const app=express();

app.get("/",(req,res)=>{

    res.send("LTD PANEL ONLINE");

});

app.listen(3000,()=>{

    console.log("Server Running");

});
