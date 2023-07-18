const A_PRICE = 50;
const B_PRICE = 30;
const C_PRICE = 20;
const D_PRICE = 15;

interface Item {
  getPrice(): number;
}

class A implements Item {
  getPrice(): number {
    return A_PRICE;
  }
}

class B implements Item {
  getPrice(): number {
    return B_PRICE;
  }
}
class C implements Item {
  getPrice(): number {
    return C_PRICE;
  }
}
class D implements Item {
  getPrice(): number {
    return D_PRICE;
  }
}

export function ItemFactory(itemChar: string): Item {
  switch (itemChar) {
    case "A":
      return new A();
    case "B":
      return new B();
    case "C":
      return new C();
    case "D":
      return new D();
    default:
      throw new Error("Unknown Item Error");
  }
}
