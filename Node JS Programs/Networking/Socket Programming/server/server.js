let net = require("net");
let server = net.createServer();
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// if any client application hit the reqeust using ip address and port number 
// then below method get called...
server.on("connection",(socket)=> {
    console.log("Client connected successfully..")

    // This code is use to receive the value from client node
    socket.on("data",(msg)=> {
        //console.log(msg);       // display data in buffer format
        console.log(msg.toString()); 
    })
    // Server node send the data to client application node. 
    socket.write("Hello client, You connected chat application successfully..");
    
    // This code execute again and again whenever we hit enter key. 
    // And send data to client
    obj.on("line",(input)=> {   
        socket.write(`From Server : ${input}`);
    })
})

server.listen(3000,()=>console.log("Server running on port number 3000"))