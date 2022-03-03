/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable arrow-spacing */
/* eslint-disable comma-spacing */

const multiply = require("../multiply").default;

test("Multiply 3 & 3 equal 9",()=> {
    expect(multiply(3,3)).toBe(9);
});