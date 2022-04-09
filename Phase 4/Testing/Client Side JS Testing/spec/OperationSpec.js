
describe("Operation Testing ", ()=> {


    it("Addition Testing ",()=> {
        var result = add(10,20);
        expect(30).toBe(result);
    });

    it("Substraction Testing ",()=> {
        var result = sub(100,50);
        expect(50).toBe(result);
    })

    it("Mul Testing ",()=> {
        var result = mul(1,5);
        expect(5).toBe(result);
    })

    it("Div Testing ",()=> {
        var result = div(100,50);
        expect(2).toBe(result);
    })
})