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
    if (anArrayOfMountains.length === 0) {
        return ``;
    }
    //need to give to types to variables, it is to your and other devs benefit to be as explict as possible
    let currentTallest = anArrayOfMountains[0];
    anArrayOfMountains.forEach((mountain) => {
        if (mountain.height > currentTallest.height) {
            currentTallest = mountain;
        }
    });
    return currentTallest.name;
};
console.log(findNameOfTallestMontain(mountains));
//mitch's solutions
//for loop
const findNameOfTallestMontain2 = (anArrayOfMountains) => {
    if (anArrayOfMountains.length === 0) {
        return ``;
    }
    let currentTallest = anArrayOfMountains[0];
    for (let i = 0; i < anArrayOfMountains.length; i++) {
        if (anArrayOfMountains[i].height > currentTallest.height) {
            currentTallest = anArrayOfMountains[i];
        }
    }
    return currentTallest.name;
};
console.log(findNameOfTallestMontain2(mountains));
//for of loop
const findNameOfTallestMontain3 = (anArrayOfMountains) => {
    if (anArrayOfMountains.length === 0) {
        return ``;
    }
    let currentTallest = anArrayOfMountains[0];
    for (let mountain of anArrayOfMountains) {
        if (mountain.height > currentTallest.height) {
            currentTallest = mountain;
        }
    }
    return currentTallest.name;
};
console.log(findNameOfTallestMontain3(mountains));
//reduce method
const findNameOfTallestMontain4 = (mountains) => {
    if (mountains.length === 0) {
        return ``;
    }
    return mountains.reduce((accumulator, currentValue) => {
        return currentValue.height > accumulator.height
            ? currentValue
            : accumulator;
    }).name;
};
console.log(findNameOfTallestMontain4(mountains));
//------------------------------
const calcAverageProductPrice = (anArrayOfProducts) => {
    if (anArrayOfProducts.length === 0) {
        return 0;
    }
    let total = 0;
    anArrayOfProducts.forEach((product) => {
        total += product.price;
        return total;
    });
    return total / anArrayOfProducts.length;
};
console.log(calcAverageProductPrice(products));
//Reduce method
const calcAverageProductPrice2 = (anArrayOfProducts) => {
    if (anArrayOfProducts.length === 0) {
        return 0;
    }
    // don't forget that it automatically pulls out the first object in the array as the accumlator unless an initial value is established, so add the zero bc you can't do math on an object this instead starts the accumulator at 0 instead of the first object
    return (anArrayOfProducts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0) / anArrayOfProducts.length);
};
console.log(calcAverageProductPrice2(products));
//--------------------------------------------------
const calcInventoryValue = (anArrayofInventoryItem) => {
    let total = 0;
    anArrayofInventoryItem.forEach((item) => {
        total += item.product.price * item.quantity;
    });
    return total;
};
console.log(calcInventoryValue(inventory));
const calcInventoryValue2 = (anArrayofInventoryItem) => {
    return anArrayofInventoryItem.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.product.price * currentValue.quantity;
    }, 0);
};
console.log(calcInventoryValue2(inventory));
