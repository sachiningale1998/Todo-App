const express = require('express');

const fs = require('fs');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/",(req,res)=>{
    
    res.send("Welcome to Home")
})

app.post("/todos/new", (req,res)=>{
    const dataFromClient = req.body;
    fs.readFile("./data.json", {encoding: "utf8"}, (err, data)=>{
        if(err){
            console.log("something went wrong while reading posted todo data")
        }
        const parsedData = JSON.parse(data);
        parsedData.todos = ([...parsedData.todos, dataFromClient]);

        fs.writeFile("./data.json", JSON.stringify(parsedData), { encoding: "utf8" }, (err, data)=>{
            res.send("todo saved successfully")
        });
    })
})
app.get("/todos",(req,res)=>{
    fs.readFile("./data.json",{encoding: "utf8"}, (err, data)=>{
        if(err){
            console.log(err)
        }
        const parsedData = JSON.parse(data);
        const todos = parsedData.todos;
        res.send(JSON.stringify(todos))
    })
})

app.listen(3004, ()=>{
    console.log('listening on http://localhost:3004')
})