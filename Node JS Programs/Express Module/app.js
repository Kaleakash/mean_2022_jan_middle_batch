// load the module 
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
loginDetails = [];
loginDetails = JSON.parse(fs.readFileSync("login.json"));

// we have to create the reference of express module 
let app = express();
// adding middleware module 

app.use(bodyParser.urlencoded({extended:true}));    // it is use to enable form body method data. 

app.get("/sayHello",(req,res)=> {
    console.log("Client send the request");
    res.send("Welcome Simple Express JS Application");
})
app.get("/aboutus",(req,res)=> {
    res.send("About Us page")
})
app.get("/contactus",(req,res)=> {
    res.send("Contact us page")
})
app.get("/info",(req,res)=> {
    res.send("<font color=red>Welcome to Express JS </font>")
})
app.get("/openHtml",(req,res)=> {
   // res.sendFile("sample.html");
   //res.sendFile("C:\\Users\\91990\\Desktop\\Angular 29-01-2022 - Phase 3 and Phase 4\\mean-bookstore-22\\Node JS Programs\\Express Module\\sample.html");
   //res.send(__dirname);         // : __dirname : is a global property. which provide current directory path
    res.sendFile(__dirname+"\\sample.html");
})

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"\\loginGet.html");
})

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"\\loginPost.html");
})

app.get("/checkUser",(req,res)=> {
    let email = req.query.email;
    let pass = req.query.pass;
    let result = loginDetails.find(ll=>ll.email==email && ll.pass==pass);
    if(result!=undefined){
        res.send("Successfully login")
    }else {
        res.send("Failure try once again")
    }
})
app.post("/checkUser",(req,res)=> {
    let login = req.body;
    //console.log(login)
   // res.send("Post method called...")
   let result = loginDetails.find(ll=>ll.email==login.email && ll.pass==login.pass);
   if(result!=undefined){
        res.send("Successfully Login")
   }else {
        res.send("Failure try once again");
   }
})

app.get("/signUpPageOpen",(req,res)=> {
    res.sendFile(__dirname+"\\signUp.html");
})
app.post("/signUp",(req,res)=> {
    let login = req.body;
    if(loginDetails.length>0){
        let result = loginDetails.find(ll=>ll.email==login.email);
        if(result==undefined){
            loginDetails.push(login);
            fs.writeFileSync("login.json",JSON.stringify(loginDetails));
            res.send("Account Created successfully");
        }else {
            res.send("Email id must be unique");
        }
    }else {
        loginDetails.push(login);
        fs.writeFileSync("login.json",JSON.stringify(loginDetails));
        res.send("Account Created successfully");
    }
})

app.listen(9090,()=>console.log("Server running on port number 9090"))