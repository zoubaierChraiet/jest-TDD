import { ItemFactory } from "./item";

export function checkout(itemList: string): number {
  let total = 0;
  for (const item of itemList.split("")) {
    const newItem = ItemFactory(item);
    total += newItem.getPrice();
  }
  return total;
}
