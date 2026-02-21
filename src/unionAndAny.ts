let subs = 10;

//union types in TypeScript : union types allow us to specify that a variable can hold values of multiple types. In this case, we can declare a variable that can be either a number or a string using the union type syntax (number | string). This means that the variable can hold either a number or a string value, and TypeScript will allow both types without throwing an error.

let subsOrChannelName: number | string = subs;
console.log(subsOrChannelName);

subsOrChannelName = "Sakshi's Channel";
console.log(subsOrChannelName);

// literal types in TypeScript : literal types allow us to specify that a variable can only hold a specific set of values. In this case, we can declare a variable that can only be one of the three string literals: "window", "aisle", or "middle". This means that the variable can only hold one of these specific string values, and if we try to assign a different value, TypeScript will throw an error.git status

let airlineSeat: "window" | "aisle" | "middle" = "window";
airlineSeat = "aisle"; // valid
console.log(airlineSeat);

airlineSeat = "aisle"; // valid
console.log(airlineSeat);

//any type in TypeScript : the any type is a special type that can hold values of any type. It essentially turns off type checking for that variable, allowing you to assign values of any type without causing a TypeScript error. However, using any can lead to potential issues as it bypasses the benefits of static typing, so it's generally recommended to use it sparingly and only when necessary.

let randomValue: any = 42;
console.log(randomValue);

randomValue = "Now I'm a string!";
console.log(randomValue);

randomValue = { name: "Sakshi", age: 30 };
console.log(randomValue);
