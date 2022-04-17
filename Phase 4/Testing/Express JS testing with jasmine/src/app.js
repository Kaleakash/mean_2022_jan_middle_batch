let express = require("express");

let app = express();

let products = [
    {pid:100,pname:"Tv",price:120000},
    {pid:101,pname:"Computer",price:45000},
    {pid:102,pname:"Laptop",price:82000},
]
app.get("/",(req,res)=> {
    res.send("Welcome to Simple Rest API")
})


app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name);
})

app.get("/allProductInfo",(req,res)=> {
    res.json(products);
})


app.listen(3000,()=>console.log("Application running on port number 30000"));


module.exports=app;