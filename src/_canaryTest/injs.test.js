const sum = require("./inJs");

describe("[Js] canary tests",()=>{
    it("sum",()=>{
        expect(sum(1,2)).toEqual(3);
    });
});