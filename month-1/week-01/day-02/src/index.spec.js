const { findNemo } = require("./index");

describe("Day 02 100 Days of code", () => {
  it("Should return I can't find nemo :(", () => {
    expect(() => findNemo("")).toThrow();
  });
  it("Should return I found Nemo at 1!", () => {
    expect(findNemo("Nemo is me")).toBe("I found Nemo at 1!");
  });
  it("Should return I found Nemo at 2!", () => {
    expect(findNemo("I Nemo am")).toBe("I found Nemo at 2!");
  });
  it("Should return I found Nemo at 4!", () => {
    expect(findNemo("I am finding Nemo !")).toBe("I found Nemo at 4!");
  });
});
