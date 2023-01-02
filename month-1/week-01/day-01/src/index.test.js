const { ageInDays } = require("./index");

describe("Day 01 100daysOfCode", () => {
  it("should return 0 days", () => {
    expect(ageInDays(0)).toBe(0);
  });
  it("should return a error", () => {
    expect(() => ageInDays(-1)).toThrow();
    expect(() => ageInDays("a")).toThrow();
  });
  it("should return 365 days", () => {
    expect(ageInDays(1)).toBe(365);
  });
  it("should return 7300 days", () => {
    expect(ageInDays(20)).toBe(7300);
  });
  it("should return 23725 days", () => {
    expect(ageInDays(65)).toBe(23725);
  });
});
