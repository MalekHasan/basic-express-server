'use strict'
const server=require("../src/server").app;
const supertest=require('supertest');
const request =supertest(server);


describe("Test API Server",()=>{
    test("Person API server",async()=>{
        const response=await request.get('/person?name=malek')
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual("object")
    });
    test("Person 500 Code API server",async()=>{
        const response=await request.get('/person?name=100')
        expect(response.status).toEqual(500)
    });
    test("404 handler",async()=>{
        const response=await request.get('/peson')
        expect(response.status).toEqual(404)
    });

})