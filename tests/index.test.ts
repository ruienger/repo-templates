import fixedAdd from "../src/index";

test("Sum of 0 and 1 expected to be 1", () => {
  expect(fixedAdd(0, 1)).toBe(1);
});
test("Sum of 0.5 and 1 expected to be 1.5", () => {
  expect(fixedAdd(0.5, 1)).toBe(1.5);
});
