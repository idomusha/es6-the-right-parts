# ES6: The Right Parts | Kyle Simpson

https://frontendmasters.com/courses/es6-right-parts/

## Course Description

Get comfortable with the latest evolutions of this great JavaScript language. By coding along with Kyle in this course you will learn: To use ‘let’ and ‘const’, Destructuring, template literals, Iterators and generators. Plus learn arrow functions, default parameters, rest and spread operators, computed and concise properties and methods. Learn to use these new ES6 JavaScript language features to write cleaner, more productive, and more readable programs!

## Notes

Communicate  through your code. Remember that your code is read by other guys. Use  good parts. Do not confuse using different styles in the same codebase.  Be reasonable with code you write. Make it readable.

Don’t use arrow function.

Use **let** when you would like to mark in code where it belongs.

Declare variable as close to place where is used as possible.

**const** prevents vairable to be reassigned. Value can be mutated. Use Object.freeze to make value immutable.

Use constant eg. const PI = 3.14

#### Do not use || for setting default values

```
x = x || 50; // bad
x = x !== undefined ? x : 50; // good
function foo(x = 1) {} // will set x to 1 when needed
```

#### … operator

```
function foo(…arg) // gatering parameters
function foo(x, …arg) // gatering parameters and getting first parameter assigned to x
bar(…arg) // when bar is function …arg will spread parameters
bar(42, …arg) // will add 42 as first parameter
var x = [1,2,3],
    y = [4,5],
    x = [0, ...x,...y,6];
foo(...[0,...x,...y,6]) // or
foo(0,...x,...y,6)
function foo(x,y,...rest) {
  return rest;
}
var a = [1,2,3],
    b = [4,5,6];
foo(...a, ...b);
```

<http://babeljs.io> JS compiler

#### **Destructuring** in JavaScript is the process of extracting values out of an array or object into declared variables.

```
function foo() {
  return [1,2,3, [4,5,6] ];
}
var a,b,c,d,args;
[
    a,     // 1
    b,     // 2
    c,     // 3,
    d = 4, // default value 4
    ...arg // gather all of the rest values
] = foo() || []; // in case foo() returns null or undefined use || []
var a,b;
var x = [ a,b ] = foo();
x; // [1,2,3, [4,5,6] ]
// channing destructing
var a,b,vals,c,d;
[
  ,,,
  [c, d]
] =
[ a, b, ...vals ] = foo();
// obejct destructing
var tmp = foo();
var {
  a:a,
  b: X = 42, // assign b to X, X is 42 by default
  c:c, // property name is always on the left
  d: Z, // assign d to Z
  d: { // destructing into the object
    e
  } = {}, // empty object by default
  d: [ // destructing into table
    e
  ] = [] // default value
} = foo() || {};
// destructing tables
function foo( [a,b,c] = []) {
  console.log( a, b, c );
}
foo( [1,2,3] );
// destructing objects
function foo( {a,b,c} = {} ) {
  console.log( a, b, c );
}
foo( {
  a: 1,
  b: 2,
  c: 3
} );
```

“Use new lines, and white spaces, and indentation liberally” — improves readability of the code.

#### **Concise properties, methods and generators**

```
var a = 1;
var c = "hello";
var obj = {
  a, // concise property, same as a=a
  b(){}, // concise method, same as b = function(){}, be is points to   function
  [c]: 42; // computed properties, same as obj[c] = 42;
  [c+"fn"]() { },
  *foo(){ }, // concise generator
  *[c+"gn"]() { } // concise computed generator
}
```

#### **Template Strings as an alternative to string concatenation**

```
function foo(strings,...values) {
  var str = "";
  for (var i=0; i<strings.length; i++) {
    if (i > 0) {
      str += values[i-1];
    }
    str += strings[i];
  }
  return str;
}
var name = "Kyle",
  orderNumber = "123",
  total = 319.7;
var msg = foo`Hello, ${name} + , your
order (#${orderNumber}) was $${total}.`;
```

#### **Symbol — the 7th primitve type in JS**

```
var x = Symbol(' whatever description ');
var obj = {
  id: 42,
  [x]: 'shhhh this is secret'
};
obj[x] = 'shhh this is secret!';
Symbol.iterator
Symbol.toStringTag
Symbol.toPrimitive
Symbol.isConcatSpreadable
Symbol.iterator
var arr = [1,2,3];
var it = arr[Symbol.iterator]();
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true } // done true !
var str = "Hello";
for (var v of str ){
  console.log(v);
}
[ ...str ] //  ["H", "e", "l", "l", "o"]
[ x, y ] = str;
[ x, y ] = [ ...str ];
[ x, y, ...rest ] = [ ...str ];
```

#### Creating a custom iterator

```
var obj = {
  [Symbol.iterator]() {
     var idx = this.start, en = this.end;
     var it = {
       next: () => {
         if (idx <= en) {
           var v = this.values[idx];
           idx++;
           return { value: v, done: false };
         } else {
           return { done: true };
         }
       }
     };
     return it;
  },
  values: [ 2,4,6,8,12,14,16,18,20,22,24,26,28 ],
  start: 4,
  end: 13
};
var vals = [ ...obj ];
```

#### **Generators**

```
function *main() {
  console.log( "hello" );
  yield 9;
  console.log("world");
  yield 10;
}
var it = main();
it.next();
it.next();
for (var v of main()) {
  console.log( v );
}
var obj = {
  *[Symbol.iterator]() {
    for (var i = this.start; i<=this.end; i++) {
      yield this.values[i];
    }
  },
  values: [ 2,4,6,8,12,14,16,18,20,22,24,26,28 ],
  start: 4,
  end: 13
};
var vals = [ ...obj ]; // automatically consumes a generator
```

#### Native range using Symbol.iterator

```
Number.prototype[Symbol.iterator] = function*() {
  for (var i=0; i<=this; i++) {
    yield i;
  }
};
console.log([...8]); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
```

_________



#### by [Krzysztof](https://blog.flowlab.no/@flowlab.no)

https://blog.flowlab.no/es6-the-right-parts-863bdd711bab