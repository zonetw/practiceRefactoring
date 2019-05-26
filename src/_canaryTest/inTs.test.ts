import {sum} from "./inTs";
describe("[TS] canary tests",()=>{
    it("sum",()=>{
        expect(sum(1,2)).toEqual(3);
    });
});