interface Mountain {
  name: string;
  height: number;
}

interface Product {
  name: string;
  price: number;
}

interface InventoryItem {
  product: Product;
  quantity: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

let products: Product[] = [
  {
    name: "Cold Brew",
    price: 4,
  },
  {
    name: "Salted Caramel Gelato",
    price: 5,
  },
  {
    name: "Sparkling Water",
    price: 1,
  },
];

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

const findNameOfTallestMontain = (anArrayOfMountains: Mountain[]): string => {
  let tallest = anArrayOfMountains[0];
  mountains.forEach((mountain) => {
    if (mountain.height > tallest.height) {
      tallest = mountain;
    }
  });
  return tallest.name;
};

console.log(findNameOfTallestMontain(mountains));

const calcAverageProductPrice = (anArrayOfProducts: Product[]): number => {
  let total = 0;
  products.forEach((product) => {
    total = product.price + total;
    return total;
  });
  return total / products.length;
};

console.log(calcAverageProductPrice(products));

const calcInventoryValue = (
  anArrayofInventoryItem: InventoryItem[]
): number => {
  let total = 0;
  anArrayofInventoryItem.forEach((item) => {
    total = item.product.price * item.quantity + total;
  });
  return total;
};

console.log(calcInventoryValue(inventory));
