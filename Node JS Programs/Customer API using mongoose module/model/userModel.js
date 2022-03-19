let mongoose = require("mongoose");
mongoose.pluralize(null);   // to avoid to plural 

let userSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    user_type:{type:String,required:true}
});


let userModel = mongoose.model("User",userSchema);
module.exports=userModel;