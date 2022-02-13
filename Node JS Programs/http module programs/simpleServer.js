let http = require("http");

// ES5 style 
// let server = http.createServer(function(req,res){

// })

//ES6 style 
// http://localhost:9090    // when request come through this URL 
// then this method get called..
let server = http.createServer((request,response)=> {
        response.end("Welcome to simple http module");
})
server.listen(9090,"localhost",()=>console.log("Server is up"));
//server.listen(9090,()=>console.log("Server running on port nuumber 9090"))
// port number range must be 1 to 65535 