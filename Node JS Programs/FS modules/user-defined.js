// literal style 
//let emp = {id:100,name:"Ravi",salary:120000}  // literal 
let emp = {"id":100,"name":"Ravi","salary":120000}  // literal 
console.log("id is "+emp.id)
console.log("name is "+emp.name)
console.log("salary is "+emp.salary)
//
let empString = JSON.stringify(emp);    // convert literal object to stirng  
// console.log("id is "+empString.id)
// console.log("name is "+empString.name)
// console.log("salary is "+empString.salary)
let empJson = JSON.parse(empString);     // convert to string to json     
console.log("id is "+empJson.id)
console.log("id is "+empJson.name)
console.log("salary "+empJson.salary)
// convert json object to string 
let empStr = JSON.stringify(empJson);

