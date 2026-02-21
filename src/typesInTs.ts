let drink = "chai";
console.log(drink);

//infering types in TypeScript : just like JavaScript, TypeScript can also infer types based on the assigned value. In this case, since we assigned a string value to the variable 'drink', TypeScript infers that 'drink' is of type string. This means that we can only assign string values to 'drink' in the future, and if we try to assign a different type (like a number or boolean), TypeScript will throw an error.

// annotating types in TypeScript
let age: number = 30;
let name: string = "Sakshi";
let isStudent: boolean = true;

console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
