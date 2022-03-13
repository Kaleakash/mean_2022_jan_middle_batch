let mongoose = require("mongoose");
mongoose.pluralize(null);   // to avoid to plural 
// define the schema 
// schema is use to create the structure for the collection 
let customerSchema = mongoose.Schema({
    _id:{type:Number,required:true},
    cname:{type:String,required:true},
    cage:{type:Number,required:true},
    phnumber:{type:Number,required:false}
});

// using schema we have to create the model 
//1st parameter collection name,
//2nd parameter collection schema definition 
let customerModel = mongoose.model("Customer",customerSchema);
// by default mongoose it will create the collection name as 
// plural in lower case. 
module.exports=customerModel;