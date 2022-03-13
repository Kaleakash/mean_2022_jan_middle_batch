let customerModel = require("../model/customerModel");

let storeCustomer = (customer)=> {
    return customerModel.insertMany(customer);
}




module.exports={storeCustomer};
