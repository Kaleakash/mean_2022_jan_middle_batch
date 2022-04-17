let app = require("../src/app");
let supertest = require("supertest");
describe("REst API Testing ",()=> {



    it("Simple Message Testing ",(done)=> {
        supertest(app).get("/").expect(200).expect(data=> {

                //console.log(data);
                expect(data.text).toEqual("Welcome to Simple Rest API");
                
        }).end(err=>err ? done.fail(err)  : done());
    })
})