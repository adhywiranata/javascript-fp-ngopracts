// Functor is something that we can map over it.

// Simple! in JS, we can "map" over an array, so array is a functor! it is a wrapper
// remember, a "map" must preserve its original structure. so .filter, .forEach, are not mapping!


// 01 - super simple functor using map
console.log([ 2, 4, 6 ].map(x => x + 3)); // [5, 7, 9]

// 02 - creating our own functor wrapper using class

class Wrapper {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Wrapper(fn(this.value));
  }

  get() {
    return this.value;
  }
}

const wrappedVar = new Wrapper(123);
console.log(wrappedVar); // { value: 123 }
console.log(wrappedVar.map(x => x + 3)); // { value: 126 }

// who is the functor? not the Wrapper class, but its instance!

// 03 - creating functor wrapper to map an object!

class ValueMappable {
  constructor(obj) {
    this.obj = obj;
  }

  map(fn) {
    const mapped = {};

    for(const key of Object.keys(this.obj)) {
      mapped[key] = fn(this.obj[key]);
    }

    return new ValueMappable(mapped);
  }

  get() {
    return this.obj;
  }
}

const mappableObj = new ValueMappable({ stock: 10, soldItems: 12, inventory: 5 });

const modifiedMappableObj = mappableObj.map(x => x + 3);

console.log(modifiedMappableObj.get()); // { stock: 13, soldItems: 15, inventory: 8 }

// SUMMARY

/*
so... why functor?!!

it is used to deal with when we have a function to "transform" a value,
let say add by 2.
*/

const addByTwo = num => num + 2;

// array as a functor
const arrToMap = [1, 2, 3];
console.log(arrToMap.map(addByTwo));

// wrapper of number as a functor using functor wrapper
const numToMap = new Wrapper(2);
console.log(numToMap.map(addByTwo).get()); // 4

// wrapper of string as a functor using functor wrapper
const strToMap = new Wrapper('5');
console.log(strToMap.map(addByTwo).get()); // 52

// wrapper of object as a functor using functor wrapper
const objToMap = new ValueMappable({ john: 3, mike: 6 });
console.log(objToMap.map(addByTwo).get()); // { john: 5, mike: 8 }

// BUT! for null, we'll get strange thing!
const nullToMap = new Wrapper(null);
console.log(nullToMap.map(addByTwo).get()); // 2

// so, the above mapping fails to safely use the transform function.
// we need Maybe functor to solve this!!
