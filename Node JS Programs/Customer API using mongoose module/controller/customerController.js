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


module.exports={storeCustomerInfo}