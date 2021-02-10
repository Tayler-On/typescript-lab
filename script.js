"use strict";
let mountains = [
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
let products = [
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
let inventory = [
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
const findNameOfTallestMontain = (anArrayOfMountains) => {
    let tallest = anArrayOfMountains[0];
    mountains.forEach((mountain) => {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    });
    return tallest.name;
};
console.log(findNameOfTallestMontain(mountains));
const calcAverageProductPrice = (anArrayOfProducts) => {
    let total = 0;
    products.forEach((product) => {
        total = product.price + total;
        return total;
    });
    return total / products.length;
};
console.log(calcAverageProductPrice(products));
const calcInventoryValue = (anArrayofInventoryItem) => {
    let total = 0;
    anArrayofInventoryItem.forEach((item) => {
        total = item.product.price * item.quantity + total;
    });
    return total;
};
console.log(calcInventoryValue(inventory));
