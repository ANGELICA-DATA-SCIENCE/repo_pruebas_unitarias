const op = require("./main.js");   //op operación

test("Sumar dos números 2+2=4",
    ()=>{
        expect(op.suma(2,2)).toBe(4);
    });

test("Sumar dos números 22+22=44",
    ()=>{
        expect(op.suma(22,22)).toBe(44);
    });

test("Sumar dos números 171+229=400",
    ()=>{
        expect(op.suma(171,229)).toBe(400);
    });