var employeeService = require("../src/EmployeeService");

describe("Employee Service testing ",()=> {

    var {getEmployeeInfo,passArrayValue,checkUser} = employeeService;    

    xit("Employee service fucntion testing ",()=> {
        var result = employeeService.getEmployeeInfo();
        expect("Welcome to Employee Repository function").toEqual(result);
    })

    it("Employee Service fake for Employee Repository ",()=> {
        
        spyOn(employeeService,"getEmployeeInfo").and.returnValue("Fake Result");


        var result = employeeService.getEmployeeInfo();
        expect("Fake Result").toEqual(result);

    })

    it("Employee Service testing for spyon with parameter",()=> {
        
        let num = [10,20,30];
        spyOn(employeeService,"passArrayValue").withArgs(num).and.returnValue(3);

        
        var result = employeeService.passArrayValue(num);
        expect(3).toEqual(result);

    })


    it("Employee Service check user fake",()=> {
        

        spyOn(employeeService,"checkUser").and.callFake((user,pass)=> {
            if(user=="Ajay" && pass=="123"){
                    return true;
            }else {
                    return false;
            }
        })

        
        var result = checkUser("Ajay","1234")
        expect(result).toBeTruthy();

    })


})