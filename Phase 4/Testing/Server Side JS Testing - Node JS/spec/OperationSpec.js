var obj = require("../src/Operation");

describe("Operation Testing ",()=> {


    it("Addition testing ",()=> {
        var result = obj.add(10,20);
        expect(30).toBe(result);
    })

    it("Sub testing ",()=> {
        var result = obj.sub(10,20);
        expect(-10).toBe(result);
    })

    it("Mul testing ",()=> {
        var result = obj.mul(10,20);
        expect(200).toBe(result);
    })

    it("Div testing ",()=> {
        var result = obj.div(40,20);
        expect(2).toBe(result);
    })

})