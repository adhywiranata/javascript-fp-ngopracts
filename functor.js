// Functor is something that we can map over it.

// Simple! in JS, we can map over an array, so array is a functor! it is a wrapper

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

    return new ValueMappable(mapped).obj;
  }
}

const mappableObj = new ValueMappable({ stock: 10, soldItems: 12, inventory: 5 });

const modifiedMappableObj = mappableObj.map(x => x + 3);

console.log(modifiedMappableObj); // { stock: 13, soldItems: 15, inventory: 8 }