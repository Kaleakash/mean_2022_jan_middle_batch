

describe("Employee Details Testing ",()=> {

    it("Emloyee Testing using ES5 style ",()=> {
        var emp1 = new Employee(100,"Ravi",21);
        expect(100).toEqual(emp1.getId());
        expect("Ravi").toEqual(emp1.getName());
        expect(22).toBeGreaterThan(emp1.getAge());
    })

    it("Customer Testin using ES6 style ",()=> {
        let cust1 = new Customer(101,"Ajay","Bangalore");
  
        expect(101).toEqual(cust1.getCId());
        expect("Ajay").toEqual(cust1.getName());
        expect("Bangalore").toContain("Ban")
    })
})