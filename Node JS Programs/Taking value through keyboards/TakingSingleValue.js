let obj = require("readline");

let abc =obj.createInterface({
            input:process.stdin,        // standard input device keyword 
            output:process.stdout       // standard output device console. 
        });

abc.question("Enter the name",(name)=> {
    console.log("Your name is "+name);




    abc.close();        // terminate our application 
})