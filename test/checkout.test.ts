import { Store } from "../src/checkout";
import { Discount, ItemType } from "../src/discount";

describe("checkout test", () => {
  const discountA = new Discount(ItemType.A, 3, 20);
  const discountB = new Discount(ItemType.B, 3, 15);
  const testStore = new Store([discountA, discountB]);

  it("Should return 0 when no items are sent", () => {
    expect(testStore.checkout("")).toBe(0);
  });
  it("Should return 50 when sending A", () => {
    expect(testStore.checkout("A")).toBe(50);
  });
  it("Should return 30 when sending B", () => {
    expect(testStore.checkout("B")).toBe(30);
  });
  it("Should return 20 when sending C", () => {
    expect(testStore.checkout("C")).toBe(20);
  });
  it("Should return 15 when sending D", () => {
    expect(testStore.checkout("D")).toBe(15);
  });
  it("Should return 30 when sending DD", () => {
    expect(testStore.checkout("DD")).toBe(30);
  });
  it("Should return 115 when sending ABCD", () => {
    expect(testStore.checkout("ABCD")).toBe(115);
  });
  // THROW ERROR TEST
  it("Should throw error with invalid characters", () => {
    expect(() => testStore.checkout("Z")).toThrow("Unknown Item Error");
  });

  it("Should apply a discount when having 3 A", () => {
    expect(testStore.checkout("AAA")).toBe(130);
  });

  it("Should apply a discount when having 8 A", () => {
    expect(testStore.checkout("AAAAAAAA")).toBe(360);
  });
});
