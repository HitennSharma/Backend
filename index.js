require('dotenv').config()
const express = require("express");
// import express from  "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res)=>{
    res.send('HitenSharmas')
} )

app.get('/login',(req,res)=> {
    res.send('<h1>Please login in</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
