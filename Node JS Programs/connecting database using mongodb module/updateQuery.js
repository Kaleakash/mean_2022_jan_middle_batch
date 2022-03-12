// load the module and create the reference of module 
let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb  = "meanbatch3";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Database connected successfully")
    let db = client.db(myDb);
    db.collection("Employee").updateOne({_id:100},{$set:{age:30}},(err1,res)=> {
        if(!err1){
            //console.log("Record updated");
            //console.log(res);
            if(res.modifiedCount>0 && res.matchedCount>0){
                    console.log("Record updated")
            }if(res.matchedCount>0){
                console.log("Record present but didn't update")
            }else {
                    console.log("Record not present")
            }
        }else {
                console.log(err1)
        }
        client.close();
    })
    }else {
        console.log(err);
    }
   
})