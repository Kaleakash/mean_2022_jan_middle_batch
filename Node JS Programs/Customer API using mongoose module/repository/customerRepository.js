let customerModel = require("../model/customerModel");

let storeCustomer = (customer)=> {
    return customerModel.insertMany(customer);
}

let updateCustomerAge = (customer)=> {
    return customerModel.updateOne({_id:customer._id},{$set:{cage:customer.cage}});
}

let deleteCustomerInfo = (id)=> {
    return customerModel.deleteOne({_id:id});
}

let getAllCustomer = ()=> {
    return customerModel.find();
}

module.exports={storeCustomer,updateCustomerAge,deleteCustomerInfo,getAllCustomer};
