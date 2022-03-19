let userModel = require("../model/userModel");
let bcrypt = require("bcryptjs");

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

module.exports={signUpUser};
