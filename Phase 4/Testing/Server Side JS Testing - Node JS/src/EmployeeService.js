var employeeReposiory = require("./EmployeeRepository");

function getEmployeeInfo() {

        // coding......................
        console.log("I Came Here...")
        return employeeReposiory.getEmployeeDetailsFromDb();
}

function passArrayValue(num){
    // coding......

    num.push(40);
    num.push(50);
    
    return num.length;
}

function checkUser(name,pass){
    // if(name=="Raj" && pass=="123"){
    //     return true;
    // }else {
    //     return false;
    // }
}
module.exports={getEmployeeInfo,passArrayValue,checkUser}