// =====
// MAYBE
// =====
// Maybe is a functor that can safely check for undefined or null value!

class Maybe {
  constructor(val) {
    this.val = val;
  }

  static of(val) {
    return new Maybe(val);
  }

  map(fn) {
    // console.log(fn);
    const isError = this.val === null || this.val === undefined; 
    return !isError ? Maybe.of(fn(this.val)) : Maybe.of(null);
  }

  get() {
    return this.val;
  }
}

const addByTwo = num => num + 2;

// when we're adding 2 to 5, we're getting 7
const maybeWrappedVal1 = Maybe.of(5);
const mappedMaybeWrappedVal1 = maybeWrappedVal1.map(addByTwo);
console.log(mappedMaybeWrappedVal1.get()); // 7

// we have to handle when we have null, we cant add it by two. return null instead!
const maybeWrappedVal2 = Maybe.of(null);
const mappedMaybeWrappedVal2 = maybeWrappedVal2.map(addByTwo);
console.log(mappedMaybeWrappedVal2.get()); // null

// we have to handle when we have undefined, we cant add it by two. return null instead!
const maybeWrappedVal3 = Maybe.of(undefined);
const mappedMaybeWrappedVal3 = maybeWrappedVal3.map(addByTwo);
console.log(mappedMaybeWrappedVal3.get()); // null
