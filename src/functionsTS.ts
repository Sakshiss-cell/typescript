// data come or dont come but we have to handle it

// and it will return or not return something

// function declaration

function makeChai(flavor: string, price: number, isHot: boolean): string {
  return `Made ${flavor} chai with price ${price} and isHot ${isHot}`;
}

//either predeclare or pass on the way the type definition

const chai1 = makeChai("Masala", 30, true);
console.log(chai1); // Output: Made Masala chai with price 30 and isHot true

// function expression

const makeGingerChai = function (
  flavor: string,
  price: number,
  isHot: boolean,
): string {
  return `Made ${flavor} chai with price ${price} and isHot ${isHot}`;
};

const gingerChai = makeGingerChai("Ginger", 25, true);
console.log(gingerChai); // Output: Made Ginger chai with price 25 and isHot true

// arrow function

const makeLemonChai = (
  flavor: string,
  price: number,
  isHot: boolean,
): string => {
  return `Made ${flavor} chai with price ${price} and isHot ${isHot}`;
};

const lemonChai = makeLemonChai("Lemon", 20, false);
console.log(lemonChai); // Output: Made Lemon chai with price 20 and isHot false

// optional parameters

function makeChaiWithOptionalSugar(
  flavor: string,
  price: number,
  isHot: boolean,
  sugar?: number, // this parameter is optional, it can be passed or not passed
): string {
  if (sugar !== undefined) {
    return `Made ${flavor} chai with price ${price}, isHot ${isHot} and sugar ${sugar}`;
  } else {
    return `Made ${flavor} chai with price ${price} and isHot ${isHot}`;
  }
}

const chaiWithSugar = makeChaiWithOptionalSugar("Masala", 30, true, 2);
console.log(chaiWithSugar); // Output: Made Masala chai with price 30, isHot true and sugar 2

const chaiWithoutSugar = makeChaiWithOptionalSugar("Ginger", 25, true);
console.log(chaiWithoutSugar); // Output: Made Ginger chai with price 25 and isHot true

//void return type not returning anything

function serveChai(flavor: string): void {
  console.log(`Serving ${flavor} chai`);
}

serveChai("Masala"); // Output: Serving Masala chai


