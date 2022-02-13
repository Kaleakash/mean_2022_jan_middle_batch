let http = require("http");
let url = require("url");
let loginPage = `
                <html>
                <head>
                </head>
                <body>
                <h2>Login Page</h2>
                <form action="checkuser">
                <label>UserName</label>
                <input type="text" name="user"/><br/>
                <label>Password</label>
                <input type="password" name="pass"/><br/>
                <input type="submit"/>
                <input type="reset"/>
                </form>
                </body>
                </html>
`
let indexPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 style="color:red">Welcome to My Simple Web Page</h2>
    <a href="aboutus">About Us</a> |
    <a href="contactus">Contact Us</a> |
    <a href="login">Login Page</a> |
</body>
</html>
`
let server = http.createServer((req,res)=> {
        let pathInfo = url.parse(req.url,true);
        //console.log(pathInfo.pathname)
        res.setHeader("content-type","text/html");
        if(pathInfo.pathname != "/favicon.ico"){
            if(pathInfo.pathname=="/"){
                res.write(indexPage);
            }
            if(pathInfo.pathname=="/contactus"){
                res.write("<h2>Welcome to Contact Us Page</h2>")
                res.write("Welcome Again")
            }
            if(pathInfo.pathname=="/aboutus"){
                res.write("<h2>Welcome to About Us Page</h2>")
                res.write("Welcome Again")
            }
            if(pathInfo.pathname=="/login"){
                //res.write("<h2>Welcome to Login Page</h2>")
                //res.write("Welcome Again")
                res.write(loginPage);
            }
            if(pathInfo.pathname=="/checkuser"){
                let login = pathInfo.query;
                // retrieve the value from file using fs module. 
                if(login.user=="Raj" && login.pass=="123"){
                    res.write("<h2>Successfully Login</h2>");
                }else {
                    res.write("<h2>Failure try once again</h2>");    
                }
            }

        }
        res.end();
})
server.listen(9090,()=> console.log("Server is up"));