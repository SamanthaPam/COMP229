// Lib
import {halfOf, multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

// Do Something
import doSomething from './doSomething.js';
doSomething();

// Validator
import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag);

// Arrow Functions
import {author} from './arrow.js'
author.printBooks();

// Classes
import {Vehicle, Car} from './classes.js'

let car = new Car('yellow');
     car.toString();
     console.log(car instanceof Car);
     console.log(car instanceof Vehicle);
     console.log(car.color);

// Let and Const
import { iterateVar } from './letandconst.js';
//Let
iterateVar()
//Const
const me = 1;
console.log(me)

// Default, Rest and Spread
import {add, userFriends, userTopFriends} from './defaultrestspread.js'
// Default
console.log(add(1));
console.log(add(1,2));
// Rest
userFriends('User', 'Bob', 'Alice');
// Spread
userTopFriends(...['Alice', 'Bob', 'Michelle']);

// Closures
import {parent} from './closures.js'
const childFN = parent();
childFN();

