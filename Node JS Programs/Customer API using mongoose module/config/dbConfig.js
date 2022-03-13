let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/meanbatch3";

let dbConnection = mongoose.connect(url).then(res=>console.log("db Connected")).catch(err=>console.log(err));


module.exports={dbConnection}