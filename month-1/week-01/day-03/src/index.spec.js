const { barbecueSkewers } = require("./index");

describe("Day 01 100daysOfCode", () => {
  it("should return [2,3]", () => {
    const grill = [
      "--oooo-ooo--",
      "--xx--x--xx--",
      "--o---o--oo--",
      "--xx--x--ox--",
      "--xx--x--ox--",
    ];
    expect(barbecueSkewers(grill)).toEqual([2, 3]);
  });
  it("should return [3,2]", () => {
    const grill = [
      "--oooo-ooo--",
      "--xxxxxxxx--",
      "--o---",
      "-o-----o---x--",
      "--o---o-----",
    ];
    expect(barbecueSkewers(grill)).toEqual([3, 2]);
  });
  it("should return [1,4]", () => {
    const grill = [
      "--xo--x--ox--",
      "--xx--x--xx--",
      "--oo--o--oo--",
      "--xx--x--ox--",
      "--xx--x--ox--",
    ];
    expect(barbecueSkewers(grill)).toEqual([1, 4]);
  });
  it("should return [0,0]", () => {
    const grill = [];
    expect(barbecueSkewers(grill)).toEqual([0,0]);
  });
});
