// load the module 
let fs = require("fs");

let msg = "Welcome";
// fs.writeFile("demo1.txt",msg,(err)=> {
//         if(!err){
//             console.log("Data stored successfully")
//         }
// })
// append the data 
fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=> {
            if(!err){
                console.log("Data stored successfully")
            }
})
console.log("Hello")
console.log("HI")