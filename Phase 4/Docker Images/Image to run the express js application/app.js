let express = require("express");
let app = express();

let employees = [
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Ramesh",age:22},
    {id:102,name:"Rajesh",age:23},
]
app.get("/",(req,res)=> {
    res.send("Welcome to Simple Express JS runnning through docker")
})

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user to express with docker "+name)
})

app.get("/employees",(req,res)=> {
    res.json(employees);
})

app.listen(9090,()=>console.log("Server running on port number 990"))