'use strict'
// mixins means that we're composing object using compositions.

const objA = {
  a: 'a',
  b: 'b',
};

const objB = {
  c: true,
  d: 5,
};

const composedObj = { ...objA, ...objB };

console.log(composedObj);