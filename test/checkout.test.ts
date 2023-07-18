import { checkout } from "../src/checkout";

describe("checkout test", () => {
  it("Should return 0 when no items are sent", () => {
    expect(checkout("")).toBe(0);
  });
  it("Should return 50 when sending A", () => {
    expect(checkout("A")).toBe(50);
  });
  it("Should return 30 when sending B", () => {
    expect(checkout("B")).toBe(30);
  });
  it("Should return 20 when sending C", () => {
    expect(checkout("C")).toBe(20);
  });
  it("Should return 15 when sending D", () => {
    expect(checkout("D")).toBe(15);
  });
  it("Should return 30 when sending DD", () => {
    expect(checkout("DD")).toBe(30);
  });
  it("Should return 115 when sending ABCD", () => {
    expect(checkout("ABCD")).toBe(115);
  });
  // THROW ERROR TEST
  it("Should throw error with invalid characters", () => {
    expect(() => checkout("Z")).toThrow("Unknown Item Error");
  });
});
