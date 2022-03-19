let jwt = require("jsonwebtoken");

let verifyToken  = async (req,res,next)=> {

    let token = req.headers.authorization;
    if(!token){
        return res.send("Access defined / UnAuthorized user")
    }

    try{
        let verifyTokenValue  = await jwt.verify(token,"my-key");
        if(!verifyTokenValue){
            res.send("UnAuthorized User!");
        } 
        req.role = verifyTokenValue;
        next();     // if valid token present go to next step. 
    }catch(Ex){
        res.send(Ex);
    }
    
}

let isUser = async (req,res,next)=>{
        if(req.role.user_type=="user"){
            console.log("Normal user")
            next();
        }else {
            res.send("AnAuthorized User, you can't access this resource")
        }
}
let isAdmin = async (req,res,next)=>{
    if(req.role.user_type=="admin"){
        console.log("Admin")
        next();
    }else {
        res.send("AnAuthorized User, you can't access this resource")
    }
}

module.exports= {verifyToken,isAdmin,isUser}