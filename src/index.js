import { transform } from 'lodash';
import {compose, pipe} from 'lodash/fp';
import { Map } from  'immutable';

function sayHello(){
    return function(){ // anonymous function karna gapunya nama
        return "hello world";
    }
}

// let fn = sayHello();
// let massage = fn();
let fn = sayHello() //variable
fn() // sama kaya panggil sayHello()
sayHello() //
 
// function great(fnMessage) {
//     console.log(fnMessage());
// }

// greet(sayHello) // function bisa di assign ke fuction lain

// TODO: HIGHER-ORDER FUNCTION
let numbers = [1, 2, 3]
numbers.map(number => number * 2) // ini adalah contoh higher order 

// TODO: FUNCTIONAL COMPOSITION
let input = "  JAVA  ";
const trim = str => str.trim();
const wrapInDiv = str => '<div>${str}</div>'; // template string
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); // ini disebut fuctional composition programming
const transformCompose = compose(wrapInDiv, toLowerCase, trim); // salah satu function dari lodash buat fuction composition
// const transformPipe = pipe(trim, toLowerCase, wrapInDiv); // salah satu function dari lodash buat fuction composition kebalikan dari compose
// transformPipe(input);

// TODO: CURRING

const wrap = type => str => `<${type}> ${str} </${type}>`;
const transformPipe = pipe(trim, toLowerCase, wrap("div"));
// console.log(transformPipe(input));

// TODO: IMMUTABILITY
// TODO: UPDATING OBJECT
const person = { name: "Andri"};
// const updated = Object.assign({}, person, { name: "gunawan", age: 24 });
// const updated = {...person}; // spread opreator
// console.log(updated);

const country = {
    name: "andri",
    address: {
        country: "ID",
        city: "JAKARTA"
    }
};
// kode ini bakal munculin problem dimana city nya bakal ikut ke ubah
// const updateCountry = {...country, name: "gunawan"};
// updateCountry.address.city = "BANDUNG";

// fixing proble di atas
const updateCountry = {
    ...country,
    address: {
        ...country.address,
        city: "GARUT"
    },     
    name: "gunawan"
};

// console.log(country);

// TODO: UPDATING ARRAY
const arrayNumbers   = [1, 2, 3];
const index     = arrayNumbers.indexOf(2);  

// Adding
const added = [
    ...arrayNumbers.slice(0, index),
    4,
    ...arrayNumbers.slice(index, )
];

// Removing
const removed = arrayNumbers.filter(n => n !== 2);
console.log(removed);

// Updating
const updated = arrayNumbers.map(n => (n === 2 ? 20 : n));
console.log(updated);