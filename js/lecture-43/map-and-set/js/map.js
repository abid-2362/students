var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

/*
  NaN can also be used as a key. Even though every
  NaN is not equal to itself (NaN !== NaN is true),
  the following example works because NaNs are
  indistinguishable from each other:
*/
myMap.set(NaN, 'not a number');

myMap.get(NaN); // "not a number"

var otherNaN = Number('foo');
myMap.get(otherNaN); // "not a number"


myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value);
});

// =====Methods=======
/*
Map.prototype.clear()
Removes all key/value pairs from the Map object.

Map.prototype.delete(key)
Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.

Map.prototype.entries()
Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

Map.prototype.forEach(callbackFn[, thisArg])
Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.

Map.prototype.get(key)
Returns the value associated to the key, or undefined if there is none.

Map.prototype.has(key)
Returns a boolean asserting whether a value has been associated to the key in the Map object or not.

Map.prototype.keys()
Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

Map.prototype.set(key, value)
Sets the value for the key in the Map object. Returns the Map object.

Map.prototype.values()
Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
*/
// ------
// var kvArray = [['key1', 'value1'], ['key2', 'value2']];

// // Use the regular Map constructor to transform a 2D key-value Array into a map
// var myMap = new Map(kvArray);

// myMap.get('key1'); // returns "value1"

// // Use the Array.from function to transform a map into a 2D key-value Array
// console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// // Or use the keys or values iterators and convert them to an array
// console.log(Array.from(myMap.keys())); // Will show ["key1", "key2"]
// ------