function makechai(order: { type: string; sugar: number; price: number }) {
  console.log(`Making chai of type ${order.type} with price ${order.price}`);
}

function servechai(order: { type: string; sugar: number; price: number }) {
  console.log(
    `Serving chai of type ${order.type} with sugar ${order.sugar} and price ${order.price}`,
  );
}

// if u observe the signatures of both the functions, they are same. So we can create an interface for the order and use it in both the functions.

type chaiOrder = {
  type: string;
  sugar: number;
  price: number;
};

function makeChai(order: chaiOrder) {
  console.log(`Making chai of type ${order.type} with price ${order.price}`);
}

function servChai(order: chaiOrder) {
  console.log(
    `Serving chai of type ${order.type} with sugar ${order.sugar} and price ${order.price}`,
  );
}

const order1: chaiOrder = {
  type: "Masala Chai",
  sugar: 2,
  price: 30,
};

makeChai(order1);
servChai(order1);

//// but type won;t work with classes, for that we need to use interfaces

interface ChaiOrder {
  type: string;
  sugar: number;
  price: number;
}

function makeChai2(order: ChaiOrder) {
  console.log(`Making chai of type ${order.type} with price ${order.price}`);
}

function servChai2(order: ChaiOrder) {
  console.log(
    `Serving chai of type ${order.type} with sugar ${order.sugar} and price ${order.price}`,
  );
}

const order2: ChaiOrder = {
  type: "Ginger Chai",
  sugar: 1,
  price: 25,
};

makeChai2(order2);
servChai2(order2);


// we can also use interfaces to define the shape of objects that are used in classes

interface Chai {
  type: string;
  sugar: number;
  price: number;
}

class ChaiMaker {
  makeChai(order: Chai) {
    console.log(`Making chai of type ${order.type} with price ${order.price}`);
  }
}

class ChaiServer {
  serveChai(order: Chai) {
    console.log(
      `Serving chai of type ${order.type} with sugar ${order.sugar} and price ${order.price}`,
    );
  }
}

const chaiOrder: Chai = {
  type: "Cardamom Chai",
  sugar: 3,
  price: 35,
};

const maker = new ChaiMaker();
maker.makeChai(chaiOrder);

const server = new ChaiServer();
server.serveChai(chaiOrder);        



// where it fails 