const chai ={
    name:"masala chai",
    price:30,
    isHot:true
}

// here its inferred that chai is an object with name, price and isHot properties, but we can also explicitly define the type of chai using an interface

// {
//     name:string;
//     price:number;
//     isHot:boolean;

// }



// Declaring object types

// we can declare the type of an object using an interface or a type alias

// using type alias
type ChaiType = {
    name:string;
    price:number;
    isHot:boolean;
}

const chai2:ChaiType = {
    name:"ginger chai",
    price:25,
    isHot:true
}


// structural typing

type cup={size:string}

let smallCup:cup={size:"small"}

let mediumCup={size:"medium", color:"white"} 

let largeCup:cup=mediumCup // this is allowed because mediumCup has all the properties of cup, even though it has an extra property color, it is still compatible with the cup type

// this is called structural typing, TypeScript checks if the structure of the object matches the expected type, rather than checking if the object is an instance of a specific class or interface



//data type splitting

type Item ={
    name:string
    price:number
}


type Food={
    calories:number,
    item:Item
}

const pizza:Food={
    calories:300,
    item:{
        name:"Pizza",
        price:200
    }
}

console.log(pizza.item.name) // Output: Pizza



//partial type example

interface User {
    name: string;
    age: number;
    email: string;
}

function updateUser(user: User, updates: Partial<User>) {
    return { ...user, ...updates };
}

const user1: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}
const updatedUser = updateUser(user1, { age: 31 }); // we can update only the age property, the other properties will remain unchanged

console.log(updatedUser); // Output: { name: 'Alice', age: 31, email: '


 