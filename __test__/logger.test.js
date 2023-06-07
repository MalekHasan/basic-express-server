'use strict'
const logger =require("../src/middlewares/logger")

describe("Test middleware",()=>{
    let consoleSpy;
    let req={};
    let res={};
    let next=jest.fn();
    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,"log")
    })
    test("Test logger middleware",()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled()
    })
    test("Test next",()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled()
    })
})