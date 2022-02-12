let fs = require("fs");
let customer = fs.readFileSync("customer.json");
//console.log(customer)
// 1st way 
// let customerString = customer.toString();
// console.log(customerString)
// console.log("id is "+customerString.cid)
// let customerJson = JSON.parse(customerString);
// console.log("id is "+customerJson.cid)
// 2nd way 
let customerJson = JSON.parse(customer)
console.log(" id "+customerJson.cid)