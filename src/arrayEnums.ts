const chaiflavors: string[] = ["masaala", "ginger", "lemon"];
const chaiPrices: number[] = [30, 25, 20];

const ratings: Array<number> = [4.5, 4.0, 3.5];

// array of objects

type Chai = {
  name: string;
  type: string;
  price: number;
  isHot: boolean;
};

const chaiMenu: Chai[] = [
  {
    name: "Masala Chai",
    type: "masala",
    price: 30,
    isHot: true,
  },
  {
    name: "Ginger Chai",
    type: "ginger",
    price: 25,
    isHot: true,
  },
  {
    name: "Lemon Chai",
    type: "lemon",
    price: 20,
    isHot: false,
  },
];

//readonly array

const readonlyChaiFlavors: readonly string[] = ["masala", "ginger", "lemon"];
// readonlyChaiFlavors.push("cardamom"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// readonlyChaiFlavors[0] = "cardamom"; // Error: Index signature in type 'readonly string[]' only permits reading.

// tuple
const chaiTuple: [string, number, boolean] = ["Masala", 30, true];
// chaiTuple.push("Ginger"); // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
// chaiTuple[0] = "Ginger"; // Error: Cannot assign to '0' because it is a read-only property.

// array destructuring

const [firstFlavor, secondFlavor, thirdFlavor] = chaiflavors;
console.log(firstFlavor); // Output: masala
console.log(secondFlavor); // Output: ginger
console.log(thirdFlavor); // Output: lemon

// nested array destructuring

const chaiDetails: [string, number, boolean][] = [
  ["Masala", 30, true],
  ["Ginger", 25, true],
  ["Lemon", 20, false],
];

for (const [flavor, price, isHot] of chaiDetails) {
  console.log(`Flavor: ${flavor}, Price: ${price}, Is Hot: ${isHot}`);
}

//multidimensional array

const chaiMatrix: number[][] = [
  [30, 25, 20],
  [4.5, 4.0, 3.5],
];

console.log(chaiMatrix[0]?.[0]); // Output: 30
console.log(chaiMatrix[1]?.[1]); // Output: 4.0
