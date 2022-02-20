let express = require("express");

let app = express();
let emp = {id:100,name:"Ravi",age:21};

// add middleware 
app.use(express.json());           // Enable post json data from http request.

let employees = [
    {id:1,name:"Ajay",age:21},
    {id:2,name:"Vijay",age:24},
    {id:3,name:"Ramesh",age:26},
    {id:4,name:"Lokesh",age:28}
]
// http://localhost:9090/sayHello
// get the output in plain text format. 
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to Simple REST API")
})
// http://localhost:9090/sayJson
app.get("/sayJson",(req,res)=> {
    res.json({"msg":"Welcome simple json message"});
})

// http://localhost:9090/empInfo        : get Employee resource
app.get("/empInfo",(req,res)=> {
    res.json(emp);              //automatically convert js object into json
})
// http://localhost:9090/allEmployees   : get All employee resources 
app.get("/allEmployees",(req,res)=> {
    res.json(employees);
})
// http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(req,res)=> {
    //let name = req.query.name;
    let name = req.query["name"];
    res.send("Welcome user "+name);
})

// http://localhost:9090/multipleQueryParam?name=Raj&pass=123
// http://localhost:9090/multipleQueryParam?name=Raj&pass=888
app.get("/multipleQueryParam",(req,res)=> {
    let name = req.query["name"];
    let pass = req.query["pass"];
    if(name=="Raj" && pass=="123"){
        res.send("Successfully login")
    }else {
        res.send("Failure try once again")
    }   
})
// http://localhost:9090/singlePathParam/Ravi
app.get("/singlePathParam/:user",(req,res)=> {
    let user = req.params.user;
    res.send("Welcome user to path param "+user);
})
// http://localhost:9090/multiPathParam/Raj/123
app.get("/multiPathParam/:user/:pass",(req,res)=> {
    let user = req.params.user;
    let pass = req.params.pass
    if(user=="Raj" && pass=="123"){
        res.send("Successfully login with path param")
    }else {
        res.send("Failure with path param")
    }
})
// http://localhost:9090/storeEmployee 
app.post("/storeEmployee",(req,res)=> {
    let emp = req.body;
    console.log(emp);
    res.send("Data stored");
})

// http://localhost:9090/updateEmployeeSalary
app.patch("/updateEmployeeSalary",(req,res)=> {
    let emp = req.body;
    console.log(emp);
    res.send("employee salary updated ");
})

// http://localhost:9090/updateEmployee 
app.put("/updateEmployee",(req,res)=> {
    let emp = req.body;
    console.log(emp);
    res.send("Employee details updated successfully");
})

// http://localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id",(req,res)=> {
    let id = req.params.id;
    res.send("REcord deleted successsfully with id is "+id);
})
app.listen(9090,()=>console.log("Server running on port number 9090"));