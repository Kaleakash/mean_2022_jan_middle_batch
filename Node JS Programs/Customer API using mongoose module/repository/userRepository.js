let userModel = require("../model/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let signUpUser = async(user)=> {
    let salt = await bcrypt.genSalt(10);
    let hashPassword  = await bcrypt.hash(user.password,salt);
    let userRef = new userModel({
         email : user.email,
         password : hashPassword,
         name:user.name,
         user_type:user.user_type      
    })
    return userModel.insertMany(userRef);
}


let signIn = async (user)=> {
    let result = await userModel.findOne({email:user.email});
   // check email id 
    if(result==null){
        return "Email Id is wrong"
    }
    // check the password
    let validPassword  = await bcrypt.compare(user.password,result.password);
    if(!validPassword){
        return "Invalid password";
    }
    // generate the token usign payload data. 
    let payload = {id:result._id,email:result.email,user_type:result.user_type}
    let token  = await jwt.sign(payload,"my-key");
    return token;

}
module.exports={signUpUser,signIn};
