import { Discount, ItemType } from "./discount";
import { ItemFactory } from "./item";

export class Store {
  constructor(private discountList?: Discount[]) {}
  checkout(itemList: string): number {
    let total = 0;
    for (const item of itemList.split("")) {
      const newItem = ItemFactory(item);
      total += newItem.getPrice();
    }

    this.discountList.forEach((discount) => {
      total -= discount.calculateDsicount(itemList);
    });

    return total;
  }
}
