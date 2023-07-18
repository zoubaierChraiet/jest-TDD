export function checkout(itemList: string): number {
  let total = 0;
  for (const item of itemList.split("")) {
    if (itemList === "A") total += 50;
    if (itemList === "B") total += 30;
    if (itemList === "C") total += 20;
    if (itemList === "D") total += 15;
  }
  return 0;
}
