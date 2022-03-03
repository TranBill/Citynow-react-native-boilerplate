/* eslint-disable no-undef */
const sum = require("../sum").default;

test("adds 4 + 2 to not equal 7", () => {
  expect(sum(4, 2)).toBe(7);
});
