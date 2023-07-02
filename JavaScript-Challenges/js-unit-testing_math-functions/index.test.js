import { add } from "./index.js";

test("add() returns 5 if called with add(2, 3)", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(2, -3)).toBeLessThan(0); //returns a negative value if the greater argument is negative
  expect(add(0.1, 0.2)).toBeCloseTo(0.3); //returns a value close to 0.3 if called with add(0.1, 0.2)
});

import { subtract } from "./index.js";

test("subtract() returns 10 if called with subtract(15, 5)", () => {
  expect(subtract(15, 5)).toBe(10);
  expect(subtract(15, 16)).toBeLessThan(0); //returns a negative value if the second argument is greater than the first one
});

import { multiply } from "./index.js";

test("multiply() returns 8 if called with multiply(2, 4)", () => {
  expect(multiply(2, 4)).toBe(8);
  expect(multiply(-2, 4)).toBeLessThan(0); //returns a negative value if only the first argument is negative
  expect(multiply(2, -4)).toBeLessThan(0); //returns a negative value if only the second argument is negative
  expect(multiply(-2, -4)).toBeGreaterThan(0); // returns a positive value if called with two negative arguments
});

import { divide } from "./index.js";

test("divide() returns 3 if called with divide(9, 3)", () => {
  expect(divide(9, 3)).toBe(3);
  expect(divide(9, 0)).toBe("You should not do this!");
});
