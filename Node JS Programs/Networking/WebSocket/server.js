let express = require("express");

let app = express();
// create the reference of websocket with help of express js with in IIFE style 
let ws = require("express-ws")(app);

// first we will open the static web page 
// http://localhost:9090/

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

// Server want to recieve web socket reqeust from client 
app.ws("/",(socket,req)=> {
    console.log("Client connected successfully...");

    // This code is use to receive the message from browser ws client. 
    socket.on("message",(msg)=> {
        console.log(msg);
        socket.send("Weleomce Mr/Miss "+msg);
    })

    //server send the message to client application 
    socket.send("Hello Client, Welcome to Web Socket Programming...");
})





app.listen(9090,()=>console.log("Server running on port number 9090"));