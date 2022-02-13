let obj = require("readline-sync");
let id = obj.questionInt("Enter the id")
let name = obj.question("Plz enter name");
let salary = obj.questionFloat("Ener the salary")
let result = obj.question("Enter boolean value");
//console.log(typeof(result))
console.log("Your id is "+id);
console.log("Your name is "+name);
console.log("your salary is "+salary);