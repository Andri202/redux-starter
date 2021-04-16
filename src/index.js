import { transform } from 'lodash';
import {compose, pipe} from 'lodash/fp';

function sayHello(){
    return function(){ // anonymous function karna gapunya nama
        return "hello world";
    }
}

// let fn = sayHello();
let massage = fn();
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
transformPipe(input);

// TODO: CURRING

const wrap = type => str => `<${type}> ${str} </${type}>`;
const transformPipe = pipe(trim, toLowerCase, wrap("div"));
// console.log(transformPipe(input));
