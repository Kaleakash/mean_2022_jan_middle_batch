let express = require("express");
let db = require("./config/dbConfig");
let customerRouter = require("./router/cutomerRouter");
let app = express();
const port = process.env.PORT || 9090;
db.dbConnection;      // connect the database 
app.use(express.json());



app.use("/api/customer",customerRouter);



app.listen(port,()=>console.log(`Application running on port number ${port}`));
