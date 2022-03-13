let customerRepository = require("../repository/customerRepository");

let storeCustomerInfo = async (req,res)=> {
    let customer = req.body;
    try{
        let result = await customerRepository.storeCustomer(customer);
        res.send(result);
    }catch(Ex){
        res.send(Ex);
    }
}

let updateCustomerAge = async (req,res)=> {
    let customer = req.body;
    try{
        let result = await customerRepository.updateCustomerAge(customer);
        res.send(result);
    }catch(Ex){
        res.send(Ex);
    }
}

let deleteCustomerInfo = async (req,res)=> {
    let cid = parseInt(req.params._id);
    try{
        let result = await customerRepository.deleteCustomerInfo(cid);
        res.send(result);
    }catch(Ex){
        res.send(Ex);
    }
}

let findAllCustomer = async (req,res)=> {
    let customers = await customerRepository.getAllCustomer();
    res.json(customers);
}

module.exports={storeCustomerInfo,updateCustomerAge,deleteCustomerInfo,findAllCustomer}

