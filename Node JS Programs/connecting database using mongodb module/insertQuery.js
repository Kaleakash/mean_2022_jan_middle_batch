// load the module and create the reference of module 
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb  = "meanbatch3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Database connected successfully")
    let db = client.db(myDb);
    let emp = {_id:105,name:"Dinesh",age:31,deptId:101,city:"Bangalore"}
    
    db.collection("Employee").insertOne(emp,(err1,res)=> {
       
        if(!err1){
            console.log("record inserted successfully")
            console.log(res);
        }else {
            console.log(err1)
        }
        client.close();
    }) 

    }else {
        console.log(err);
    }
   
})