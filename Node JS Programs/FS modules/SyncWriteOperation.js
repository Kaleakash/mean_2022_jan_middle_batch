let fs = require("fs");
let msg = "Welcome to Node JS Synchronous operation";
fs.writeFileSync("demo2.txt",msg);
console.log("data stored successfully")
console.log("Hi")
console.log("Hello")