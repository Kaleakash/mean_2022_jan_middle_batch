// creating employee object in function style Es5 style 
function Employee(id,name,age){
    this.id = id;               // instance variable in of Employee object. 
    this.name = name;
    this.age = age;
    this.getId= function(){
        return this.id;
    }
    this.getName = function(){
        return this.name;
    }
    this.getAge = function() {
        return this.age;
    }
}
// creating customer object in class style ES6 style  
class Customer {
    constructor(cid,cname,city){
        this.cid = cid;
        this.cname = cname;
        this.city = city;
    }
    getCId() {
        return this.cid;
    }
    getName() {
        return this.cname;
    }
    getCity(){
        return this.city;
    }
}