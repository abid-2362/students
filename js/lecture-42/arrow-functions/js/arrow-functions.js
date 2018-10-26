let array = [1, 2, 3, 4, 5, 6, 7];
/*
    regular functions (old fashion - ES5)
*/
// Named Functions
function add(a, b) {
    return a + b;
}
// calling the function
add (10, 15); //15

// using as anonymous functions
let oldSquare = array.map(function(element) {
    return element * element;
});
console.log('old method', oldSquare);

/*
  arrow functions (New Fashion - ES6)
*/
// named functions
const multiply = (a, b) => {
    return a * b;
}
// calling the function
multiply(5, 2); //10

// using as anonymous function
let newSquare = array.map(element => element * element);
console.log('new method', newSquare);