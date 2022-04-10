describe("Hook function testing ",()=> {

    beforeAll(()=> {
        console.log("Before All it function")
    })

    beforeEach(()=> {
        console.log("Before each it function")
    })
    it("first test case ",()=> {
        console.log("First test case")
        expect(true).toBeTrue();
    })


    
    it("second test case ",()=> {
        console.log("Second test case")
        expect(false).toBeFalse();
    })

    afterEach(()=> {
        console.log("After each if function")
    })
    afterAll(()=> {
        console.log("After All it function")
    })
})