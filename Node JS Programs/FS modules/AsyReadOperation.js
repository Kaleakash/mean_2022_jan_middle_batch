let fs  = require("fs");
fs.readFile("demo1.txt",(err,data)=> {
    if(!err){
        //console.log(data);
        // converting buffer to string format. 
        let info = data.toString();
        console.log(info);
    }else {
        console.log(err)
    }
})
console.log("Hello")
console.log("HI")