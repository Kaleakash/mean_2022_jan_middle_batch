let fs = require("fs");
// literal style user-defined object 
let customer = {cid:103,cname:"Lex",age:34};
fs.writeFileSync("customer.json",JSON.stringify(customer));
console.log("Customer Record stored..")

