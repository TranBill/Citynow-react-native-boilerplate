const multiply = require("../multiply").default;

test("Multiply 3 & 3 equal 9",()=> {
    expect(multiply(4,3)).toBe(12);
});