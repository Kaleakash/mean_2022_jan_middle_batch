let obj = require("readline");

let abc =obj.createInterface({
            input:process.stdin,       
            output:process.stdout       
        });

// abc.question("Enter the id",(id)=> {
//     console.log("Your Id is "+id);
//     next();
//     //abc.close();
// })
// abc.question("Enter the name",(name)=> {
//     console.log("Your Name is "+name);
// })
// abc.question("Enter the Age",(age)=> {
//     console.log("Your Age is "+age);
// })
abc.question("Enter the id",(id)=> {
        abc.question("Enter the name",(name)=> {
            abc.question("Enter the age",(age)=> {
                console.log("id is "+id);
                console.log("name is "+name);
                console.log("age is "+age);
                abc.close();
            })
        })
})

