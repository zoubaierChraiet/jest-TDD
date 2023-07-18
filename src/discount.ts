export enum ItemType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

export class Discount {
  constructor(
    private itemType: ItemType,
    private quantity: number,
    private discount: number
  ) {}

  calculateDsicount(itemList: string): number {
    const count = itemList
      .split("")
      .filter((item) => item === this.itemType).length;
    if (count >= this.quantity) return Math.trunc(count / 3) * this.discount;
    return 0;
  }
}
