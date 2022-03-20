let express = require("express");
let app = express();
// loading http module and calling server function and passing reference of express. 
let http = require("http").createServer(app);
// creating the reference of socket io and passing http reference using iife style  
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})
// This below function execute if any client send the request to this application 
// using socket library 
io.on("connection",(socket)=> {
    console.log("Client connected...");
    // To receive message from client application 
    socket.on("obj",(msg)=> {
        console.log(msg);
        socket.emit("obj1","From Server"+msg);
    })

})


http.listen(3000,()=>console.log("Server running on port number 3000"))