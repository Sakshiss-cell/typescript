    // type narrowing example
function printLength(value: string | number) {
  if (typeof value === "string") {
    // type guard to check if value is a string
    console.log("Length of string:", value.length); // TypeScript now knows that value is a string, so we can access the length property
  } else {
    // TypeScript now knows that value is a number, so we can call number methods
    console.log("Value is a number:", value.toFixed(2));
  }
}

printLength("Hello, World!"); // Output: Length of string: 13
printLength(3.14159); // Output: Value is a number: 3.14