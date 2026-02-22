const inputElement = document.getElementById(
  "myInput",
) as HTMLInputElement | null; // this is a type assertion, it tells TypeScript that we expect this element to be an HTMLInputElement or null

if (inputElement) {
  // this is a type guard, it checks if inputElement is not null
  inputElement.value = "Hello, World!"; // TypeScript now knows that inputElement is an HTMLInputElement, so we can safely access the value property
} else {
  console.error("Input element not found");
}

//unknown type example
function processValue(value: unknown) {
  if (typeof value === "string") {
    // type guard to check if value is a string
    console.log("String value:", value.toUpperCase()); // TypeScript now knows that value is a string, so we can call string methods
  } else if (typeof value === "number") {
    // type guard to check if value is a number
    console.log("Number value:", value.toFixed(2)); // TypeScript now knows that value is a number, so we can call number methods
  } else {
    console.log("Value is of an unsupported type");
  }
}

processValue("Hello"); // Output: String value: HELLO
processValue(3.14159); // Output: Number value: 3.14
processValue(true); // Output: Value is of an unsupported type

try {
  const result = JSON.parse('{"name": "Alice", "age": 30}'); // result is of type any
  if (
    typeof result === "object" &&
    result !== null &&
    "name" in result &&
    "age" in result
  ) {
    // type guard to check if result is an object with name and age properties
    console.log(`Name: ${result.name}, Age: ${result.age}`); // TypeScript now knows that result has name and age properties
  } else {
    console.error("Parsed value is not a valid person object");
  }
} catch (error) {
  if (error instanceof Error) {
    // type guard to check if error is an instance of Error
    console.error("Error parsing JSON:", error.message);
  } else {
    console.error("An unknown error occurred while parsing JSON");
  }
  console.error("Error parsing JSON:", error);
}
