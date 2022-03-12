// load the module and create the reference of module 
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb  = "meanbatch3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Database connected successfully")
    let db = client.db(myDb);
    db.collection("Employee").deleteOne({city:"Bangalore"},(err1,res)=> {
        if(!err1){
                if(res.deletedCount>0){
                    console.log("Record deleted successfully")
                }else {
                    console.log("Record not present")
                }
        client.close();
        }else {
                console.log(err1);
        }
    })
    }else {
        console.log(err);
    }
   
})