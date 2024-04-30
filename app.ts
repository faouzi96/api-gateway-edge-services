import express from "express";

const expressApp = express();


const PORT = process.env.PORT || 3000;

expressApp.get("/", (req, res)=>{
    res.send("Here is our entry point");
    res.end();
})

expressApp.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
})