// load all the modules 
let express = require("express");
let fs = require("fs");
let cors = require("cors");

// create the reference of express module 
let app = express();
// middleware 
app.use(express.json());            // to enable post data 
app.use(cors());                    // to enable cors features 

// now we will create the 
let products = []

// http://localhost:9090/productDetails                 : Get all product 
app.get("/productDetails",(req,res)=> {
    let productInfo  = JSON.parse(fs.readFileSync("product.json"));
    res.json(productInfo);
})
// http://localhost:9090/productStore                       : store the product 
/*
{
  "pid":100,
  "pname":"TV",
  "price":85000,
  "url":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$720_576_PNG$"
}
*/
app.post("/productStore",(req,res)=> {
    let product = req.body;  
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=>p.pid==product.pid); 
    if(result==undefined){
        products.push(product);   
        fs.writeFileSync("product.json",JSON.stringify(products));
        res.send("Record stored successfully..");           
    }else {
        res.send("Product id must be unique");
    }   
      
})
// http://localhost:9090/findProductById/100
// http://localhost:9090/findProductById/1

app.get("/findProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=>p.pid==pid); 
    if(result==undefined){
        //res.json({"msg":`Record not present with pid as ${pid}`})
        res.json({"msg":"Record not present with pid as "+pid});
        //res.send("Record not found")
    }else {
        res.json(result);
    }
})
// http://localhost:9090/deleteProductInfo/1
// http://localhost:9090/deleteProductInfo/100

app.delete("/deleteProductInfo/:pid",(req,res)=> {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
let index = products.findIndex(p=>p.pid==pid);  // if record present it return that product index position else it return -ve number        
        if(index<0){
            res.send("Product not present with pid as "+pid);
        }else {
            products.splice(index,1);   //1st parameter index position and 2nd parameter number of record to delete from products. 
            fs.writeFileSync("product.json",JSON.stringify(products));
            res.send("Product deleted successfully");            
        }
})
// http://localhost:9090/updateProductDetails
app.patch("/updateProductDetails",(req,res)=> {
    let product = req.body;         // update price and url using pid 
    products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid==product.pid);  // if record present it return that product index position else it return -ve number        
        if(index<0){
            res.send("Product not present with pid as "+product.pid);
        }else {
            products[index].price=product.price;
            products[index].url=product.url
            fs.writeFileSync("product.json",JSON.stringify(products));
            res.send("Product updated successfully");            
        }   
})

app.listen(9090,()=>console.log("Server running on port number 9090"));
