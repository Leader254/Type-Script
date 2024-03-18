let message: string = 'Hello Typescript!';

let heading1 = document.createElement('h1');
heading1.textContent = message;

document.body.appendChild(heading1);

function getProduct(id) : Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} cost $${price}`);
}
const product = getProduct(1);
showProduct(product.name, product.price)
console.log(`The Product ${product.name} cost $${product.price}`);

const heading = document.querySelector('h1');
// type inference and type annotation
// in type inference, TS guesses the type while type annotation, you explicitly tell typescript the type
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
function decrement(counter: number): void {
    counter--;
}
function increment(counter: number) {
    return counter++;
}

let items = [1,2,3, 'Hello']

document.addEventListener('click', (event) => {
    console.log(event.button);
})

// number type in typescript are either floating point or bigint

// booleans in typescript
const pending: boolean = true;
const notPending = !pending;

const hasError: boolean = false;
const completed: boolean = true;

let result1 = completed && hasError;
console.log(result1);

result1 = completed || hasError;
console.log(result1);

// Object in TS
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}

// arrays in TS
// declaring an array that holds values of a specific type use:
let arrayType: type[];
let skills: string[] = [];

skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push("Problem Solving", "Programming", "Communication");

console.log(skills);


enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month){
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(9));

function add1(a: number | string, b: number | string){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }

    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Parameter must be an integer')
}

let result = add1(1, 3);
console.log(result);

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (discount > 10) {
    discount = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)

// Typescript functions
function add2(a: number, b: number): number {
    return a + b;
}

let multiply1 = function(a: number, b: number): number{
    return a * b;
}

// optional parameters
// The optional parameters must appear after the required params in the list
function multiply(x: number, y: number, z?: number) : number {
    if(typeof z !== 'undefined') {
        return x * y * z;
    }
    return x * y;
}

let res = multiply(10, 12);
console.log(res);

function add3(a: number | string, b: number | string): number | string {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a + b;
    }
}

// function overload
function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a: any, b: any){
    return a + b;
}

let result = add3(5,2)

interface Car {
    brand: string;
    model: string;
    year: number;
}

function getCar(): Car {
    return { brand: "Toyota", model: "Corolla", year: 2020 };
}

const car = getCar();
console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);


// TS Classes
function Person(ssn, firstName, lastName){
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

// prototype property allows you to add properties and methods to an object
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());

class Car{
    model: string;
    year: number;
    origin: string;

    constructor(model: string, year: number, origin: string) {
        this.model = model;
        this.year = year;
        this.origin = origin;
    }
    getFullModelAndOrigin(): string{
        return `This ${this.model} is from ${this.origin}`
    }
}

let car = new Car('Toyota', 2022, 'Japan');
console.log(car.getFullModelAndOrigin());

// interfaces
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}
function getFullName(person: Person): string {
    if(person.middleName){
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }

    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: "John",
    middleName: "Sam",
    lastName: "Doe",
}

console.log(getFullName(person));

interface TeslaModelS {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure: () => number;
    getRemCharging: () => number;
}

function buildTeslaModels(teslaObj: TeslaModelS){
    return teslaObj;
}

let model = buildTeslaModels({
    length: 196,
    width: 86,
    wheelbase: 116,
    seatingCapacity: 4,
    getTyrePressure: function () {
        let tyrePressure = 20 
        return tyrePressure
    },
    getRemCharging: function () {
        let remCharging = 20 
        return remCharging
    }
})

console.log(model);