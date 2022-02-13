let urlRef = require("url");
let urlMsg  = "http://www.google.com:80/hello?name=Ravi&age=21";
console.log(urlMsg);
//let urlData = urlRef.parse(urlMsg);// query property consider as string 
let urlData = urlRef.parse(urlMsg,true); // query property consider as reference.  
//console.log(urlData);
console.log(urlData.protocol)
console.log(urlData.hostname)
console.log(urlData.path)
console.log(urlData.host);
console.log(urlData.query)
let user = urlData.query;
console.log("name is "+user.name)
console.log("age is "+user.age);
