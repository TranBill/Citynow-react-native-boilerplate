const multiply = require("../multiply").default;

test("Multiply 3 & 3 equal 9",()=> {
    expect(multiply(4,4)).toBe(12);
});